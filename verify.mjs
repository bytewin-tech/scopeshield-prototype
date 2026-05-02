const urls = [
  'https://scopeshield-prototype.netlify.app',
  'https://69f68f2bc1968043e7a3ac4f--scopeshield-prototype.netlify.app'
];

for (const url of urls) {
  const res = await fetch(url);
  const html = await res.text();
  const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || '';
  const checks = {
    hero: /Catch scope creep before it lands/i.test(html),
    analyzer: /Proposal analyzer workspace/i.test(html),
    dashboard: /Risk dashboard/i.test(html),
    templates: /Template library \+ export/i.test(html),
  };
  console.log(JSON.stringify({ url, status: res.status, title, checks }));
}
