var fs = require('fs');
var http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  response.end(`Handling a request on port ${port}`)
  try {
    fs.writeFileSync('hello-world.txt', 'Hello to this great world');

    console.log('Success');
  } catch (err) {
    console.log(JSON.stringify(err));
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  console.log(`server is listening on ${port}`);
});
