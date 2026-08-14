const REF_DATA = [{
            id: 'introduction',
            icon: 'fa-book-open',
            title: 'Introduction',
            section: 'Basics',
            content: `
            <h1>JavaScript</h1>
            <div class="subtitle">A high-level, dynamic, interpreted programming language.</div>
            <p>JavaScript (JS) is a lightweight, interpreted, object-oriented language with first-class functions. It is best known as the scripting language for web pages, but is also used in many non-browser environments such as Node.js.</p>

            <h2>Key Characteristics</h2>
            <ul>
              <li><strong>Dynamic typing:</strong> Variables are not bound to a type. A variable can hold a string, then a number, etc.</li>
              <li><strong>Prototype-based inheritance:</strong> Objects can inherit directly from other objects, offering flexible delegation.</li>
              <li><strong>First-class functions:</strong> Functions are values that can be assigned, passed as arguments, and returned from other functions.</li>
              <li><strong>Event-driven & asynchronous:</strong> Supports non-blocking I/O via callbacks, promises, async/await, and the event loop.</li>
              <li><strong>Multi-paradigm:</strong> Supports imperative, functional, and object-oriented styles.</li>
            </ul>

            <h2>History & Evolution</h2>
            <p>Created by Brendan Eich in 1995 in just 10 days, JavaScript was initially named <em>Mocha</em>, then <em>LiveScript</em>, and finally <em>JavaScript</em> to leverage Java's popularity. It became an ECMAScript standard (ECMA-262) in 1997. Major versions include ES5 (2009), ES6/ES2015 (which introduced classes, modules, arrow functions, let/const, etc.), and annual updates since then.</p>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Did you know?</div>
              <p>JavaScript runs on nearly every platform: browsers, servers (Node.js, Deno), mobile apps (React Native, NativeScript), desktop apps (Electron), and even embedded systems.</p>
            </div>
          `
        }, {
            id: 'variables',
            icon: 'fa-code',
            title: 'Variables',
            section: 'Basics',
            content: `
            <h1>Variables</h1>
            <div class="subtitle">var, let, const — storing values in JavaScript.</div>

            <h2>Declaration Keywords</h2>
            <div class="code-block">
              <div class="code-header"><span>var · let · const</span></div>
              <pre><span class="keyword">var</span> old = <span class="string">'function-scoped'</span>;
            <span class="keyword">let</span> modern = <span class="string">'block-scoped'</span>;
            <span class="keyword">const</span> constant = <span class="string">'cannot be reassigned'</span>;</pre>
            </div>

            <h3>var</h3>
            <p><strong>Function-scoped</strong> — accessible anywhere in the function it is declared in (or globally if outside a function). It is <strong>hoisted</strong> to the top of its scope and initialized with <code>undefined</code>, so you can reference it before declaration without a ReferenceError (but you'll get <code>undefined</code>).</p>
            <div class="code-block">
              <div class="code-header"><span>var hoisting</span></div>
              <pre><span class="keyword">console</span>.log(x); <span class="comment">// undefined (not an error)</span>
            <span class="keyword">var</span> x = <span class="number">5</span>;</pre>
            </div>
            <p><code>var</code> does not have block scope; it ignores <code>{ }</code> blocks. This can lead to unexpected bugs, which is why <code>let</code> and <code>const</code> are preferred.</p>

            <h3>let</h3>
            <p><strong>Block-scoped</strong> — accessible only within the nearest block <code>{ }</code>. It is also hoisted but not initialized; accessing it before declaration results in a <code>ReferenceError</code> due to the <strong>Temporal Dead Zone (TDZ)</strong>.</p>
            <div class="code-block">
              <div class="code-header"><span>let TDZ</span></div>
              <pre><span class="keyword">console</span>.log(y); <span class="comment">// ReferenceError: Cannot access 'y' before initialization</span>
            <span class="keyword">let</span> y = <span class="number">10</span>;</pre>
            </div>
            <p><code>let</code> can be reassigned, but you cannot redeclare it in the same scope.</p>

            <h3>const</h3>
            <p><strong>Block-scoped</strong> like <code>let</code>, but must be initialized at declaration and cannot be reassigned. However, if the value is an object or array, its properties or elements can still be mutated (the binding is constant, not the value).</p>
            <div class="code-block">
              <div class="code-header"><span>const</span></div>
              <pre><span class="keyword">const</span> obj = { name: <span class="string">'Alice'</span> };
            obj.name = <span class="string">'Bob'</span>; <span class="comment">// allowed</span>
            obj = {}; <span class="comment">// TypeError: Assignment to constant variable</span></pre>
            </div>

            <div class="callout success">
              <div class="callout-title"><i class="fas fa-check-circle"></i> Best Practice</div>
              <p>Use <code>const</code> by default. Only use <code>let</code> when you need to reassign. Avoid <code>var</code> in modern code entirely, as it can cause subtle scoping issues.</p>
            </div>
          `
        }, {
            id: 'datatypes',
            icon: 'fa-database',
            title: 'Data Types',
            section: 'Basics',
            content: `
            <h1>Data Types</h1>
            <div class="subtitle">JavaScript has eight basic data types.</div>

            <h2>Primitive Types</h2>
            <ul>
              <li><strong>String</strong> — textual data: <code>'hello'</code>, <code>"world"</code>, <code>\`template\`</code>. Immutable.</li>
              <li><strong>Number</strong> — 64-bit floating-point (IEEE 754) for integers and decimals: <code>42</code>, <code>3.14</code>, <code>NaN</code>, <code>Infinity</code>, <code>-0</code>.</li>
              <li><strong>BigInt</strong> — integers larger than 2⁵³−1: <code>9007199254740991n</code> or <code>BigInt('123')</code>.</li>
              <li><strong>Boolean</strong> — logical: <code>true</code> or <code>false</code>.</li>
              <li><strong>Undefined</strong> — uninitialized value: <code>undefined</code>.</li>
              <li><strong>Null</strong> — intentional absence of any object value: <code>null</code>.</li>
              <li><strong>Symbol</strong> — unique &amp; immutable primitive, often used as object property keys: <code>Symbol('id')</code>.</li>
            </ul>

            <h2>Reference Type</h2>
            <ul>
              <li><strong>Object</strong> — collections of key-value pairs: <code>{ name: 'JS' }</code>, arrays, functions, dates, regular expressions, etc. Objects are mutable, and variables hold references to objects. JavaScript passes arguments by value; for objects, that value is the reference.</li>
            </ul>

            <h2>Type Checking</h2>
            <p>Use <code>typeof</code> for primitives (with the quirk that <code>typeof null === 'object'</code>). For arrays and null, use <code>Array.isArray()</code> and <code>value === null</code>.</p>
            <div class="code-block">
              <div class="code-header"><span>typeof</span></div>
              <pre><span class="keyword">typeof</span> <span class="string">'hello'</span>;   <span class="comment">// 'string'</span>
            <span class="keyword">typeof</span> <span class="number">42</span>;        <span class="comment">// 'number'</span>
            <span class="keyword">typeof</span> <span class="boolean">true</span>;      <span class="comment">// 'boolean'</span>
            <span class="keyword">typeof</span> <span class="null">null</span>;       <span class="comment">// 'object'  (legacy bug)</span>
            <span class="keyword">typeof</span> <span class="keyword">undefined</span>; <span class="comment">// 'undefined'</span>
            <span class="keyword">typeof</span> { };        <span class="comment">// 'object'</span>
            <span class="keyword">typeof</span> [ ];        <span class="comment">// 'object'</span>
            <span class="keyword">typeof</span> <span class="keyword">function</span>(){}; <span class="comment">// 'function'</span>
            <span class="keyword">typeof</span> <span class="keyword">Symbol</span>();   <span class="comment">// 'symbol'</span>
            <span class="keyword">typeof</span> <span class="number">123n</span>;       <span class="comment">// 'bigint'</span></pre>
            </div>

            <div class="callout warning">
              <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> Precision Issues</div>
              <p>Floating-point arithmetic can produce rounding errors: <code>0.1 + 0.2 === 0.3</code> is <code>false</code>. Use <code>Number.EPSILON</code> for comparisons or use libraries like <code>decimal.js</code> for financial calculations.</p>
            </div>
          `
        }, {
            id: 'operators',
            icon: 'fa-calculator',
            title: 'Operators',
            section: 'Basics',
            content: `
            <h1>Operators</h1>
            <div class="subtitle">Arithmetic, assignment, comparison, logical, and more.</div>

            <h2>Arithmetic</h2>
            <p><code>+</code> (addition), <code>-</code> (subtraction), <code>*</code> (multiplication), <code>/</code> (division), <code>%</code> (remainder), <code>**</code> (exponentiation).</p>
            <p>Unary operators: <code>+</code> (numeric conversion), <code>-</code> (negation), <code>++</code> (increment), <code>--</code> (decrement).</p>

            <h2>Assignment</h2>
            <p><code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>, <code>**=</code>, and logical assignment operators: <code>&amp;&amp;=</code>, <code>||=</code>, <code>??=</code> (ES2021).</p>

            <h2>Comparison</h2>
            <p><code>==</code> (loose equality, coerces types), <code>===</code> (strict equality, no coercion), <code>!=</code>, <code>!==</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>.</p>
            <p><strong>Special cases:</strong> <code>NaN</code> is not equal to anything, including itself. Use <code>Number.isNaN()</code> to check. <code>Object.is()</code> is a more robust equality (treats <code>NaN</code> as equal and <code>-0</code> as not equal to <code>0</code>).</p>

            <h2>Logical</h2>
            <p><code>&amp;&amp;</code> (AND — returns first falsy or last operand), <code>||</code> (OR — returns first truthy or last operand), <code>!</code> (NOT), <code>??</code> (nullish coalescing — returns right operand only if left is <code>null</code> or <code>undefined</code>).</p>

            <h2>Ternary</h2>
            <p><code>condition ? expr1 : expr2</code> — returns <code>expr1</code> if condition truthy, else <code>expr2</code>.</p>

            <h2>Optional Chaining (<code>?.</code>)</h2>
            <p>Allows safe access to deeply nested properties without error if an intermediate property is <code>null</code> or <code>undefined</code>.</p>
            <div class="code-block">
              <div class="code-header"><span>Optional Chaining</span></div>
              <pre><span class="keyword">const</span> user = { profile: { name: <span class="string">'Alice'</span> } };
            <span class="keyword">const</span> city = user?.profile?.address?.city; <span class="comment">// undefined, no error</span></pre>
            </div>

            <h2>Nullish Coalescing (<code>??</code>)</h2>
            <p>Use <code>??</code> to provide a default only when the left side is <code>null</code> or <code>undefined</code> (unlike <code>||</code> which uses falsy values like <code>0</code> or <code>''</code>).</p>
            <div class="code-block">
              <div class="code-header"><span>??</span></div>
              <pre><span class="keyword">const</span> value = <span class="null">null</span> ?? <span class="string">'default'</span>; <span class="comment">// 'default'</span>
            <span class="keyword">const</span> zero = <span class="number">0</span> ?? <span class="string">'fallback'</span>;  <span class="comment">// 0 (not fallback)</span></pre>
            </div>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Short‑circuiting</div>
              <p>Logical operators <code>&amp;&amp;</code>, <code>||</code>, and <code>??</code> short‑circuit: they don't evaluate the right operand if the left operand already determines the result.</p>
            </div>
          `
        }, {
            id: 'controlflow',
            icon: 'fa-code-branch',
            title: 'Control Flow',
            section: 'Basics',
            content: `
            <h1>Control Flow</h1>
            <div class="subtitle">Conditionals and loops.</div>

            <h2>if / else if / else</h2>
            <div class="code-block">
              <div class="code-header"><span>Conditional</span></div>
              <pre><span class="keyword">if</span> (score >= <span class="number">90</span>) {
              <span class="keyword">const</span> grade = <span class="string">'A'</span>;
            } <span class="keyword">else if</span> (score >= <span class="number">80</span>) {
              <span class="keyword">const</span> grade = <span class="string">'B'</span>;
            } <span class="keyword">else</span> {
              <span class="keyword">const</span> grade = <span class="string">'C'</span>;
            }</pre>
            </div>

            <h2>switch</h2>
            <p>Evaluates an expression and matches its value to <code>case</code> clauses. Strict equality (<code>===</code>) is used for matching. Fall‑through occurs if <code>break</code> is omitted.</p>
            <div class="code-block">
              <div class="code-header"><span>switch</span></div>
              <pre><span class="keyword">switch</span> (color) {
              <span class="keyword">case</span> <span class="string">'red'</span>:
                <span class="keyword">console</span>.log(<span class="string">'Stop'</span>);
                <span class="keyword">break</span>;
              <span class="keyword">case</span> <span class="string">'green'</span>:
                <span class="keyword">console</span>.log(<span class="string">'Go'</span>);
                <span class="keyword">break</span>;
              <span class="keyword">default</span>:
                <span class="keyword">console</span>.log(<span class="string">'Unknown'</span>);
            }</pre>
            </div>

            <h2>Loops</h2>
            <ul>
              <li><strong>for</strong> — classic: <code>for (let i = 0; i &lt; n; i++) { … }</code></li>
              <li><strong>while</strong> — condition checked before iteration: <code>while (condition) { … }</code></li>
              <li><strong>do…while</strong> — condition checked after iteration (always runs at least once): <code>do { … } while (condition);</code></li>
              <li><strong>for…of</strong> — iterates over iterable values (arrays, strings, maps, sets, etc.): <code>for (const item of array) { … }</code></li>
              <li><strong>for…in</strong> — iterates over enumerable property <strong>keys</strong> (including inherited ones). Generally avoid for arrays; use <code>for…of</code> or <code>.forEach()</code>.</li>
            </ul>

            <div class="callout warning">
              <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> break and continue</div>
              <p>Use <code>break</code> to exit a loop prematurely; <code>continue</code> to skip the rest of the current iteration.</p>
            </div>
          `
        }, {
            id: 'functions',
            icon: 'fa-arrow-right-to-bracket',
            title: 'Functions',
            section: 'Functions',
            content: `
            <h1>Functions</h1>
            <div class="subtitle">Declarations, expressions, arrow functions, and more.</div>

            <h2>Function Declaration</h2>
            <p>Hoisted — can be called before definition.</p>
            <div class="code-block">
              <div class="code-header"><span>Declaration</span></div>
              <pre><span class="keyword">function</span> <span class="function">greet</span>(name) {
              <span class="keyword">return</span> <span class="string">\`Hello, \${name}!\`</span>;
            }</pre>
            </div>

            <h2>Function Expression</h2>
            <p>Not hoisted — the variable is hoisted but the assignment is not.</p>
            <div class="code-block">
              <div class="code-header"><span>Expression</span></div>
              <pre><span class="keyword">const</span> greet = <span class="keyword">function</span>(name) {
              <span class="keyword">return</span> <span class="string">\`Hello, \${name}!\`</span>;
            };</pre>
            </div>

            <h2>Arrow Function (ES6)</h2>
            <p>Shorter syntax, no <code>this</code> binding of its own, no <code>arguments</code> object, and cannot be used as constructors.</p>
            <div class="code-block">
              <div class="code-header"><span>Arrow</span></div>
              <pre><span class="keyword">const</span> greet = (name) => <span class="string">\`Hello, \${name}!\`</span>;
            <span class="comment">// With block body</span>
            <span class="keyword">const</span> add = (a, b) => {
              <span class="keyword">return</span> a + b;
            };
            <span class="comment">// Single parameter no parentheses needed</span>
            <span class="keyword">const</span> double = n => n * <span class="number">2</span>;</pre>
            </div>

            <h2>Parameters &amp; Arguments</h2>
            <ul>
              <li><strong>Default parameters:</strong> <code>function greet(name = 'Guest') { … }</code></li>
              <li><strong>Rest parameters:</strong> collects remaining arguments into an array: <code>function sum(...numbers) { … }</code></li>
              <li><strong>Destructuring parameters:</strong> <code>function print({ name, age }) { … }</code></li>
            </ul>

            <h2>Closures</h2>
            <p>When a function retains access to variables from its outer scope even after the outer function has returned. Used for data privacy, partial application, and callbacks.</p>
            <div class="code-block">
              <div class="code-header"><span>Closure</span></div>
              <pre><span class="keyword">function</span> <span class="function">makeCounter</span>() {
              <span class="keyword">let</span> count = <span class="number">0</span>;
              <span class="keyword">return</span> <span class="keyword">function</span>() {
                count++;
                <span class="keyword">return</span> count;
              };
            }
            <span class="keyword">const</span> counter = makeCounter();
            counter(); <span class="comment">// 1</span>
            counter(); <span class="comment">// 2</span></pre>
            </div>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Arrow functions & this</div>
              <p>Arrow functions inherit <code>this</code> from the surrounding lexical scope, making them ideal for callbacks and event handlers.</p>
            </div>
          `
        }, {
            id: 'objects',
            icon: 'fa-cube',
            title: 'Objects',
            section: 'Objects & OOP',
            content: `
            <h1>Objects</h1>
            <div class="subtitle">Fundamental data structures in JavaScript.</div>

            <h2>Creation</h2>
            <p>Objects can be created using object literals, the <code>new</code> keyword with a constructor, <code>Object.create()</code>, or classes.</p>
            <div class="code-block">
              <div class="code-header"><span>Object Literal</span></div>
              <pre><span class="keyword">const</span> person = {
              name: <span class="string">'Alice'</span>,
              age: <span class="number">30</span>,
              greet() {
                <span class="keyword">console</span>.log(<span class="string">\`Hi, I'm \${this.name}\`</span>);
              }
            };</pre>
            </div>

            <h2>Property Access</h2>
            <p><strong>Dot notation:</strong> <code>person.name</code> (static) &nbsp;|&nbsp; <strong>Bracket notation:</strong> <code>person['name']</code> (computed, allows dynamic keys).</p>

            <h2>Adding / Updating / Deleting</h2>
            <div class="code-block">
              <div class="code-header"><span>Mutation</span></div>
              <pre>person.age = <span class="number">31</span>;
            person[<span class="string">'city'</span>] = <span class="string">'Berlin'</span>;
            <span class="keyword">delete</span> person.age; <span class="comment">// removes property</span></pre>
            </div>

            <h2>Object Methods</h2>
            <ul>
              <li><code>Object.keys(obj)</code> — array of own enumerable property keys.</li>
              <li><code>Object.values(obj)</code> — array of values.</li>
              <li><code>Object.entries(obj)</code> — array of <code>[key, value]</code> pairs.</li>
              <li><code>Object.assign(target, ...sources)</code> — shallow copy properties.</li>
              <li><code>Object.freeze(obj)</code> — prevents any modifications (non‑extensible, configurable false, writable false).</li>
              <li><code>Object.seal(obj)</code> — prevents adding/removing properties but allows writing to existing.</li>
              <li><code>Object.defineProperty(obj, key, descriptor)</code> — fine‑grained property control (writable, enumerable, configurable, get, set).</li>
            </ul>

            <h2>Getters & Setters</h2>
            <div class="code-block">
              <div class="code-header"><span>Accessors</span></div>
              <pre><span class="keyword">const</span> obj = {
              _age: <span class="number">0</span>,
              <span class="keyword">get</span> age() { <span class="keyword">return</span> <span class="variable">this</span>._age; },
              <span class="keyword">set</span> age(value) { <span class="keyword">if</span> (value >= <span class="number">0</span>) <span class="variable">this</span>._age = value; }
            };</pre>
            </div>

            <div class="callout success">
              <div class="callout-title"><i class="fas fa-check-circle"></i> Shorthand & Computed Names</div>
              <p>ES6 allows <code>{ name }</code> as shorthand for <code>{ name: name }</code> and computed property names: <code>{ [key]: value }</code>.</p>
            </div>
          `
        }, {
            id: 'arrays',
            icon: 'fa-list',
            title: 'Arrays',
            section: 'Data Structures',
            content: `
            <h1>Arrays</h1>
            <div class="subtitle">Ordered collections of values, zero‑based index, dynamic length.</div>

            <h2>Creation</h2>
            <div class="code-block">
              <div class="code-header"><span>Array Literal</span></div>
              <pre><span class="keyword">const</span> fruits = [<span class="string">'apple'</span>, <span class="string">'banana'</span>, <span class="string">'cherry'</span>];
            <span class="keyword">const</span> numbers = <span class="keyword">new</span> <span class="function">Array</span>(<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>); <span class="comment">// less common, use literal</span>
            <span class="keyword">const</span> empty = <span class="keyword">new</span> <span class="function">Array</span>(<span class="number">5</span>); <span class="comment">// creates array of length 5 with empty slots</span></pre>
            </div>

            <h2>Common Methods</h2>
            <table class="ref-table">
              <thead><tr><th>Method</th><th>Description</th><th>Mutating?</th></tr></thead>
              <tbody>
                <tr><td class="method-name"><code>push()</code></td><td>Adds one or more elements to the end, returns new length.</td><td>Yes</td></tr>
                <tr><td class="method-name"><code>pop()</code></td><td>Removes the last element, returns it.</td><td>Yes</td></tr>
                <tr><td class="method-name"><code>shift()</code></td><td>Removes the first element, returns it.</td><td>Yes</td></tr>
                <tr><td class="method-name"><code>unshift()</code></td><td>Adds elements to the front, returns new length.</td><td>Yes</td></tr>
                <tr><td class="method-name"><code>map()</code></td><td>Transforms each element, returns new array.</td><td>No</td></tr>
                <tr><td class="method-name"><code>filter()</code></td><td>Returns new array with elements that pass a test.</td><td>No</td></tr>
                <tr><td class="method-name"><code>reduce()</code></td><td>Reduces to a single value (accumulator).</td><td>No</td></tr>
                <tr><td class="method-name"><code>forEach()</code></td><td>Iterates, executes a function for each element.</td><td>No</td></tr>
                <tr><td class="method-name"><code>find()</code></td><td>Returns the first element that satisfies the test.</td><td>No</td></tr>
                <tr><td class="method-name"><code>some()</code></td><td>Checks if at least one element passes the test.</td><td>No</td></tr>
                <tr><td class="method-name"><code>every()</code></td><td>Checks if all elements pass the test.</td><td>No</td></tr>
                <tr><td class="method-name"><code>includes()</code></td><td>Checks if a value exists (strict equality).</td><td>No</td></tr>
                <tr><td class="method-name"><code>slice()</code></td><td>Returns a shallow copy of a portion.</td><td>No</td></tr>
                <tr><td class="method-name"><code>splice()</code></td><td>Adds/removes elements in place, returns removed items.</td><td>Yes</td></tr>
                <tr><td class="method-name"><code>sort()</code></td><td>Sorts in place (coerces to strings by default).</td><td>Yes</td></tr>
                <tr><td class="method-name"><code>reverse()</code></td><td>Reverses the array in place.</td><td>Yes</td></tr>
                <tr><td class="method-name"><code>flat()</code></td><td>Flattens nested arrays up to a depth.</td><td>No</td></tr>
                <tr><td class="method-name"><code>flatMap()</code></td><td>Map then flat by one level.</td><td>No</td></tr>
                <tr><td class="method-name"><code>Array.from()</code></td><td>Creates an array from an iterable or array‑like.</td><td>N/A</td></tr>
                <tr><td class="method-name"><code>Array.of()</code></td><td>Creates an array from its arguments.</td><td>N/A</td></tr>
              </tbody>
            </table>

            <div class="callout success">
              <div class="callout-title"><i class="fas fa-check-circle"></i> Immutability</div>
              <p>Methods like <code>map</code>, <code>filter</code>, <code>slice</code>, <code>concat</code>, <code>reduce</code> do not mutate the original array; they return new ones.</p>
            </div>
          `
        }, {
            id: 'strings',
            icon: 'fa-font',
            title: 'Strings',
            section: 'Data Structures',
            content: `
            <h1>Strings</h1>
            <div class="subtitle">Text manipulation in JavaScript.</div>

            <h2>Creation</h2>
            <p>Strings can be created using single quotes, double quotes, or backticks (template literals).</p>
            <div class="code-block">
              <div class="code-header"><span>String Literals</span></div>
              <pre><span class="keyword">const</span> single = <span class="string">'Hello'</span>;
            <span class="keyword">const</span> double = <span class="string">"World"</span>;
            <span class="keyword">const</span> template = <span class="string">\`Hello, \${double}!\`</span>; <span class="comment">// template literal supports interpolation and multi-line</span></pre>
            </div>

            <h2>Common Methods</h2>
            <table class="ref-table">
              <thead><tr><th>Method</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td class="method-name"><code>length</code></td><td>Returns the number of characters.</td></tr>
                <tr><td class="method-name"><code>toUpperCase()</code></td><td>Converts to uppercase.</td></tr>
                <tr><td class="method-name"><code>toLowerCase()</code></td><td>Converts to lowercase.</td></tr>
                <tr><td class="method-name"><code>trim()</code></td><td>Removes whitespace from both ends.</td></tr>
                <tr><td class="method-name"><code>includes()</code></td><td>Checks if substring exists.</td></tr>
                <tr><td class="method-name"><code>startsWith()</code></td><td>Checks if starts with a prefix.</td></tr>
                <tr><td class="method-name"><code>endsWith()</code></td><td>Checks if ends with a suffix.</td></tr>
                <tr><td class="method-name"><code>indexOf()</code></td><td>Returns the index of first occurrence, -1 if not found.</td></tr>
                <tr><td class="method-name"><code>lastIndexOf()</code></td><td>Returns the index of last occurrence.</td></tr>
                <tr><td class="method-name"><code>slice()</code></td><td>Extracts a portion (supports negative indices).</td></tr>
                <tr><td class="method-name"><code>split()</code></td><td>Splits into an array by separator.</td></tr>
                <tr><td class="method-name"><code>replace()</code></td><td>Replaces first match (or all with regex global flag).</td></tr>
                <tr><td class="method-name"><code>replaceAll()</code></td><td>Replaces all occurrences (ES2021).</td></tr>
                <tr><td class="method-name"><code>repeat()</code></td><td>Repeats the string a number of times.</td></tr>
                <tr><td class="method-name"><code>padStart()</code></td><td>Pads from the start to a given length.</td></tr>
                <tr><td class="method-name"><code>padEnd()</code></td><td>Pads from the end.</td></tr>
                <tr><td class="method-name"><code>charAt()</code></td><td>Returns character at index.</td></tr>
                <tr><td class="method-name"><code>charCodeAt()</code></td><td>Returns Unicode of character.</td></tr>
                <tr><td class="method-name"><code>trimStart()</code> / <code>trimEnd()</code></td><td>Remove whitespace from start/end.</td></tr>
              </tbody>
            </table>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Immutability</div>
              <p>Strings are immutable. All methods return a new string; the original remains unchanged.</p>
            </div>
          `
        }, {
            id: 'numbers',
            icon: 'fa-hashtag',
            title: 'Numbers & Math',
            section: 'Data Structures',
            content: `
            <h1>Numbers &amp; Math</h1>
            <div class="subtitle">Numeric operations and the Math object.</div>

            <h2>Number Methods</h2>
            <ul>
              <li><code>Number.isNaN()</code> — checks if value is <code>NaN</code> (more reliable than global <code>isNaN()</code> which coerces).</li>
              <li><code>Number.isFinite()</code> — checks if value is finite (not <code>Infinity</code> or <code>NaN</code>).</li>
              <li><code>Number.isInteger()</code> — checks if value is an integer.</li>
              <li><code>Number.parseFloat()</code> — parses a string to a float.</li>
              <li><code>Number.parseInt()</code> — parses a string to an integer (with radix).</li>
              <li><code>toFixed()</code> — returns a string with fixed decimal places.</li>
              <li><code>toPrecision()</code> — returns a string with a specified precision.</li>
              <li><code>toString(radix)</code> — converts to string in given base (e.g., 2 for binary).</li>
            </ul>

            <h2>Math Object</h2>
            <p>Provides constants and functions for mathematical operations.</p>
            <table class="ref-table">
              <thead><tr><th>Method / Property</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td class="method-name"><code>Math.PI</code></td><td>π ≈ 3.14159</td></tr>
                <tr><td class="method-name"><code>Math.E</code></td><td>Euler's number ≈ 2.718</td></tr>
                <tr><td class="method-name"><code>Math.abs()</code></td><td>Absolute value</td></tr>
                <tr><td class="method-name"><code>Math.ceil()</code></td><td>Rounds up to nearest integer</td></tr>
                <tr><td class="method-name"><code>Math.floor()</code></td><td>Rounds down to nearest integer</td></tr>
                <tr><td class="method-name"><code>Math.round()</code></td><td>Rounds to nearest integer (half up)</td></tr>
                <tr><td class="method-name"><code>Math.trunc()</code></td><td>Removes decimal part (toward zero)</td></tr>
                <tr><td class="method-name"><code>Math.max()</code></td><td>Largest of zero or more numbers</td></tr>
                <tr><td class="method-name"><code>Math.min()</code></td><td>Smallest of zero or more numbers</td></tr>
                <tr><td class="method-name"><code>Math.random()</code></td><td>Random number in [0, 1)</td></tr>
                <tr><td class="method-name"><code>Math.pow()</code></td><td>Power (base, exponent) — use <code>**</code> operator</td></tr>
                <tr><td class="method-name"><code>Math.sqrt()</code></td><td>Square root</td></tr>
                <tr><td class="method-name"><code>Math.cbrt()</code></td><td>Cube root</td></tr>
                <tr><td class="method-name"><code>Math.hypot()</code></td><td>Square root of sum of squares</td></tr>
                <tr><td class="method-name"><code>Math.sign()</code></td><td>Returns -1, 0, 1 for negative, zero, positive</td></tr>
                <tr><td class="method-name"><code>Math.clz32()</code></td><td>Count leading zeros in 32-bit integer</td></tr>
              </tbody>
            </table>

            <h2>BigInt</h2>
            <p>For integers beyond 2⁵³−1. Operations on BigInts return BigInts. Cannot mix with Number without explicit conversion.</p>
            <div class="code-block">
              <div class="code-header"><span>BigInt</span></div>
              <pre><span class="keyword">const</span> big = <span class="number">9007199254740991n</span>;
            <span class="keyword">const</span> another = <span class="keyword">BigInt</span>(<span class="string">'12345678901234567890'</span>);
            <span class="keyword">const</span> sum = big + <span class="number">1n</span>;</pre>
            </div>
          `
        }, {
            id: 'dates',
            icon: 'fa-calendar',
            title: 'Dates',
            section: 'Data Structures',
            content: `
            <h1>Dates</h1>
            <div class="subtitle">Working with dates and times.</div>

            <h2>Creating Dates</h2>
            <div class="code-block">
              <div class="code-header"><span>Date Constructors</span></div>
              <pre><span class="keyword">const</span> now = <span class="keyword">new</span> <span class="function">Date</span>();             <span class="comment">// current date/time</span>
            <span class="keyword">const</span> specific = <span class="keyword">new</span> <span class="function">Date</span>(<span class="number">2025</span>, <span class="number">0</span>, <span class="number">15</span>); <span class="comment">// Jan 15, 2025 (month is 0-based)</span>
            <span class="keyword">const</span> fromStr = <span class="keyword">new</span> <span class="function">Date</span>(<span class="string">'2025-01-15T10:30:00'</span>);
            <span class="keyword">const</span> fromTimestamp = <span class="keyword">new</span> <span class="function">Date</span>(<span class="number">1705314000000</span>); <span class="comment">// milliseconds since epoch</span></pre>
            </div>

            <h2>Common Methods</h2>
            <table class="ref-table">
              <thead><tr><th>Method</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td class="method-name"><code>getFullYear()</code></td><td>Year (4 digits)</td></tr>
                <tr><td class="method-name"><code>getMonth()</code></td><td>Month (0–11)</td></tr>
                <tr><td class="method-name"><code>getDate()</code></td><td>Day of month (1–31)</td></tr>
                <tr><td class="method-name"><code>getDay()</code></td><td>Day of week (0–6, Sunday=0)</td></tr>
                <tr><td class="method-name"><code>getHours()</code></td><td>Hours (0–23)</td></tr>
                <tr><td class="method-name"><code>getMinutes()</code></td><td>Minutes (0–59)</td></tr>
                <tr><td class="method-name"><code>getSeconds()</code></td><td>Seconds (0–59)</td></tr>
                <tr><td class="method-name"><code>getMilliseconds()</code></td><td>Milliseconds (0–999)</td></tr>
                <tr><td class="method-name"><code>getTime()</code></td><td>Milliseconds since Unix epoch</td></tr>
                <tr><td class="method-name"><code>getTimezoneOffset()</code></td><td>Minutes offset from UTC</td></tr>
                <tr><td class="method-name"><code>toISOString()</code></td><td>ISO 8601 format</td></tr>
                <tr><td class="method-name"><code>toLocaleString()</code></td><td>Localized string</td></tr>
                <tr><td class="method-name"><code>toDateString()</code></td><td>Human-readable date</td></tr>
                <tr><td class="method-name"><code>toTimeString()</code></td><td>Human-readable time</td></tr>
              </tbody>
            </table>

            <div class="callout warning">
              <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> Mutability</div>
              <p>Date objects are mutable. Methods like <code>setFullYear()</code> modify the object in place.</p>
            </div>
          `
        }, {
            id: 'dom',
            icon: 'fa-window-maximize',
            title: 'DOM Manipulation',
            section: 'Browser APIs',
            content: `
            <h1>DOM Manipulation</h1>
            <div class="subtitle">Interacting with the document object model.</div>

            <h2>Selecting Elements</h2>
            <div class="code-block">
              <div class="code-header"><span>Selectors</span></div>
              <pre><span class="keyword">const</span> byId = <span class="keyword">document</span>.getElementById(<span class="string">'myId'</span>);
            <span class="keyword">const</span> byClass = <span class="keyword">document</span>.getElementsByClassName(<span class="string">'myClass'</span>); <span class="comment">// live HTMLCollection</span>
            <span class="keyword">const</span> byTag = <span class="keyword">document</span>.getElementsByTagName(<span class="string">'div'</span>);
            <span class="keyword">const</span> query = <span class="keyword">document</span>.querySelector(<span class="string">'.myClass'</span>); <span class="comment">// first match</span>
            <span class="keyword">const</span> allQuery = <span class="keyword">document</span>.querySelectorAll(<span class="string">'p'</span>); <span class="comment">// static NodeList</span></pre>
            </div>

            <h2>Manipulating</h2>
            <ul>
              <li><strong>Text content:</strong> <code>element.textContent = 'Hello'</code> (plain text, faster).</li>
              <li><strong>HTML content:</strong> <code>element.innerHTML = '&lt;strong&gt;Hi&lt;/strong&gt;'</code> (parses HTML, risk of XSS).</li>
              <li><strong>Attributes:</strong> <code>element.setAttribute('class', 'active')</code>, <code>getAttribute</code>, <code>removeAttribute</code>.</li>
              <li><strong>Classes:</strong> <code>element.classList.add('active')</code>, <code>.remove()</code>, <code>.toggle()</code>, <code>.contains()</code>.</li>
              <li><strong>Styles:</strong> <code>element.style.color = 'red'</code> (camelCase property names).</li>
              <li><strong>Dataset:</strong> Access <code>data-*</code> attributes via <code>element.dataset.myValue</code>.</li>
            </ul>

            <h2>Creating &amp; Appending</h2>
            <div class="code-block">
              <div class="code-header"><span>Create & Append</span></div>
              <pre><span class="keyword">const</span> div = <span class="keyword">document</span>.createElement(<span class="string">'div'</span>);
            div.textContent = <span class="string">'New element'</span>;
            <span class="keyword">document</span>.body.appendChild(div);

            <span class="comment">// Insert before</span>
            <span class="keyword">const</span> parent = <span class="keyword">document</span>.getElementById(<span class="string">'container'</span>);
            parent.insertBefore(div, parent.firstChild);

            <span class="comment">// Modern append/prepend</span>
            parent.append(div); <span class="comment">// append child</span>
            parent.prepend(div); <span class="comment">// prepend</span></pre>
            </div>

            <div class="callout warning">
              <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> Performance</div>
              <p>Manipulating the DOM is expensive. Batch updates using <code>document.createDocumentFragment()</code> or use techniques like virtual DOM.</p>
            </div>
          `
        }, {
            id: 'events',
            icon: 'fa-bolt',
            title: 'Events',
            section: 'Browser APIs',
            content: `
            <h1>Events</h1>
            <div class="subtitle">Handling user interactions and browser events.</div>

            <h2>Adding Event Listeners</h2>
            <div class="code-block">
              <div class="code-header"><span>addEventListener</span></div>
              <pre><span class="keyword">const</span> btn = <span class="keyword">document</span>.querySelector(<span class="string">'button'</span>);
            btn.addEventListener(<span class="string">'click'</span>, (event) => {
              <span class="keyword">console</span>.log(<span class="string">'Button clicked!'</span>, event);
            }, { once: <span class="boolean">true</span> }); <span class="comment">// options: once, capture, passive</span></pre>
            </div>

            <h2>Common Events</h2>
            <ul>
              <li><strong>Mouse:</strong> <code>click</code>, <code>dblclick</code>, <code>mousedown</code>, <code>mouseup</code>, <code>mouseover</code>, <code>mouseout</code>, <code>mousemove</code>.</li>
              <li><strong>Keyboard:</strong> <code>keydown</code>, <code>keyup</code>, <code>keypress</code> (deprecated).</li>
              <li><strong>Form:</strong> <code>submit</code>, <code>change</code>, <code>input</code>, <code>focus</code>, <code>blur</code>, <code>reset</code>.</li>
              <li><strong>Window/Document:</strong> <code>load</code>, <code>resize</code>, <code>scroll</code>, <code>beforeunload</code>, <code>DOMContentLoaded</code>.</li>
              <li><strong>Touch:</strong> <code>touchstart</code>, <code>touchmove</code>, <code>touchend</code>.</li>
            </ul>

            <h2>Event Object</h2>
            <p>The event object passed to handlers contains properties like <code>target</code>, <code>currentTarget</code>, <code>type</code>, <code>preventDefault()</code>, <code>stopPropagation()</code>, and <code>stopImmediatePropagation()</code>.</p>

            <h2>Event Delegation</h2>
            <p>Attach a single listener to a parent and use <code>event.target</code> to detect which child was clicked. This reduces memory usage and works for dynamically added elements.</p>
            <div class="code-block">
              <div class="code-header"><span>Delegation</span></div>
              <pre><span class="keyword">document</span>.querySelector(<span class="string">'ul'</span>).addEventListener(<span class="string">'click'</span>, (e) => {
              <span class="keyword">if</span> (e.target.matches(<span class="string">'li'</span>)) {
                <span class="keyword">console</span>.log(<span class="string">'Item clicked:'</span>, e.target.textContent);
              }
            });</pre>
            </div>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Remove Listeners</div>
              <p>To remove a listener, you must reference the same function. Use named functions or store the handler reference.</p>
            </div>
          `
        }, {
            id: 'promises',
            icon: 'fa-clock',
            title: 'Promises & Async',
            section: 'Asynchronous',
            content: `
            <h1>Promises &amp; Async/Await</h1>
            <div class="subtitle">Handling asynchronous operations.</div>

            <h2>Promise States</h2>
            <ul>
              <li><strong>Pending</strong> — initial state, neither fulfilled nor rejected.</li>
              <li><strong>Fulfilled</strong> — operation completed successfully.</li>
              <li><strong>Rejected</strong> — operation failed.</li>
            </ul>

            <h2>Creating a Promise</h2>
            <div class="code-block">
              <div class="code-header"><span>Promise constructor</span></div>
              <pre><span class="keyword">const</span> myPromise = <span class="keyword">new</span> <span class="function">Promise</span>((resolve, reject) => {
              <span class="comment">// Async work</span>
              <span class="keyword">if</span> (success) resolve(<span class="string">'Done!'</span>);
              <span class="keyword">else</span> reject(<span class="keyword">new</span> <span class="function">Error</span>(<span class="string">'Failed'</span>));
            });</pre>
            </div>

            <h2>Consuming with then / catch / finally</h2>
            <div class="code-block">
              <div class="code-header"><span>then / catch</span></div>
              <pre>myPromise
              .then(result => <span class="keyword">console</span>.log(result))
              .catch(error => <span class="keyword">console</span>.error(error))
              .finally(() => <span class="keyword">console</span>.log(<span class="string">'Cleanup'</span>));</pre>
            </div>

            <h2>Async / Await</h2>
            <p>Syntactic sugar over promises. An <code>async</code> function always returns a promise. <code>await</code> pauses execution until the promise settles.</p>
            <div class="code-block">
              <div class="code-header"><span>async/await</span></div>
              <pre><span class="keyword">async</span> <span class="keyword">function</span> <span class="function">fetchData</span>() {
              <span class="keyword">try</span> {
                <span class="keyword">const</span> response = <span class="keyword">await</span> fetch(<span class="string">'https://api.example.com/data'</span>);
                <span class="keyword">if</span> (!response.ok) <span class="keyword">throw</span> <span class="keyword">new</span> <span class="function">Error</span>(<span class="string">'Network error'</span>);
                <span class="keyword">const</span> data = <span class="keyword">await</span> response.json();
                <span class="keyword">return</span> data;
              } <span class="keyword">catch</span> (error) {
                <span class="keyword">console</span>.error(error);
                <span class="keyword">throw</span> error; <span class="comment">// propagate or handle</span>
              }
            }</pre>
            </div>

            <h2>Promise Combinators</h2>
            <ul>
              <li><code>Promise.all()</code> — waits for all promises to resolve; rejects if any rejects.</li>
              <li><code>Promise.allSettled()</code> — waits for all to settle (resolve or reject) and returns an array of result objects.</li>
              <li><code>Promise.race()</code> — resolves/rejects with the first settled promise.</li>
              <li><code>Promise.any()</code> — resolves with the first fulfilled promise; rejects if all reject.</li>
            </ul>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Top-level await</div>
              <p>In modules, you can use <code>await</code> at the top level without wrapping in an async function (ES2022).</p>
            </div>
          `
        }, {
            id: 'classes',
            icon: 'fa-object-group',
            title: 'Classes',
            section: 'Objects & OOP',
            content: `
            <h1>Classes (ES6)</h1>
            <div class="subtitle">Syntactic sugar over prototypal inheritance.</div>

            <h2>Class Definition</h2>
            <div class="code-block">
              <div class="code-header"><span>class</span></div>
              <pre><span class="keyword">class</span> <span class="function">Person</span> {
              <span class="function">constructor</span>(name, age) {
                <span class="variable">this</span>.name = name;
                <span class="variable">this</span>.age = age;
              }

              greet() {
                <span class="keyword">return</span> <span class="string">\`Hello, I'm \${this.name}\`</span>;
              }

              <span class="keyword">static</span> describe() {
                <span class="keyword">return</span> <span class="string">'A person'</span>;
              }
            }</pre>
            </div>

            <h2>Inheritance</h2>
            <p>Use <code>extends</code> to subclass. Call <code>super()</code> in the constructor to call the parent constructor. Super can also be used to call parent methods.</p>
            <div class="code-block">
              <div class="code-header"><span>extends</span></div>
              <pre><span class="keyword">class</span> <span class="function">Student</span> <span class="keyword">extends</span> Person {
              <span class="function">constructor</span>(name, age, grade) {
                <span class="keyword">super</span>(name, age);
                <span class="variable">this</span>.grade = grade;
              }

              study() {
                <span class="keyword">return</span> <span class="string">\`\${this.name} is studying\`</span>;
              }

              <span class="keyword">static</span> describe() {
                <span class="keyword">return</span> <span class="string">'A student'</span>; <span class="comment">// override static</span>
              }
            }</pre>
            </div>

            <h2>Private Fields (ES2022)</h2>
            <p>Use <code>#</code> prefix to make fields private. They are only accessible within the class.</p>
            <div class="code-block">
              <div class="code-header"><span>Private</span></div>
              <pre><span class="keyword">class</span> <span class="function">Counter</span> {
              #count = <span class="number">0</span>;
              increment() {
                <span class="variable">this</span>.#count++;
              }
              get value() { <span class="keyword">return</span> <span class="variable">this</span>.#count; }
            }</pre>
            </div>

            <h2>Getters/Setters & Static Blocks</h2>
            <p>Static blocks allow per‑class initialization (ES2022).</p>
            <div class="code-block">
              <div class="code-header"><span>Static block</span></div>
              <pre><span class="keyword">class</span> <span class="function">MyClass</span> {
              <span class="keyword">static</span> { <span class="keyword">console</span>.log(<span class="string">'Class loaded'</span>); }
            }</pre>
            </div>

            <div class="callout success">
              <div class="callout-title"><i class="fas fa-check-circle"></i> Under the hood</div>
              <p>Classes are still functions; they are just a cleaner way to work with prototypes. They enforce strict mode and have improved syntax for inheritance.</p>
            </div>
          `
        }, {
            id: 'modules',
            icon: 'fa-boxes',
            title: 'Modules',
            section: 'Objects & OOP',
            content: `
            <h1>Modules (ES6)</h1>
            <div class="subtitle">Import and export code across files.</div>

            <h2>Exporting</h2>
            <div class="code-block">
              <div class="code-header"><span>Named exports</span></div>
              <pre><span class="comment">// file: math.js</span>
            <span class="keyword">export</span> <span class="keyword">const</span> PI = <span class="number">3.14159</span>;
            <span class="keyword">export</span> <span class="keyword">function</span> <span class="function">add</span>(a, b) { <span class="keyword">return</span> a + b; }
            <span class="keyword">export</span> <span class="keyword">class</span> <span class="function">Calculator</span> { <span class="comment">/* … */</span> }</pre>
            </div>
            <div class="code-block">
              <div class="code-header"><span>Default export</span></div>
              <pre><span class="keyword">export default</span> <span class="keyword">function</span> <span class="function">greet</span>(name) {
              <span class="keyword">return</span> <span class="string">\`Hello, \${name}!\`</span>;
            };</pre>
            </div>

            <h2>Importing</h2>
            <div class="code-block">
              <div class="code-header"><span>Named imports</span></div>
              <pre><span class="keyword">import</span> { PI, add, Calculator } <span class="keyword">from</span> <span class="string">'./math.js'</span>;</pre>
            </div>
            <div class="code-block">
              <div class="code-header"><span>Default import</span></div>
              <pre><span class="keyword">import</span> greet <span class="keyword">from</span> <span class="string">'./greet.js'</span>;</pre>
            </div>
            <div class="code-block">
              <div class="code-header"><span>All imports (namespace)</span></div>
              <pre><span class="keyword">import</span> * <span class="keyword">as</span> math <span class="keyword">from</span> <span class="string">'./math.js'</span>;
            math.PI; <span class="comment">// 3.14159</span></pre>
            </div>

            <h2>Dynamic Imports</h2>
            <p><code>import()</code> returns a promise and can be used for lazy loading.</p>
            <div class="code-block">
              <div class="code-header"><span>Dynamic import</span></div>
              <pre><span class="keyword">const</span> module = <span class="keyword">await</span> <span class="keyword">import</span>(<span class="string">'./module.js'</span>);
            module.default();</pre>
            </div>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Module scope</div>
              <p>Modules are in strict mode by default. Each module has its own lexical scope; variables are not global.</p>
            </div>
          `
        }, {
            id: 'destructuring',
            icon: 'fa-code-fork',
            title: 'Destructuring',
            section: 'ES6+ Features',
            content: `
            <h1>Destructuring</h1>
            <div class="subtitle">Extract values from arrays and objects.</div>

            <h2>Array Destructuring</h2>
            <div class="code-block">
              <div class="code-header"><span>Arrays</span></div>
              <pre><span class="keyword">const</span> [a, b, c] = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>];
            <span class="comment">// a = 1, b = 2, c = 3</span>

            <span class="keyword">const</span> [first, ...rest] = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span>];
            <span class="comment">// first = 10, rest = [20, 30, 40]</span>

            <span class="keyword">const</span> [x, y, , z] = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>];
            <span class="comment">// x = 1, y = 2, z = 4</span>

            <span class="keyword">const</span> [m, n = <span class="number">0</span>] = [<span class="number">5</span>]; <span class="comment">// default values</span></pre>
            </div>

            <h2>Object Destructuring</h2>
            <div class="code-block">
              <div class="code-header"><span>Objects</span></div>
              <pre><span class="keyword">const</span> { name, age } = { name: <span class="string">'Alice'</span>, age: <span class="number">30</span> };
            <span class="comment">// name = 'Alice', age = 30</span>

            <span class="keyword">const</span> { name: personName, age: personAge } = { name: <span class="string">'Bob'</span>, age: <span class="number">25</span> };
            <span class="comment">// personName = 'Bob', personAge = 25</span>

            <span class="keyword">const</span> { city = <span class="string">'Unknown'</span> } = { name: <span class="string">'Charlie'</span> };
            <span class="comment">// city = 'Unknown' (default)</span>

            <span class="keyword">const</span> { ...restObj } = { a: <span class="number">1</span>, b: <span class="number">2</span>, c: <span class="number">3</span> };
            <span class="comment">// restObj = { b: 2, c: 3 } (rest after destructuring)</span></pre>
            </div>

            <h2>Function Parameters</h2>
            <div class="code-block">
              <div class="code-header"><span>Parameter destructuring</span></div>
              <pre><span class="keyword">function</span> <span class="function">printUser</span>({ name, age }) {
              <span class="keyword">console</span>.log(<span class="string">\`\${name} is \${age}\`</span>);
            }
            printUser({ name: <span class="string">'Alice'</span>, age: <span class="number">30</span> });

            <span class="keyword">function</span> <span class="function">sum</span>([a, b]) { <span class="keyword">return</span> a + b; }
            sum([<span class="number">1</span>, <span class="number">2</span>]); <span class="comment">// 3</span></pre>
            </div>
          `
        }, {
            id: 'spreadrest',
            icon: 'fa-ellipsis-h',
            title: 'Spread & Rest',
            section: 'ES6+ Features',
            content: `
            <h1>Spread &amp; Rest Operators</h1>
            <div class="subtitle">… for expanding and collecting.</div>

            <h2>Spread (…) — Expand</h2>
            <p>Used to spread elements of an array or properties of an object into a new array/object or function arguments.</p>
            <div class="code-block">
              <div class="code-header"><span>Spread in arrays</span></div>
              <pre><span class="keyword">const</span> arr1 = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>];
            <span class="keyword">const</span> arr2 = [<span class="number">4</span>, <span class="number">5</span>, <span class="number">6</span>];
            <span class="keyword">const</span> combined = [...arr1, ...arr2]; <span class="comment">// [1,2,3,4,5,6]</span>
            <span class="keyword">const</span> copy = [...arr1]; <span class="comment">// shallow copy</span>
            <span class="keyword">const</span> max = <span class="keyword">Math</span>.max(...arr1); <span class="comment">// spread as arguments</span></pre>
            </div>
            <div class="code-block">
              <div class="code-header"><span>Spread in objects (ES2018)</span></div>
              <pre><span class="keyword">const</span> obj1 = { a: <span class="number">1</span>, b: <span class="number">2</span> };
            <span class="keyword">const</span> obj2 = { c: <span class="number">3</span>, ...obj1 };
            <span class="comment">// { c: 3, a: 1, b: 2 }</span>
            <span class="keyword">const</span> merged = { ...obj1, ...obj2 };</pre>
            </div>

            <h2>Rest (…) — Collect</h2>
            <p>Collects remaining elements into an array or object.</p>
            <div class="code-block">
              <div class="code-header"><span>Rest parameters</span></div>
              <pre><span class="keyword">function</span> <span class="function">sum</span>(...numbers) {
              <span class="keyword">return</span> numbers.reduce((acc, n) => acc + n, <span class="number">0</span>);
            }
            sum(<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>); <span class="comment">// 10</span></pre>
            </div>
            <div class="code-block">
              <div class="code-header"><span>Rest in destructuring</span></div>
              <pre><span class="keyword">const</span> [first, second, ...others] = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>];
            <span class="comment">// first = 1, second = 2, others = [3,4,5]</span>
            <span class="keyword">const</span> { a, ...restObj } = { a: <span class="number">1</span>, b: <span class="number">2</span>, c: <span class="number">3</span> };
            <span class="comment">// restObj = { b: 2, c: 3 }</span></pre>
            </div>
          `
        }, {
            id: 'mapset',
            icon: 'fa-layer-group',
            title: 'Map & Set',
            section: 'Data Structures',
            content: `
            <h1>Map &amp; Set</h1>
            <div class="subtitle">Key-value and unique-value collections.</div>

            <h2>Map</h2>
            <p>Stores key-value pairs where keys can be any type (objects, functions, primitives). Maintains insertion order.</p>
            <div class="code-block">
              <div class="code-header"><span>Map</span></div>
              <pre><span class="keyword">const</span> map = <span class="keyword">new</span> <span class="function">Map</span>();
            map.set(<span class="string">'name'</span>, <span class="string">'Alice'</span>);
            map.set(<span class="number">42</span>, <span class="string">'answer'</span>);
            map.set({ id: <span class="number">1</span> }, <span class="string">'object key'</span>);
            map.get(<span class="string">'name'</span>);     <span class="comment">// 'Alice'</span>
            map.has(<span class="number">42</span>);        <span class="comment">// true</span>
            map.delete(<span class="string">'name'</span>);
            map.size;           <span class="comment">// 2</span>
            map.clear();        <span class="comment">// remove all</span>

            <span class="comment">// Iteration</span>
            <span class="keyword">for</span> (<span class="keyword">const</span> [key, value] <span class="keyword">of</span> map) { <span class="comment">/* … */</span> }</pre>
            </div>

            <h2>WeakMap</h2>
            <p>Like Map but keys are objects held weakly (no reference count, can be garbage collected). Not iterable.</p>
            <div class="code-block">
              <div class="code-header"><span>WeakMap</span></div>
              <pre><span class="keyword">const</span> wm = <span class="keyword">new</span> <span class="function">WeakMap</span>();
            <span class="keyword">const</span> obj = {};
            wm.set(obj, <span class="string">'metadata'</span>);
            <span class="comment">// wm.get(obj) works; when obj is garbage collected, entry removed</span></pre>
            </div>

            <h2>Set</h2>
            <p>Stores unique values of any type. Maintains insertion order.</p>
            <div class="code-block">
              <div class="code-header"><span>Set</span></div>
              <pre><span class="keyword">const</span> set = <span class="keyword">new</span> <span class="function">Set</span>([<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">3</span>, <span class="number">4</span>]);
            <span class="comment">// {1, 2, 3, 4}</span>
            set.add(<span class="number">5</span>);
            set.has(<span class="number">2</span>);       <span class="comment">// true</span>
            set.delete(<span class="number">3</span>);
            set.size;          <span class="comment">// 3</span>
            <span class="keyword">for</span> (<span class="keyword">const</span> value <span class="keyword">of</span> set) { <span class="comment">/* … */</span> }</pre>
            </div>

            <h2>WeakSet</h2>
            <p>Similar to WeakMap, holds objects weakly, not iterable.</p>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Use cases</div>
              <p>Map is great for dictionaries with non‑string keys; Set for removing duplicates, storing unique items, and set operations (union, intersection using loops).</p>
            </div>
          `
        }, {
            id: 'errorhandling',
            icon: 'fa-exclamation-circle',
            title: 'Error Handling',
            section: 'Asynchronous',
            content: `
            <h1>Error Handling</h1>
            <div class="subtitle">try, catch, finally, and throw.</div>

            <h2>try / catch / finally</h2>
            <div class="code-block">
              <div class="code-header"><span>Error handling</span></div>
              <pre><span class="keyword">try</span> {
              <span class="comment">// code that may throw</span>
              <span class="keyword">const</span> result = riskyOperation();
            } <span class="keyword">catch</span> (error) {
              <span class="keyword">console</span>.error(<span class="string">'Caught:'</span>, error.message);
            } <span class="keyword">finally</span> {
              <span class="keyword">console</span>.log(<span class="string">'Always runs'</span>); <span class="comment">// cleanup, closing connections, etc.</span>
            }</pre>
            </div>

            <h2>Throwing Errors</h2>
            <p>You can throw any value, but it's best practice to throw an instance of <code>Error</code> or a subclass.</p>
            <div class="code-block">
              <div class="code-header"><span>throw</span></div>
              <pre><span class="keyword">function</span> <span class="function">divide</span>(a, b) {
              <span class="keyword">if</span> (b === <span class="number">0</span>) {
                <span class="keyword">throw</span> <span class="keyword">new</span> <span class="function">Error</span>(<span class="string">'Division by zero'</span>);
              }
              <span class="keyword">return</span> a / b;
            }</pre>
            </div>

            <h2>Custom Error Classes</h2>
            <p>Extend <code>Error</code> to add custom properties and improve error categorization.</p>
            <div class="code-block">
              <div class="code-header"><span>Custom error</span></div>
              <pre><span class="keyword">class</span> <span class="function">ValidationError</span> <span class="keyword">extends</span> Error {
              <span class="function">constructor</span>(message, field) {
                <span class="keyword">super</span>(message);
                <span class="variable">this</span>.name = <span class="string">'ValidationError'</span>;
                <span class="variable">this</span>.field = field;
              }
            }
            <span class="keyword">throw</span> <span class="keyword">new</span> <span class="function">ValidationError</span>(<span class="string">'Invalid email'</span>, <span class="string">'email'</span>);</pre>
            </div>

            <h2>Handling Async Errors</h2>
            <p>With promises, use <code>.catch()</code>; with async/await, wrap in try/catch.</p>

            <div class="callout warning">
              <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> Uncaught errors</div>
              <p>Unhandled promise rejections can crash Node.js. Always attach a <code>.catch()</code> or handle errors in async functions.</p>
            </div>
          `
        }, {
            id: 'closures',
            icon: 'fa-box',
            title: 'Closures',
            section: 'Functions',
            content: `
            <h1>Closures</h1>
            <div class="subtitle">Functions that remember their lexical scope.</div>

            <p>A closure is created when a function is defined inside another function and has access to the outer function's variables, even after the outer function has returned. This is a fundamental feature of JavaScript.</p>

            <div class="code-block">
              <div class="code-header"><span>Closure example</span></div>
              <pre><span class="keyword">function</span> <span class="function">makeCounter</span>() {
              <span class="keyword">let</span> count = <span class="number">0</span>;
              <span class="keyword">return</span> <span class="keyword">function</span>() {
                count++;
                <span class="keyword">return</span> count;
              };
            }

            <span class="keyword">const</span> counter = makeCounter();
            counter(); <span class="comment">// 1</span>
            counter(); <span class="comment">// 2</span>
            counter(); <span class="comment">// 3</span></pre>
            </div>

            <h2>Practical Uses</h2>
            <ul>
              <li><strong>Data privacy:</strong> simulate private variables.</li>
              <li><strong>Function factories:</strong> create functions with preset parameters (partial application).</li>
              <li><strong>Event handlers and callbacks:</strong> maintain state across asynchronous operations.</li>
              <li><strong>Memoization:</strong> cache computed results.</li>
            </ul>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Memory and performance</div>
              <p>Closures keep outer variables alive, which can cause memory leaks if not managed properly (e.g., large data in closures). Be mindful of performance in loops.</p>
            </div>
          `
        }, {
            id: 'prototypes',
            icon: 'fa-sitemap',
            title: 'Prototypes & Inheritance',
            section: 'Objects & OOP',
            content: `
            <h1>Prototypes &amp; Inheritance</h1>
            <div class="subtitle">JavaScript's prototypal inheritance model.</div>

            <h2>Prototype Chain</h2>
            <p>Every object has an internal <code>[[Prototype]]</code> link (accessible via <code>Object.getPrototypeOf()</code> or <code>__proto__</code>). When a property is accessed, JavaScript walks up the chain until it finds it or reaches <code>null</code>.</p>

            <h2>Setting Prototypes</h2>
            <div class="code-block">
              <div class="code-header"><span>Object.create</span></div>
              <pre><span class="keyword">const</span> parent = {
              greet() { <span class="keyword">return</span> <span class="string">'Hello'</span>; }
            };

            <span class="keyword">const</span> child = <span class="keyword">Object</span>.create(parent);
            child.greet(); <span class="comment">// 'Hello'</span>
            child.ownMethod = <span class="keyword">function</span>() { <span class="comment">/* … */</span> };</pre>
            </div>

            <h2>Constructor Functions</h2>
            <p>Functions have a <code>prototype</code> property that becomes the prototype of objects created with <code>new</code>.</p>
            <div class="code-block">
              <div class="code-header"><span>Constructor</span></div>
              <pre><span class="keyword">function</span> <span class="function">Person</span>(name) {
              <span class="variable">this</span>.name = name;
            }
            Person.prototype.greet = <span class="keyword">function</span>() {
              <span class="keyword">return</span> <span class="string">\`Hi, I'm \${this.name}\`</span>;
            };

            <span class="keyword">const</span> alice = <span class="keyword">new</span> <span class="function">Person</span>(<span class="string">'Alice'</span>);
            alice.greet(); <span class="comment">// "Hi, I'm Alice"</span>

            <span class="comment">// Check prototype chain</span>
            <span class="keyword">Object</span>.getPrototypeOf(alice) === Person.prototype; <span class="comment">// true</span>
            Person.prototype.isPrototypeOf(alice); <span class="comment">// true</span></pre>
            </div>

            <h2>ES6 Classes vs Prototypes</h2>
            <p>Classes are syntactic sugar but still use prototypal inheritance under the hood.</p>
          `
        }, {
            id: 'this',
            icon: 'fa-arrow-pointer',
            title: 'this keyword',
            section: 'Functions',
            content: `
            <h1>The <code>this</code> Keyword</h1>
            <div class="subtitle">Understanding context in JavaScript.</div>

            <h2>What is <code>this</code>?</h2>
            <p>The value of <code>this</code> is determined by how a function is called. It is not set until the function is invoked.</p>

            <h2>Rules (in order of precedence)</h2>
            <ol>
              <li><strong>New binding:</strong> when a function is called with <code>new</code>, <code>this</code> is the newly created instance.</li>
              <li><strong>Explicit binding:</strong> using <code>call</code>, <code>apply</code>, or <code>bind</code> — sets <code>this</code> explicitly.</li>
              <li><strong>Implicit binding:</strong> when a function is called as a method of an object, <code>this</code> is that object.</li>
              <li><strong>Default binding:</strong> in non‑strict mode, <code>this</code> is the global object (<code>window</code> in browsers). In strict mode, it's <code>undefined</code>.</li>
            </ol>
            <p>Arrow functions ignore these rules and inherit <code>this</code> from the enclosing lexical scope.</p>

            <div class="code-block">
              <div class="code-header"><span>Examples</span></div>
              <pre><span class="keyword">const</span> obj = {
              name: <span class="string">'Alice'</span>,
              greet: <span class="keyword">function</span>() {
                <span class="keyword">console</span>.log(<span class="variable">this</span>.name);
              }
            };
            obj.greet(); <span class="comment">// 'Alice' (implicit)</span>

            <span class="keyword">const</span> greetFn = obj.greet;
            greetFn(); <span class="comment">// undefined in strict, window.name otherwise</span>

            <span class="keyword">const</span> bound = obj.greet.bind(obj);
            bound(); <span class="comment">// 'Alice' (explicit)</span>

            <span class="keyword">function</span> <span class="function">Person</span>(name) {
              <span class="variable">this</span>.name = name;
            }
            <span class="keyword">const</span> p = <span class="keyword">new</span> <span class="function">Person</span>(<span class="string">'Bob'</span>); <span class="comment">// new binding</span></pre>
            </div>
          `
        }, {
            id: 'callapplybind',
            icon: 'fa-hand-pointer',
            title: 'call, apply, bind',
            section: 'Functions',
            content: `
            <h1>call, apply, bind</h1>
            <div class="subtitle">Explicitly setting <code>this</code>.</div>

            <h2>call</h2>
            <p>Calls a function with a given <code>this</code> value and arguments provided individually.</p>
            <div class="code-block">
              <div class="code-header"><span>call</span></div>
              <pre><span class="keyword">function</span> <span class="function">greet</span>(greeting, punctuation) {
              <span class="keyword">return</span> <span class="string">\`\${greeting}, \${this.name}\${punctuation}\`</span>;
            }
            <span class="keyword">const</span> person = { name: <span class="string">'Alice'</span> };
            greet.call(person, <span class="string">'Hello'</span>, <span class="string">'!'</span>); <span class="comment">// "Hello, Alice!"</span></pre>
            </div>

            <h2>apply</h2>
            <p>Same as <code>call</code>, but arguments are passed as an array (or array‑like).</p>
            <div class="code-block">
              <div class="code-header"><span>apply</span></div>
              <pre>greet.apply(person, [<span class="string">'Hi'</span>, <span class="string">'?'</span>]); <span class="comment">// "Hi, Alice?"</span>

            <span class="comment">// Useful for arrays</span>
            <span class="keyword">const</span> nums = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>];
            <span class="keyword">const</span> max = <span class="keyword">Math</span>.max.apply(<span class="null">null</span>, nums); <span class="comment">// 3 (or use spread)</span></pre>
            </div>

            <h2>bind</h2>
            <p>Creates a new function with <code>this</code> bound to the given value. It does not invoke the function immediately.</p>
            <div class="code-block">
              <div class="code-header"><span>bind</span></div>
              <pre><span class="keyword">const</span> boundGreet = greet.bind(person, <span class="string">'Hey'</span>);
            boundGreet(<span class="string">'!'</span>); <span class="comment">// "Hey, Alice!"</span>

            <span class="comment">// Partial application</span>
            <span class="keyword">const</span> add = (a, b) => a + b;
            <span class="keyword">const</span> add5 = add.bind(<span class="null">null</span>, <span class="number">5</span>);
            add5(<span class="number">3</span>); <span class="comment">// 8</span></pre>
            </div>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Arrow functions</div>
              <p>Arrow functions cannot be bound; they inherit <code>this</code> from the surrounding scope. <code>bind</code> has no effect.</p>
            </div>
          `
        }, {
            id: 'json',
            icon: 'fa-brackets-curly',
            title: 'JSON',
            section: 'Data Structures',
            content: `
            <h1>JSON</h1>
            <div class="subtitle">JavaScript Object Notation — data interchange format.</div>

            <h2>Parsing JSON</h2>
            <div class="code-block">
              <div class="code-header"><span>JSON.parse</span></div>
              <pre><span class="keyword">const</span> jsonStr = <span class="string">'{"name":"Alice","age":30}'</span>;
            <span class="keyword">const</span> obj = <span class="keyword">JSON</span>.parse(jsonStr);
            <span class="comment">// { name: 'Alice', age: 30 }</span>

            <span class="comment">// Reviver function to transform values</span>
            <span class="keyword">const</span> parsed = <span class="keyword">JSON</span>.parse(jsonStr, (key, value) => {
              <span class="keyword">if</span> (key === <span class="string">'age'</span>) <span class="keyword">return</span> value + <span class="number">1</span>;
              <span class="keyword">return</span> value;
            });</pre>
            </div>

            <h2>Stringifying</h2>
            <div class="code-block">
              <div class="code-header"><span>JSON.stringify</span></div>
              <pre><span class="keyword">const</span> obj = { name: <span class="string">'Bob'</span>, age: <span class="number">25</span>, active: <span class="boolean">true</span> };
            <span class="keyword">const</span> json = <span class="keyword">JSON</span>.stringify(obj);
            <span class="comment">// '{"name":"Bob","age":25,"active":true}'</span>

            <span class="comment">// Pretty print with indentation</span>
            <span class="keyword">JSON</span>.stringify(obj, <span class="null">null</span>, <span class="number">2</span>);

            <span class="comment">// Replacer to filter or transform</span>
            <span class="keyword">JSON</span>.stringify(obj, (key, value) => {
              <span class="keyword">if</span> (key === <span class="string">'age'</span>) <span class="keyword">return</span> <span class="keyword">undefined</span>; <span class="comment">// exclude age</span>
              <span class="keyword">return</span> value;
            });</pre>
            </div>

            <div class="callout warning">
              <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> Limitations</div>
              <p><code>JSON.stringify</code> excludes functions, <code>undefined</code>, and symbols. It also doesn't handle cyclic references (will throw). Use a custom replacer or libraries for complex objects.</p>
            </div>
          `
        }, {
            id: 'regex',
            icon: 'fa-code',
            title: 'Regular Expressions',
            section: 'Data Structures',
            content: `
            <h1>Regular Expressions</h1>
            <div class="subtitle">Pattern matching with RegExp.</div>

            <h2>Creating Regex</h2>
            <div class="code-block">
              <div class="code-header"><span>Literal & Constructor</span></div>
              <pre><span class="keyword">const</span> regex1 = <span class="regex">/hello/</span>;
            <span class="keyword">const</span> regex2 = <span class="keyword">new</span> <span class="function">RegExp</span>(<span class="string">'hello'</span>, <span class="string">'i'</span>); <span class="comment">// case-insensitive</span></pre>
            </div>

            <h2>Flags</h2>
            <ul>
              <li><code>g</code> — global (find all matches)</li>
              <li><code>i</code> — case‑insensitive</li>
              <li><code>m</code> — multiline (affects ^ and $)</li>
              <li><code>s</code> — dotAll (<code>.</code> matches newlines)</li>
              <li><code>u</code> — Unicode (enable full Unicode matching)</li>
              <li><code>y</code> — sticky (matches from lastIndex)</li>
            </ul>

            <h2>Common Methods</h2>
            <table class="ref-table">
              <thead><tr><th>Method</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td class="method-name"><code>test()</code></td><td>Returns boolean if match exists.</td></tr>
                <tr><td class="method-name"><code>exec()</code></td><td>Returns match details or null (with capture groups).</td></tr>
                <tr><td class="method-name"><code>match()</code></td><td>String method: returns matches (array or null).</td></tr>
                <tr><td class="method-name"><code>matchAll()</code></td><td>Returns an iterator of all matches with capture groups.</td></tr>
                <tr><td class="method-name"><code>replace()</code></td><td>String method: replaces matches.</td></tr>
                <tr><td class="method-name"><code>replaceAll()</code></td><td>Replaces all matches.</td></tr>
                <tr><td class="method-name"><code>split()</code></td><td>Splits string by regex.</td></tr>
                <tr><td class="method-name"><code>search()</code></td><td>Returns index of first match or -1.</td></tr>
              </tbody>
            </table>

            <div class="code-block">
              <div class="code-header"><span>Examples</span></div>
              <pre><span class="keyword">const</span> str = <span class="string">'Hello world'</span>;
            <span class="regex">/world/</span>.test(str);      <span class="comment">// true</span>
            str.match(<span class="regex">/[A-Z]/g</span>);   <span class="comment">// ['H']</span>
            str.replace(<span class="regex">/world/</span>, <span class="string">'JS'</span>); <span class="comment">// 'Hello JS'</span>
            str.split(<span class="regex">/\s+/</span>);     <span class="comment">// ['Hello', 'world']</span></pre>
            </div>
          `
        }, {
            id: 'generators',
            icon: 'fa-arrows-rotate',
            title: 'Generators',
            section: 'ES6+ Features',
            content: `
            <h1>Generators</h1>
            <div class="subtitle">Functions that can be paused and resumed.</div>

            <p>Generator functions use <code>function*</code> syntax and the <code>yield</code> keyword to produce a sequence of values. They are iterable.</p>

            <div class="code-block">
              <div class="code-header"><span>Generator</span></div>
              <pre><span class="keyword">function</span>* <span class="function">count</span>(n) {
              <span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">0</span>; i < n; i++) {
                <span class="keyword">yield</span> i;
              }
            }

            <span class="keyword">const</span> gen = count(<span class="number">3</span>);
            gen.next(); <span class="comment">// { value: 0, done: false }</span>
            gen.next(); <span class="comment">// { value: 1, done: false }</span>
            gen.next(); <span class="comment">// { value: 2, done: false }</span>
            gen.next(); <span class="comment">// { value: undefined, done: true }</span>

            <span class="comment">// Iterating with for...of</span>
            <span class="keyword">for</span> (<span class="keyword">const</span> num <span class="keyword">of</span> count(<span class="number">3</span>)) {
              <span class="keyword">console</span>.log(num);
            }</pre>
            </div>

            <h2>yield*</h2>
            <p>Delegates to another generator or iterable.</p>
            <div class="code-block">
              <div class="code-header"><span>yield*</span></div>
              <pre><span class="keyword">function</span>* <span class="function">delegator</span>() {
              <span class="keyword">yield</span>* [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>];
              <span class="keyword">yield</span>* count(<span class="number">2</span>);
            }</pre>
            </div>

            <h2>Use Cases</h2>
            <ul>
              <li>Lazy evaluation / infinite sequences</li>
              <li>Custom iterators</li>
              <li>Asynchronous flow control (with libraries like <code>co</code>)</li>
            </ul>
          `
        }, {
            id: 'proxy',
            icon: 'fa-shield',
            title: 'Proxy & Reflect',
            section: 'ES6+ Features',
            content: `
            <h1>Proxy &amp; Reflect</h1>
            <div class="subtitle">Intercept and customize operations on objects.</div>

            <h2>Proxy</h2>
            <p>A <code>Proxy</code> wraps an object and intercepts operations like property access, assignment, deletion, function calls, etc. The <strong>handler</strong> defines traps.</p>
            <div class="code-block">
              <div class="code-header"><span>Proxy</span></div>
              <pre><span class="keyword">const</span> target = { message: <span class="string">'Hello'</span> };
            <span class="keyword">const</span> handler = {
              get(obj, prop) {
                <span class="keyword">if</span> (prop <span class="keyword">in</span> obj) {
                  <span class="keyword">return</span> obj[prop];
                }
                <span class="keyword">return</span> <span class="string">'Property not found'</span>;
              },
              set(obj, prop, value) {
                <span class="keyword">if</span> (prop === <span class="string">'age'</span> && value < <span class="number">0</span>) {
                  <span class="keyword">throw</span> <span class="keyword">new</span> <span class="function">Error</span>(<span class="string">'Age must be positive'</span>);
                }
                obj[prop] = value;
                <span class="keyword">return</span> <span class="boolean">true</span>; <span class="comment">// indicate success</span>
              }
            };

            <span class="keyword">const</span> proxy = <span class="keyword">new</span> <span class="function">Proxy</span>(target, handler);
            proxy.message; <span class="comment">// 'Hello'</span>
            proxy.unknown; <span class="comment">// 'Property not found'</span>
            proxy.age = <span class="number">30</span>; <span class="comment">// OK</span>
            proxy.age = <span class="number">-5</span>; <span class="comment">// throws</span></pre>
            </div>

            <h2>Reflect</h2>
            <p><code>Reflect</code> provides static methods for performing default operations. It pairs well with Proxy traps to avoid repeating default behavior.</p>
            <div class="code-block">
              <div class="code-header"><span>Reflect</span></div>
              <pre><span class="keyword">const</span> obj = { a: <span class="number">1</span>, b: <span class="number">2</span> };
            <span class="keyword">Reflect</span>.has(obj, <span class="string">'a'</span>);      <span class="comment">// true</span>
            <span class="keyword">Reflect</span>.set(obj, <span class="string">'c'</span>, <span class="number">3</span>); <span class="comment">// true</span>
            <span class="keyword">Reflect</span>.get(obj, <span class="string">'c'</span>);      <span class="comment">// 3</span>
            <span class="keyword">Reflect</span>.deleteProperty(obj, <span class="string">'a'</span>); <span class="comment">// true</span></pre>
            </div>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Use cases</div>
              <p>Proxies are used for validation, logging, reactive programming (e.g., Vue 3 reactivity), and creating virtual objects.</p>
            </div>
          `
        }, {
            id: 'symbols',
            icon: 'fa-hashtag',
            title: 'Symbols',
            section: 'ES6+ Features',
            content: `
            <h1>Symbols</h1>
            <div class="subtitle">Unique and immutable primitive values.</div>

            <h2>Creating Symbols</h2>
            <div class="code-block">
              <div class="code-header"><span>Symbol</span></div>
              <pre><span class="keyword">const</span> sym1 = <span class="keyword">Symbol</span>(<span class="string">'id'</span>);
            <span class="keyword">const</span> sym2 = <span class="keyword">Symbol</span>(<span class="string">'id'</span>);
            sym1 === sym2; <span class="comment">// false — each symbol is unique</span>

            <span class="keyword">const</span> globalSym = <span class="keyword">Symbol</span>.for(<span class="string">'app.key'</span>); <span class="comment">// global symbol registry</span>
            <span class="keyword">const</span> same = <span class="keyword">Symbol</span>.for(<span class="string">'app.key'</span>);
            globalSym === same; <span class="comment">// true</span></pre>
            </div>

            <h2>Use Cases</h2>
            <ul>
              <li><strong>Unique property keys:</strong> avoid name collisions when adding metadata to objects.</li>
              <li><strong>Well-known symbols:</strong> <code>Symbol.iterator</code>, <code>Symbol.hasInstance</code>, <code>Symbol.toStringTag</code>, etc., used by JavaScript internals.</li>
              <li><strong>Private-like properties:</strong> not truly private but not enumerable in <code>for...in</code> or <code>Object.keys</code>.</li>
            </ul>

            <div class="code-block">
              <div class="code-header"><span>Symbol as property key</span></div>
              <pre><span class="keyword">const</span> sym = <span class="keyword">Symbol</span>(<span class="string">'secret'</span>);
            <span class="keyword">const</span> obj = {
              [sym]: <span class="string">'hidden value'</span>,
              visible: <span class="string">'public'</span>
            };
            <span class="keyword">Object</span>.keys(obj); <span class="comment">// ['visible'] — symbol keys are not enumerated</span>
            obj[sym]; <span class="comment">// 'hidden value'</span>

            <span class="keyword">const</span> iterableObj = {
              *[<span class="keyword">Symbol</span>.iterator]() {
                <span class="keyword">yield</span> <span class="number">1</span>;
                <span class="keyword">yield</span> <span class="number">2</span>;
              }
            };</pre>
            </div>
          `
        }, {
            id: 'eventloop',
            icon: 'fa-rotate',
            title: 'Event Loop',
            section: 'Asynchronous',
            content: `
            <h1>Event Loop</h1>
            <div class="subtitle">How JavaScript handles asynchronous operations.</div>

            <p>JavaScript is single-threaded but non-blocking. The event loop allows it to handle concurrent operations by delegating tasks to the browser or Node.js APIs.</p>

            <h2>How it works</h2>
            <ol>
              <li>The <strong>call stack</strong> executes synchronous code.</li>
              <li>Web APIs / background threads handle async tasks (e.g., <code>setTimeout</code>, fetch, DOM events).</li>
              <li>When an async task completes, its callback is pushed to the <strong>task queue</strong> (macrotask queue).</li>
              <li>The <strong>event loop</strong> continuously checks if the call stack is empty. If so, it takes the first task from the queue and pushes it onto the stack.</li>
            </ol>
            <p><strong>Microtasks</strong> (Promise callbacks, <code>queueMicrotask</code>) have higher priority and are processed immediately after the current task, before the next macrotask.</p>

            <div class="code-block">
              <div class="code-header"><span>Event loop demo</span></div>
              <pre><span class="keyword">console</span>.log(<span class="string">'1'</span>);
            setTimeout(() => <span class="keyword">console</span>.log(<span class="string">'2'</span>), <span class="number">0</span>);
            <span class="keyword">Promise</span>.resolve().then(() => <span class="keyword">console</span>.log(<span class="string">'3'</span>));
            <span class="keyword">console</span>.log(<span class="string">'4'</span>);
            <span class="comment">// Output: 1, 4, 3, 2</span></pre>
            </div>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Microtasks vs Macrotasks</div>
              <p>Microtasks (e.g., <code>Promise.then</code>, <code>MutationObserver</code>) are executed after each macrotask, before rendering. Macrotasks (setTimeout, I/O, UI events) are queued and processed one at a time.</p>
            </div>
          `
        }, {
            id: 'fetch',
            icon: 'fa-cloud-arrow-down',
            title: 'Fetch API',
            section: 'Browser APIs',
            content: `
            <h1>Fetch API</h1>
            <div class="subtitle">Modern way to make HTTP requests.</div>

            <h2>Basic Fetch</h2>
            <div class="code-block">
              <div class="code-header"><span>GET request</span></div>
              <pre><span class="keyword">fetch</span>(<span class="string">'https://api.example.com/data'</span>)
              .then(response => {
                <span class="keyword">if</span> (!response.ok) {
                  <span class="keyword">throw</span> <span class="keyword">new</span> <span class="function">Error</span>(<span class="string">\`HTTP error \${response.status}\`</span>);
                }
                <span class="keyword">return</span> response.json();
              })
              .then(data => <span class="keyword">console</span>.log(data))
              .catch(error => <span class="keyword">console</span>.error(error));</pre>
            </div>

            <h2>POST Request</h2>
            <div class="code-block">
              <div class="code-header"><span>POST with JSON</span></div>
              <pre><span class="keyword">fetch</span>(<span class="string">'https://api.example.com/data'</span>, {
              method: <span class="string">'POST'</span>,
              headers: {
                <span class="string">'Content-Type'</span>: <span class="string">'application/json'</span>
              },
              body: <span class="keyword">JSON</span>.stringify({ name: <span class="string">'Alice'</span>, age: <span class="number">30</span> })
            })
            .then(response => response.json())
            .then(data => <span class="keyword">console</span>.log(data));</pre>
            </div>

            <h2>AbortController</h2>
            <p>Abort a fetch request using <code>AbortController</code>.</p>
            <div class="code-block">
              <div class="code-header"><span>Abort</span></div>
              <pre><span class="keyword">const</span> controller = <span class="keyword">new</span> <span class="function">AbortController</span>();
            <span class="keyword">const</span> signal = controller.signal;
            fetch(url, { signal })
              .then(response => response.json())
              .catch(err => {
                <span class="keyword">if</span> (err.name === <span class="string">'AbortError'</span>) {
                  <span class="keyword">console</span>.log(<span class="string">'Fetch aborted'</span>);
                }
              });
            controller.abort(); <span class="comment">// cancel request</span></pre>
            </div>

            <div class="callout success">
              <div class="callout-title"><i class="fas fa-check-circle"></i> Async/Await</div>
              <p>Fetch is often used with <code>async/await</code> for cleaner code: <code>const response = await fetch(url);</code></p>
            </div>
          `
        }, {
            id: 'storage',
            icon: 'fa-database',
            title: 'Web Storage',
            section: 'Browser APIs',
            content: `
            <h1>Web Storage</h1>
            <div class="subtitle">localStorage and sessionStorage.</div>

            <h2>localStorage</h2>
            <p>Persists data even after the browser is closed. Stored as key-value pairs (strings). Data is shared across all tabs/windows from the same origin.</p>
            <div class="code-block">
              <div class="code-header"><span>localStorage</span></div>
              <pre><span class="keyword">localStorage</span>.setItem(<span class="string">'theme'</span>, <span class="string">'dark'</span>);
            <span class="keyword">const</span> theme = <span class="keyword">localStorage</span>.getItem(<span class="string">'theme'</span>);
            <span class="keyword">localStorage</span>.removeItem(<span class="string">'theme'</span>);
            <span class="keyword">localStorage</span>.clear();

            <span class="comment">// Store objects</span>
            <span class="keyword">localStorage</span>.setItem(<span class="string">'user'</span>, <span class="keyword">JSON</span>.stringify({ name: <span class="string">'Alice'</span> }));
            <span class="keyword">const</span> user = <span class="keyword">JSON</span>.parse(<span class="keyword">localStorage</span>.getItem(<span class="string">'user'</span>));</pre>
            </div>

            <h2>sessionStorage</h2>
            <p>Data is cleared when the page session ends (tab/window closed). It works exactly like <code>localStorage</code> but with session scope.</p>

            <h2>Storage Events</h2>
            <p>Listen to <code>storage</code> events on <code>window</code> to react to changes in storage from other tabs.</p>
            <div class="code-block">
              <div class="code-header"><span>Storage event</span></div>
              <pre><span class="keyword">window</span>.addEventListener(<span class="string">'storage'</span>, (e) => {
              <span class="keyword">console</span>.log(<span class="string">'Key changed:'</span>, e.key, e.newValue);
            });</pre>
            </div>

            <div class="callout warning">
              <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> Storage limits</div>
              <p>Most browsers limit storage to ~5–10 MB per origin. Data is stored as strings, so use <code>JSON.stringify</code> and <code>JSON.parse</code> for structured data.</p>
            </div>
          `
        }, {
            id: 'strictmode',
            icon: 'fa-shield-halved',
            title: 'Strict Mode',
            section: 'Basics',
            content: `
            <h1>Strict Mode</h1>
            <div class="subtitle">Opt into a restricted variant of JavaScript.</div>

            <p>Strict mode catches common coding errors, prevents unsafe actions, and improves performance by enabling more optimizations.</p>

            <h2>Enabling</h2>
            <div class="code-block">
              <div class="code-header"><span>Strict mode</span></div>
              <pre><span class="string">'use strict'</span>;

            <span class="comment">// All code inside this scope runs in strict mode</span></pre>
            </div>

            <h2>Key Changes</h2>
            <ul>
              <li>Cannot accidentally create global variables (assignment to undeclared variable throws).</li>
              <li>Assignments that would silently fail (e.g., writing to read‑only property) now throw.</li>
              <li>Duplicate parameter names are not allowed.</li>
              <li><code>delete</code> on non‑configurable properties throws.</li>
              <li><code>this</code> in functions is <code>undefined</code> instead of the global object.</li>
              <li>Reserved words: <code>implements</code>, <code>interface</code>, <code>let</code>, <code>package</code>, <code>private</code>, <code>protected</code>, <code>public</code>, <code>static</code>, <code>yield</code> are disallowed as variable names.</li>
              <li>Octal literals (e.g., <code>012</code>) are not allowed.</li>
            </ul>

            <div class="callout success">
              <div class="callout-title"><i class="fas fa-check-circle"></i> Default in modules</div>
              <p>ES6 modules and classes are automatically in strict mode, so you don't need to add <code>'use strict'</code>.</p>
            </div>
          `
        }, {
            id: 'hoisting',
            icon: 'fa-arrow-up',
            title: 'Hoisting',
            section: 'Basics',
            content: `
            <h1>Hoisting</h1>
            <div class="subtitle">Hoisting describes how JavaScript processes declarations before execution; declarations behave as if they are available earlier in their scope, but initialization rules differ for var, let/const, classes, and functions.</div>

            <h2>Function Hoisting</h2>
            <p>Function declarations are fully hoisted, so they can be called before they appear in the code.</p>
            <div class="code-block">
              <div class="code-header"><span>Function declarations</span></div>
              <pre><span class="comment">// This works — function declarations are hoisted</span>
            greet(); <span class="comment">// 'Hello!'</span>

            <span class="keyword">function</span> <span class="function">greet</span>() {
              <span class="keyword">console</span>.log(<span class="string">'Hello!'</span>);
            }</pre>
            </div>

            <h2>Variable Hoisting</h2>
            <p><code>var</code> declarations are hoisted and initialized with <code>undefined</code>. <code>let</code> and <code>const</code> are hoisted but not initialized (Temporal Dead Zone).</p>
            <div class="code-block">
              <div class="code-header"><span>var vs let/const</span></div>
              <pre><span class="keyword">console</span>.log(a); <span class="comment">// undefined (var is hoisted but not initialized)</span>
            <span class="keyword">var</span> a = <span class="number">5</span>;

            <span class="keyword">console</span>.log(b); <span class="comment">// ReferenceError: Cannot access 'b' before initialization</span>
            <span class="keyword">let</span> b = <span class="number">10</span>;</pre>
            </div>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Temporal Dead Zone (TDZ)</div>
              <p><code>let</code> and <code>const</code> are hoisted but not initialized. Accessing them before declaration results in a <code>ReferenceError</code>. This helps catch bugs early.</p>
            </div>
          `
        }, {
            id: 'timers',
            icon: 'fa-clock',
            title: 'Timers',
            section: 'Browser APIs',
            content: `
            <h1>Timers</h1>
            <div class="subtitle">setTimeout, setInterval, and requestAnimationFrame.</div>

            <h2>setTimeout</h2>
            <p>Executes a function after a delay (in milliseconds). Returns a timeout ID for cancellation.</p>
            <div class="code-block">
              <div class="code-header"><span>setTimeout</span></div>
              <pre><span class="keyword">const</span> timerId = setTimeout(() => {
              <span class="keyword">console</span>.log(<span class="string">'Runs after 1 second'</span>);
            }, <span class="number">1000</span>);
            <span class="comment">// Cancel</span>
            clearTimeout(timerId);</pre>
            </div>

            <h2>setInterval</h2>
            <p>Executes a function repeatedly at fixed intervals. Returns an interval ID.</p>
            <div class="code-block">
              <div class="code-header"><span>setInterval</span></div>
              <pre><span class="keyword">const</span> intervalId = setInterval(() => {
              <span class="keyword">console</span>.log(<span class="string">'Runs every 2 seconds'</span>);
            }, <span class="number">2000</span>);
            clearInterval(intervalId);</pre>
            </div>

            <h2>setTimeout with 0 delay</h2>
            <p>Often used to yield to the event loop, allowing other tasks to run before the callback.</p>

            <h2>requestAnimationFrame</h2>
            <p>Schedules a function to run before the next repaint. Ideal for smooth animations and optimized for screen refresh rate.</p>
            <div class="code-block">
              <div class="code-header"><span>requestAnimationFrame</span></div>
              <pre><span class="keyword">function</span> <span class="function">animate</span>(timestamp) {
              <span class="comment">// update animation</span>
              requestAnimationFrame(animate);
            }
            requestAnimationFrame(animate);</pre>
            </div>

            <div class="callout warning">
              <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> Minimum delay</div>
              <p>In browsers, <code>setTimeout</code> and <code>setInterval</code> have a minimum delay of 4ms for nested calls. Use <code>requestAnimationFrame</code> for precise timing.</p>
            </div>
          `
        }, {
            id: 'equality',
            icon: 'fa-equals',
            title: 'Equality',
            section: 'Basics',
            content: `
            <h1>Equality Comparisons</h1>
            <div class="subtitle">== vs === and Object.is.</div>

            <h2>Loose Equality (==)</h2>
            <p>Compares values after type coercion. Often leads to unexpected results; generally avoided.</p>
            <div class="code-block">
              <div class="code-header"><span>Loose equality</span></div>
              <pre><span class="number">5</span> == <span class="string">'5'</span>;      <span class="comment">// true (string coerced to number)</span>
            <span class="boolean">true</span> == <span class="number">1</span>;    <span class="comment">// true</span>
            <span class="null">null</span> == undefined; <span class="comment">// true</span>
            <span class="string">''</span> == <span class="number">0</span>;      <span class="comment">// true</span>
            [<span class="number">1</span>] == <span class="string">'1'</span>;  <span class="comment">// true (array coerced to string)</span></pre>
            </div>

            <h2>Strict Equality (===)</h2>
            <p>Compares values and types. No type coercion. <strong>Always prefer this.</strong></p>
            <div class="code-block">
              <div class="code-header"><span>Strict equality</span></div>
              <pre><span class="number">5</span> === <span class="string">'5'</span>;     <span class="comment">// false</span>
            <span class="boolean">true</span> === <span class="number">1</span>;   <span class="comment">// false</span>
            <span class="null">null</span> === undefined; <span class="comment">// false</span>
            <span class="keyword">NaN</span> === <span class="keyword">NaN</span>; <span class="comment">// false (special case)</span></pre>
            </div>

            <h2>Object.is</h2>
            <p>Similar to <code>===</code> but treats <code>NaN</code> as equal and <code>-0</code> as not equal to <code>0</code>.</p>
            <div class="code-block">
              <div class="code-header"><span>Object.is</span></div>
              <pre><span class="keyword">Object</span>.is(NaN, NaN);     <span class="comment">// true</span>
            <span class="keyword">Object</span>.is(<span class="number">-0</span>, <span class="number">0</span>);       <span class="comment">// false</span>
            <span class="keyword">Object</span>.is(<span class="number">5</span>, <span class="string">'5'</span>);     <span class="comment">// false</span></pre>
            </div>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> When to use which</div>
              <p>Use <code>===</code> for almost all comparisons. Use <code>Object.is</code> when you need to distinguish <code>-0</code> or check <code>NaN</code> reliably.</p>
            </div>
          `
        }, {
            id: 'scope',
            icon: 'fa-globe',
            title: 'Scope',
            section: 'Basics',
            content: `
            <h1>Scope</h1>
            <div class="subtitle">Visibility and lifetime of variables.</div>

            <h2>Global Scope</h2>
            <p>Variables declared outside any function or block are globally scoped. In browsers, they become properties of <code>window</code> (in non‑strict mode).</p>

            <h2>Function Scope</h2>
            <p><code>var</code> variables are function-scoped. They are accessible anywhere within the function, even before declaration (hoisted).</p>

            <h2>Block Scope</h2>
            <p><code>let</code> and <code>const</code> are block-scoped. They are only accessible within the nearest <code>{ }</code> block (if, for, while, etc.).</p>

            <h2>Lexical Scope</h2>
            <p>JavaScript uses lexical (static) scoping: a variable's scope is determined by its location in the source code. Nested functions have access to variables of outer functions (closures).</p>

            <div class="code-block">
              <div class="code-header"><span>Scope examples</span></div>
              <pre><span class="keyword">let</span> global = <span class="string">'global'</span>;

            <span class="keyword">function</span> <span class="function">test</span>() {
              <span class="keyword">var</span> functionScoped = <span class="string">'var'</span>;
              <span class="keyword">let</span> blockScoped = <span class="string">'let'</span>;

              <span class="keyword">if</span> (<span class="boolean">true</span>) {
                <span class="keyword">var</span> stillFunction = <span class="string">'still var'</span>; <span class="comment">// function-scoped</span>
                <span class="keyword">let</span> blockOnly = <span class="string">'only in this block'</span>;
              }
              <span class="comment">// stillFunction is accessible here</span>
              <span class="comment">// blockOnly is NOT accessible here</span>
            }</pre>
            </div>
          `
        }, {
            id: 'debounce',
            icon: 'fa-clock',
            title: 'Debouncing & Throttling',
            section: 'Browser APIs',
            content: `
            <h1>Debouncing &amp; Throttling</h1>
            <div class="subtitle">Performance optimization techniques.</div>

            <h2>Debouncing</h2>
            <p>Delays the execution of a function until after a specified wait time has elapsed since the last call. Useful for search inputs, resize events, and other high‑frequency events.</p>
            <div class="code-block">
              <div class="code-header"><span>Debounce</span></div>
              <pre><span class="keyword">function</span> <span class="function">debounce</span>(fn, delay) {
              <span class="keyword">let</span> timer;
              <span class="keyword">return</span> <span class="keyword">function</span>(...args) {
                clearTimeout(timer);
                timer = setTimeout(() => fn.apply(<span class="variable">this</span>, args), delay);
              };
            }

            <span class="keyword">const</span> debouncedSearch = debounce((query) => {
              <span class="keyword">console</span>.log(<span class="string">'Searching:'</span>, query);
            }, <span class="number">300</span>);
            debouncedSearch(<span class="string">'a'</span>);
            debouncedSearch(<span class="string">'ab'</span>); <span class="comment">// only the last call triggers after 300ms</span></pre>
            </div>

            <h2>Throttling</h2>
            <p>Limits the execution of a function to at most once per specified interval. Useful for scroll events, mouse movements, and other continuous events.</p>
            <div class="code-block">
              <div class="code-header"><span>Throttle</span></div>
              <pre><span class="keyword">function</span> <span class="function">throttle</span>(fn, limit) {
              <span class="keyword">let</span> inThrottle = <span class="boolean">false</span>;
              <span class="keyword">return</span> <span class="keyword">function</span>(...args) {
                <span class="keyword">if</span> (!inThrottle) {
                  fn.apply(<span class="variable">this</span>, args);
                  inThrottle = <span class="boolean">true</span>;
                  setTimeout(() => inThrottle = <span class="boolean">false</span>, limit);
                }
              };
            }

            <span class="keyword">const</span> throttledScroll = throttle(() => {
              <span class="keyword">console</span>.log(<span class="string">'Scroll event'</span>);
            }, <span class="number">200</span>);
            <span class="keyword">window</span>.addEventListener(<span class="string">'scroll'</span>, throttledScroll);</pre>
            </div>
          `
        }, {
            id: 'cookies',
            icon: 'fa-cookie-bite',
            title: 'Cookies',
            section: 'Browser APIs',
            content: `
            <h1>Cookies</h1>
            <div class="subtitle">Small pieces of data stored in the browser.</div>

            <h2>Setting Cookies</h2>
            <div class="code-block">
              <div class="code-header"><span>document.cookie</span></div>
              <pre><span class="comment">// Set a cookie (expires in 1 hour)</span>
            <span class="keyword">document</span>.cookie = <span class="string">'username=Alice; path=/; max-age=3600'</span>;

            <span class="comment">// Set with expiration date</span>
            <span class="keyword">const</span> expiry = <span class="keyword">new</span> <span class="function">Date</span>();
            expiry.setDate(expiry.getDate() + <span class="number">7</span>);
            <span class="keyword">document</span>.cookie = <span class="string">\`session=active; expires=\${expiry.toUTCString()}; path=/\`</span>;

            <span class="comment">// Secure & HttpOnly flags (for security)</span>
            <span class="keyword">document</span>.cookie = <span class="string">'token=abc123; Secure; HttpOnly; SameSite=Strict'</span>;</pre>
            </div>

            <h2>Reading Cookies</h2>
            <div class="code-block">
              <div class="code-header"><span>Reading</span></div>
              <pre><span class="keyword">const</span> allCookies = <span class="keyword">document</span>.cookie; <span class="comment">// semicolon separated string</span>
            <span class="keyword">const</span> cookies = <span class="keyword">Object</span>.fromEntries(
              <span class="keyword">document</span>.cookie.split(<span class="string">'; '</span>).map(c => c.split(<span class="string">'='</span>))
            );
            <span class="keyword">const</span> username = cookies.username;</pre>
            </div>

            <h2>Deleting a Cookie</h2>
            <p>Set the expiration date to a past date.</p>
            <div class="code-block">
              <div class="code-header"><span>Delete</span></div>
              <pre><span class="keyword">document</span>.cookie = <span class="string">'username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;'</span>;</pre>
            </div>

            <div class="callout warning">
              <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> Security</div>
              <p>Use <code>HttpOnly</code> and <code>Secure</code> flags for sensitive cookies to prevent access via JavaScript and ensure transmission over HTTPS.</p>
            </div>
          `
        }, {
            id: 'workers',
            icon: 'fa-microchip',
            title: 'Web Workers',
            section: 'Browser APIs',
            content: `
            <h1>Web Workers</h1>
            <div class="subtitle">Running JavaScript in background threads.</div>

            <p>Web Workers allow you to run scripts in background threads, keeping the main thread responsive for UI interactions.</p>

            <h2>Creating a Worker</h2>
            <div class="code-block">
              <div class="code-header"><span>main.js</span></div>
              <pre><span class="keyword">const</span> worker = <span class="keyword">new</span> <span class="function">Worker</span>(<span class="string">'worker.js'</span>);

            worker.postMessage({ type: <span class="string">'start'</span>, data: <span class="number">42</span> });

            worker.addEventListener(<span class="string">'message'</span>, (event) => {
              <span class="keyword">console</span>.log(<span class="string">'Result:'</span>, event.data);
            });

            worker.addEventListener(<span class="string">'error'</span>, (error) => {
              <span class="keyword">console</span>.error(<span class="string">'Worker error:'</span>, error);
            });</pre>
            </div>

            <div class="code-block">
              <div class="code-header"><span>worker.js</span></div>
              <pre>self.addEventListener(<span class="string">'message'</span>, (event) => {
              <span class="keyword">const</span> result = event.data.data * <span class="number">2</span>;
              self.postMessage({ result });
            });</pre>
            </div>

            <h2>Terminating</h2>
            <p><code>worker.terminate()</code> from the main thread or <code>self.close()</code> from inside the worker.</p>

            <h2>Shared Workers</h2>
            <p>Shared workers can be accessed by multiple scripts in different windows/frames.</p>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Limitations</div>
              <p>Workers cannot access the DOM, <code>window</code>, or <code>document</code>. They communicate via <code>postMessage</code> and <code>message</code> events. Use <code>importScripts()</code> to load external scripts.</p>
            </div>
          `
        }, {
            id: 'optionalchaining',
            icon: 'fa-question-circle',
            title: 'Optional Chaining',
            section: 'ES6+ Features',
            content: `
            <h1>Optional Chaining <span class="badge es2020">ES2020</span></h1>
            <div class="subtitle">Safely access nested properties.</div>

            <p>The <code>?.</code> operator allows you to read the value of a property located deep in a chain of objects without having to explicitly check if each reference is <code>null</code> or <code>undefined</code>. If any reference is <code>null</code> or <code>undefined</code>, the expression short‑circuits and returns <code>undefined</code>.</p>

            <div class="code-block">
              <div class="code-header"><span>Optional Chaining</span></div>
              <pre><span class="keyword">const</span> user = { profile: { name: <span class="string">'Alice'</span> } };
            <span class="keyword">const</span> city = user?.profile?.address?.city; <span class="comment">// undefined, no error</span>

            <span class="comment">// With function calls</span>
            <span class="keyword">const</span> result = obj?.method?.(); <span class="comment">// calls method if obj and method exist</span>

            <span class="comment">// With dynamic properties</span>
            <span class="keyword">const</span> key = <span class="string">'address'</span>;
            <span class="keyword">const</span> value = user?.profile?.[key]?.city;</pre>
            </div>

            <div class="callout success">
              <div class="callout-title"><i class="fas fa-check-circle"></i> Combined with nullish coalescing</div>
              <p>Optional chaining pairs well with <code>??</code> to provide defaults: <code>const city = user?.profile?.address?.city ?? 'Unknown';</code></p>
            </div>
          `
        }, {
            id: 'nullishcoalescing',
            icon: 'fa-circle-question',
            title: 'Nullish Coalescing',
            section: 'ES6+ Features',
            content: `
            <h1>Nullish Coalescing <span class="badge es2020">ES2020</span></h1>
            <div class="subtitle">Default values for <code>null</code> or <code>undefined</code>.</div>

            <p>The <code>??</code> operator returns the right‑hand operand when the left‑hand operand is <code>null</code> or <code>undefined</code>. It is a safer alternative to <code>||</code> which considers falsy values like <code>0</code>, <code>''</code>, and <code>false</code> as missing.</p>

            <div class="code-block">
              <div class="code-header"><span>??</span></div>
              <pre><span class="keyword">const</span> value = <span class="null">null</span> ?? <span class="string">'default'</span>; <span class="comment">// 'default'</span>
            <span class="keyword">const</span> zero = <span class="number">0</span> ?? <span class="string">'fallback'</span>;  <span class="comment">// 0 (not fallback)</span>
            <span class="keyword">const</span> empty = <span class="string">''</span> ?? <span class="string">'fallback'</span>; <span class="comment">// '' (not fallback)</span>
            <span class="keyword">const</span> undefinedValue = <span class="keyword">undefined</span> ?? <span class="string">'fallback'</span>; <span class="comment">// 'fallback'</span></pre>
            </div>

            <p>It also works with optional chaining to provide defaults for missing properties.</p>

            <div class="callout warning">
              <div class="callout-title"><i class="fas fa-exclamation-triangle"></i> Precedence</div>
              <p><code>??</code> has lower precedence than <code>||</code> and <code>&amp;&amp;</code>. Use parentheses when mixing them.</p>
            </div>
          `
        }, {
            id: 'logicalassignments',
            icon: 'fa-equals',
            title: 'Logical Assignment Operators',
            section: 'ES6+ Features',
            content: `
            <h1>Logical Assignment Operators <span class="badge es2021">ES2021</span></h1>
            <div class="subtitle"><code>&amp;&amp;=</code>, <code>||=</code>, <code>??=</code></div>

            <p>Combine logical operators with assignment. They perform the logical operation and assign the result only when the condition is met.</p>

            <div class="code-block">
              <div class="code-header"><span>Examples</span></div>
              <pre><span class="keyword">let</span> a = <span class="number">10</span>;
            <span class="keyword">let</span> b = <span class="number">0</span>;
            <span class="keyword">let</span> c = <span class="null">null</span>;

            a &&= <span class="number">20</span>; <span class="comment">// a is truthy, so a = 20</span>
            b ||= <span class="number">5</span>;  <span class="comment">// b is falsy, so b = 5</span>
            c ??= <span class="string">'default'</span>; <span class="comment">// c is null, so c = 'default'</span>

            <span class="comment">// Equivalent to:</span>
            a = a && <span class="number">20</span>; <span class="comment">// only if a is truthy</span>
            b = b || <span class="number">5</span>;  <span class="comment">// only if b is falsy</span>
            c = c ?? <span class="string">'default'</span>; <span class="comment">// only if c is null/undefined</span></pre>
            </div>

            <p>These are especially useful for initializing objects or ensuring values exist without verbose conditionals.</p>
          `
        }, {
            id: 'privatefields',
            icon: 'fa-lock',
            title: 'Private Fields',
            section: 'ES6+ Features',
            content: `
            <h1>Private Fields <span class="badge es2022">ES2022</span></h1>
            <div class="subtitle">True encapsulation in classes.</div>

            <p>Using <code>#</code> prefix to declare private instance fields, methods, and static fields. They are only accessible within the class body.</p>

            <div class="code-block">
              <div class="code-header"><span>Private fields</span></div>
              <pre><span class="keyword">class</span> <span class="function">Person</span> {
              #name;
              #age;

              <span class="function">constructor</span>(name, age) {
                <span class="variable">this</span>.#name = name;
                <span class="variable">this</span>.#age = age;
              }

              #getAge() { <span class="keyword">return</span> <span class="variable">this</span>.#age; }

              greet() {
                <span class="keyword">console</span>.log(<span class="string">\`Hi, I'm \${this.#name}\`</span>);
              }

              <span class="keyword">static</span> #staticPrivate = <span class="string">'static private'</span>;
            }

            <span class="keyword">const</span> p = <span class="keyword">new</span> <span class="function">Person</span>(<span class="string">'Alice'</span>, <span class="number">30</span>);
            p.#name; <span class="comment">// SyntaxError: private field</span>
            p.#getAge(); <span class="comment">// SyntaxError</span></pre>
            </div>

            <div class="callout info">
              <div class="callout-title"><i class="fas fa-lightbulb"></i> Benefits</div>
              <p>Private fields are truly private, not just conventions (like underscore). They prevent accidental access and enforce encapsulation.</p>
            </div>
          `
        }, {
            id: 'iterators',
            icon: 'fa-arrows-left-right',
            title: 'Iterators & Iterables',
            section: 'ES6+ Features',
            content: `
            <h1>Iterators &amp; Iterables</h1>
            <div class="subtitle">The iteration protocol.</div>

            <p>An object is <strong>iterable</strong> if it implements the <code>Symbol.iterator</code> method, which returns an <strong>iterator</strong>. An iterator is an object with a <code>next()</code> method that returns <code>{ value, done }</code>.</p>

            <div class="code-block">
              <div class="code-header"><span>Custom iterator</span></div>
              <pre><span class="keyword">const</span> myIterable = {
              [<span class="keyword">Symbol</span>.iterator]() {
                <span class="keyword">let</span> step = <span class="number">0</span>;
                <span class="keyword">return</span> {
                  next() {
                    step++;
                    <span class="keyword">if</span> (step <= <span class="number">3</span>) {
                      <span class="keyword">return</span> { value: step, done: <span class="boolean">false</span> };
                    }
                    <span class="keyword">return</span> { value: <span class="keyword">undefined</span>, done: <span class="boolean">true</span> };
                  }
                };
              }
            };

            <span class="keyword">for</span> (<span class="keyword">const</span> num <span class="keyword">of</span> myIterable) {
              <span class="keyword">console</span>.log(num); <span class="comment">// 1, 2, 3</span>
            }</pre>
            </div>

            <p>Built‑in iterables: Array, String, Map, Set, arguments, NodeList, etc. You can use <code>...spread</code>, <code>for...of</code>, and <code>Array.from</code> on them.</p>
          `
        }];;
