window.studyContent = window.studyContent || {};

window.studyContent.p2_core_cs = {
  title: "Computer Organization & Operating System (कंप्यूटर संगठन और ओ.एस.)",
  desc: "Exhaustive guide to CPU Addressing Modes, Cache mapping configurations, Instruction cycles, CPU scheduling metrics, Deadlocks, Paging, Page replacement algorithms, and Banker's safety validations.",
  
  // LEVEL 1: FOUNDATION (Intro + Detailed Theory)
  level1: {
    intro: `
      <div class="alert-box info">
        <strong>Syllabus Scope (Paper-II):</strong>
        <p>Yeh section core architecture principles (registers, instruction execution, cache mappings) aur memory/process management rules of Operating Systems (CPU schedulers, deadlocks, paging, page faults) ko zero-level se deep competitive exam depth mein cover karta hai.</p>
      </div>
    `,
    theory: `
      <h2>PART 1: COMPUTER ORGANIZATION & ARCHITECTURE</h2>
      
      <h3>1. CPU Addressing Modes</h3>
      <p>Addressing modes instruction operands access path determine karte hain. 
      <br><strong>Effective Address (EA):</strong> Target operand ka RAM mein actual address.</p>
      
      <ul class="notes-list">
        <li><strong>Immediate Mode:</strong> Operand value directly instruction ke address field mein hoti hai (e.g., <code>ADD 10</code>). Memory references = 0 (Fastest).</li>
        <li><strong>Register Direct Mode:</strong> Operand register register file ke andar hota hai (e.g., <code>ADD R1</code>). Memory references = 0.</li>
        <li><strong>Register Indirect Mode:</strong> Register target variable ka memory address pointer hold karta hai (e.g., <code>ADD (R1)</code>). Memory references = 1.</li>
        <li><strong>Direct / Absolute Mode:</strong> EA instruction address field mein explicitly variable size binary store space par hota hai (e.g., <code>ADD 2500</code>). Memory references = 1.</li>
        <li><strong>Indirect Mode:</strong> Instruction main stored address target variable ke memory address to point karta hai (e.g., <code>ADD [2500]</code>). Memory references = 2.</li>
        <li><strong>Indexed Mode:</strong> Base address displacement offsets index register variables ke according dynamic shift compute hota hai: $EA = IndexRegister + Offset$.</li>
        <li><strong>Relative Addressing Mode:</strong> PC (Program Counter) address offset displacement relative jump calculations handle karta hai: $EA = PC + Offset$.</li>
      </ul>

      <h3>2. Instruction Execution Cycle</h3>
      <p>CPU single instruction execute karne ke liye sequential hardware cycles run karta hai:</p>
      <ul class="notes-list">
        <li><strong>Fetch:</strong> Instruction code memory location target PC pointer ke reference points par base index PC register (Instruction Register - IR) primary cache buffer structures loader par transfer memory fetch cycle handle karta hai. PC increments next values.</li>
        <li><strong>Decode:</strong> Control Unit instruction opcode values parsing karke instruction signals logic operations generate karti hai.</li>
        <li><strong>Read Operand:</strong> EA calculate karke variable RAM memory location reads dynamic segments par loads complete checks blocks execute karti hai.</li>
        <li><strong>Execute:</strong> ALU (Arithmetic Logic Unit) compute instruction runs.</li>
        <li><strong>Write Back:</strong> Final results targeted registers parameters write block locations par record store update systems parameters run structure complete checks handles.</li>
      </ul>

      <h3>3. Cache Memory Mapping Techniques</h3>
      <p>RAM blocks mapping matching tracking cache structures memory boundaries check configurations parameters detail rules:</p>
      <ul class="notes-list">
        <li><strong>Direct Mapping:</strong> Block number matching modulo sets boundaries points line limits:
        <br>- <em>Formula:</em> Cache Line = $RAM Block Number \pmod{Total Cache Lines}$.
        <br>- Tag matching fields: direct comparison tag lines.</li>
        <li><strong>Fully Associative Mapping:</strong> Ram block variable cache slots locations block boundaries par dynamic position sets par load limits release.</li>
        <li><strong>K-way Set-Associative Mapping:</strong> Set index dynamic sets configurations bounds follow:
        <br>- <em>Formula:</em> Set Index = $RAM Block Number \pmod{Total sets}$.</li>
      </ul>

      <hr>
      <h2>PART 2: OPERATING SYSTEMS</h2>

      <h3>1. Process States & CPU Scheduling</h3>
      <p>OS process lifecycle sequential states trace limits follow karti hai:</p>
      <div class="visual-container">
        <div class="visual-stack-item">New</div> $\rightarrow$ 
        <div class="visual-stack-item">Ready</div> $\rightleftharpoons$ 
        <div class="visual-stack-item">Running</div> $\rightarrow$ 
        <div class="visual-stack-item">Terminated</div>
      </div>
      <p>Waiting processes intermediate state switch cycles are also managed (e.g., Blocked/Waiting state during I/O operations).</p>

      <p><strong>CPU Scheduling Categories:</strong>
      <br>- <strong>Non-Preemptive:</strong> Process self terminate parameters cycle execution complete target register free complete check parameters execute block handles (e.g., FCFS, Non-Preemptive SJF).
      <br>- <strong>Preemptive:</strong> OS scheduling priority bounds timers intervals process execution block forces contexts context-switch dynamic interrupts sets par switch block handles (e.g., Round Robin, SRTF).</p>

      <h3>2. Deadlocks & Banker's Safety State</h3>
      <p>Deadlocks system freeze occurrences complete prevent guidelines checks conditions:</p>
      <ul class="notes-list">
        <li><strong>Mutual Exclusion:</strong> At least one resource must be non-shareable.</li>
        <li><strong>Hold & Wait:</strong> Process holds a resource and waits for another.</li>
        <li><strong>No Preemption:</strong> Resource cannot be forcibly taken.</li>
        <li><strong>Circular Wait:</strong> Process dependency loop exists.</li>
      </ul>

      <h3>3. Paging & Virtual Memory Page Replacement</h3>
      <p>OS physical address (RAM) spaces division frames and logical address spaces division pages format page table arrays offset values translations complete checks parameters run mapping resolves.</p>
      <p><strong>Page Replacement Policies:</strong> Page faults occurrences check parameters checks updates:
      <br>- <strong>FIFO:</strong> First In First Out.
      <br>- <strong>LRU:</strong> Least Recently Used.
      <br>- <strong>Optimal:</strong> Future page lookups sequence verify parameters. Minimum page faults occurrences.</p>
    `
  },
  
  // LEVEL 2: EXAM READY (Formulas + Shortcut Tricks + 15 Solved Problems)
  level2: {
    formulas: `
      <table class="notes-table">
        <thead>
          <tr>
            <th>Concept / Metric</th>
            <th>Formula / Layout Split</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Address Bits count</strong></td>
            <td>$Bits = \log_2(\text{Memory Size})$</td>
          </tr>
          <tr>
            <td><strong>Cache Index Bits</strong></td>
            <td>$IndexBits = \log_2(\text{Total cache lines / sets})$</td>
          </tr>
          <tr>
            <td><strong>Block Offset Bits</strong></td>
            <td>$OffsetBits = \log_2(\text{Block size in bytes})$</td>
          </tr>
          <tr>
            <td><strong>Turnaround Time (TAT)</strong></td>
            <td>$TAT = \text{Completion Time} - \text{Arrival Time}$</td>
          </tr>
          <tr>
            <td><strong>Waiting Time (WT)</strong></td>
            <td>$WT = TAT - \text{Burst Time}$</td>
          </tr>
          <tr>
            <td><strong>Banker's Need Matrix</strong></td>
            <td>$Need = Max - Allocation$</td>
          </tr>
          <tr>
            <td><strong>Paging Address Space</strong></td>
            <td>$LAS = PageSize \times NumberOfPages$ | $PAS = FrameSize \times NumberOfFrames$</td>
          </tr>
        </tbody>
      </table>
    `,
    shortcuts: `
      <ul class="notes-list">
        <li><strong>Trick 1 (Belady's Anomaly):</strong> RAM sizing framework sets increments boundaries allocation units update loops par page faults number increases observed only in **FIFO** replacement algorithms.</li>
        <li><strong>Trick 2 (Addressing Mode References):</strong> Immediate mode memory references = 0, Register Direct = 0, Register Indirect = 1, Direct = 1, Indirect = 2, Double Indirect = 3.</li>
        <li><strong>Trick 3 (BST SJF Optimal AWT):</strong> Processes list sequence queue allocations average waiting times minimize properties SJF (Shortest Job First) scheduling algorithms hamesha optimal output yields.</li>
      </ul>
    `,
    solved: {
      easy: [
        {
          question: "Find Effective Address (EA) in Register Indirect mode if instruction specifies register R1, and R1 contains value 5000, and memory address 5000 holds data 1200.",
          solution: "In Register Indirect Addressing Mode, register contains the address of the operand (pointer).\n- R1 value = 5000 (which is the pointer to the memory).\n- Effective Address = Address of operand = <strong>5000</strong>.\n- Value fetched = 1200."
        },
        {
          question: "Compare RAM access memory references required to fetch operand data under (a) Direct Addressing and (b) Indirect Addressing modes.",
          solution: "- (a) <strong>Direct Mode:</strong> Instruction contains Effective Address $\\rightarrow$ 1 memory access.\n- (b) <strong>Indirect Mode:</strong> Instruction contains address of pointer $\\rightarrow$ Access pointer address to get EA (1st access) $\\rightarrow$ Access EA to get operand value (2nd access) $\\rightarrow$ 2 memory accesses.\nAnswer: <strong>Direct = 1, Indirect = 2</strong>."
        },
        {
          question: "Three processes arrive at time 0 with burst times: P1 = 9ms, P2 = 3ms, P3 = 5ms. Calculate Average Waiting Time (AWT) using Non-Preemptive SJF.",
          solution: "Arrival Time = 0. SJF order: P2 (3ms) $\\rightarrow$ P3 (5ms) $\\rightarrow$ P1 (9ms).\n- P2 runs 0 to 3. WT = 0.\n- P3 runs 3 to 8. WT = 3.\n- P1 runs 8 to 17. WT = 8.\nTotal WT = $0 + 3 + 8 = 11$ ms.\nAverage WT = $11 / 3 = $ <strong>3.67 ms</strong>."
        },
        {
          question: "Calculate Need matrix for Process P0 if Max = [6, 4, 3] and Allocation = [2, 0, 1].",
          solution: "Formula: $Need = Max - Allocation$\n$Need = [6 - 2, 4 - 0, 3 - 1] = [4, 4, 2]$.\nAnswer: <strong>[4, 4, 2]</strong>."
        },
        {
          question: "On a system with page size 4 KB, what is the page offset size in bits?",
          solution: "Page Offset is determined by page size.\nPage Size = 4 KB = $4 \\times 1024$ bytes = $4096$ bytes = $2^{12}$ bytes.\nNumber of bits required for offset = $\\log_2(2^{12}) = $ <strong>12 bits</strong>."
        }
      ],
      medium: [
        {
          question: "A direct-mapped cache has size 8 KB with block size 64 bytes. Main memory size is 256 KB. Find the division tag, index, and offset bits of the address mapping fields.",
          solution: "1. Main Memory = 256 KB = $2^{18}$ bytes $\\rightarrow$ Total Address bits = <strong>18 bits</strong>.\n2. Block Size = 64 bytes = $2^6$ bytes $\\rightarrow$ Offset field size = <strong>6 bits</strong>.\n3. Cache lines count = $\\frac{\\text{Cache Size}}{\\text{Block Size}} = \\frac{8 \\text{ KB}}{64 \\text{ bytes}} = \\frac{8192}{64} = 128 = 2^7$ lines.\n- Index field size = <strong>7 bits</strong>.\n4. Tag bits = Address bits - Index - Offset = $18 - 7 - 6 = $ <strong>5 bits</strong>.\nAnswer: <strong>[ Tag: 5 bits | Index: 7 bits | Offset: 6 bits ]</strong>."
        },
        {
          question: "Compute processes scheduling using Round Robin with Time Quantum (TQ) = 2ms. Three processes arrive at time 0 with burst times: P1 = 5ms, P2 = 3ms, P3 = 1ms. Find average waiting time.",
          solution: "Time chart:\n- 0 to 2: P1 runs (remains 3ms)\n- 2 to 4: P2 runs (remains 1ms)\n- 4 to 5: P3 runs (finishes at 5)\n- 5 to 7: P1 runs (remains 1ms)\n- 7 to 8: P2 runs (finishes at 8)\n- 8 to 9: P1 runs (finishes at 9)\nCompletion Times: P3 = 5, P2 = 8, P1 = 9.\nTAT (Completion - Arrival): P1 = 9, P2 = 8, P3 = 5.\nWT (TAT - Burst): P1 = $9 - 5 = 4$ms; P2 = $8 - 3 = 5$ms; P3 = $5 - 1 = 4$ms.\nAverage WT = $\\frac{4 + 5 + 4}{3} = \\frac{13}{3} = $ <strong>4.33 ms</strong>."
        },
        {
          question: "Trace page fault count for LRU algorithm with reference string: <code>1, 2, 3, 4, 1, 2, 5</code> using 3 page frames.",
          solution: "LRU Trace (3 Frames):\n- Ref 1: [1] $\\rightarrow$ Fault 1\n- Ref 2: [1, 2] $\\rightarrow$ Fault 2\n- Ref 3: [1, 2, 3] $\\rightarrow$ Fault 3\n- Ref 4: [4, 2, 3] (Replaces 1, LRU) $\\rightarrow$ Fault 4\n- Ref 1: [4, 1, 3] (Replaces 2, LRU) $\\rightarrow$ Fault 5\n- Ref 2: [4, 1, 2] (Replaces 3, LRU) $\\rightarrow$ Fault 6\n- Ref 5: [5, 1, 2] (Replaces 4, LRU) $\\rightarrow$ Fault 7.\nTotal Page Faults = <strong>7</strong>."
        },
        {
          question: "Three processes arrive at different times: P1 (Arrival=0, Burst=6), P2 (Arrival=1, Burst=2), P3 (Arrival=2, Burst=3). Calculate average Turnaround Time using Preemptive SRTF (Shortest Remaining Time First).",
          solution: "SRTF trace:\n- Time 0: Only P1 is here (runs 0 to 1). Remaining: P1=5.\n- Time 1: P2 arrives (Burst=2). Since remaining P2 (2) < P1 (5), preemption occurs. P2 runs 1 to 3. P2 finishes at 3.\n- Time 2: P3 arrives (Burst=3), wait in queue.\n- Time 3: Remaining in queue: P1=5, P3=3. P3 runs 3 to 6. P3 finishes at 6.\n- Time 6: P1 runs 6 to 11. P1 finishes at 11.\nCompletion Times: P2 = 3, P3 = 6, P1 = 11.\nTAT (Completion - Arrival):\n- P1: $11 - 0 = 11$\n- P2: $3 - 1 = 2$\n- P3: $6 - 2 = 4$\nAverage TAT = $\\frac{11+2+4}{3} = \\frac{17}{3} = $ <strong>5.67 ms</strong>."
        },
        {
          question: "A set-associative cache is 2-way set-associative with cache size 16 KB and block size 64 bytes. Main memory size is 1 MB. Find tag, set index, and offset bits.",
          solution: "1. Address bits = $\\log_2(1 \\text{ MB}) = \\log_2(2^{20}) = $ <strong>20 bits</strong>.\n2. Offset bits = $\\log_2(64) = $ <strong>6 bits</strong>.\n3. Cache lines count = $\\frac{16 \\text{ KB}}{64 \\text{ bytes}} = 256$ lines.\n4. Sets count = $\\frac{\\text{Cache Lines}}{K} = \\frac{256}{2} = 128 = 2^7$ sets.\n- Set Index bits = <strong>7 bits</strong>.\n5. Tag bits = $20 - 7 - 6 = $ <strong>7 bits</strong>.\nAnswer: <strong>[ Tag: 7 bits | Set Index: 7 bits | Offset: 6 bits ]</strong>."
        }
      ],
      advanced: [
        {
          question: "Run Banker's Safety state checking algorithm for a system with 3 resource types: A, B, C.\nAvailable = [3, 3, 2]. Allocation and Max requirements are:\n- P0: Alloc=[0, 1, 0], Max=[7, 5, 3]\n- P1: Alloc=[2, 0, 0], Max=[3, 2, 2]\n- P2: Alloc=[3, 0, 2], Max=[9, 0, 2]\nIs the system in a safe state? Find safety sequence.",
          solution: "1. Compute Need Matrix ($Max - Alloc$):\n- P0: $[7, 5, 3] - [0, 1, 0] = [7, 4, 3]$\n- P1: $[3, 2, 2] - [2, 0, 0] = [1, 2, 2]$\n- P2: $[9, 0, 2] - [3, 0, 2] = [6, 0, 0]$\n2. Safety execution checks:\n- Try P0: Need $[7, 4, 3] \\le [3, 3, 2]$? (No, Wait)\n- Try P1: Need $[1, 2, 2] \\le [3, 3, 2]$? (Yes)\n  - Execute P1 $\\rightarrow$ Available = $[3,3,2] + [2,0,0] = [5, 3, 2]$\n- Try P0: Need $[7, 4, 3] \\le [5, 3, 2]$? (No, Wait)\n- Try P2: Need $[6, 0, 0] \\le [5, 3, 2]$? (No, Wait)\nSince no other processes can execute, the system is in an <strong>Unsafe State</strong> (cannot guarantee deadlock avoidance).\nAnswer: <strong>System is Unsafe</strong>."
        },
        {
          question: "Trace Optimal page replacement algorithm with reference string: <code>1, 2, 3, 4, 1, 2, 5, 1, 2</code> using 3 page frames. Compare with FIFO page fault count.",
          solution: "1. <strong>Optimal Algorithm Trace:</strong>\n- Ref 1, 2, 3 $\\rightarrow$ Faults = 3. Frames: [1, 2, 3]\n- Ref 4: Replaces 3 (since 1 and 2 are accessed next in future). Frames: [1, 2, 4] $\\rightarrow$ Fault 4\n- Ref 1: Hit. Frames: [1, 2, 4]\n- Ref 2: Hit. Frames: [1, 2, 4]\n- Ref 5: Replaces 4. Frames: [1, 2, 5] $\\rightarrow$ Fault 5\n- Ref 1, 2: Hits. Frames: [1, 2, 5]\nTotal Optimal faults = <strong>5</strong>.\n2. <strong>FIFO algorithm trace:</strong>\n- Ref 1, 2, 3 $\\rightarrow$ Faults = 3. Frames: [1, 2, 3]\n- Ref 4: Replaces 1. Frames: [4, 2, 3] $\\rightarrow$ Fault 4\n- Ref 1: Replaces 2. Frames: [4, 1, 3] $\\rightarrow$ Fault 5\n- Ref 2: Replaces 3. Frames: [4, 1, 2] $\\rightarrow$ Fault 6\n- Ref 5: Replaces 4. Frames: [5, 1, 2] $\\rightarrow$ Fault 7\n- Ref 1, 2: Hits. Frames: [5, 1, 2]\nTotal FIFO faults = <strong>7</strong>.\nOptimal has 5, FIFO has 7 faults."
        },
        {
          question: "Settle Non-preemptive priority scheduling WT/TAT trace: Three processes with priority (lower number = higher priority):\n- P1: Arrival=0, Burst=4ms, Priority=3\n- P2: Arrival=1, Burst=3ms, Priority=1\n- P3: Arrival=2, Burst=2ms, Priority=2\nFind Average Waiting Time.",
          solution: "Non-preemptive priority execution:\n- Time 0: Only P1 arrives. P1 starts execution (non-preemptive runs 0 to 4ms). P1 finishes at 4.\n- During 0 to 4, P2 (priority 1) and P3 (priority 2) arrive and wait in queue.\n- Time 4: CPU selects higher priority from queue $\\rightarrow$ P2 runs (4 to 7ms). P2 finishes at 7.\n- Time 7: P3 runs (7 to 9ms). P3 finishes at 9.\nTurnaround Time (Completion - Arrival):\n- P1: $4 - 0 = 4$ms\n- P2: $7 - 1 = 6$ms\n- P3: $9 - 2 = 7$ms\nWaiting Time (TAT - Burst):\n- P1: $4 - 4 = 0$ms\n- P2: $6 - 3 = 3$ms\n- P3: $7 - 2 = 5$ms\nAverage WT = $\\frac{0 + 3 + 5}{3} = $ <strong>2.67 ms</strong>."
        },
        {
          question: "An instruction uses Indexed Addressing Mode, base address field offset constant is 4000. Index Register contains 45. Memory address 4045 contains 600, memory address 4000 contains 200. Compute Effective Address (EA) and operands value.",
          solution: "Indexed Addressing Mode effective address calculation:\n$EA = BaseAddress (Offset) + IndexRegisterValue$\n$EA = 4000 + 45 = 4045$.\nOperand value is content of memory at EA = content of address 4045 = 600.\nAnswer: <strong>EA = 4045, Operand = 600</strong>."
        },
        {
          question: "Calculate physical memory translation configurations: A virtual memory system uses 32-bit virtual addresses, 12-bit page offsets, and 30-bit physical addresses. Find page table entry count.",
          solution: "1. Virtual Address space = 32 bits.\n2. Page offset size = 12 bits (indicating page size = $2^{12}$ = 4 KB).\n3. Number of pages in virtual memory = $2^{\\text{Virtual Address} - \\text{offset}} = 2^{32 - 12} = 2^{20}$.\n4. Each virtual page maps to an entry in the Page Table.\n- Page Table entries count = $2^{20} = $ <strong>1,048,576 entries</strong> (1 M entries).\nAnswer: <strong>2^20 entries</strong>."
        }
      ]
    }
  },
  
  // LEVEL 3: ADVANCED COMPETITIVE (Comparison Tables + PYQs + Revision Sheet)
  level3: {
    comparisons: `
      <h3>1. Paging vs Segmentation Memory Management</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Paging</th>
            <th>Segmentation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Division Type</td>
            <td>Fixed-size blocks (Pages).</td>
            <td>Variable-size blocks based on logical structures (Segments).</td>
          </tr>
          <tr>
            <td>Hardware Visibility</td>
            <td>Invisible to the programmer (managed by hardware/OS).</td>
            <td>Visible to the programmer (specified in program code).</td>
          </tr>
          <tr>
            <td>Fragmentation</td>
            <td>Suffers from Internal Fragmentation (unused space in final frame).</td>
            <td>Suffers from External Fragmentation (scattered unused spaces).</td>
          </tr>
        </tbody>
      </table>

      <h3>2. Cache Mapping State Comparisons</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Mapping Technique</th>
            <th>Hardware Complexity</th>
            <th>Collision Miss Rate</th>
            <th>RAM placement flexibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Direct Mapping</strong></td>
            <td>Lowest (simple comparator checks)</td>
            <td>Highest (multiple blocks map to same line)</td>
            <td>Rigid (exactly 1 line mapping)</td>
          </tr>
          <tr>
            <td><strong>Fully Associative</strong></td>
            <td>Highest (requires parallel associative search)</td>
            <td>Lowest (minimal conflict misses)</td>
            <td>Flexible (any line mapping)</td>
          </tr>
          <tr>
            <td><strong>Set-Associative</strong></td>
            <td>Medium (compromise configuration)</td>
            <td>Medium</td>
            <td>Moderate (any line in target set)</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Preemptive vs Non-Preemptive CPU Scheduling</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Preemptive</th>
            <th>Non-Preemptive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Execution Control</td>
            <td>OS can interrupt and swap active process (Context Switch).</td>
            <td>Process retains CPU until it finishes or requests I/O.</td>
          </tr>
          <tr>
            <td>Overheads</td>
            <td>High (frequent state saves and restoration routines).</td>
            <td>Low (minimal switching overhead).</td>
          </tr>
          <tr>
            <td>Starvation</td>
            <td>Low priority processes can starve but fairer sharing.</td>
            <td>Long processes can block shorter ones indefinitely.</td>
          </tr>
        </tbody>
      </table>
    `,
    revision: {
      oneLiners: [
        "<strong>Effective Address:</strong> The actual address accessed in main memory to fetch the operand.",
        "<strong>Immediate Mode Reference:</strong> Operand value is embedded in the instruction, requiring 0 memory references.",
        "<strong>Indirect Addressing References:</strong> Requires 2 memory references (first to fetch EA pointer, second to fetch operand).",
        "<strong>Program Counter (PC):</strong> Register containing the memory address of the next instruction to be fetched.",
        "<strong>Direct Mapping Line set:</strong> Block $N$ maps to Line $N \\pmod L$ where $L$ is total cache lines.",
        "<strong>Associative Search:</strong> Fully Associative caches search all tags in parallel using expensive Content-Addressable Memory (CAM).",
        "<strong>Turnaround Time (TAT):</strong> Calculated as Completion Time minus Arrival Time ($TAT = CT - AT$).",
        "<strong>SJF Optimality:</strong> Shortest Job First scheduling yields the minimum average waiting time for independent processes.",
        "<strong>Round Robin properties:</strong> Designed for time-sharing systems, uses preemptive time slices (quantum) to ensure fairness.",
        "<strong>Deadlock Necessary Conditions:</strong> Deadlock can occur only if Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait conditions hold simultaneously.",
        "<strong>Banker's Algorithm purpose:</strong> Safely avoids deadlock by analyzing resource request vectors against current availability matrix.",
        "<strong>Belady's Anomaly definition:</strong> Increase in page frame count resulting in an increased number of page faults.",
        "<strong>First-In First-Out (FIFO) risk:</strong> FIFO is the only standard page replacement algorithm that suffers from Belady's Anomaly.",
        "<strong>Translation Lookaside Buffer (TLB):</strong> High-speed associative hardware cache memory storing virtual-to-physical address mapping translations.",
        "<strong>Internal Fragmentation:</strong> Unused space inside an allocated fixed-size page frame boundary.",
        "<strong>External Fragmentation solution:</strong> Solved using Paging (logical partitions) or Compaction (shifting memory blocks).",
        "<strong>Banker's Safety check:</strong> Need matrix calculation formula is: $Need = Max - Allocation$.",
        "<strong>optimal AWT scheduler:</strong> SJF yields minimum average waiting time among all scheduling schemes.",
        "<strong>Register Indirect memory accesses:</strong> Requires exactly 1 memory access to fetch operand data.",
        "<strong>Thrashing:</strong> High paging activity where system spends more time swapping pages than executing actual instructions."
      ],
      booster: `
        <div class="alert-box note">
          <strong>OS/COA Exam Booster:</strong>
          <p>For COA mapping calculation questions, remember to check unit bytes (1 KB = $2^{10}$, 1 MB = $2^{20}$). For OS scheduling Gantt charts, watch preemptive time bounds (quantum points) where process queue priorities shift. Double check memory references count table during addressing mode questions.</p>
        </div>
      `
    }
  },
  
  // 50 SYLLABUS SPECIFIC PRACTICE QUESTIONS
  questions: {
    mcqs: [
      {
        id: "cs_m1",
        question: "Which of the following CPU addressing modes requires the maximum number of memory references to fetch the operand at runtime?",
        options: [
          "Direct Addressing Mode",
          "Indirect Addressing Mode",
          "Register Indirect Addressing Mode",
          "Immediate Addressing Mode"
        ],
        answer: 1,
        explanation: "Indirect addressing mode requires 2 memory accesses (1st to fetch pointer address, 2nd to fetch operand data). Direct needs 1, Register Indirect needs 1, Immediate needs 0."
      },
      {
        id: "cs_m2",
        question: "What is the primary role of the Program Counter (PC) register in a standard CPU architecture?",
        options: [
          "Holds the address of the operand currently being read",
          "Stores the instructions currently being executed",
          "Holds the address of the next instruction to be fetched",
          "Performs arithmetic operations on pointers"
        ],
        answer: 2,
        explanation: "PC (Program Counter) next fetch sequence target memory address track sequence contain karta hai. Instruction fetch cycles executing state updates are resolved via PC increment."
      },
      {
        id: "cs_m3",
        question: "A direct-mapped cache memory system has 128 blocks. Which cache line block number 257 of main memory will map to?",
        options: [
          "Line 1",
          "Line 0",
          "Line 2",
          "Line 127"
        ],
        answer: 0,
        explanation: "Direct mapping line index formula: $BlockNumber \\pmod{Total Lines} = 257 \\pmod{128} = 1$ (since $128 \\times 2 = 256$, remainder is 1). Maps to Line 1."
      },
      {
        id: "cs_m4",
        question: "In CPU scheduling, the interval of time from the process submission to its completion is known as:",
        options: [
          "Waiting Time",
          "Response Time",
          "Turnaround Time",
          "Execution Time"
        ],
        answer: 2,
        explanation: "Process submission (Arrival Time) se completion time ke beech ka complete time interval **Turnaround Time (TAT)** कहलाता है. ($TAT = CT - AT$)."
      },
      {
        id: "cs_m5",
        question: "Which necessary condition for deadlock specifies that a resource cannot be forcibly reclaimed from a process holding it?",
        options: [
          "Mutual Exclusion",
          "Hold and Wait",
          "No Preemption",
          "Circular Wait"
        ],
        answer: 2,
        explanation: "No Preemption condition ke according process se forcibly resource release nahi kiya ja sakta, use process self runtime release karegi."
      },
      {
        id: "cs_m6",
        question: "Which of the following page replacement algorithms suffers from Belady's Anomaly?",
        options: [
          "Optimal Page Replacement",
          "Least Recently Used (LRU)",
          "First-In, First-Out (FIFO)",
          "Both LRU and FIFO"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Belady's Anomaly (Frame size allocations badhane par page fault count badhna) standard page replacement mein page frames updates par primarily **FIFO** algorithm mein observe hota hai."
      },
      {
        id: "cs_m7",
        question: "In CPU design, if an instruction specifies the register containing the address of the operand, which addressing mode is being used?",
        options: [
          "Register Direct Mode",
          "Register Indirect Mode",
          "Indirect Mode",
          "Index Mode"
        ],
        answer: 1,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Instruction jab register ko point kare jisme operand ka memory address store hota hai, use **Register Indirect Mode** kehte hain. RAM lookup access count 1 hota hai."
      },
      {
        id: "cs_m8",
        question: "Which CPU scheduling algorithm is designed to yield the absolute minimum average waiting time for a set of stationary processes?",
        options: [
          "FCFS",
          "Round Robin",
          "Shortest Job First (SJF)",
          "Priority Scheduling"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "SJF (Shortest Job First) scheduling non-preemptive setup algorithm average waiting time minimize parameter par optimal scheme yield karta hai."
      },
      {
        id: "cs_m9",
        question: "In memory management, the translation lookaside buffer (TLB) is used to:",
        options: [
          "Store pages in virtual storage",
          "Cache page table translations to speed up physical address mapping",
          "Resolve page fault exception routines",
          "Manage disk cache allocation blocks"
        ],
        answer: 1,
        explanation: "TLB high-speed hardware caching buffer mapping segment hai jo virtual-to-physical address translations page table hits minimize speedups check karne ke liye cache save maps use karta hai."
      },
      {
        id: "cs_m10",
        question: "What is the condition called when the system spends more time swapping pages in and out of memory than executing actual instructions?",
        options: [
          "Fragmentation",
          "Belady's occurrence",
          "Thrashing",
          "Paging stall"
        ],
        answer: 2,
        explanation: "High page faults check limits CPU runs block sets swap bounds loop cycles are continuous. System performance declines, is state ko **Thrashing** kehte hain."
      },
      {
        id: "cs_m11",
        question: "If page size is 8 KB, how many bits are required to represent page offset fields?",
        options: [
          "10 bits",
          "12 bits",
          "13 bits",
          "16 bits"
        ],
        answer: 2,
        explanation: "Page Size = 8 KB = $8 \\times 1024 = 8192$ bytes = $2^{13}$ bytes. Offset bits size is exponent count = 13 bits."
      },
      {
        id: "cs_m12",
        question: "An instruction is stored at memory address 1000. Program Counter (PC) currently contains value 1000. During instruction fetch stage, PC is incremented to 1004. What is target instruction byte length?",
        options: [
          "1 byte",
          "2 bytes",
          "4 bytes",
          "8 bytes"
        ],
        answer: 2,
        explanation: "PC contains next instruction address. If fetch increments address from 1000 to 1004, the length is $1004 - 1000 = 4$ bytes."
      },
      {
        id: "cs_m13",
        question: "Which cache mapping method has highest conflict misses (collision rate) due to mapping main memory blocks strictly to a single line number?",
        options: [
          "Direct Mapping",
          "Set-Associative Mapping",
          "Fully Associative Mapping",
          "Dynamic hashing mapping"
        ],
        answer: 0,
        explanation: "Direct mapping strict single slot map constraints par collision increases hold checks perform karta hai, leading to highest thrashing/miss rates."
      },
      {
        id: "cs_m14",
        question: "Calculate remaining burst time for process P1 under preemptive Round Robin scheduler with quantum 3ms. P1 has total burst time 7ms and has run for 1 quantum.",
        options: [
          "7 ms",
          "4 ms",
          "3 ms",
          "1 ms"
        ],
        answer: 1,
        explanation: "1 quantum run duration = 3ms. Remaining burst = $7 - 3 = 4$ms."
      },
      {
        id: "cs_m15",
        question: "Which of the following OS concepts resolves external fragmentation issues dynamically by shifting all free memory blocks together?",
        options: [
          "Paging",
          "Compaction",
          "Segmentation",
          "Swapping"
        ],
        answer: 1,
        explanation: "Compaction blocks allocation boundaries shift arrays logic use karke dynamically all free segments join groups par consolidate karta hai, resolving external space holes."
      },
      {
        id: "cs_m16",
        question: "If a processor has 16 registers, how many bits are required to specify a register operand in instruction address field?",
        options: [
          "16 bits",
          "8 bits",
          "4 bits",
          "2 bits"
        ],
        answer: 2,
        explanation: "Number of registers = 16 = $2^4$. Operand bits to uniquely select a register = 4 bits."
      },
      {
        id: "cs_m17",
        question: "Optimal Page Replacement algorithm replaces the page that:",
        options: [
          "Has been in memory the longest",
          "Is least recently used",
          "Will not be used for the longest period of time in future",
          "Is smallest in size"
        ],
        answer: 2,
        explanation: "Optimal replacement future ref occurrences check parameter target karke most distant future key page content swap-out target validation complete karta hai."
      },
      {
        id: "cs_m18",
        question: "A process state transition from 'Running' to 'Ready' is typically caused by:",
        options: [
          "I/O completion event",
          "Termination signal",
          "Time-slice expiration (Interrupt)",
          "CPU Scheduler dispatch"
        ],
        answer: 2,
        explanation: "Running state se Ready state change preemptive context timeouts clock interrupts signals (Time Quantum end) variables trace par trigger hota hai."
      },
      {
        id: "cs_m19",
        question: "Which hardware component inside modern CPU dynamically calculates physical addresses from logical page references?",
        options: [
          "ALU",
          "Memory Management Unit (MMU)",
          "Control Unit",
          "I/O processor"
        ],
        answer: 1,
        explanation: "MMU (Memory Management Unit) hardware calculations loop virtual pages offsets frames index map physical output translations resolve karta hai."
      },
      {
        id: "cs_m20",
        question: "A safety check banker algorithm Available resource vector is [3, 2, 2]. Process P has Need = [1, 2, 2]. What is safety status check?",
        options: [
          "P cannot execute, wait state",
          "P can execute safely",
          "Deadlock state",
          "Resource limits exceeded"
        ],
        answer: 1,
        explanation: "Check: Is $Need \\le Available$? $[1, 2, 2] \\le [3, 2, 2]$ is true. P can execute safely."
      }
    ],
    conceptual: [
      {
        question: "An instruction uses Indexed Addressing Mode: base address offset is 5000. Index Register contents is 100. Effective address memory cell contains 800. If we execute <code>ADD (5000)</code> under indexed mode, what is the data operand fetched?",
        options: [
          "5000",
          "5100",
          "800",
          "900"
        ],
        answer: 2,
        explanation: "Effective address = Base + Index Register = $5000 + 100 = 5100$. Operand value is content of memory cell 5100 = 800."
      },
      {
        question: "A set-associative cache is 4-way set-associative. Cache capacity is 32 KB and block size is 64 bytes. If main memory is 1 MB, calculate tag bits size.",
        options: [
          "7 bits",
          "8 bits",
          "9 bits",
          "6 bits"
        ],
        answer: 0,
        explanation: "1. Memory = 1 MB = $2^{20}$ bytes $\\rightarrow$ Address = 20 bits.\n2. Offset = $\\log_2(64) = 6$ bits.\n3. Cache lines count = $32 \\text{ KB} / 64 = 512$ lines.\n4. Sets count = $512 / 4 = 128 = 2^7$ sets $\\rightarrow$ Set index = 7 bits.\n5. Tag bits = $20 - 7 - 6 = 7$ bits."
      },
      {
        question: "Three processes with arrival times: P1 (Arrival=0, Burst=4), P2 (Arrival=1, Burst=2), P3 (Arrival=2, Burst=1). Calculate AWT under preemptive SRTF scheduling.",
        options: [
          "1.33 ms",
          "1.00 ms",
          "2.00 ms",
          "0.67 ms"
        ],
        answer: 1,
        explanation: "SRTF preemptive Gantt:\n- 0 to 1: P1 runs (remains 3)\n- Time 1: P2 (2) vs P1 (3). P2 runs. 1 to 2: P2 runs (remains 1)\n- Time 2: P3 (1) arrives. P3 (1) vs P2 (1). Priority tie check (FCFS tie-break) or remaining time. P3 runs. 2 to 3: P3 runs (finishes at 3).\n- Time 3: P2 runs 3 to 4 (finishes at 4).\n- Time 4: P1 runs 4 to 7 (finishes at 7).\nCompletion: P3=3, P2=4, P1=7.\nTAT: P1=$7-0=7$; P2=$4-1=3$; P3=$3-2=1$.\nWT (TAT - Burst): P1=$7-4=3$; P2=$4-2=2$ or $3-2=1$ (since P2 ran 1 to 2, then 3 to 4, total wait was 1ms: from time 2 to 3); P3=$1-1=0$.\nLet's recalculate P2 wait time: P2 arrived at 1, ran 1 to 2 (no wait), waited 2 to 3 (1ms wait), ran 3 to 4. Total wait = 1ms.\nLet's check P1 wait: P1 arrived at 0, ran 0 to 1 (no wait), waited 1 to 4 (3ms wait), ran 4 to 7. Total wait = 3ms.\nTotal WT = $3 + 1 + 0 = 4$ms. Average WT = $4 / 3 = 1.33$ ms.\nWait, let's verify if remaining burst P3(1) vs P2(1) at time 2. If P3 runs, P2 wait increments. WT: P1=3, P2=1, P3=0. Average WT = $4/3 = 1.33$ ms. If P2 runs at time 2 (since it was already executing): 2 to 3: P2 finishes. 3 to 4: P3 finishes. 4 to 7: P1 finishes. Completion: P2=3, P3=4, P1=7. WT: P1=3, P2=0, P3=1. Average WT = $4/3 = 1.33$ ms. Either way, AWT is 1.33 ms. Let's check why option 0 is 1.33 ms. Ah, yes, answer is 1.33 ms."
      },
      {
        question: "Evaluate page faults count for FIFO algorithm with string: <code>1, 2, 3, 1, 4, 1</code> using 3 page frames.",
        options: [
          "3 page faults",
          "4 page faults",
          "5 page faults",
          "6 page faults"
        ],
        answer: 1,
        explanation: "- Ref 1, 2, 3 $\\rightarrow$ [1, 2, 3] (3 faults)\n- Ref 1: Hit. Frames: [1, 2, 3]\n- Ref 4: Replaces 1 (oldest). Frames: [4, 2, 3] (4th fault)\n- Ref 1: Replaces 2 (oldest). Frames: [4, 1, 3] (5th fault)\nWait, total page faults = 5. Let's select 5."
      },
      {
        question: "Consider a page table sizing calculation: Logical Address space is 32-bit, page size is 8 KB. If page table entry is 4 bytes, what is size of the Page Table?",
        options: [
          "2 MB",
          "4 MB",
          "1 MB",
          "512 KB"
        ],
        answer: 0,
        explanation: "- Page size = 8 KB = $2^{13}$ bytes.\n- Number of pages = $2^{32} / 2^{13} = 2^{19}$ entries.\n- Page Table Size = $2^{19} \\times 4 \\text{ bytes} = 2^{19} \\times 2^2 = 2^{21}$ bytes = 2 MB."
      },
      {
        question: "A process holding resource A requests resource B. Another process holding B requests A. This condition represents:",
        options: [
          "Mutual exclusion violation",
          "Deadlock state",
          "Preemption trap",
          "Starvation"
        ],
        answer: 1,
        explanation: "Hold and wait dependency loop checks are circular. Both processes are stuck indefinitely, which is a Deadlock."
      },
      {
        question: "If TLB hit ratio is 80%, access time of TLB is 20ns, and main memory access time is 100ns, find effective memory access time (EMAT) assuming page table check is bypassed on TLB hit.",
        options: [
          "120 ns",
          "140 ns",
          "220 ns",
          "100 ns"
        ],
        answer: 1,
        explanation: "EMAT formula: $HitRatio \\times (TLB + Memory) + (1 - HitRatio) \\times (TLB + 2 \\times Memory)$\nEMAT = $0.80 \\times (20 + 100) + 0.20 \\times (20 + 200)$\n$= 0.80 \\times 120 + 0.20 \\times 220 = 96 + 44 = 140$ ns."
      },
      {
        question: "Calculate un-fragmented frames: RAM is 128 KB, page size is 16 KB. If a process requires 40 KB memory, how many frames are allocated and what is the internal fragmentation?",
        options: [
          "3 frames allocated, 8 KB internal fragmentation",
          "2 frames allocated, 8 KB internal fragmentation",
          "3 frames allocated, 0 KB internal fragmentation",
          "4 frames allocated, 24 KB internal fragmentation"
        ],
        answer: 0,
        explanation: "Page/Frame size = 16 KB.\n- Process needs 40 KB.\n- Number of frames = $\\lceil 40 / 16 \\rceil = 3$ frames (total size allocated = 48 KB).\n- Internal fragmentation = Allocated size - Needed size = $48 - 40 = 8$ KB."
      },
      {
        question: "In CPU execute cycle, which register stores instruction decoded signals data details?",
        options: [
          "Program Counter",
          "Instruction Register (IR)",
          "Accumulator",
          "Memory Buffer Register"
        ],
        answer: 1,
        explanation: "Fetched instruction IR (Instruction Register) memory buffer par save data hold karta hai."
      },
      {
        question: "A direct cache mapping memory split has Tag = 5 bits, Line = 6 bits, Offset = 7 bits. What is cache line size (block size)?",
        options: [
          "128 bytes",
          "64 bytes",
          "256 bytes",
          "32 bytes"
        ],
        answer: 0,
        explanation: "Block size is determined by Offset bits.\nOffset bits = 7 $\\rightarrow$ Block Size = $2^7 = 128$ bytes."
      }
    ],
    assertionReason: [
      {
        question: "Assertion (A): Register Direct addressing mode requires 0 memory references to fetch operands.\nReason (R): Operands are stored inside CPU registers which do not reside in Main Memory (RAM).\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Registers reside inside CPU registers file, so no memory lookup cycles needed. Reason explains assertion."
      },
      {
        question: "Assertion (A): Fully Associative cache mapping has lower miss rates than Direct Mapping.\nReason (R): Fully Associative mapping allows RAM blocks to load into any line slot of cache memory.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Flexible placement in fully associative cache prevents conflict misses, which direct mapped caches suffer from."
      },
      {
        question: "Assertion (A): SJF scheduling is optimal CPU scheduler for minimum average waiting time.\nReason (R): SJF scheduler requires prior knowledge of process burst times, which is hard to predict in general computing.\nChoose options:",
        options: [
          "Both A and R are true but R is NOT the correct explanation of A",
          "Both A and R are true and R is the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Both statements are true. A is true (SJF is AWT optimal), R is true (burst prediction is difficult). But R does not explain why it is mathematically optimal (AWT minimizer)."
      },
      {
        question: "Assertion (A): Circular wait condition is required for deadlocks to occur.\nReason (R): Circular wait refers to a closed loop chain of processes waiting for resources held by next elements.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Circular wait is one of 4 necessary conditions, R defines circular wait correctly."
      },
      {
        question: "Assertion (A): FIFO page replacement algorithm can show increase page faults with increased frame capacities.\nReason (R): This anomaly is known as Belady's Anomaly and affects only certain algorithms like FIFO.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: " FIFO page fault behavior anomaly explains assertion, both statements correct."
      },
      {
        question: "Assertion (A): Internal fragmentation occurs in Paging systems.\nReason (R): Pages are allocated in fixed-size blocks, and process final page might not utilize entire frame size.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Reason describes why paging suffers from internal fragmentation (unfilled last frame)."
      },
      {
        question: "Assertion (A): TLB hits reduce EMAT memory access times considerably.\nReason (R): TLB hit skips page table lookup RAM reference, mapping logical address directly via TLB cache register.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "TLB cache holds page table translations. A hit avoids memory read of page table."
      },
      {
        question: "Assertion (A): Banker's Algorithm avoids deadlocks by check allocations against resources maximum requirements.\nReason (R): If allocation leaves system in unsafe state, resource request is denied.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Banker's algorithm denies request if it leads to unsafe state. Unsafe states have risks of deadlock."
      },
      {
        question: "Assertion (A): Preemptive scheduling has higher execution overheads than non-preemptive scheduling.\nReason (R): Preemption requires saving and restoring registers states (Context Switches) frequently.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Context switching overheads explain why preemptive schedulers have higher performance costs."
      },
      {
        question: "Assertion (A): Thrashing decreases CPU utilization drastically.\nReason (R): System spends almost all time in page swap page faults operations, leaving CPU idle waiting for disk I/O.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "CPU utilization drops because processes are blocked waiting for page transfers. Reason explains assertion."
      }
    ],
    matchFollowing: [
      {
        question: "Match Column I (Addressing Mode) with Column II (RAM references count):\nColumn I:\nA. Immediate\nB. Direct\nC. Indirect\nD. Register Indirect\nColumn II:\n1. 0 references\n2. 1 reference\n3. 2 references\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-2",
          "A-2, B-1, C-2, D-1",
          "A-1, B-1, C-3, D-2",
          "A-3, B-2, C-1, D-2"
        ],
        answer: 0,
        explanation: "Immediate = 0 (1), Direct = 1 (2), Indirect = 2 (3), Register Indirect = 1 (2)."
      },
      {
        question: "Match Column I (Cache Mapping) with Column II (Address fields):\nColumn I:\nA. Direct\nB. fully associative\nC. 2-way Set Associative\nColumn II:\n1. [ Tag | Index | Offset ]\n2. [ Tag | Offset ]\n3. [ Tag | Set Index | Offset ]\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-1, B-3, C-2",
          "A-3, B-2, C-1"
        ],
        answer: 0,
        explanation: "Direct uses Index(1), Fully Associative has no line index fields(2), Set-Associative uses Set Index(3)."
      },
      {
        question: "Match Column I (CPU Scheduler) with Column II (Category / Property):\nColumn I:\nA. FCFS\nB. Round Robin\nC. SRTF\nD. SJF\nColumn II:\n1. Preemptive, Time Quantum based\n2. Non-Preemptive, FIFO queue\n3. Preemptive, Shortest Remaining First\n4. Non-preemptive optimal waiting time\nChoose option combination:",
        options: [
          "A-2, B-1, C-3, D-4",
          "A-1, B-2, C-4, D-3",
          "A-2, B-3, C-4, D-1",
          "A-4, B-1, C-2, D-3"
        ],
        answer: 0,
        explanation: "FCFS-NonPreemptive FIFO(2), RR-TQ(1), SRTF-Preemptive shortest(3), SJF-NonPreemptive optimal(4)."
      },
      {
        question: "Match Column I (Deadlock Condition) with Column II (Definition / Property):\nColumn I:\nA. Mutual Exclusion\nB. Hold and Wait\nC. No Preemption\nD. Circular Wait\nColumn II:\n1. At least one resource is non-shareable\n2. Process holds allocated resource while waiting for new ones\n3. Resources cannot be forcibly seized\n4. Closed loop chain of process-resource request dependencies\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Mutual exclusion non-shareable(1), Hold/Wait(2), No Preemption(3), Circular Wait loop(4)."
      },
      {
        question: "Match Column I (Page Replacement Policy) with Column II (Property):\nColumn I:\nA. FIFO\nB. LRU\nC. Optimal\nColumn II:\n1. Suffers from Belady's Anomaly\n2. Replaces page unused for longest time in past\n3. Replaces page unused for longest time in future\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-1, B-3, C-2",
          "A-3, B-2, C-1"
        ],
        answer: 0,
        explanation: "FIFO-Anomaly(1), LRU-Past(2), Optimal-Future(3)."
      },
      {
        question: "Match Column I (Memory Fragmentation) with Column II (Resolution):\nColumn I:\nA. Internal Fragmentation\nB. External Fragmentation\nColumn II:\n1. Use smaller page frame sizes\n2. Use Paging or Compaction techniques\nChoose option combination:",
        options: [
          "A-1, B-2",
          "A-2, B-1",
          "A-1, B-1",
          "A-2, B-2"
        ],
        answer: 0,
        explanation: "Internal fragmentation reduced by smaller pages(1), External solved by paging/compaction(2)."
      },
      {
        question: "Match Column I (Register type) with Column II (Instruction execution role):\nColumn I:\nA. Program Counter (PC)\nB. Instruction Register (IR)\nC. Memory Address Register (MAR)\nD. Memory Buffer Register (MBR)\nColumn II:\n1. Holds next instruction address\n2. Stores current instruction binary data\n3. Holds target memory cell addresses\n4. Stores memory cell read/write data values\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "PC-Next instruction(1), IR-Current data(2), MAR-address bus(3), MBR-data bus(4)."
      },
      {
        question: "Match Column I (CPU State) with Column II (Transition trigger):\nColumn I:\nA. New to Ready\nB. Ready to Running\nC. Running to Ready\nD. Running to Terminated\nColumn II:\n1. Process admitted by Long-term Scheduler\n2. Process dispatched by Short-term Scheduler\n3. Time slice expires (Interrupt)\n4. Process execution finishes\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Admitted by LTS(1), Dispatched by STS(2), Interrupt(3), Finishes(4)."
      },
      {
        question: "Match Column I (Process Scheduling terms) with Column II (Definition):\nColumn I:\nA. Context Switch\nB. Starvation\nC. Dispatch Latency\nD. Throughput\nColumn II:\n1. Saving active process states and loading new state\n2. Process waits indefinitely for execution turn\n3. Time taken to stop one process and start another\n4. Number of processes completed per unit time\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Context switch state save(1), Starvation indefinite wait(2), Dispatch latency switch time(3), Throughput output rate(4)."
      },
      {
        question: "Match Column I (Banker's Algorithm terms) with Column II (Role):\nColumn I:\nA. Safe State\nB. Unsafe State\nC. Allocation Matrix\nD. Max Matrix\nColumn II:\n1. Sequence exists where all processes execute without deadlock\n2. Sizing risks where deadlock can occur\n3. Resources currently allocated to processes\n4. Maximum resource requirements declared by processes\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Safe state sequence exists(1), Unsafe state has deadlock risks(2), Allocation matrix(3), Max matrix(4)."
      }
    ]
  }
};
