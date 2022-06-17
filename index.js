const http = require("http");

const host = "localhost";
const port = 4000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200)
    res.end("Hello World");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});