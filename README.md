# Recipe App

A simple React-based application that allows users to search for recipes, view details, and read cooking instructions. The app fetches recipe data from the [TheMealDB API](https://www.themealdb.com/).

## Features
- Search for recipes by name
- Display recipe images and titles
- View full cooking instructions
- Expand/collapse recipe instructions for better readability
- Responsive design for various screen sizes

## Technologies Used
- React.js
- Tailwind CSS
- TheMealDB API

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/recipe-app.git
   ```

2. Navigate to the project directory:
   ```sh
   cd recipe-app
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm start
   ```

## Usage
- Enter a food name in the search bar.
- Click the "Get Recipe" button to fetch recipes.
- Click on "Read More" to expand the cooking instructions.
- Click on "Read Less" to collapse the instructions.

## API Reference
- This app uses [TheMealDB API](https://www.themealdb.com/api.php) to fetch recipe data.
- Example API request:
  ```sh
  https://www.themealdb.com/api/json/v1/1/search.php?s=pasta
  ```

## Project Structure
```
recipe-app/
│-- src/
│   ├── App.jsx  # Main React component
│   ├── index.js  # Entry point
│   ├── styles.css  # Global styles (if any)
│-- public/
│-- package.json
│-- README.md
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is open-source and available under the MIT License.

