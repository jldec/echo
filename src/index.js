export default {
	async fetch(request, env, ctx) {
		return Response.json({
			time: new Date(),
			url: request.url,
			method: request.method,
			body: await request.text(),
			city: request.cf.city,
			country: request.cf.country,
			headers: Object.fromEntries(request.headers),
		});
	},
};
