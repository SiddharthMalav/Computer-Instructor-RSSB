window.studyContent = window.studyContent || {};

window.studyContent.p2_programming_dsa = {
  title: "Programming & Data Structures (प्रोग्रामिंग और डेटा संरचनाएं)",
  desc: "Exhaustive coaching-replacement guide covering C, C++, OOPs, Java bytecode, Python, .NET, AI/ML, Blockchain, Arrays address calculation, Stacks/Queues expression conversions, BST, Graphs, and Sorting/Searching complexities.",
  
  // LEVEL 1: FOUNDATION (Intro + Detailed Theory)
  level1: {
    intro: `
      <div class="alert-box info">
        <strong>Syllabus Scope (Paper-II):</strong>
        <p>Yeh section programming languages (C, C++, Java, Python, .NET), modern technologies (AI/ML, Blockchain) aur complete Data Structures & Algorithms ko zero-level se exam level tak cover karta hai. Focus C/C++ pointer memory layouts aur complex DSA concepts par hai.</p>
      </div>
    `,
    theory: `
      <h2>PART 1: C PROGRAMMING & MEMORY INTERNALS</h2>
      
      <h3>1. C Memory Segments & Storage Classes</h3>
      <p>C Program compile hokar memory mein jab load hota hai, toh usko <strong>4 primary segments</strong> milte hain:</p>
      <ul class="notes-list">
        <li><strong>Text Segment:</strong> Compiled machine code (read-only segment).</li>
        <li><strong>Data Segment:</strong> Divided into <em>Initialized Data Segment</em> (global/static variables initialized by user) and <em>BSS (Block Started by Symbol) Segment</em> (uninitialized global/static variables, defaults to 0).</li>
        <li><strong>Heap Segment:</strong> Dynamic memory allocation ke liye use hota hai (controlled by <code>malloc</code>, <code>calloc</code>, etc.). Size runtime par grow karta hai.</li>
        <li><strong>Stack Segment:</strong> Function execution frames, local variables, aur return addresses store karta hai. FIFO (LIFO) model follow hota hai.</li>
      </ul>

      <p><strong>Storage Classes</strong> define scope, lifetime, default initial value aur storage region:</p>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Location</th>
            <th>Default Val</th>
            <th>Scope</th>
            <th>Lifetime</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>auto</code></td>
            <td>Stack</td>
            <td>Garbage</td>
            <td>Local Block</td>
            <td>Till block exits</td>
          </tr>
          <tr>
            <td><code>register</code></td>
            <td>CPU Register</td>
            <td>Garbage</td>
            <td>Local Block</td>
            <td>Till block exits</td>
          </tr>
          <tr>
            <td><code>static</code></td>
            <td>Data Segment</td>
            <td>0</td>
            <td>Local Block</td>
            <td>Till program ends</td>
          </tr>
          <tr>
            <td><code>extern</code></td>
            <td>Data Segment</td>
            <td>0</td>
            <td>Global File</td>
            <td>Till program ends</td>
          </tr>
        </tbody>
      </table>

      <div class="example-box">
        <span class="example-badge">Memory Trick</span>
        <div class="example-question">Can we fetch register variable's address in C?</div>
        <div class="example-solution">
          <p><strong>No!</strong> <code>register int x;</code> ke aage <code>&x</code> lagane par compiler compile-time error dega because CPU registers contain values, not memory addresses. register available na ho toh variable automatically stack memory par memory offset map ho jata hai.</p>
        </div>
      </div>

      <h3>2. Pointers & Pointers Arithmetic</h3>
      <p>Pointer ek variable hai jo kisi doosre variable ka memory address contain karta hai.
      <br>Pointer arithmetic compiler-dependent elements size par depend karti hai:</p>
      <pre><code>int x = 10;
int *ptr = &x; // ptr stores address of x
int **dptr = &ptr; // Double pointer stores address of ptr</code></pre>
      
      <p><strong>Arithmetic Rules:</strong>
      <br>- Adding $n$ to pointer: $NewAddress = BaseAddress + n \times sizeof(dataType)$.
      <br>- Subtracting pointers: $(ptr_2 - ptr_1)$ gives the number of elements between them, NOT the byte differences!</p>

      <ul class="notes-list">
        <li><strong>Pointer to Array (<code>int (*p)[5]</code>):</strong> Yeh ek pointer hai jo 5 elements ke array ko address karta hai.</li>
        <li><strong>Array of Pointers (<code>int *p[5]</code>):</strong> Yeh 5 integers ke pointers ka array hai.</li>
      </ul>

      <h3>3. Structure vs Union & Sizing Padding</h3>
      <ul class="notes-list">
        <li><strong>Structure:</strong> Har member variable ko alag memory space milti hai. Padding rules structure members ko boundary offset alignment ke according align karte hain.</li>
        <li><strong>Union:</strong> Saare members same start boundary position memory block share karte hain. Union size is equal to the size of its largest member variable.</li>
      </ul>
      <p><strong>Structure Padding:</strong> 32-bit compiler 4-byte boundaries par elements structure variables load karta hai performance optimize karne ke liye:</p>
      <pre><code>struct Demo {
    char a;    // 1 byte + 3 bytes padding (to align int to 4-byte boundary)
    int b;     // 4 bytes
    char c;    // 1 byte + 3 bytes padding (to align overall struct size to multiple of 4)
}; // sizeof(struct Demo) = 12 bytes!</code></pre>

      <hr>
      <h2>PART 2: C++ & OBJECT ORIENTED PROGRAMMING (OOPs)</h2>
      
      <h3>1. Copy Constructors & Memory Copying</h3>
      <ul class="notes-list">
        <li><strong>Shallow Copy:</strong> Variables ka exact binary state copy kiya jata hai. Agar pointer members dynamic location hold kar rahe hain, toh derived copies bhi same heap location point karengi. Jab ek destructure hoga, doosra pointer **Dangling Pointer** ban jayega.</li>
        <li><strong>Deep Copy:</strong> Derived class copy initialization mein alag heap location allocate ki jati hai aur pointers ki dynamic values copy ki jati hain. Custom copy constructor is mandatory here.</li>
      </ul>

      <h3>2. Multiple Inheritance & The Diamond Problem</h3>
      <p>Jab Class B aur C Class A se inherit hoti hain, aur Class D multiply inherit karti hai B aur C se, toh Class A ke properties double map ho jate hain Class D mein, causing ambiguity.</p>
      <p><strong>Solution:</strong> Inheriting classes virtually:</p>
      <pre><code>class A { public: void show(); };
class B : virtual public A { ... };
class C : virtual public A { ... };
class D : public B, public C { ... }; // Ambiguity resolved!</code></pre>

      <h3>3. Polymorphism & Vptr / Vtable Mechanics</h3>
      <p>Run-time polymorphism virtual functions aur dynamic binding se check hota hai:</p>
      <ul class="notes-list">
        <li><strong>vptr (Virtual Pointer):</strong> Har class object ke start structure boundary par pointer construct hota hai jo virtual function mappings point karta hai.</li>
        <li><strong>vtable (Virtual Table):</strong> Compile-time par class virtual functions addresses table structure create hota hai jo execution dynamic pointers resolution control karta hai.</li>
      </ul>

      <hr>
      <h2>PART 3: DATA STRUCTURES & ALGORITHMS (DSA)</h2>

      <h3>1. Address Calculations in 1D and 2D Arrays</h3>
      <p>Computers 1D aur 2D arrays element mappings consecutive linear memory offsets par map karte hain:</p>
      <ul class="notes-list">
        <li><strong>Row-Major Order (RMO):</strong> Left-to-right rows sequentially memory store sequence complete karti hain.</li>
        <li><strong>Column-Major Order (CMO):</strong> Columns sequentially store space elements align sequence hold karte hain.</li>
      </ul>

      <h3>2. Expression Conversions & Stacks</h3>
      <p>Stack LIFO (Last In First Out) structure follow karta hai. Expressions evaluation conversions mein operations precedence and stack actions list mapping verify hoti hai:</p>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Precedence Level</th>
            <th>Operator Group</th>
            <th>Associativity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3 (Highest)</td>
            <td><code>^</code> (Exponential)</td>
            <td>Right to Left</td>
          </tr>
          <tr>
            <td>2</td>
            <td><code>*</code>, <code>/</code>, <code>%</code></td>
            <td>Left to Right</td>
          </tr>
          <tr>
            <td>1 (Lowest)</td>
            <td><code>+</code>, <code>-</code></td>
            <td>Left to Right</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Circular Queues Indexing</h3>
      <p>Linear queue data shifting overheads se bachne ke liye circular buffers design kiye jate hain. Circular queue indices increment: <code>(rear + 1) % size</code>.</p>

      <h3>4. Sorting Mechanics & Complexity Matrix</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Sorting Type</th>
            <th>Best Case</th>
            <th>Worst Case</th>
            <th>Auxiliary Space</th>
            <th>Stable?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bubble Sort</td>
            <td>$O(N)$</td>
            <td>$O(N^2)$</td>
            <td>$O(1)$</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Selection Sort</td>
            <td>$O(N^2)$</td>
            <td>$O(N^2)$</td>
            <td>$O(1)$</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Insertion Sort</td>
            <td>$O(N)$</td>
            <td>$O(N^2)$</td>
            <td>$O(1)$</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Merge Sort</td>
            <td>$O(N \log N)$</td>
            <td>$O(N \log N)$</td>
            <td>$O(N)$</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Quick Sort</td>
            <td>$O(N \log N)$</td>
            <td>$O(N^2)$</td>
            <td>$O(\log N)$</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>

      <hr>
      <h2>PART 4: JAVA, PYTHON, .NET & EMERGINIT TECH</h2>
      <ul class="notes-list">
        <li><strong>JVM & Bytecode:</strong> Java source (.java) compile hokar architecture-neutral <code>Bytecode (.class)</code> banta hai. JVM class files ko read aur interpreter/JIT compile-process machine code par convert karta hai (WORA concept).</li>
        <li><strong>Python Dynamic Binding:</strong> Variables dynamic execution bindings resolve karte hain. <code>numpy</code> array matrix calculations handle karti hai aur <code>pandas</code> tabular datasets frames control karti hai.</li>
        <li><strong>.NET CLR:</strong> Common Language Runtime framework language integrations, dynamic memory cleanup (Garbage collector) aur runtime security controls handle karta hai.</li>
        <li><strong>AI/ML & Blockchain:</strong> Supervised (data labeled outputs sets) aur Unsupervised (dynamic clustering profiles). Blockchain decentralized encrypted hash connectivity block ledger maps structure control karta hai.</li>
      </ul>
    `
  },
  
  // LEVEL 2: EXAM READY (Formulas + Shortcut Tricks + 15 Solved Problems)
  level2: {
    formulas: `
      <table class="notes-table">
        <thead>
          <tr>
            <th>Operation / Concept</th>
            <th>Mathematical Formula / Alignment Rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Pointer Step Size</strong></td>
            <td>$NewAddress = BaseAddress + n \times sizeof(type)$</td>
          </tr>
          <tr>
            <td><strong>1D Array Element Address</strong></td>
            <td>$Address(A[i]) = BaseAddress + (i - LowerBound) \times ElementSize$</td>
          </tr>
          <tr>
            <td><strong>2D Array Row-Major Address</strong></td>
            <td>$Address(A[i][j]) = BaseAddress + [ (i - L_1) \times N + (j - L_2) ] \times ElementSize$ ($N$ = Number of Columns)</td>
          </tr>
          <tr>
            <td><strong>2D Array Column-Major Address</strong></td>
            <td>$Address(A[i][j]) = BaseAddress + [ (j - L_2) \times M + (i - L_1) ] \times ElementSize$ ($M$ = Number of Rows)</td>
          </tr>
          <tr>
            <td><strong>Circular Queue Increment</strong></td>
            <td>$index = (index + 1) \pmod{Size}$</td>
          </tr>
          <tr>
            <td><strong>Struct Size Padding Align</strong></td>
            <td>Sizes aligned to structural byte boundaries multiples of largest member byte size.</td>
          </tr>
        </tbody>
      </table>
    `,
    shortcuts: `
      <ul class="notes-list">
        <li><strong>Trick 1 (Pointer Equivalence):</strong> Array values lookup pointer addresses equivalents standard notations: <code>a[i] == *(a + i) == i[a]</code>.</li>
        <li><strong>Trick 2 (BST Traversals):</strong> BST (Binary Search Tree) Inorder traversal hamesha ascending sorted order return karta hai. Inorder parsing di na ho toh direct pre-order/post-order array values sort karke inorder retrieve kiya ja sakta hai.</li>
        <li><strong>Trick 3 (Quick Sort Worst Case):</strong> Quick sort array partition worst case complexity tab direct execute hoti hai jab input series completely sorted (ascending/descending) boundary array configurations state hold karegi.</li>
      </ul>
    `,
    solved: {
      easy: [
        {
          question: "C Language pointer offset sizing calculations:\n<code>int *p = (int*)2000;</code>\nFind address of <code>p + 4</code> on a 32-bit compiler target.",
          solution: "32-bit compiler par <code>int</code> ka size 4 bytes hota hai.\nFormula: $NewAddress = BaseAddress + n \\times sizeof(dataType)$\n$NewAddress = 2000 + 4 \\times 4 = 2000 + 16 = 2016$.\nAnswer: <strong>2016</strong>."
        },
        {
          question: "Let A[0...100] be an integer 1D array. Base address is 1000 and size of integer is 4 bytes. Find address of A[50].",
          solution: "Given: $BaseAddress = 1000$, $L = 0$, $i = 50$, $ElementSize = 4$.\nFormula: $Address = BaseAddress + (i - L) \\times ElementSize$\n$Address = 1000 + (50 - 0) \\times 4 = 1000 + 200 = 1200$.\nAnswer: <strong>1200</strong>."
        },
        {
          question: "Compare size of following structure and union:\n<code>struct S { char c; int i; };\nunion U { char c; int i; };</code>",
          solution: "1. <strong>Structure S:</strong> largest member <code>int i</code> is 4 bytes. <code>char c</code> occupies 1 byte + 3 bytes padding to align `int` to 4-byte boundaries. Total struct size = 8 bytes.\n2. <strong>Union U:</strong> Share memory. Size = Size of largest member = 4 bytes.\nAnswer: <strong>Size of Struct = 8, Union = 4</strong>."
        },
        {
          question: "Convert the infix expression: <code>x + y * z</code> to postfix notation.",
          solution: "Precedence check: <code>*</code> has higher precedence than <code>+</code>.\nStep 1: Evaluate <code>y * z</code> $\\rightarrow$ <code>yz*</code>.\nStep 2: Evaluate <code>x + yz*</code> $\\rightarrow$ <code>xyz*+</code>.\nAnswer: <strong>xyz*+</strong>."
        },
        {
          question: "Find the Inorder traversal of a BST with keys: { 15, 8, 20, 10 }.",
          solution: "Rule: BST dynamic inorder traversal is always sorted in ascending order.\nSorting keys: 8, 10, 15, 20.\nInorder: <strong>8, 10, 15, 20</strong>."
        }
      ],
      medium: [
        {
          question: "What is the size of the following structure in C?\n<code>struct Pack {\n    char x;\n    double y;\n    int z;\n};</code>",
          solution: "Largest primitive member is <code>double y</code> (8 bytes). Boundaries multiples of 8.\n- <code>char x</code> (1 byte) + 7 bytes padding.\n- <code>double y</code> (8 bytes).\n- <code>int z</code> (4 bytes) + 4 bytes padding (to align overall size to multiple of 8).\nTotal size = $8 + 8 + 8 = 24$ bytes.\nAnswer: <strong>24 bytes</strong>."
        },
        {
          question: "An array A[0...9][0...9] of float (4 bytes) starts at base 1000. Find address of A[5][4] in Row-Major order.",
          solution: "Given: $L_1 = 0$, $L_2 = 0$, $N = 10$, $i = 5$, $j = 4$, $Size = 4$.\nFormula: $Address = BaseAddress + [ (i - L_1) \\times N + (j - L_2) ] \\times Size$\n$Address = 1000 + [ (5 - 0) \\times 10 + (4 - 0) ] \\times 4$\n$= 1000 + [ 50 + 4 ] \\times 4 = 1000 + 54 \\times 4 = 1000 + 216 = 1216$.\nAnswer: <strong>1216</strong>."
        },
        {
          question: "In a circular queue of size 8, currently front = 2 and rear = 5. Draw elements position state index sequence. What will be the new rear after inserting three elements?",
          solution: "Circular queue rear increments: $rear = (rear + 1) \\pmod{Size}$.\n- Insertion 1: $rear = (5 + 1) \\pmod 8 = 6$.\n- Insertion 2: $rear = (6 + 1) \\pmod 8 = 7$.\n- Insertion 3: $rear = (7 + 1) \\pmod 8 = 0$.\nAnswer: <strong>rear = 0</strong>."
        },
        {
          question: "The preorder traversal of a BST is: <code>15, 10, 12, 20, 18</code>. Find its postorder traversal.",
          solution: "For BST, Inorder traversal is sorted preorder array $\\rightarrow$ Inorder = <code>10, 12, 15, 18, 20</code>.\nReconstructing tree from preorder and inorder:\n- 15 is Root.\n- Left sub-tree has {10, 12} where 10 is parent, 12 is right child of 10.\n- Right sub-tree has {18, 20} where 20 is parent, 18 is left child of 20.\nPostorder (Left, Right, Root) trace:\n- Left tree postorder: 12, 10.\n- Right tree postorder: 18, 20.\n- Main root: 15.\nPostorder sequence: <strong>12, 10, 18, 20, 15</strong>."
        },
        {
          question: "Find output of the following C code block:\n<pre><code>#include &lt;stdio.h&gt;\nvoid test() {\n    static int x = 5;\n    printf(\"%d \", ++x);\n}\nint main() {\n    test(); test();\n    return 0;\n}</code></pre>",
          solution: "<code>static int x</code> is initialized only once in the Data Segment.\n- Call 1: <code>++x</code> makes x = 6. Prints <code>6</code>.\n- Call 2: x continues from 6. <code>++x</code> makes x = 7. Prints <code>7</code>.\nOutput: <strong>6 7</strong>."
        }
      ],
      advanced: [
        {
          question: "An array A[-5...5][-10...10] of short integers (2 bytes each) is stored in Column-Major order. Base address is 2000. Find memory address of A[2][5].",
          solution: "Identify parameters:\n- $L_1 = -5$, $Upper_1 = 5$, Row count $M = 5 - (-5) + 1 = 11$.\n- $L_2 = -10$, $Upper_2 = 10$, Column count $N = 21$.\n- $BaseAddress = 2000$, $ElementSize = 2$.\nTarget element: A[2][5] $\\rightarrow$ $i = 2$, $j = 5$.\nColumn-Major Formula: $Address = BaseAddress + [ (j - L_2) \\times M + (i - L_1) ] \\times ElementSize$\n$Address = 2000 + [ (5 - (-10)) \\times 11 + (2 - (-5)) ] \\times 2$\n$= 2000 + [ 15 \\times 11 + 7 ] \\times 2$\n$= 2000 + [ 165 + 7 ] \\times 2 = 2000 + 172 \\times 2 = 2000 + 344 = 2344$.\nAnswer: <strong>2344</strong>."
        },
        {
          question: "Evaluate the postfix expression using stack parsing trace: <code>5 3 2 * + 8 2 / -</code>.",
          solution: "Postfix evaluation using Stack:\n- Push 5: Stack = [5]\n- Push 3: Stack = [5, 3]\n- Push 2: Stack = [5, 3, 2]\n- Parse '*': Pop 2, Pop 3. Compute $3 \\times 2 = 6$. Push 6. Stack = [5, 6]\n- Parse '+': Pop 6, Pop 5. Compute $5 + 6 = 11$. Push 11. Stack = [11]\n- Push 8: Stack = [11, 8]\n- Push 2: Stack = [11, 8, 2]\n- Parse '/': Pop 2, Pop 8. Compute $8 / 2 = 4$. Push 4. Stack = [11, 4]\n- Parse '-': Pop 4, Pop 11. Compute $11 - 4 = 7$. Push 7. Stack = [7].\nResult value = <strong>7</strong>."
        },
        {
          question: "Explain sizeof derived objects memory virtualization in C++:\n<code>class Base { public: virtual void show(); };\nclass Derived : public Base { public: void show() override; };</code>\nFind sizeof Base and Derived objects on a standard 64-bit compiler.",
          solution: "Since <code>Base</code> contains a virtual function, the compiler inserts a hidden virtual table pointer (<code>vptr</code>) inside it.\n- On a 64-bit compiler, pointer variables size is 8 bytes.\n- <code>Base</code> contains only <code>vptr</code> $\\rightarrow$ sizeof(Base) = 8 bytes.\n- <code>Derived</code> inherits from <code>Base</code> and override virtual show. It shares the same <code>vptr</code> location $\\rightarrow$ sizeof(Derived) = 8 bytes.\nAnswer: <strong>sizeof(Base) = 8, sizeof(Derived) = 8</strong>."
        },
        {
          question: "Find the worst-case number of comparisons required in a Quick Sort of array: <code>[10, 20, 30, 40, 50]</code> with pivot chosen as the last element.",
          solution: "The input array is already sorted. Pivot is last element.\n- Partition 1: Pivot 50. Comparisons count = 4. Partitions: [10, 20, 30, 40] and [].\n- Partition 2: Pivot 40. Comparisons = 3. Partitions: [10, 20, 30] and [].\n- Partition 3: Pivot 30. Comparisons = 2. Partitions: [10, 20] and [].\n- Partition 4: Pivot 20. Comparisons = 1. Partitions: [10] and [].\nTotal comparisons = $4 + 3 + 2 + 1 = 10$.\nGeneral formula for sorted array worst case: $N(N - 1) / 2 = 5 \\times 4 / 2 = 10$.\nAnswer: <strong>10 comparisons</strong>."
        },
        {
          question: "If Class A has virtual functions, and Class B inherits from Class A. Class B does not have virtual functions but overrides one from A. How many virtual table pointers (vptr) and vtables are generated at execution?",
          solution: "1. <strong>vtables:</strong> Two vtables are compiled (one for Class A, one for Class B containing overridden pointers).\n2. <strong>vptr:</strong> One vptr per instantiated object of either Class A or Class B. Derived class object does not create a new vptr, it inherits and reuses the vptr from Base.\nAnswer: <strong>2 vtables compiled, 1 vptr per instantiated object</strong>."
        }
      ]
    }
  },
  
  // LEVEL 3: ADVANCED COMPETITIVE (Comparison Tables + PYQs + Revision Sheet)
  level3: {
    comparisons: `
      <h3>1. malloc() vs calloc() Memory Allocation</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th><code>malloc()</code></th>
            <th><code>calloc()</code></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Parameters</td>
            <td>Single parameter: total bytes to allocate.</td>
            <td>Two parameters: number of elements and size of each element.</td>
          </tr>
          <tr>
            <td>Default Value</td>
            <td>Allocated block contains garbage values.</td>
            <td>Automatically initializes all allocated bytes to zero (0).</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>Faster because it does not initialize data bytes.</td>
            <td>Relatively slower due to automatic zero-initialization operations.</td>
          </tr>
        </tbody>
      </table>

      <h3>2. DFS (Depth First Search) vs BFS (Breadth First Search)</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>BFS</th>
            <th>DFS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data Structure</td>
            <td>Uses **Queue** (FIFO).</td>
            <td>Uses **Stack** (LIFO) or recursion.</td>
          </tr>
          <tr>
            <td>Memory Complexity</td>
            <td>$O(W)$ where $W$ is the maximum width of the tree/graph.</td>
            <td>$O(H)$ where $H$ is the maximum height of the tree/graph.</td>
          </tr>
          <tr>
            <td>Shortest Path</td>
            <td>Guarantees finding shortest path in unweighted graphs.</td>
            <td>Does not guarantee finding shortest path.</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Quick Sort vs Merge Sort</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Quick Sort</th>
            <th>Merge Sort</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Worst Case Complexity</td>
            <td>$O(N^2)$ (occurs for sorted/reverse-sorted inputs).</td>
            <td>Always $O(N \\log N)$.</td>
          </tr>
          <tr>
            <td>Auxiliary Space</td>
            <td>$O(\\log N)$ (in-place stack spaces).</td>
            <td>$O(N)$ (requires auxiliary copying arrays).</td>
          </tr>
          <tr>
            <td>Stability</td>
            <td>Unstable sorting.</td>
            <td>Stable sorting.</td>
          </tr>
        </tbody>
      </table>
    `,
    revision: {
      oneLiners: [
        "<strong>Storage Class Location:</strong> <code>static</code> and <code>extern</code> variables are stored in the Data Segment, while <code>auto</code> variables are stored in the Stack.",
        "<strong>Register Variable Scope:</strong> Register variables are stored in CPU registers and their memory addresses cannot be fetched using the address-of <code>&</code> operator.",
        "<strong>Structure Alignment:</strong> Structure size is padded to a multiple of the size of the largest primitive member.",
        "<strong>Union memory size:</strong> Sizing allocations for union equals the size of the largest variable member.",
        "<strong>Dangling Pointer:</strong> Pointer pointing to a memory address that has been deallocated (freed) is called a dangling pointer.",
        "<strong>Diamond Problem Solution:</strong> In C++, virtual inheritance is used to resolve the multiple inheritance diamond dependency problem.",
        "<strong>Object size with Virtual:</strong> Objects containing virtual functions have an additional compiler-inserted hidden virtual pointer (vptr) pointing to the vtable.",
        "<strong>Address calculations:</strong> Row-Major and Column-Major order calculation formulas determine 2D array positions sequentially.",
        "<strong>Stack expressions:</strong> Postfix expressions contain operators after operands (e.g. AB+), eliminating parentheses precedence rules.",
        "<strong>Linear vs Circular Queue:</strong> Circular queue indices wraps around to the beginning using modulo operations: <code>(rear + 1) % Size</code>.",
        "<strong>BST property:</strong> Left child value < parent value < right child value. BST inorder is always sorted in ascending order.",
        "<strong>DFS vs BFS data structure:</strong> BFS uses Queues, while DFS uses Stack structures or recursion.",
        "<strong>Stable sort property:</strong> Stable sorting algorithms preserve the relative order of duplicate elements in sorted outputs.",
        "<strong>In-place sorting:</strong> Sorting algorithms that do not require external memory space for operations (e.g. Bubble, Insertion, Selection).",
        "<strong>Java compilation:</strong> Java source compiler creates bytecode (.class files) executed by target-specific JVMs.",
        "<strong>Python memory model:</strong> Python variables are dynamically typed pointer references pointing to heap memory object structures.",
        "<strong>CLR role in .NET:</strong> Common Language Runtime (CLR) handles garbage collection, exception checks, and bytecode compilation.",
        "<strong>Supervised vs Unsupervised ML:</strong> Supervised uses labeled databases, while unsupervised groups data structures via clustering (e.g. K-Means).",
        "<strong>Blockchain immutability:</strong> Cryptographic hashes link each block to the previous block, preventing subsequent modifications.",
        "<strong>Quick Sort Worst Case:</strong> Quick sort worst-case time complexity is $O(N^2)$, which occurs when the array is already sorted."
      ],
      booster: `
        <div class="alert-box note">
          <strong>Exam Booster Strategy:</strong>
          <p>RSSB examinations have a strict 1/3 negative marking rule. For CS Programming and DSA problems, dry-run pointers and indices trace calculations precisely using paper worksheets before selecting options. Focus on vptr size additions (4 bytes on 32-bit, 8 bytes on 64-bit) and circular queue indexes underflow configurations.</p>
        </div>
      `
    }
  },
  
  // 50 SYLLABUS SPECIFIC PRACTICE QUESTIONS
  questions: {
    mcqs: [
      {
        id: "prg_m1",
        question: "Which storage class variables in C are initialized to zero by default and retain their values between function calls?",
        options: [
          "auto",
          "register",
          "static",
          "extern"
        ],
        answer: 2,
        explanation: "static variables Data Segment memory location par load hote hain, inki default initial value 0 hoti hai aur function termination ke baad bhi inki values destroy nahi hoti."
      },
      {
        id: "prg_m2",
        question: "What will be the output of the following C code snippet on a 32-bit system?\n<code>#include &lt;stdio.h&gt;\nint main() {\n    int a = 10;\n    register int *ptr = &a;\n    printf(\"%d\", *ptr);\n    return 0;\n}</code>",
        options: [
          "Compile-time error",
          "Runtime crash",
          "10",
          "Garbage value"
        ],
        answer: 2,
        explanation: "register keyword only storage location specify karta hai. Halanki hum register variable ka address nahi le sakte, but hum ek pointer variable ko register storage class de sakte hain (register int *ptr = &a; is completely valid and holds address of a). ptr register index address hold karega, outputs 10."
      },
      {
        id: "prg_m3",
        question: "What is the size of the following union on a system using 4-byte integers?\n<code>union Data {\n    char arr[10];\n    int val;\n    double d;\n};</code>",
        options: [
          "22 bytes",
          "10 bytes",
          "8 bytes",
          "16 bytes"
        ],
        answer: 3,
        explanation: "Union size must be a multiple of the alignment requirements of its largest primitive member. The largest primitive member is double (8 bytes). The total byte size must also be large enough to contain the largest member array (arr is 10 bytes). The smallest multiple of 8 greater than or equal to 10 is 16. Size = 16 bytes."
      },
      {
        id: "prg_m4",
        question: "Which C++ compiler feature resolves multiple paths inheritance ambiguity in the diamond inheritance schema?",
        options: [
          "Scope Resolution Operator",
          "Virtual Inheritance",
          "Multiple Inheritance overrides",
          "Pure Virtual functions"
        ],
        answer: 1,
        explanation: "Virtual inheritance child classes virtual public syntax compile karne par grandchild mein single copy map construct karta hai, resolving paths duplicate conflict ambiguity."
      },
      {
        id: "prg_m5",
        question: "If a base class contains virtual functions, how many vtable pointers (vptr) will exist in a single derived class object?",
        options: [
          "One vptr per virtual function",
          "Exactly one vptr per object",
          "Two vptrs",
          "Zero vptrs"
        ],
        answer: 1,
        explanation: "Class hierarchy mein objects start boundaries par compiler single hidden pointer vptr initialize karta hai jo class specific virtual lookup vtable point karta hai."
      },
      {
        id: "prg_m6",
        question: "In C++, which of the following class members are inherited by the derived class but cannot be accessed directly by member functions of the derived class?",
        options: [
          "Public members",
          "Protected members",
          "Private members",
          "Both Protected and Private members"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Private members Derived/child class memory structure block mein compile properties construct parameters update inherit hote hain par inko directly derived functions call access nahi kiya ja sakta, only base classes functions methods interface support scope variables resolve."
      },
      {
        id: "prg_m7",
        question: "Which of the following sorting algorithms is NOT an in-place sorting algorithm and requires O(N) auxiliary memory space?",
        options: [
          "Quick Sort",
          "Merge Sort",
          "Insertion Sort",
          "Bubble Sort"
        ],
        answer: 1,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Merge sort array divides values blocks mapping dynamic sorting merge loops execution support ke liye same size extra copying space array create karta hai, which requires O(N) auxiliary space."
      },
      {
        id: "prg_m8",
        question: "What is the worst-case time complexity of searching an element in a balanced binary search tree (like AVL tree) with N nodes?",
        options: [
          "O(N)",
          "O(N log N)",
          "O(log N)",
          "O(1)"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Balanced BST configurations (AVL tree / Red-Black Tree) height properties constant boundary constraints bounds follow karti hain $H = O(\\log N)$, isliye lookup searches maximum height loop iterations parameters follow karte hain: $O(\\log N)$."
      },
      {
        id: "prg_m9",
        question: "In Java, what is the dynamic module compiled by JVM at runtime to translate intermediate bytecode into native machine instructions?",
        options: [
          "Garbage Collector",
          "Class Loader",
          "Just-In-Time (JIT) Compiler",
          "Security Manager"
        ],
        answer: 2,
        explanation: "JIT Compiler JVM execution runtime engine par load blocks bytecode portions dynamically native instructions complete output map compiler performance accelerate karta hai."
      },
      {
        id: "prg_m10",
        question: "Which python library is built on array structures supporting multi-dimensional vector matrices arithmetic math computations?",
        options: [
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Scikit-learn"
        ],
        answer: 1,
        explanation: "NumPy library Ndarray vectors matrices objects mathematical modules integrations bindings performance processing optimize karne ke liye custom functions support karti hai."
      },
      {
        id: "prg_m11",
        question: "In .NET architecture, what framework engine executes intermediate language (IL) assemblies check security rules?",
        options: [
          "Framework Class Library (FCL)",
          "Common Language Specification (CLS)",
          "Common Language Runtime (CLR)",
          "Active Server Pages (ASP)"
        ],
        answer: 2,
        explanation: "Common Language Runtime (CLR) .NET application execution modules lifecycle garbage cleanups controls management handle karta hai."
      },
      {
        id: "prg_m12",
        question: "Which machine learning algorithm category uses unlabeled datasets to identify clusters patterns dynamically?",
        options: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Semi-supervised Learning",
          "Reinforcement Learning"
        ],
        answer: 1,
        explanation: "Unsupervised learning input variables dataset properties clustering similarities checks loops models execute patterns groups mapping classification formats determine karni hai."
      },
      {
        id: "prg_m13",
        question: "What mechanism validates transaction blocks integrity validation securely in decentralized Blockchain ledgers?",
        options: [
          "Consensus Protocols (e.g. PoW, PoS)",
          "SQL Normalization forms",
          "Distributed Process Schedulers",
          "Virtual Machine hypervisors"
        ],
        answer: 0,
        explanation: "Decentralized database nodes synchronizations blocks validations transactions reliability state verify consensus protocols PoW PoS cryptographic mechanisms block verification rules support determine karta hai."
      },
      {
        id: "prg_m14",
        question: "A 2D array A[1...10][1...20] of size 4 bytes element is stored in Row-Major order. Base address is 1000. Find address of A[3][5].",
        options: [
          "1176",
          "1200",
          "1076",
          "1160"
        ],
        answer: 0,
        explanation: "$Address = Base + [ (i - L_1) \\times N + (j - L_2) ] \\times Size$\n$Address = 1000 + [ (3 - 1) \\times 20 + (5 - 1) ] \\times 4$\n$= 1000 + [ 2 \\times 20 + 4 ] \\times 4 = 1000 + [ 40 + 4 ] \\times 4 = 1000 + 44 \\times 4 = 1000 + 176 = 1176$."
      },
      {
        id: "prg_m15",
        question: "Which data structure follows LIFO (Last In First Out) property representing function activation records frames?",
        options: [
          "Queue",
          "Linked List",
          "Stack",
          "Heap"
        ],
        answer: 2,
        explanation: "Stack data structures recursive calls loops executions parameters storage functions activation record frames mapping LIFO configurations follow karte hain."
      },
      {
        id: "prg_m16",
        question: "Convert the Infix Expression: <code>A + B * C / D</code> to Postfix. Choose the correct option.",
        options: [
          "A B C * D / +",
          "A B C * + D /",
          "A B * C D / +",
          "A B C D * / +"
        ],
        answer: 0,
        explanation: "Parsing precedence logic:\n1. <code>B * C</code> has higher priority $\\rightarrow$ <code>BC*</code>.\n2. Expression: <code>A + BC* / D</code>. Operands priorities: division first $\\rightarrow$ <code>BC*D/</code>.\n3. Finally add operations: <code>A + BC*D/</code> $\\rightarrow$ <code>ABC*D/+</code>.\nAnswer: ABC*D/+"
      },
      {
        id: "prg_m17",
        question: "In a circular queue of size 5, elements are inserted. What index rear pointer targets if currently rear = 4 and we insert one new element?",
        options: [
          "5",
          "0",
          "1",
          "rear remains 4"
        ],
        answer: 1,
        explanation: "Circular queue rear increments: $(rear + 1) \\pmod{Size} = (4 + 1) \\pmod 5 = 0$."
      },
      {
        id: "prg_m18",
        question: "Which of the following tree traversals visits the nodes in the order: Left Subtree, Right Subtree, Root?",
        options: [
          "Preorder",
          "Inorder",
          "Postorder",
          "Levelorder"
        ],
        answer: 2,
        explanation: "Postorder traversal visits left subtree first, right subtree next, and root node at the last step (L-R-Root)."
      },
      {
        id: "prg_m19",
        question: "What is the worst-case sorting time complexity of Quick Sort algorithm?",
        options: [
          "O(N log N)",
          "O(N)",
          "O(N^2)",
          "O(2^N)"
        ],
        answer: 2,
        explanation: "Quick sort partitioning pivot worst choices state configurations (already sorted inputs) partition updates arrays iterations loop execute: $O(N^2)$."
      },
      {
        id: "prg_m20",
        question: "Which sorting algorithm maintains the relative input order of equal values elements in the sorted output array?",
        options: [
          "Quick Sort",
          "Selection Sort",
          "Heap Sort",
          "Merge Sort"
        ],
        answer: 3,
        explanation: "Stable sort algorithms (jaise Merge Sort) duplicate element values ka relative initial sequence output main retain karte hain."
      }
    ],
    conceptual: [
      {
        question: "Trace the output of the following C pointer code:\n<code>#include &lt;stdio.h&gt;\nint main() {\n    char *arr[] = {\"apple\", \"banana\", \"cherry\"};\n    char **ptr = arr;\n    printf(\"%c\", *(*(ptr + 1) + 2));\n    return 0;\n}</code>",
        options: [
          "p",
          "n",
          "e",
          "Compile-time error"
        ],
        answer: 1,
        explanation: "1. <code>ptr</code> points to the first element of <code>arr</code> which is pointer to 'apple'.\n2. <code>ptr + 1</code> points to the second element which is pointer to 'banana'.\n3. <code>*(ptr + 1)</code> dereferences to pointer pointing to 'banana' character array start address 'b'.\n4. <code>*(ptr + 1) + 2</code> points to character offset 2 in 'banana' which is 'n' (0-indexed: b=0, a=1, n=2).\n5. dereferencing gives character 'n'."
      },
      {
        question: "Identify the memory alignment sizes structure:\n<code>struct Align {\n    char x;\n    int y;\n    short z;\n};</code>\nFind sizeof(struct Align) on a 32-bit compiler.",
        options: [
          "7 bytes",
          "10 bytes",
          "12 bytes",
          "8 bytes"
        ],
        answer: 2,
        explanation: "Largest member alignment primitive size is <code>int y</code> (4 bytes). Sizing boundary multiples of 4.\n- <code>char x</code>: 1 byte + 3 bytes padding (to align int to 4-byte boundaries).\n- <code>int y</code>: 4 bytes.\n- <code>short z</code>: 2 bytes + 2 bytes padding (to align total structure size to multiple of 4).\nTotal size = $4 + 4 + 4 = 12$ bytes."
      },
      {
        question: "Trace execution output parameters C static scope:\n<code>#include &lt;stdio.h&gt;\nint count() {\n    static int c = 10;\n    return c--;\n}\nint main() {\n    printf(\"%d %d\", count(), count());\n    return 0;\n}</code>",
        options: [
          "10 9",
          "9 10",
          "10 10",
          "Undefined / Compiler Dependent evaluation order"
        ],
        answer: 3,
        explanation: "C standards function call arguments evaluation order (left-to-right vs right-to-left) define nahi karti. standard dynamic compilers parameters expressions outputs evaluate order par depend karte hain, causing undefined behaviour / compiler dependent values."
      },
      {
        question: "What is output of C++ derived constructor destruction calling sequence code trace?\n<code>class A { public: A() {cout&lt;&lt;\"A\";} ~A() {cout&lt;&lt;\"a\";} };\nclass B : public A { public: B() {cout&lt;&lt;\"B\";} ~B() {cout&lt;&lt;\"b\";} };</code>\nFind print pattern when object of class B is created and destroyed.",
        options: [
          "ABba",
          "ABab",
          "BAab",
          "BAba"
        ],
        answer: 0,
        explanation: "- Constructor sequence: Base constructor executed first, then Derived class constructor $\\rightarrow$ prints AB.\n- Destructor sequence: Derived class destructor runs first, then Base class destructor $\\rightarrow$ prints ba.\nTotal outputs sequence: ABba."
      },
      {
        question: "An empty class without data member elements variable references is compiled in C++. What size does the object of this empty class hold?",
        options: [
          "0 bytes",
          "1 byte",
          "4 bytes",
          "Compiler Error"
        ],
        answer: 1,
        explanation: "C++ handles object boundary addresses allocations uniquely. Empty class objects ko distinct memory address identity allocate karne ke liye compiler size hamesha 1 byte assign karta hai."
      },
      {
        question: "Trace recursive C function calculation output:\n<code>int fun(int n) {\n    if (n <= 1) return 1;\n    return n * fun(n - 1);\n}\n</code>\nFind value returned by fun(4).",
        options: [
          "10",
          "24",
          "12",
          "6"
        ],
        answer: 1,
        explanation: "Factorial code: fun(4) = $4 \\times fun(3) = 4 \\times 3 \\times fun(2) = 4 \\times 3 \\times 2 \\times fun(1) = 4 \\times 3 \\times 2 \\times 1 = 24$."
      },
      {
        question: "Find value pop order of expression evaluation stack: Infix equivalent <code>(3 + 4) * 2</code>. What is the value push sequences postorder postfix evaluations stack?",
        options: [
          "3, 4, +, 2, *",
          "3, 4, 2, +, *",
          "14",
          "7"
        ],
        answer: 2,
        explanation: "Postfix: <code>3 4 + 2 *</code>.\n- Push 3, Push 4.\n- Evaluate '+': Pop 4, Pop 3 $\\rightarrow$ Push 7.\n- Push 2.\n- Evaluate '*': Pop 2, Pop 7 $\\rightarrow$ Push 14.\nFinal returned stack output = 14."
      },
      {
        question: "Consider BST with root 50. Left subtree root is 30, right subtree root is 70. Find traversal print value elements order if we traverse tree in preorder.",
        options: [
          "30, 50, 70",
          "50, 30, 70",
          "30, 70, 50",
          "50, 70, 30"
        ],
        answer: 1,
        explanation: "Preorder sequence: Root $\\rightarrow$ Left $\\rightarrow$ Right. So Root (50) $\\rightarrow$ Left (30) $\\rightarrow$ Right (70). Output order: 50, 30, 70."
      },
      {
        question: "Which dynamic data structure maintains pointer locations in memory, where insertions and deletions do not require elements shifting operations?",
        options: [
          "Arrays",
          "Linked List",
          "Stack Array",
          "Vector Array"
        ],
        answer: 1,
        explanation: "Linked list dynamic node insertions deletions pointers updates linking nodes se runtime trace change parameters execution handle karti hai without shifting database elements."
      },
      {
        question: "What is the memory size overhead of using vtable pointers (vptr) in a C++ class object on a 64-bit platform architecture?",
        options: [
          "4 bytes",
          "8 bytes",
          "16 bytes",
          "No overhead"
        ],
        answer: 1,
        explanation: "64-bit systems compile pointer variables addresses parameters using 8-byte sizing lengths. Vptr is pointer variable, size addition is 8 bytes."
      }
    ],
    assertionReason: [
      {
        question: "Assertion (A): register storage class variables cannot have their memory addresses accessed using the '&' operator.\nReason (R): register storage class tells compiler to store variable inside CPU register storage structures, which do not have RAM addresses.\nChoose correct options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Register variables compiler instructions CPU registers save mappings resolve karti hain RAM locations mapping check nahi hoti, reason explains assertion completely."
      },
      {
        question: "Assertion (A): C++ structure sizing boundaries padding wastes memory space.\nReason (R): Data alignment padding rules verify data access performances inside word boundaries alignments of 32-bit/64-bit CPUs.\nChoose correct options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Padding waste memory does make variables aligned so execution lookup fetch cycles are optimized for execution speed. R explains why padding is used."
      },
      {
        question: "Assertion (A): Diamond inheritance structures require base class inheritance virtually to resolve members path duplication.\nReason (R): Virtual base classes map subclass pointer mappings single instantiation parameters resolves grandchild access ambiguities.\nChoose correct options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Virtual inheritance diamond schema pathways resolve single parent maps construct variables values duplicate errors clear loops, both correct."
      },
      {
        question: "Assertion (A): Java bytecode (.class files) is platform-neutral and can run on any OS.\nReason (R): Intermediate compiler JIT generates different executable native configurations loops target specific JVM platforms execution runtime systems.\nChoose correct options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Bytecode run anywhere property depends on OS specific JVM runtime availability, explaining platform independence configurations."
      },
      {
        question: "Assertion (A): Python NumPy vector processing is faster than traditional python list structures iterations.\nReason (R): NumPy arrays represent continuous homogeneous contiguous blocks memory spaces and use C compiler loops underneath.\nChoose correct options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "NumPy homogeneous memory data structures continuous layouts caches optimization speedups vector operations accelerate karti hain, R explains speedups."
      },
      {
        question: "Assertion (A): In a circular queue of size N, queue full condition is front == (rear + 1) % N.\nReason (R): Circular queues wrap rear updates back index parameters when array boundaries reach threshold values.\nChoose correct options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Circular indices wrap around logic sets boundaries indices calculations full overflow configurations correct."
      },
      {
        question: "Assertion (A): BST inorder traversal prints elements in descending order.\nReason (R): BST left child is always larger than root child key properties.\nChoose correct options:",
        options: [
          "Both A and R are false",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Inorder print ascending output parameters and left child key value parent se smaller hoti hai, therefore both statements false."
      },
      {
        question: "Assertion (A): Quick Sort sorting worst case complexity parameters is O(N^2).\nReason (R): Merge Sort is unstable sorting algorithm requiring O(N) memory space.\nChoose correct options:",
        options: [
          "A is true, R is false",
          "A is false, R is true",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "Quick sort worst case O(N^2) statement represents correct fact, but Merge sort is stable sorting algorithm (not unstable), so Reason is false statement."
      },
      {
        question: "Assertion (A): Unsupervised Machine Learning algorithms do not require labeled training datasets.\nReason (R): Unsupervised ML uses dynamic clustering algorithms (like K-Means) to group data objects based on similarities.\nChoose correct options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Unlabeled database clustering maps unsupervised ML definitions verify loops, both correct."
      },
      {
        question: "Assertion (A): Blockchains use cryptographic hash chaining connectivity arrays to maintain ledger immutability.\nReason (R): Modifying a block's transaction details invalidates all subsequent blocks hashes linked to it.\nChoose correct options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Hash values sequence integrity updates block parameters validations make database secure, reason explanations true."
      }
    ],
    matchFollowing: [
      {
        question: "Match Column I (C Storage Class) with Column II (Default Initialization Value):\nColumn I:\nA. auto\nB. static\nC. register\nD. extern\nColumn II:\n1. Garbage Value\n2. Zero (0)\n3. 1 (One)\nChoose option combination:",
        options: [
          "A-1, B-2, C-1, D-2",
          "A-2, B-1, C-2, D-1",
          "A-1, B-1, C-2, D-2",
          "A-2, B-2, C-1, D-1"
        ],
        answer: 0,
        explanation: "auto registers Garbage variable values map (1) static extern data segment zeros values (2)."
      },
      {
        question: "Match Column I (Data Structure) with Column II (Operational properties):\nColumn I:\nA. Stack\nB. Queue\nC. Circular Queue\nD. Deque\nColumn II:\n1. FIFO\n2. LIFO\n3. Front/Rear insertions/deletions both sides\n4. modulo index wraparound\nChoose option combination:",
        options: [
          "A-2, B-1, C-4, D-3",
          "A-1, B-2, C-3, D-4",
          "A-2, B-3, C-4, D-1",
          "A-4, B-1, C-2, D-3"
        ],
        answer: 0,
        explanation: "Stack-LIFO(2), Queue-FIFO(1), Circular-wraparound(4), Deque-both sides insertions(3)."
      },
      {
        question: "Match Column I (Sorting Algorithms) with Column II (Worst Case Time Complexity):\nColumn I:\nA. Bubble Sort\nB. Selection Sort\nC. Merge Sort\nD. Quick Sort\nColumn II:\n1. O(N^2)\n2. O(N log N)\nChoose option combination:",
        options: [
          "A-1, B-1, C-2, D-1",
          "A-2, B-2, C-1, D-2",
          "A-1, B-2, C-1, D-2",
          "A-2, B-1, C-2, D-1"
        ],
        answer: 0,
        explanation: "Merge sort worst case is $O(N \\log N)$ (2). All others Bubble, Selection, Quick sort worst case is $O(N^2)$ (1)."
      },
      {
        question: "Match Column I (C/C++ Pointer concepts) with Column II (Definition / Properties):\nColumn I:\nA. Dangling Pointer\nB. Wild Pointer\nC. Null Pointer\nD. Void Pointer\nColumn II:\n1. Pointer pointing to deallocated memory\n2. Uninitialized pointer variable\n3. Pointer initialized to 0 / NULL\n4. Generic pointer pointing to any data type\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Dangling pointer point freed space(1), Wild uninitialized(2), Null pointer holds 0(3), Void points generic type(4)."
      },
      {
        question: "Match Column I (Platform Architecture Component) with Column II (Core Role):\nColumn I:\nA. JVM Bytecode\nB. JIT Compiler\nC. CLR runtime\nD. Framework Class Library (FCL)\nColumn II:\n1. Intermediate instructions compiled by javac\n2. Runtime translator intermediate bytecode to machine instructions\n3. .NET Execution engine handling GC/security\n4. Reusable templates/API variables\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-2, C-1, D-4",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Bytecode intermediate(1), JIT runtime compiler(2), CLR execution engine(3), FCL reusable class library(4)."
      },
      {
        question: "Match Column I (Modern Tech platforms) with Column II (Core elements):\nColumn I:\nA. Supervised Learning\nB. Unsupervised Learning\nC. Blockchain Ledger\nD. Consensus mechanism\nColumn II:\n1. Labeled databases training profiles\n2. Clustering algorithms (e.g. K-Means)\n3. Cryptographic hash chained digital records\n4. Proof of Work (PoW)\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Supervised-labeled(1), Unsupervised-clustering(2), Blockchain-hash chaining(3), Consensus-PoW(4)."
      },
      {
        question: "Match Column I (BST Traversal methods) with Column II (Order values):\nColumn I:\nA. Inorder\nB. Preorder\nC. Postorder\nD. Levelorder\nColumn II:\n1. Left, Root, Right\n2. Root, Left, Right\n3. Left, Right, Root\n4. Breadth-First Level by Level\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Inorder L-Root-R(1), Preorder Root-L-R(2), Postorder L-R-Root(3), Levelorder BFS(4)."
      },
      {
        question: "Match Column I (Sorting Stability/In-place properties) with Column II (Algorithms):\nColumn I:\nA. Stable and In-place\nB. Unstable and In-place\nC. Stable and Not in-place\nD. Unstable and Not in-place\nColumn II:\n1. Insertion Sort\n2. Quick Sort\n3. Merge Sort\n4. Heap Sort (unstable, auxiliary space O(1))\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-1, B-4, C-3, D-2",
          "A-3, B-4, C-1, D-2",
          "A-2, B-1, C-4, D-3"
        ],
        answer: 1,
        explanation: "- Stable and In-place: Insertion Sort (1)\n- Unstable and In-place: Heap Sort / Quick Sort (Heap is O(1) space, so B maps to 4)\n- Stable and Not in-place: Merge Sort (3)\n- Unstable and Not in-place: Quick Sort (recursive stack is O(log N) space, so D maps to 2)."
      },
      {
        question: "Match Column I (Dynamic Memory Functions in C) with Column II (Properties):\nColumn I:\nA. malloc\nB. calloc\nC. realloc\nD. free\nColumn II:\n1. Allocates heap space with default garbage value\n2. Allocates heap space initializing values to zero\n3. Adjusts previously allocated block memory size\n4. Releases heap memory to prevent memory leaks\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "malloc-garbage(1), calloc-zero(2), realloc-resize(3), free-release(4)."
      },
      {
        question: "Match Column I (C/C++ Operators) with Column II (Associativity):\nColumn I:\nA. Addition (+)\nB. Exponential (^)\nC. Assignment (=)\nD. Array Subscript ([])\nColumn II:\n1. Left to Right\n2. Right to Left\nChoose option combination:",
        options: [
          "A-1, B-2, C-2, D-1",
          "A-2, B-1, C-1, D-2",
          "A-1, B-1, C-2, D-2",
          "A-2, B-2, C-1, D-1"
        ],
        answer: 0,
        explanation: "Addition-L to R(1), Exponential-R to L(2), Assignment-R to L(2), Array Subscript-L to R(1)."
      }
    ]
  }
};
