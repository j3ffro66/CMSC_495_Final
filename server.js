const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 3000;
app.set('port', PORT);
const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${PORT}`));