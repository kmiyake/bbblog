(function() {
  var Article = Backbone.Model.extend({
    defaults: {
      "title": "",
      "body": "",
      "posted_at": new Date()
    }
  });

  var article = new Article();
  article.set({title: "First Title!", body: "This is a nice article." });
  console.log(JSON.stringify(article));
}());
