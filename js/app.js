(function() {
  var Article = Backbone.Model.extend({
    defaults: {
      "title": "",
      "body": "",
      "posted_at": new Date()
    }
  });

  var Articles = Backbone.Collection.extend({
    model: Article
  });

  var articles = new Articles();
  var article1 = new Article({title: "First article", body: "This is a good article."});
  var article2 = new Article({title: "Second article", body: "This is a good article."});

  console.log("Add article1");
  articles.add(article1);
  console.log(JSON.stringify(articles));

  console.log("Add article2");
  articles.add(article2);
  console.log(JSON.stringify(articles));

  console.log("Remove article1");
  articles.remove(article1);
  console.log(JSON.stringify(articles));
}());
