/**
 * IndexNow Auto-Submission Script for Atlas Electricity
 * Pings IndexNow-supported search engines (Bing, Yandex, Seznam, etc.) 
 * to instantly crawl and index the 12 active production routes.
 */

const KEY = '65c1dace7b5547b89275d9c1bd0deb9c';
const HOST = 'atlas-electricity.vercel.app';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/faq`,
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`,
  `https://${HOST}/en/`,
  `https://${HOST}/en/faq`,
  `https://${HOST}/en/privacy`,
  `https://${HOST}/en/terms`,
  `https://${HOST}/fr/`,
  `https://${HOST}/fr/faq`,
  `https://${HOST}/fr/privacy`,
  `https://${HOST}/fr/terms`
];

async function submitIndexNow() {
  console.log(`🚀 Starting IndexNow submission for ${urls.length} routes...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  try {
    const response = await fetch('https://api.indexnow.org', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('✅ IndexNow submission successful! Search engines notified.');
    } else {
      const errorText = await response.text();
      console.error(`❌ IndexNow submission failed. Status: ${response.status}. Response: ${errorText}`);
    }
  } catch (error) {
    console.error('❌ Error pinging IndexNow API:', error);
  }
}

submitIndexNow();
