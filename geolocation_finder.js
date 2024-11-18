const url = 'https://geopin-geo-coding-api-lat-lon.p.rapidapi.com/api//geocode/washington';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8f7703e485mshf26b7e0f2fb6b55p1cf50ajsn9092f5ae2b3b',
		'x-rapidapi-host': 'geopin-geo-coding-api-lat-lon.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}