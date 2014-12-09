
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
                songUrl: "http://freemusicarchive.org/music/download/8c040f180e3ddb06026e0438c559d225bc4aef58"
              },
              {
                name: "Impact Andante",
                songUrl: "http://freemusicarchive.org/music/download/7b6f73a58d383e99494b81408b48183cf4669b7d"
              },
              {
                name: "Impact Moderato",
                songUrl: "http://freemusicarchive.org/music/download/1d4a66b0abbd480f54ab988f68b6ff3ad1e70a53"
              },
              {
                name:"Impact intermezzo",
                songUrl:"http://freemusicarchive.org/music/download/10bf455c40c5ce0f31216ad68a5bbca1ce86caac"
              },
              {
                name:"Impact Allegretto",
                songUrl:"http://freemusicarchive.org/music/download/8341ea698f5b25c0914a284984143ce4be8f8205"
              },
              {
                name:"Impact Lento",
                songUrl:"http://freemusicarchive.org/music/download/dad1ff2afde271935f58b2a2360bf3299d1b5748"
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
                songUrl: "http://freemusicarchive.org/music/download/320f9608ee225796a471fad45ec9c086b223c8b4"
              },
              {
                name: "Bathed in the Light",
                songUrl: "http://freemusicarchive.org/music/download/4961e1ab6e24d45a17c8251188d3c768c8c03e43"
              },
              {
                name: "Calmant",
                songUrl: "http://freemusicarchive.org/music/download/50a59fad31fd2e7bd18c20bbd030012bb44127f4"
              },
              {
                name: "Carefree",
                songUrl: "http://freemusicarchive.org/music/download/e20f6afcfa8b4de35b742935de0fa7acef2335e0"
              },
              {
                name: "Clean Soul",
                songUrl: "http://freemusicarchive.org/music/download/04cc067e125ae109b3d2674e328aab376e5bee96"
              },
              {
                name: "Danse Morialta",
                songUrl: "http://freemusicarchive.org/music/download/d36bd1f1709065a50fa2a5f7007bff37f3530851"
              },
              {
                name: "Dream Culture",
                songUrl: "http://freemusicarchive.org/music/download/ea2040c9dc9bfc2d81793d787c3b1eb02a6cc9f2"
              },
              {
                name: "Enchanted Journey",
                songUrl: "http://freemusicarchive.org/music/download/27eff71edef45463aa0bce09957a411286f37eaf"
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
                songUrl: "http://freemusicarchive.org/music/download/162d1543b7073357e7d639686318de58b0fa9432"
              },
              {
                name: "2 Live at the Winston",
                songUrl: "http://freemusicarchive.org/music/download/48df5c1c99fcb340a23e58891deee6d0127f0bf3"
              },
              {
                name: "3 Live at the Winston",
                songUrl: "http://freemusicarchive.org/music/download/9bbf7d189673e2ae83643bdb4c3484c2fd2292b6"
              },
              {
                name: "4 Live at the Winston",
                songUrl: "http://freemusicarchive.org/music/download/8f65fff2d5db95948e41bd7ac573123ead03d649"
              },
              {
                name: "5 Live at the Winston",
                songUrl: "http://freemusicarchive.org/music/download/66ebbe26f66dca0549a68169a41ce6f934d9ccf3"
              },
              {
                name: "6 Live at the Winston",
                songUrl: "http://freemusicarchive.org/music/download/983a6697b6aec4daea3d2b551366f1fb98a8db90"
              },
              {
                name: "7 Live at the Winston",
                songUrl: "http://freemusicarchive.org/music/download/a28a20b7eed892e7f42fb20d361efaeb97f7b698"
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
                songUrl: "http://freemusicarchive.org/music/download/39d3e141238bc3ab9f51e6a37dab47493d90b471"
              },
              {
                name: "Terminal beach",
                songUrl: "http://freemusicarchive.org/music/download/9e1103509453910f350dc6d6f163f7ba59e655dc"
              },
              {
                name: "Up on the mountain",
                songUrl: "http://freemusicarchive.org/music/download/9e1103509453910f350dc6d6f163f7ba59e655dc"
              },
              {
                name: "Mr. Vader wants to see you in his office",
                songUrl: "http://freemusicarchive.org/music/download/2c717c3aeb2d64bbdeaf5b9804551ec47f11dcf4"
              },
              {
                name: "Laughing all the way to the morgue",
                songUrl: "http://freemusicarchive.org/music/download/8bacdadd447cc4718c3b66cc145ee6d9cdd46ee0"
              },
              {
                name: "Crooked mile",
                songUrl: "http://freemusicarchive.org/music/download/d86f6fe83032b10b5c4a6054341f87d37209b0a5"
              },
              {
                name: "Pjerwoje znakomstwa",
                songUrl: "http://freemusicarchive.org/music/download/0fc4be370be36799ce1b62497a80410684fa849e"
              },
              {
                name: "White hell",
                songUrl: "http://freemusicarchive.org/music/download/34c53f07ea02d36ca9d4b465cedcb884f3513192"
              },
              {
                name: "Formikula",
                songUrl: "http://freemusicarchive.org/music/download/38d99b85c9d368307a56d69b62733a2dce7c5a6e"
              },
              {
                name: "Ah yalan Irma",
                songUrl: "http://freemusicarchive.org/music/download/eff27aa5918391ff7f2a8f17e45f5e0bcaf7b57d"
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

      $('a.song').each(function(){

        var url = $(this).attr( "href" );

        var title;
        var artist;
        var mp3;

        self.songs.forEach(function(song){
          if(url == song.songUrl){

            title = song.songName;
            artist = song.songArtist;
            mp3 = song.songUrl;

          }
        });

        $(this).attr( "href", "");

        $(this).on('click', function(){

          console.log(title, artist, mp3);

          myPlaylist.add({
            title: title,
            artist:artist,
            mp3:mp3
          }, true);
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

      var songs = [];
      //console.log(this.album.songs);
      i = this.album.songs.length - 1;

      for(i; i >= 0; i--){
        var song = this.album.songs[i];

        songs.push({
          name: song.name,
          songUrl: song.songUrl
        });

      }

      this.model.set({
        artist: this.artist.name,
        album: this.album.name,
        albumImageUrl: this.album.imageUrl,
        songs: songs
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
    //{
    //  //title:"Cro Magnon Man",
    //  //artist:"The Stark Palace",
    //  //mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
    //  //poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
    //}
  ], {
    playlistOptions: {
      enableRemoveControls: true
    },
    supplied: "mp3",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: true
  });

  myPlaylist.add({
    title:"Your Face",
    artist:"The Stark Palace",
    mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
    oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg",
    poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
  }, true);



});