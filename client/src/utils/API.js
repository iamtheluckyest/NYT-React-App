import axios from "axios";

export default {
  // Gets articles from NYT API
  getNYTArticles: function(query) {
    return axios.get(query);
  },
  // Gets all saved articles
  getSavedArticles: function() {
    return axios.get("/api/saved");
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/saved", articleData);
  },
  getSavedArticle: function(id) {
    return axios.get("/api/article/" +  id);
  },
  // Removes article from database
  deleteArticle: function(id) {
    return axios.delete("/api/article/" + id);
  }
};
