var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.popup = cordova.InAppBrowser.open('http://pospro.co','_blank','location=no,toolbar=no,zoom=no'); 
	app.popup.addEventListener("exit", function() {
             navigator.app.exitApp();
	});
    },

    online: function() {
	var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
	SpinnerDialog.show('Please Wait','Loading latest products...',true);
	app.popup = cordova.InAppBrowser.open('http://pospro.co','_blank','location=no,toolbar=no,zoom=no'); 
	app.popup.addEventListener("exit", function() {
             navigator.app.exitApp();
	});  
	SpinnerDialog.hide();
     }
};
