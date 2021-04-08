console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Welcome to Busexpress.com",
    icon :'http://openweathermap.org/img/wn/10d@2x.png'
  });
//event.waitUntil(self.registration.showNotification(data.title, data));
});