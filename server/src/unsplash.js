const { createApi } = require("unsplash-js");
const fetch = require("node-fetch");

const unsplashAccessKey = process.env.UNSPLASH_KEY;

const unsplashClient = createApi({
  accessKey: unsplashAccessKey,
  fetch,
});

async function searchPhotos(query) {
  const resp = await unsplashClient.search.getPhotos({
    query,
    page: 1,
    perPage: 12,
  });

  return resp?.response?.results.map((r) => r.urls.regular);
}

module.exports = searchPhotos;
