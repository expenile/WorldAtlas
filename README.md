# WorldAtlas 🌐

[![WorldAtlas](https://github.com/user-attachments/assets/a80b704f-72d8-4f50-a583-3947d143ea5d)](https://world-atlas-tau.vercel.app/)


Welcome to **WorldAtlas**, your ultimate guide to exploring countries around the globe! This project is built with React and Vite, providing a seamless and fast user experience. Dive into the details of any country with ease and enjoy a sleek, modern interface.

## Features

- 🌍 **Explore Countries**: Browse through a comprehensive list of countries with detailed information.
- 🔍 **Search and Filter**: Easily search for countries and filter them by region.
- ⚡ **Fast and Responsive**: Built with Vite and React for a blazing-fast experience.
- 🎨 **Modern UI**: Enjoy a clean and intuitive user interface.
- 📊 **Detailed Information**: Get insights into population, region, capital, and more.

## Tech Stack

- **Frontend**: React, Vite
- **Styling**: CSS (with modern layout techniques)
- **Icons**: React Icons
- **API**: REST Countries API

## Installation

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/expenile/WorldAtlas.git
    cd WorldAtlas
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

4. **Build for production**:
    ```bash
    npm run build
    ```

## API Used

I have utilized the **REST Countries API** to fetch detailed information about countries. This API provides comprehensive data, including country names, flags, population, region, and capital.

### How I Used the API

1. **Fetching Data**: I use the `getCountryData` function to fetch data from the API.
    ```javascript
    import axios from "axios";
    const api = axios.create({
      baseURL: "https://restcountries.com/v3.1",
    });
    export const getCountryData = () => {
      return api.get("/all?fields=name,population,region,capital,flags");
    };
    ```

2. **Fetching Individual Country Data**: I use the `getCountryIndData` function to fetch detailed data for a specific country.
    ```javascript
    export const getCountryIndData = (name) => {
      return api.get(
        `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
      );
    };
    ```

## Contributing

I welcome contributions! Please fork the repository and submit a pull request for any improvements or bug fixes.

---

Thank you for checking out **WorldAtlas**! I hope you enjoy exploring the world with us. 🌐