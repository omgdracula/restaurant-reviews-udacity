//register the service worker 
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  	.register('service-worker.js')
  	.then(function(){console.log('service worker registered')});
}