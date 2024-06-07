// serviceWorker.js

// URL to the service worker file
const SW_URL = `${process.env.PUBLIC_URL}/service-worker.js`;

// Register the service worker
export const register = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(SW_URL).then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(error => {
        console.error('Service Worker registration failed:', error);
      });
    });
  }
};

// Unregister the service worker
export const unregister = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister().then(() => {
        console.log('Service Worker unregistered');
      }).catch(error => {
        console.error('Service Worker unregistration failed:', error);
      });
    });
  }
};
