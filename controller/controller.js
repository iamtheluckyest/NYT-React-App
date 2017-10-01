var Article = require("../models/Article");

module.exports = {
    findAll: function(req, res) {
      Article
        .find({})
        .sort({ publishDate: -1 })
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err));
    },
    keep: function(req, res) {
      const query = {nytId : req.body.nytId},
      update = req.body,
      options = {new: true, upsert:true}

      Article
        .findOneAndUpdate(query, update, options)
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err));
    },
    getOne: function(req, res) {
      const query = {nytId : req.params.id}
      Article
        .findOne(query)
        .then(dbArticle => {
          res.json(dbArticle)}
        )
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      Article
        .findOneAndRemove({ _id: req.params.id })
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err));
    }
  };