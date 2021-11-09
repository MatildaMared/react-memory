const staticCacheName = "staticfiles";
const filesToCache = [
	"/index.html",
	"/index.js",
	"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap",
];

addEventListener("install", (installEvent) => {
	installEvent.waitUntil(
		caches
			.open(staticCacheName)
			.then((cache) => {
				// Success
			})
			.catch((error) => {
				// Error
			})
	);
});

addEventListener("active", (event) => {
	console.log("The service worker is activated!");
});

addEventListener("fetch", (requestEvent) => {
	console.log("The service worker is listening! 🥳");
	const request = requestEvent.request;
	console.log(request);
	requestEvent.respondWith(
		fetch(request)
			.then((responseFromFetch) => {
				return responseFromFetch;
			})
			.catch((error) => {
				return new Response("Oops! Something went wrong...");
			})
	);
});
