const http = require("http");
const server = http.createServer((req, res) => {
    //console.log(req.url);
    if (req.url == "/") {
        res.end("Hello from the other side");
    } else if (req.url == "/about") {
        res.end("Hello from the About us side");
    } else {
        res.end("404 error");
    }

    res.end("Helllo from the other side");

});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port number 8000");

});