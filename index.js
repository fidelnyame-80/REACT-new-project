const http = require("http"); // requiring http module from node

// creating the server function that will handle all http requests and naming it handleAllRequests
const handleAllRequests = (requestObject, responseObject) => {
    console.log("server running");

    const url = requestObject.url;
    const method = requestObject.method;

    if (method === "GET") {
        if (url === "/") {
            responseObject.writeHead(200, { "content-type": "text/plain" });
            responseObject.end("Welcome to my server");
        } else if (url === "/about") {
            responseObject.writeHead(200, { "content-type": "text/plain" });
            responseObject.end("About us");
        } else if (url === "/contact") {
            responseObject.writeHead(200, { "content-type": "text/plain" });
            responseObject.end("Contact us");
        } else if (url === "/time") {
            responseObject.writeHead(200, { "content-type": "text/plain" });
            responseObject.end(new Date().toString());
        } else if (url === "/api/student") {
            const studentData = {
                name: "Fidel",
                course: "Node.js",
                week: 1
            };

            responseObject.writeHead(200, { "content-type": "application/json" });
            responseObject.end(JSON.stringify(studentData));
        } else {
            responseObject.writeHead(404, { "content-type": "text/plain" });
            responseObject.end("404 NOT FOUND");
        }

    } else {
        responseObject.writeHead(404, { "content-type": "text/plain" });
        responseObject.end("404 NOT FOUND");
    }
};

// creating the server
const server = http.createServer(handleAllRequests);

server.listen(3000, "127.0.0.1", () => {
    console.log("server is running on port 3000");
});