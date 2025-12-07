import puppeteer from "puppeteer";

async function runBot() {
  console.log("Starting Marketplace bot...");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();

  // افتح صفحة الماركت بليس بدون تسجيل دخول
  await page.goto("https://www.facebook.com/marketplace/alexandria/search/?query=iphone", {
    waitUntil: "networkidle2"
  });

  console.log("Page loaded!");

  // خد HTML
  const content = await page.content();
  console.log("Length of HTML:", content.length);

  await browser.close();
}

runBot();
