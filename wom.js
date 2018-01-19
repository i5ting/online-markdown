const opn = require('opn');
const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

// Serve up public/ftp folder
const serve = serveStatic('public/ftp', {'index': ['index.html', 'index.htm']})

// Create server
const server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(4002)

// Opens the url in the default browser
opn('http://127.0.0.1:4002');

