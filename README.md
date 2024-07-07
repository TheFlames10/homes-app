# Housing App

This is a Housing Application built with Angular that displays a list of housing locations. Users can filter the locations by city and view detailed information about each location.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Angular CLI](https://angular.io/cli) (v12 or higher)
- [JSON Server](https://github.com/typicode/json-server)

### Steps

1. Clone the repository:

```sh
git clone https://github.com/your-username/housing-app.git
cd housing-app
```

2. Install the dependencies:

```sh
npm install
```

3. Start the JSON server:

```sh
json-server --watch db.json
```

4. Start the Angular application:

```sh
ng serve
```

5. Open your browser and navigate to `http://localhost:4200`.

## Usage

- **Filter Locations**: Use the search bar to filter housing locations by city.
- **View Details**: Click on a housing location to view detailed information.

## Features

- Display a list of housing locations.
- Filter locations by city.
- View detailed information about each housing location.
- Submit an application (log to console).

## API

This project uses a local JSON server to simulate an API. The server uses the `db.json` file as its data source.

### Endpoints

- **GET** `/locations`: Get all housing locations.
- **GET** `/locations/:id`: Get a housing location by ID.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
