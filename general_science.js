window.studyContent = window.studyContent || {};

window.studyContent.general_science = {
  title: "General Science (सामान्य विज्ञान)",
  desc: "Class X level competitive guide on Physics (Light, Electricity), Chemistry (Acids & Bases, Chemical Compounds), and Biology (Vitamins, Human Diseases).",
  
  // LEVEL 1: FOUNDATION (Intro + Detailed Theory)
  level1: {
    intro: `
      <div class="alert-box info">
        <strong>Paper-I Syllabus Scope:</strong>
        <p>Class X NCERT/RBSE level basic Physics (Reflection, Refraction, Mirrors, Lenses, Ohm's law, circuits), Chemistry (Acids, Bases, salts, pH scale, chemical equations), and Biology (Vitamins chemical names, deficiency diseases, human systems, bacterial/viral/protozoan diseases) ko detail main study karta hai.</p>
      </div>
    `,
    theory: `
      <h2>1. Physics (भौतिक विज्ञान)</h2>
      <h3>A. Light: Reflection and Refraction</h3>
      <ul class="notes-list">
        <li><strong>Reflection (परावर्तन):</strong> Light bounce-back from a polished surface. Laws: Angle of incidence ($i$) = Angle of reflection ($r$). Incident ray, normal, and reflected ray lie in the same plane.</li>
        <li><strong>Refraction (अपवर्तन):</strong> Bending of light when crossing from one medium to another. Caused by change in light speed.
          <br>- **Snell's Law:** $\\frac{\\sin i}{\\sin r} = \\text{constant} = \\text{Refractive Index } (\\mu)$.
          <br>- **Total Internal Reflection (TIR):** Occurs when light travels from denser to rarer medium and angle of incidence $>$ critical angle. Examples: Mirage (मरीचिका) formation, sparkling of diamonds, optical fibers.
        </li>
        <li><strong>Mirrors & Lenses:</strong>
          <br>- **Concave Mirror (Converging):** Shaving mirrors, headlights, solar cookers, dentist's checkup.
          <br>- **Convex Mirror (Diverging):** Rear-view side mirrors in vehicles (always forms erect, virtual, and diminished images, providing a wider field of view).
          <br>- **Myopia (Short-sightedness):** Corrected by using a **Concave Lens**.
          <br>- **Hypermetropia (Long-sightedness):** Corrected by using a **Convex Lens**.
        </li>
      </ul>

      <h3>B. Electricity & Circuits</h3>
      <ul class="notes-list">
        <li><strong>Ohm's Law:</strong> At constant temperature, the current ($I$) flowing through a conductor is directly proportional to the potential difference ($V$) across its ends: $V = IR$.
          <br>- **Resistance ($R$):** Ratio of voltage to current ($R = V/I$). Unit: Ohm ($\\Omega$). Depends on length ($L$), area ($A$), and resistivity ($\\rho$): $R = \\rho \\frac{L}{A}$.
        </li>
        <li><strong>Circuit Connections:</strong>
          <br>- **Series:** $R_{eq} = R_1 + R_2 + R_3...$ (Current remains same, voltage splits).
          <br>- **Parallel:** $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}...$ (Voltage remains same, current splits).
        </li>
      </ul>

      <h2>2. Chemistry (रसायन विज्ञान)</h2>
      <h3>A. Acids, Bases & Salts</h3>
      <ul class="notes-list">
        <li><strong>Acids:</strong> Sour taste, turn blue litmus paper red. Release $H^+$ ions in water. pH value $< 7$.
          <br>- Examples: Hydrochloric acid ($HCl$), Sulphuric acid ($H_2SO_4$ - King of Chemicals), Acetic acid (vinegar), Citric acid (lemon).
        </li>
        <li><strong>Bases:</strong> Bitter taste, slippery feel, turn red litmus blue. Release $OH^-$ ions in water. pH value $> 7$.
          <br>- Examples: Sodium Hydroxide ($NaOH$ - Caustic Soda), Calcium Hydroxide ($Ca(OH)_2$ - Slaked Lime).
        </li>
        <li><strong>pH Scale:</strong> Developed by Sørensen. Neutral point is 7. Human blood pH is **7.4** (slightly basic). Acid rain pH is below **5.6**.
          <br>- **Stomach Acid:** $HCl$ (pH ~ 1.5 - 3.5), helps digest food. Antacids like Milk of Magnesia ($Mg(OH)_2$) neutralize excess acidity.
        </li>
      </ul>

      <h3>B. Common Chemical Compounds</h3>
      <ul class="notes-list">
        <li><strong>Baking Soda:</strong> Sodium Hydrogen Carbonate ($NaHCO_3$) - used in cooking, fire extinguishers.</li>
        <li><strong>Washing Soda:</strong> Sodium Carbonate Decahydrate ($Na_2CO_3 \\cdot 10H_2O$) - used in glass, soap, paper industries.</li>
        <li><strong>Bleaching Powder:</strong> Calcium Oxychloride ($CaOCl_2$) - used to disinfect drinking water.</li>
        <li><strong>Plaster of Paris (POP):</strong> Calcium Sulphate Hemihydrate ($CaSO_4 \\cdot \\frac{1}{2}H_2O$) - obtained by heating gypsum ($CaSO_4 \\cdot 2H_2O$) at 373 K. Used for setting fractured bones.</li>
      </ul>

      <h2>3. Biology (जीव विज्ञान)</h2>
      <h3>A. Vitamins & Nutrition</h3>
      <p>Vitamins are essential micronutrients. Divided into water-soluble (B-complex, C) and fat-soluble (A, D, E, K).</p>
      <ul class="notes-list">
        <li><strong>Vitamin A (Retinol):</strong> Deficiency causes **Night Blindness** (रतोंधी) and Xerophthalmia. Sources: Carrot, papaya.</li>
        <li><strong>Vitamin B1 (Thiamine):</strong> Deficiency causes **Beri-beri**. Sources: Whole grains.</li>
        <li><strong>Vitamin C (Ascorbic Acid):</strong> Deficiency causes **Scurvy** (bleeding gums). Sources: Amla, citrus fruits. Extremely heat-sensitive.</li>
        <li><strong>Vitamin D (Calciferol):</strong> Deficiency causes **Rickets** in children and Osteomalacia in adults. Body synthesizes it in sunlight.</li>
        <li><strong>Vitamin K (Phylloquinone):</strong> Essential for **Blood Clotting** (रक्त का थक्का). Deficiency prevents clotting, leading to excessive bleeding.</li>
      </ul>

      <h3>B. Human Diseases</h3>
      <ul class="notes-list">
        <li><strong>Bacterial Diseases:</strong> Tuberculosis (TB - caused by *Mycobacterium tuberculosis*), Typhoid (*Salmonella typhi*), Cholera (*Vibrio cholerae*), Tetanus (*Clostridium tetani*).</li>
        <li><strong>Viral Diseases:</strong> AIDS (caused by HIV retrovirus), Dengue (Flavivirus, spread by *Aedes* mosquito), Polio, Influenza, Chickenpox, Hepatitis.</li>
        <li><strong>Protozoan Diseases:</strong> Malaria (caused by *Plasmodium*, spread by female *Anopheles* mosquito), Kala-azar (*Leishmania*), Amoebic dysentery.</li>
      </ul>
    `
  },
  
  // LEVEL 2: EXAM READY (Formulas + Shortcut Tricks + 15 Solved Problems)
  level2: {
    formulas: `
      <table class="notes-table">
        <thead>
          <tr>
            <th>Formula / Equation Name</th>
            <th>Mathematical Expression</th>
            <th>Variable Definitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Mirror Formula</strong></td>
            <td>$\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$</td>
            <td>$f$: focal length, $v$: image distance, $u$: object distance.</td>
          </tr>
          <tr>
            <td><strong>Lens Formula</strong></td>
            <td>$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$</td>
            <td>$f$: focal length, $v$: image distance, $u$: object distance.</td>
          </tr>
          <tr>
            <td><strong>Lens Power</strong></td>
            <td>$P = \\frac{1}{f \\text{ (in meters)}}$</td>
            <td>$P$: Power in Dioptres ($D$). Convex lens $+P$, Concave lens $-P$.</td>
          </tr>
          <tr>
            <td><strong>Ohm's Law</strong></td>
            <td>$V = IR$</td>
            <td>$V$: voltage, $I$: current, $R$: resistance.</td>
          </tr>
          <tr>
            <td><strong>pH Definition</strong></td>
            <td>$\\text{pH} = -\\log_{10}[H^+]$</td>
            <td>$[H^+]$: Hydrogen ion concentration in mol/L.</td>
          </tr>
        </tbody>
      </table>
    `,
    shortcuts: `
      <ul class="notes-list">
        <li><strong>Trick for Fat-Soluble Vitamins:</strong> Remember the word **KEDA** $\rightarrow$ Vitamins **K**, **E**, **D**, **A** are fat-soluble. The remaining ones (B, C) are water-soluble.</li>
        <li><strong>Trick for Lens Correction:</strong> **M-C** & **H-X** $\rightarrow$ **M**yopia is corrected by **C**oncave lens; **H**ypermetropia is corrected by Con**v**ex (X) lens.</li>
        <li><strong>Trick for Litmus Paper:</strong> **ABR** & **BAR** $\rightarrow$ **A**cid turns **B**lue to **R**ed; **B**ase turns **R**ed to **B**lue.</li>
      </ul>
    `,
    solved: {
      easy: [
        {
          question: "An object is placed at a distance of 10 cm in front of a concave mirror of focal length 15 cm. Find the nature of the image formed.",
          solution: "Given: Concave mirror, so focal length $f = -15$ cm.\n- Object distance $u = -10$ cm.\n- Using mirror formula: $\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u} \\implies \\frac{1}{-15} = \\frac{1}{v} + \\frac{1}{-10}$\n- $\\frac{1}{v} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3 - 2}{30} = \\frac{1}{30} \\implies v = +30$ cm.\n- Since $v$ is positive, the image is formed behind the mirror.\nAnswer: <strong>Virtual and Erect image formed at 30 cm behind the mirror.</strong>"
        },
        {
          question: "Calculate the electrical resistance of a device if it draws a current of 2 A when connected to a 12 V battery source.",
          solution: "Given: Current $I = 2$ A, Potential difference $V = 12$ V.\n- According to Ohm's Law: $V = IR \\implies R = \\frac{V}{I}$.\n- $R = \\frac{12}{2} = 6 \\ \\Omega$.\nAnswer: <strong>6 $\\Omega$</strong>"
        },
        {
          question: "Find the pH value of a solution if its Hydrogen ion concentration is $10^{-4}$ mol/L.",
          solution: "- pH formula: $\\text{pH} = -\\log_{10}[H^+]$.\n- Given $[H^+]$ = $10^{-4}$ mol/L.\n- $\\text{pH} = -\\log_{10}(10^{-4}) = -(-4) \\log_{10}(10) = 4 \\times 1 = 4$.\nAnswer: <strong>4 (Acidic solution)</strong>"
        },
        {
          question: "Identify the chemical name and deficiency disease associated with Vitamin A.",
          solution: "- Chemical Name: **Retinol**.\n- Deficiency Disease: **Night Blindness** (रतोंधी - difficulty in seeing in low light/darkness).\nAnswer: <strong>Retinol, Night Blindness</strong>"
        },
        {
          question: "Identify which lens is used to correct Myopia and calculate the power of a lens with focal length -50 cm.",
          solution: "- Myopia (Short-sightedness) is corrected using a **Concave lens**.\n- Focal length $f = -50$ cm = $-0.5$ m.\n- Power $P = \\frac{1}{f \\text{ (in meters)}} = \\frac{1}{-0.5} = -2 \\text{ Dioptres } (D)$.\nAnswer: <strong>Concave lens, -2 D</strong>"
        }
      ],
      medium: [
        {
          question: "Three resistors of resistances 2 $\\Omega$, 3 $\\Omega$, and 6 $\\Omega$ are connected in parallel. Find the equivalent resistance of this combination.",
          solution: "In a parallel connection:\n- $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$\n- $\\frac{1}{R_{eq}} = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = \\frac{3 + 2 + 1}{6} = \\frac{6}{6} = 1 \\ \\Omega$.\n- $R_{eq} = 1 \\ \\Omega$.\nAnswer: <strong>1 $\\Omega$ (Parallel combination reduces overall resistance)</strong>"
        },
        {
          question: "Explain why vehicles use a convex mirror as a rear-view mirror instead of a plane mirror.",
          solution: "A convex mirror has two key advantages:\n1. It always forms a virtual, erect, and **diminished** image of objects behind.\n2. Due to its outward curved shape, it offers a much **wider field of view** than a plane mirror, helping drivers see a larger area of traffic behind them.\nAnswer: <strong>Provides erect images and a wider field of view.</strong>"
        },
        {
          question: "Identify the chemical formula of Plaster of Paris (POP) and explain the reaction when it is mixed with water.",
          solution: "- Chemical Formula of POP: $CaSO_4 \\cdot \\frac{1}{2}H_2O$ (Calcium Sulphate Hemihydrate).\n- When mixed with water, it absorbs water and converts back into Gypsum ($CaSO_4 \\cdot 2H_2O$), which is a hard solid mass:\n  $CaSO_4 \\cdot \\frac{1}{2}H_2O + 1\\frac{1}{2}H_2O \\rightarrow CaSO_4 \\cdot 2H_2O$.\nAnswer: <strong>$CaSO_4 \\cdot \\frac{1}{2}H_2O$, converts to hard Gypsum on hydration.</strong>"
        },
        {
          question: "Classify the following human diseases based on their causative agents: Typhoid, Influenza, Malaria, Tetanus, Dengue.",
          solution: "- **Typhoid:** Bacterial (*Salmonella typhi*)\n- **Influenza:** Viral (Myxovirus influenzae)\n- **Malaria:** Protozoan (*Plasmodium* parasite)\n- **Tetanus:** Bacterial (*Clostridium tetani*)\n- **Dengue:** Viral (Flavivirus)\nAnswer: <strong>Bacterial: Typhoid, Tetanus. Viral: Influenza, Dengue. Protozoan: Malaria.</strong>"
        },
        {
          question: "Calculate the pH of a solution formed by dissolving $0.01$ moles of hydrochloric acid ($HCl$) in enough water to make 1 liter of solution.",
          solution: "- Hydrochloric acid ($HCl$) is a strong acid that dissociates completely in water:\n  $HCl \\rightarrow H^+ + Cl^-$.\n- Concentration of $[H^+]$ = Concentration of $HCl$ = $0.01 \\text{ M} = 10^{-2}$ M.\n- $\\text{pH} = -\\log_{10}[H^+] = -\\log_{10}(10^{-2}) = 2$.\nAnswer: <strong>2</strong>"
        }
      ],
      advanced: [
        {
          question: "A convex lens of focal length 20 cm forms a real and inverted image of an object at a distance of 40 cm. Find the position of the object and the magnification.",
          solution: "Given: Convex lens, focal length $f = +20$ cm.\n- Real image, so $v = +40$ cm (behind the lens).\n- Lens formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} \\implies \\frac{1}{20} = \\frac{1}{40} - \\frac{1}{u}$\n- $\\frac{1}{u} = \\frac{1}{40} - \\frac{1}{20} = \\frac{1 - 2}{40} = -\\frac{1}{40} \\implies u = -40$ cm.\n- Magnification $m = \\frac{v}{u} = \\frac{40}{-40} = -1$.\n- $m = -1$ indicates the image is real, inverted, and of the same size as the object.\nAnswer: <strong>Object is at -40 cm (at 2F); Magnification is -1.</strong>"
        },
        {
          question: "Explain the concept of Total Internal Reflection (TIR) and derive the relation between the critical angle and refractive index of the medium.",
          solution: "- When light travels from a denser medium (refractive index $\\mu_1$) to a rarer medium (refractive index $\\mu_2$), it bends away from the normal.\n- The angle of incidence for which the angle of refraction is $90^\\circ$ is called the **Critical Angle ($C$)**.\n- By Snell's Law: $\\mu_1 \\sin C = \u03bc_2 \\sin 90^\\circ$.\n- If the rarer medium is air ($\\mu_2 = 1$), then: $\\mu_1 \\sin C = 1 \\implies \\sin C = \\frac{1}{\\mu}$.\n- If the angle of incidence exceeds $C$, light is reflected back entirely into the denser medium.\nAnswer: <strong>$\\sin C = \\frac{1}{\\mu}$, critical condition for total reflection.</strong>"
        },
        {
          question: "An electrical bulb of resistance 400 $\\Omega$ is connected to a 220 V mains supply. Calculate the electrical energy consumed by the bulb in 5 hours in units (kWh).",
          solution: "Given: Resistance $R = 400 \\ \\Omega$, Voltage $V = 220$ V, Time $t = 5$ hours.\n- Power $P = \\frac{V^2}{R} = \\frac{220 \\times 220}{400} = \\frac{48400}{400} = 121$ W.\n- Energy in Wh = Power (W) $\\times$ Time (hours) = $121 \\times 5 = 605$ Wh.\n- Energy in kWh (Units) = $\\frac{605}{1000} = 0.605$ kWh.\nAnswer: <strong>0.605 units (kWh)</strong>"
        },
        {
          question: "Explain the biochemical cause of Vitamin K deficiency leading to hemorrhages. Which protein synthesis is affected?",
          solution: "- Vitamin K acts as a crucial co-factor for the enzyme gamma-glutamyl carboxylase.\n- This enzyme is required for the post-translational modification of clotting factors **II (Prothrombin), VII, IX, and X** in the liver.\n- In the absence of Vitamin K, these proteins cannot bind Calcium ions, halting the coagulation cascade and causing severe bleeding.\nAnswer: <strong>Prevents synthesis of active Prothrombin (Factor II) and other clotting factors in the liver.</strong>"
        },
        {
          question: "Contrast the actions of Baking Soda ($NaHCO_3$) and Washing Soda ($Na_2CO_3$) when heated. Write their thermal decomposition equations.",
          solution: "- **Baking Soda ($NaHCO_3$):** On heating, it decomposes to release Carbon Dioxide gas, which makes dough rise:\n  $2NaHCO_3 \\xrightarrow{\\Delta} Na_2CO_3 + H_2O + CO_2 \\uparrow$.\n- **Washing Soda ($Na_2CO_3 \\cdot 10H_2O$):** On exposure to dry air or heating, it loses water of crystallization (efflorescence):\n  $Na_2CO_3 \\cdot 10H_2O \\xrightarrow{\\Delta} Na_2CO_3 + 10H_2O$.\nAnswer: <strong>Baking soda releases $CO_2$ gas; Washing soda dehydrates.</strong>"
        }
      ]
    }
  },
  
  // LEVEL 3: ADVANCED COMPETITIVE (Comparison Tables + PYQs + Revision Sheet)
  level3: {
    comparisons: `
      <h3>1. Concave Mirror vs Convex Mirror</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Concave Mirror (Converging)</th>
            <th>Convex Mirror (Diverging)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Image Nature</strong></td>
            <td>Real & inverted (usually), virtual & erect when object is close ($<f$).</td>
            <td>Always virtual, erect, and diminished.</td>
          </tr>
          <tr>
            <td><strong>Focal Length ($f$)</strong></td>
            <td>Negative ($f < 0$).</td>
            <td>Positive ($f > 0$).</td>
          </tr>
          <tr>
            <td><strong>Field of View</strong></td>
            <td>Narrow. Focuses light to a point.</td>
            <td>Wide. Diverges light to cover a large area.</td>
          </tr>
        </tbody>
      </table>

      <h3>2. Acids vs Bases</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Characteristic</th>
            <th>Acids</th>
            <th>Bases</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Taste & Touch</strong></td>
            <td>Sour taste, stings on skin.</td>
            <td>Bitter taste, soapy/slippery feel.</td>
          </tr>
          <tr>
            <td><strong>Litmus Reaction</strong></td>
            <td>Turns Blue litmus to Red.</td>
            <td>Turns Red litmus to Blue.</td>
          </tr>
          <tr>
            <td><strong>Aqueous Ions</strong></td>
            <td>Releases Hydrogen ($H^+$) or Hydronium ($H_3O^+$) ions.</td>
            <td>Releases Hydroxide ($OH^-$) ions.</td>
          </tr>
        </tbody>
      </table>
    `,
    revision: {
      oneLiners: [
        "<strong>Laws of Reflection:</strong> Angle $i$ equals Angle $r$; normal, incident, reflected rays are coplanar.",
        "<strong>Total Internal Reflection:</strong> Requires light traveling denser to rarer medium and angle $i > C$.",
        "<strong>Mirage cause:</strong> Total Internal Reflection of light in hot desert air.",
        "<strong>Concave lens:</strong> Corrects Myopia (short-sightedness).",
        "<strong>Convex lens:</strong> Corrects Hypermetropia (long-sightedness).",
        "<strong>Unit of lens power:</strong> Dioptre ($D$). Convex is positive, Concave is negative.",
        "<strong>Ohm's Law formula:</strong> $V = IR$ at constant temperature.",
        "<strong>Series Resistance:</strong> Total resistance increases ($R_{eq} = R_1 + R_2 + R_3$).",
        "<strong>Parallel Resistance:</strong> Total resistance decreases ($\\frac{1}{R_{eq}} = \\sum \\frac{1}{R_i}$).",
        "<strong>pH Scale inventor:</strong> Sørensen in 1909.",
        "<strong>Blood pH:</strong> 7.4 (slightly basic). Neutral is 7.0.",
        "<strong>Acid Rain pH limit:</strong> pH value less than 5.6.",
        "<strong>Baking Soda formula:</strong> Sodium Hydrogen Carbonate ($NaHCO_3$).",
        "<strong>Bleaching Powder formula:</strong> Calcium Oxychloride ($CaOCl_2$).",
        "<strong>Plaster of Paris formula:</strong> $CaSO_4 \\cdot \\frac{1}{2}H_2O$ (hemihydrate).",
        "<strong>Vitamin A chemical name:</strong> Retinol (deficiency causes Night Blindness).",
        "<strong>Vitamin C chemical name:</strong> Ascorbic Acid (deficiency causes Scurvy).",
        "<strong>Blood clotting Vitamin:</strong> Vitamin K (Phylloquinone).",
        "<strong>Tuberculosis cause:</strong> Mycobacterium tuberculosis (Bacterial).",
        "<strong>Malaria vector:</strong> Female Anopheles mosquito transmits Plasmodium protozoan."
      ],
      booster: `
        <div class="alert-box note">
          <strong>General Science Revision Booster:</strong>
          <p>For chemical formulas, do not mix up Baking Soda ($NaHCO_3$) and Washing Soda ($Na_2CO_3$). For physics, convex mirrors have positive focal lengths, while concave mirrors have negative focal lengths. Remember: Blood pH = 7.4.</p>
        </div>
      `
    }
  },
  
  // 50 PRACTICE QUESTIONS
  questions: {
    mcqs: [
      {
        id: "sci_m1",
        question: "Which type of mirror is used as a rear-view side mirror in vehicles?",
        options: [
          "Concave Mirror",
          "Convex Mirror",
          "Plane Mirror",
          "Double Concave Mirror"
        ],
        answer: 1,
        explanation: "Convex mirror vehicle side indicators mein use hota hai kyunki yeh hamesha erect aur diminished image banata hai, aur runs a wide field of view."
      },
      {
        id: "sci_m2",
        question: "Which of the following lenses is used to correct the eye defect known as Myopia?",
        options: [
          "Convex Lens",
          "Concave Lens",
          "Bifocal Lens",
          "Cylindrical Lens"
        ],
        answer: 1,
        explanation: "Myopia (निकट दृष्टि दोष) ko door karne ke liye Concave lens (अवतल लेंस) ka use kiya jata hai."
      },
      {
        id: "sci_m3",
        question: "What is the SI unit of power of a lens?",
        options: [
          "Meter",
          "Dioptre",
          "Watt",
          "Joule"
        ],
        answer: 1,
        explanation: "Lens ki power ki SI unit Dioptre (D) hai, jahan $P = 1/f \\text{ (in meters)}$."
      },
      {
        id: "sci_m4",
        question: "What is the chemical formula of Baking Soda?",
        options: [
          "Na2CO3",
          "NaHCO3",
          "NaOH",
          "CaOCl2"
        ],
        answer: 1,
        explanation: "Baking soda ka chemical name Sodium Hydrogen Carbonate ($NaHCO_3$) hai."
      },
      {
        id: "sci_m5",
        question: "Which of the following pH values represents a neutral solution?",
        options: [
          "0",
          "5.6",
          "7.0",
          "14"
        ],
        answer: 2,
        explanation: "pH scale par 7 value neutral (उदासीन) solution ko represent karti hai, jaise pure water."
      },
      {
        id: "sci_m6",
        question: "Which of the following diseases is caused by a virus?",
        options: [
          "Tuberculosis",
          "Cholera",
          "Dengue",
          "Typhoid"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Dengue Flavivirus ke karan hota hai jo viral disease hai. Baaki teenon bacterial diseases hain."
      },
      {
        id: "sci_m7",
        question: "Deficiency of which vitamin causes the disease 'Scurvy' characterized by bleeding gums?",
        options: [
          "Vitamin A",
          "Vitamin B1",
          "Vitamin C",
          "Vitamin D"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Vitamin C (Ascorbic Acid) ki deficiency se Scurvy disease hoti hai."
      },
      {
        id: "sci_m8",
        question: "What is the equivalent resistance when three resistors of 3 $\\Omega$ each are connected in parallel?",
        options: [
          "9 Ohm",
          "3 Ohm",
          "1 Ohm",
          "0.33 Ohm"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Parallel connection: $1/R_{eq} = 1/3 + 1/3 + 1/3 = 3/3 = 1 \\implies R_{eq} = 1 \\ \\Omega$."
      },
      {
        id: "sci_m9",
        question: "What is the average pH value of human blood?",
        options: [
          "6.2",
          "7.0",
          "7.4",
          "8.5"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Human blood ka average pH value 7.4 hota hai, jo slightly basic/alkaline hai."
      },
      {
        id: "sci_m10",
        question: "Which of the following phenomena is responsible for the twinkling of stars in the night sky?",
        options: [
          "Reflection of light",
          "Atmospheric Refraction of light",
          "Scattering of light",
          "Total Internal Reflection"
        ],
        answer: 1,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Stars ki twinkling earth's atmosphere ke shifting density indexes ke refractive bending (Atmospheric Refraction) se hoti hai."
      },
      {
        id: "sci_m11",
        question: "What chemical compound is obtained by heating Gypsum at 373 K?",
        options: [
          "Washing Soda",
          "Bleaching Powder",
          "Plaster of Paris",
          "Baking Soda"
        ],
        answer: 2,
        explanation: "Gypsum ($CaSO_4 \\cdot 2H_2O$) ko heat karne par Plaster of Paris ($CaSO_4 \\cdot \\frac{1}{2}H_2O$) banta hai."
      },
      {
        id: "sci_m12",
        question: "Which vitamin is synthesized in our skin when exposed to sunlight?",
        options: [
          "Vitamin A",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin D"
        ],
        answer: 3,
        explanation: "Sunlight (UV rays) ki presence mein skin cholesterol cells **Vitamin D** synthesize karte hain."
      },
      {
        id: "sci_m13",
        question: "Which of the following acids is present in vinegar?",
        options: [
          "Citric Acid",
          "Acetic Acid",
          "Lactic Acid",
          "Methanoic Acid"
        ],
        answer: 1,
        explanation: "Vinegar (सिरका) mein Acetic Acid ($CH_3COOH$) present hota hai."
      },
      {
        id: "sci_m14",
        question: "What is the causative agent of Tuberculosis (TB)?",
        options: [
          "Virus",
          "Bacteria",
          "Protozoa",
          "Fungus"
        ],
        answer: 1,
        explanation: "Tuberculosis bacterial disease hai jo *Mycobacterium tuberculosis* bacteria ke karan hoti hai."
      },
      {
        id: "sci_m15",
        question: "Which blood-clotting vitamin deficiency leads to non-stop bleeding during a cut?",
        options: [
          "Vitamin A",
          "Vitamin E",
          "Vitamin K",
          "Vitamin C"
        ],
        answer: 2,
        explanation: "Vitamin K (Phylloquinone) prothrombin protein formation ke liye vital hai, iski kami se blood clotting nahi hoti."
      },
      {
        id: "sci_m16",
        question: "What is the relation between focal length (f) and radius of curvature (R) of a spherical mirror?",
        options: [
          "f = R",
          "f = R / 2",
          "f = 2R",
          "f = R^2"
        ],
        answer: 1,
        explanation: "Focal length spherical mirror ke radius of curvature ki aadhi hoti hai: $f = R/2$."
      },
      {
        id: "sci_m17",
        question: "What is the pH value range of acid rain?",
        options: [
          "Below 5.6",
          "7.0 to 7.8",
          "Above 8.2",
          "Exact 7.0"
        ],
        answer: 0,
        explanation: "Atmosphere mein carbon dioxide aur sulfur oxides gas mix hone par acid rain hoti hai jiska pH value 5.6 se kam hota hai."
      },
      {
        id: "sci_m18",
        question: "Which chemical compound is used as a disinfectant in drinking water to kill germs?",
        options: [
          "Baking Soda",
          "Washing Soda",
          "Bleaching Powder",
          "Caustic Soda"
        ],
        answer: 2,
        explanation: "Bleaching powder ($CaOCl_2$) water purification/treatment mein chlorine release karke germicide ka kaam karta hai."
      },
      {
        id: "sci_m19",
        question: "Which vector spreads the Malaria parasite Plasmodium?",
        options: [
          "Aedes Aegypti mosquito",
          "Female Anopheles mosquito",
          "Housefly",
          "Tsetse fly"
        ],
        answer: 1,
        explanation: "Malaria disease Plasmodium protozoan ke karan hoti hai, jiska vector Female Anopheles mosquito hai."
      },
      {
        id: "sci_m20",
        question: "What is the chemical name of Vitamin B1?",
        options: [
          "Retinol",
          "Thiamine",
          "Riboflavin",
          "Niacin"
        ],
        answer: 1,
        explanation: "Vitamin B1 ka chemical name Thiamine hai, iski kami se Beri-beri disease hoti hai."
      }
    ],
    assertionReason: [
      {
        question: "Assertion (A): Concave mirrors are used as shaving mirrors.\nReason (R): When an object is placed close to a concave mirror, it forms an erect, virtual, and magnified image.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Close placement par concave mirror virtual, erect, aur badi image banata hai, jo face clear dekhne mein madad karti hai."
      },
      {
        question: "Assertion (A): Human blood is slightly alkaline.\nReason (R): The pH value of human blood is around 7.4.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "pH 7.4 represents slightly alkaline/basic nature, since neutral is 7.0."
      },
      {
        question: "Assertion (A): In parallel connection, if one electrical appliance fails, others continue to work.\nReason (R): In a parallel circuit, the voltage across each load remains the same and separate paths exist for current.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Separate current loops ki wajah se ek component check breakdown hone par pure circuit ko impact nahi karta, isliye domestic wiring parallel mein hoti hai."
      },
      {
        question: "Assertion (A): Vitamin C deficiency causes Scurvy.\nReason (R): Vitamin C (Ascorbic Acid) is required for the synthesis of collagen, which keeps blood capillaries strong.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Collagen structure failure leads to rupture of fine capillaries, causing gum bleeding (Scurvy symptoms)."
      },
      {
        question: "Assertion (A): Plaster of Paris must be stored in moisture-proof containers.\nReason (R): POP absorbs moisture to form Gypsum, converting into a hard solid mass that ruins its usage.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "POP air moisture ke sath interact karke hydration reaction complete karta hai aur use block solid bana deta hai."
      },
      {
        question: "Assertion (A): A doctor prescribes a concave lens for a patient suffering from Hypermetropia.\nReason (R): Concave lenses diverge light rays, helping shift focus to the retina in myopic eyes.\nChoose options:",
        options: [
          "A is false, R is true",
          "A is true, R is false",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "A is false because Hypermetropia is corrected using a Convex lens, not concave. R is correct about concave lens Divergence."
      },
      {
        question: "Assertion (A): Milk of Magnesia is used as an antacid to cure stomach indigestion.\nReason (R): Magnesium hydroxide is a mild base that neutralizes excess hydrochloric acid in the stomach.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Antacids basic hote hain jo stomach $HCl$ ke excess acid levels ko neutralize karke pain relief dete hain."
      },
      {
        question: "Assertion (A): Malaria is spread by male Anopheles mosquitoes.\nReason (R): Plasmodium is a protozoan parasite that replicates in human red blood cells.\nChoose options:",
        options: [
          "A is false, R is true",
          "A is true, R is false",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "A is false because Malaria is spread only by **female** Anopheles mosquitoes (male mosquitoes feed on plant juices). R is true."
      },
      {
        question: "Assertion (A): Light bends when it crosses diagonally from air to water.\nReason (R): Water is optically denser than air, causing the speed of light to decrease in water.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Speed variation across optical densities is the primary cause of light bending (Refraction)."
      },
      {
        question: "Assertion (A): Copper is used for making electric transmission cables.\nReason (R): Copper has low electrical resistivity and high conductivity.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Low resistivity of copper minimizes heat loss ($I^2R$) during electricity transmission, making it perfect for wires."
      }
    ],
    matchFollowing: [
      {
        question: "Match Column I (Defect of Vision) with Column II (Corrective Lens):\nColumn I:\nA. Myopia\nB. Hypermetropia\nC. Presbyopia\nD. Astigmatism\nColumn II:\n1. Concave Lens\n2. Convex Lens\n3. Bifocal Lens\n4. Cylindrical Lens\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Myopia-Concave, Hypermetropia-Convex, Presbyopia-Bifocal, Astigmatism-Cylindrical."
      },
      {
        question: "Match Column I (Chemical Name) with Column II (Common Name):\nColumn I:\nA. Sodium Hydrogen Carbonate\nB. Sodium Carbonate Decahydrate\nC. Calcium Oxychloride\nD. Calcium Sulphate Hemihydrate\nColumn II:\n1. Baking Soda\n2. Washing Soda\n3. Bleaching Powder\n4. Plaster of Paris\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Sodium Hydrogen Carbonate-Baking Soda, Sodium Carbonate-Washing Soda, Calcium Oxychloride-Bleaching Powder, Calcium Sulphate Hemihydrate-Plaster of Paris."
      },
      {
        question: "Match Column I (Vitamin chemical name) with Column II (Deficiency Disease):\nColumn I:\nA. Retinol\nB. Thiamine\nC. Ascorbic Acid\nD. Calciferol\nColumn II:\n1. Night Blindness\n2. Beri-beri\n3. Scurvy\n4. Rickets\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Retinol-Night Blindness, Thiamine-Beri-beri, Ascorbic Acid-Scurvy, Calciferol-Rickets."
      },
      {
        question: "Match Column I (Disease) with Column II (Type of Pathogen / Agent):\nColumn I:\nA. Tuberculosis\nB. Influenza\nC. Malaria\nD. Ringworm\nColumn II:\n1. Bacteria\n2. Virus\n3. Protozoa\n4. Fungus\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Tuberculosis-Bacteria, Influenza-Virus, Malaria-Protozoa, Ringworm-Fungus."
      },
      {
        question: "Match Column I (Acid Name) with Column II (Natural Source):\nColumn I:\nA. Citric Acid\nB. Lactic Acid\nC. Tartaric Acid\nD. Methanoic / Formic Acid\nColumn II:\n1. Lemon / Orange\n2. Curd / Milk souring\n3. Tamarind (इमली) / Grapes\n4. Ant sting (चींटी का डंक)\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Citric-Lemon, Lactic-Curd, Tartaric-Tamarind, Methanoic-Ant sting."
      },
      {
        question: "Match Column I (Physical Quantity) with Column II (Standard SI Unit):\nColumn I:\nA. Electric Current\nB. Potential Difference\nC. Resistance\nD. Resistivity\nColumn II:\n1. Ampere (A)\n2. Volt (V)\n3. Ohm (ohm)\n4. Ohm-meter (ohm-m)\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Current-Ampere, Potential-Volt, Resistance-Ohm, Resistivity-Ohm-meter."
      },
      {
        question: "Match Column I (Refractive index context) with Column II (Approximate value):\nColumn I:\nA. Water\nB. Glass (crown)\nC. Diamond\nD. Vacuum / Air\nColumn II:\n1. 1.33\n2. 1.52\n3. 2.42\n4. 1.00\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Water-1.33, Glass-1.52, Diamond-2.42, Vacuum-1.00."
      },
      {
        question: "Match Column I (Phenomenon) with Column II (Optics Principle):\nColumn I:\nA. Formation of Rainbow\nB. Sparkling Diamond\nC. Sky color Blue\nD. Pool depth appearing shallow\nColumn II:\n1. Dispersion & Reflection\n2. Total Internal Reflection\n3. Scattering\n4. Refraction\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Rainbow-Dispersion, Diamond-TIR, Sky blue-Scattering, Pool shallow-Refraction."
      },
      {
        question: "Match Column I (Gland in human body) with Column II (Secreted Hormone):\nColumn I:\nA. Thyroid Gland\nB. Pancreas Gland\nC. Adrenal Gland\nD. Pituitary Gland\nColumn II:\n1. Thyroxine\n2. Insulin\n3. Adrenaline\n4. Growth Hormone\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Thyroid-Thyroxine, Pancreas-Insulin, Adrenal-Adrenaline, Pituitary-Growth Hormone."
      },
      {
        question: "Match Column I (Chemical Reaction type) with Column II (Example Equation):\nColumn I:\nA. Combination Reaction\nB. Decomposition\nC. Displacement\nD. Neutralization\nColumn II:\n1. C + O2 -> CO2\n2. CaCO3 -> CaO + CO2\n3. Fe + CuSO4 -> FeSO4 + Cu\n4. HCl + NaOH -> NaCl + H2O\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Combination-CO2, Decomposition-CaCO3, Displacement-Fe/CuSO4, Neutralization-HCl/NaOH."
      }
    ]
  }
};
