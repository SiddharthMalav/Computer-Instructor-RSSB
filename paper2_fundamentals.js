window.studyContent = window.studyContent || {};

window.studyContent.p2_fundamentals = {
  title: "Computer Fundamentals & MS Office (कंप्यूटर बुनियादी बातें)",
  desc: "Detailed coaching guide covering CPU Organization, I/O Scanners, Number Systems, File Access, and MS Office (Word, Excel, PowerPoint, Access).",
  
  // LEVEL 1: FOUNDATION (Intro + Detailed Theory)
  level1: {
    intro: `
      <div class="alert-box info">
        <strong>Paper-II Syllabus Scope:</strong>
        <p>Computer Architecture basics (CPU, ALU, CU, registers, cache, RAM, ROM), pointing devices, scanners (OCR, OMR, MICR, BCR), analog vs digital representation, number systems conversions, file structures (sequential vs direct access), and MS Office (Word, Excel, PowerPoint, Access) formulas & shortcuts ko cover karta hai.</p>
      </div>
    `,
    theory: `
      <h2>1. CPU Organization & Hardware Elements</h2>
      <ul class="notes-list">
        <li><strong>CPU Components:</strong>
          <br>- **ALU (Arithmetic Logic Unit):** Performs mathematical calculations ($+,-,*,/$) and comparison operations ($<, >, =$).
          <br>- **CU (Control Unit):** Acts as the supervisor, fetching instructions from memory, decoding them, and directing the flow of data.
          <br>- **Registers:** High-speed temporary storage cells inside the CPU. Examples: Program Counter (PC - holds address of next instruction), Accumulator (AC - holds intermediate ALU results), Memory Address Register (MAR), Instruction Register (IR).
        </li>
        <li><strong>Memory Hierarchy:</strong> Cache memory is high-speed SRAM located between CPU and RAM to store frequently accessed data. ROM (Read-Only Memory) is non-volatile, storing the BIOS (Basic Input Output System) for booting (POST - Power On Self Test).</li>
        <li><strong>Scanners & Readers:</strong>
          <br>- **OCR (Optical Character Recognition):** Scans printed or handwritten text and converts it into editable digital text.
          <br>- **OMR (Optical Mark Reader):** Detects pencil/pen marks on pre-printed forms (checks exam sheets).
          <br>- **MICR (Magnetic Ink Character Recognition):** Reads special iron-oxide magnetic ink codes on bank cheques (digits and symbols).
          <br>- **BCR (Bar Code Reader):** Scans parallel black and white lines (barcodes) using laser beams to fetch product database details.
        </li>
      </ul>

      <h2>2. Data Representation & Number Systems</h2>
      <ul class="notes-list">
        <li><strong>Analog vs Digital:</strong> Analog systems work with continuous variables (e.g. speedometers, thermometer). Digital systems represent data using discrete states ($0$ and $1$).</li>
        <li><strong>Number Bases:</strong>
          <br>- **Binary (Base 2):** Digits 0, 1.
          <br>- **Octal (Base 8):** Digits 0 to 7.
          <br>- **Decimal (Base 10):** Digits 0 to 9.
          <br>- **Hexadecimal (Base 16):** Digits 0-9 and letters A-F (where A=10, B=11, C=12, D=13, E=14, F=15).
        </li>
        <li><strong>File Access Methods:</strong>
          <br>- **Sequential Access:** Records are read one by one in storage sequence (e.g. Magnetic Tape).
          <br>- **Random / Direct Access:** Any record can be accessed directly using its disk address (e.g. Hard Disk Drive, Solid State Drive).
        </li>
      </ul>

      <h2>3. MS Office Suite</h2>
      <h3>A. MS Word (Word Processing)</h3>
      <ul class="notes-list">
        <li>**Formatting defaults:** Default font is Calibri, size is 11pt. Default file extension is `.docx` (since MS Office 2007; older was `.doc`).</li>
        <li>**Mail Merge:** A feature that allows merging a single template document with a data source (Excel spreadsheet or Access database) to generate personalized letters/envelopes for multiple recipients.</li>
        <li>**Gutter Margin:** Additional margin added to the binding side of the page (either left or top) to ensure text is not hidden after binding.</li>
      </ul>

      <h3>B. MS Excel (Spreadsheets)</h3>
      <ul class="notes-list">
        <li>**Grid coordinates:** Composed of Columns (A, B, C...) and Rows (1, 2, 3...). Intersection is a **Cell**. Total rows in Excel 2007+: 1,048,576; columns: 16,384 (ends at XFD).</li>
        <li>**Cell Referencing:**
          <br>- *Relative:* Changes when copied (e.g., \`A1\`).
          <br>- *Absolute:* Locked with dollar signs, remains constant (e.g., \`$A$1\`).
          <br>- *Mixed:* Locks either row or column (e.g., \`$A1\` or \`A$1\`).
        </li>
        <li>**Key Formulas:** \`=VLOOKUP()\` (Vertical Lookup), \`=COUNT()\` (counts only numeric cells), \`=COUNTA()\` (counts non-empty cells), \`=IF()\` (conditional logic). All formulas start with \`=\`.</li>
      </ul>

      <h3>C. MS PowerPoint (Presentations)</h3>
      <ul class="notes-list">
        <li>**Slide Master:** A master template that stores information about the theme, layouts, background, fonts, and positioning of placeholders, allowing bulk updates across all slides.</li>
        <li>**Transitions vs Animations:**
          <br>- *Transition:* Motion effect that occurs when moving from one slide to the next.
          <br>- *Animation:* Special visual effect applied to individual elements (text, shapes, images) inside a single slide.
        </li>
      </ul>

      <h3>D. MS Access (Database)</h3>
      <p>Relational Database Management System (RDBMS) designed for desktop databases. Core objects: Tables (store data), Queries (filter data), Forms (UI for data entry), and Reports (printable summarized outputs).</p>
    `
  },
  
  // LEVEL 2: EXAM READY (Formulas + Shortcut Tricks + 15 Solved Problems)
  level2: {
    formulas: `
      <table class="notes-table">
        <thead>
          <tr>
            <th>Software / Feature</th>
            <th>Shortcut Key / Formula</th>
            <th>Functional Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>MS Word</strong></td>
            <td><code>Ctrl + K</code></td>
            <td>Inserts a hyperlink on selected text.</td>
          </tr>
          <tr>
            <td><strong>MS Word</strong></td>
            <td><code>F7</code></td>
            <td>Runs Spelling and Grammar check.</td>
          </tr>
          <tr>
            <td><strong>MS Excel</strong></td>
            <td><code>F4</code> (inside formula bar)</td>
            <td>Toggles selected cell reference to Absolute ($).</td>
          </tr>
          <tr>
            <td><strong>MS PowerPoint</strong></td>
            <td><code>F5</code> vs <code>Shift + F5</code></td>
            <td>F5: starts show from slide 1; Shift+F5: starts from current slide.</td>
          </tr>
          <tr>
            <td><strong>MS PowerPoint</strong></td>
            <td><code>Ctrl + M</code></td>
            <td>Inserts a new blank slide into the presentation.</td>
          </tr>
        </tbody>
      </table>
    `,
    shortcuts: `
      <ul class="notes-list">
        <li><strong>Trick for Binary to Hexadecimal conversion:</strong> Group binary digits into sets of **4 bits** starting from the right (LSB). Convert each group directly to its hex value. E.g., $1101_2 \rightarrow 13 \rightarrow \text{D}_{16}$.</li>
        <li><strong>Trick for Binary to Octal conversion:</strong> Group binary digits into sets of **3 bits** starting from the right. E.g., $101_2 \rightarrow 5_8$.</li>
        <li><strong>Trick for MS Word Superscript vs Subscript shortcuts:</strong>
          <br>- Superscript ($X^2$): <code>Ctrl + Shift + +</code> (think 'Shift' moves it up).
          <br>- Subscript ($X_2$): <code>Ctrl + =</code> (no shift needed).
        </li>
      </ul>
    `,
    solved: {
      easy: [
        {
          question: "Convert the Decimal number 53 into its Binary equivalent.",
          solution: "Using the successive division-by-2 method:\n- $53 / 2$: Quotient = 26, Remainder = 1\n- $26 / 2$: Quotient = 13, Remainder = 0\n- $13 / 2$: Quotient = 6, Remainder = 1\n- $6 / 2$: Quotient = 3, Remainder = 0\n- $3 / 2$: Quotient = 1, Remainder = 1\n- $1 / 2$: Quotient = 0, Remainder = 1\n- Reading remainders bottom-to-top: **110101**.\nAnswer: <strong>110101</strong>"
        },
        {
          question: "Convert the Hexadecimal number (2B) into its Decimal equivalent.",
          solution: "In Hexadecimal: B = 11.\n- Positional math: $2 \times 16^1 + B \times 16^0$\n- $= 2 \times 16 + 11 \times 1 = 32 + 11 = 43$.\nAnswer: <strong>43</strong>"
        },
        {
          question: "Calculate the total storage capacity of a register in bytes if it holds 64 bits of data.",
          solution: "- 8 bits = 1 byte.\n- Capacity in bytes = $\\frac{64}{8} = 8$ bytes.\nAnswer: <strong>8 bytes</strong>"
        },
        {
          question: "A user wants to copy cell formula `=A1+B1` from cell C1 to C2. What will the formula become in C2?",
          solution: "- The formula uses **Relative referencing**.\n- When copied down by 1 row (from C1 to C2), row indices increase by 1.\n- Formula becomes `=A2+B2`.\nAnswer: <strong>=A2+B2</strong>"
        },
        {
          question: "State the default margin size and page orientation of a fresh document in MS Word 2019.",
          solution: "- Default Margin: **1 inch** (72 points) on all four sides (Top, Bottom, Left, Right).\n- Default Page Orientation: **Portrait**.\nAnswer: <strong>1 inch, Portrait</strong>"
        }
      ],
      medium: [
        {
          question: "Explain the functional difference between OCR and OMR scanners.",
          solution: "- **OCR (Optical Character Recognition):** Analyzes the shape of letters in an image and matches them to standard font codes, producing an editable digital text file (like .txt or .docx).\n- **OMR (Optical Mark Reader):** Only detects the presence or absence of a mark (dark pencil/pen circles) in pre-defined coordinate boxes on a sheet. It does not recognize characters.\nAnswer: <strong>OCR recognizes text shapes for editing; OMR detects mark presence in grids.</strong>"
        },
        {
          question: "Convert the Binary number (1101011) into its Octal equivalent using the grouping shortcut.",
          solution: "- Group bits into sets of 3 from right-to-left:\n  - Group 1: `011` $\\rightarrow 3$\n  - Group 2: `101` $\\rightarrow 5$\n  - Group 3: `1` (pad with zeros to make `001`) $\\rightarrow 1$\n- Combined Octal digits: `1` `5` `3` $\\rightarrow 153_8$.\nAnswer: <strong>153 in base 8</strong>"
        },
        {
          question: "Evaluate the result of the Excel formula: `=COUNT(A1:A5)` if cells contain: A1=10, A2='Rohan', A3=20, A4=30, A5='' (blank).",
          solution: "- The `=COUNT()` function counts **only** cells that contain numeric values.\n- A1 (10) - numeric (1)\n- A2 ('Rohan') - text (not counted)\n- A3 (20) - numeric (2)\n- A4 (30) - numeric (3)\n- A5 (blank) - empty (not counted)\n- Total count = 3.\n- Note: If `=COUNTA()` was used, it would count all non-empty cells (yielding 4).\nAnswer: <strong>3</strong>"
        },
        {
          question: "Explain what is a Gutter Margin in word processing and in which page layouts it is required.",
          solution: "- A **Gutter Margin** is additional blank space added specifically to the binding edge (either Left or Top) of a page.\n- It ensures that text is not hidden or cut off when the pages are bound together in a book or report format.\nAnswer: <strong>Binding margin space added to Left/Top edge.</strong>"
        },
        {
          question: "An Excel cell C3 contains the formula `=$A$1+B3`. If this formula is copied to cell D4, what will the formula become?",
          solution: "- `$A$1` is an **Absolute reference** $\rightarrow$ remains completely unchanged as `=$A$1`.\n- `B3` is a **Relative reference** $\rightarrow$ when moving from C3 to D4, column moves right by 1 (B $\rightarrow$ C) and row moves down by 1 (3 $\rightarrow$ 4). So, `B3` becomes `C4`.\n- Final formula: `=$A$1+C4`.\nAnswer: <strong>=$A$1+C4</strong>"
        }
      ],
      advanced: [
        {
          question: "Convert the Fractional Decimal number (12.625) into its Binary representation.",
          solution: "Solve in two parts (integer part and fractional part):\n1. **Integer Part (12):**\n   - $12/2 = 6$ (rem 0)\n   - $6/2 = 3$ (rem 0)\n   - $3/2 = 1$ (rem 1)\n   - $1/2 = 0$ (rem 1) $\rightarrow$ binary = `1100`.\n2. **Fractional Part (0.625):** Multiply by 2 successively:\n   - $0.625 \times 2 = 1.25 \rightarrow$ integer digit = **1** (remain 0.25)\n   - $0.25 \times 2 = 0.50 \rightarrow$ integer digit = **0** (remain 0.50)\n   - $0.5 \times 2 = 1.00 \rightarrow$ integer digit = **1** (remain 0.00 - stop).\n   - Read top-to-bottom: `.101`.\n- Combined result: `1100.101`.\nAnswer: <strong>1100.101 in base 2</strong>"
        },
        {
          question: "Explain the physical architecture and operation of Cache Memory. Contrast SRAM with DRAM in terms of speed and refresh cycles.",
          solution: "- **Cache Memory:** Made of **SRAM (Static RAM)** which uses flip-flops (transistors) to store each bit. It is extremely fast (access time ~1-10 ns) and does not require periodic electrical refresh cycles.\n- **Main Memory (DRAM):** Made of capacitors. Capacitors leak charge, so DRAM requires constant electrical refresh cycles (~every few milliseconds), making it slower than SRAM.\nAnswer: <strong>SRAM cache uses flip-flops (no refresh, faster); DRAM uses capacitors (needs constant refresh).</strong>"
        },
        {
          question: "Analyze the security and data consistency benefits of using MS Access Queries instead of directly editing raw Tables.",
          solution: "- **Validation:** Queries filter data and can prevent unauthorized modification of structural keys (Primary Key integrity).\n- **Abstraction:** Views/Queries hide unnecessary fields from the end user, exposing only relevant columns (e.g. hiding salaries from a staff directory query).\n- **Calculated fields:** Queries can dynamically compute values (like age from DOB) at runtime, keeping tables clean of redundant data.\nAnswer: <strong>Provides data abstraction, protects primary key integrity, and allows calculated fields.</strong>"
        },
        {
          question: "A user wants to design a PowerPoint presentation where all slides have the corporate logo at the top right and use a specific font. How can this be accomplished in a single step?",
          solution: "- The user should open the **Slide Master** view (View tab $\rightarrow$ Slide Master).\n- By inserting the logo and setting the font styles on the **topmost master slide** in the hierarchy, these settings are automatically inherited by all layout styles and applied across all existing and new slides instantly.\nAnswer: <strong>Insert logo and set fonts on the master slide in Slide Master view.</strong>"
        },
        {
          question: "Explain the differences between Sequential and Direct/Random file access methods. Discuss which storage media support which method.",
          solution: "- **Sequential Access:** Reads data records in chronological order from beginning to end. High search times. Perfect for **Magnetic Tapes** (sequential write/read).\n- **Direct/Random Access:** Accesses any block block by its sector/track address directly without reading preceding blocks. Essential for database operations on **HDDs and SSDs**.\nAnswer: <strong>Sequential reads chronologically (Tapes); Direct accesses by address instantly (HDDs/SSDs).</strong>"
        }
      ]
    }
  },
  
  // LEVEL 3: ADVANCED COMPETITIVE (Comparison Tables + PYQs + Revision Sheet)
  level3: {
    comparisons: `
      <h3>1. SRAM vs DRAM</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>SRAM (Static RAM)</th>
            <th>DRAM (Dynamic RAM)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Storage Element</strong></td>
            <td>Flip-flops (6 transistors per cell).</td>
            <td>Capacitors (1 transistor, 1 capacitor).</td>
          </tr>
          <tr>
            <td><strong>Refresh Cycle</strong></td>
            <td>Not required. Stores data as long as power is on.</td>
            <td>Required constantly (due to capacitor leakage).</td>
          </tr>
          <tr>
            <td><strong>Usage</strong></td>
            <td>CPU Cache Memory (L1, L2, L3).</td>
            <td>Main System Memory (RAM).</td>
          </tr>
        </tbody>
      </table>

      <h3>2. Relative vs Absolute Cell Referencing</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Referencing Type</th>
            <th>Syntax Example</th>
            <th>Copy / Drag Behavior</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Relative</strong></td>
            <td><code>A1</code></td>
            <td>Row and column coordinates adjust dynamically.</td>
          </tr>
          <tr>
            <td><strong>Absolute</strong></td>
            <td><code>$A$1</code></td>
            <td>Coordinates are locked and remain completely unchanged.</td>
          </tr>
          <tr>
            <td><strong>Mixed</strong></td>
            <td><code>$A1</code> or <code>A$1</code></td>
            <td>Only the coordinate with the '$' symbol is locked.</td>
          </tr>
        </tbody>
      </table>
    `,
    revision: {
      oneLiners: [
        "<strong>BIOS storage:</strong> Non-volatile ROM chip on motherboard.",
        "<strong>POST meaning:</strong> Power On Self Test run by BIOS during boot.",
        "<strong>Cache speed:</strong> Fastest memory after CPU registers, made of SRAM.",
        "<strong>OMR scanner:</strong> Evaluates pencil/pen marked answer sheets.",
        "<strong>MICR ink:</strong> Bank cheques use magnetic ink containing iron-oxide.",
        "<strong>Douglas Engelbart:</strong> Inventor of the computer mouse.",
        "<strong>Hexadecimal base:</strong> Base 16, uses digits 0-9 and letters A-F.",
        "<strong>Binary conversion grouping:</strong> Group by 4 bits for hex, 3 bits for octal.",
        "<strong>Sequential media:</strong> Magnetic tapes are sequential access devices.",
        "<strong>Word default font:</strong> Calibri, 11pt size.",
        "<strong>Mail Merge:</strong> Generates bulk letters by combining template with data source.",
        "<strong>Gutter margin:</strong> Margin space added for binding (Left/Top).",
        "<strong>Excel formula starter:</strong> Always starts with an equal sign (=).",
        "<strong>Excel rows count:</strong> 1,048,576 rows in Excel 2007 and newer.",
        "<strong>Excel columns count:</strong> 16,384 columns (ends at XFD).",
        "<strong>VLOOKUP:</strong> Searches vertically down the first column of a table.",
        "<strong>Slide Master:</strong> Single template slide to control all presentation themes.",
        "<strong>F5 shortcut:</strong> Launches slideshow from slide 1.",
        "<strong>Shift+F5 shortcut:</strong> Launches slideshow from current slide.",
        "<strong>Access Objects:</strong> Tables, Queries, Forms, and Reports."
      ],
      booster: `
        <div class="alert-box note">
          <strong>Computer Fundamentals Booster:</strong>
          <p>For number systems, remember that A=10, B=11, C=12, D=13, E=14, F=15 in hex. In Excel, the formula <code>=COUNT()</code> will ignore text cells entirely, whereas <code>=COUNTA()</code> counts everything except empty cells.</p>
        </div>
      `
    }
  },
  
  // 50 PRACTICE QUESTIONS
  questions: {
    mcqs: [
      {
        id: "fnd_m1",
        question: "Which component of the CPU is responsible for coordinating and directing data flow between various devices?",
        options: [
          "ALU",
          "Control Unit (CU)",
          "RAM",
          "Secondary Storage"
        ],
        answer: 1,
        explanation: "Control Unit (CU) execution instructions decode karta hai aur memory/ALU flow directions control karta hai."
      },
      {
        id: "fnd_m2",
        question: "Which type of memory is used to build cache memory inside the processor?",
        options: [
          "DRAM",
          "SRAM",
          "EEPROM",
          "SDRAM"
        ],
        answer: 1,
        explanation: "Cache SRAM (Static RAM) se bani hoti hai jo faster flip-flop cells use karti hai aur refresh cycle nahi chahiye."
      },
      {
        id: "fnd_m3",
        question: "Which reading device is specifically used in retail shops to scan parallel lines on products?",
        options: [
          "OMR",
          "OCR",
          "MICR",
          "Bar Code Reader (BCR)"
        ],
        answer: 3,
        explanation: "Bar Code Reader parallel lines ko laser scan karke database item identifiers read karta hai."
      },
      {
        id: "fnd_m4",
        question: "Convert the Decimal number 25 into its Binary equivalent.",
        options: [
          "11001",
          "10101",
          "11100",
          "10011"
        ],
        answer: 0,
        explanation: "25/2 quotients write remainders bottom-to-top gives 11001."
      },
      {
        id: "fnd_m5",
        question: "What is the keyboard shortcut to start spelling and grammar check in MS Word?",
        options: [
          "F5",
          "F7",
          "F2",
          "F9"
        ],
        answer: 1,
        explanation: "F7 key dabane se MS Word spelling checker window active hoti hai."
      },
      {
        id: "fnd_m6",
        question: "Which margin is added to the page to ensure that text is not hidden after binding?",
        options: [
          "Footer Margin",
          "Header Margin",
          "Gutter Margin",
          "Mirror Margin"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Binding side (Left or Top) par extra space allocate karne ke liye Gutter Margin use kiya jata hai."
      },
      {
        id: "fnd_m7",
        question: "What is the maximum number of rows supported in a single MS Excel 2010 worksheet?",
        options: [
          "65,536",
          "256",
          "1,048,576",
          "16,384"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "MS Excel 2007 aur newer versions mein rows limit 1,048,576 hai."
      },
      {
        id: "fnd_m8",
        question: "Which of the following formulas in MS Excel represents an Absolute cell reference?",
        options: [
          "A1",
          "$A1",
          "A$1",
          "$A$1"
        ],
        answer: 3,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Row index aur column character dono ke pehle dollar ($) lock absolute cell referencing ko represent karta hai."
      },
      {
        id: "fnd_m9",
        question: "In MS PowerPoint, what is the shortcut key to insert a NEW slide in the active presentation?",
        options: [
          "Ctrl + N",
          "Ctrl + M",
          "Ctrl + S",
          "Ctrl + D"
        ],
        answer: 1,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Ctrl + N se new presentation file banti hai. Active presentation mein new slide add karne ke liye **Ctrl + M** use hota hai."
      },
      {
        id: "fnd_m10",
        question: "What is the full form of MICR which is used in bank cheques?",
        options: [
          "Magnetic Ink Character Reader",
          "Magnetic Ink Character Recognition",
          "Mark Ink Character Reader",
          "Magnetic Information Character Reader"
        ],
        answer: 1,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "MICR ka standard term **Magnetic Ink Character Recognition** hai."
      },
      {
        id: "fnd_m11",
        question: "Which of the following is a non-volatile memory that stores boot firmware BIOS?",
        options: [
          "RAM",
          "SRAM",
          "ROM",
          "Cache"
        ],
        answer: 2,
        explanation: "ROM (Read Only Memory) permanent storage chip hai jisme booting ke time run hone wala BIOS program save hota hai."
      },
      {
        id: "fnd_m12",
        question: "Convert the Binary number (1011) into its Decimal equivalent.",
        options: [
          "9",
          "11",
          "13",
          "15"
        ],
        answer: 1,
        explanation: "$1 \\times 8 + 0 \\times 4 + 1 \\times 2 + 1 \\times 1 = 11$."
      },
      {
        id: "fnd_m13",
        question: "What is the default file extension of an MS Access database in Office 365?",
        options: [
          ".mdb",
          ".accdb",
          ".dbf",
          ".xlsx"
        ],
        answer: 1,
        explanation: "Office 2007 ke baad MS Access files का extension `.accdb` hota hai (older database versions use `.mdb`)."
      },
      {
        id: "fnd_m14",
        question: "Which view in MS PowerPoint is used to apply design formats or templates globally to all slides?",
        options: [
          "Slide Sorter View",
          "Outline View",
          "Slide Master View",
          "Reading View"
        ],
        answer: 2,
        explanation: "Slide Master view ke top layer slides par changes pure presentation slides par global inherit ho jate hain."
      },
      {
        id: "fnd_m15",
        question: "Which Excel function counts both numeric and text values in a specified cell range, ignoring only empty cells?",
        options: [
          "COUNT",
          "COUNTA",
          "COUNTIF",
          "COUNTBLANK"
        ],
        answer: 1,
        explanation: "COUNTA function counts all non-empty cells, whereas COUNT only counts numeric cells."
      },
      {
        id: "fnd_m16",
        question: "Which storage media works strictly on the Sequential Access method?",
        options: [
          "Hard Disk Drive",
          "Magnetic Tape",
          "Solid State Drive",
          "DVD-RAM"
        ],
        answer: 1,
        explanation: "Magnetic Tape ek continuous ribbon ribbon device hai jo sirf sequential read/write access features support karta hai."
      },
      {
        id: "fnd_m17",
        question: "Convert the Hexadecimal character 'C' into its Decimal value.",
        options: [
          "10",
          "11",
          "12",
          "13"
        ],
        answer: 2,
        explanation: "Hex values conversion check: A=10, B=11, C=12, D=13, E=14, F=15."
      },
      {
        id: "fnd_m18",
        question: "Which option in MS Word is used to send a standardized mail draft to hundreds of different user addresses?",
        options: [
          "Cross Reference",
          "Mail Merge",
          "Bookmark",
          "Document Map"
        ],
        answer: 1,
        explanation: "Mail Merge mailing list records ko single text draft ke dynamic templates variables mein bind karta hai."
      },
      {
        id: "fnd_m19",
        question: "What is the keyboard shortcut for Superscripting selected text in MS Word?",
        options: [
          "Ctrl + =",
          "Ctrl + Shift + +",
          "Ctrl + Shift + S",
          "Alt + S"
        ],
        answer: 1,
        explanation: "Ctrl + Shift + + (plus) shortcut text ko superscript base line ($X^2$) par transform karta hai."
      },
      {
        id: "fnd_m20",
        question: "What is the default font type in MS Word 2016 when you create a new blank document?",
        options: [
          "Times New Roman",
          "Arial",
          "Calibri",
          "Courier New"
        ],
        answer: 2,
        explanation: "MS Word 2007+ versions mein new files default font **Calibri** use karti hain."
      }
    ],
    assertionReason: [
      {
        question: "Assertion (A): Cache memory is much faster than main memory (RAM).\nReason (R): Cache memory is made of Static RAM (SRAM) which uses transistor flip-flops, while RAM is made of Dynamic RAM (DRAM) which needs constant refreshing.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "SRAM's flip-flop cell architecture has no capacitor leakage issues, making cache memory significantly faster than main DRAM memory."
      },
      {
        question: "Assertion (A): Gutter Margin is added on all four edges of a document.\nReason (R): Gutter margin prevents text from disappearing when double-sided printing is used for bookbinding.\nChoose options:",
        options: [
          "A is false, R is true",
          "A is true, R is false",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "A is false because Gutter margins are only added to the binding edges (Left or Top), never to the right or bottom edges. R is true."
      },
      {
        question: "Assertion (A): All formulas in MS Excel must start with the equal sign (=).\nReason (R): The equal sign tells the spreadsheet parser that the subsequent characters represent a formula to be computed rather than a raw text label.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Without the equal sign (=), Excel treats inputs as basic text characters, so the equal sign is the required structural prefix."
      },
      {
        question: "Assertion (A): PowerPoint Slide Master allows editing the layout of all slides in a presentation at once.\nReason (R): All individual slide layouts inherit styles, background colors, and object positioning from the main master slide.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Slide Master inheritance design explains why global presentation updates can be done in a single edit."
      },
      {
        question: "Assertion (A): MICR is commonly used in retail supermarket billing.\nReason (R): MICR readers scan iron-oxide magnetic ink numbers, which provides high security against cheque forging in banking operations.\nChoose options:",
        options: [
          "A is false, R is true",
          "A is true, R is false",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "A is false because supermarkets use Bar Code Readers (BCR). MICR is used exclusively in banks for clearing cheques (R is true)."
      },
      {
        question: "Assertion (A): DRAM requires periodic electrical refreshing to retain stored information.\nReason (R): DRAM cells store data bits in capacitors, which naturally leak charge over time.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Capacitor charge leakage is the physical reason why DRAM must be refreshed every few milliseconds."
      },
      {
        question: "Assertion (A): Copying formula `=A$1+B$1` from row 2 to row 3 leaves the formula unchanged.\nReason (R): The row numbers are locked using the Absolute dollar symbol ($), preventing row increments.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "The dollar prefix locks the row coordinates, preventing changes when copying the formula vertically."
      },
      {
        question: "Assertion (A): OCR scanners can only scan multiple choice options marks.\nReason (R): OCR uses pattern matching algorithms to recognize individual alphabet shapes from scanned sheets.\nChoose options:",
        options: [
          "A is false, R is true",
          "A is true, R is false",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "A is false because OCR recognizes character shapes (text). Sheet marks (bubbles) are read by OMR. R is true."
      },
      {
        question: "Assertion (A): ROM is volatile memory.\nReason (R): ROM retains its stored programs even after the system power is turned off.\nChoose options:",
        options: [
          "A is false, R is true",
          "A is true, R is false",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "A is false because ROM is non-volatile. R is correct about data retention."
      },
      {
        question: "Assertion (A): Ctrl + K is used to insert a hyperlink in MS Word documents.\nReason (R): Ctrl + H is the shortcut used to open the Find and Replace dialog window.\nChoose options:",
        options: [
          "Both A and R are true but R is NOT the correct explanation of A",
          "Both A and R are true and R is the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Both statements are correct shortcut key definitions, but the Find & Replace shortcut has no relation to the hyperlink shortcut."
      }
    ],
    matchFollowing: [
      {
        question: "Match Column I (Pointing / Scanner Device) with Column II (Primary Application):\nColumn I:\nA. OMR\nB. OCR\nC. MICR\nD. BCR\nColumn II:\n1. Grading bubble exam answer sheets\n2. Converting hardcopy books to editable text\n3. Checking bank cheques\n4. Scanning product labels in retail stores\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Scanner applications matching."
      },
      {
        question: "Match Column I (Memory Type) with Column II (Characteristics):\nColumn I:\nA. SRAM\nB. DRAM\nC. ROM\nColumn II:\n1. Used in cache memory, no refresh needed\n2. Used in main memory, needs constant refresh\n3. Non-volatile, stores boot instructions\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-3, B-2, C-1",
          "A-1, B-3, C-2"
        ],
        answer: 0,
        explanation: "Memory features mapping."
      },
      {
        question: "Match Column I (Decimal Number) with Column II (Binary equivalent):\nColumn I:\nA. 10\nB. 12\nC. 15\nD. 16\nColumn II:\n1. 1010\n2. 1100\n3. 1111\n4. 10000\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Decimal to binary matching."
      },
      {
        question: "Match Column I (Excel cell reference) with Column II (Referencing type):\nColumn I:\nA. A1\nB. $A$1\nC. $A1\nD. A$1\nColumn II:\n1. Relative reference\n2. Absolute reference\n3. Mixed reference (column locked)\n4. Mixed reference (row locked)\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Excel referencing types mapping."
      },
      {
        question: "Match Column I (Shortcut key) with Column II (MS Word function):\nColumn I:\nA. Ctrl + K\nB. F7\nC. Ctrl + H\nD. Ctrl + Z\nColumn II:\n1. Insert Hyperlink\n2. Spelling & Grammar check\n3. Open Find & Replace\n4. Undo last action\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Standard word processor shortcuts."
      },
      {
        question: "Match Column I (PowerPoint feature) with Column II (Definition):\nColumn I:\nA. Slide Master\nB. Slide Transition\nC. Slide Animation\nColumn II:\n1. Template slide to apply design globally\n2. Motion effect between slides\n3. Visual effect on elements inside a slide\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-3, B-2, C-1",
          "A-1, B-3, C-2"
        ],
        answer: 0,
        explanation: "PowerPoint concepts definitions."
      },
      {
        question: "Match Column I (Access database object) with Column II (Role):\nColumn I:\nA. Table\nB. Query\nC. Form\nD. Report\nColumn II:\n1. Stores data in records\n2. Filters and displays records\n3. User interface for data entry\n4. Printable summarized data output\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Access database elements mapping."
      },
      {
        question: "Match Column I (Number Base) with Column II (Base value):\nColumn I:\nA. Binary\nB. Octal\nC. Decimal\nD. Hexadecimal\nColumn II:\n1. Base 2\n2. Base 8\n3. Base 10\n4. Base 16\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Number system bases."
      },
      {
        question: "Match Column I (CPU register) with Column II (Functional description):\nColumn I:\nA. Program Counter (PC)\nB. Instruction Register (IR)\nC. Memory Address Register (MAR)\nColumn II:\n1. Holds address of next instruction\n2. Holds currently executing instruction\n3. Holds target memory access address\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-3, B-2, C-1"
        ],
        answer: 0,
        explanation: "Processor registers roles."
      },
      {
        question: "Match Column I (Excel function) with Column II (Action):\nColumn I:\nA. COUNT\nB. COUNTA\nC. COUNTBLANK\nColumn II:\n1. Counts only numeric cells\n2. Counts all non-empty cells\n3. Counts only empty cells\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-3, B-2, C-1"
        ],
        answer: 0,
        explanation: "Excel counting functions mapping."
      }
    ]
  }
};
