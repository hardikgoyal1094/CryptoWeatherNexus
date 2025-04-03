const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const cities = ["New York", "London", "Tokyo"];
const crypto = ["bitcoin", "ethereum", "dogecoin"];

app.get("/", async (req, res) => {
    console.log("Received request at /");
    try {
        console.log("Fetching weather data...");
        const weatherPromises = cities.map(city =>
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`)
        );
        const weatherData = await Promise.all(weatherPromises);
        const weather = weatherData.map((res, index) => ({
            city: cities[index],
            temp: res.data.main.temp,
            humidity: res.data.main.humidity,
            condition: res.data.weather[0].description
        }));
        console.log("Weather data fetched successfully.");

        console.log("Fetching crypto data...");
        const cryptoResponse = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto.join(",")}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`);
        const cryptoData = Object.keys(cryptoResponse.data).map(coin => ({
            name: coin,
            price: cryptoResponse.data[coin].usd,
            marketCap: cryptoResponse.data[coin].usd_market_cap,
            change24h: cryptoResponse.data[coin].usd_24h_change.toFixed(2)
        }));
        console.log("Crypto data fetched successfully.");

        console.log("Fetching news data...");
        const newsResponse = await axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.NEWS_API_KEY}&q=cryptocurrency`);
        const news = newsResponse.data.results.slice(0, 5).map(article => ({
            title: article.title,
            url: article.link
        }));
        console.log("News data fetched successfully.");

        res.render("index", { weather, crypto: cryptoData, news });
    } catch (error) {
        console.error("Error fetching dashboard data:", error.response ? error.response.data : error.message);
        res.status(500).send("Error fetching data.");
    }
});


app.listen(port, () => console.log(`Server is listening at port: ${port}`));
