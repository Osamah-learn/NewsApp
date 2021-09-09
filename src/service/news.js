import {
  url,
  _api_key,
  country_code,
  category,
  source,
} from "..//config/rest_config";
/* Fetch The Articles */
export async function getArticles(category='general') {
  try {
    let articles = await fetch(
      `${url}?country=${country_code}&category=${category}`,
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
