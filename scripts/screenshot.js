import { chromium } from 'playwright';

const urls = process.argv.slice(2).length ? process.argv.slice(2) : ['http://localhost:8080', 'http://localhost:8081', 'http://localhost:4173', 'http://localhost:4174'];
const out = '/tmp/site_screenshot.png';

for (const url of urls) {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
    if (!resp || resp.status() >= 400) {
      await browser.close();
      console.error('bad response', url, resp && resp.status());
      continue;
    }
    await page.screenshot({ path: out, fullPage: true });
    console.log('screenshot saved', out, 'from', url);
    await browser.close();
    process.exit(0);
  } catch (err) {
    console.error('failed to capture', url, err.message);
  }
}

console.error('no reachable url');
process.exit(1);
