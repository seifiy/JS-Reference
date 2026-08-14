/* Modern JS Reference — application layer */
(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const state = { currentId: REF_DATA[0]?.id || '', query: '', filtered: false };
  const STORAGE_THEME = 'js-ref-theme';
  const STORAGE_CATEGORIES = 'js-ref-categories';

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  const normalize = value => String(value).toLowerCase().replace(/\s+/g, ' ').trim();
  const textFromHtml = html => {
    const box = document.createElement('div');
    box.innerHTML = html;
    return box.textContent || '';
  };

  function buildSidebar() {
    const nav = $('#sidebarNav');
    const sections = new Map();
    REF_DATA.forEach(item => {
      const key = item.section || 'Other';
      if (!sections.has(key)) sections.set(key, []);
      sections.get(key).push(item);
    });

    const saved = JSON.parse(localStorage.getItem(STORAGE_CATEGORIES) || '{}');
    nav.innerHTML = [...sections.entries()].map(([section, items]) => `
      <div class="nav-section" data-section="${escapeHtml(section)}">
        <button class="nav-section-title" type="button" aria-expanded="${saved[section] !== false}">
          <span><i class="fas fa-chevron-down section-chevron"></i>${escapeHtml(section)}</span>
          <small>${items.length}</small>
        </button>
        <div class="nav-items" ${saved[section] === false ? 'hidden' : ''}>
          ${items.map(item => `
            <a href="#${encodeURIComponent(item.id)}" data-id="${escapeHtml(item.id)}" class="nav-link">
              <i class="fas ${escapeHtml(item.icon || 'fa-file')}"></i><span>${escapeHtml(item.title)}</span>
            </a>`).join('')}
        </div>
      </div>`).join('');

    $$('.nav-section-title', nav).forEach(button => {
      button.addEventListener('click', () => {
        const section = button.closest('.nav-section');
        const items = $('.nav-items', section);
        const isOpen = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!isOpen));
        items.hidden = isOpen;
        const key = section.dataset.section;
        const current = JSON.parse(localStorage.getItem(STORAGE_CATEGORIES) || '{}');
        current[key] = !isOpen;
        localStorage.setItem(STORAGE_CATEGORIES, JSON.stringify(current));
      });
    });

    $$('.nav-link', nav).forEach(link => link.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(link.dataset.id);
    }));
  }

  function buildContent() {
    const container = $('#contentContainer');
    container.innerHTML = REF_DATA.map((item, index) => `
      <section class="content-section ${index === 0 ? 'active' : ''}" id="section-${escapeHtml(item.id)}" data-topic="${escapeHtml(item.id)}">
        ${item.content}
        <div class="topic-navigation" data-nav-for="${escapeHtml(item.id)}"></div>
      </section>`).join('');

    setupCodeTools();
    buildTopicNavigation();
  }

  function buildTopicNavigation() {
    REF_DATA.forEach((item, index) => {
      const target = $(`[data-nav-for="${CSS.escape(item.id)}"]`);
      if (!target) return;
      const prev = REF_DATA[index - 1];
      const next = REF_DATA[index + 1];
      target.innerHTML = `
        ${prev ? `<button class="topic-nav-btn prev" data-id="${escapeHtml(prev.id)}"><i class="fas fa-arrow-left"></i><span><small>Previous</small>${escapeHtml(prev.title)}</span></button>` : '<span></span>'}
        ${next ? `<button class="topic-nav-btn next" data-id="${escapeHtml(next.id)}"><span><small>Next</small>${escapeHtml(next.title)}</span><i class="fas fa-arrow-right"></i></button>` : '<span></span>'}`;
      $$('.topic-nav-btn', target).forEach(btn => btn.addEventListener('click', () => navigateTo(btn.dataset.id)));
    });
  }

  function navigateTo(id) {
    const item = REF_DATA.find(d => d.id === id);
    if (!item) return;
    state.currentId = id;
    state.filtered = false;
    $('#searchResults').hidden = true;
    $('#contentContainer').hidden = false;
    $('#searchMeta').textContent = '';

    $$('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.id === id));
    $$('.content-section').forEach(section => section.classList.toggle('active', section.dataset.topic === id));
    $('#pageTitle').innerHTML = `${escapeHtml(item.title)} <span>${escapeHtml(item.section || 'Reference')}</span>`;
    history.pushState({ id }, '', `#${encodeURIComponent(id)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeSidebar();
  }

  function restoreFromHash(push = false) {
    const id = decodeURIComponent(location.hash.slice(1));
    if (id && REF_DATA.some(item => item.id === id)) {
      if (push) navigateTo(id); else {
        state.currentId = id;
        $$('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.id === id));
        $$('.content-section').forEach(section => section.classList.toggle('active', section.dataset.topic === id));
        const item = REF_DATA.find(d => d.id === id);
        $('#pageTitle').innerHTML = `${escapeHtml(item.title)} <span>${escapeHtml(item.section || 'Reference')}</span>`;
      }
    }
  }

  function performSearch(query) {
    const q = normalize(query);
    state.query = q;
    const results = q ? REF_DATA.map(item => {
      const title = normalize(item.title);
      const section = normalize(item.section || '');
      const subtitle = normalize(textFromHtml(item.content).slice(0, 400));
      const body = normalize(textFromHtml(item.content));
      let score = 0;
      if (title === q) score += 100;
      if (title.includes(q)) score += 50;
      if (section.includes(q)) score += 25;
      if (subtitle.includes(q)) score += 10;
      if (body.includes(q)) score += 5;
      return score ? { item, score, body } : null;
    }).filter(Boolean).sort((a,b) => b.score - a.score) : [];

    const resultsBox = $('#searchResults');
    const container = $('#contentContainer');
    if (!q) {
      resultsBox.hidden = true;
      container.hidden = false;
      $('#searchMeta').textContent = '';
      return;
    }

    container.hidden = true;
    resultsBox.hidden = false;
    $('#searchMeta').textContent = `${results.length} result${results.length === 1 ? '' : 's'}`;

    resultsBox.innerHTML = results.length ? results.map(({item, body}) => {
      const index = body.indexOf(q);
      const start = Math.max(0, index - 70);
      const snippet = body.slice(start, start + 190);
      const highlighted = escapeHtml(snippet).replace(new RegExp(`(${escapeRegExp(q)})`, 'ig'), '<mark>$1</mark>');
      return `<button class="search-result" data-id="${escapeHtml(item.id)}">
        <div class="result-top"><span class="result-title">${escapeHtml(item.title)}</span><span class="result-section">${escapeHtml(item.section || 'Reference')}</span></div>
        <p>${index >= 0 ? highlighted : escapeHtml(body.slice(0,190))}</p>
      </button>`;
    }).join('') : `<div class="no-results"><i class="fas fa-magnifying-glass"></i><h2>No results</h2><p>Try a topic, keyword, method, API, or concept.</p></div>`;

    $$('.search-result', resultsBox).forEach(result => result.addEventListener('click', () => navigateTo(result.dataset.id)));
  }

  function escapeRegExp(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function setupCodeTools() {
    $$('.code-block').forEach((block, index) => {
      const pre = $('pre', block);
      if (!pre) return;
      const header = $('.code-header', block);
      if (!header) return;
      if (!$('.code-actions', header)) {
        const actions = document.createElement('span');
        actions.className = 'code-actions';
        actions.innerHTML = `<button class="code-copy copy-btn" type="button" title="Copy code"><i class="fas fa-copy"></i></button><button class="code-run" type="button" title="Run example"><i class="fas fa-play"></i></button>`;
        header.appendChild(actions);
        $('.code-copy', actions).addEventListener('click', () => copyCode(pre, $('.code-copy', actions)));
        $('.code-run', actions).addEventListener('click', () => openRunner(pre.textContent || '', header.querySelector('span')?.textContent || `Example ${index + 1}`));
      }
    });
  }

  async function copyCode(pre, button) {
    const text = pre.textContent || '';
    try { await navigator.clipboard.writeText(text); }
    catch { const range = document.createRange(); range.selectNodeContents(pre); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(range); document.execCommand('copy'); sel.removeAllRanges(); }
    button.innerHTML = '<i class="fas fa-check"></i>';
    button.classList.add('copied');
    setTimeout(() => { button.innerHTML = '<i class="fas fa-copy"></i>'; button.classList.remove('copied'); }, 1500);
  }

  let runnerTimer;
  function openRunner(code, title) {
    $('#runTitle').textContent = `Run: ${title}`;
    $('#runCode').textContent = code;
    $('#runOutput').textContent = 'Click Run to execute the example.';
    $('#runDialog').showModal();
    $('#executeRun').onclick = () => executeInSandbox(code);
  }

  function executeInSandbox(code) {
    clearTimeout(runnerTimer);
    $('#runOutput').textContent = 'Running…';
    const iframe = document.createElement('iframe');
    iframe.sandbox.add('allow-scripts');
    iframe.style.display = 'none';
    const payload = JSON.stringify(code).replace(/</g, '\\u003c');
    iframe.srcdoc = `<!doctype html><html><body><script>
      const send=(type,value)=>parent.postMessage({source:'js-ref-runner',type,value:String(value)},'*');
      console.log=(...a)=>send('log',a.map(x=>typeof x==='object'?JSON.stringify(x):x).join(' '));
      console.warn=(...a)=>send('warn',a.join(' '));
      console.error=(...a)=>send('error',a.join(' '));
      window.onerror=(m)=>send('error',m);
      try { new Function(${payload})(); } catch(e) { send('error', e.name+': '+e.message); }
    <\/script></body></html>`;
    document.body.appendChild(iframe);
    const lines = [];
    const listener = e => {
      if (e.source !== iframe.contentWindow || e.data?.source !== 'js-ref-runner') return;
      lines.push(`[${e.data.type}] ${e.data.value}`);
      $('#runOutput').textContent = lines.join('\n');
    };
    window.addEventListener('message', listener);
    runnerTimer = setTimeout(() => {
      window.removeEventListener('message', listener);
      iframe.remove();
      if (!lines.length) $('#runOutput').textContent = 'Finished with no console output.';
    }, 1800);
  }

  function closeRunner() { $('#runDialog').close(); }

  function setupSidebar() {
    const sidebar = $('#sidebar'), overlay = $('#sidebarOverlay'), toggle = $('#sidebarToggle');
    window.toggleSidebar = () => {
      const open = sidebar.classList.toggle('open');
      overlay.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    window.closeSidebar = () => { sidebar.classList.remove('open'); overlay.classList.remove('active'); toggle.setAttribute('aria-expanded','false'); };
    toggle.addEventListener('click', window.toggleSidebar);
    overlay.addEventListener('click', window.closeSidebar);
  }

  function setupTheme() {
    const button = $('#themeToggle');
    const saved = localStorage.getItem(STORAGE_THEME) || 'dark';
    document.documentElement.dataset.theme = saved;
    const update = () => {
      const light = document.documentElement.dataset.theme === 'light';
      button.innerHTML = light ? '<i class="fas fa-moon"></i><span>Dark</span>' : '<i class="fas fa-sun"></i><span>Light</span>';
      button.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    };
    update();
    button.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      localStorage.setItem(STORAGE_THEME, next);
      update();
    });
  }

  function setupEvents() {
    $('#searchInput').addEventListener('input', e => performSearch(e.target.value));
    $('#scrollTopBtn').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
    $('#cancelRun').addEventListener('click', closeRunner);
    $('#closeRun').addEventListener('click', closeRunner);
    $('#runDialog').addEventListener('click', e => { if (e.target === $('#runDialog')) closeRunner(); });
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); $('#searchInput').focus(); $('#searchInput').select(); }
      if (e.key === 'Escape') { closeSidebar(); if ($('#runDialog').open) closeRunner(); }
    });
    window.addEventListener('popstate', () => restoreFromHash(false));
    window.addEventListener('hashchange', () => restoreFromHash(false));
    window.addEventListener('resize', () => { if (window.innerWidth > 900) closeSidebar(); });
  }

  function init() {
    buildSidebar();
    buildContent();
    setupSidebar();
    setupTheme();
    setupEvents();
    restoreFromHash(false);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
