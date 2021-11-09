addEventListener("install", (event) => {
	console.log("The service worker is installing!");
});

addEventListener("active", (event) => {
	console.log("The service worker is activated!");
});

addEventListener("fetch", (event) => {
	console.log("The service worker is listening! 🥳");
	const request = event.request;
	console.log(request);
  event.respondWith(
    fetch(request)
      .then(responseFromFetch => {
        return responseFromFetch;
      })
      .catch(error => {
      return new Response("Oops! Something went wrong...")
    })
  )
});
