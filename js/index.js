$(document).ready(function () {
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 100);
});

var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent('deviceready');
    console.log("log :: onDeviceReady :: function()");
    document.getElementById("Handler").addEventListener("mouseup", Handler);

    function Handler() {
      // external url
      var ref = cordova.InAppBrowser.open(encodeURI('https://18.136.244.209:9999'), '_self', 'location=no,hidden=no,clearcache=no,clearsessioncache=no,closebuttoncaption="Exit",hardwareback=yes,hidenavigationbuttons=no,hideurlbar=yes,lefttoright=no,zoom=yes,shouldPauseOnSuspend=yes');
      // relative document
      window.open = cordova.InAppBrowser.open;
      // ref = window.open('next.html', '_self');
      console.log("log :: ref = " + ref);
    }
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
    console.log("log :: receivedEvent: "+id);
  }
};

app.initialize();