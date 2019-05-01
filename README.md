This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

`npm start` or `yarn start` and you are good to go

## What i changed here

I followed this link here, http://fullstackhybrid.com/using-materializecss-with-reactjs/

In App.js i used the `M.AutoInit()`, it Inits all Materialize CSS components with default options.

You can see Collapsible.js component, who have a Materialize JS component works fine with default options.

In Sidebar.js i used the `no-autoinit` class to prevent it to opens with default options.
I initialize sidebar inside Sidebar.js with custom options.