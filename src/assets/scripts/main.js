
// -----------------------------
// Wait for DOM Load
// -----------------------------

jQuery(function($) {
  // -----------------------------
  // JSON DATA
  // -----------------------------
  var Data = {
    featured: [
      ['Kevin MacLeod', 'Impact', 'Impact Prelude'],
      ['Kevin MacLeod', 'Impact', 'Impact Allegretto'],
      ['Kevin MacLeod', 'Calming', 'Bathed in the Light'],
      ['Kevin MacLeod', 'Calming', 'Danse Morialta'],
      ['Thee Irma & Louise', 'Live at the Winston', '2 Live at the Winston'],
      ['Thee Irma & Louise', 'Live at the Winston', '7 Live at the Winston'],
      ['Thee Irma & Louise', 'White Hell', 'Bones'],
      ['Thee Irma & Louise', 'White Hell', 'White hell']
    ],
    artists: [
      {
        name: 'Kevin MacLeod',
        url: 'kevin_macleod',
        imageUrl: 'http://freemusicarchive.org/file/images/artists/Kevin_MacLeod_-_20110715150335323.png?width=290&height=290',
        albums: [
          {
            name: 'Impact',
            url: 'impact',
            imageUrl: 'http://freemusicarchive.org/file/images/albums/Kevin_MacLeod_-_Impact_-_20141119154200806.jpg?width=290&height=290',
            songs: [
              {
                name: "Impact Prelude",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3"
              },
              {
                name: "Impact Andante",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3"
              },
              {
                name: "Impact Moderato",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
              },
              {
                name:"Impact intermezzo",
                songUrl:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3"
              },
              {
                name:"Impact Allegretto",
                songUrl:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3"
              },
              {
                name:"Impact Lento",
                songUrl:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3"
              }
            ]
          },
          {
            name:'Calming',
            url: 'calming',
            imageUrl:'http://freemusicarchive.org/file/images/albums/Kevin_MacLeod_-_Calming_-_20141119155904305.jpg?width=290&height=290',
            songs: [
              {
                name: "Autumn Day",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3"
              },
              {
                name: "Bathed in the Light",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3"
              },
              {
                name: "Calmant",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3"
              },
              {
                name: "Carefree",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"
              },
              {
                name: "Clean Soul",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
              },
              {
                name: "Danse Morialta",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3"
              },
              {
                name: "Dream Culture",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3"
              },
              {
                name: "Enchanted Journey",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
              }
            ]
          }
        ]
      },
      {
        name: 'Thee Irma & Louise',
        url: 'thee_irma_louise',
        imageUrl: 'http://freemusicarchive.org/file/images/artists/Thee_Irma__Louise_-_20120215171200835.jpg?width=290&height=290',
        albums: [
          {
            name: 'Live at the Winston',
            url: 'live_at_the_winston',
            imageUrl: 'http://freemusicarchive.org/file/images/albums/Thee_Irma__Louise_-_Live_at_the_Winston_-_20120210152858753.jpg?width=290&height=290',
            songs: [
              {
                name: "1 Live at the Winston",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3"
              },
              {
                name: "2 Live at the Winston",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3"
              },
              {
                name: "3 Live at the Winston",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3"
              },
              {
                name: "4 Live at the Winston",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"
              },
              {
                name: "5 Live at the Winston",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
              },
              {
                name: "6 Live at the Winston",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3"
              },
              {
                name: "7 Live at the Winston",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3"
              }
            ]
          },
          {
            name: 'White Hell',
            url: 'white_hell',
            imageUrl:'http://freemusicarchive.org/file/images/albums/Thee_Irma__Louise_-_White_Hell_-_20141203112721167.jpg?width=290&height=290',
            songs: [
              {
                name: "Bones",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3"
              },
              {
                name: "Terminal beach",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3"
              },
              {
                name: "Up on the mountain",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
              },
              {
                name: "Mr. Vader wants to see you in his office",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3"
              },
              {
                name: "Laughing all the way to the morgue",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3"
              },
              {
                name: "Crooked mile",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3"
              },
              {
                name: "Pjerwoje znakomstwa",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3"
              },
              {
                name: "White hell",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3"
              },
              {
                name: "Formikula",
                songUrl: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
              },
              {
                name: "Ah yalan Irma",
                songUrl: "http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3"
              }
            ]
          }
        ]
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
      'artists/:queryArtist': 'search',
      'artists/:queryArtist/:queryAlbum': 'search'
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

    // Individual __ page
    search: function(queryArtist, queryAlbum) {

      if(queryAlbum == null){
        console.log('Navigating to Induvidual Artist Page');
        App.views['artist'] = new ArtistView(queryArtist);
        App.views['artist'].render();
      }else{
        console.log('Navigating to Induvidual Album Page');
        App.views['album'] = new AlbumView(queryArtist, queryAlbum);
        App.views['album'].render();
      }

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

    songs: [],

    // Initialize View
    initialize: function() {
      var i = Data.featured.length -1;
      for(i;i>=0;i--){
        var featuredItem = findSong(Data.featured[i]);
        this.songs.push({
          albumImgUrl: featuredItem.album.imageUrl,
          songArtist: featuredItem.artist.name,
          songAlbum: featuredItem.album.name,
          songName: featuredItem.song.name,
          songUrl: featuredItem.song.songUrl
        });
      }


      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        songs: this.songs
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);

      var self = this;

      $('span.song').each(function(){

        var url = $(this).text();

        var title;
        var artist;
        var mp3;

        self.songs.forEach(function(song){
          if(url == song.songName){

            title = song.songName;
            artist = song.songArtist;
            mp3 = song.songUrl;

          }
        });

        $(this).attr( "href", "");

        $(this).on('click', function(){

          myPlaylist.add({
            title: title,
            artist:artist,
            mp3:mp3
          }, false);
        });


      });
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
          url: artist.url,
          imageUrl: artist.imageUrl
        });
      });

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
    template: '#artist',

    //query
    artist: undefined,

    // Initialize View
    initialize: function(queryArtist) {

      var i = 0;

      i = Data.artists.length - 1;

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

      var albums = [];

      i = this.artist.albums.length - 1;

      for(i; i >= 0; i--){
        var album = this.artist.albums[i];

        albums.push({
          imageUrl: album.imageUrl,
          name: album.name,
          url: artist.url + '/' + album.url
        });
      }

      this.model.set({
        artist: this.artist.name,
        artistImageUrl: this.artist.imageUrl,
        albums: albums
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

  var AlbumView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#album',

    //query
    artist: undefined,
    album: undefined,
    songs: [],

    // Initialize View
    initialize: function(queryArtist, queryAlbum) {



      var i = 0;

      i = Data.artists.length - 1;

      //search for artist
      for(i; i >= 0; i--){

        var artist = Data.artists[i];

        if(artist.url == queryArtist) {
          this.artist = artist;
          i = this.artist.albums.length - 1;
          break;
        }

        if(i == 0 && !this.artist){
          console.log("nothing found")
        }

      }


      //search for album
      for(i; i >= 0; i--){

        var album = this.artist.albums[i];

        if(album.url == queryAlbum) {
          this.album = album;
          break;
        }

        if(i == 0 && !this.album){
          console.log("nothing found")
        }
      }


      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      //console.log(this.album.songs);
      i = this.album.songs.length - 1;

      for(i; i >= 0; i--){
        var song = this.album.songs[i];

        this.songs.push({
          name: song.name,
          songUrl: song.songUrl
        });

      }

      this.model.set({
        artist: this.artist.name,
        album: this.album.name,
        albumImageUrl: this.album.imageUrl,
        songs: this.songs
      });

    },

    // Our Render Function
    render: function() {
      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);

      var self = this;

      $('span.song').each(function(){

        var url = $(this).text();

        var title;
        var artist;
        var mp3;

        self.songs.forEach(function(song){
          if(url == song.name){

            title = song.name;
            artist = self.artist.name;
            mp3 = song.songUrl;

          }
        });

        $(this).attr( "href", "");

        $(this).on('click', function(){

          myPlaylist.add({
            title: title,
            artist:artist,
            mp3:mp3
          }, false);
        });


      });



    }

  });




  var findSong = function(featured){

    //search artist
    var i = Data.artists.length -1;
    for(i; i >= 0; i--){
      var artist = Data.artists[i];
      if(artist.name == featured[0]){

        //search album
        var j = artist.albums.length -1;
        for(j; j >= 0; j--){
          var album = artist.albums[j];
          if(album.name == featured[1]){

            //search song
            var k = album.songs.length -1;
            for(k; k >= 0; k--){
              var song = album.songs[k];
              if(song.name == featured[2]){
                return {
                  artist: artist,
                  album: album,
                  song: song
                };
              }
            }
          }
        }
      }
    }
  };


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

  var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_N",
    cssSelectorAncestor: "#jp_container_N"
  }, [
  ], {
    playlistOptions: {
      enableRemoveControls: true
    },
    supplied: "mp3",
    useStateClassSkin: false,
    autoBlur: false,
    smoothPlayBar: false,
    keyEnabled: false,
    audioFullScreen: false
  });



});