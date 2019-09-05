Qrcode webcomponent
===================

Proof of concept of a simple webcomponent that renders a qrcode given an input url.

The webcomponent registers itself with the tag `qr-code` and accepts a parameter named `data` which should be an object with a property `url` containing the url.

## Build

Install dependencies with `npm install`

Build with `npm run build`

## Serving the component

Serve the `build` folder with a webserver or simply host the qr-code.js file somewer

If the webcomponent is to be used from other servers remember to configure CORS accordingly in your server

## Using the component

In your `html` `head` import the webcomponent:

    <script type="module" src="http://url.where.component.is.hosted/qr-code.js"></script>

Then put the tag somewhere in the document

    <qr-code data="{"url":"www.example.com"}"></qr-code>

note that the data parameter should be a valid json string. If you are generating such data from javascript, pass the object through JSON.stringify


