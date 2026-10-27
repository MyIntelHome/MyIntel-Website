// Tells Bing (and other IndexNow search engines) which pages exist or changed.
// Run after a deploy goes live: npm run indexnow
const host = "www.myintelhome.com";
const key = "05d4c60c8121463615c09d6a3361c85c"; // matches public/<key>.txt

const sitemap = await (await fetch(`https://${host}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error("No URLs found in the sitemap.");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(`IndexNow: sent ${urlList.length} URLs, status ${res.status}`);
if (!res.ok) process.exit(1);
