// Captures a hero screenshot of every page into showcase/previews/ (used by the gallery).
// Usage: npm run build && npm run preview  (in another terminal) && npm run previews
import { chromium } from 'playwright-core';
import { mkdirSync, readFileSync } from 'node:fs';

const { workspaces } = JSON.parse(readFileSync('package.json', 'utf8'));
const base = process.env.PREVIEW_URL ?? 'http://localhost:4000';
const executablePath = process.env.CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';

mkdirSync('showcase/previews', { recursive: true });
const browser = await chromium.launch({ executablePath });
for (const slug of workspaces) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/${slug}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(slug === 'lumora' ? 4500 : 2500); // let intro animations finish
  await page.screenshot({ path: `showcase/previews/${slug}.jpg`, type: 'jpeg', quality: 82 });
  console.log('captured', slug);
  await page.close();
}
await browser.close();
