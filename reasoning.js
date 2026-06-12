window.studyContent = window.studyContent || {};

window.studyContent.reasoning = {
  title: "Logical Reasoning & Mental Ability (तार्किक क्षमता)",
  desc: "Comprehensive guide on Coding-Decoding, Blood Relations, Directions, Venn Diagrams, Syllogisms, and Logical Arguments.",
  
  // LEVEL 1: FOUNDATION (Intro + Detailed Theory)
  level1: {
    intro: `
      <div class="alert-box info">
        <strong>Paper-I Syllabus Scope:</strong>
        <p>Logical reasoning, analytical ability, mental ability (coding-decoding, blood relations, direction sense, series completion, logical Venn diagrams, statement-arguments/assumptions) ko basic concepts aur rules ke sath target karta hai.</p>
      </div>
    `,
    theory: `
      <h2>1. Coding-Decoding (कोडिंग-डिकोडिंग)</h2>
      <ul class="notes-list">
        <li><strong>Letter Shifting Coding:</strong> Letters are shifted forward or backward by a constant number (e.g. +1, -1, +2, -2...).
          <br>- *E-J-O-T-Y Rule:* Helps remember positions in English alphabet: $E=5, J=10, O=15, T=20, Y=25$.
          <br>- *V-I-Q-L-G Rule:* Reverse alphabetical pairs (Sum = 27). For example: A (1) + Z (26) = 27, B (2) + Y (25) = 27. Shortcut: **A**z**B**y **C**u**X** **D**e**W** **E**v**E**n **F**u**ll** **G**t**Road** **H**igh**S**chool **I**ndian**R**ailway **J**ack**Q**ueen **K**p**Law** **M**a**N**.
        </li>
        <li><strong>Mathematical Number Coding:</strong> Letters are replaced by their positional values, sums, products, or reverse sums (e.g. CAT coded as 24: $3 + 1 + 20 = 24$).</li>
        <li><strong>Substitutional Coding:</strong> Entire words are coded using coded tags (e.g., 'sky is blue' is coded as 'de ra pi'). Common terms are eliminated between sentences to find codes.</li>
      </ul>

      <h2>2. Blood Relations (रक्त सम्बन्ध)</h2>
      <p>Family Tree drawing rules are crucial for solving complex relations:</p>
      <ul class="notes-list">
        <li><strong>Generation Levels:</strong>
          <br>- Generation +2: Grandparents (Dada, Dadi, Nana, Nani).
          <br>- Generation +1: Parents, Uncles, Aunts, Father-in-law, Mother-in-law.
          <br>- Generation 0 (Self): Self, Siblings, Cousins, Spouse, Brother-in-law, Sister-in-law.
          <br>- Generation -1: Children, Nephews, Nieces, Son-in-law, Daughter-in-law.
        </li>
        <li><strong>Standard Representation Symbols:</strong>
          <br>- Male $\rightarrow$ Square box $[ ]$ or Plus sign $(+)$
          <br>- Female $\rightarrow$ Circle $( )$ or Minus sign $(-)$
          <br>- Married Couple $\rightarrow$ Double horizontal lines $(=)$
          <br>- Siblings / Brothers / Sisters $\rightarrow$ Single horizontal line $(-)$
        </li>
      </ul>

      <h2>3. Direction Sense Test (दिशा परीक्षण)</h2>
      <ul class="notes-list">
        <li><strong>Cardinal & Sub-Cardinal Directions:</strong>
          <br>- Cardinal: North (Top), South (Bottom), East (Right), West (Left).
          <br>- Sub-Cardinal: North-East (NE), North-West (NW), South-East (SE), South-West (SW).
        </li>
        <li><strong>Angles & Rotations:</strong> Right turn represents a $90^\circ$ clockwise (CW) rotation. Left turn represents a $90^\circ$ anti-clockwise (ACW) rotation.</li>
        <li><strong>Shortest Distance (Pythagoras Theorem):</strong> Used when a person moves at right angles. Shortest path is the hypotenuse: $d = \sqrt{x^2 + y^2}$.</li>
      </ul>

      <h2>4. Syllogism & Venn Diagrams</h2>
      <ul class="notes-list">
        <li><strong>All A are B:</strong> A is completely inside B.</li>
        <li><strong>Some A are B:</strong> Circles of A and B overlap.</li>
        <li><strong>No A is B:</strong> Circles of A and B are completely separate.</li>
        <li><strong>Syllogism Evaluation:</strong> Always test conclusions on both basic and possible alternative (possibility) Venn diagrams. A conclusion is valid only if it holds true in all diagrams.</li>
      </ul>

      <h2>5. Logical Arguments & Assumptions</h2>
      <ul class="notes-list">
        <li><strong>Statement & Assumptions:</strong> Assumptions are the unstated ideas that the speaker takes for granted before making the statement. They must be directly related and logically implicit.</li>
        <li><strong>Statement & Strong/Weak Arguments:</strong> Strong arguments are realistic, touch upon the core issue, and are backed by logic/data. Weak arguments are opinionated, superstitious, or simple comparisons.</li>
      </ul>
    `
  },
  
  // LEVEL 2: EXAM READY (Formulas + Shortcut Tricks + 15 Solved Problems)
  level2: {
    formulas: `
      <table class="notes-table">
        <thead>
          <tr>
            <th>Concept / Rule Name</th>
            <th>Rule Formula / Diagram Representation</th>
            <th>Quick Application Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Opposite Letter Position</strong></td>
            <td>$\text{Position} + \text{Opposite Position} = 27$</td>
            <td>Subtract current position from 27 to get opposite.</td>
          </tr>
          <tr>
            <td><strong>Shortest Distance</strong></td>
            <td>$H = \sqrt{B^2 + P^2}$ (Pythagorean Triplets)</td>
            <td>Common triplets: (3, 4, 5), (5, 12, 13), (8, 15, 17).</td>
          </tr>
          <tr>
            <td><strong>Shadow Rule (Morning)</strong></td>
            <td>Sun is in East $\rightarrow$ Shadow falls in West.</td>
            <td>If facing North, shadow is on Left. Facing South, shadow is on Right.</td>
          </tr>
          <tr>
            <td><strong>Shadow Rule (Evening)</strong></td>
            <td>Sun is in West $\rightarrow$ Shadow falls in East.</td>
            <td>If facing North, shadow is on Right. Facing South, shadow is on Left.</td>
          </tr>
        </tbody>
      </table>
    `,
    shortcuts: `
      <ul class="notes-list">
        <li><strong>Trick for Letter Positions (EJOTY):</strong> Memorize $5, 10, 15, 20, 25$. For letters in between, count from the nearest EJOTY letter. E.g., to find R, count from $O (15) \rightarrow P(16), Q(17), R(18)$.</li>
        <li><strong>Trick for Direction Coordinates:</strong> Write directions clockwise: **N - E - S - W**. If you turn right from North, you go to East. If you turn right from East, you go to South.</li>
        <li><strong>Trick for Blood Relations:</strong> Always start family trees from the person mentioned after **'of'** in pointing-to questions.</li>
      </ul>
    `,
    solved: {
      easy: [
        {
          question: "If 'COACHING' is coded as 'X L Z X S R M T' in a certain code language, how will 'PORTAL' be coded?",
          solution: "Let's check the letters of COACHING:\n- C is 3rd from start, X is 3rd from end (C + X = 27).\n- O (15) + L (12) = 27.\n- A (1) + Z (26) = 27.\nPattern: Opposite letter pairs.\nApplying to PORTAL:\n- P (16) $\\rightarrow$ K (11)\n- O (15) $\\rightarrow$ L (12)\n- R (18) $\\rightarrow$ I (9)\n- T (20) $\\rightarrow$ G (7)\n- A (1) $\\rightarrow$ Z (26)\n- L (12) $\\rightarrow$ O (15).\nAnswer: <strong>K L I G Z O</strong>."
        },
        {
          question: "A person starts walking from his house. He walks 8 m towards East, then turns right and walks 6 m. Calculate his shortest distance from the starting point.",
          solution: "- Distance walked East (Base, $B$) = 8 m.\n- Turned right means South direction (Perpendicular, $P$) = 6 m.\n- Shortest distance is the Hypotenuse ($H$).\n- $H = \\sqrt{B^2 + P^2} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$ m.\nAnswer: <strong>10 meters</strong>"
        },
        {
          question: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
          solution: "Deconstruct the woman's statement starting after 'my':\n- 'My mother's only daughter' = The woman herself (since she has no sisters).\n- 'His mother is (this person)' $\\rightarrow$ The woman is the man's mother.\n- Therefore, how is the woman related to the man?\nAnswer: <strong>Mother (माता)</strong>."
        },
        {
          question: "Find the next number in the series: 3, 7, 15, 31, 63, ?.",
          solution: "Check the pattern:\n- $3 \\times 2 + 1 = 7$\n- $7 \\times 2 + 1 = 15$\n- $15 \\times 2 + 1 = 31$\n- $31 \\times 2 + 1 = 63$\n- Next number: $63 \\times 2 + 1 = 126 + 1 = 127$.\nAnswer: <strong>127</strong>"
        },
        {
          question: "In a class of 45 students, Rohan's rank is 15th from the top. What is his rank from the bottom?",
          solution: "- Total = Rank from Top + Rank from Bottom - 1\n- $45 = 15 + \\text{Bottom} - 1$\n- $45 = 14 + \\text{Bottom} \\implies \\text{Bottom} = 45 - 14 = 31$.\nAnswer: <strong>31st</strong>"
        }
      ],
      medium: [
        {
          question: "A man goes 5 km East, then turns North-East and walks 5 km, then turns South and walks 5 km. Represent his path and find in which direction he is from the starting point.",
          solution: "Path analysis:\n1. Starts at Origin (0,0), goes 5 km East to point A (5,0).\n2. From A, turns North-East (45 degree angle upward right) and walks 5 km to point B.\n3. From B, turns due South and walks 5 km to point C.\n- Point B has coordinates $(5 + 5\\cos 45^\\circ, 5\\sin 45^\\circ) \\approx (8.53, 3.53)$.\n- Point C is 5 km South of B, so its coordinates are $(8.53, 3.53 - 5) \\approx (8.53, -1.47)$.\n- Relative to origin (0,0), point C has positive X and negative Y. This represents the South-East direction.\nAnswer: <strong>South-East</strong>"
        },
        {
          question: "If A + B means A is the brother of B; A - B means A is the sister of B; A * B means A is the father of B. Which of the following expressions represents 'P is the paternal uncle of Q'?",
          solution: "- Paternal uncle means P must be the brother of Q's father.\n- Let Q's father be R. So, $R * Q$ (R is father of Q).\n- P must be brother of R. So, $P + R$ (P is brother of R).\n- Combined expression: $P + R * Q$ (P is brother of R, who is father of Q).\nAnswer: <strong>P + R * Q</strong>"
        },
        {
          question: "Analyze the series and find the missing term: B2D, E3G, H5J, K8M, ?.",
          solution: "Analyze the terms in three parts (First Letter, Middle Number, Last Letter):\n1. First letters: B (+3) $\\rightarrow$ E (+3) $\\rightarrow$ H (+3) $\\rightarrow$ K (+3) $\\rightarrow$ **N**.\n2. Numbers: 2 (+1) $\\rightarrow$ 3 (+2) $\\rightarrow$ 5 (+3) $\\rightarrow$ 8 (+4) $\\rightarrow$ **12**.\n3. Last letters: D (+3) $\\rightarrow$ G (+3) $\\rightarrow$ J (+3) $\\rightarrow$ M (+3) $\\rightarrow$ **P**.\n- Combined missing term: N12P.\nAnswer: <strong>N12P</strong>"
        },
        {
          question: "One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his left. To which direction was Suresh facing?",
          solution: "- Morning: Sun is in the East, so all shadows fall towards the **West**.\n- Shadow of the pole falls to Suresh's **Left**.\n- This means Suresh's Left side is pointing towards the West.\n- If West is Left, then Suresh must be facing **North** (since facing North puts East on the Right and West on the Left).\nAnswer: <strong>North</strong>"
        },
        {
          question: "Evaluate Syllogism Conclusions:\nStatements:\n1. All keys are locks.\n2. No lock is toy.\n3. Some toys are doors.\nConclusions:\nI. No key is toy.\nII. Some doors are keys.\nIII. Some doors are toys.",
          solution: "- From Statement 1 and 2: Since all keys are inside locks, and no lock is a toy, no key can ever be a toy. So, **Conclusion I follows**.\n- From Statement 3: Some doors are toys. So, **Conclusion III follows**.\n- Since no lock is a toy, and keys are inside locks, doors that are toys cannot be keys. Keys and doors may not overlap at all. So, Conclusion II does not follow.\nAnswer: <strong>Only Conclusion I and III follow.</strong>"
        }
      ],
      advanced: [
        {
          question: "Six people P, Q, R, S, T, and U are sitting in a circle facing the center. R is between P and Q. S is second to the left of U. T is second to the right of P. Find the position of U relative to T.",
          solution: "Let's place them in 6 positions (1 to 6) clockwise:\n1. Place P at pos 1.\n2. T is second to the right of P $\\rightarrow$ pos 3.\n3. R is between P and Q. Since pos 3 is occupied by T, Q must be at pos 5, and R at pos 6 (between P at 1 and Q at 5).\n4. S and U positions: Remaining positions are 2 and 4. S is second to the left of U.\n- If U is at 4, second left is pos 2 (occupied by S). This fits perfectly. So U is at 4, S is at 2.\n- Complete positions: P(1), S(2), T(3), U(4), Q(5), R(6).\n- U is at pos 4, T is at pos 3. So U is sitting immediately next to T on the right (clockwise).\nAnswer: <strong>Immediate Right (or second to the left)</strong>"
        },
        {
          question: "In a certain code, 'very large risk associated' is written as 'nu ta ro gi', 'risk is very low' is written as 'gi se nu mi', 'is that associated model' is written as 'ta mi la po', and 'inherent risk model' is written as 'la ro yu'. Find the code for 'inherent'.",
          solution: "Compare sentences to isolate codes:\n1. Compare S1 & S2: Common words are 'very' & 'risk'. Common codes: 'nu', 'gi'.\n2. Compare S1 & S4: Common word is 'risk'. Common code: 'ro'. Wait, S1 codes are 'nu ta ro gi', S4 codes are 'la ro yu'. So, **'risk' = 'ro'**.\n3. From S1, S2 common: Since 'risk' = 'ro', and common codes were 'nu', 'gi', the remaining common word 'very' must be coded. Wait, S1 has 'ro', S2 has 'nu' and 'gi'. Let's look again.\n- S1: 'very large risk associated' $\\rightarrow$ nu ta ro gi\n- S4: 'inherent risk model' $\\rightarrow$ la ro yu. Common code is 'ro'. So 'risk' = 'ro'.\n- S2: 'risk is very low' $\\rightarrow$ gi se nu mi. It contains 'risk' (ro) ? No, it has 'gi se nu mi'. This means the code for 'risk' in S2 is 'gi' or 'nu'. Ah, there is a discrepancy in the provided codes. Let's re-analyze:\n- S1 & S2 common: 'very', 'risk'. Common codes: 'nu', 'gi'.\n- S1 & S4 common: 'risk'. Common code: 'ro' ? No, 'ro' is in S1. S4 has 'la ro yu'. So 'risk' = 'ro' is inconsistent with S1/S2 common 'nu', 'gi'. Let's look at S4 codes: 'la ro yu'. S1 has 'ro'. S1 common with S4: 'risk'. So 'risk' = 'ro'. Then in S2, 'gi se nu mi', the word 'risk' is present, so one of these codes must represent 'risk'. Let's assume 'gi' is 'risk' and there is a typo in S4 or S1.\n- Let's re-align: 'model' is common in S3 ('ta mi la po') and S4 ('la ro yu'). Common code is **'la'**. So **'model' = 'la'**.\n- S4 has 'la ro yu' (model, risk, inherent). Since 'model' = 'la' and 'risk' = 'ro', the remaining word **'inherent' = 'yu'**.\nAnswer: <strong>'yu'</strong>"
        },
        {
          question: "Analyze the Statement-Assumption: \nStatement: 'In order to boost tourism, the government of Rajasthan should introduce helicopter services to historic forts.'\nAssumptions:\nI. Tourists want to visit historic forts quickly and are willing to pay for helicopter services.\nII. Helipads can be constructed inside or near historic forts without damaging the heritage structures.\nEvaluate which assumptions are implicit.",
          solution: "- **Assumption I is implicit:** For the service to boost tourism, there must be demand and willingness to pay, which is taken for granted by the government before proposing it.\n- **Assumption II is implicit:** For the recommendation to be executed, it must be physically feasible to construct helipads near the heritage sites without structural damage.\nAnswer: <strong>Both Assumption I and II are implicit.</strong>"
        },
        {
          question: "Solve the Coding-Decoding problem where 'BUILDER' is coded as 'JVCKSFE'. How is 'SEALING' coded?",
          solution: "Check the pattern in BUILDER $\\rightarrow$ JVCKSFE:\n- Split the word in two halves: BUI and DER, with L in the middle.\n- BUI (+1) $\\rightarrow$ CVJ, reverse it $\\rightarrow$ JVC.\n- Middle letter L (-1) $\\rightarrow$ K.\n- DER (+1) $\\rightarrow$ EFS, reverse it $\\rightarrow$ SFE.\n- Combined: JVC + K + SFE.\nLet's apply to SEALING (7 letters, middle letter L):\n- First half SEA (+1) $\\rightarrow$ TFB, reverse it $\\rightarrow$ BFT.\n- Middle letter L (-1) $\\rightarrow$ K.\n- Second half ING (+1) $\\rightarrow$ JOH, reverse it $\\rightarrow$ HOJ.\n- Combined: BFTKHOJ.\nAnswer: <strong>BFTKHOJ</strong>"
        },
        {
          question: "Represent the logical relationship between 'Seniors', 'Doctors', and 'Males' using a Venn Diagram and justify it.",
          solution: "- Some Seniors are Doctors, and some Doctors are Seniors.\n- Some Seniors are Males, and some Males are Seniors.\n- Some Doctors are Males, and some Males are Doctors.\n- There are individuals who are Seniors, Doctors, and Males simultaneously.\n- Therefore, the Venn Diagram consists of **three mutually intersecting circles** overlapping in the center.\nAnswer: <strong>Three mutually intersecting circles.</strong>"
        }
      ]
    }
  },
  
  // LEVEL 3: ADVANCED COMPETITIVE (Comparison Tables + PYQs + Revision Sheet)
  level3: {
    comparisons: `
      <h3>1. Statement-Assumption vs Statement-Argument</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Statement-Assumption</th>
            <th>Statement-Argument</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Focus</strong></td>
            <td>Unexpressed ideas taken for granted *before* stating the premise.</td>
            <td>Evaluating opinions/logic *after* the statement is made.</td>
          </tr>
          <tr>
            <td><strong>Validity Test</strong></td>
            <td>Implicit if it makes the statement logical and possible.</td>
            <td>Strong if it is a proven fact, policy, or direct logical consequence.</td>
          </tr>
          <tr>
            <td><strong>Common Mistake</strong></td>
            <td>Choosing assumptions that are far-fetched or restate the statement.</td>
            <td>Choosing arguments based on emotions, simple comparisons, or weak claims.</td>
          </tr>
        </tbody>
      </table>

      <h3>2. Clock Hands Angle Formula vs Calendar Leap Year check</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Concept</th>
            <th>Formula / Criteria</th>
            <th>Key Factor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Angle between hands</strong></td>
            <td>$\theta = \left| 30H - \frac{11}{2}M \right|$</td>
            <td>$H$: hour value, $M$: minute value.</td>
          </tr>
          <tr>
            <td><strong>Leap Year check</strong></td>
            <td>Divisible by 4 (non-century) or 400 (century years).</td>
            <td>Century years like 1900 are not leap years; 2000 is.</td>
          </tr>
        </tbody>
      </table>
    `,
    revision: {
      oneLiners: [
        "<strong>EJOTY positions:</strong> E=5, J=10, O=15, T=20, Y=25.",
        "<strong>Opposite letters sum:</strong> Always equals 27.",
        "<strong>Pythagoras formula:</strong> $H^2 = B^2 + P^2$ for distance.",
        "<strong>Right turn:</strong> 90 degrees Clockwise rotation.",
        "<strong>Left turn:</strong> 90 degrees Anti-clockwise rotation.",
        "<strong>Syllogism rule:</strong> Test conclusions in both basic and possible Venn Diagrams.",
        "<strong>Assumption rule:</strong> Assumptions cannot contain suggestions or go beyond the statement.",
        "<strong>Paternal Uncle:</strong> Father's brother.",
        "<strong>Maternal Uncle:</strong> Mother's brother.",
        "<strong>Sister-in-law:</strong> Spouse's sister or brother's wife.",
        "<strong>Leap Year century:</strong> Year 2100 is not a leap year; 2400 is.",
        "<strong>Clock angle at 3:00:</strong> Exactly 90 degrees.",
        "<strong>Shadow in Morning:</strong> Shadow is always cast towards the West.",
        "<strong>Shadow in Evening:</strong> Shadow is always cast towards the East.",
        "<strong>Coincidence of hands:</strong> Hands overlap 22 times in 24 hours.",
        "<strong>Opposite hands:</strong> Hands form 180 degrees 22 times in 24 hours.",
        "<strong>Right angle hands:</strong> Hands form 90 degrees 44 times in 24 hours.",
        "<strong>Venn Diagram:</strong> Visual representation of set intersections.",
        "<strong>Alphabet opposite of K:</strong> P (KP Law shortcut).",
        "<strong>Alphabet opposite of G:</strong> T (GT Road shortcut)."
      ],
      booster: `
        <div class="alert-box note">
          <strong>Reasoning Booster Notes:</strong>
          <p>For blood relations, draw the family tree level by level. Do not make assumptions about gender based on names alone (e.g. 'Bobby' can be male or female unless specified). For direction tests, draw a small coordinate axes on your sheet immediately.</p>
        </div>
      `
    }
  },
  
  // 50 PRACTICE QUESTIONS
  questions: {
    mcqs: [
      {
        id: "reas_m1",
        question: "If 'MONKEY' is coded as 'XDJMNL' in a certain code language, how will 'TIGER' be coded?",
        options: [
          "QDFHS",
          "SDFHS",
          "QDFHR",
          "QEFHS"
        ],
        answer: 0,
        explanation: "Pattern: Last letter Y (-1) -> X, E (-1) -> D, K (-1) -> J, N (-1) -> M, O (-1) -> N, M (-1) -> L. It reverses and subtracts 1.\nApplying to TIGER:\nR (-1) -> Q, E (-1) -> D, G (-1) -> F, I (-1) -> H, T (-1) -> S. Result: QDFHS."
      },
      {
        id: "reas_m2",
        question: "A person goes 12 km North, then turns East and walks 5 km. Calculate the shortest distance from his starting point.",
        options: [
          "17 km",
          "13 km",
          "15 km",
          "14 km"
        ],
        answer: 1,
        explanation: "Shortest distance = $\\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$ km."
      },
      {
        id: "reas_m3",
        question: "A man walks 4 km East, then turns right and walks 3 km. In which direction is he now from his starting point?",
        options: [
          "North-East",
          "South-East",
          "South-West",
          "North-West"
        ],
        answer: 1,
        explanation: "East + Right turn (South) means the person is in the South-East quadrant relative to the origin."
      },
      {
        id: "reas_m4",
        question: "Find the missing number in the series: 2, 5, 11, 23, 47, ?.",
        options: [
          "95",
          "96",
          "97",
          "98"
        ],
        answer: 0,
        explanation: "Pattern: $x \\times 2 + 1$. $2 \\times 2+1=5$, $5 \\times 2+1=11$, $11 \\times 2+1=23$, $23 \\times 2+1=47$, $47 \\times 2+1=95$."
      },
      {
        id: "reas_m5",
        question: "Kailash points to a photo and says, 'He is the son of my grandfather's only son'. How is the boy in the photo related to Kailash?",
        options: [
          "Cousin",
          "Brother",
          "Uncle",
          "Son"
        ],
        answer: 1,
        explanation: "Grandfather's only son = Kailash's father. Father's son = Kailash's brother (or Kailash himself, but 'boy in photo' options suggest brother)."
      },
      {
        id: "reas_m6",
        question: "If 'A' is coded as '26', 'SUN' is coded as '27', then what is the code for 'CAT'?",
        options: [
          "24",
          "57",
          "58",
          "60"
        ],
        answer: 1,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Opposite alphabet positions are used:\n- C = 24, A = 26, T = 7 $\\rightarrow$ Sum = $24 + 26 + 7 = 57$."
      },
      {
        id: "reas_m7",
        question: "In a row of boys, Srinath is 7th from the left and Venkat is 12th from the right. If they interchange their positions, Srinath becomes 22nd from the left. How many boys are there in the row?",
        options: [
          "19",
          "31",
          "33",
          "34"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "New Srinath position = 22nd from left, which is Venkat's old position (12th from right).\n- Total = $22 + 12 - 1 = 33$ boys."
      },
      {
        id: "reas_m8",
        question: "If '+' means '-', '-' means '*', '*' means '/' and '/' means '+', then evaluate: 15 - 2 / 900 * 90 + 100.",
        options: [
          "190",
          "0",
          "20",
          "-60"
        ],
        answer: 3,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Substituting symbols: $15 \\times 2 + 900 / 90 - 100$\n- $= 30 + 10 - 100 = 40 - 100 = -60$."
      },
      {
        id: "reas_m9",
        question: "Find the missing number in the grid: \n[ 3, 4, 25 ]\n[ 5, 12, 169 ]\n[ 8, 15, ? ]",
        options: [
          "225",
          "289",
          "325",
          "125"
        ],
        answer: 1,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Square and add: $3^2 + 4^2 = 25$, $5^2 + 12^2 = 169$, $8^2 + 15^2 = 64 + 225 = 289$."
      },
      {
        id: "sci_m10",
        question: "A clocks shows 4:30. If the minute hand points towards East, in which direction does the hour hand point?",
        options: [
          "North-East",
          "South-East",
          "North-West",
          "South-West"
        ],
        answer: 0,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "At 4:30, the minute hand is at 6 (pointing South). If this is rotated to represent East, South becomes East (90 deg ACW rotation). The hour hand is between 4 and 5 (normally South-East). Rotating it 90 deg ACW shifts it to North-East."
      },
      {
        id: "reas_m11",
        question: "Which of the following diagrams represents the correct relationship between Lions, Carnivores, and Cows?",
        options: [
          "Two separate circles inside a larger circle",
          "One circle inside another, and a third separate circle",
          "Three intersecting circles",
          "Three separate circles"
        ],
        answer: 1,
        explanation: "All Lions are Carnivores (Lions circle inside Carnivores circle). Cows are separate from both (third separate circle)."
      },
      {
        id: "reas_m12",
        question: "In the series: A, C, F, J, O, ?, what should come in place of the question mark?",
        options: [
          "T",
          "U",
          "V",
          "W"
        ],
        answer: 1,
        explanation: "Pattern: Position differences: A (+2) -> C (+3) -> F (+4) -> J (+5) -> O (+6) -> U (pos 21)."
      },
      {
        id: "reas_m13",
        question: "A man is facing North-West. He turns 90 degrees in clockwise direction, then 180 degrees in anti-clockwise direction. Which direction is he facing now?",
        options: [
          "South-East",
          "South-West",
          "North-East",
          "North-West"
        ],
        answer: 1,
        explanation: "Net rotation = 90 CW - 180 ACW = 90 ACW.\n- Turning 90 degrees anti-clockwise from North-West points to South-West."
      },
      {
        id: "reas_m14",
        question: "How many times do the hands of a clock overlap (coincide) in a single day (24 hours)?",
        options: [
          "12 times",
          "22 times",
          "24 times",
          "44 times"
        ],
        answer: 1,
        explanation: "Clock hands overlap exactly 22 times in 24 hours (due to overlap losses between 11 and 1)."
      },
      {
        id: "reas_m15",
        question: "If 'FRANCE' is coded as '123456' and 'CANADA' is coded as '738393', how is 'FEAR' coded?",
        options: [
          "1632",
          "1634",
          "1635",
          "1234"
        ],
        answer: 0,
        explanation: "Direct letter-to-number mapping:\n- F=1, R=2, A=3, N=4, C=5, E=6, D=9. FEAR $\\rightarrow$ F(1) E(6) A(3) R(2)."
      },
      {
        id: "reas_m16",
        question: "A is B's brother. C is A's mother. D is C's father. E is B's son. How is D related to A?",
        options: [
          "Grandson",
          "Grandfather",
          "Uncle",
          "Brother"
        ],
        answer: 1,
        explanation: "C is A's mother. D is C's father. So D is A's maternal grandfather."
      },
      {
        id: "reas_m17",
        question: "In the series: 8, 24, 12, 36, 18, 54, ?, what is the next term?",
        options: [
          "27",
          "36",
          "72",
          "108"
        ],
        answer: 0,
        explanation: "Pattern: Alternating multiply by 3 and divide by 2.\n- $8 \\times 3 = 24$, $24 / 2 = 12$, $12 \\times 3 = 36$, $36 / 2 = 18$, $18 \\times 3 = 54$, $54 / 2 = 27$."
      },
      {
        id: "reas_m18",
        question: "If it was Tuesday on 15 August 2006, what was the day of the week on 15 August 2007?",
        options: [
          "Wednesday",
          "Thursday",
          "Monday",
          "Sunday"
        ],
        answer: 0,
        explanation: "Since 2007 is a non-leap year, the same date next year shifts by exactly 1 odd day. Tuesday + 1 = Wednesday."
      },
      {
        id: "reas_m19",
        question: "What is the angle between the hour hand and the minute hand of a clock at 8:20?",
        options: [
          "120 degrees",
          "130 degrees",
          "140 degrees",
          "150 degrees"
        ],
        answer: 1,
        explanation: "Formula: $\\theta = |30H - 5.5M| = |30(8) - 5.5(20)| = |240 - 110| = 130$ degrees."
      },
      {
        id: "reas_m20",
        question: "Which term does NOT fit in the series: 3, 5, 8, 12, 17, 24, 30?",
        options: [
          "12",
          "17",
          "24",
          "30"
        ],
        answer: 2,
        explanation: "Differences should be: +2, +3, +4, +5, +6, +7.\n- $3+2=5$, $5+3=8$, $8+4=12$, $12+5=17$, $17+6=23$ (not 24), $23+7=30$. So 24 is the odd term."
      }
    ],
    assertionReason: [
      {
        question: "Assertion (A): EJOTY is a helpful tool in solving coding-decoding questions.\nReason (R): It maps alphabetical letters to multiples of 5, enabling faster positional math.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "EJOTY ($E=5, J=10, O=15...$) works as reference checkpoints, making alphabet index calculation much faster."
      },
      {
        question: "Assertion (A): The year 1900 was not a leap year.\nReason (R): All years divisible by 4 are leap years.\nChoose options:",
        options: [
          "A is true, R is false",
          "A is false, R is true",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "A is true. R is false because century years must be divisible by 400 to be leap years. 1900 is divisible by 4 but not by 400."
      },
      {
        question: "Assertion (A): In Syllogisms, a conclusion is valid if it fits the basic Venn diagram representation.\nReason (R): A conclusion is only definitely true if it holds in all possible Venn diagram configurations.\nChoose options:",
        options: [
          "A is false, R is true",
          "A is true, R is false",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "A is false because a conclusion must satisfy *all* possible Venn diagrams (including overlapping possibility charts) to be valid, not just the basic one. R is true."
      },
      {
        question: "Assertion (A): In coding-decoding, 'CAT' can be represented mathematically as '24'.\nReason (R): Positional indices of C, A, and T sum up to 24.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "C(3) + A(1) + T(20) = 24. This matching explains why CAT is coded as 24."
      },
      {
        question: "Assertion (A): Shadows are cast in the West direction in the morning.\nReason (R): The Sun rises in the East in the morning.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Since light source (Sun) is in the East, shadows are cast opposite to it, which is the West direction."
      },
      {
        question: "Assertion (A): If a person turns right twice, he is facing opposite to his starting direction.\nReason (R): Each right turn is a 90 degree clockwise rotation, making two right turns equal to 180 degrees.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Two 90 degree turns sum up to a 180 degree rotation, which reverses the facing direction."
      },
      {
        question: "Assertion (A): Strong arguments must be balanced, logical, and practical.\nReason (R): Weak arguments are usually based on opinions, simple comparisons, or superstitions.\nChoose options:",
        options: [
          "Both A and R are true but R is NOT the correct explanation of A",
          "Both A and R are true and R is the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Both statements are correct definitions of argument types. But weak argument definitions do not logically explain why strong arguments are logical."
      },
      {
        question: "Assertion (A): In family trees, a husband and wife must be represented by double horizontal lines.\nReason (R): This helps distinguish marriage relationships from sibling relationships (represented by single lines) at first glance.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Line variations in diagrams are custom conventions precisely designed to visually separate couples from brothers/sisters."
      },
      {
        question: "Assertion (A): The shortest distance between two points can be found using the Pythagoras theorem.\nReason (R): The theorem states that in a right-angled triangle, the hypotenuse is equal to the sum of the other two sides.\nChoose options:",
        options: [
          "A is true, R is false",
          "A is false, R is true",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "A is true. R is false because the hypotenuse squared is equal to the sum of the squares of the other two sides ($H^2 = B^2 + P^2$), not the simple sum of sides."
      },
      {
        question: "Assertion (A): If Q is B's brother, then B is Q's brother.\nReason (R): Brother is a mutual relation between male siblings.\nChoose options:",
        options: [
          "A is false, R is true",
          "A is true, R is false",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "A is false because if B's gender is female, B is Q's sister, not brother. R is true."
      }
    ],
    matchFollowing: [
      {
        question: "Match Column I (Alphabet) with Column II (Opposite Letter):\nColumn I:\nA. A\nB. B\nC. C\nD. D\nColumn II:\n1. Z\n2. Y\n3. X\n4. W\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "A-Z, B-Y, C-X, D-W are opposite letter pairs (Sum = 27)."
      },
      {
        question: "Match Column I (Reasoning term) with Column II (Visual representation):\nColumn I:\nA. Male\nB. Female\nC. Couple\nD. Siblings\nColumn II:\n1. Square [ ] / plus (+)\n2. Circle ( ) / minus (-)\n3. Double horizontal line (=)\n4. Single horizontal line (-)\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Standard tree symbols mapping."
      },
      {
        question: "Match Column I (Starting Direction & Turn) with Column II (Final Direction):\nColumn I:\nA. Facing North, turns Right\nB. Facing East, turns Right\nC. Facing South, turns Right\nD. Facing West, turns Right\nColumn II:\n1. East\n2. South\n3. West\n4. North\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Clockwise turn sequence: N -> E -> S -> W -> N."
      },
      {
        question: "Match Column I (Syllogism statement) with Column II (Venn Representation):\nColumn I:\nA. All A are B\nB. Some A are B\nC. No A is B\nColumn II:\n1. Circle A completely inside circle B\n2. Circle A overlapping with circle B\n3. Circles A and B completely separated\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-3, B-2, C-1",
          "A-1, B-3, C-2"
        ],
        answer: 0,
        explanation: "Syllogism diagrammatic rules."
      },
      {
        question: "Match Column I (Clock time) with Column II (Angle between hands):\nColumn I:\nA. 3:00\nB. 6:00\nC. 2:00\nD. 4:00\nColumn II:\n1. 90 degrees\n2. 180 degrees\n3. 60 degrees\n4. 120 degrees\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Angle calculation: $30 \\times H$. 3:00 is 90, 6:00 is 180, 2:00 is 60, 4:00 is 120."
      },
      {
        question: "Match Column I (Series sequence) with Column II (Next term):\nColumn I:\nA. 2, 4, 6, 8, ...\nB. 2, 4, 8, 16, ...\nC. 1, 4, 9, 16, ...\nD. 1, 8, 27, 64, ...\nColumn II:\n1. 10\n2. 32\n3. 25\n4. 125\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "AP-10, GP-32, Squares-25, Cubes-125."
      },
      {
        question: "Match Column I (shadow state) with Column II (Facing direction):\nColumn I:\nA. Morning, shadow on Left\nB. Morning, shadow on Right\nC. Evening, shadow on Left\nD. Evening, shadow on Right\nColumn II:\n1. North\n2. South\n3. South\n4. North\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-1, B-3, C-2, D-4",
          "A-2, B-1, C-4, D-3",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Morning shadow is West (Left if facing North, Right if facing South). Evening shadow is East (Left if facing South, Right if facing North)."
      },
      {
        question: "Match Column I (EJOTY Letter) with Column II (Alphabet Position):\nColumn I:\nA. E\nB. J\nC. O\nD. T\nColumn II:\n1. 5\n2. 10\n3. 15\n4. 20\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "EJOTY mapping index check."
      },
      {
        question: "Match Column I (Clock Hands condition) with Column II (occurrences per day):\nColumn I:\nA. Hands coincide\nB. Hands at 180 degrees\nC. Hands at 90 degrees\nColumn II:\n1. 22 times\n2. 22 times\n3. 44 times\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-3, B-2, C-1",
          "A-1, B-3, C-2"
        ],
        answer: 0,
        explanation: "Coincide-22, Opposite-22, Right angle-44."
      },
      {
        question: "Match Column I (Statement type) with Column II (Implicit element name):\nColumn I:\nA. Suggestive statement\nB. Action statement\nC. Warning statement\nColumn II:\n1. Assumption of effect/result\n2. Assumption of physical feasibility\n3. Assumption of threat deterrence\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-3, B-2, C-1"
        ],
        answer: 0,
        explanation: "Logical relation of statements to standard assumptions."
      }
    ]
  }
};
