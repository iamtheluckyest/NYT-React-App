const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const articleSchema = new Schema({
    nytId: {
        type: String
    },
    title: {
        type: String
    },
    publishDate: {
        type: Date
    },
    web_url: {
        type: String
    },
    snippet: {
        type: String
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports =  Article;