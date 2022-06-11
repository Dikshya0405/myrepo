
const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    /* fs.readFile("input.txt", (err, data) => {
        if (err) return console.error(err);
        console.log(data.toString());
});
});*/

    // server.listen(7000, "127.0.0.1");

    //2nd Way

    const rstream = fs.createReadStream("input.txt");
    rstream.on("data", (chunkdata) => {
        res.write(chunkdata);
    });
    rstream.on("end", () => {
        res.end();
    });
});

server.listen(7000, "127.0.0.1");


