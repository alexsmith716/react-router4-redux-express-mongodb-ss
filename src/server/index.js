
import dotenv from 'dotenv';
dotenv.config();
process.env.NODE_ENV = 'development';

import express from 'express';
import React from 'react';

import { StaticRouter as Router, matchPath } from 'react-router';
import sourceMapSupport from 'source-map-support';

import NoMatch from '../shared/NoMatch';
import Error from '../shared/Error';

import nodefetch from 'node-fetch';
import morgan from 'morgan';

console.log('JWT_SECRET???: ', process.env.JWT_SECRET);

// ... export a static function 'match' used by Route. 
// Make an array of routes, reduce using 'match' and then fetch your data

// define an array of routes for app
// first route is for initial requests for the main page, without any Gists selected
// second route is for displaying a selected Gist
const routes = [
  '/',
  '/g/:gistId'
];

sourceMapSupport.install();

const app = express();

app.use(morgan('dev'))

app.use('/static', express.static('./dist'));


app.use((req, res, next) => {
  console.log('>>>>>>>>>>> GOING THROUGH APP NOW <<<<<<<<<<<<<');
  console.log('REQ.method ++: ', req.method);
  console.log('REQ.url ++: ', req.url);
  // console.log('REQ.headers ++: ', req.headers)
  next();
});


// handle any request that comes in using an asterisk match
app.get('*', (req, res) => {

  // reduce routes array using the matchPath function from React Router; 
  // the result is a match object with information about the matching route and any parameters that may be parsed from the URL path.
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
  
  // if there is no matching route, render an error page that says: “Page not found”
  // the render function is a wrapper around React’s renderToString 
  // it adds the basic page HTML code around the React component’s HTML (<html>, <head>, <body>, etc.)
  if (!match) {
    res.status(404).send(render(<NoMatch />));
    return;
  }
  
  // fetching the data to populate App’s state from the GitHub API and rendering App component
  // using the StaticRouter component to initialize React Router
  // StaticRouter component type is the best choice for server-side rendering
  // It never changes its location, which desired for backend, 
  // backend is rendering once and not directly reacting to user interations
  // any errors that accur during process renders an error page
  nodefetch('https://api.github.com/users/alexsmith716/gists')

    .then(r => r.json())

    .then(gists => {

      res.status(200);
      res.json(gists)
      /*
      res.status(200).send(render(
        (
          <Router context={{}} location={req.url}>
            <App gists={gists} />
          </Router>
        ), gists
      ));
      */

    }).catch(err => {

      console.error(err);
      res.status(500).send(render(<Error />));

    });

});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
