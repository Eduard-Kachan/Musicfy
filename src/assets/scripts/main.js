
// -----------------------------
// Wait for DOM Load
// -----------------------------

jQuery(function($) {
  // -----------------------------
  // JSON DATA
  // -----------------------------
  var Data = {
    artists : [
      {
        name:'Ed',
        url:'ed'
      },
      {
        name:'Tanya',
        url:'tanya'
      }
    ]
  };


  // -----------------------------
  // Router
  // -----------------------------

  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '' : 'home',
      'artists': 'artists',
      'artists/:queryArtist': 'artist'
    },

    // Home Route
    home: function() {
      console.log('Navigating to Home Page');
      App.views['home'].render();
    },

    // Page with artists
    artists: function() {
      console.log('Navigating to Artists Page');
      App.views['artists'].render();
    },

    // Individual artist page
    artist: function(queryArtist) {

      console.log('Navigating to Induvidual Artist Page');

      App.views['artist'] = new ArtistView(queryArtist);

      App.views['artist'].render();
    }

  });

  // -----------------------------
  // Application
  // -----------------------------

  var Application = function() {

    // Add router
    this.router = new Router();

    // Setup views
    this.views = {
      home: new HomeView(),
      artists: new ArtistsView()
      //artist: new ArtistView()
    };

  };

  // -----------------------------
  // Home View
  // -----------------------------

  var HomeView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#home',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: 'Home Page'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // About View
  // -----------------------------

  var ArtistsView = Backbone.View.extend({


    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#artists',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      var artists = [];
      Data.artists.forEach(function(artist){
        artists.push({
          name: artist.name,
          url: artist.url
        });
      });

      console.log(artists);

      // Some page data
      this.model.set({
        title: 'Artists',
        artists: artists
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  var ArtistView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#artists',

    //query
    artist: undefined,

    // Initialize View
    initialize: function(queryArtist) {

      var numOfArtists = Data.artists.length - 1;
      var i = numOfArtists;

      for(i; i >= 0; i--){
        var artist = Data.artists[i];
        if(artist.url == queryArtist) {
          this.artist = artist;
          break;
        }
        if(i == 0 && !this.artist){
          console.log("nothing found")
        }
      }


      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        title: this.artist.name
      });

    },

    // Our Render Function
    render: function() {
      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Start Application
  // -----------------------------

  var App = new Application();

  // Start Backbone History
  Backbone.history.start({ pushState: true });

  // -----------------------------
  // Navigation Links
  // -----------------------------

  // Some code you can copy and paste.... ish
  $(document).delegate('a', 'click', function(e) {
    //var url = $(this).attr('href') || '#';
    //var isLocal = url.match(/^#/);
    //if(isLocal) {
    //
    //}
    e.preventDefault();
    App.router.navigate($(this).attr('href'), {
      trigger: true
    });
  });


});