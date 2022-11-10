define(['core/js/adapt'], function(Adapt) {
  var GoogleTranslateView = Backbone.View.extend({
    className: "googleTranslate",

    render: function() {
      this.$el.html(Handlebars.templates.googleTranslate());
      return this;
    }
  });

  Adapt.on('navigationView:postRender', function() {
    var view = (new GoogleTranslateView()).render();
    $('.nav__inner').append(view.$el);
  });
});
