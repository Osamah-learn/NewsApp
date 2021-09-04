import {
  sport_url,
  _api_key,
  country_code,
  category,
} from "..//config/rest_config";
/* Fetch The Articles */
export async function getArticles() {
  try {
    let articles = await fetch(
      `${sport_url}?country=${country_code}&category=${category}`,
      {
        headers: {
          "X-API-KEY": _api_key,
        },
      }
    );
    let result = await articles.json();
    articles = null;
    return result.articles
  } catch (error) {
    throw error;
  }
}
