async function getWeather() {
    const apiKey = 'your_api_key_here'; // Replace with your actual API key
    const city = document.getElementById('city').value.trim(); 

    if (!city) {
        alert('Please enter a city');
        return; 
    }

    try {
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

        const [currentWeatherResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);

        if (!currentWeatherResponse.ok) {
            throw new Error('City not found');
        }
        if (!forecastResponse.ok) {
            throw new Error('Forecast data not available');
        }

        const currentWeatherData = await currentWeatherResponse.json();
        const forecastData = await forecastResponse.json();

        // Call display functions (to be added in the next steps)
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching data. Please try again.');
    }
}
