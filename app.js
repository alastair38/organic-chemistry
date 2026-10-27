/* ==========================================================================
   Shared State & Progress Manager (app.js)
   SQA Higher Chemistry — Organic Reactions Portal
   ========================================================================== */

const STORAGE_KEYS = {
  TASKS: 'sqa_higher_chem_tasks_v1',
  FLASHCARDS: 'sqa_higher_chem_flashcards_v1',
  QUIZ_SCORE: 'sqa_higher_chem_quiz_v1'
};

function getSavedState(key, fallback = {}) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function setSavedState(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    updateGlobalProgressBadge();
  } catch (e) {
    // Ignore storage errors in private mode
  }
}

function updateGlobalProgressBadge() {
  const tasks = getSavedState(STORAGE_KEYS.TASKS, {});
  const flashcards = getSavedState(STORAGE_KEYS.FLASHCARDS, {});
  const quiz = getSavedState(STORAGE_KEYS.QUIZ_SCORE, {});

  const completedTasks = Object.values(tasks).filter(Boolean).length;
  const totalTasks = 16; // 4 tasks per week * 4 weeks

  const masteredCards = Object.values(flashcards).filter(v => v === 'mastered').length;
  const totalCards = 24;

  const answeredQuiz = Object.values(quiz).filter(Boolean).length;
  const totalQuiz = 12;

  const overallPct = Math.min(
    100,
    Math.round(((completedTasks + masteredCards + answeredQuiz) / (totalTasks + totalCards + totalQuiz)) * 100)
  );

  const pctEl = document.getElementById('global-progress-pct');
  const fillEl = document.getElementById('global-progress-fill');

  if (pctEl) pctEl.textContent = `${overallPct}%`;
  if (fillEl) fillEl.style.width = `${overallPct}%`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateGlobalProgressBadge();
});
