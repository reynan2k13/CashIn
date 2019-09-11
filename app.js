
const http = require('http');
const port = 3000;
const fs = require('fs');
const request = require('request');
const filePath = './input.json';


const requestHandler = (request, response) => {
  console.log(request.url)
	response.end('Hello Node.js Server!');

}

const server = http.createServer(requestHandler);


server.listen(port, (err) => {
  	if (err) {
    	return console.log('something bad happened', err);
  	}

	fs.readFile(filePath, 'utf8', (err, jsonString) => {
		if (err) {
			console.log("File read failed:", err);
			return
		}
	    console.log('File data:', jsonString);
	});




	request('http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in', { json: true }, (err, res, body) => {
		if (err) { return console.log(err); }
		console.log(body);
	});

  console.log(`server is listening on ${port}`);

})