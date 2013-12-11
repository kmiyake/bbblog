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

  var ArticlesView = Backbone.View.extend({
    el: "#articles",
    initialize: function() {
      var article1 = new Article({title: "First article", body: "This is a good article."});
      var article2 = new Article({title: "Second article", body: "This is a good article."});
      this.articles = new Articles([article1, article2]);
    },
    render: function () {
      this.articles.each(function(article) {
        this.addArticle(article);
      }, this);
      return this;
    },
    addArticle: function (article) {
      this.$el.append(new ArticleView({model: article}).render().el);
    }
  });

  var ArticleView = Backbone.View.extend({
    template: _.template($("#article").html()),
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  var articlesView = new ArticlesView();
  articlesView.render();
}());
