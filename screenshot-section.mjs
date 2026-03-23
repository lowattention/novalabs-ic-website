import puppeteer from "puppeteer";
import fs from "fs";

const url    = process.argv[2] || "http://localhost:3000";
const target = process.argv[3] || "0";   // section ID or pixel offset
const label  = process.argv[4] || "section";
const dir    = "./temporary screenshots";
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

let n = 1;
while (fs.existsSync(`${dir}/section-${n}-${label}.png`)) n++;
const outPath = `${dir}/section-${n}-${label}.png`;

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page    = await browser.newPage();
await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

// Disable smooth scroll and force all reveal elements visible
await page.evaluate(() => {
  // Instant scroll (override CSS scroll-behavior: smooth)
  document.documentElement.style.scrollBehavior = 'auto';
  document.body.style.scrollBehavior = 'auto';
  // Force reveals visible
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('hidden', 'reveal-anim');
    el.style.cssText += ';opacity:1!important;transform:none!important;transition:none!important;';
  });
});
await new Promise(r => setTimeout(r, 500));

// Scroll to ID or pixel offset (using instant behavior)
const isId = isNaN(Number(target));
const targetY = isId
  ? await page.evaluate(id => {
      const el = document.getElementById(id);
      if (!el) return 0;
      return Math.max(0, el.getBoundingClientRect().top + window.scrollY - 72);
    }, target)
  : Number(target);

await page.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), targetY);
await new Promise(r => setTimeout(r, 400));

await page.screenshot({ path: outPath });
await browser.close();
console.log(`Saved: ${outPath}`);
