defferedPromptToInstall = null;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('service worker installed'))
    .catch(err => console.error('Error', err));
}

window.addEventListener('beforeinstallprompt', function(evenet){
  console.log("Installation proimpt is about to trigger");
  event.preventDefault();
  defferedPromptToInstall = event;
  return false;
})
