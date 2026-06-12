window.studyContent = window.studyContent || {};

window.studyContent.geography = {
  title: "Rajasthan Geography (राजस्थान का भूगोल)",
  desc: "Detailed coaching-replacement guide on Physical Divisions, Koppen's Climate, Drainage Systems, Mineral Resources, and Census 2011 demographics.",
  
  // LEVEL 1: FOUNDATION (Intro + Detailed Theory)
  level1: {
    intro: `
      <div class="alert-box info">
        <strong>Paper-I Syllabus Scope:</strong>
        <p>Rajasthan physical structures (Western plains, Aravali, Eastern plains, Hadoti), Climate zones, Drainage systems (Chambal, Luni, Mahi), Mineral resources, and Census 2011 numbers ko basic se advanced competitive exam depth mein target karta hai.</p>
      </div>
    `,
    theory: `
      <h2>1. Physical Divisions of Rajasthan</h2>
      <p>Rajasthan is divided into <strong>4 distinct physical divisions</strong>:</p>
      <ul class="notes-list">
        <li><strong>Western Sandy Plains (61.11% area, 40% population):</strong> Thar desert area. Rain falls between 20-50 cm. Features shifting crescent sand dunes called **Barkhans**. Isohyet line 25 cm divides the desert into Arid and Semi-Arid regions.</li>
        <li><strong>Aravalli Mountain Range (9% area, 10% population):</strong> Pre-Cambrian old folded mountains. Runs SW to NE (550 km in Rajasthan). Highest peak is <strong>Guru Shikhar (1722m)</strong> at Sirohi, called 'Summit of Saints' by Col. Tod.</li>
        <li><strong>Eastern Plains (23% area, 39% population):</strong> Highly fertile alluvial deposits. Drained by Banas, Chambal, and Mahi. Includes **Chhappan Plain** (between Banswara & Pratapgarh).</li>
        <li><strong>South-Eastern Hadoti Plateau (6.89% area, 11% population):</strong> Volcanic Deccan lava basalt. Regur black soil, ideal for cotton.</li>
      </ul>

      <h3>Koppen's Climate Classification</h3>
      <p>Koppen classifies Rajasthan into 4 vegetation-based climate zones:</p>
      <ul class="notes-list">
        <li><strong>BWhw (Arid/Desert):</strong> Jaisalmer, Bikaner, Western Barmer. Vegetation: Xerophytes.</li>
        <li><strong>BShw (Semi-Arid/Steppe):</strong> Jodhpur, Pali, Nagaur, Shekhawati. Vegetation: Steppe grass.</li>
        <li><strong>Cwg (Sub-Humid/Monsoon):</strong> Alwar, Bharatpur, Jaipur, Tonk. Vegetation: Deciduous.</li>
        <li><strong>Aw (Humid/Tropical):</strong> Banswara, Dungarpur, Jhalawar, Mt. Abu. Vegetation: Evergreen forests.</li>
      </ul>

      <h3>2. Drainage Systems (Rivers & Lakes)</h3>
      <ul class="notes-list">
        <li><strong>Inland Drainage (60.2%):</strong> Rivers that do not reach any ocean (e.g., Ghaggar, Kantli, Kakney, Sabi).</li>
        <li><strong>Arabian Sea Drainage (17.4%):</strong> Luni (salty after Balotra), Mahi (cuts Tropic of Cancer twice in 'U' shape), Sabarmati.</li>
        <li><strong>Bay of Bengal Drainage (22.4%):</strong> Chambal (badland topography/ravines), Banas (longest river fully in Rajasthan), Banganga.</li>
      </ul>

      <h3>3. Mineral Resources & Demographics</h3>
      <ul class="notes-list">
        <li><strong>Monopoly Minerals:</strong> Jasper, Wollastonite, Zinc, Lead.</li>
        <li><strong>Crude Oil:</strong> Barmer-Sanchore basin (Mangala, Bhagyam, Aishwarya oil fields).</li>
        <li><strong>Demographics (Census 2011):</strong> Total Pop: 6.85 Cr. Density: 200/sq km (Highest: Jaipur 595, Lowest: Jaisalmer 17). Sex Ratio: 928 (Highest: Dungarpur 994). Literacy: 66.1% (Highest: Kota 76.6%, Lowest: Jalore 54.9%).</li>
      </ul>
    `
  },
  
  // LEVEL 2: EXAM READY (Formulas + Shortcut Tricks + 15 Solved Problems)
  level2: {
    formulas: `
      <table class="notes-table">
        <thead>
          <tr>
            <th>Parameter / Feature</th>
            <th>Value / Metric</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Total Geographical Area</strong></td>
            <td>3,42,239 sq. km (10.41% of India).</td>
          </tr>
          <tr>
            <td><strong>International Border (Redcliffe)</strong></td>
            <td>1,070 km (Jaisalmer: 464km, Barmer: 228km, Bikaner: 168km, Sriganganagar: 210km).</td>
          </tr>
          <tr>
            <td><strong>Interstate Border length</strong></td>
            <td>4,850 km (Longest: MP 1600km, Shortest: Punjab 89km).</td>
          </tr>
          <tr>
            <td><strong>Guru Shikhar Height</strong></td>
            <td>1722 meters (1727m if temple flag is added).</td>
          </tr>
        </tbody>
      </table>
    `,
    shortcuts: `
      <ul class="notes-list">
        <li><strong>Trick 1 (Highest Aravalli Peaks):</strong> Mnemonic: <em>Guru se Dil se Zara Achha Raghunath Rishi</em> $\rightarrow$ <strong>Guru</strong> Shikhar (1722m) $\rightarrow$ <strong>Se</strong>r (1597m) $\rightarrow$ <strong>Dil</strong>wara (1442m) $\rightarrow$ <strong>Jarga</strong> (1431m) $\rightarrow$ <strong>Achal</strong>garh (1380m).</li>
        <li><strong>Trick 2 (Koppen's codes SW to NE):</strong> Aw (South) $\rightarrow$ Cwg (East) $\rightarrow$ BShw (Mid-West) $\rightarrow$ BWhw (Far West).</li>
        <li><strong>Trick 3 (Balotra Luni salinity):</strong> Luni river starts fresh from Pushkar (called Sargamati), but turns saline after crossing Balotra (Barmer) due to high sodium chloride contents in desert soil.</li>
      </ul>
    `,
    solved: {
      easy: [
        {
          question: "Calculate the total percentage of India's geographical area occupied by Rajasthan.",
          solution: "Total area of India = 32,87,263 sq. km.\n- Total area of Rajasthan = 3,42,239 sq. km.\n- Percentage = $\\frac{3,42,239}{32,87,263} \\times 100 \\approx$ <strong>10.41%</strong>.\nAnswer: <strong>10.41%</strong>."
        },
        {
          question: "Which district shares the longest border with Pakistan (international border)?",
          solution: "International border shares in Rajasthan:\n- Jaisalmer: 464 km\n- Barmer: 228 km\n- Sriganganagar: 210 km\n- Bikaner: 168 km.\nAnswer: <strong>Jaisalmer (464 km)</strong>."
        },
        {
          question: "Classify the Aravalli peaks in descending order of their heights: Achalgarh, Dilwara, Ser, Guru Shikhar.",
          solution: "Using peak heights:\n- Guru Shikhar: 1722m\n- Ser: 1597m\n- Dilwara: 1442m\n- Achalgarh: 1380m.\nDescending order: <strong>Guru Shikhar > Ser > Dilwara > Achalgarh</strong>."
        },
        {
          question: "Identify the directed rainfall type 'Mawat' in Rajasthan.",
          solution: "Mawat is the rainfall occurring during winter season caused by Western Disturbances originating from the Mediterranean Sea. It is a boon for Rabi crops like wheat.\nAnswer: <strong>Winter rain from Western Disturbances</strong>."
        },
        {
          question: "Find the population density of Jaisalmer district according to Census 2011.",
          solution: "Jaisalmer has the lowest population density in Rajasthan.\n- Value = <strong>17 persons per sq. km</strong>.\nAnswer: <strong>17</strong>."
        }
      ],
      medium: [
        {
          question: "Explain the location and significance of 'Chhappan Plain' (छप्पन का मैदान) in Rajasthan.",
          solution: "Chhappan Plain is located in Southern Rajasthan, between the districts of Banswara and Pratapgarh.\n- It is a fertile plain formed by the Mahi River and its tributaries, containing 56 villages/drainage channels.\n- Do not confuse with 'Chhappan Hills' which are located in Barmer (Siwana region).\nAnswer: <strong>Mahi river plain between Banswara and Pratapgarh</strong>."
        },
        {
          question: "Under Koppen's climate classification, which code represents the steppe grasslands region of Rajasthan, and which districts are included?",
          solution: "Steppe grassland is represented by <strong>BShw (Semi-Arid)</strong>.\n- Included districts: Jodhpur, Nagaur, Pali, Sikar, Jhunjhunu, Churu.\nAnswer: <strong>BShw</strong>."
        },
        {
          question: "Classify Luni river tributaries based on their origin. Which tributary is the only one originating from Aravalli's western slopes, and which one does not?",
          solution: "- Tributaries originating from Aravalli: Bandri, Sukri, Jawai, Lilri, Mithri.\n- <strong>Jojari:</strong> The only tributary that originates from the plains (Pondlu village, Nagaur) and joins Luni from the right side, not originating from Aravalli.\nAnswer: <strong>Jojari (plain origin, joins from right)</strong>."
        },
        {
          question: "List the 4 dams built on the Chambal River in their chronological order from source to mouth.",
          solution: "Source (MP) to Mouth (UP):\n1. Gandhi Sagar Dam (Mandsaur, MP)\n2. Rana Pratap Sagar Dam (Chittorgarh, Rajasthan)\n3. Jawahar Sagar Dam (Kota, Rajasthan)\n4. Kota Barrage (Kota, Rajasthan - used only for irrigation).\nAnswer: <strong>Gandhi Sagar -> Rana Pratap -> Jawahar Sagar -> Kota Barrage</strong>."
        },
        {
          question: "Calculate the decadal growth rate of Rajasthan's population between 2001 and 2011. Which district had the highest and lowest growth?",
          solution: "- Overall decadal growth rate = <strong>21.3%</strong>.\n- Highest growth district: Barmer (32.5%).\n- Lowest growth district: Ganganagar (10.0%).\nAnswer: <strong>21.3% (Max: Barmer, Min: Ganganagar)</strong>."
        }
      ],
      advanced: [
        {
          question: "Analyze the geological differences between the Aravalli range and the South-Eastern Hadoti plateau in Rajasthan.",
          solution: "- <strong>Aravalli Range:</strong> Part of ancient Gondwanaland. Folded mountain range formed in Pre-Cambrian era. Mostly quartz rocks.\n- <strong>Hadoti Plateau:</strong> Part of Deccan volcanic trap. Created by fissure lava eruptions containing basaltic rocks. Regur clay soils.\nAnswer: <strong>Aravalli is folded Pre-Cambrian Gondwana shield, Hadoti is volcanic basaltic Deccan shield</strong>."
        },
        {
          question: "Evaluate the path of Luni river from its origin to its termination, listing all 6 districts it traverses.",
          solution: "Luni River originates as Sargamati from Nag Pahar (Ajmer).\n- Path: Ajmer $\\rightarrow$ Nagaur $\\rightarrow$ Jodhpur $\\rightarrow$ Pali $\\rightarrow$ Barmer $\\rightarrow$ Jalore.\n- Terminates in the Rann of Kutch (Arabian Sea basin).\nAnswer: <strong>Ajmer, Nagaur, Jodhpur, Pali, Barmer, Jalore</strong>."
        },
        {
          question: "Which petroleum basins in Western Rajasthan are active, and what are the major oil fields in the Barmer-Sanchore basin?",
          solution: "Active petroleum basins: Barmer-Sanchore Basin, Jaisalmer Basin, Bikaner-Nagaur Basin, Vindhyan Basin.\n- Major oil fields in Barmer-Sanchore: <strong>Mangala</strong> (largest onshore field), <strong>Bhagyam</strong>, <strong>Aishwarya</strong>, <strong>Saraswati</strong>, <strong>Rageshwari</strong>.\nAnswer: <strong>Mangala, Bhagyam, Aishwarya, Saraswati fields</strong>."
        },
        {
          question: "Contrast the child sex ratio (0-6 years) with the overall sex ratio of Rajasthan according to Census 2011. Which district has the lowest child sex ratio?",
          solution: "- Overall Sex Ratio: 928 females per 1000 males.\n- Child Sex Ratio (0-6 years): <strong>888</strong> (indicating severe decline).\n- Lowest child sex ratio district: <strong>Jhunjhunu (837)</strong>.\nAnswer: <strong>Overall = 928, Child = 888 (Min: Jhunjhunu)</strong>."
        },
        {
          question: "Explain the cause and impact of saline lakes (Pachpadra, Sambhar, Deedwana) in Rajasthan. What is the source of salt in Pachpadra?",
          solution: "Saline lakes are remnants of the ancient Tethys Sea.\n- Pachpadra (Barmer): Produces high-quality salt (98% NaCl content) collected by Kharwal community using Morli bush.\n- Sambhar (Jaipur/Nagaur/Ajmer): Produces 8.7% of India's total salt.\nAnswer: <strong>Remnants of Tethys Sea. Pachpadra has 98% pure NaCl salt</strong>."
        }
      ]
    }
  },
  
  // LEVEL 3: ADVANCED COMPETITIVE (Comparison Tables + PYQs + Revision Sheet)
  level3: {
    comparisons: `
      <h3>1. Aravalli Range vs South-Eastern Hadoti Plateau</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Aravalli Range</th>
            <th>Hadoti Plateau</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Geological Era</td>
            <td>Pre-Cambrian (Oldest folded mountains).</td>
            <td>Cretaceous (Volcanic Deccan trap basalt).</td>
          </tr>
          <tr>
            <td>Soil Type</td>
            <td>Red Sandy and Grey-Brown soils.</td>
            <td>Black Alluvial Regur soils.</td>
          </tr>
          <tr>
            <td>Area / Population %</td>
            <td>9% Area / 10% Population.</td>
            <td>6.89% Area / 11% Population.</td>
          </tr>
        </tbody>
      </table>

      <h3>2. Arabian Sea vs Bay of Bengal Drainage Systems</h3>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Arabian Sea Drainage</th>
            <th>Bay of Bengal Drainage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Drainage Share</td>
            <td>17.4% of Rajasthan.</td>
            <td>22.4% of Rajasthan.</td>
          </tr>
          <tr>
            <td>Major Rivers</td>
            <td>Luni, Mahi, Sabarmati, West Banas.</td>
            <td>Chambal, Banas, Banganga, Gambhiri.</td>
          </tr>
          <tr>
            <td>Flow Characteristics</td>
            <td>Shorter paths, mostly seasonal (except Mahi).</td>
            <td>Longer paths, perennial streams (Chambal).</td>
          </tr>
        </tbody>
      </table>
    `,
    revision: {
      oneLiners: [
        "<strong>Rajasthan Area:</strong> 3,42,239 sq. km, representing 10.41% of India.",
        "<strong>International Border:</strong> 1070 km Redcliffe line shared with Pakistan.",
        "<strong>Longest Interstate Border:</strong> 1600 km shared with Madhya Pradesh.",
        "<strong>Shortest Interstate Border:</strong> 89 km shared with Punjab.",
        "<strong>Guru Shikhar height:</strong> 1722 meters, located in Sirohi district.",
        "<strong>Barkhans:</strong> Crescent-shaped sand dunes most common in Thar desert.",
        "<strong>25 cm Isohyet:</strong> Divides Thar desert into Arid and Semi-Arid regions.",
        "<strong>50 cm Isohyet:</strong> Acts as boundary water divide running parallel to Aravalli.",
        "<strong>Chhappan Plain:</strong> Located between Banswara and Pratapgarh.",
        "<strong>Chhappan Hills:</strong> Granite hills situated in Siwana, Barmer.",
        "<strong>Mawat cause:</strong> Winter rainfall from Mediterranean Western Disturbances.",
        "<strong>Koppen Aw:</strong> Represents humid tropical region of Banswara/Jhalawar.",
        "<strong>Luni salinity limit:</strong> Luni turns saline after crossing Balotra.",
        "<strong>Jojari river:</strong> Only Luni tributary joining from right side (plains origin).",
        "<strong>Chambal Ravines:</strong> Badland topography caused by soil gully erosion.",
        "<strong>Banas river:</strong> Longest river flowing entirely inside Rajasthan.",
        "<strong>Sambhar Salt share:</strong> Produces 8.7% of India's total salt.",
        "<strong>Pachpadra salt collector:</strong> Kharwal community collects salt using Morli bush.",
        "<strong>Lowest Pop Density:</strong> Jaisalmer (17 persons/sq km).",
        "<strong>Highest Literacy district:</strong> Kota (76.6% literacy rate)."
      ],
      booster: `
        <div class="alert-box note">
          <strong>Rajasthan Geography Booster:</strong>
          <p>For border questions, memorize G-B-B-J sequence SW to NE. For Koppen's, BWhw always refers to Jaisalmer/Bikaner desert core, Aw to humid south. Double check 888 child sex ratio compared to 928 overall.</p>
        </div>
      `
    }
  },
  
  // 50 SYLLABUS SPECIFIC PRACTICE QUESTIONS
  questions: {
    mcqs: [
      {
        id: "geo_m1",
        question: "Which of the following Isohyet lines divides the Thar Desert of Rajasthan into Arid and Semi-Arid zones?",
        options: [
          "10 cm",
          "25 cm",
          "50 cm",
          "75 cm"
        ],
        answer: 1,
        explanation: "25 cm isohyet line Thar desert ko dry arid (Jaisalmer) aur semi-arid steppe (Jodhpur) zones mein divide karti hai. 50 cm line Aravalli ke along runs karti hai."
      },
      {
        id: "geo_m2",
        question: "Under Koppen's climate classification, which code represents the humid tropical regions of Banswara and Jhalawar?",
        options: [
          "BWhw",
          "BShw",
          "Cwg",
          "Aw"
        ],
        answer: 3,
        explanation: "Aw code tropical humid region (Southern/South-Eastern Rajasthan) ko represent karta hai jahan deciduous/evergreen vegetation milti hai."
      },
      {
        id: "geo_m3",
        question: "Which of the following rivers of Rajasthan is classified under the Inland Drainage System?",
        options: [
          "Mahi River",
          "Banas River",
          "Kantli River",
          "Luni River"
        ],
        answer: 2,
        explanation: "Kantli River (origin: Sikar) sand dunes mein dry up ho jati hai (Inland drainage). Banas, Luni, Mahi reach oceans/Yamuna."
      },
      {
        id: "geo_m4",
        question: "According to Census 2011, which district of Rajasthan has the highest population density?",
        options: [
          "Jaipur",
          "Bharatpur",
          "Dausa",
          "Alwar"
        ],
        answer: 0,
        explanation: "Jaipur ki population density 595 persons/sq km hai (highest in Rajasthan). Bharatpur is second (503)."
      },
      {
        id: "geo_m5",
        question: "Which mineral is mined exclusively in Rajasthan, holding 100% of India's total production share?",
        options: [
          "Copper",
          "Wollastonite",
          "Gypsum",
          "Limestone"
        ],
        answer: 1,
        explanation: "Wollastonite and Jasper production mein Rajasthan ki 100% monopoly share hai."
      },
      {
        id: "geo_m6",
        question: "Which range acts as the water divide between the Arabian Sea drainage system and the Bay of Bengal drainage system in Rajasthan?",
        options: [
          "Vindhyan Mountain Range",
          "Aravalli Mountain Range",
          "Mukundara Hills",
          "Hills of Harsh"
        ],
        answer: 1,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Aravalli range Rajasthan mein water divide ka kaam karti hai. Iske west ki rivers Arabian sea aur east ki rivers Bay of Bengal systems mein girti hain."
      },
      {
        id: "geo_m7",
        question: "Which geographical area of Rajasthan has the highest population density?",
        options: [
          "Western Sandy Plains (मरुस्थलीय भाग)",
          "Aravalli Mountain Range (अरावली क्षेत्र)",
          "Eastern Plains (पूर्वी मैदानी भाग)",
          "South-Eastern Hadoti Plateau (हाड़ौती पठार)"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Eastern Plain (पूर्वी मैदान) fertile alluvial soil region hai jahan 23% area mein 39% population rehti hai (highest density)."
      },
      {
        id: "geo_m8",
        question: "What is 'Mawat' (मावठ) in Rajasthan?",
        options: [
          "Dust storm in summers (लू)",
          "Winter rainfall caused by Western Disturbances",
          "Monsoon rainfall from Bay of Bengal branch",
          "Peasant movement of Mewar region"
        ],
        answer: 1,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Winter rain caused by Mediterranean Western disturbances is called Mawat, highly beneficial for wheat crop."
      },
      {
        id: "geo_m9",
        question: "Which of the following river cuts the Tropic of Cancer (कर्क रेखा) twice?",
        options: [
          "Luni River",
          "Chambal River",
          "Mahi River",
          "Banas River"
        ],
        answer: 2,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Mahi River Banswara/Dungarpur boundary cuts Tropic of Cancer (23.5° N) twice in inverted 'U' path."
      },
      {
        id: "geo_m10",
        question: "Which district of Rajasthan has the lowest population density according to Census 2011?",
        options: [
          "Bikaner",
          "Barmer",
          "Churu",
          "Jaisalmer"
        ],
        answer: 3,
        isPYQ: true,
        examYear: "RSSB BCI 2022",
        explanation: "Jaisalmer population density is lowest (17 persons per sq km)."
      },
      {
        id: "geo_m11",
        question: "What is the total length of the international border (Redcliffe Line) of Rajasthan?",
        options: [
          "1070 km",
          "4850 km",
          "5920 km",
          "826 km"
        ],
        answer: 0,
        explanation: "International border Redcliffe line is 1070 km. Total boundary boundary length is 5920 km (Interstate: 4850 km)."
      },
      {
        id: "geo_m12",
        question: "Which of the following peaks is the highest peak of Aravalli in Rajasthan after Guru Shikhar?",
        options: [
          "Dilwara",
          "Jarga",
          "Ser",
          "Achalgarh"
        ],
        answer: 2,
        explanation: "Ser (Sirohi) is the second highest peak with height 1597 meters. Guru Shikhar is first (1722m)."
      },
      {
        id: "geo_m13",
        question: "The river Luni turns saline after crossing which location in Rajasthan?",
        options: [
          "Balotra",
          "Luni Junction",
          "Jalore",
          "Siwana"
        ],
        answer: 0,
        explanation: "Balotra (Barmer) reach karne par Luni saline water hold karti hai due to sodium chloride rich desert sands."
      },
      {
        id: "geo_m14",
        question: "Which communities in Rajasthan collect high-quality salt in Pachpadra lake using Morli bush?",
        options: [
          "Kharwal community",
          "Bhil community",
          "Meena community",
          "Rebari community"
        ],
        answer: 0,
        explanation: "Kharwal community uses Morli bush twigs to crystallize and collect 98% pure NaCl salt at Pachpadra."
      },
      {
        id: "geo_m15",
        question: "Which district of Rajasthan has the lowest literacy rate according to Census 2011?",
        options: [
          "Barmer",
          "Jalore",
          "Pratapgarh",
          "Banswara"
        ],
        answer: 1,
        explanation: "Jalore has the lowest literacy rate (54.9%), while Kota has the highest (76.6%)."
      },
      {
        id: "geo_m16",
        question: "Mangala, Bhagyam, and Aishwarya are major fields associated with which resource in Rajasthan?",
        options: [
          "Zinc mining",
          "Lignite Coal",
          "Crude Petroleum Oil",
          "Copper deposits"
        ],
        answer: 2,
        explanation: "Mangala, Bhagyam, Aishwarya are oil wells located in Barmer-Sanchore petroleum basin."
      },
      {
        id: "geo_m17",
        question: "The plain formed by 56 villages/drainage streams between Pratapgarh and Banswara is named:",
        options: [
          "Hadoti Plain",
          "Chhappan Plain",
          "Banas Basin",
          "Kanthal Plain"
        ],
        answer: 1,
        explanation: "Mahi river basin plain is called Chhappan Plain. Pratapgarh border is also called Kanthal."
      },
      {
        id: "geo_m18",
        question: "Which district of Rajasthan has the highest child sex ratio (0-6 years) according to Census 2011?",
        options: [
          "Banswara",
          "Jhunjhunu",
          "Dungarpur",
          "Udaipur"
        ],
        answer: 0,
        explanation: "Banswara has the highest child sex ratio (934), while Jhunjhunu has the lowest (837). Dungarpur has the highest overall sex ratio (994)."
      },
      {
        id: "geo_m19",
        question: "Which Aravalli peak is located in the Alwar district of North-Eastern Rajasthan?",
        options: [
          "Jarga",
          "Taragarh",
          "Bhairach",
          "Raghunathgarh"
        ],
        answer: 2,
        explanation: "Bhairach (792m) is in Alwar. Raghunathgarh (1055m) is in Sikar. Taragarh (873m) is in Ajmer."
      },
      {
        id: "geo_m20",
        question: "Which river is the longest river flowing entirely inside the borders of Rajasthan?",
        options: [
          "Chambal River",
          "Banas River",
          "Luni River",
          "Mahi River"
        ],
        answer: 1,
        explanation: "Banas is fully inside Rajasthan boundaries (approx 512 km). Chambal is the longest overall but flows in MP, Rajasthan, and UP."
      }
    ],
    conceptual: [
      {
        question: "An analyst evaluates border segments length. Which sequence correctly lists states sharing borders with Rajasthan in increasing order of length?",
        options: [
          "Punjab, UP, Haryana, Gujarat, MP",
          "Punjab, Haryana, UP, Gujarat, MP",
          "MP, Gujarat, Haryana, UP, Punjab",
          "Punjab, UP, Gujarat, Haryana, MP"
        ],
        answer: 0,
        explanation: "Borders lengths shared: Punjab (89km) < UP (877km) < Haryana (1262km) < Gujarat (1022km) < MP (1600km)."
      },
      {
        question: "Identify the Koppen climate zone where vegetation type is Xerophytic (मरुद्भिद) and average rainfall is less than 20 cm.",
        options: [
          "Aw",
          "Cwg",
          "BShw",
          "BWhw"
        ],
        answer: 3,
        explanation: "BWhw represents hyper-arid desert zone where rainfall is extremely low and vegetation has thorns (xerophytic)."
      },
      {
        question: "Explain why the Luni river has saline water in its lower reaches.",
        options: [
          "It originates from saline salt deposits in Ajmer",
          "It flows through soil containing rich sodium chloride deposits after Balotra",
          "Industrial effluents discharge salt contents",
          "Arabian sea tides push salt water upstream"
        ],
        answer: 1,
        explanation: "Pushkar hills origin is fresh. Post Balotra, the river flows through saline soils rich in sodium chloride, making it salty."
      },
      {
        question: "A geography student has to map lakes originating from Tethys Sea remnants. Select the salt lakes of Rajasthan:",
        options: [
          "Sambhar, Pachpadra, Deedwana",
          "Fatehsagar, Jaisamand, Nakki",
          "Sambhar, Pichola, Rajsamand",
          "Nakki, Pushkar, Pachpadra"
        ],
        answer: 0,
        explanation: "Sambhar, Pachpadra, Lunsar, Deedwana are saline lakes which represent remnants of ancient Tethys Sea."
      },
      {
        question: "Calculate the net area percentage of Rajasthan occupied by the Thar Desert (Western Sandy Plains) and its population share.",
        options: [
          "61.11% area, 40% population",
          "9% area, 10% population",
          "23% area, 39% population",
          "6.89% area, 11% population"
        ],
        answer: 0,
        explanation: "Thar desert occupies 61.11% area of Rajasthan, housing 40% of state's total population."
      },
      {
        question: "Differentiate between 'Chhappan Plain' and 'Chhappan Hills' in Rajasthan's geography.",
        options: [
          "Plain is in Banswara-Pratapgarh, Hills are in Barmer",
          "Plain is in Barmer, Hills are in Banswara",
          "Both are situated in the Mewar region",
          "Plain is formed by Luni, Hills by Mahi"
        ],
        answer: 0,
        explanation: "Chhappan Plain is Mahi basin (Banswara/Pratapgarh). Chhappan Hills are granite dome hills in Siwana (Barmer)."
      },
      {
        question: "Which Luni river tributary does not originate from the Aravalli range slopes, and joins from the right bank?",
        options: [
          "Jawai",
          "Sukri",
          "Jojari",
          "Mithri"
        ],
        answer: 2,
        explanation: "Jojari is the only right-bank tributary of Luni. It originates from plains of Pondlu village in Nagaur."
      },
      {
        question: "Arrange the dams of Chambal river from North to South (Mouth to Source):",
        options: [
          "Kota Barrage, Jawahar Sagar, Rana Pratap, Gandhi Sagar",
          "Gandhi Sagar, Rana Pratap, Jawahar Sagar, Kota Barrage",
          "Kota Barrage, Rana Pratap, Jawahar Sagar, Gandhi Sagar",
          "Jawahar Sagar, Kota Barrage, Gandhi Sagar, Rana Pratap"
        ],
        answer: 0,
        explanation: "Mouth (Kota) is North, Source (MP) is South. Sequence: Kota Barrage $\\rightarrow$ Jawahar Sagar $\\rightarrow$ Rana Pratap $\\rightarrow$ Gandhi Sagar."
      },
      {
        question: "According to Census 2011, which districts have the highest and lowest sex ratio in Rajasthan respectively?",
        options: [
          "Dungarpur and Dholpur",
          "Dholpur and Dungarpur",
          "Jaipur and Jaisalmer",
          "Kota and Jalore"
        ],
        answer: 0,
        explanation: "Dungarpur has highest sex ratio (994 females/1000 males), Dholpur has lowest (846 females/1000)."
      },
      {
        question: "Which district of Rajasthan has the highest male and female literacy rates according to Census 2011?",
        options: [
          "Male: Jhunjhunu, Female: Kota",
          "Male: Kota, Female: Jhunjhunu",
          "Male: Jaipur, Female: Jalore",
          "Male: Jhunjhunu, Female: Jalore"
        ],
        answer: 0,
        explanation: "Jhunjhunu has the highest male literacy (86.9%). Kota has the highest female literacy (65.9%)."
      }
    ],
    assertionReason: [
      {
        question: "Assertion (A): Thar Desert is the most populated desert region in the world.\nReason (R): High fertility of alluvial plains and Aravalli resources support populations in Western Rajasthan.\nChoose options:",
        options: [
          "A is true, R is false",
          "A is false, R is true",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 2,
        explanation: "Thar has highest population density among world deserts (A is true). Reason is false because Thar desert has sandy soil, not alluvial plains, and population is supported by canals/livelihoods."
      },
      {
        question: "Assertion (A): Aravalli range acts as a major water divide in Rajasthan.\nReason (R): Rivers on the west of Aravalli drain into the Arabian Sea, while rivers on the east drain into the Bay of Bengal.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Draining direction difference explains why Aravalli acts as the primary water divide."
      },
      {
        question: "Assertion (A): winter rainfall 'Mawat' is called 'Golden Drops' in Rajasthan.\nReason (R): Mawat is highly beneficial for Rabi crops like wheat and mustard during grain filling stage.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Benefits to crops explain why the winter rain is termed 'Golden Drops'."
      },
      {
        question: "Assertion (A): Jaisalmer has the lowest population density in Rajasthan (17/sq km).\nReason (R): Extremely dry climate, lack of drinking water, and sandy desert terrain limit settlements in Jaisalmer.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Desert terrain and water scarcity explain the low density settlements."
      },
      {
        question: "Assertion (A): Jojari is a unique tributary of the Luni River.\nReason (R): Jojari is the only Luni tributary that does not originate from Aravalli range and joins from right bank.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Unique origin and bank side explains the assertion."
      },
      {
        question: "Assertion (A): Black soils (Regur) are found in the Hadoti region of South-Eastern Rajasthan.\nReason (R): Hadoti plateau was geologically formed by basaltic lava flows of Deccan Trap.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Volcanic basalt lava origin explains why black soils are rich in Hadoti region."
      },
      {
        question: "Assertion (A): Sambhar lake produces 8.7% of India's total salt.\nReason (R): Pachpadra lake has the highest salt purity containing 98% sodium chloride.\nChoose options:",
        options: [
          "Both A and R are true but R is NOT the correct explanation of A",
          "Both A and R are true and R is the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Both statements are correct facts. But Pachpadra purity does not explain why Sambhar shares 8.7% of national production."
      },
      {
        question: "Assertion (A): Child sex ratio (0-6 years) is declining alarmingly in Rajasthan (888 in Census 2011).\nReason (R): Female literacy in Rajasthan is lowest in India according to Census 2011.\nChoose options:",
        options: [
          "A is true, R is false",
          "A is false, R is true",
          "Both A and R are true",
          "Both A and R are false"
        ],
        answer: 0,
        explanation: "A is true. R is false because Rajasthan's female literacy (52.1%) is very low but not the lowest in India (Bihar has lowest at 51.5%)."
      },
      {
        question: "Assertion (A): Rajasthan holds a complete monopoly in Jasper and Wollastonite production.\nReason (R): Khetri region of Jhunjhunu is famous for copper mining in Rajasthan.\nChoose options:",
        options: [
          "Both A and R are true but R is NOT the correct explanation of A",
          "Both A and R are true and R is the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Both statements are true. A is true (monopoly in jasper/wollastonite), R is true (Khetri copper). But Khetri copper does not explain jasper monopoly."
      },
      {
        question: "Assertion (A): Chambal river is notorious for its ravine lands (बीहड़).\nReason (R): Perennial flow of Chambal through soft clay soils of Kota/Dholpur causes severe gully erosion.\nChoose options:",
        options: [
          "Both A and R are true and R is the correct explanation of A",
          "Both A and R are true but R is NOT the correct explanation of A",
          "A is true but R is false",
          "A is false but R is true"
        ],
        answer: 0,
        explanation: "Gully clay soil erosion explains why ravine lands are formed."
      }
    ],
    matchFollowing: [
      {
        question: "Match Column I (Physical Divisions) with Column II (Area Share %):\nColumn I:\nA. Western Sandy Plains\nB. Aravalli Range\nC. Eastern Plains\nD. South-Eastern Hadoti Plateau\nColumn II:\n1. 61.11%\n2. 9.00%\n3. 23.00%\n4. 6.89%\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Western-61.11%(1), Aravalli-9%(2), Eastern-23%(3), Hadoti-6.89%(4)."
      },
      {
        question: "Match Column I (Aravalli Peak) with Column II (District):\nColumn I:\nA. Guru Shikhar\nB. Ser\nC. Jarga\nD. Raghunathgarh\nColumn II:\n1. Sirohi\n2. Udaipur\n3. Sikar\nChoose option combination:",
        options: [
          "A-1, B-1, C-2, D-3",
          "A-1, B-2, C-1, D-3",
          "A-2, B-1, C-3, D-1",
          "A-3, B-2, C-1, D-1"
        ],
        answer: 0,
        explanation: "Guru Shikhar-Sirohi(1), Ser-Sirohi(1), Jarga-Udaipur(2), Raghunathgarh-Sikar(3)."
      },
      {
        question: "Match Column I (Koppen Climate Code) with Column II (Districts representation):\nColumn I:\nA. BWhw\nB. BShw\nC. Cwg\nD. Aw\nColumn II:\n1. Jaisalmer / Bikaner\n2. Jodhpur / Nagaur\n3. Jaipur / Alwar\n4. Banswara / Jhalawar\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "BWhw-Jaisalmer(1), BShw-Jodhpur(2), Cwg-Jaipur(3), Aw-Banswara(4)."
      },
      {
        question: "Match Column I (River) with Column II (Origin):\nColumn I:\nA. Chambal\nB. Banas\nC. Mahi\nD. Luni\nColumn II:\n1. Janapav Hills (MP)\n2. Khamnor Hills (Rajsamand)\n3. Ammoru Hills (MP)\n4. Nag Pahar (Ajmer)\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Chambal-Janapav(1), Banas-Khamnor(2), Mahi-Ammoru(3), Luni-Nag Pahar(4)."
      },
      {
        question: "Match Column I (Dams) with Column II (District location):\nColumn I:\nA. Rana Pratap Sagar\nB. Jawahar Sagar\nC. Mahi Bajaj Sagar\nD. Bisalpur Dam\nColumn II:\n1. Chittorgarh\n2. Kota / Bundi\n3. Banswara\n4. Tonk\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Rana Pratap-Chittorgarh(1), Jawahar Sagar-Kota(2), Mahi Bajaj-Banswara(3), Bisalpur-Tonk(4)."
      },
      {
        question: "Match Column I (Census 2011 Metric) with Column II (District representing Max/Min):\nColumn I:\nA. Highest Pop Density\nB. Lowest Pop Density\nC. Highest Sex Ratio\nD. Lowest Sex Ratio\nColumn II:\n1. Jaipur\n2. Jaisalmer\n3. Dungarpur\n4. Dholpur\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Max density-Jaipur(1), Min density-Jaisalmer(2), Max sex ratio-Dungarpur(3), Min sex ratio-Dholpur(4)."
      },
      {
        question: "Match Column I (Minerals) with Column II (Mining area):\nColumn I:\nA. Copper\nB. Lead & Zinc\nC. Rock Phosphate\nD. Lignite Coal\nColumn II:\n1. Khetri (Jhunjhunu)\n2. Zawar (Udaipur)\n3. Jhamarkotra (Udaipur)\n4. Palana (Bikaner)\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Copper-Khetri(1), Lead-Zawar(2), Rock Phosphate-Jhamarkotra(3), Lignite-Palana(4)."
      },
      {
        question: "Match Column I (Rivers categorisation) with Column II (Drainage system):\nColumn I:\nA. Luni / Mahi\nB. Banas / Chambal\nC. Ghaggar / Kantli\nColumn II:\n1. Arabian Sea drainage\n2. Bay of Bengal drainage\n3. Inland drainage\nChoose option combination:",
        options: [
          "A-1, B-2, C-3",
          "A-2, B-1, C-3",
          "A-1, B-3, C-2",
          "A-3, B-2, C-1"
        ],
        answer: 0,
        explanation: "Luni/Mahi-Arabian(1), Banas/Chambal-Bay of Bengal(2), Ghaggar/Kantli-Inland(3)."
      },
      {
        question: "Match Column I (Aravalli Peak) with Column II (Height in meters):\nColumn I:\nA. Guru Shikhar\nB. Ser\nC. Dilwara\nD. Jarga\nColumn II:\n1. 1722 m\n2. 1597 m\n3. 1442 m\n4. 1431 m\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Guru-1722(1), Ser-1597(2), Dilwara-1442(3), Jarga-1431(4)."
      },
      {
        question: "Match Column I (State sharing border) with Column II (Border length shared):\nColumn I:\nA. Punjab\nB. Madhya Pradesh\nC. Haryana\nD. Gujarat\nColumn II:\n1. 89 km\n2. 1600 km\n3. 1262 km\n4. 1022 km\nChoose option combination:",
        options: [
          "A-1, B-2, C-3, D-4",
          "A-2, B-1, C-4, D-3",
          "A-3, B-4, C-1, D-2",
          "A-4, B-3, C-2, D-1"
        ],
        answer: 0,
        explanation: "Punjab-89(1), MP-1600(2), Haryana-1262(3), Gujarat-1022(4)."
      }
    ]
  }
};
