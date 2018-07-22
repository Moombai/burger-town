## Burger Town

Burger town is a single page React application bootstrapped with Facebook's wonderful `create-react-app` toolkit. The application itself shows a number of burger eateries placed on a map and displays further information when the map markers have been clicked. This project demonstrates responsive features in React, integration with third party API’s such as Google Maps (without using library), management of asynchronous data, semantic HTML and accessibility.

### Dependencies
- The project was bootstrapped using [Create React App](https://github.com/facebook/create-react-app)
- Location data has been retrieved using the [FourSquare API](https://developer.foursquare.com/)

### Running this project
- Navigate to the directory where you intend to run this app
- Clone the repository
- Install the project dependencies with `npm install`
- Start the development server with `npm start`

### Deployment to production
This application can be ejected from the create-react-app environment and deployed to production. This comes with the added benefit of Service Worker Scripts that will cache pages for offline use.

To deploy to production:
- Build for production using `npm run build`
- Navigate to the build directory and run the application with the server of your choice