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

| **Challenge** | **How It Was Resolved** |
|---------------|---------------------------|
| 🔑 **API Key Management** | Used `.env` file and `dotenv` to securely manage API keys without exposing them in public code. |
| 🌐 **CORS Issues** | Made API calls from the backend using Axios instead of frontend, which bypassed browser CORS restrictions. |
| 📱 **Responsive Design** | Used CSS Flexbox/Grid and tested layout to ensure the dashboard works on different screen sizes. |
| 🐌 **Slow Initial Load on Render** | Added a loader or retry mechanism to deal with cold starts of the Render free tier. |
| 🔒 **Rate Limiting on APIs** | Cached responses for short durations to avoid hitting API rate limits repeatedly. |


## 🛠️ Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/cryptoweathernexus.git
cd cryptoweathernexus

# 2. Install dependencies
npm install express axios dotenv ejs

# 3. Run locally
npm start
