const fs = require('fs').promises;
const fs1 = require('fs');
const http = require('http');


async function readFile(filePath){
    try{
        const data = await fs.readFile(filePath);
        console.log(data.toString());
        const data1 = data.toString();

        fs.writeFile('newFile.html', data1)
    }catch(error){
        console.log("Error", error, "in file ", filePath );
    }
}
readFile('index.html');
http.createServer(function (req, res){
    fs1.readFile('newFile.html', function(err, data) {
        if (err) {
            res.writeHead(404);
          console.error('Error reading HTML file:', err);
          res.end();
        }
        else {
            res.writeHead(200, {'Content-type': 'text/html'})
            res.write(data);
            res.write("<h1>Total Salary = 729000</h1>");
        }
    });

}).listen(8080);


