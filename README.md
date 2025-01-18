# echo

Cloudflare worker deployed at https://echo.jldec.me/

```js
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
```

![Screenshot 2025-01-18 at 07 52 32](https://github.com/user-attachments/assets/739f127b-3f7f-45c4-ae98-7991f81e456e)
