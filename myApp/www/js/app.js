// Ionic moneySpyApp App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'moneySpyApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'moneySpyApp.controllers' is found in controllers.js
angular.module('moneySpyApp', ['ionic', 'moneySpyApp.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.sBal', {
    url: "/starting_balance",
    views: {
      'menuContent': {
        templateUrl: "templates/totalBalance.html"
      }
    }
  })

  .state('app.oBal', {
    url: "/opening_balance",
    views: {
      'menuContent': {
        templateUrl: "templates/openingBalance.html"
      }
    }
  })
  .state('app.recentAct', {
      url: "/recent_activities",
      views: {
        'menuContent': {
          templateUrl: "templates/recentActivities.html",
          controller: 'RecentActivityCtrl'
        }
      }
  })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.expense', {
    url: "/expense",
    views: {
      'menuContent': {
        templateUrl: "templates/expenses.html"
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/recent_activities');
});
