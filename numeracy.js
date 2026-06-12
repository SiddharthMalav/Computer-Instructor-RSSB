window.studyContent = window.studyContent || {};

window.studyContent.numeracy = {
  title: "Basic Numeracy (बुनियादी संख्यात्मकता)",
  desc: "Class X level Quantitative Aptitude guide on Number System, LCM/HCF, Ratio/Proportion, Percentages, Profit & Loss, SI & CI, and Time & Work.",
  
  // LEVEL 1: FOUNDATION (Intro + Detailed Theory)
  level1: {
    intro: `
      <div class="alert-box info">
        <strong>Paper-I Syllabus Scope:</strong>
        <p>Class X level mathematical topics: Number system classification, divisibility rules, LCM/HCF relations, ratios & proportions, percentage conversions, profit-loss-discount, simple & compound interest equations, averages, and time-work-speed calculations ko target karta hai.</p>
      </div>
    `,
    theory: `
      <h2>1. Number System & Divisibility</h2>
      <ul class="notes-list">
        <li><strong>Numbers Classification:</strong> Natural ($1,2,3...$), Whole ($0,1,2...$), Integers ($...,-2,-1,0,1,2...$), Rational ($p/q$ form, $q \\neq 0$), Irrational ($\sqrt{2}, \pi, e$).
          <br>- **Prime Numbers:** Numbers divisible only by 1 and themselves. $2$ is the only even prime. There are **25 prime numbers** between 1 and 100.
        </li>
        <li><strong>Divisibility Rules:</strong>
          <br>- *Divisibility by 3:* Sum of digits is divisible by 3.
          <br>- *Divisibility by 4:* Last two digits are divisible by 4.
          <br>- *Divisibility by 8:* Last three digits are divisible by 8.
          <br>- *Divisibility by 9:* Sum of digits is divisible by 9.
          <br>- *Divisibility by 11:* Difference between sum of odd-position digits and even-position digits is either 0 or a multiple of 11.
        </li>
      </ul>

      <h2>2. LCM & HCF</h2>
      <ul class="notes-list">
        <li><strong>Basic Property:</strong> For two numbers $A$ and $B$, $\text{HCF}(A, B) \times \text{LCM}(A, B) = A \times B$.</li>
        <li><strong>Fractions LCM/HCF:</strong>
          <br>- $\text{LCM of Fractions} = \frac{\text{LCM of Numerators}}{\text{HCF of Denominators}}$
          <br>- $\text{HCF of Fractions} = \frac{\text{HCF of Numerators}}{\text{LCM of Denominators}}$
        </li>
      </ul>

      <h2>3. Ratio, Proportion & Averages</h2>
      <ul class="notes-list">
        <li><strong>Proportion:</strong> If $a:b = c:d$, then $a \times d = b \times c$.
          <br>- *Mean Proportional of a and b:* $\sqrt{ab}$.
          <br>- *Third Proportional of a and b:* $\frac{b^2}{a}$.
        </li>
        <li><strong>Average:</strong> $\text{Average} = \frac{\text{Sum of all Observations}}{\text{Total Number of Observations}}$.
          <br>- Average of first $n$ natural numbers: $\frac{n+1}{2}$.
          <br>- Average of first $n$ odd numbers: $n$.
          <br>- Average of first $n$ even numbers: $n+1$.
        </li>
      </ul>

      <h2>4. Percentages, Profit & Loss</h2>
      <ul class="notes-list">
        <li><strong>Percentage changes:</strong> If price increases by $R\%$, consumption must decrease by $\left(\frac{R}{100+R} \times 100\right)\%$ to keep expenditure same.</li>
        <li><strong>Profit & Loss:</strong> Cost Price (CP), Selling Price (SP).
          <br>- Profit = $SP - CP$ (when $SP > CP$). Profit $\% = \frac{\text{Profit}}{CP} \times 100$.
          <br>- Loss = $CP - SP$ (when $CP > SP$). Loss $\% = \frac{\text{Loss}}{CP} \times 100$.
          <br>- Marked Price (MP), Discount is always calculated on MP: $SP = MP - \text{Discount}$.
        </li>
      </ul>

      <h2>5. Simple & Compound Interest</h2>
      <ul class="notes-list">
        <li><strong>Simple Interest (SI):</strong> Interest is calculated only on the initial principal. $SI = \frac{P \times R \times T}{100}$.</li>
        <li><strong>Compound Interest (CI):</strong> Interest is compounded, meaning interest earns interest. $Amount (A) = P \left(1 + \frac{R}{100}\right)^T$. $CI = A - P$.
          <br>- Difference between CI and SI for 2 years: $Diff = P \left(\frac{R}{100}\right)^2$.
        </li>
      </ul>

      <h2>6. Time, Work & Speed</h2>
      <ul class="notes-list">
        <li><strong>Time & Work:</strong> If A can do a work in $x$ days and B in $y$ days, together they do it in $\frac{xy}{x+y}$ days.
          <br>- Work Rate $\times$ Time = Total Work. Work is inversely proportional to time.
        </li>
        <li><strong>Speed, Distance & Time:</strong> $\text{Distance} = \text{Speed} \times \text{Time}$.
          <br>- Conversion: $1 \text{ km/h} = \frac{5}{18} \text{ m/s}$; $1 \text{ m/s} = \frac{18}{5} \text{ km/h}$.
          <br>- Average Speed (same distance covered at speed $x$ and $y$): $\frac{2xy}{x+y}$.
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
            <th>Topic</th>
            <th>Formula / Equation</th>
            <th>Variable Definitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>CI Amount</strong></td>
            <td>$A = P \left(1 + \frac{R}{100}\right)^T$</td>
            <td>$P$: Principal, $R$: Rate%, $T$: Time years.</td>
          </tr>
          <tr>
            <td><strong>CI-SI (2 Years)</strong></td>
            <td>$Diff = P \left(\frac{R}{100}\right)^2$</td>
            <td>Difference between CI and SI for 2 years.</td>
          </tr>
          <tr>
            <td><strong>Average Speed</strong></td>
            <td>$V_{avg} = \frac{2xy}{x+y}$</td>
            <td>$x$: speed 1, $y$: speed 2 over same distance.</td>
          </tr>
          <tr>
            <td><strong>Time & Work</strong></td>
            <td>$M_1 D_1 H_1 / W_1 = M_2 D_2 H_2 / W_2$</td>
            <td>$M$: men, $D$: days, $H$: hours, $W$: work done.</td>
          </tr>
          <tr>
            <td><strong>Equivalent Discount</strong></td>
            <td>$Net = x + y - \frac{xy}{100}$</td>
            <td>Net discount for two successive discounts of $x\%$ and $y\%$.</td>
          </tr>
        </tbody>
      </table>
    `,
    shortcuts: `
      <ul class="notes-list">
        <li><strong>Trick for Fraction Conversion:</strong> Memorize basic percentages: $\frac{1}{2} = 50\%$, $\frac{1}{3} = 33.33\%$, $\frac{1}{4} = 25\%$, $\frac{1}{5} = 20\%$, $\frac{1}{6} = 16.67\%$, $\frac{1}{8} = 12.5\%$.</li>
        <li><strong>Trick for CI Calculation:</strong> For 2 years at $R\%$, effective interest rate is $2R + \frac{R^2}{100}\%$. E.g., for $10\%$ rate, effective rate is $20 + 1 = 21\%$.</li>
        <li><strong>Trick for Speed Math (km/h to m/s):</strong> Larger unit (km/h) to smaller unit (m/s) $\rightarrow$ multiply by smaller fraction $\frac{5}{18}$. Smaller (m/s) to larger (km/h) $\rightarrow$ multiply by larger fraction $\frac{18}{5}$.</li>
      </ul>
    `,
    solved: {
      easy: [
        {
          question: "The HCF of two numbers is 11 and their LCM is 693. If one of the numbers is 77, find the other number.",
          solution: "Given: $\\text{HCF} = 11$, $\\text{LCM} = 693$, $\\text{Number 1} = 77$.\n- Using formula: $\\text{Number 1} \\times \\text{Number 2} = \\text{HCF} \\times \\text{LCM}$\n- $77 \\times \\text{Number 2} = 11 \\times 693 \\implies \\text{Number 2} = \\frac{11 \\times 693}{77} = \\frac{693}{7} = 99$.\nAnswer: <strong>99</strong>"
        },
        {
          question: "Convert a speed of 54 km/h into meters per second (m/s).",
          solution: "- To convert km/h to m/s, multiply by $\\frac{5}{18}$.\n- Speed in m/s = $54 \\times \\frac{5}{18} = 3 \\times 5 = 15$ m/s.\nAnswer: <strong>15 m/s</strong>"
        },
        {
          question: "Find the mean proportional between 4 and 9.",
          solution: "- Mean Proportional formula = $\\sqrt{a \\times b}$.\n- Mean Proportional = $\\sqrt{4 \\times 9} = \\sqrt{36} = 6$.\nAnswer: <strong>6</strong>"
        },
        {
          question: "A cricketer has an average of 40 runs in 10 innings. How many runs must he score in his 11th inning to increase his average to 42?",
          solution: "- Total runs in 10 innings = $40 \\times 10 = 400$.\n- Target average for 11 innings = 42.\n- Target total runs in 11 innings = $42 \\times 11 = 462$.\n- Runs required in 11th inning = $462 - 400 = 62$.\nAnswer: <strong>62</strong>"
        },
        {
          question: "A shopkeeper buys a book for Rs. 200 and sells it for Rs. 250. Calculate his profit percentage.",
          solution: "- Cost Price (CP) = Rs. 200, Selling Price (SP) = Rs. 250.\n- Profit = $SP - CP = 250 - 200 = 50$ Rs.\n- Profit Percentage = $\\frac{\\text{Profit}}{CP} \\times 100 = \\frac{50}{200} \\times 100 = 25\\%$.\nAnswer: <strong>25%</strong>"
        }
      ],
      medium: [
        {
          question: "If A's salary is 20% less than B's salary, by what percentage is B's salary more than A's salary?",
          solution: "- Let B's salary = Rs. 100.\n- A's salary is 20% less, so A = Rs. 80.\n- B's salary is more than A's by $100 - 80 = 20$ Rs.\n- Percentage more relative to A = $\\frac{\\text{Difference}}{\\text{A's Salary}} \\times 100 = \\frac{20}{80} \\times 100 = 25\\%$.\n- Shortcut Formula: $\\frac{R}{100-R} \\times 100 = \\frac{20}{80} \\times 100 = 25\\%$.\nAnswer: <strong>25%</strong>"
        },
        {
          question: "A sum of money doubles itself in 5 years at simple interest. In how many years will it become four times of itself at the same rate of interest?",
          solution: "- Let Principal = $P$. In 5 years, it becomes $2P$, so interest earned $SI = 2P - P = P$.\n- Rate $R = \\frac{SI \\times 100}{P \\times T} = \\frac{P \\times 100}{P \\times 5} = 20\\%$.\n- We want it to become 4 times, i.e., Amount = $4P$, so target interest $SI = 4P - P = 3P$.\n- Time $T = \\frac{SI \\times 100}{P \\times R} = \\frac{3P \\times 100}{P \\times 20} = 3 \\times 5 = 15$ years.\n- Shortcut: $\\frac{T_1}{T_2} = \\frac{N_1 - 1}{N_2 - 1} \\implies \\frac{5}{T_2} = \\frac{2-1}{4-1} = \\frac{1}{3} \\implies T_2 = 15$ years.\nAnswer: <strong>15 years</strong>"
        },
        {
          question: "A and B can do a piece of work in 10 days and 15 days respectively. They start working together. In how many days will the work be completed?",
          solution: "- A's one day work = $\\frac{1}{10}$, B's one day work = $\\frac{1}{15}$.\n- Combined one day work = $\\frac{1}{10} + \\frac{1}{15} = \\frac{3 + 2}{30} = \\frac{5}{30} = \\frac{1}{6}$.\n- Days required together = 6 days.\n- Shortcut: $\\frac{xy}{x+y} = \\frac{10 \\times 15}{10+15} = \\frac{150}{25} = 6$ days.\nAnswer: <strong>6 days</strong>"
        },
        {
          question: "A sum of Rs. 8,000 is invested at 10% per annum compound interest, compounded annually. Find the interest for 2 years.",
          solution: "- Amount formula: $A = P(1 + R/100)^T$.\n- $A = 8000 \\times (1 + 10/100)^2 = 8000 \\times (1.1)^2 = 8000 \\times 1.21 = 9680$ Rs.\n- Compound Interest ($CI$) = $A - P = 9680 - 8000 = 1680$ Rs.\n- Alternative (shortcut): Effective 2-year rate at 10% is $10 + 10 + \\frac{100}{100} = 21\\%$.\n- $CI = 21\\% \\text{ of } 8000 = 1680$ Rs.\nAnswer: <strong>Rs. 1,680</strong>"
        },
        {
          question: "The ratio of the ages of Father and Son is 7:3. If the sum of their ages is 60 years, find the age of the Father after 5 years.",
          solution: "- Let Father's age = $7x$, Son's age = $3x$.\n- $7x + 3x = 60 \\implies 10x = 60 \\implies x = 6$.\n- Father's current age = $7x = 7 \\times 6 = 42$ years.\n- Father's age after 5 years = $42 + 5 = 47$ years.\nAnswer: <strong>47 years</strong>"
        }
      ],
      advanced: [
        {
          question: "The difference between compound interest (compounded annually) and simple interest on a certain sum of money at 8% per annum for 2 years is Rs. 64. Find the principal sum.",
          solution: "- Difference formula for 2 years: $Diff = P \\left(\\frac{R}{100}\\right)^2$.\n- Given: $Diff = 64$, $R = 8$.\n- $64 = P \\left(\\frac{8}{100}\\right)^2 \\implies 64 = P \\times \\frac{64}{10000}$.\n- $P = \\frac{64 \\times 10000}{64} = 10000$ Rs.\nAnswer: <strong>Rs. 10,000</strong>"
        },
        {
          question: "A train 150 meters long passes a telegraph pole in 12 seconds and crosses a platform in 20 seconds. Calculate the length of the platform.",
          solution: "- Speed of the train = $\\frac{\\text{Length of train}}{\\text{Time to cross pole}} = \\frac{150}{12} = 12.5$ m/s.\n- When crossing a platform of length $L$, total distance covered is $(\\text{Length of train} + L)$.\n- Distance = Speed $\\times$ Time $\\implies 150 + L = 12.5 \\times 20$\n- $150 + L = 250 \\implies L = 250 - 150 = 100$ meters.\nAnswer: <strong>100 meters</strong>"
        },
        {
          question: "A can complete a work in 20 days, and B can do it in 30 days. They work together for 5 days, and then A leaves the work. In how many days will B complete the remaining work?",
          solution: "- Total work (LCM of 20 and 30) = 60 units.\n- A's efficiency = $\\frac{60}{20} = 3$ units/day.\n- B's efficiency = $\\frac{60}{30} = 2$ units/day.\n- Combined efficiency = $3 + 2 = 5$ units/day.\n- Work done in 5 days together = $5 \\times 5 = 25$ units.\n- Remaining work = $60 - 25 = 35$ units.\n- Time taken by B to complete remaining work = $\\frac{\\text{Remaining work}}{\\text{B's efficiency}} = \\frac{35}{2} = 17.5$ days.\nAnswer: <strong>17.5 days</strong>"
        },
        {
          question: "Find the least number which when divided by 12, 16, 18, and 21 leaves a remainder of 7 in each case.",
          solution: "- The required number is $\\text{LCM}(12, 16, 18, 21) + \\text{Remainder}$.\n- Find LCM of 12, 16, 18, 21:\n  - $12 = 2^2 \\times 3$\n  - $16 = 2^4$\n  - $18 = 2 \\times 3^2$\n  - $21 = 3 \\times 7$\n  - $\\text{LCM} = 2^4 \\times 3^2 \\times 7 = 16 \\times 9 \\times 7 = 144 \\times 7 = 1008$.\n- Required Number = $1008 + 7 = 1015$.\nAnswer: <strong>1015</strong>"
        },
        {
          question: "By selling an article for Rs. 720, a man loses 10%. At what price should he sell it to gain 20%?",
          solution: "- Loss is 10%, so Selling Price $SP_1 = 90\\%$ of Cost Price (CP).\n- $720 = 0.9 \\times CP \\implies CP = \\frac{720}{0.9} = 800$ Rs.\n- To gain 20%, target Selling Price $SP_2 = 120\\%$ of CP.\n- $SP_2 = 1.2 \\times 800 = 960$ Rs.\n- Shortcut: $SP_2 = SP_1 \\times \\frac{100 + \\text{Gain}\\%}{100 - \\text{Loss}\\%} = 720 \\times \\frac{120}{90} = 720 \\times \\frac{4}{3} = 960$ Rs.\nAnswer: <strong>Rs. 960</strong>"
        }
      ]
    }
  },
  
  // LEVEL 3: ADVANCED COMPETITIVE (Comparison Tables + PYQs + Revision Sheet)
  level3: {
    comparisons: `
      <h3>1. Simple Interest (SI) vs Compound Interest (CI)</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Simple Interest (SI)</th>
            <th>Compound Interest (CI)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Principal Base</strong></td>
            <td>Remains constant throughout the tenure.</td>
            <td>Changes every compounding period (Principal + Interest).</td>
          </tr>
          <tr>
            <td><strong>Growth Pattern</strong></td>
            <td>Linear, same interest added every year.</td>
            <td>Exponential, interest keeps increasing.</td>
          </tr>
          <tr>
            <td><strong>Year 1 value</strong></td>
            <td>Identical to CI (for annual compounding).</td>
            <td>Identical to SI (for annual compounding).</td>
          </tr>
        </tbody>
      </table>

      <h3>2. Ratio vs Proportion</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Ratio</th>
            <th>Proportion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Definition</strong></td>
            <td>Comparison of two quantities of same units ($a:b$).</td>
            <td>Equation stating equality of two ratios ($a:b = c:d$).</td>
          </tr>
          <tr>
            <td><strong>Key Property</strong></td>
            <td>Simplest form of relationship between numbers.</td>
            <td>Product of extremes equals product of means ($ad = bc$).</td>
          </tr>
        </tbody>
      </table>
    `,
    revision: {
      oneLiners: [
        "<strong>Prime numbers sum:</strong> There are 25 prime numbers from 1 to 100.",
        "<strong>Smallest prime:</strong> 2 is the only even prime number.",
        "<strong>1 status:</strong> 1 is neither prime nor composite.",
        "<strong>Divisibility by 11:</strong> Sum(odd digits) - Sum(even digits) = 0 or multiple of 11.",
        "<strong>Product rule:</strong> HCF × LCM = Product of two numbers.",
        "<strong>Fractions LCM:</strong> LCM of numerators / HCF of denominators.",
        "<strong>Mean proportional:</strong> Mean proportional of a and b is $\\sqrt{ab}$.",
        "<strong>Third proportional:</strong> Third proportional of a and b is $b^2 / a$.",
        "<strong>Average speed:</strong> $2xy / (x+y)$ over equal distances.",
        "<strong>Speed conversions:</strong> 1 km/h = 5/18 m/s.",
        "<strong>Double money at SI:</strong> Rate % = 100 / Time in years.",
        "<strong>CI-SI 2 years difference:</strong> $P(R/100)^2$.",
        "<strong>Equivalent discount:</strong> $x + y - (xy/100)$ for two successive rates.",
        "<strong>Time & Work rule:</strong> Efficiency is inversely proportional to time.",
        "<strong>Gain %:</strong> (Profit / Cost Price) × 100.",
        "<strong>Discount basis:</strong> Discount is always calculated on Marked Price (MP).",
        "<strong>Units of SI:</strong> Simple interest is directly proportional to principal, rate, and time.",
        "<strong>Perfect square roots:</strong> End digits cannot be 2, 3, 7, or 8.",
        "<strong>Prime checking limit:</strong> Check divisibility up to prime less than square root of number.",
        "<strong>Average natural numbers:</strong> First n numbers average is $(n+1)/2$."
      ],
      booster: `
        <div class="alert-box note">
          <strong>Basic Numeracy Booster:</strong>
          <p>For time and work problems, using the LCM method to assume a total work value is far more efficient than working with fractions (1/x). For SI and CI, always verify the compounding frequency.</p>
        </div>
      `
    }
  },
  
  // 50 PRACTICE QUESTIONS
  questions: {
    mcqs: [
      {
        id: "num_m1",
        question: "Find the HCF of 2/3, 8/9, 16/81, and 10/27.",
        options: [
          "2/81",
          "80/3",
          "2/3",
          "80/81"
        ],
        answer: 0,
        explanation: "HCF of fractions = HCF(2,8,16,10) / LCM(3,9,81,27) = 2 / 81."
      },
      {
        id: "num_m2",
        question: "The ratio of two numbers is 3:4 and their HCF is 4. Find their LCM.",
        options: [
          "12",
          "16",
          "24",
          "48"
        ],
        answer: 3,
        explanation: "Numbers are $3 \\times 4 = 12$ and $4 \\times 4 = 16$.\nLCM of 12 and 16 is 48."
      },
      {
        id: "num_m3",
        question: "By selling a watch for Rs. 1440, a man loses 10%. At what price should he sell it to gain 5%?",
        options: [
          "Rs. 1520",
          "Rs. 1680",
          "Rs. 1600",
          "Rs. 1580"
        ],
        answer: 1,
        explanation: "Cost Price = $1440 / 0.9 = 1600$ Rs. Target SP = $1600 \\times 1.05 = 1680$ Rs."
      },
      {
        id: "num_m4",
        question: "Find the single equivalent discount for two successive discounts of 20% and 10%.",
        options: [
          "30%",
          "28%",
          "25%",
          "26%"
        ],
        answer: 1,
        explanation: "Net Discount = $20 + 10 - \\frac{20 \\times 10}{100} = 30 - 2 = 28\\%$."
      },
      {
        id: "num_m5",
        question: "In what time will a sum of Rs. 1000 become Rs. 1331 at 10% per annum compound interest, compounded annually?",
        options: [
          "2 years",
          "3 years",
          "4 years",
          "2.5 years"
        ],
        answer: 1,
        explanation: "$1331 = 1000 \\times (1 + 10/100)^T \\implies \\frac{1331}{1000} = (1.1)^T \\implies (1.1)^3 = (1.1)^T \\implies T = 3$ years."
      },
      {
        id: "num_m6",
        question: "If A's income is 10% more than B's income, by how much percentage is B's income less than A's income?",
        options: [
          "10%",
          "9.09%",
          "11.11%",
          "9.5%"
        ],
        answer: 1,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Formula: $\\frac{R}{100+R} \\times 100 = \\frac{10}{110} \\times 100 = \\frac{100}{11} = 9.09\\%$."
      },
      {
        id: "num_m7",
        question: "A sum of money doubles itself in 10 years at simple interest. What is the rate of interest per annum?",
        options: [
          "5%",
          "8%",
          "10%",
          "12%"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Rate = $100 / \\text{Time} = 100 / 10 = 10\\%$ per annum."
      },
      {
        id: "num_m8",
        question: "A man covers a distance at 60 km/h and returns at 40 km/h. Find his average speed for the entire journey.",
        options: [
          "50 km/h",
          "48 km/h",
          "45 km/h",
          "52 km/h"
        ],
        answer: 1,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Average Speed = $\\frac{2xy}{x+y} = \\frac{2 \\times 60 \\times 40}{60+40} = \\frac{4800}{100} = 48$ km/h."
      },
      {
        id: "num_m9",
        question: "A and B together can do a work in 12 days, while A alone can do it in 30 days. In how many days can B alone complete the work?",
        options: [
          "18 days",
          "20 days",
          "15 days",
          "22 days"
        ],
        answer: 1,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "B's one day work = $1/12 - 1/30 = (5-2)/60 = 3/60 = 1/20 \\implies 20$ days."
      },
      {
        id: "num_m10",
        question: "Find the unit digit in the product: 2467^153 × 341^72.",
        options: [
          "7",
          "9",
          "1",
          "3"
        ],
        answer: 0,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Unit digit of $2467^{153}$ is $7^{153}$. $153$ mod $4 = 1$, so $7^1 = 7$.\n- Unit digit of $341^{72}$ is $1^{72} = 1$.\n- Product unit digit = $7 \\times 1 = 7$."
      },
      {
        id: "num_m11",
        question: "What is the HCF of 120, 144, and 180?",
        options: [
          "6",
          "12",
          "24",
          "36"
        ],
        answer: 1,
        explanation: "Prime factorizations: $120 = 2^3 \\times 3 \\times 5$, $144 = 2^4 \\times 3^2$, $180 = 2^2 \\times 3^2 \\times 5$.\nHCF = $2^2 \\times 3 = 12$."
      },
      {
        id: "num_m12",
        question: "Find the mean proportional of 0.08 and 0.18.",
        options: [
          "0.12",
          "0.012",
          "1.2",
          "0.15"
        ],
        answer: 0,
        explanation: "Mean proportional = $\\sqrt{0.08 \\times 0.18} = \\sqrt{0.0144} = 0.12$."
      },
      {
        id: "num_m13",
        question: "An item marked at Rs. 800 is sold for Rs. 720. What is the discount percentage?",
        options: [
          "8%",
          "10%",
          "12%",
          "15%"
        ],
        answer: 1,
        explanation: "Discount = $800 - 720 = 80$ Rs. Discount $\% = \\frac{80}{800} \\times 100 = 10\\%$."
      },
      {
        id: "num_m14",
        question: "A sum of money at compound interest doubles itself in 15 years. In how many years will it become 8 times of itself?",
        options: [
          "30 years",
          "45 years",
          "60 years",
          "75 years"
        ],
        answer: 1,
        explanation: "Let money become $2^n$ times in $n \\times T$ years.\n- 8 times = $2^3$ times. Time = $3 \\times 15 = 45$ years."
      },
      {
        id: "num_m15",
        question: "Find the average of first 50 natural numbers.",
        options: [
          "25",
          "25.5",
          "26",
          "50"
        ],
        answer: 1,
        explanation: "Average of first $n$ natural numbers is $\\frac{n+1}{2} = \\frac{50+1}{2} = 25.5$."
      },
      {
        id: "num_m16",
        question: "In what ratio must water be mixed with milk to gain 20% by selling the mixture at cost price?",
        options: [
          "1:5",
          "5:1",
          "1:6",
          "6:1"
        ],
        answer: 0,
        explanation: "To gain 20%, the ratio of water to milk must be equal to the gain ratio: $20:100 = 1:5$."
      },
      {
        id: "num_m17",
        question: "A train 200 m long is running at a speed of 60 km/h. How much time will it take to pass a standing man?",
        options: [
          "10 seconds",
          "12 seconds",
          "15 seconds",
          "8 seconds"
        ],
        answer: 1,
        explanation: "Speed in m/s = $60 \\times 5/18 = 50/3$ m/s.\n- Time to cross man = $\\frac{200}{50/3} = \\frac{600}{50} = 12$ seconds."
      },
      {
        id: "num_m18",
        question: "A and B can do a work in 15 days. If A leaves after 5 days and B completes the remaining work in 20 days, in how many days can A alone do the work?",
        options: [
          "30 days",
          "25 days",
          "40 days",
          "35 days"
        ],
        answer: 0,
        explanation: "Combined work rate = 1/15.\n- Work done in 5 days = 5/15 = 1/3.\n- Remaining work = 2/3 done by B in 20 days $\\implies$ B can do full work in $20 \\times 3/2 = 30$ days.\n- A's rate = $1/15 - 1/30 = 1/30 \\implies 30$ days."
      },
      {
        id: "num_m19",
        question: "The average weight of 8 men is increased by 1.5 kg when a new man comes in place of one of them weighing 65 kg. What is the weight of the new man?",
        options: [
          "70 kg",
          "75 kg",
          "77 kg",
          "80 kg"
        ],
        answer: 2,
        explanation: "Weight of new man = Weight of replaced man + (Total persons × Increase in average)\n- $= 65 + (8 \\times 1.5) = 65 + 12 = 77$ kg."
      },
      {
        id: "num_m20",
        question: "Find the HCF of 1.08, 0.36, and 0.9.",
        options: [
          "0.03",
          "0.18",
          "0.09",
          "0.12"
        ],
        answer: 1,
        explanation: "Convert decimals to integers by multiplying by 100: 108, 36, 90.\n- HCF of 108, 36, 90 is 18.\n- Dividing back by 100 gives 0.18."
      }
    ],
    assertionReason: [
      {
        question: "Assertion (A): For two positive integers A and B, HCF(A,B) × LCM(A,B) = A × B.\nReason (R): The product of HCF and LCM of fractions is also equal to the product of the fractions.\nChoose options:",
        options: [
          "Both A and R are true but R is NOT the correct explanation of A",
          "Both A and R are true and R is the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 2,
        explanation: "A is true. R is false because for fractions, HCF × LCM is not necessarily equal to the product of the fractions. E.g. HCF(1/2, 1/3) × LCM(1/2, 1/3) = 1/6 × 1 = 1/6, while their product is 1/6."
      },
      {
        question: "Assertion (A): If price of oil rises by 25%, consumption must be cut by 20% to keep budget constant.\nReason (R): Percentage reduction is given by R/(100+R) * 100.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Using formula: $25/(125) * 100 = 20\\%$. The formula is the correct explanation of the percentage value."
      },
      {
        question: "Assertion (A): The compound interest on Rs. 1000 for 2 years at 10% rate compounded annually is Rs. 210.\nReason (R): Compound interest is calculated as A - P, where A = P(1 + R/100)^T.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "The compound interest formula correctly yields $1210 - 1000 = 210$, making R the correct explanation of A."
      },
      {
        question: "Assertion (A): Time taken by A and B together to finish a work is always less than time taken by A alone.\nReason (R): Combined efficiency of A and B is the sum of their individual efficiencies.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Since efficiencies add up ($E_A + E_B > E_A$), the combined time taken ($W / (E_A + E_B)$) must be less than A's individual time."
      },
      {
        question: "Assertion (A): 54 km/h is equal to 15 m/s.\nReason (R): 1 km/h = 5/18 m/s.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Multiplying 54 by 5/18 yields 15, which is explained by the conversion factor."
      },
      {
        question: "Assertion (A): Discount offered on an article is always calculated on its Cost Price (CP).\nReason (R): Selling Price (SP) is always equal to Marked Price (MP) minus Discount.\nChoose options:",
        options: [
          "A is false, R is true",
          "A is true, R is false",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "A is false because discount is calculated on Marked Price (MP), not Cost Price. R is true."
      },
      {
        question: "Assertion (A): The mean proportional of 9 and 16 is 12.\nReason (R): The mean proportional of two numbers a and b is given by (a+b)/2.\nChoose options:",
        options: [
          "A is true, R is false",
          "A is false, R is true",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "A is true. R is false because mean proportional is $\\sqrt{ab}$, while (a+b)/2 is the arithmetic mean."
      },
      {
        question: "Assertion (A): Simple interest on Rs. 5000 for 3 years at 10% rate is Rs. 1500.\nReason (R): Simple interest is computed as P*R*T/100.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Simple interest formula application gives 1500, which is explained by R."
      },
      {
        question: "Assertion (A): 137 is a prime number.\nReason (R): 137 has no prime factors less than or equal to its square root.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Divisibility checks up to prime 11 show no factors, confirming it is prime."
      },
      {
        question: "Assertion (A): Average of first 10 odd natural numbers is 10.\nReason (R): The average of first n odd natural numbers is always equal to n.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "The formula for average of first n odd numbers is n, which explains why the average of first 10 odd numbers is 10."
      }
    ],
    matchFollowing: [
      {
        question: "Match Column I (Fractions) with Column II (Percentage Equivalent):\nColumn I:\nA. 1/2\nB. 1/3\nC. 1/4\nD. 1/5\nColumn II:\n1. 50%\n2. 33.33%\n3. 25%\n4. 20%\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Standard fraction percentage conversions."
      },
      {
        question: "Match Column I (Compound Interest term) with Column II (Formula):\nColumn I:\nA. Amount (Annual Compounding)\nB. Amount (Half-yearly Compounding)\nC. Difference CI - SI (2 years)\nColumn II:\n1. P(1 + R/100)^T\n2. P(1 + R/200)^(2T)\n3. P(R/100)^2\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-3, B-2, C-1",
          "A-1, B-3, C-2"
        ],
        answer: 0,
        explanation: "Compound interest equations."
      },
      {
        question: "Match Column I (Prime Number count range) with Column II (Number of Primes):\nColumn I:\nA. 1 to 50\nB. 51 to 100\nC. 1 to 100\nColumn II:\n1. 15\n2. 10\n3. 25\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-3, B-2, C-1",
          "A-1, B-3, C-2"
        ],
        answer: 0,
        explanation: "Primes counts: 1-50 is 15 primes, 51-100 is 10 primes, 1-100 is 25 primes."
      },
      {
        question: "Match Column I (Divisibility Checker) with Column II (Criteria):\nColumn I:\nA. Divisibility by 3\nB. Divisibility by 4\nC. Divisibility by 8\nD. Divisibility by 9\nColumn II:\n1. Sum of digits divisible by 3\n2. Last two digits divisible by 4\n3. Last three digits divisible by 8\n4. Sum of digits divisible by 9\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Divisibility criteria rules."
      },
      {
        question: "Match Column I (Averages type) with Column II (Formula for first n numbers):\nColumn I:\nA. Natural Numbers average\nB. Even Numbers average\nC. Odd Numbers average\nColumn II:\n1. (n+1)/2\n2. n+1\n3. n\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-3, B-2, C-1",
          "A-1, B-3, C-2"
        ],
        answer: 0,
        explanation: "Arithmetic sequence averages."
      },
      {
        question: "Match Column I (Ratio parameter) with Column II (Expression value):\nColumn I:\nA. Mean Proportional of a and b\nB. Third Proportional of a and b\nC. Compound Ratio of a:b and c:d\nColumn II:\n1. sqrt(ab)\n2. b^2 / a\n3. ac : bd\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-3, B-2, C-1",
          "A-1, B-3, C-2"
        ],
        answer: 0,
        explanation: "Proportional definitions."
      },
      {
        question: "Match Column I (Speed conversion) with Column II (Multiply factor):\nColumn I:\nA. km/h to m/s\nB. m/s to km/h\nColumn II:\n1. 5/18\n2. 18/5\nChoose option combination:",
        options: [
          "A-1, B-2",
          "A-2, B-1"
        ],
        answer: 0,
        explanation: "Speed unit factors."
      },
      {
        question: "Match Column I (Successive discounts) with Column II (Net discount):\nColumn I:\nA. 10% and 10%\nB. 20% and 20%\nC. 30% and 10%\nColumn II:\n1. 19%\n2. 36%\n3. 37%\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-3, B-2, C-1",
          "A-1, B-3, C-2"
        ],
        answer: 0,
        explanation: "Discount formula checks: 10+10-1=19%, 20+20-4=36%, 30+10-3=37%."
      },
      {
        question: "Match Column I (Income comparison scenario) with Column II (Formula result):\nColumn I:\nA. A's income is R% more than B. B is less by:\nB. A's income is R% less than B. B is more by:\nColumn II:\n1. [R / (100+R)] * 100\n2. [R / (100-R)] * 100\nChoose option combination:",
        options: [
          "A-1, B-2",
          "A-2, B-1"
        ],
        answer: 0,
        explanation: "Income percentage changes."
      },
      {
        question: "Match Column I (Time & Work scenario) with Column II (Working days required):\nColumn I:\nA. A does work in 10 days, B in 15 days. Together:\nB. A does work in 12 days, B in 24 days. Together:\nC. A does work in 20 days, B in 30 days. Together:\nColumn II:\n1. 6 days\n2. 8 days\n3. 12 days\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-3, B-2, C-1"
        ],
        answer: 0,
        explanation: "Time work calculations: 10&15 gives 6, 12&24 gives 8, 20&30 gives 12."
      }
    ]
  }
};
