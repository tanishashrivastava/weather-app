// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=New+Delhi';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8f7703e485mshf26b7e0f2fb6b55p1cf50ajsn9092f5ae2b3b',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function fetchWeatherData() {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result, 'result');
	} catch (error) {
		console.error(error, 'error');
	}
}

fetchWeatherData();
