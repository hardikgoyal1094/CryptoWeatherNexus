# CryptoWeather Nexus 🌤️💰

A modern, multi-page dashboard that combines live weather data, cryptocurrency information, and real-time WebSocket notifications.

## 🌐 Live Demo
🔗 [Visit App](https://cryptoweathernexus.onrender.com)

---

## 🚀 Project Features

- 🌦️ Live weather data for major cities.
- 💸 Real-time cryptocurrency updates (BTC, ETH, DOGE).
- 🔔 WebSocket-powered real-time notification system.
- 🔁 Auto-refresh for updated weather/crypto metrics.
- 💡 Clean, responsive multi-page UI using [Your Frontend Framework].

---
## 🧠 Challenges & How They Were Resolved

| **Challenge**                     | **How It Was Resolved**                                                                                      |
|----------------------------------|--------------------------------------------------------------------------------------------------------------|
| API Key Management               | Used `.env` files with `dotenv` to securely manage API keys and avoid hardcoding them.                      |
| Styling and Layout Consistency   | Standardized card sizes with CSS, used Flexbox for alignment, and adjusted spacing and font sizes.          |
| EJS and Dynamic Rendering        | Learned EJS syntax and structured templates to render API data efficiently using Express.js.                |
| Deployment on Render             | Added a proper `start` script in `package.json` and configured environment variables correctly on Render.   |



## 🛠️ Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/cryptoweathernexus.git
cd cryptoweathernexus

# 2. Install dependencies
npm install express axios dotenv ejs

# 3. Run locally
npm start
