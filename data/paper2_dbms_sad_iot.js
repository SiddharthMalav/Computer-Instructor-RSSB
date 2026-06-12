window.studyContent = window.studyContent || {};

window.studyContent.p2_dbms_sad_iot = {
  title: "DBMS, SAD & Web/IoT (डेटाबेस, सिस्टम विश्लेषण और वेब/आंकड़ों का आदान-प्रदान)",
  desc: "Exhaustive guide to SQL queries and Joins, Normalization proofs ( closures & candidate keys), SDLC models, testing metrics, HTML5 forms, and IoT Protocols.",
  
  // LEVEL 1: FOUNDATION (Intro + Detailed Theory)
  level1: {
    intro: `
      <div class="alert-box info">
        <strong>Syllabus Scope (Paper-II):</strong>
        <p>DBMS Normalization closure methods, SQL queries syntax, SAD software engineering models (Waterfall, Spiral, V-Model), testing levels, HTML lists/tables structure, e-Commerce models, and lightweight IoT Protocols (MQTT, CoAP) ko zero-level se deep coaching-replacement detail mein target karta hai.</p>
      </div>
    `,
    theory: `
      <h2>PART 1: DATABASE MANAGEMENT SYSTEMS (RDBMS & NORMALIZATION)</h2>
      
      <h3>1. Candidate Keys & Attribute Closures</h3>
      <p><strong>Candidate Key:</strong> Super Key ka subset jo Table records ko uniquely identify karta hai (minimal super key).
      <br><strong>Attribute Closure ($X^+$):</strong> Kisi attribute set $X$ se determine hone wale all attributes ka set.</p>
      <ul class="notes-list">
        <li><strong>Closure Algorithm:</strong> Start with $X^+ = X$. Agat Functional Dependency $Y \rightarrow Z$ hai, aur $Y \subseteq X^+$, toh $Z$ ko $X^+$ mein add karein. Repeat process until no new attributes can be added.</li>
        <li><strong>Candidate Key Finder:</strong> Agar $X^+$ relation ke all attributes contain karta hai, toh $X$ Super Key hai. Minimal super key is the Candidate Key.</li>
      </ul>

      <h3>2. RDBMS Normalization Forms</h3>
      <ul class="notes-list">
        <li><strong>1NF:</strong> atomic values constraints. No multi-valued attributes cell ranges.</li>
        <li><strong>2NF:</strong> 1NF + no **Partial Dependency** (Non-prime attribute key ke secondary subset par depend na ho).</li>
        <li><strong>3NF:</strong> 2NF + no **Transitive Dependency** (Non-prime $\rightarrow$ Non-prime dependency represents violation). For every FD $X \rightarrow Y$, $X$ must be super key OR $Y$ must be prime attribute.</li>
        <li><strong>BCNF (Boyce-Codd NF):</strong> For every FD $X \rightarrow Y$, $X$ must be super key. (Strict version of 3NF).</li>
      </ul>

      <h3>3. SQL Joins & Query Mechanics</h3>
      <ul class="notes-list">
        <li><strong>Inner Join:</strong> Both tables ke only matched records filter output par map karta hai.</li>
        <li><strong>Left Outer Join:</strong> Left table full contents + matching right table values. Unmatched right cells show **NULL**.</li>
        <li><strong>Right Outer Join:</strong> Right table full contents + matching left table values. Unmatched left cells show **NULL**.</li>
      </ul>

      <hr>
      <h2>PART 2: SOFTWARE ENGINEERING & SYSTEM ANALYSIS (SAD)</h2>

      <h3>1. SDLC Models</h3>
      <ul class="notes-list">
        <li><strong>Waterfall Model:</strong> Requirements frozen configurations. sequential stages follow rules. testing comes at last stage.</li>
        <li><strong>V-Model:</strong> Verification (Static analysis, reviews) aur Validation (Dynamic runs) parallel processes run check elements.</li>
        <li><strong>Spiral Model:</strong> Risk analysis target loops (iterative risk-driven). Best for complex, high-risk systems.</li>
        <li><strong>Agile Scrum:</strong> Sprints based adaptive model. Feedback and releases are continuous.</li>
      </ul>

      <h3>2. Software Testing Layers</h3>
      <p>Testing stages follow checks sequences:</p>
      <div class="visual-container">
        <div class="visual-stack-item">Unit Testing</div> $\rightarrow$ 
        <div class="visual-stack-item">Integration Testing</div> $\rightarrow$ 
        <div class="visual-stack-item">System Testing</div> $\rightarrow$ 
        <div class="visual-stack-item">Acceptance Testing (Alpha/Beta)</div>
      </div>
      <p><strong>Integration Testing approaches:</strong>
      <br>- <em>Top-Down:</em> Uses temporary simulation modules called <strong>Stubs</strong> to simulate lower modules.
      <br>- <em>Bottom-Up:</em> Uses temporary modules called <strong>Drivers</strong> to simulate upper control modules.</p>

      <hr>
      <h2>PART 3: WEB PUBLISHING, E-COMMERCE & IOT PROTOCOLS</h2>
      <ul class="notes-list">
        <li><strong>HTML Form Methods:</strong> GET appends variables to URL strings (visible, limits length). POST maps data inside HTTP payload body (secure, infinite length).</li>
        <li><strong>e-Commerce Models:</strong> B2B (Business-to-Business), B2C (Business-to-Consumer), C2C (Consumer-to-Consumer), C2B (Consumer-to-Business).</li>
        <li><strong>IoT Protocol Stack:</strong>
          <br>- <strong>MQTT (Message Queuing Telemetry Transport):</strong> TCP based publish/subscribe architecture. Header overhead = 2 bytes. Highly reliable.
          <br>- <strong>CoAP (Constrained Application Protocol):</strong> UDP based Request/Response (RESTful Web equivalent). Header overhead = 4 bytes. Lightweight.
        </li>
      </ul>
    `
  },
  
  // LEVEL 2: EXAM READY (Formulas + Shortcut Tricks + 15 Solved Problems)
  level2: {
    formulas: `
      <table class="notes-table">
        <thead>
          <tr>
            <th>Concept / Metric</th>
            <th>Formula / Layout Rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Attribute Closure</strong></td>
            <td>$X^+ = \{A_1, A_2...\}$ containing all attributes determined by $X$.</td>
          </tr>
          <tr>
            <td><strong>Testing Stubs count</strong></td>
            <td>$Stubs = \text{Total Nodes} - 1$ in Top-Down integration testing of tree layout.</td>
          </tr>
          <tr>
            <td><strong>Symmetric user keys</strong></td>
            <td>$Keys = \frac{N(N-1)}{2}$</td>
          </tr>
          <tr>
            <td><strong>e-Commerce Class</strong></td>
            <td>B2B (Business values wholesale), B2C (Retail Amazon targets).</td>
          </tr>
          <tr>
            <td><strong>HTML forms body</strong></td>
            <td>GET (URL query parameters), POST (payload body streams).</td>
          </tr>
        </tbody>
      </table>
    `,
    shortcuts: `
      <ul class="notes-list">
        <li><strong>Trick 1 (Candidate Key RHS check):</strong> Attribute closures find keys shortcut: check all attributes in relation. Attributes which are **never** on the right-hand side (RHS) of any FD must be part of the candidate key. Attributes never on LHS or RHS are also part of key.</li>
        <li><strong>Trick 2 (2NF Partial Dependency check):</strong> If Candidate Key of relation has length 1 (single attribute like $\{A\}$), relation is automatically in **2NF** because partial dependency requires part of key to determine non-prime.</li>
        <li><strong>Trick 3 (Agile Scrum TQ):</strong> Sprint sizes are locked strictly between 1 to 4 weeks increments.</li>
      </ul>
    `,
    solved: {
      easy: [
        {
          question: "Find closure of attribute A ($A^+$) in relation $R(A, B, C, D)$ under FDs: $A \\rightarrow B$, $B \\rightarrow C$.",
          solution: "1. Start: $A^+ = \\{A\\}$\n2. Use $A \\rightarrow B$: since $A \\subseteq \\{A\\}$, add $B \\rightarrow A^+ = \\{A, B\\}$\n3. Use $B \\rightarrow C$: since $B \\subseteq \\{A, B\\}$, add $C \\rightarrow A^+ = \\{A, B, C\\}$\n4. No other FDs can be applied.\nAnswer: <strong>A^+ = {A, B, C}</strong>."
        },
        {
          question: "Relation $R(A, B, C)$ has FD: $A \\rightarrow B$. Candidate Key is $\{A, C\}$. Check if relation is in 2NF.",
          solution: "Candidate Key is $\{A, C\}$. Prime attributes = $\{A, C\}$. Non-prime attribute = $\{B\}$.\n- FD: $A \\rightarrow B$. Here $A$ is a proper subset of Candidate Key $\{A, C\}$, and it determines non-prime $B$.\n- This is a <strong>Partial Dependency</strong>. Partial dependency violates 2NF rules.\nAnswer: <strong>No, relation is in 1NF only (not in 2NF)</strong>."
        },
        {
          question: "Trace output of SQL query: <code>SELECT COUNT(*), Department FROM Employee GROUP BY Department HAVING COUNT(*) > 1;</code> if database has: IT (3 employees), HR (1 employee), Sales (2 employees).",
          solution: "1. GROUP BY separates departments: IT (3), HR (1), Sales (2).\n2. HAVING counts condition filter: COUNT(*) > 1.\n- IT count = 3 > 1 (passes)\n- HR count = 1 > 1 (fails)\n- Sales count = 2 > 1 (passes)\nAnswer output rows: <strong>IT (3), Sales (2)</strong>."
        },
        {
          question: "When sending sensitive password inputs via HTML forms, which HTTP method should be chosen and why?",
          solution: "Method should be <strong>POST</strong>. POST variables are sent in the HTTP request body instead of the plaintext browser URL string (which is what GET does), preventing password leak in browser history.\nAnswer: <strong>POST method</strong>."
        },
        {
          question: "A website allows customers to sell their used electronic items directly to other users. Categorize this e-Commerce model.",
          solution: "Transactions occur directly between consumers.\n- Model category = <strong>C2C (Consumer-to-Consumer)</strong> (e.g., OLX or eBay classifications).\nAnswer: <strong>C2C</strong>."
        }
      ],
      medium: [
        {
          question: "Relation $R(A, B, C, D, E)$ has functional dependencies:\n- $A \\rightarrow B$\n- $BC \\rightarrow D$\n- $D \\rightarrow E$\nFind Candidate Keys of relation $R$.",
          solution: "1. Find RHS values: $B, D, E$. Attributes never on RHS = $\{A, C\}$.\n2. This means $\{A, C\}$ must be part of any Candidate Key.\n3. Check closure of $\{A, C\}$:\n- $\{A, C\}^+ = \\{A, C\\}$\n- Use $A \\rightarrow B \\rightarrow \\{A, B, C\\}$\n- Use $BC \\rightarrow D \\rightarrow \\{A, B, C, D\\}$\n- Use $D \\rightarrow E \\rightarrow \\{A, B, C, D, E\\}$.\nSince $\{A, C\}^+$ contains all attributes, $\{A, C\}$ is a Candidate Key. Since it contains the essential attributes, no smaller subset can be key.\nAnswer Candidate Key: <strong>{A, C}</strong>."
        },
        {
          question: "Relation $R(A, B, C, D)$ has Candidate Key $\{A\}$. FDs are: $A \\rightarrow B$, $B \\rightarrow C$, $C \\rightarrow D$. Determine the highest normal form of $R$.",
          solution: "1. Candidate Key = $\{A\}$ (length 1 $\\rightarrow$ No partial dependency possible $\\rightarrow$ relation is in <strong>2NF</strong>).\n2. Check 3NF rules for FDs:\n- $A \\rightarrow B$: LHS $A$ is super key (passes 3NF).\n- $B \\rightarrow C$: LHS $B$ is not super key, RHS $C$ is not prime (violates 3NF. This is transitive dependency: $A \\rightarrow B \\rightarrow C$).\nSince 3NF is violated, highest normal form is <strong>2NF</strong>.\nAnswer: <strong>2NF</strong>."
        },
        {
          question: "In V-model software development, show what testing level maps to: (a) System Design and (b) Coding stages.",
          solution: "V-Model maps verification development phases to validation testing levels:\n- (a) <strong>System Design</strong> maps to <strong>System Testing / Integration Testing</strong>.\n- (b) <strong>Coding / Implementation</strong> maps to <strong>Unit Testing</strong>.\nAnswer: (a) System/Integration Testing, (b) Unit Testing."
        },
        {
          question: "Top-Down integration testing of a tree layout software module contains 10 nodes. How many Stubs are required to simulate all lower interfaces during unit testing phase?",
          solution: "In Top-Down integration testing of hierarchical modules, each parent node requires stubs to simulate children.\nFormula for total stubs required to test full integration = $Nodes - 1 = 10 - 1 = 9$ stubs.\nAnswer: <strong>9 stubs</strong>."
        },
        {
          question: "What is the transport layer protocol and header size difference between MQTT and CoAP IoT protocols?",
          solution: "- <strong>MQTT:</strong> Runs over <strong>TCP</strong> for connection reliability. Base header size is <strong>2 bytes</strong>.\n- <strong>CoAP:</strong> Runs over <strong>UDP</strong> for lightweight transmissions. Base header size is <strong>4 bytes</strong>.\nAnswer: <strong>MQTT uses TCP (2B header), CoAP uses UDP (4B header)</strong>."
        }
      ],
      advanced: [
        {
          question: "Relation $R(A, B, C, D, E)$ has functional dependencies:\n- $AB \\rightarrow C$\n- $C \\rightarrow D$\n- $D \\rightarrow B$\nFind all Candidate Keys of relation $R$.",
          solution: "1. Attributes never on RHS = $\{A, E\}$. So $\{A, E\}$ must be part of candidate keys.\n2. Check closure of $\{A, E\}$:\n- $\{A, E\}^+ = \\{A, E\\}$ (Cannot determine other attributes).\n3. Try combinations with essential attributes:\n- Check $\{A, B, E\}^+$:\n  - $\{A, B, E\}^+ = \\{A, B, E\\} \\rightarrow \\{A, B, C, E\\}$ (using $AB \\rightarrow C$) $\\rightarrow \\{A, B, C, D, E\\}$ (using $C \\rightarrow D$). Key 1 = <strong>{A, B, E}</strong>.\n- Check $\{A, C, E\}^+$:\n  - $\{A, C, E\}^+ = \\{A, C, E\\} \\rightarrow \\{A, C, D, E\\}$ (using $C \\rightarrow D$) $\\rightarrow \\{A, B, C, D, E\\}$ (using $D \\rightarrow B$). Key 2 = <strong>{A, C, E}</strong>.\n- Check $\{A, D, E\}^+$:\n  - $\{A, D, E\}^+ = \\{A, D, E\\} \\rightarrow \\{A, B, D, E\\}$ (using $D \\rightarrow B$) $\\rightarrow \\{A, B, C, D, E\\}$ (using $AB \\rightarrow C$). Key 3 = <strong>{A, D, E}</strong>.\nCandidate Keys: <strong>{A, B, E}, {A, C, E}, {A, D, E}</strong>."
        },
        {
          question: "Check if decomposition of Relation $R(A, B, C)$ under $R_1(A, B)$ and $R_2(A, C)$ with FD $A \\rightarrow B$ is a Lossless Join Decomposition.",
          solution: "Decomposition is lossless if and only if $R_1 \\cap R_2 \\rightarrow R_1$ OR $R_1 \\cap R_2 \\rightarrow R_2$.\n- $R_1 \\cap R_2 = \\{A, B\\} \\cap \\{A, C\\} = \\{A\\}$.\n- Check FD closures for intersection: $\{A\} \\rightarrow B$, which matches $R_1$. Since $\{A\\} \\rightarrow R_1$, the intersection determines one of the decomposed tables.\n- Therefore, the decomposition is <strong>Lossless</strong>.\nAnswer: <strong>Lossless Join Decomposition</strong>."
        },
        {
          question: "Convert the following Relational Algebra query to SQL: $\\Pi_{\\text{Name}}(\\sigma_{\\text{Salary} > 50000}(\\text{Employee}) \\bowtie \\text{Department}_{\\text{Dept\\_ID}=\\text{ID}})$.",
          solution: "1. Projection $\\Pi$ maps to <code>SELECT Name</code>.\n2. Selection $\\sigma$ maps to <code>WHERE Salary > 50000</code>.\n3. Join $\\bowtie$ maps to <code>INNER JOIN Department ON Employee.Dept_ID = Department.ID</code>.\nSQL Equivalent:\n<code>SELECT Name FROM Employee INNER JOIN Department ON Employee.Dept_ID = Department.ID WHERE Salary > 50000;</code>"
        },
        {
          question: "In Function Points software metrics, a system has: 10 external inputs (complexity weight 4), 5 external outputs (weight 5), 5 external inquiries (weight 4). Calculate the Unadjusted Function Points (UFP) count.",
          solution: "Formula: $UFP = \\sum (Count \\times Weight)$\n$UFP = (10 \\times 4) + (5 \\times 5) + (5 \\times 4)$\n$UFP = 40 + 25 + 20 = 85$.\nAnswer: <strong>85 Function Points</strong>."
        },
        {
          question: "An IoT system sends data packets using MQTT. Base TCP/IP header overhead is 40 bytes, and MQTT header is 2 bytes. If payload is 8 bytes, find percentage of transmission bandwidth wasted by headers overhead.",
          solution: "1. Payload size = 8 bytes.\n2. Total headers size = $40 \\text{ (TCP/IP)} + 2 \\text{ (MQTT)} = 42$ bytes.\n3. Total packet size sent = $8 \\text{ (payload)} + 42 \\text{ (headers)} = 50$ bytes.\n4. Overhead waste percentage = $\\frac{\\text{Headers Size}}{\\text{Total Size}} \\times 100 = \\frac{42}{50} \\times 100 = 84\\%$.\nAnswer: <strong>84% bandwidth overhead waste</strong>."
        }
      ]
    }
  },
  
  // LEVEL 3: ADVANCED COMPETITIVE (Comparison Tables + PYQs + Revision Sheet)
  level3: {
    comparisons: `
      <h3>1. Third Normal Form (3NF) vs Boyce-Codd Normal Form (BCNF)</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>3NF</th>
            <th>BCNF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strictness Condition</td>
            <td>For every FD $X \\rightarrow Y$, $X$ must be super key OR $Y$ must be a prime attribute.</td>
            <td>For every FD $X \\rightarrow Y$, $X$ must strictly be a super key.</td>
          </tr>
          <tr>
            <td>Dependency Preservation</td>
            <td>Always preserves functional dependencies during decomposition.</td>
            <td>May not preserve functional dependencies in some decompositions.</td>
          </tr>
          <tr>
            <td>Redundancy</td>
            <td>Allows minor database redundancy.</td>
            <td>Eliminates all redundancy arising from functional dependencies.</td>
          </tr>
        </tbody>
      </table>

      <h3>2. Waterfall vs Agile Scrum Software engineering models</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Waterfall Model</th>
            <th>Agile Scrum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flexibility</td>
            <td>Rigid, changes in requirements are difficult to make once coding starts.</td>
            <td>Adaptive, supports change requirements at any phase.</td>
          </tr>
          <tr>
            <td>Testing Phase</td>
            <td>testing is conducted late in lifecycle (after implementation phase).</td>
            <td>Continuous testing throughout every sprint iteration cycle.</td>
          </tr>
          <tr>
            <td>Client Interaction</td>
            <td>Only at start (requirements) and end (delivery) stages.</td>
            <td>High (client reviews working software at the end of each sprint).</td>
          </tr>
        </tbody>
      </table>

      <h3>3. MQTT vs CoAP Protocols</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>MQTT</th>
            <th>CoAP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Transport Protocol</td>
            <td>TCP (Connection-oriented, reliable).</td>
            <td>UDP (Connectionless, lightweight).</td>
          </tr>
          <tr>
            <td>Model Architecture</td>
            <td>Publish / Subscribe broker pattern.</td>
            <td>Request / Response (RESTful equivalent).</td>
          </tr>
          <tr>
            <td>Header size</td>
            <td>Small base header (2 bytes).</td>
            <td>Moderate base header (4 bytes).</td>
          </tr>
        </tbody>
      </table>
    `,
    revision: {
      oneLiners: [
        "<strong>Candidate Key:</strong> Minimal super key that uniquely identifies each tuple in a relation.",
        "<strong>Attribute Closure:</strong> Set of all attributes functionally determined by a given attribute set.",
        "<strong>2NF partial dependency:</strong> 2NF prevents partial dependencies where non-prime depends on part of a key.",
        "<strong>3NF transitive dependency:</strong> 3NF prevents transitive dependencies where non-prime depends on another non-prime.",
        "<strong>BCNF condition:</strong> Relation is in BCNF if for every $X \\rightarrow Y$, $X$ is a super key.",
        "<strong>Inner Join matching:</strong> Returns only those rows that have matching values in both tables.",
        "<strong>Left Outer Join NULLs:</strong> Returns all rows from left table, with unmatched right table rows filled with NULL.",
        "<strong>Waterfall suitability:</strong> Best suited for projects with stable and well-understood requirements.",
        "<strong>V-Model verification:</strong> testing levels (Verification/Validation) run parallel to developmental phases.",
        "<strong>Integration stubs:</strong> Temporary module used to simulate lower level modules in Top-Down testing.",
        "<strong>Integration drivers:</strong> Temporary module used to simulate higher level modules in Bottom-Up testing.",
        "<strong>Alpha Testing:</strong> Acceptance testing performed by internal QA team at the developer's site.",
        "<strong>Beta Testing:</strong> Acceptance testing performed by target customers at their own sites.",
        "<strong>GET security:</strong> GET parameters are visible in the URL string, making it insecure for credentials.",
        "<strong>POST payload:</strong> POST sends data inside the HTTP request body, supporting large payloads.",
        "<strong>B2C e-Commerce:</strong> Business-to-Consumer model representing retail sales directly to consumers.",
        "<strong>SIP Protocol:</strong> Session Initiation Protocol used for signaling and control in VoIP/Video conferences.",
        "<strong>MQTT transport:</strong> MQTT runs on top of TCP transport layer, ensuring reliable message delivery.",
        "<strong>CoAP transport:</strong> CoAP runs on top of UDP transport layer, reducing packet overhead.",
        "<strong>Lossless Join check:</strong> Decomposition is lossless if common attribute is candidate key of at least one sub-relation."
      ],
      booster: `
        <div class="alert-box note">
          <strong>DBMS/SAD/Web Exam Booster:</strong>
          <p>For normalization questions, check if LHS has only candidate key elements. For SAD testing layers, remember stubs represent lower node simulators, drivers represent parent node simulators. For IoT protocols, MQTT uses TCP (reliable) while CoAP uses UDP (lightweight).</p>
        </div>
      `
    }
  },
  
  // 50 SYLLABUS SPECIFIC PRACTICE QUESTIONS
  questions: {
    mcqs: [
      {
        id: "db_m1",
        question: "In database normalization, which normal form specifies that there must be no partial dependencies?",
        options: [
          "First Normal Form (1NF)",
          "Second Normal Form (2NF)",
          "Third Normal Form (3NF)",
          "Boyce-Codd Normal Form (BCNF)"
        ],
        answer: 1,
        explanation: "Second Normal Form (2NF) partial dependencies (non-prime functionally dependent on subset of candidate key) ko prevent karta hai."
      },
      {
        id: "db_m2",
        question: "For a database relation to be in Third Normal Form (3NF), it must satisfy 2NF conditions and possess no:",
        options: [
          "Multivalued dependencies",
          "Partial dependencies",
          "Transitive dependencies",
          "Join dependencies"
        ],
        answer: 2,
        explanation: "3NF transitive dependencies (non-prime attribute determining another non-prime attribute) ko prevent karta hai."
      },
      {
        id: "db_m3",
        question: "Which of the following joins returns all rows from the left table, even if there are no matching rows in the right table?",
        options: [
          "Inner Join",
          "Left Outer Join",
          "Right Outer Join",
          "Full Outer Join"
        ],
        answer: 1,
        explanation: "Left Outer Join left table ke saare rows returns karta hai, unmatched right fields NULL state par show hoti hain."
      },
      {
        id: "db_m4",
        question: "In Software Engineering, which SDLC model matches development phases with parallel validation testing levels?",
        options: [
          "Waterfall Model",
          "Spiral Model",
          "V-Model",
          "Agile Scrum"
        ],
        answer: 2,
        explanation: "V-Model (Verification and Validation Model) development steps ke opposite matching testing layers map karta hai."
      },
      {
        id: "db_m5",
        question: "In integration testing, what temporary program module is written to simulate the behavior of lower-level sub-modules?",
        options: [
          "Driver",
          "Stub",
          "Mock object",
          "Test harness"
        ],
        answer: 1,
        explanation: "Top-down integration testing mein children modules block ko simulate/replace karne ke liye temporary **Stubs** likhe jate hain."
      },
      {
        id: "db_m6",
        question: "Which of the following database normal forms does NOT guarantee dependency preservation?",
        options: [
          "1NF",
          "2NF",
          "3NF",
          "BCNF"
        ],
        answer: 3,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "BCNF (Boyce-Codd Normal Form) database decompositions mein functional dependencies complete preservation guarantee **nahi** karta, jabki 3NF hamesha dependency-preserving hota hai."
      },
      {
        id: "db_m7",
        question: "Which of the following e-commerce models corresponds to a freelancer selling logo design services directly to corporate brands?",
        options: [
          "B2B",
          "B2C",
          "C2B",
          "C2C"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Consumer-to-Business (C2B) model mein individual consumers businesses ko products/services sell karte hain (jaise freelancers services to corporate brands)."
      },
      {
        id: "db_m8",
        question: "Constrained Application Protocol (CoAP) runs on top of which transport layer protocol in IoT architectures?",
        options: [
          "TCP",
          "UDP",
          "IPX",
          "SPX"
        ],
        answer: 1,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "CoAP light-weight message overhead target karne ke liye UDP transport layer protocol par run hota hai."
      },
      {
        id: "db_m9",
        question: "In SQL databases, which clause is used to filter group results generated by the GROUP BY clause?",
        options: [
          "WHERE",
          "HAVING",
          "ORDER BY",
          "LIMIT"
        ],
        answer: 1,
        explanation: "GROUP BY results filter karne ke liye aggregate operations conditional check clauses **HAVING** ka use hota hai. WHERE clause individual tuples filter karta hai."
      },
      {
        id: "db_m10",
        question: "Which HTTP method should be used in HTML forms when posting user reviews, supporting large text sizes and avoiding URL visibility?",
        options: [
          "GET",
          "POST",
          "PUT",
          "DELETE"
        ],
        answer: 1,
        explanation: "POST method variables payload data body streams par carry karta hai, enabling safe transfer of large blocks."
      },
      {
        id: "db_m11",
        question: "Which software model should be chosen for projects having high risks where incremental risk-analyses loops are required?",
        options: [
          "Waterfall Model",
          "Spiral Model",
          "Prototype Model",
          "Iterative model"
        ],
        answer: 1,
        explanation: "Spiral Model risk-driven iterative framework loops par work karta hai, jisme high risks analyze and mitigate kiye jate hain."
      },
      {
        id: "db_m12",
        question: "Which testing category is performed by actual clients/users at their own deployment sites before final acceptance?",
        options: [
          "Alpha Testing",
          "Beta Testing",
          "System Testing",
          "Regression Testing"
        ],
        answer: 1,
        explanation: "Beta testing customers target locations site conditions par verify karne ke liye run time execution support systems perform karti hai."
      },
      {
        id: "db_m13",
        question: "In HTML forms, which input type displays mutually exclusive options where selecting one automatically deselects others?",
        options: [
          "checkbox",
          "radio",
          "text",
          "select"
        ],
        answer: 1,
        explanation: "<code>&lt;input type=\"radio\" name=\"group\"&gt;</code> same name categories par groups elements options mutually exclusive single select control verify karta hai."
      },
      {
        id: "db_m14",
        question: "Which IoT communication protocol uses a centralized broker to coordinate message transfers between publishers and subscribers?",
        options: [
          "CoAP",
          "MQTT",
          "HTTP",
          "XMPP"
        ],
        answer: 1,
        explanation: "MQTT publish/subscribe model centralized broker structures par clients messages routing channels manage karta hai."
      },
      {
        id: "db_m15",
        question: "What is the Euler totient value $\\phi(n)$ if p=7, q=13 under RSA prime number initialization?",
        options: [
          "91",
          "84",
          "72",
          "80"
        ],
        answer: 2,
        explanation: "$\\phi(n) = (p-1)(q-1) = (7-1)(13-1) = 6 \\times 12 = 72$."
      },
      {
        id: "db_m16",
        question: "A lossless join decomposition must satisfy which condition regarding the common attributes of decomposed tables?",
        options: [
          "Common attribute must be a foreign key",
          "Common attribute must be a Candidate Key of at least one decomposed table",
          "Common attribute must contain NULL values",
          "Common attribute must be a prime attribute in both tables"
        ],
        answer: 1,
        explanation: "Decomposition lossless join check ensures that common attribute candidate key properties retain karta ho at least one sub-schema tables par."
      },
      {
        id: "db_m17",
        question: "In Software Quality Assurance, testing the interface between modules to verify connection communications is known as:",
        options: [
          "Unit Testing",
          "Integration Testing",
          "System Testing",
          "Stress Testing"
        ],
        answer: 1,
        explanation: "Integration testing multiple system sub-modules compatibility aur interfaces interfaces connect properties test karti hai."
      },
      {
        id: "db_m18",
        question: "Which protocol is utilized in multimedia video conferencing sessions for call initiation, setup, and teardown?",
        options: [
          "SIP (Session Initiation Protocol)",
          "FTP",
          "SMTP",
          "TCP"
        ],
        answer: 0,
        explanation: "SIP protocol multimedia session settings setups controls call dialings handle karne ke liye voice-over-IP applications target karta hai."
      },
      {
        id: "db_m19",
        question: "In database schema, an attribute that is a part of any candidate key is classified as:",
        options: [
          "Non-prime attribute",
          "Prime attribute",
          "Foreign Key",
          "Super Key attribute"
        ],
        answer: 1,
        explanation: "Candidate key ke members elements variables ko **Prime Attributes** kehte hain. Baki other attributes non-prime attributes hote hain."
      },
      {
        id: "db_m20",
        question: "What is the base header overhead size of MQTT protocol packets?",
        options: [
          "2 bytes",
          "4 bytes",
          "8 bytes",
          "20 bytes"
        ],
        answer: 0,
        explanation: "MQTT telemetry lightweight design packet limits header overhead size only 2 bytes map karta hai."
      }
    ],
    conceptual: [
      {
        question: "Relation $R(A, B, C, D)$ has FDs: $A \\rightarrow B, B \\rightarrow C$. Find attribute closure of $A$ ($A^+$) and candidate key properties.",
        options: [
          "A^+ = {A, B, C}, A is not Candidate key",
          "A^+ = {A, B, C}, A is Candidate key",
          "A^+ = {A, B, C, D}, A is not Candidate key",
          "A^+ = {A, B, C, D}, A is not super key"
        ],
        answer: 0,
        explanation: "- $A^+ = \\{A, B, C\\}$ (since $A \\rightarrow B, B \\rightarrow C$).\n- Attribute $D$ is not in $A^+$, so $A$ cannot determine all attributes.\n- Hence, $A$ is not a Candidate Key."
      },
      {
        question: "Relation $R(A, B, C, D)$ has FDs: $A \\rightarrow B, B \\rightarrow C, C \\rightarrow D, D \\rightarrow A$. How many candidate keys exist in relation $R$?",
        options: [
          "1 candidate key",
          "2 candidate keys",
          "3 candidate keys",
          "4 candidate keys"
        ],
        answer: 3,
        explanation: "Check closures:\n- $A^+ = \\{A, B, C, D\\}$ (A is Key)\n- $B^+ = \\{B, C, D, A\\}$ (B is Key)\n- $C^+ = \\{C, D, A, B\\}$ (C is Key)\n- $D^+ = \\{D, A, B, C\\}$ (D is Key).\nAll attributes are candidate keys. Total = 4 candidate keys."
      },
      {
        question: "Relation $R(A, B, C, D, E)$ has FDs: $A \\rightarrow BC, C \\rightarrow D, B \\rightarrow E$. Find candidate key and highest normal form.",
        options: [
          "Key: {A}, 1NF",
          "Key: {A}, 2NF",
          "Key: {A}, 3NF",
          "Key: {A}, BCNF"
        ],
        answer: 2,
        explanation: "1. Key: $A^+ = \\{A\\} \\rightarrow \\{A, B, C\\} \\rightarrow \\{A, B, C, D\\} \\rightarrow \\{A, B, C, D, E\\}$. Key = $\{A\}$.\n2. Key length is 1 $\\rightarrow$ No partial dependency $\\rightarrow$ 2NF.\n3. Check 3NF rules for FDs:\n- $A \\rightarrow BC$: LHS $A$ is super key (passes 3NF).\n- $C \\rightarrow D$: LHS $C$ is not super key, RHS $D$ is not prime. Violates 3NF. This is transitive dependency: $A \\rightarrow C \\rightarrow D$.\nSo highest Normal Form is 2NF."
      },
      {
        question: "Trace SQL query result: <code>SELECT Dept_ID, SUM(Salary) FROM Emp GROUP BY Dept_ID HAVING SUM(Salary) > 100000;</code> database entries:\n- Dept 10: Salaries [50000, 60000]\n- Dept 20: Salaries [40000, 30000]\n- Dept 30: Salaries [90000, 20000]\nFind Dept_ID returned.",
        options: [
          "Dept 10 and 30",
          "Dept 10 only",
          "Dept 10 and 20",
          "Dept 30 only"
        ],
        answer: 0,
        explanation: "Sum calculation:\n- Dept 10: $50000 + 60000 = 110000 > 100000$ (passes)\n- Dept 20: $40000 + 30000 = 70000$ (fails)\n- Dept 30: $90000 + 20000 = 110000 > 100000$ (passes).\nReturned Depts: 10 and 30."
      },
      {
        question: "A system design has 5 hierarchical modules. In bottom-up integration testing, how many Driver modules are needed if testing integrates modules one-by-one?",
        options: [
          "4 drivers",
          "5 drivers",
          "1 driver",
          "No drivers needed"
        ],
        answer: 0,
        explanation: "Bottom-up testing requires drivers to simulate higher-level modules. Testing integrates one-by-one, total drivers needed is $N - 1 = 5 - 1 = 4$ drivers."
      },
      {
        question: "What is the main drawback of Waterfall model in software development?",
        options: [
          "Risk analysis loops are complex",
          "Testing is late in lifecycle, making fixes costly",
          "It uses too many prototyping stages",
          "Sprints scheduling sizes are rigid"
        ],
        answer: 1,
        explanation: "Waterfall follows strict sequential stages, testing is delayed until implementation is complete, which increases fixing costs."
      },
      {
        question: "Identify the HTML list element code formatting for creating bulleted (unordered) list items:",
        options: [
          "<code>&lt;ol&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ol&gt;</code>",
          "<code>&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</code>",
          "<code>&lt;dl&gt;&lt;dt&gt;Item&lt;/dt&gt;&lt;/dl&gt;</code>",
          "<code>&lt;list&gt;&lt;item&gt;Item&lt;/item&gt;&lt;/list&gt;</code>"
        ],
        answer: 1,
        explanation: "Unordered bulleted lists are created using <code>&lt;ul&gt;</code> tag with list items <code>&lt;li&gt;</code>."
      },
      {
        question: "Which class of e-Commerce transaction represents consumer auction portals like eBay/OLX where users post listings for other users?",
        options: [
          "B2B",
          "B2C",
          "C2B",
          "C2C"
        ],
        answer: 3,
        explanation: "C2C (Consumer-to-Consumer) model represents transactions where individuals sell items to other individuals directly."
      },
      {
        question: "What does the ACID transaction property 'Durability' guarantee?",
        options: [
          "Transactions run isolated from others",
          "System changes are written to persistent storage and survive crashes",
          "Database returns to initial state on failure",
          "Transaction modifies database values consistently"
        ],
        answer: 1,
        explanation: "Durability guarantees that once a transaction commits, the changes persist in database records even during system crashes."
      },
      {
        question: "In IoT systems, why does CoAP protocol operate over UDP transport instead of TCP?",
        options: [
          "To provide higher data packet payload security",
          "To reduce memory footprint and bandwidth overhead for constraint devices",
          "To support broker publish/subscribe patterns",
          "To guarantee delivery acknowledgement loops"
        ],
        answer: 1,
        explanation: "Constraint network node devices have low power and memory. UDP reduces TCP handshake and packet overhead."
      }
    ],
    assertionReason: [
      {
        question: "Assertion (A): Relation $R(A, B, C)$ with FD $A \\rightarrow B$ is in 2NF if Candidate Key is $\{A, C\}$.\nReason (R): 2NF allows partial dependencies where non-prime attributes depend on parts of candidate keys.\nChoose options:",
        options: [
          "A is true, R is false",
          "A is false, R is true",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 3,
        explanation: "Key $\{A, C\}$ has subset $A$ determining non-prime $B$. This is partial dependency, violating 2NF. So A is false. R is false because 2NF prohibits partial dependencies."
      },
      {
        question: "Assertion (A): BCNF is stricter normal form than 3NF.\nReason (R): BCNF eliminates transitive dependencies completely by ensuring LHS is super key in every FD.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "BCNF LHS rule is stricter than 3NF, eliminating minor redundancies. Reason explains assertion."
      },
      {
        question: "Assertion (A): Waterfall model is not recommended for projects with dynamic changing requirements.\nReason (R): Waterfall model lacks feedback iteration loops, and requirements are frozen at the initial stage.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Rigid structure and locked requirements are why it cannot support dynamic project requirements. R explains A."
      },
      {
        question: "Assertion (A): Top-down integration testing requires Driver modules.\nReason (R): Drivers act as temporary modules simulating parent control systems that are not yet developed.\nChoose options:",
        options: [
          "A is false, R is true",
          "A is true, R is false",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "Top-down testing requires stubs (not drivers). Drivers are required in bottom-up testing. So A is false, R is true statement."
      },
      {
        question: "Assertion (A): POST method should be used for user login forms containing password fields.\nReason (R): POST method sends variables inside HTTP body headers, hiding inputs from browser URL visibility.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Secure transmission properties of POST explain why it is used for login forms."
      },
      {
        question: "Assertion (A): MQTT protocol is highly suited for constraint IoT devices sending telemetry data.\nReason (R): MQTT runs over TCP, which guarantees reliable delivery of sensor logs through connection controls.\nChoose options:",
        options: [
          "Both A and R are true but R is NOT the correct explanation of A",
          "Both A and R are true and R is the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Both statements are correct. A is true (MQTT is good for telemetry), R is true (MQTT uses TCP). But R does not explain why it is suited for constraint devices (lightweight header does)."
      },
      {
        question: "Assertion (A): SQL HAVING clause is equivalent to WHERE clause.\nReason (R): Both clauses filter individual tuples in tables before grouping occurs.\nChoose options:",
        options: [
          "Both A and R are false",
          "A is true, R is false",
          "A is false, R is true",
          "Both A and R are true"
        ],
        answer: 0,
        explanation: "HAVING filters groups, WHERE filters individual rows. Both statements are false."
      },
      {
        question: "Assertion (A): System testing is a White-box testing technique.\nReason (R): Testers analyze internal source code structures and logic paths during system testing.\nChoose options:",
        options: [
          "Both A and R are false",
          "A is true, R is false",
          "A is false, R is true",
          "Both A and R are true"
        ],
        answer: 0,
        explanation: "System testing is a black-box testing technique (testers verify functions without checking code). Both statements are false."
      },
      {
        question: "Assertion (A): e-Commerce retail transactions like buying books from Amazon belong to B2C class.\nReason (R): Business organizations sell products directly to consumers in B2C transactions.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Retail sales from Amazon represent B2C model. Reason explains the model definition."
      },
      {
        question: "Assertion (A): Lossless join decomposition is required to reconstruct tables accurately.\nReason (R): Lossy decompositions create spurious (extra dummy) rows when tables are joined back.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Spurious rows risk is why lossy decompositions are avoided. Reason explains assertion."
      }
    ],
    matchFollowing: [
      {
        question: "Match Column I (Normalization Forms) with Column II (Violation Prevented):\nColumn I:\nA. 1NF\nB. 2NF\nC. 3NF\nD. BCNF\nColumn II:\n1. Partial Dependency\n2. Transitive Dependency\n3. Multivalued Attributes\n4. LHS is not super key\nChoose option combination:",
        options: [
          "A-3, B-1, C-2, D-4",
          "A-1, B-2, C-3, D-4",
          "A-3, B-2, C-1, D-4",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "1NF-multivalued(3), 2NF-partial(1), 3NF-transitive(2), BCNF-LHS super key(4)."
      },
      {
        question: "Match Column I (SDLC Model) with Column II (Core Property):\nColumn I:\nA. Waterfall\nB. V-Model\nC. Spiral\nD. Agile Scrum\nColumn II:\n1. Sequential stages, rigid\n2. Parallel development and testing stages\n3. Iterative, risk analysis loops\n4. Sprints based collaborative releases\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Waterfall-sequential(1), V-Model-parallel(2), Spiral-risk(3), Agile-sprints(4)."
      },
      {
        question: "Match Column I (Software Testing) with Column II (Definition / Scope):\nColumn I:\nA. Unit Testing\nB. Integration Testing\nC. Alpha Testing\nD. Beta Testing\nColumn II:\n1. Individual code block/function checks\n2. Interfaces compatibility checks between modules\n3. Internal QA team checks at developer site\n4. Customer checks at user environment site\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-2, C-1, D-4",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Unit-individual(1), Integration-interfaces(2), Alpha-developer site(3), Beta-user site(4)."
      },
      {
        question: "Match Column I (e-Commerce Models) with Column II (Examples):\nColumn I:\nA. B2B\nB. B2C\nC. C2C\nD. C2B\nColumn II:\n1. Alibaba wholesale bulk deals\n2. Amazon retail book purchase\n3. eBay/OLX user-to-user classified sales\n4. Freelancers selling services to corporate businesses\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "B2B-wholesale(1), B2C-retail(2), C2C-user-to-user(3), C2B-freelancer(4)."
      },
      {
        question: "Match Column I (IoT Protocol) with Column II (Parameters):\nColumn I:\nA. MQTT\nB. CoAP\nColumn II:\n1. TCP, publish/subscribe, 2B header\n2. UDP, request/response, 4B header\nChoose option combination:",
        options: [
          "A-1, B-2",
          "A-2, B-1",
          "A-1, B-1",
          "A-2, B-2"
        ],
        answer: 0,
        explanation: "MQTT runs on TCP with 2B header(1), CoAP runs on UDP with 4B header(2)."
      },
      {
        question: "Match Column I (SQL Joins) with Column II (Output Behavior):\nColumn I:\nA. Inner Join\nB. Left Outer Join\nC. Right Outer Join\nColumn II:\n1. Returns only matched rows\n2. Returns all left rows, unmatched right are NULL\n3. Returns all right rows, unmatched left are NULL\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-1, B-3, C-2",
          "A-3, B-2, C-1"
        ],
        answer: 0,
        explanation: "Inner-only matched(1), Left-all left(2), Right-all right(3)."
      },
      {
        question: "Match Column I (HTML Form inputs) with Column II (Sizing / Properties):\nColumn I:\nA. GET method\nB. POST method\nC. Radio input\nD. Checkbox input\nColumn II:\n1. URL parameter append, limits size\n2. HTTP body payload, no size limits\n3. Mutually exclusive selection in groups\n4. Multi-selection support\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "GET-URL(1), POST-body(2), Radio-exclusive(3), Checkbox-multi(4)."
      },
      {
        question: "Match Column I (Software Testing tools) with Column II (Purpose):\nColumn I:\nA. Stub\nB. Driver\nC. Test Case\nD. Test Suite\nColumn II:\n1. Simulates lower modules in top-down testing\n2. Simulates higher modules in bottom-up testing\n3. Set of test inputs, execution conditions and expected results\n4. Collection of test cases\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-2, C-1, D-4",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Stub-lower(1), Driver-higher(2), Test case-inputs(3), Test suite-collection(4)."
      },
      {
        question: "Match Column I (Multimedia files) with Column II (Format Type):\nColumn I:\nA. .mp3\nB. .mp4\nC. .svg\nD. .gif\nColumn II:\n1. Audio format\n2. Video format\n3. Vector image format\n4. Animated raster image format\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: ".mp3-audio(1), .mp4-video(2), .svg-vector(3), .gif-animated(4)."
      },
      {
        question: "Match Column I (SAD Models) with Column II (UML diagrams):\nColumn I:\nA. Use Case\nB. Class Diagram\nC. Sequence Diagram\nColumn II:\n1. Represents user interactions with system functions\n2. Shows static structural properties (classes, attributes)\n3. Shows dynamic message flows between objects over time\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-1, B-3, C-2",
          "A-3, B-2, C-1"
        ],
        answer: 0,
        explanation: "Use Case-interactions(1), Class-static(2), Sequence-dynamic messages(3)."
      }
    ]
  }
};
