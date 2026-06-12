/**
 * RSSB 2026 Basic Computer Instructor Prep Hub Controller
 * Manages study notes rendering, interactive quizzes, progress tracking,
 * and custom mock test generation with 1/3 negative marking.
 */

(function () {
  // Global App State
  const state = {
    currentTab: 'dashboard',      // Active main tab
    currentSubTab: 'level1',      // Active sub-tab under notes view ('level1', 'level2', 'level3', or 'practice')
    activeTopic: null,            // Current topic loaded in notes view
    activeTopicQuestions: [],     // Flat list of questions for active topic quiz
    completedTopics: {},          // Map of topicId -> boolean (completion status)
    quizAnswers: {},              // User selections for the active topic quiz: {qIdx: selectedOptIdx}
    quizGraded: false,            // Has the active topic quiz been submitted?
    activePaperNav: 1,            // Currently visible paper nav group: 1 or 2
    
    // Mock Exam State
    mockExam: {
      inProgress: false,
      questions: [],              // Selected questions for active mock
      answers: {},                // User selections: {qId: selectedOptIdx}
      timerId: null,
      timeLeft: 0,                // in seconds
      totalQuestions: 0
    },
    
    // Study Session Timer
    sessionSeconds: 0,
    sessionTimerId: null
  };

  // DOM Elements
  const DOM = {
    sidebar: document.getElementById('sidebar'),
    menuToggle: document.getElementById('menu-toggle'),
    navItems: document.querySelectorAll('.nav-item'),
    breadcrumbs: {
      subject: document.getElementById('breadcrumb-subject'),
      topic: document.getElementById('breadcrumb-topic')
    },
    studyTimer: document.getElementById('study-timer'),
    overallProgressFill: document.getElementById('overall-progress-fill'),
    overallProgressPercent: document.getElementById('overall-progress-percent'),
    
    // Paper selector buttons in sidebar
    btnShowPaper1: document.getElementById('btn-show-paper1'),
    btnShowPaper2: document.getElementById('btn-show-paper2'),
    paper1NavGroup: document.getElementById('paper1-nav-group'),
    paper2NavGroup: document.getElementById('paper2-nav-group'),

    // Dashboard Stats
    p1CompletedCount: document.getElementById('p1-completed-count'),
    p2CompletedCount: document.getElementById('p2-completed-count'),
    p1ProgressFill: document.getElementById('p1-progress-fill'),
    p2ProgressFill: document.getElementById('p2-progress-fill'),
    badgeP1: document.getElementById('badge-p1'),
    badgeP2: document.getElementById('badge-p2'),
    statsTopicsCompleted: document.getElementById('stats-topics-completed'),
    statsMocksTaken: document.getElementById('stats-mocks-taken'),
    statsAccuracy: document.getElementById('stats-accuracy'),
    
    // Views
    dashboardView: document.getElementById('dashboard-view'),
    subjectNotesView: document.getElementById('subject-notes-view'),
    quizEngineView: document.getElementById('quiz-engine-view'),
    
    // Subject Note Viewer Pane
    notesTitle: document.getElementById('notes-title'),
    notesDesc: document.getElementById('notes-desc'),
    tabBtnLevel1: document.getElementById('tab-btn-level1'),
    tabBtnLevel2: document.getElementById('tab-btn-level2'),
    tabBtnLevel3: document.getElementById('tab-btn-level3'),
    tabBtnPractice: document.getElementById('tab-btn-practice'),
    level1Pane: document.getElementById('level1-pane'),
    level2Pane: document.getElementById('level2-pane'),
    level3Pane: document.getElementById('level3-pane'),
    practicePane: document.getElementById('practice-pane'),
    level1Content: document.getElementById('level1-content'),
    level2Content: document.getElementById('level2-content'),
    level3Content: document.getElementById('level3-content'),
    
    // Practice Pane inside Subject
    practiceTitle: document.getElementById('practice-title'),
    quizScore: document.getElementById('quiz-score'),
    quizTotalQ: document.getElementById('quiz-total-q'),
    quizQuestionsContainer: document.getElementById('quiz-questions-container'),
    btnSubmitQuiz: document.getElementById('btn-submit-quiz'),
    btnResetQuiz: document.getElementById('btn-reset-quiz'),
    
    // Mock Exam Engine
    mockConfigPane: document.querySelector('.mock-engine-config'),
    activeMockPane: document.getElementById('active-mock-exam'),
    resultsMockPane: document.getElementById('mock-exam-results'),
    activeExamTitle: document.getElementById('active-exam-title'),
    mockTimerDisplay: document.getElementById('mock-timer-display'),
    mockAnsweredCount: document.getElementById('mock-answered-count'),
    mockTotalCount: document.getElementById('mock-total-count'),
    mockQuestionsContainer: document.getElementById('mock-questions-container'),
    mockResultsSolutionsContainer: document.getElementById('mock-results-solutions-container'),
    
    // Result screen fields
    resultScoreDisplay: document.getElementById('result-score-display'),
    resultOutOf: document.getElementById('result-out-of'),
    resultTotalQ: document.getElementById('result-total-q'),
    resultCorrectQ: document.getElementById('result-correct-q'),
    resultIncorrectQ: document.getElementById('result-incorrect-q'),
    resultUnattemptedQ: document.getElementById('result-unattempted-q'),
    resultAccuracy: document.getElementById('result-accuracy'),
    
    // Theme
    themeToggle: document.getElementById('theme-toggle'),
    sidebarOverlay: document.getElementById('sidebar-overlay')
  };

  // List of all syllabus topics for checking completion
  const PAPER1_TOPICS = ['geography', 'history_culture', 'current_affairs', 'general_science', 'reasoning', 'numeracy', 'data_interpretation'];
  const PAPER2_TOPICS = ['p2_fundamentals', 'p2_programming_dsa', 'p2_core_cs', 'p2_networking_security', 'p2_dbms_sad_iot', 'p2_pedagogy_mental'];
  const ALL_TOPICS = [...PAPER1_TOPICS, ...PAPER2_TOPICS];

  // Map of topicId to its parent subject division
  const TOPIC_TO_SUBJECT = {
    geography: 'rajasthan_gk',
    history_culture: 'rajasthan_gk',
    current_affairs: 'rajasthan_gk',
    general_science: 'general_science',
    reasoning: 'general_ability',
    numeracy: 'general_ability',
    data_interpretation: 'general_ability',
    p2_fundamentals: 'computer_science',
    p2_programming_dsa: 'computer_science',
    p2_core_cs: 'computer_science',
    p2_networking_security: 'computer_science',
    p2_dbms_sad_iot: 'computer_science',
    p2_pedagogy_mental: 'pedagogy'
  };

  // ==========================================
  // INITIALIZATION & STATS LOGIC
  // ==========================================
  
  function init() {
    // 1. Load data from localStorage
    loadProgress();

    // 2. Setup Study Timer
    startStudyTimer();

    // 3. Bind UI event listeners
    setupEventListeners();

    // 4. Update all dashboard metrics
    updateMetrics();

    // 5. Handle initial route (checking hash)
    handleRouting();
    
    // Attach interface to window for HTML event handlers
    window.app = {
      navigateToTab,
      toggleTopicCompletion,
      switchSubjectSubTab,
      toggleCurrentTopicCheck,
      gradeQuiz,
      resetQuiz,
      startQuickMock,
      generateMockTest,
      confirmEndMock,
      resetToConfig,
      selectMockOption,
      selectPracticeOption,
      togglePaperNav
    };
  }

  function loadProgress() {
    // Load completed topics
    const savedCompleted = localStorage.getItem('rssb_completed_topics');
    if (savedCompleted) {
      try {
        state.completedTopics = JSON.parse(savedCompleted);
      } catch (e) {
        state.completedTopics = {};
      }
    }
    // Sync checkboxes
    ALL_TOPICS.forEach(topicId => {
      const chk = document.getElementById(`chk-${topicId}`);
      if (chk) {
        chk.checked = !!state.completedTopics[topicId];
      }
    });

    // Load mock test counts
    const savedMocks = localStorage.getItem('rssb_mocks_taken');
    if (savedMocks) {
      DOM.statsMocksTaken.textContent = savedMocks;
    }
    
    // Load average accuracy
    const savedAccuracy = localStorage.getItem('rssb_avg_accuracy');
    if (savedAccuracy) {
      DOM.statsAccuracy.textContent = savedAccuracy + '%';
    }
  }

  function startStudyTimer() {
    state.sessionSeconds = 0;
    state.sessionTimerId = setInterval(() => {
      state.sessionSeconds++;
      const hrs = String(Math.floor(state.sessionSeconds / 3600)).padStart(2, '0');
      const mins = String(Math.floor((state.sessionSeconds % 3600) / 60)).padStart(2, '0');
      const secs = String(state.sessionSeconds % 60).padStart(2, '0');
      DOM.studyTimer.textContent = `${hrs}:${mins}:${secs}`;
    }, 1000);
  }

  function updateMetrics() {
    // Count completions per Paper
    let p1Completed = 0;
    let p2Completed = 0;

    PAPER1_TOPICS.forEach(topicId => {
      if (state.completedTopics[topicId]) p1Completed++;
    });

    PAPER2_TOPICS.forEach(topicId => {
      if (state.completedTopics[topicId]) p2Completed++;
    });

    const totalCompleted = p1Completed + p2Completed;

    // Update Dashboard Counts
    DOM.p1CompletedCount.textContent = p1Completed;
    DOM.p2CompletedCount.textContent = p2Completed;

    // Calculate Percentages
    const p1Pct = Math.round((p1Completed / PAPER1_TOPICS.length) * 100);
    const p2Pct = Math.round((p2Completed / PAPER2_TOPICS.length) * 100);
    const overallPct = Math.round((totalCompleted / ALL_TOPICS.length) * 100);

    // Update DOM bar elements
    DOM.p1ProgressFill.style.width = `${p1Pct}%`;
    DOM.p2ProgressFill.style.width = `${p2Pct}%`;
    DOM.overallProgressFill.style.width = `${overallPct}%`;
    DOM.overallProgressPercent.textContent = `${overallPct}%`;

    // Update badges
    DOM.badgeP1.textContent = `${p1Pct}%`;
    DOM.badgeP2.textContent = `${p2Pct}%`;

    // Strategy Panel metrics
    DOM.statsTopicsCompleted.textContent = `${totalCompleted} / ${ALL_TOPICS.length}`;
  }

  // ==========================================
  // NAVIGATION & PAPER SELECTOR
  // ==========================================
  
  function togglePaperNav(paperNum) {
    state.activePaperNav = paperNum;
    if (paperNum === 1) {
      DOM.btnShowPaper1.classList.add('active');
      DOM.btnShowPaper2.classList.remove('active');
      DOM.paper1NavGroup.style.display = 'block';
      DOM.paper2NavGroup.style.display = 'none';
    } else {
      DOM.btnShowPaper1.classList.remove('active');
      DOM.btnShowPaper2.classList.add('active');
      DOM.paper1NavGroup.style.display = 'none';
      DOM.paper2NavGroup.style.display = 'block';
    }
  }

  function setupEventListeners() {
    const closeSidebar = () => {
      DOM.sidebar.classList.remove('mobile-open');
      if (DOM.sidebarOverlay) {
        DOM.sidebarOverlay.classList.remove('active');
      }
    };

    // Navigation items click handling
    DOM.navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const tab = item.getAttribute('data-tab');
        navigateToTab(tab);
        
        // Hide mobile drawer if open
        closeSidebar();
      });
    });

    // Theme Toggle
    DOM.themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-theme');
      const darkIcon = DOM.themeToggle.querySelector('.theme-dark-icon');
      const lightIcon = DOM.themeToggle.querySelector('.theme-light-icon');
      
      if (isDark) {
        darkIcon.style.display = 'inline-flex';
        lightIcon.style.display = 'none';
      } else {
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'inline-flex';
      }
    });

    // Mobile Hamburger Menu Toggle
    DOM.menuToggle.addEventListener('click', () => {
      const isOpen = DOM.sidebar.classList.toggle('mobile-open');
      if (DOM.sidebarOverlay) {
        DOM.sidebarOverlay.classList.toggle('active', isOpen);
      }
    });

    // Close mobile drawer when clicking content area
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (DOM.sidebar.classList.contains('mobile-open') && !DOM.menuToggle.contains(e.target)) {
        closeSidebar();
      }
    });

    // Close mobile drawer when clicking overlay backdrop
    if (DOM.sidebarOverlay) {
      DOM.sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // Window Popstate for back-button support
    window.addEventListener('hashchange', handleRouting);
  }

  function handleRouting() {
    let hash = window.location.hash.substring(1).replace(/-/g, '_');
    if (!hash || hash === 'dashboard') {
      navigateToTab('dashboard', false);
    } else if (hash === 'quiz_engine') {
      navigateToTab('quiz_engine', false);
    } else if (ALL_TOPICS.includes(hash)) {
      // Auto toggle paper nav group based on topic selected
      if (PAPER2_TOPICS.includes(hash)) {
        togglePaperNav(2);
      } else {
        togglePaperNav(1);
      }
      navigateToTab(hash, false);
    } else {
      navigateToTab('dashboard', false);
    }
  }

  function navigateToTab(tabId, updateHash = true) {
    if (updateHash) {
      window.location.hash = (tabId === 'dashboard') ? 'dashboard' : (tabId === 'quiz_engine') ? 'quiz-engine' : tabId.replace(/_/g, '-');
    }

    // Update Active Nav Element
    DOM.navItems.forEach(item => {
      if (item.getAttribute('data-tab') === tabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Hide all views first
    DOM.dashboardView.classList.remove('active-view');
    DOM.subjectNotesView.classList.remove('active-view');
    DOM.quizEngineView.classList.remove('active-view');

    state.currentTab = tabId;

    if (tabId === 'dashboard') {
      DOM.dashboardView.classList.add('active-view');
      DOM.breadcrumbs.subject.textContent = 'RSSB 2026';
      DOM.breadcrumbs.topic.textContent = 'Dashboard';
      DOM.breadcrumbs.topic.classList.add('active');
      
      // Update stats from storage in case they changed
      loadProgress();
      updateMetrics();
    } 
    else if (tabId === 'quiz_engine') {
      DOM.quizEngineView.classList.add('active-view');
      DOM.breadcrumbs.subject.textContent = 'Practice Hub';
      DOM.breadcrumbs.topic.textContent = 'Mock Exam Generator';
      DOM.breadcrumbs.topic.classList.add('active');
    } 
    else if (ALL_TOPICS.includes(tabId)) {
      DOM.subjectNotesView.classList.add('active-view');
      loadTopicData(tabId);
    }
  }

  // ==========================================
  // CHECKLIST PROGRESS TRACKING
  // ==========================================

  function toggleTopicCompletion(topicId) {
    const chk = document.getElementById(`chk-${topicId}`);
    if (chk) {
      state.completedTopics[topicId] = chk.checked;
      localStorage.setItem('rssb_completed_topics', JSON.stringify(state.completedTopics));
      updateMetrics();
    }
  }

  function toggleCurrentTopicCheck() {
    if (!state.activeTopic) return;
    const topicId = state.activeTopic;
    state.completedTopics[topicId] = !state.completedTopics[topicId];
    
    // Sync dashboard checkbox
    const chk = document.getElementById(`chk-${topicId}`);
    if (chk) {
      chk.checked = state.completedTopics[topicId];
    }
    
    localStorage.setItem('rssb_completed_topics', JSON.stringify(state.completedTopics));
    updateMetrics();

    // Alert toast notification equivalent
    alert(`Topic marked as ${state.completedTopics[topicId] ? 'READ' : 'UNREAD'}! Check your progress on the Dashboard.`);
  }

  // ==========================================
  // NOTES & PRACTICE TOPIC LOADING
  // ==========================================

  function loadTopicData(topicId) {
    state.activeTopic = topicId;
    
    // Get details from window.studyContent
    const content = window.studyContent[topicId];
    if (!content) {
      DOM.notesTitle.textContent = "Under Construction";
      DOM.notesDesc.textContent = "We are preparing highly rich notes for this chapter.";
      DOM.level1Content.innerHTML = "<p>Dheere dheere yahan notes update ho rahe hain. Kripya doosre active topics padhein.</p>";
      DOM.level2Content.innerHTML = "<p>Dheere dheere yahan notes update ho rahe hain. Kripya doosre active topics padhein.</p>";
      DOM.level3Content.innerHTML = "<p>Dheere dheere yahan notes update ho rahe hain. Kripya doosre active topics padhein.</p>";
      
      // Hide practice tab
      DOM.tabBtnPractice.style.display = 'none';
      return;
    }

    DOM.tabBtnPractice.style.display = 'inline-flex';
    
    // Update header info
    const subjectCode = TOPIC_TO_SUBJECT[topicId];
    let subjectName = 'General';
    if (subjectCode === 'rajasthan_gk') subjectName = 'Paper-I / Rajasthan GK';
    else if (subjectCode === 'general_science') subjectName = 'Paper-I / Science';
    else if (subjectCode === 'general_ability') subjectName = 'Paper-I / Ability';
    else if (subjectCode === 'computer_science') subjectName = 'Paper-II / Tech CS';
    else if (subjectCode === 'pedagogy') subjectName = 'Paper-II / Pedagogy';
                        
    DOM.breadcrumbs.subject.textContent = subjectName;
    DOM.breadcrumbs.topic.textContent = content.title.split(' (')[0]; // only English title for breadcrumb
    DOM.breadcrumbs.topic.classList.add('active');

    // Populate Notes
    DOM.notesTitle.textContent = content.title;
    DOM.notesDesc.textContent = content.desc;

    // Handle backwards compatibility for single notes or level-based structure
    if (content.level1) {
      DOM.level1Content.innerHTML = content.level1.theory || content.level1.intro || '';
      
      // Level 2 compilation
      let lvl2HTML = '';
      if (content.level2) {
        if (content.level2.formulas) lvl2HTML += `<h2>Formulas & Key Rules</h2><div>${content.level2.formulas}</div>`;
        if (content.level2.shortcuts) lvl2HTML += `<h2>Shortcut Tricks & Concept Boosters</h2><div>${content.level2.shortcuts}</div>`;
        if (content.level2.solved) {
          lvl2HTML += `<h2>15 Solved Problems (5 Easy, 5 Medium, 5 Advanced)</h2>`;
          const levels = ['easy', 'medium', 'advanced'];
          levels.forEach(lvl => {
            const list = content.level2.solved[lvl] || [];
            if (list.length > 0) {
              lvl2HTML += `<h3>${lvl.charAt(0).toUpperCase() + lvl.slice(1)} Problems</h3>`;
              list.forEach((prob, pIdx) => {
                lvl2HTML += `
                  <div class="example-box">
                    <span class="example-badge">${lvl} - Problem ${pIdx + 1}</span>
                    <div class="example-question">${prob.question}</div>
                    <div class="example-solution">
                      <strong>Detailed Hinglish Solution:</strong>
                      ${prob.solution}
                    </div>
                  </div>
                `;
              });
            }
          });
        }
      }
      DOM.level2Content.innerHTML = lvl2HTML || "<p class='text-secondary'>Level 2: Exam Ready material (Formulas & Solved Problems) is arriving soon.</p>";
      
      // Level 3 compilation
      let lvl3HTML = '';
      if (content.level3) {
        if (content.level3.comparisons) lvl3HTML += `<h2>Comparison & Contrast Tables</h2><div>${content.level3.comparisons}</div>`;
        if (content.level3.revision) {
          lvl3HTML += `<h2>Quick Revision Sheet & Exam Boosters</h2>`;
          if (content.level3.revision.oneLiners) {
            lvl3HTML += `<h3>High-Yield One-Liners</h3><ul class="notes-list">`;
            content.level3.revision.oneLiners.forEach(line => {
              lvl3HTML += `<li>${line}</li>`;
            });
            lvl3HTML += `</ul>`;
          }
          if (content.level3.revision.booster) {
            lvl3HTML += `<h3>Exam Booster Notes</h3><div>${content.level3.revision.booster}</div>`;
          }
        }
      }
      DOM.level3Content.innerHTML = lvl3HTML || "<p class='text-secondary'>Level 3: Advanced material (Comparisons & Revision Sheets) is arriving soon.</p>";
    } else {
      // Backwards compatibility for flat notes structure
      DOM.level1Content.innerHTML = content.notes || '';
      DOM.level2Content.innerHTML = `
        <div class="alert-box info">
          <strong>Level 2 under development</strong>
          <p>Level 2: Exam Ready notes (Formulas, Short Tricks, and 15 Solved Problems) are being compiled for this topic.</p>
        </div>
      `;
      DOM.level3Content.innerHTML = `
        <div class="alert-box info">
          <strong>Level 3 under development</strong>
          <p>Level 3: Advanced revision tables and high-yield exam boosters are currently being drafted for this topic.</p>
        </div>
      `;
    }

    // Reset Quiz Answers
    state.quizAnswers = {};
    state.quizGraded = false;
    DOM.quizScore.textContent = '0';
    
    // Populate Practice Quiz questions
    renderPracticeQuiz(content.questions);

    // Always start with Level 1 tab active
    switchSubjectSubTab('level1');
  }

  function switchSubjectSubTab(subTabId) {
    state.currentSubTab = subTabId;
    
    // Remove active class from all buttons
    DOM.tabBtnLevel1.classList.remove('active');
    DOM.tabBtnLevel2.classList.remove('active');
    DOM.tabBtnLevel3.classList.remove('active');
    DOM.tabBtnPractice.classList.remove('active');
    
    // Remove active-pane class from all panes
    DOM.level1Pane.classList.remove('active-pane');
    DOM.level2Pane.classList.remove('active-pane');
    DOM.level3Pane.classList.remove('active-pane');
    DOM.practicePane.classList.remove('active-pane');
    
    // Set active depending on subTabId
    if (subTabId === 'level1') {
      DOM.tabBtnLevel1.classList.add('active');
      DOM.level1Pane.classList.add('active-pane');
    } else if (subTabId === 'level2') {
      DOM.tabBtnLevel2.classList.add('active');
      DOM.level2Pane.classList.add('active-pane');
    } else if (subTabId === 'level3') {
      DOM.tabBtnLevel3.classList.add('active');
      DOM.level3Pane.classList.add('active-pane');
    } else if (subTabId === 'practice') {
      DOM.tabBtnPractice.classList.add('active');
      DOM.practicePane.classList.add('active-pane');
    }
  }

  // ==========================================
  // TOPIC-WISE INTERACTIVE PRACTICE QUIZ
  // ==========================================

  function renderPracticeQuiz(questionsData) {
    DOM.quizQuestionsContainer.innerHTML = '';
    state.activeTopicQuestions = [];
    
    if (!questionsData) {
      DOM.quizQuestionsContainer.innerHTML = '<p class="text-secondary">Abhi is topic ke liye question bank available nahi hai.</p>';
      DOM.btnSubmitQuiz.style.display = 'none';
      DOM.btnResetQuiz.style.display = 'none';
      return;
    }

    let flatQuestions = [];
    
    if (Array.isArray(questionsData)) {
      flatQuestions = questionsData;
    } else {
      // Grouped questions format (mcqs, conceptual, assertionReason, matchFollowing)
      const groups = [
        { key: 'mcqs', title: 'Multiple Choice Questions (MCQs)', desc: 'Syllabus concept-check questions with a single correct option.' },
        { key: 'conceptual', title: 'Conceptual & Code Snippet Questions', desc: 'Detailed scenarios, C/C++ trace questions, and dry-run outputs.' },
        { key: 'assertionReason', title: 'Assertion-Reason Questions', desc: 'Analytical reasoning statements designed for RSSB advanced evaluation.' },
        { key: 'matchFollowing', title: 'Match the Following / Grid Match Questions', desc: 'Synthesize matching columns or properties.' }
      ];
      
      groups.forEach(grp => {
        const list = questionsData[grp.key] || [];
        if (list.length > 0) {
          flatQuestions.push({
            isHeader: true,
            title: grp.title,
            desc: grp.desc
          });
          list.forEach(q => {
            flatQuestions.push({
              ...q,
              questionType: grp.key
            });
          });
        }
      });
    }

    if (flatQuestions.length === 0) {
      DOM.quizQuestionsContainer.innerHTML = '<p class="text-secondary">Abhi is topic ke liye question bank available nahi hai.</p>';
      DOM.btnSubmitQuiz.style.display = 'none';
      DOM.btnResetQuiz.style.display = 'none';
      return;
    }

    DOM.btnSubmitQuiz.style.display = 'inline-flex';
    DOM.btnSubmitQuiz.removeAttribute('disabled');
    DOM.btnResetQuiz.style.display = 'none';

    let actualQuestionIndex = 0;

    flatQuestions.forEach((item) => {
      if (item.isHeader) {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'quiz-group-header';
        headerDiv.innerHTML = `
          <h3 style="color: var(--accent); font-family: var(--font-display); margin: 24px 0 8px; border-bottom: 1px dashed var(--border-color); padding-bottom: 6px;">${item.title}</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 16px;">${item.desc}</p>
        `;
        DOM.quizQuestionsContainer.appendChild(headerDiv);
      } else {
        const qIdx = actualQuestionIndex++;
        state.activeTopicQuestions.push(item);

        const qCard = document.createElement('div');
        qCard.className = 'quiz-card';
        qCard.id = `practice-q-${qIdx}`;

        let optionsHTML = '';
        item.options.forEach((opt, oIdx) => {
          const letter = String.fromCharCode(65 + oIdx);
          optionsHTML += `
            <div class="quiz-option" id="practice-q-${qIdx}-opt-${oIdx}" onclick="window.app.selectPracticeOption(${qIdx}, ${oIdx})">
              <span class="quiz-option-letter">${letter}</span>
              <span class="quiz-option-text">${opt}</span>
            </div>
          `;
        });

        const pyqBadgeHTML = item.isPYQ ? `<span class="badge" style="background-color: var(--warning-light); color: var(--warning); margin-left: 10px; font-weight:700;">PYQ - ${item.examYear}</span>` : '';
        const typeBadgeHTML = item.questionType ? `<span class="badge" style="background-color: var(--accent-light); color: var(--accent); margin-left: 8px; font-weight:700;">${item.questionType.toUpperCase()}</span>` : '';
        
        qCard.innerHTML = `
          <span class="quiz-q-num">Question ${qIdx + 1} ${pyqBadgeHTML} ${typeBadgeHTML}</span>
          <div class="quiz-question-text" style="white-space: pre-wrap;">${item.question}</div>
          <div class="quiz-options-list">
            ${optionsHTML}
          </div>
          <div class="quiz-explanation" id="practice-q-${qIdx}-exp" style="display: none;">
            <span class="explanation-badge">Detailed Hinglish Solution:</span>
            <p class="explanation-text">${item.explanation}</p>
          </div>
        `;

        DOM.quizQuestionsContainer.appendChild(qCard);
      }
    });

    DOM.quizTotalQ.textContent = state.activeTopicQuestions.length;
  }

  function selectPracticeOption(qIdx, optIdx) {
    if (state.quizGraded) return;
    
    state.quizAnswers[qIdx] = optIdx;

    const questions = state.activeTopicQuestions;
    questions[qIdx].options.forEach((_, oIdx) => {
      const optDiv = document.getElementById(`practice-q-${qIdx}-opt-${oIdx}`);
      if (oIdx === optIdx) {
        optDiv.classList.add('selected');
      } else {
        optDiv.classList.remove('selected');
      }
    });
  }

  function gradeQuiz() {
    if (state.quizGraded) return;
    
    const questions = state.activeTopicQuestions;
    if (!questions || questions.length === 0) return;
    
    let correctCount = 0;
    
    questions.forEach((q, idx) => {
      const selected = state.quizAnswers[idx];
      const correctIdx = q.answer;
      
      const card = document.getElementById(`practice-q-${idx}`);
      if (card) card.classList.add('graded');

      const correctOptDiv = document.getElementById(`practice-q-${idx}-opt-${correctIdx}`);
      if (correctOptDiv) correctOptDiv.classList.add('correct');

      if (selected !== undefined) {
        if (selected === correctIdx) {
          correctCount++;
        } else {
          const wrongOptDiv = document.getElementById(`practice-q-${idx}-opt-${selected}`);
          if (wrongOptDiv) wrongOptDiv.classList.add('incorrect-selected');
        }
      }

      const expDiv = document.getElementById(`practice-q-${idx}-exp`);
      if (expDiv) expDiv.style.display = 'block';
    });

    state.quizGraded = true;
    DOM.quizScore.textContent = correctCount;
    DOM.btnSubmitQuiz.setAttribute('disabled', 'true');
    DOM.btnResetQuiz.style.display = 'inline-flex';

    DOM.practicePane.scrollIntoView({ behavior: 'smooth' });
  }

  function resetQuiz() {
    state.quizAnswers = {};
    state.quizGraded = false;
    DOM.quizScore.textContent = '0';
    
    const content = window.studyContent[state.activeTopic];
    if (content) {
      renderPracticeQuiz(content.questions);
    }
  }

  // ==========================================
  // CUSTOM MOCK EXAM ENGINE (PAPER I & II)
  // ==========================================
  
  function startQuickMock() {
    navigateToTab('quiz_engine');
  }

  function generateMockTest() {
    // 1. Gather configured subjects
    const selectedSubjects = [];
    ALL_TOPICS.forEach(topicId => {
      const mockCheckbox = document.getElementById(`mock-subject-${topicId}`);
      if (mockCheckbox && mockCheckbox.checked) {
        selectedSubjects.push(topicId);
      }
    });

    if (selectedSubjects.length === 0) {
      alert("At least ek study topic select karein test generate karne ke liye!");
      return;
    }

    // 2. Fetch questions pool
    let questionPool = [];
    selectedSubjects.forEach(topicId => {
      const module = window.studyContent[topicId];
      if (module && module.questions) {
        let topicQs = [];
        if (Array.isArray(module.questions)) {
          topicQs = module.questions;
        } else {
          const types = ['mcqs', 'conceptual', 'assertionReason', 'matchFollowing'];
          types.forEach(t => {
            if (module.questions[t] && Array.isArray(module.questions[t])) {
              topicQs = topicQs.concat(module.questions[t]);
            }
          });
        }
        
        // Add subject source field to question
        const qs = topicQs.map(q => ({
          ...q,
          subjectId: topicId,
          subjectTitle: module.title.split(' (')[0]
        }));
        questionPool = questionPool.concat(qs);
      }
    });

    if (questionPool.length === 0) {
      alert("Select kiye gaye topics mein questions available nahi hain. Kripya doosre options try karein.");
      return;
    }

    // 3. Shuffle pool and take configured count
    const targetCount = parseInt(document.getElementById('mock-question-count').value);
    const selectedQuestions = shuffleArray(questionPool).slice(0, targetCount);

    // 4. Reset state
    state.mockExam.questions = selectedQuestions;
    state.mockExam.answers = {};
    state.mockExam.totalQuestions = selectedQuestions.length;
    state.mockExam.timeLeft = selectedQuestions.length * 90; // 90 seconds per question (RSSB standard)
    state.mockExam.inProgress = true;

    // 5. Hide configuration pane, show active exam pane
    DOM.mockConfigPane.style.display = 'none';
    DOM.activeMockPane.style.display = 'block';
    DOM.resultsMockPane.style.display = 'none';

    // 6. Build layout & Render
    DOM.activeExamTitle.textContent = `Mock Test (${selectedQuestions.length} Questions)`;
    DOM.mockTotalCount.textContent = selectedQuestions.length;
    DOM.mockAnsweredCount.textContent = '0';

    renderMockQuestions();

    // 7. Start Countdown Timer
    startMockTimer();
  }

  function renderMockQuestions() {
    DOM.mockQuestionsContainer.innerHTML = '';
    
    state.mockExam.questions.forEach((q, idx) => {
      const qCard = document.createElement('div');
      qCard.className = 'quiz-card';
      qCard.id = `mock-q-${idx}`;

      let optionsHTML = '';
      q.options.forEach((opt, oIdx) => {
        const letter = String.fromCharCode(65 + oIdx);
        optionsHTML += `
          <div class="quiz-option" id="mock-q-${idx}-opt-${oIdx}" onclick="window.app.selectMockOption(${idx}, ${oIdx})">
            <span class="quiz-option-letter">${letter}</span>
            <span class="quiz-option-text">${opt}</span>
          </div>
        `;
      });

      const pyqBadgeHTML = q.isPYQ ? `<span class="badge" style="background-color: var(--warning-light); color: var(--warning); margin-left: 10px; font-weight:700;">PYQ - ${q.examYear}</span>` : '';
      qCard.innerHTML = `
        <span class="quiz-q-num">Q. ${idx + 1} &nbsp;|&nbsp; <small class="text-secondary">${q.subjectTitle}</small> ${pyqBadgeHTML}</span>
        <div class="quiz-question-text">${q.question}</div>
        <div class="quiz-options-list">
          ${optionsHTML}
        </div>
      `;

      DOM.mockQuestionsContainer.appendChild(qCard);
    });
  }

  function selectMockOption(qIdx, optIdx) {
    if (!state.mockExam.inProgress) return;

    state.mockExam.answers[qIdx] = optIdx;

    // Highlight option
    const q = state.mockExam.questions[qIdx];
    q.options.forEach((_, oIdx) => {
      const optDiv = document.getElementById(`mock-q-${qIdx}-opt-${oIdx}`);
      if (oIdx === optIdx) {
        optDiv.classList.add('selected');
      } else {
        optDiv.classList.remove('selected');
      }
    });

    // Update answered count
    const answeredCount = Object.keys(state.mockExam.answers).length;
    DOM.mockAnsweredCount.textContent = answeredCount;
  }

  function startMockTimer() {
    if (state.mockExam.timerId) clearInterval(state.mockExam.timerId);

    updateMockTimerDisplay();

    state.mockExam.timerId = setInterval(() => {
      state.mockExam.timeLeft--;
      
      if (state.mockExam.timeLeft <= 0) {
        clearInterval(state.mockExam.timerId);
        alert("Time Up! Aapka Mock Test automatically submit ho raha hai.");
        gradeMockExam();
      } else {
        updateMockTimerDisplay();
      }
    }, 1000);
  }

  function updateMockTimerDisplay() {
    const mins = String(Math.floor(state.mockExam.timeLeft / 60)).padStart(2, '0');
    const secs = String(state.mockExam.timeLeft % 60).padStart(2, '0');
    DOM.mockTimerDisplay.textContent = `${mins}:${secs}`;
    
    // Turn red if less than 2 minutes left
    if (state.mockExam.timeLeft < 120) {
      DOM.mockTimerDisplay.parentElement.style.backgroundColor = 'var(--danger-light)';
      DOM.mockTimerDisplay.parentElement.style.color = 'var(--danger)';
    } else {
      DOM.mockTimerDisplay.parentElement.style.backgroundColor = '';
      DOM.mockTimerDisplay.parentElement.style.color = '';
    }
  }

  function confirmEndMock() {
    const answeredCount = Object.keys(state.mockExam.answers).length;
    const totalCount = state.mockExam.totalQuestions;
    const unattempted = totalCount - answeredCount;

    let confirmationMsg = `Kya aap sach mein test submit karna chahte hain?`;
    if (unattempted > 0) {
      confirmationMsg += `\nAapne ${unattempted} questions unattempted chhod diye hain.`;
    }

    if (confirm(confirmationMsg)) {
      gradeMockExam();
    }
  }

  function gradeMockExam() {
    // Stop Timer
    if (state.mockExam.timerId) clearInterval(state.mockExam.timerId);
    state.mockExam.inProgress = false;

    // Calculation Metrics
    let correct = 0;
    let incorrect = 0;
    let totalQ = state.mockExam.totalQuestions;

    const solutionsContainer = DOM.mockResultsSolutionsContainer;
    solutionsContainer.innerHTML = '';

    // Loop through questions to grade
    state.mockExam.questions.forEach((q, idx) => {
      const selected = state.mockExam.answers[idx];
      const correctIdx = q.answer;
      
      const isCorrect = (selected !== undefined && selected === correctIdx);
      const isIncorrect = (selected !== undefined && selected !== correctIdx);
      const isUnattempted = (selected === undefined);

      if (isCorrect) correct++;
      if (isIncorrect) incorrect++;

      // Build answer key elements
      const solutionCard = document.createElement('div');
      solutionCard.className = `quiz-card graded`;
      
      let optionsHTML = '';
      q.options.forEach((opt, oIdx) => {
        const letter = String.fromCharCode(65 + oIdx);
        let classList = 'quiz-option';
        
        if (oIdx === correctIdx) {
          classList += ' correct';
        }
        if (oIdx === selected && !isCorrect) {
          classList += ' incorrect-selected';
        }
        if (oIdx === selected && isCorrect) {
          classList += ' correct';
        }

        optionsHTML += `
          <div class="${classList}">
            <span class="quiz-option-letter">${letter}</span>
            <span class="quiz-option-text">${opt}</span>
          </div>
        `;
      });

      // Grade status badge
      let statusBadge = '';
      if (isCorrect) {
        statusBadge = '<span class="badge" style="background-color: var(--success-light); color: var(--success);">CORRECT (+1.00)</span>';
      } else if (isIncorrect) {
        statusBadge = '<span class="badge" style="background-color: var(--danger-light); color: var(--danger);">WRONG (-0.33)</span>';
      } else {
        statusBadge = '<span class="badge" style="background-color: var(--border-color); color: var(--text-secondary);">UNATTEMPTED (0.00)</span>';
      }

      const pyqBadgeHTML = q.isPYQ ? `<span class="badge" style="background-color: var(--warning-light); color: var(--warning); margin-left: 10px; font-weight:700;">PYQ - ${q.examYear}</span>` : '';
      solutionCard.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
          <span class="quiz-q-num">Question ${idx + 1} &nbsp;|&nbsp; <small>${q.subjectTitle}</small> ${pyqBadgeHTML}</span>
          ${statusBadge}
        </div>
        <div class="quiz-question-text">${q.question}</div>
        <div class="quiz-options-list">
          ${optionsHTML}
        </div>
        <div class="quiz-explanation">
          <span class="explanation-badge">Detailed Solution:</span>
          <p class="explanation-text">${q.explanation}</p>
        </div>
      `;

      solutionsContainer.appendChild(solutionCard);
    });

    // RSSB marking scheme: +1.0 for correct, -1/3rd (approx 0.333) for wrong
    const rawScore = (correct * 1.0) - (incorrect * 0.3333);
    const finalScore = Math.max(0, rawScore).toFixed(2);
    const accuracy = totalQ > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;
    const finalAccuracy = isNaN(accuracy) ? 0 : accuracy;

    // Populate Results DOM
    DOM.resultScoreDisplay.textContent = finalScore;
    DOM.resultOutOf.textContent = `out of ${totalQ.toFixed(2)}`;
    DOM.resultTotalQ.textContent = totalQ;
    DOM.resultCorrectQ.textContent = correct;
    DOM.resultIncorrectQ.textContent = incorrect;
    DOM.resultUnattemptedQ.textContent = totalQ - correct - incorrect;
    DOM.resultAccuracy.textContent = `${finalAccuracy}%`;

    // Save Mock stats to localStorage
    const savedMocks = parseInt(localStorage.getItem('rssb_mocks_taken') || '0');
    const newMocksCount = savedMocks + 1;
    localStorage.setItem('rssb_mocks_taken', newMocksCount);

    const savedAccuracy = parseInt(localStorage.getItem('rssb_avg_accuracy') || '0');
    const newAvgAccuracy = savedAccuracy === 0 ? finalAccuracy : Math.round((savedAccuracy + finalAccuracy) / 2);
    localStorage.setItem('rssb_avg_accuracy', newAvgAccuracy);

    // Switch view
    DOM.activeMockPane.style.display = 'none';
    DOM.resultsMockPane.style.display = 'block';

    // Scroll to top of results
    DOM.resultsMockPane.scrollIntoView({ behavior: 'smooth' });
  }

  function resetToConfig() {
    DOM.mockConfigPane.style.display = 'block';
    DOM.activeMockPane.style.display = 'none';
    DOM.resultsMockPane.style.display = 'none';
  }

  // ==========================================
  // HELPER UTILITIES
  // ==========================================
  
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Initialize application on DOM load
  document.addEventListener('DOMContentLoaded', init);

})();
