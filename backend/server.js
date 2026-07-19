const math = require("./math");
const runEventLoop = require("./eventLoop");
const triggerEvent = require("./events");

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight Request
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    return res.end("Node.js HTTP Server Running");
  }

  else if (req.url === "/read" && req.method === "GET") {
    const data = fs.readFileSync("./data.txt", "utf8");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    return res.end(data);
  }

  else if (req.url === "/save" && req.method === "POST") {

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {

    const { text } = JSON.parse(body);

    fs.writeFileSync("./data.txt", text);

    res.statusCode = 200;

    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        message: "Data Saved Successfully"
      })
    );

  });

     return;

}

else if (req.url === "/math" && req.method === "GET") {

  const sum = math.add(10, 20);

  const minus = math.subtract(20, 5);

  res.statusCode = 200;

  res.setHeader("Content-Type", "application/json");

  res.end(
    JSON.stringify({
      addition: sum,
      subtraction: minus,
    })
  );

}

else if (req.url === "/event-loop" && req.method === "GET") {

  runEventLoop();

  res.statusCode = 200;

  res.setHeader("Content-Type", "application/json");

  return res.end(
    JSON.stringify({
      message:
        "Event Loop executed successfully. Check the backend terminal."
    })
  );

}

else if (req.url === "/stream" && req.method === "GET") {

  console.log("Stream route hit");

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const stream = fs.createReadStream("./largeFile.txt");

  return stream.pipe(res);

}

else if (req.url === "/events" && req.method === "GET") {

  triggerEvent();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  return res.end(
    JSON.stringify({
      message: "Custom Event Triggered Successfully!"
    })
  );

}

  else{
  res.statusCode = 404;
  res.end("Route Not Found");
  }

});

server.listen(5000, () => {
  console.log("Server Running at http://localhost:5000");
});