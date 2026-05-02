import playwright from '/Users/chiaclaw/.hermes/hermes-agent/node_modules/playwright/index.js';
const { chromium } = playwright;

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const consoleMessages = [];
const pageErrors = [];
page.on('console', msg => consoleMessages.push({ type: msg.type(), text: msg.text() }));
page.on('pageerror', err => pageErrors.push(String(err)));

const response = await page.goto('https://scopeshield-prototype.netlify.app', { waitUntil: 'networkidle' });
const title = await page.title();
const hero = await page.locator('h1').first().textContent();
const sections = await page.locator('section').count();
console.log(JSON.stringify({
  status: response?.status(),
  title,
  hero,
  sections,
  consoleMessages,
  pageErrors
}));

await browser.close();
