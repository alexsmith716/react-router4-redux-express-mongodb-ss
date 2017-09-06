
import { render } from 'react-dom';
import React from 'react';
import App from '../shared/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'whatwg-fetch';

render((

    <Router>

      <App data={window.__data__} />

    </Router>

), document.getElementById('app'));
