# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


---
# TrackTick Project

## Project Structure

The source code of the TrackTick application is organized into several directories within the `src` folder, each with a specific purpose:

### `components`

This directory contains all the React components used throughout the application. Each component is organized into subdirectories that match its context or functionality within the app.

- **Generic:** Contains reusable UI components like buttons, inputs, etc.

### `config`

Holds the configuration files for different aspects of the application. This can include settings for:

- **Pagination:** Default Pagination page limit
- **Search Delay:** Debounce delay searchDelay.

### `hooks`

Custom React hooks that encapsulate shared logic across components are stored here. This can include:

- **Data fetching:** Hooks that handle API requests and state management related to responses.
- **Utils:** Utility hooks that provide commonly used functionalities like debouncer, queryParameters, etc.


#### `useQueryParams`
The useQueryParams hook in the provided is designed to fetch and manipulate query parameters from the URL.

#### `useDebounce`
implements a debouncing mechanism for a given value




### `models`

Contains TypeScript interfaces or types that define the shape of data objects used throughout the application. This directory helps maintain a consistent data structure and type safety.

- **Component props:** Types or interfaces that define the props of React components.

### `services`

Service functions or utilities that interact with external services are located here, such as:

- **API requests:** Functions to make HTTP requests to backend services using libraries like Axios.




