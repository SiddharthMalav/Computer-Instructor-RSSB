window.studyContent = window.studyContent || {};

window.studyContent.p2_networking_security = {
  title: "Networking & Security (नेटवर्किंग और सुरक्षा)",
  desc: "Exhaustive guide to OSI reference layers, IP Subnetting CIDR ranges, network hardware devices, RSA encryption, cyber threats, and firewall systems.",
  
  // LEVEL 1: FOUNDATION (Intro + Detailed Theory)
  level1: {
    intro: `
      <div class="alert-box info">
        <strong>Syllabus Scope (Paper-II):</strong>
        <p>Yeh section networking architectures (OSI model layers, IPv4/IPv6 networks, routing devices) aur dynamic computer network security rules (symmetric vs asymmetric cryptography, RSA algorithms, threats, firewalls) ko zero-level se complete competitive detail mein cover karta hai.</p>
      </div>
    `,
    theory: `
      <h2>PART 1: COMPUTER NETWORKS & DATA COMMUNICATON</h2>
      
      <h3>1. OSI Reference Model Layers</h3>
      <p>OSI (Open Systems Interconnection) reference model network structures ko <strong>7 logical layers</strong> mein divide karta hai:</p>
      <ul class="notes-list">
        <li><strong>Physical Layer (Layer 1):</strong> Raw bit stream transmission over physical media. Deals with voltages, data rates, cables, pin configurations. <em>Devices:</em> Repeater, Hub.</li>
        <li><strong>Data Link Layer (Layer 2):</strong> Node-to-node error-free frame delivery. Logical Link Control (LLC) and Media Access Control (MAC) sublayers. MAC addressing (48 bits). <em>Devices:</em> Switch, Bridge.</li>
        <li><strong>Network Layer (Layer 3):</strong> Host-to-host packet routing across different subnets. Logical IP addressing (IPv4: 32 bits, IPv6: 128 bits). <em>Devices:</em> Router.</li>
        <li><strong>Transport Layer (Layer 4):</strong> End-to-end process-to-process message flow control, segmentation, error check. Ports logical addressing. Protocols: TCP (connection-oriented, reliable), UDP (connectionless, speed-oriented).</li>
        <li><strong>Session Layer (Layer 5):</strong> Dialogue control, session checkpoints synchronization, token management.</li>
        <li><strong>Presentation Layer (Layer 6):</strong> Data translation, encoding formats (ASCII, Unicode), compression, encryption.</li>
        <li><strong>Application Layer (Layer 7):</strong> Direct interface for user applications (HTTP, SMTP, FTP, DNS).</li>
      </ul>

      <h3>2. IP Addressing & Subnetting</h3>
      <p>IPv4 addresses are divided into <strong>5 classes</strong> based on first octet binary range:</p>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>First Octet Range</th>
            <th>Default Subnet Mask</th>
            <th>Network/Host Split</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Class A</td>
            <td>1 - 126</td>
            <td>255.0.0.0 (/8)</td>
            <td>Net: 8 bits, Host: 24 bits</td>
          </tr>
          <tr>
            <td>Class B</td>
            <td>128 - 191</td>
            <td>255.255.0.0 (/16)</td>
            <td>Net: 16 bits, Host: 16 bits</td>
          </tr>
          <tr>
            <td>Class C</td>
            <td>192 - 223</td>
            <td>255.255.255.0 (/24)</td>
            <td>Net: 24 bits, Host: 8 bits</td>
          </tr>
          <tr>
            <td>Class D</td>
            <td>224 - 239</td>
            <td>-</td>
            <td>Multicast Group IDs</td>
          </tr>
          <tr>
            <td>Class E</td>
            <td>240 - 255</td>
            <td>-</td>
            <td>Experimental Research</td>
          </tr>
        </tbody>
      </table>
      <p><strong>Subnetting:</strong> Host bits are 'borrowed' to create subnets.
      <br>- Usable host addresses = $2^{\text{host bits}} - 2$ (Subtract 2 for network ID and directed broadcast ID).</p>

      <hr>
      <h2>PART 2: NETWORK SECURITY & CRYPTOGRAPHY</h2>

      <h3>1. Symmetric vs Asymmetric Cryptography</h3>
      <ul class="notes-list">
        <li><strong>Symmetric Cryptography:</strong> Same key is shared for both encryption and decryption (e.g., DES, AES). Key distribution is complex.</li>
        <li><strong>Asymmetric Cryptography:</strong> Two different keys are used: Public Key (shared globally for encryption) and Private Key (kept secret for decryption) (e.g., RSA).</li>
      </ul>

      <h3>2. RSA Cryptographic Algorithm</h3>
      <p>RSA algorithm details and keys derivation steps:</p>
      <pre><code>// RSA Key Gen:
Select primes p, q.
n = p * q.
phi(n) = (p - 1) * (q - 1).
Choose e such that gcd(e, phi(n)) == 1.
Calculate d such that (d * e) % phi(n) == 1.
// Public Key = (e, n), Private Key = (d, n)
Ciphertext C = M^e % n, Plaintext M = C^d % n</code></pre>

      <h3>3. Cyber Threats & Attack Signatures</h3>
      <ul class="notes-list">
        <li><strong>Virus:</strong> Code segment that attaches to host files and requires human action to execute and spread.</li>
        <li><strong>Worm:</strong> Standalone self-replicating program that spreads across network connections automatically, consuming bandwidth.</li>
        <li><strong>Trojan Horse:</strong> Disguises as useful software but contains hidden malicious payloads.</li>
        <li><strong>SQL Injection:</strong> Injecting malicious SQL statements into database query inputs to bypass authentication.</li>
      </ul>

      <h3>4. Firewall Architectures</h3>
      <ul class="notes-list">
        <li><strong>Packet Filtering:</strong> Fast. Operates at Network/Transport layers. inspects source/dest IP and port flags.</li>
        <li><strong>Stateful Inspection:</strong> tracks active connection handshakes in dynamic state tables.</li>
        <li><strong>Application Proxy Gateway:</strong> Deep packet inspection up to Application layer, hiding internal client IP.</li>
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
            <th>Formula / Mathematical Rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Usable Hosts count</strong></td>
            <td>$Usable = 2^{h} - 2$ ($h$ = Host bits size)</td>
          </tr>
          <tr>
            <td><strong>Number of Subnets</strong></td>
            <td>$Subnets = 2^{\text{borrowed bits}}$</td>
          </tr>
          <tr>
            <td><strong>Euler Totient (RSA)</strong></td>
            <td>$\phi(n) = (p-1)(q-1)$ ($p, q$ primes)</td>
          </tr>
          <tr>
            <td><strong>Decryption exponent</strong></td>
            <td>$d \times e \equiv 1 \pmod{\phi(n)}$</td>
          </tr>
          <tr>
            <td><strong>Symmetric Keys needed</strong></td>
            <td>$Keys = \frac{N(N - 1)}{2}$ ($N$ = Number of users)</td>
          </tr>
          <tr>
            <td><strong>IPv6 Bit Sizing</strong></td>
            <td>Address space = 128 bits | IPv4 = 32 bits</td>
          </tr>
        </tbody>
      </table>
    `,
    shortcuts: `
      <ul class="notes-list">
        <li><strong>Trick 1 (Subnet mask increments):</strong> Subnet masking boundaries borrow bits value increments follow a power of 2 subtract scheme from 256. For /27 mask, 4th octet has 3 network bits $\rightarrow$ block increment = $256 - 224 = 32$. Subnet boundaries are multiples of 32.</li>
        <li><strong>Trick 2 (Protocol Layer Mapping):</strong> Protocols ending with 'P' (except IP) usually map to Application layer (HTTP, FTP, SMTP, ARP is exception - maps to Layer 2/3 boundary).</li>
        <li><strong>Trick 3 (RSA Decryption check):</strong> $d$ value can be verified by check if $(d \times e) - 1$ is completely divisible by $\phi(n)$.</li>
      </ul>
    `,
    solved: {
      easy: [
        {
          question: "Identify the class and default subnet mask of IP address: 172.16.5.100.",
          solution: "First octet value = 172.\n- Class B range is 128 to 191.\n- Therefore, 172.16.5.100 belongs to Class B.\n- Default subnet mask of Class B = <strong>255.255.0.0</strong> (/16).\nAnswer: <strong>Class B, 255.255.0.0</strong>."
        },
        {
          question: "How many collision domains exist in a network with a 8-port Switch if all ports are connected to separate computers?",
          solution: "A Switch divides collision domains per port (each port represents a separate collision domain).\n- Number of ports = 8.\n- Total collision domains = <strong>8</strong>.\n- Broadcast domains = 1 (unless VLAN is configured).\nAnswer: <strong>8 collision domains</strong>."
        },
        {
          question: "Find number of usable host IPs under Class C IP subnet with CIDR notation: /29.",
          solution: "CIDR /29 means 29 network bits.\n- Host bits remaining ($h$) = $32 - 29 = 3$.\n- Usable host count = $2^h - 2 = 2^3 - 2 = 8 - 2 = 6$ usable hosts.\nAnswer: <strong>6 usable hosts</strong>."
        },
        {
          question: "If 10 users wish to communicate securely using symmetric key encryption, how many total secret keys must be distributed?",
          solution: "Formula for symmetric keys: $Keys = \\frac{N(N - 1)}{2}$\n- For $N = 10$, $Keys = \\frac{10 \\times 9}{2} = \\frac{90}{2} = 45$ secret keys.\nAnswer: <strong>45 keys</strong>."
        },
        {
          question: "Match the following OSI layers with their corresponding protocol headers:\n- A. Router\n- B. Switch\n- C. Gateway",
          solution: "Devices and their operating layers:\n- A. Router operating layer = <strong>Network Layer (Layer 3)</strong>\n- B. Switch operating layer = <strong>Data Link Layer (Layer 2)</strong>\n- C. Gateway operating layer = <strong>Application Layer (Layer 7)</strong>.\nAnswer: Router=Layer 3, Switch=Layer 2, Gateway=Layer 7."
        }
      ],
      medium: [
        {
          question: "An IP address is 10.10.5.65/28. Find the Subnet Mask and Network ID for this IP.",
          solution: "1. Subnet mask for /28:\n- /28 means 28 network bits: 24 bits (first 3 octets) + 4 bits in 4th octet.\n- 4th octet binary = 11110000 = 240 decimal.\n- Mask = <strong>255.255.255.240</strong>.\n2. Network ID calculation:\n- Increments size = $256 - 240 = 16$.\n- Subnets will start at: 0, 16, 32, 48, 64, 80...\n- IP 4th octet is 65, which falls in subnet [64 to 79].\n- Network ID = <strong>10.10.5.64</strong>.\nAnswer: <strong>Mask = 255.255.255.240, Network ID = 10.10.5.64</strong>."
        },
        {
          question: "In RSA algorithm, prime numbers are $p=5$ and $q=7$. Encryption key exponent is $e=5$. Calculate decryption exponent $d$.",
          solution: "1. Modulus $n = p \\times q = 5 \\times 7 = 35$.\n2. Euler Totient $\\phi(n) = (p-1)(q-1) = 4 \\times 6 = 20$.\n3. Find $d$ such that $(d \\times e) \\equiv 1 \\pmod{\\phi(n)} \\implies (d \\times 5) \\equiv 1 \\pmod{20}$.\nLet's check values:\n- $(d \\times 5) - 1$ must be divisible by 20.\n- If $d = 5$: $5 \\times 5 = 25 = 1 \\times 20 + 5$ (No)\n- If $d = 9$: $9 \\times 5 = 45 = 2 \\times 20 + 5$ (No)\n- If $d = 13$: $13 \\times 5 = 65 = 3 \\times 20 + 5$ (No)\n- If $d = 17$: $17 \\times 5 = 85 = 4 \\times 20 + 5$ (No)\nWait! Let's check $\\gcd(e, \\phi(n)) = \\gcd(5, 20) = 5$. Since it's not 1, RSA key generation is invalid with $e=5$. Let's select coprime exponent e. If $e=7$, then:\n- $(d \\times 7) \\equiv 1 \\pmod{20}$.\n- Try $d = 3$: $3 \\times 7 = 21 \\equiv 1 \\pmod{20}$ (Yes).\nSo if $e=7$, $d=3$.\nAnswer: <strong>For e=7, d=3</strong>."
        },
        {
          question: "Explain the difference in firewall actions between Packet Filtering and Stateful Inspection when handling a fake TCP SYN segment scan.",
          solution: "- <strong>Packet Filtering:</strong> Inspects only headers flags independently. If rule allows port 80 traffic, it will pass the SYN packet without checking connection contexts.\n- <strong>Stateful Inspection:</strong> Maintains connection states in a state table. It checks if this SYN packet matches an active handshake sequence. If it receives out-of-order handshakes, it drops the packet immediately.\nAnswer: <strong>Stateful inspection checks active connection context table, packet filtering checks independent header rules only</strong>."
        },
        {
          question: "Find the Directed Broadcast Address (DBA) for IP block: 192.168.10.16/28.",
          solution: "1. Subnet mask /28 = 255.255.255.240.\n2. Subnet range increments = $256 - 240 = 16$.\n- Subnets: 0, 16, 32...\n- Network ID = 192.168.10.16.\n3. Broadcast ID = Next Network ID - 1 = $32 - 1 = 31$ in 4th octet.\n- Directed Broadcast Address = <strong>192.168.10.31</strong>.\nAnswer: <strong>192.168.10.31</strong>."
        },
        {
          question: "What is the difference between phishing attacks and MitM (Man-in-the-Middle) attacks?",
          solution: "- <strong>Phishing:</strong> Attacker sends fake spoofed emails/websites to trick users into submitting their login details (credential harvesting).\n- <strong>MitM:</strong> Attacker intercepts active communication channel between two legitimate hosts to sniff/modify real-time traffic (session hijacking).\nAnswer: <strong>Phishing is credential harvesting via spoofing, MitM is active session traffic interception</strong>."
        }
      ],
      advanced: [
        {
          question: "A Class B network address is 172.16.0.0. We want to divide this network into at least 100 subnets. Find the required subnet mask and number of usable hosts per subnet.",
          solution: "Class B default mask is 255.255.0.0 (/16). Network bits = 16, Host bits = 16.\n1. We need at least 100 subnets.\n- $2^{\\text{borrowed bits}} \\ge 100 \\implies$ we must borrow 7 bits (since $2^6 = 64 < 100$, and $2^7 = 128 \\ge 100$).\n2. New Subnet Mask bits = $16 + 7 = 23$ bits.\n- Subnet Mask = 255.255.254.0 (/23).\n3. Host bits remaining ($h$) = $32 - 23 = 9$ bits.\n4. Usable hosts per subnet = $2^9 - 2 = 512 - 2 = $ <strong>510 usable hosts</strong>.\nAnswer: <strong>Mask = 255.255.254.0, Usable hosts = 510</strong>."
        },
        {
          question: "Using RSA algorithm encryption, prime numbers are $p=3$, $q=11$. Encryption key exponent is $e=7$. Encrypt the message $M=5$. Calculate ciphertext $C$.",
          solution: "1. Modulus $n = p \\times q = 3 \\times 11 = 33$.\n2. Euler Totient $\\phi(n) = (3-1)(11-1) = 2 \\times 10 = 20$.\n3. Encryption exponent $e = 7$ is coprime to 20.\n4. Encryption formula: $C = M^e \\pmod n$\n- $C = 5^7 \\pmod{33}$.\nLet's calculate $5^7 \\pmod{33}$:\n- $5^1 \\equiv 5 \\pmod{33}$\n- $5^2 \\equiv 25 \\pmod{33}$\n- $5^3 = 125 = 33 \\times 3 + 26 \\equiv 26 \\equiv -7 \\pmod{33}$\n- $5^6 = (5^3)^2 \\equiv (-7)^2 \\equiv 49 \\equiv 16 \\pmod{33}$\n- $5^7 = 5^6 \\times 5 \\equiv 16 \\times 5 = 80 \\pmod{33}$.\n- $80 = 33 \\times 2 + 14 \\equiv 14 \\pmod{33}$.\nCiphertext $C = $ <strong>14</strong>.\nAnswer: <strong>C = 14</strong>."
        },
        {
          question: "An organization owns IP addresses block: 192.168.1.0/24. They want to create subnets of sizes: Subnet A (100 hosts), Subnet B (50 hosts), Subnet C (25 hosts). Implement VLSM (Variable Length Subnet Masking) ranges allocations.",
          solution: "VLSM allocation must assign largest subnets first:\n1. <strong>Subnet A (100 hosts):</strong> Requires block of size $2^7 = 128$ (/25 mask).\n- Range: 192.168.1.0 to 192.168.1.127. Network ID = 192.168.1.0/25.\n2. <strong>Subnet B (50 hosts):</strong> Requires block of size $2^6 = 64$ (/26 mask).\n- Next block starts at 128. Range: 192.168.1.128 to 192.168.1.191. Network ID = 192.168.1.128/26.\n3. <strong>Subnet C (25 hosts):</strong> Requires block of size $2^5 = 32$ (/27 mask).\n- Next block starts at 192.168.1.192. Range: 192.168.1.192 to 192.168.1.223. Network ID = 192.168.1.192/27.\nAnswer: <strong>A: 192.168.1.0/25, B: 192.168.1.128/26, C: 192.168.1.192/27</strong>."
        },
        {
          question: "Trace the step-by-step ARP (Address Resolution Protocol) request/reply network packet flow when Host A (IP 10.0.0.1, MAC AA) wants to resolve MAC address of Host B (IP 10.0.0.2, MAC BB) on same subnet.",
          solution: "1. <strong>ARP Request (Broadcast):</strong> Host A broadcasts a request to all nodes: 'Who has IP 10.0.0.2? Tell 10.0.0.1'. Frame headers: Dest MAC = FF:FF:FF:FF:FF:FF (Broadcast), Source MAC = AA.\n2. <strong>ARP Processing:</strong> All nodes receive the packet, but only Host B processes it (as IP matches). Others drop it.\n3. <strong>ARP Reply (Unicast):</strong> Host B sends a direct response to Host A: 'IP 10.0.0.2 is at MAC BB'. Frame headers: Dest MAC = AA, Source MAC = BB.\n4. <strong>Cache Update:</strong> Host A updates its ARP cache with entry: 10.0.0.2 $\\rightarrow$ BB.\nAnswer: <strong>Request is broadcast (dest FF-FF-FF-FF-FF-FF), Reply is unicast (dest AA)</strong>."
        },
        {
          question: "Calculate the total number of keys required for secure communications inside a group of 100 users under: (a) Symmetric cryptography, and (b) Asymmetric cryptography.",
          solution: "1. <strong>Symmetric:</strong> All pairs need a unique shared key.\n- $Keys = \\frac{N(N-1)}{2} = \\frac{100 \\times 99}{2} = 4950$ secret keys.\n2. <strong>Asymmetric:</strong> Each user has exactly 2 keys (1 public, 1 private).\n- $Keys = 2 \\times N = 2 \\times 100 = 200$ keys.\nAnswer: <strong>Symmetric = 4950 keys, Asymmetric = 200 keys</strong>."
        }
      ]
    }
  },
  
  // LEVEL 3: ADVANCED COMPETITIVE (Comparison Tables + PYQs + Revision Sheet)
  level3: {
    comparisons: `
      <h3>1. OSI Reference Model vs TCP/IP Protocol Stack</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>OSI Model</th>
            <th>TCP/IP Stack</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of Layers</td>
            <td>7 Layers (Physical to Application).</td>
            <td>4 or 5 Layers.</td>
          </tr>
          <tr>
            <td>Development History</td>
            <td>Theoretical framework developed by ISO before protocols were implemented.</td>
            <td>Built around existing protocols (developed by ARPANET/DoD).</td>
          </tr>
          <tr>
            <td>Presentation/Session layers</td>
            <td>Explicit Session (Layer 5) and Presentation (Layer 6) layers.</td>
            <td>No separate session/presentation layers (features handled in Application layer).</td>
          </tr>
        </tbody>
      </table>

      <h3>2. Symmetric vs Asymmetric Cryptography</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Symmetric Key</th>
            <th>Asymmetric Key</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Key count</td>
            <td>Single shared key used for both encryption and decryption.</td>
            <td>Key pair: Public key (encrypt) and Private key (decrypt).</td>
          </tr>
          <tr>
            <td>Execution Speed</td>
            <td>Very fast (low mathematical overhead, suitable for bulk data).</td>
            <td>Slow (complex modular arithmetic prime number calculations).</td>
          </tr>
          <tr>
            <td>Key Distribution</td>
            <td>Difficult (secret key must be shared securely beforehand).</td>
            <td>Easy (public key shared openly, private key kept local).</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Computer Virus vs Network Worm</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Computer Virus</th>
            <th>Network Worm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Self-Replication</td>
            <td>Requires a host carrier file to attach and execute.</td>
            <td>Standalone executable, replicates automatically.</td>
          </tr>
          <tr>
            <td>Propagation mechanism</td>
            <td>Spreads via user actions (copying infected files/emails).</td>
            <td>Spreads automatically using networks ports vulnerabilities.</td>
          </tr>
          <tr>
            <td>Primary Resource Consumption</td>
            <td>Corrupts local storage files and directories.</td>
            <td>Consumes networks bandwidth and memory.</td>
          </tr>
        </tbody>
      </table>
    `,
    revision: {
      oneLiners: [
        "<strong>OSI Layer 4 role:</strong> Transport layer is responsible for end-to-end process-to-process message delivery.",
        "<strong>MAC Address Sizing:</strong> Data Link layer uses hardware MAC addresses of length 48 bits (6 bytes).",
        "<strong>Router Layer:</strong> Routers operate at Layer 3 (Network Layer) and make routing decisions based on IP addresses.",
        "<strong>TCP vs UDP reliability:</strong> TCP is reliable and connection-oriented, whereas UDP is connectionless and fast.",
        "<strong>IPv6 Address bits:</strong> IPv6 addresses are 128 bits long, compared to 32 bits for IPv4.",
        "<strong>Usable host formula:</strong> $2^{\\text{host bits}} - 2$, subtracting network and directed broadcast IDs.",
        "<strong>Class C IP Range:</strong> Class C addresses have first octet values ranging from 192 to 223.",
        "<strong>Symmetric encryption standard:</strong> Advanced Encryption Standard (AES) is a symmetric key algorithm.",
        "<strong>Asymmetric encryption standard:</strong> Rivest-Shamir-Adleman (RSA) is an asymmetric key algorithm.",
        "<strong>RSA Euler totient:</strong> Euler totient calculation formula: $\\phi(n) = (p-1)(q-1)$.",
        "<strong>Phishing definition:</strong> Cyber attack gathering sensitive details using spoofed emails and clone websites.",
        "<strong>Network Worm property:</strong> Self-replicating standalone malware that spreads across network links without host files.",
        "<strong>Packet filtering layers:</strong> Operates at OSI Network and Transport layers, analyzing IP and Port headers.",
        "<strong>Application Proxy isolation:</strong> Completely hides the internal client's IP from destination servers.",
        "<strong>DNS role:</strong> Domain Name System resolves domain names into physical IP addresses (Port 53).",
        "<strong>ARP role:</strong> Address Resolution Protocol translates logical IP addresses into physical MAC addresses.",
        "<strong>Symmetric keys formula:</strong> Sizing keys for $N$ users is: $N(N-1)/2$.",
        "<strong>Directed Broadcast ID:</strong> IP address where all bits of host portion are set to 1.",
        "<strong>VLAN purpose:</strong> Virtual Local Area Networks divide broadcast domains logically inside switches.",
        "<strong>RSA Decryption exponent:</strong> Decryption key exponent calculation: $(d \\times e) \\equiv 1 \\pmod{\\phi(n)}$."
      ],
      booster: `
        <div class="alert-box note">
          <strong>Network/Security Exam Booster:</strong>
          <p>For IP subnetting, always locate the critical octet using CIDR notation. For /26 to /30, it is the 4th octet. Calculate subnet blocks using $256 - \text{mask value}$ to quickly identify the network boundaries. Under RSA questions, verify coprime relations before key generation.</p>
        </div>
      `
    }
  },
  
  // 50 SYLLABUS SPECIFIC PRACTICE QUESTIONS
  questions: {
    mcqs: [
      {
        id: "net_m1",
        question: "For a Class C network IP address using subnet mask 255.255.255.224, how many usable host addresses are available per subnet?",
        options: [
          "32",
          "30",
          "16",
          "14"
        ],
        answer: 1,
        explanation: "Mask 255.255.255.224 (/27) has 5 host bits remaining ($32-27=5$). Usable host addresses = $2^5 - 2 = 32 - 2 = 30$ hosts."
      },
      {
        id: "net_m2",
        question: "Which of the following routing protocols is classified as an Exterior Gateway Protocol (EGP) used to route data between different autonomous systems?",
        options: [
          "OSPF",
          "RIP",
          "BGP",
          "EIGRP"
        ],
        answer: 2,
        explanation: "BGP (Border Gateway Protocol) autonomously routes data across Autonmous Systems (AS), acting as the core exterior gateway routing protocol of the Internet."
      },
      {
        id: "net_m3",
        question: "What is the correct port number used by Domain Name System (DNS) to resolve domain names?",
        options: [
          "21",
          "23",
          "53",
          "80"
        ],
        answer: 2,
        explanation: "DNS queries primarily resolve over UDP/TCP port number 53. Port 21 is FTP, 23 is Telnet, 80 is HTTP."
      },
      {
        id: "net_m4",
        question: "In asymmetric cryptography (RSA), public key is used for ________ and private key is used for ________.",
        options: [
          "Decryption, Encryption",
          "Encryption, Decryption",
          "Signature, Verification",
          "Encryption, Key exchange only"
        ],
        answer: 1,
        explanation: "Public key is shared globally to encrypt data, and matching secret private key is used by the owner to decrypt it."
      },
      {
        id: "net_m5",
        question: "A firewall that keeps track of the state of active network connections, such as checking if TCP segments match an active three-way handshake, is called:",
        options: [
          "Packet Filtering Firewall",
          "Stateful Inspection Firewall",
          "Application Proxy Gateway",
          "Stateless Firewall"
        ],
        answer: 1,
        explanation: "Stateful inspection firewalls maintain connection states in a state table to verify active handshake contexts."
      },
      {
        id: "net_m6",
        question: "Which layer of the OSI reference model is primarily responsible for the routing of data packets across different subnets?",
        options: [
          "Physical Layer",
          "Data Link Layer",
          "Network Layer",
          "Transport Layer"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "OSI model ki **Network Layer** packets routing, IP addressing, path determination, and logical packet delivery handle karti hai."
      },
      {
        id: "net_m7",
        question: "What is the exact bit length size of an Internet Protocol Version 6 (IPv6) address?",
        options: [
          "32 bits",
          "64 bits",
          "128 bits",
          "256 bits"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "IPv6 addresses are **128 bits** long, represented as eight groups of four hexadecimal digits separated by colons."
      },
      {
        id: "net_m8",
        question: "A type of malicious program that actively replicates itself across network connections without needing to attach to a host file or require human intervention is known as:",
        options: [
          "Trojan Horse",
          "Computer Virus",
          "Network Worm",
          "Logic Bomb"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Worms standalone self-replicating programs hote hain jo network ports ke through duplicate copies transmit karte hain, without human host file dependency."
      },
      {
        id: "net_m9",
        question: "Which protocol resolves a physical MAC hardware address into a logical IP address?",
        options: [
          "ARP",
          "RARP",
          "DHCP",
          "ICMP"
        ],
        answer: 1,
        explanation: "RARP (Reverse Address Resolution Protocol) MAC hardware address parameter ko logical IP address mein map/resolve karta hai. ARP IP-to-MAC resolve karta hai."
      },
      {
        id: "net_m10",
        question: "What is the bit length size of IPv4 address space?",
        options: [
          "16 bits",
          "32 bits",
          "64 bits",
          "128 bits"
        ],
        answer: 1,
        explanation: "IPv4 address space is 32 bits (4 bytes) divided into 4 octets separated by dots."
      },
      {
        id: "net_m11",
        question: "Which transmission protocol is connectionless and does not guarantee packet delivery or order?",
        options: [
          "TCP",
          "UDP",
          "FTP",
          "HTTP"
        ],
        answer: 1,
        explanation: "UDP (User Datagram Protocol) connectionless, speed-oriented transmission protocol hai, which does not guarantee delivery."
      },
      {
        id: "net_m12",
        question: "Which network topology connects all nodes to a single central cable, requiring terminating resistors at both ends?",
        options: [
          "Star Topology",
          "Ring Topology",
          "Bus Topology",
          "Mesh Topology"
        ],
        answer: 2,
        explanation: "Bus topology features a single backbone cable with terminators at the ends to prevent signal reflections."
      },
      {
        id: "net_m13",
        question: "An IP address points to: 224.0.0.5. Which Class of IP address does it belong to?",
        options: [
          "Class B",
          "Class C",
          "Class D",
          "Class E"
        ],
        answer: 2,
        explanation: "Class D range is 224 to 239. Used primarily for multicasting purposes (224.0.0.5 is OSPF routers multicast)."
      },
      {
        id: "net_m14",
        question: "Which layer of the OSI reference model handles data encryption, compression, and character translation?",
        options: [
          "Application Layer",
          "Presentation Layer",
          "Session Layer",
          "Transport Layer"
        ],
        answer: 1,
        explanation: "Presentation Layer (Layer 6) handles formatting rules, dynamic compressions, translations, and encryptions."
      },
      {
        id: "net_m15",
        question: "What is the default subnet mask CIDR notation for Class B networks?",
        options: [
          "/8",
          "/16",
          "/24",
          "/32"
        ],
        answer: 1,
        explanation: "Class B default mask is 255.255.0.0, which has first 16 bits set to 1, representing CIDR /16."
      },
      {
        id: "net_m16",
        question: "What type of key cryptography is DES (Data Encryption Standard)?",
        options: [
          "Symmetric Key Cryptography",
          "Asymmetric Key Cryptography",
          "Hashing algorithm",
          "Public key exchange protocol"
        ],
        answer: 0,
        explanation: "DES is symmetric block cipher using a single shared key of size 56 bits for encryption/decryption."
      },
      {
        id: "net_m17",
        question: "Which cyber threat locks user systems by encrypt files and demanding payment for decrypter keys?",
        options: [
          "Spyware",
          "Adware",
          "Ransomware",
          "Rootkit"
        ],
        answer: 2,
        explanation: "Ransomware targets data files and encrypts them, demanding ransom for the decryption keys."
      },
      {
        id: "net_m18",
        question: "What is a network switch's primary operational advantage over a standard network hub?",
        options: [
          "Operates at Application layer",
          "Limits collisions domains to individual ports",
          "Amplifies signals without parsing MAC",
          "Provides WAN routing protocols"
        ],
        answer: 1,
        explanation: "Switch operates at Layer 2 and creates separate collision domains per port. Hub is a single collision domain."
      },
      {
        id: "net_m19",
        question: "Which protocol operates at the Data Link layer to prevent loops in networks containing redundant paths?",
        options: [
          "Spanning Tree Protocol (STP)",
          "Border Gateway Protocol (BGP)",
          "Address Resolution Protocol (ARP)",
          "OSPF"
        ],
        answer: 0,
        explanation: "STP (Spanning Tree Protocol) logical loops block karke data link frames cycling prevents checks handle karta hai."
      },
      {
        id: "net_m20",
        question: "An IP subnet mask is 255.255.255.248. Find the block increment size to calculate subnet ranges.",
        options: [
          "16",
          "8",
          "4",
          "32"
        ],
        answer: 1,
        explanation: "Block size increment = $256 - 248 = 8$ addresses per subnet."
      }
    ],
    conceptual: [
      {
        question: "An IP address block is 192.168.5.115/27. Determine the Network ID and the Directed Broadcast Address (DBA).",
        options: [
          "Net ID: 192.168.5.96, DBA: 192.168.5.127",
          "Net ID: 192.168.5.64, DBA: 192.168.5.95",
          "Net ID: 192.168.5.96, DBA: 192.168.5.111",
          "Net ID: 192.168.5.112, DBA: 192.168.5.127"
        ],
        answer: 0,
        explanation: "Mask /27 = 255.255.255.224. Subnet blocks increments = 32.\n- Subnets: 0, 32, 64, 96, 128...\n- IP 115 falls in range [96 to 127].\n- Network ID = 192.168.5.96.\n- Broadcast ID = Next subnet - 1 = $128 - 1 = 127$ in 4th octet $\rightarrow$ DBA = 192.168.5.127."
      },
      {
        question: "In RSA algorithm, $p=3$ and $q=13$. Euler totient $\\phi(n)$ is ________, and if encryption key exponent $e=5$, then decryption key exponent $d$ is ________.",
        options: [
          "phi(n)=36, d=5",
          "phi(n)=24, d=5",
          "phi(n)=24, d=7",
          "phi(n)=36, d=7"
        ],
        answer: 2,
        explanation: "1. $\\phi(n) = (p-1)(q-1) = 2 \\times 12 = 24$.\n2. $(d \\times 5) \\equiv 1 \\pmod{24}$.\n- Try $d=5$: $5 \\times 5 = 25 \\equiv 1 \\pmod{24}$ (Yes).\nSo $\\phi(n) = 24, d=5$."
      },
      {
        question: "A network router has 4 interfaces. Each interface is connected to a separate switch. Each switch has 8 computers connected to it. Find the total number of collision domains and broadcast domains in this network setup.",
        options: [
          "4 collision domains, 4 broadcast domains",
          "32 collision domains, 4 broadcast domains",
          "36 collision domains, 4 broadcast domains",
          "32 collision domains, 1 broadcast domain"
        ],
        answer: 2,
        explanation: "1. <strong>Collision Domains:</strong> Each link from switch to computer is a collision domain (total $8 \\times 4 = 32$) + 4 links from router interfaces to switches $\\rightarrow 32 + 4 = 36$ collision domains.\n2. <strong>Broadcast Domains:</strong> Each router interface separates broadcast domains. Total = 4 broadcast domains."
      },
      {
        question: "An IP address is 172.16.50.250/22. What is the Network ID for this address?",
        options: [
          "172.16.50.0",
          "172.16.48.0",
          "172.16.0.0",
          "172.16.32.0"
        ],
        answer: 1,
        explanation: "Mask /22 = 255.255.252.0 (third octet mask is 252).\n- Third octet increments size = $256 - 252 = 4$.\n- Subnets in third octet: 0, 4, 8... 44, 48, 52...\n- IP 3rd octet is 50, which falls in [48 to 51].\n- Network ID = 172.16.48.0."
      },
      {
        question: "How many secret keys are required to be created and managed in a symmetric key system with 50 users?",
        options: [
          "50 keys",
          "100 keys",
          "1225 keys",
          "2450 keys"
        ],
        answer: 2,
        explanation: "Symmetric keys count formula: $Keys = \\frac{N(N-1)}{2} = \\frac{50 \\times 49}{2} = 25 \\times 49 = 1225$ keys."
      },
      {
        question: "Which of the following describes the behavior of a standard Bridge device in networks?",
        options: [
          "Amplifies analog signals at physical layer",
          "Filters data packets based on destination MAC addresses",
          "Forwards IP packets across autonomous subnets",
          "Monitors stateful connection handshakes"
        ],
        answer: 1,
        explanation: "Bridge devices read frame destination MAC addresses to decide whether to forward them across segments."
      },
      {
        question: "What is the net ID binary bit length in Class B network default addresses?",
        options: [
          "8 bits",
          "16 bits",
          "24 bits",
          "14 bits"
        ],
        answer: 1,
        explanation: "Class B default mask is 255.255.0.0, which reserves exactly 16 bits (2 bytes) for the network ID."
      },
      {
        question: "A client initiates a TCP connection. Which flag sequence occurs during the 3-way handshake process?",
        options: [
          "SYN $\\rightarrow$ SYN-ACK $\\rightarrow$ ACK",
          "SYN $\\rightarrow$ ACK $\\rightarrow$ SYN-ACK",
          "SYN-ACK $\\rightarrow$ SYN $\\rightarrow$ ACK",
          "PING $\\rightarrow$ PONG $\\rightarrow$ ACK"
        ],
        answer: 0,
        explanation: "TCP 3-way handshake process uses: Client SYN packet, Server SYN-ACK response, Client ACK acknowledgement."
      },
      {
        question: "If an IP address has Directed Broadcast Address (DBA) 192.168.1.15 and Subnet mask is 255.255.255.240. What is the Network ID?",
        options: [
          "192.168.1.0",
          "192.168.1.16",
          "192.168.1.8",
          "192.168.1.15"
        ],
        answer: 0,
        explanation: "Mask 240 block increments = 16. Subnet starts at 0. Directed Broadcast is $16-1 = 15$. So Network ID starts at 192.168.1.0."
      },
      {
        question: "What is the ciphertext C returned when encrypting M=4 using RSA where p=3, q=11, and e=3?",
        options: [
          "4",
          "31",
          "14",
          "25"
        ],
        answer: 1,
        explanation: "1. Modulus $n = 3 \\times 11 = 33$.\n2. $C = M^e \\pmod n = 4^3 \\pmod{33} = 64 \\pmod{33}$.\n- $64 - 33 = 31$.\nCiphertext $C = 31$."
      }
    ],
    assertionReason: [
      {
        question: "Assertion (A): Hostusable IP addresses under /30 subnet mask is exactly 2.\nReason (R): Subnetting requires subtracting two IP addresses (Network ID and Directed Broadcast Address) to calculate usable hosts.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Host bits = $32-30=2$. Usable hosts = $2^2 - 2 = 2$. R explains the subtraction rules."
      },
      {
        question: "Assertion (A): Router operates at Layer 3 (Network Layer) of OSI model.\nReason (R): Router makes forwarding decisions based on destination hardware MAC addresses.\nChoose options:",
        options: [
          "A is true, R is false",
          "A is false, R is true",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "Assertion is true, but Reason is false. Routers make decisions based on logical IP addresses, not MAC addresses (switches use MACs)."
      },
      {
        question: "Assertion (A): Asymmetric key cryptography is slower than symmetric key cryptography.\nReason (R): Asymmetric algorithms use complex modular exponential arithmetic calculations over very large prime numbers.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Mathematical complexity of RSA modular arithmetic calculations explains why asymmetric is slower."
      },
      {
        question: "Assertion (A): Network worms propagate faster and consume networks bandwidth more aggressively than standard file viruses.\nReason (R): Worms are standalone programs that replicate themselves automatically across network links, requiring no host file or human intervention.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Reason describes worms properties which directly explain their aggressive spreading nature."
      },
      {
        question: "Assertion (A): Stateful inspection firewalls are more secure than packet filtering firewalls.\nReason (R): Stateful firewalls inspect data packets up to Application layer, decoding all user logins details.\nChoose options:",
        options: [
          "A is true, R is false",
          "A is false, R is true",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "Assertion is true, but Reason is false. Stateful firewalls check handshake state connection tables, not application layer data (proxy gateways inspect application data)."
      },
      {
        question: "Assertion (A): ARP replies are unicast messages.\nReason (R): ARP request contains the MAC address of the requesting host, allowing destination target to reply directly to it.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Since request has source MAC details, destination target unicasts reply directly. Both statements correct."
      },
      {
        question: "Assertion (A): UDP is a connectionless transport layer protocol.\nReason (R): UDP guarantees packet ordering and reliable delivery using sequences handshakes.\nChoose options:",
        options: [
          "A is true, R is false",
          "A is false, R is true",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "UDP is connectionless (A is true). Reason is false because UDP has no handshake or ordering reliability."
      },
      {
        question: "Assertion (A): Symmetric key cryptography has key distribution problems.\nReason (R): Same secret key must be shared securely between sender and receiver before encryption can start.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Need to pre-share secret key securely is the main reason behind key distribution challenges."
      },
      {
        question: "Assertion (A): Class D IP addresses default subnet mask is 255.255.255.0.\nReason (R): Class D IP addresses are reserved for multicasting purposes and do not use host/network divisions masks.\nChoose options:",
        options: [
          "A is false, R is true",
          "A is true, R is false",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "Class D has no default subnet masks (A is false, R is true)."
      },
      {
        question: "Assertion (A): Phishing attacks bypass firewalls security parameters.\nReason (R): Phishing attacks target human users (social engineering) rather than breaking system ports vulnerabilities.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Phishing tricks users into giving credentials over valid HTTP streams, which firewalls allow. R explains A."
      }
    ],
    matchFollowing: [
      {
        question: "Match Column I (OSI Layers) with Column II (Operational protocols):\nColumn I:\nA. Network Layer\nB. Transport Layer\nC. Application Layer\nD. Data Link Layer\nColumn II:\n1. TCP / UDP\n2. IP / ICMP\n3. HTTP / SMTP\n4. Ethernet / PPP\nChoose option combination:",
        options: [
          "A-2, B-1, C-3, D-4",
          "A-1, B-2, C-4, D-3",
          "A-2, B-3, C-4, D-1",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Network-IP(2), Transport-TCP(1), Application-HTTP(3), Data Link-Ethernet(4)."
      },
      {
        question: "Match Column I (IP Class) with Column II (Address Range First Octet):\nColumn I:\nA. Class A\nB. Class B\nC. Class C\nD. Class D\nColumn II:\n1. 1 - 126\n2. 128 - 191\n3. 192 - 223\n4. 224 - 239\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Class A 1-126(1), Class B 128-191(2), Class C 192-223(3), Class D 224-239(4)."
      },
      {
        question: "Match Column I (Network Devices) with Column II (OSI operating layer):\nColumn I:\nA. Repeater\nB. Switch\nC. Router\nD. Gateway\nColumn II:\n1. Physical Layer\n2. Data Link Layer\n3. Network Layer\n4. Application Layer\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-2, C-1, D-4",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Repeater-Physical(1), Switch-Data Link(2), Router-Network(3), Gateway-Application(4)."
      },
      {
        question: "Match Column I (Cyber Attacks) with Column II (Signature/Description):\nColumn I:\nA. Phishing\nB. MitM\nC. DDoS\nD. SQL Injection\nColumn II:\n1. Spoofed clone sites to steal login details\n2. Eavesdropping and active traffic interception\n3. Overwhelming target server with botnets queries\n4. database input manipulation to bypass logins\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Phishing-spoofing(1), MitM-interception(2), DDoS-botnet overload(3), SQL Injection-database bypass(4)."
      },
      {
        question: "Match Column I (Firewall Type) with Column II (Operating Layer / Role):\nColumn I:\nA. Packet Filtering\nB. Stateful Inspection\nC. Application Proxy Gateway\nColumn II:\n1. inspects IP/Port headers fast\n2. Tracks active TCP connection handshakes in state tables\n3. Deep packet inspection up to Layer 7 hiding internal IPs\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-1, B-3, C-2",
          "A-3, B-2, C-1"
        ],
        answer: 0,
        explanation: "Packet Filtering-headers(1), Stateful-state tables(2), Proxy-Layer 7(3)."
      },
      {
        question: "Match Column I (IP Address CIDR) with Column II (usable host count):\nColumn I:\nA. /30\nB. /29\nC. /28\nD. /24\nColumn II:\n1. 2 hosts\n2. 6 hosts\n3. 14 hosts\n4. 254 hosts\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "/30-2 hosts(1), /29-6 hosts(2), /28-14 hosts(3), /24-254 hosts(4)."
      },
      {
        question: "Match Column I (Security terms) with Column II (definition):\nColumn I:\nA. Encryption\nB. Decryption\nC. Hashing\nD. Digital Signature\nColumn II:\n1. Transforming plaintext to ciphertext\n2. Transforming ciphertext back to plaintext\n3. One-way mathematical transformation for integrity\n4. Verifies sender identity and non-repudiation\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Encryption-plaintext to cipher(1), Decryption-back to plaintext(2), Hashing-one-way(3), Signature-non-repudiation(4)."
      },
      {
        question: "Match Column I (Malware category) with Column II (spread properties):\nColumn I:\nA. Virus\nB. Worm\nC. Trojan\nColumn II:\n1. Requires host carrier file and user action to execute\n2. Standalone self-propagating program using networks\n3. Disguised as useful application containing hidden malicious payload\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-1, B-3, C-2",
          "A-3, B-2, C-1"
        ],
        answer: 0,
        explanation: "Virus-host file(1), Worm-standalone networks(2), Trojan-disguise(3)."
      },
      {
        question: "Match Column I (Port number) with Column II (Services):\nColumn I:\nA. Port 80\nB. Port 443\nC. Port 25\nD. Port 22\nColumn II:\n1. HTTP (plaintext web traffic)\n2. HTTPS (encrypted SSL web traffic)\n3. SMTP (email transfer)\n4. SSH (secure shell remote access)\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "80-HTTP(1), 443-HTTPS(2), 25-SMTP(3), 22-SSH(4)."
      },
      {
        question: "Match Column I (Network Topology) with Column II (Core properties):\nColumn I:\nA. Star\nB. Mesh\nC. Ring\nD. Bus\nColumn II:\n1. All nodes connect to central hub/switch\n2. Point-to-point connections between all node pairs (highest redundancy)\n3. Nodes connected in closed loop, token passing access\n4. Single backbone wire with terminators\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Star-central hub(1), Mesh-pairs redundancy(2), Ring-token loop(3), Bus-backbone wire(4)."
      }
    ]
  }
};
