/**
 * Path: src/main.ts
 * Purpose: Main script for the new tab page - populates content on load
 */

import { getTodaysWord, getTodaysMath, getTodaysQuote } from './data.js';

/**
 * Populate the page with today's content
 */
function populateContent(): void {
  const word = getTodaysWord();
  const math = getTodaysMath();
  const quote = getTodaysQuote();
  
  // Populate word of the day
  const wordText = document.getElementById('word-text');
  const wordPos = document.getElementById('word-pos');
  const wordDefinition = document.getElementById('word-definition');
  const wordExample = document.getElementById('word-example');
  
  if (wordText) wordText.textContent = word.word;
  if (wordPos) wordPos.textContent = word.partOfSpeech;
  if (wordDefinition) wordDefinition.textContent = word.definition;
  if (wordExample) wordExample.textContent = word.example;
  
  // Populate math formula
  const mathTitle = document.getElementById('math-title');
  const mathFormula = document.getElementById('math-formula');
  const mathExplanation = document.getElementById('math-explanation');
  
  if (mathTitle) mathTitle.textContent = math.title;
  if (mathFormula) mathFormula.textContent = math.formula;
  if (mathExplanation) mathExplanation.textContent = math.explanation;
  
  // Populate quote
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  
  if (quoteText) quoteText.textContent = `"${quote.text}"`;
  if (quoteAuthor) {
    quoteAuthor.textContent = `- ${quote.author}${quote.source ? ` (${quote.source})` : ''}`;
  }
}

/**
 * Initialize theme based on saved preference or system preference
 */
function initializeTheme(): void {
  // Load saved theme preference
  chrome.storage.local.get(['theme'], (result) => {
    const savedTheme = result.theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    if (shouldUseDarkMode) {
      document.body.classList.add('dark-mode');
    }
  });
}

/**
 * Set up theme toggle button
 */
function setupThemeToggle(): void {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (!themeToggle) return;
  
  themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    const theme = isDarkMode ? 'dark' : 'light';
    
    // Save preference
    chrome.storage.local.set({ theme });
    
    // Add a subtle animation
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      themeToggle.style.transform = '';
    }, 300);
  });
}

/**
 * Initialize the application
 */
function initialize(): void {
  populateContent();
  initializeTheme();
  setupThemeToggle();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}

