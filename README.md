# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



// Components
1. Functional Component - components that only contain render method & stateless component
2. Class Component - it requires u to extend from React.Component & stateful compoenent , it can hold and manage state.

// state
1. state are the heart of react compoent
2. to define state add class constructor which assigns a initial state by using this.state , and property can be rendered inside render() method
3. to set the state it is require to call super() method in constructor, this.state is uninitialized before super method called

// props
1. props stands for Properties , They are immutable .
2. It gives way to pass data from one component to other component , it is similar to function arguments, they pass in same way as arguments pass in function.
3. when we need to pass immutable data in component , we have to add props to reactDom.render() method in main.js file and use it inside the component in wherever component needed.
4. we need to call super() method inside constructor to access props 

// constructor
1. it is use to initialized state 
2. using this inside contructor
3. To initialize third party libraries in it
4. Binding some context(this) when u need a class method to be passed in props to children

// React component API
1. setState() method - it is used to update state of the component . it only adds changes to original state
2. forceUpdate() method - this method allows us to update component manually
3. findDOMNode() method - for DOM Manipulation , this method allows us to find or access the underlying DOM node.

// lifecycle of component
1. Initial Phase - it contains default props and initial state by method getDefaultProps() getInitialState()
2. Mounting Phase - instance of component created and inserted into DOM 
   1.compponentWillMount() - this is call before componenent gets rendered into DOM
   2.componentDidMount() - it is called after component gets rendered into DOM
   3.render() - it is responsible to return a single root HTML node
3. Updating Phase() - here we get new Props and State 
   1.componentWillReceiveProps() - it is called when component receives new props
   2.shouldComponentUpdate() 

   // React Forms
   1. Uncontrolled component - here we have to use ref to access the input value React.creatRef();
   2. Controlled component - here we use setState() method to update data

 // Transition
 1. Transition
 2. CSS Transition
 3. Transition Group