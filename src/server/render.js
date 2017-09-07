
import { renderToString } from 'react-dom/server';
import React from 'react';

export default (renderObject, data) => `<!DOCTYPE html>

<html lang="en-US">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="react-router4-redux-express-mongodb">
    <title>react-router4-redux-express-mongodb Demo</title>
    <link href="data:image/x-icon;" type="image/x-icon" rel="shortcut icon">
    <intercept-url pattern="/favicon.ico" access="ROLE_ANONYMOUS"></intercept-url>

    <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/app/style.css" rel="stylesheet" type="text/css">

    <script>
      var isSafari = (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
      var interactiveFormValidationEnabled = false
      var appVersion = navigator.appVersion
      var webkitVersion1 = appVersion.indexOf('AppleWebKit/') + 12
      var webkitVersion2 = webkitVersion1 + 3
      var webkitVersion = appVersion.slice(webkitVersion1, webkitVersion2)
      webkitVersion = parseInt(webkitVersion, 10)
      if (webkitVersion >= 603 || !isSafari) {
        interactiveFormValidationEnabled = true
      } 
      
    </script>
  </head>

  <body>

    <div id="app">${renderToString(renderObject)}</div>

      ${data ? `
        <script>window.__data__ = ${JSON.stringify(data)};</script>
        <script src="/static/clientBundle.js"></script>
        ` : ''}

  </body>

</html>`;