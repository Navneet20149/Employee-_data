# Employee-_data
Attach the project to the Git and generate Readme of experiment 1.2
**Index.html**
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    table {
        width: 90%;
        margin:auto ;
        height: 33rem;
        text-align : center;
        font-size: large;
        background:#f9c3d6;
        padding: 1px;
        color:black;
        border: 2px solid blue;
    }
    h1{
        text-align: center;
    }
    .eee{
        display: none;
    }
    button{
       text-align: center;
       justify-content: space-between;
       width: 10rem;
       height: 2rem;
       background-color:deepskyblue;
       cursor: pointer;
    }
    
    .btn1{
        margin-left: 32rem;
        margin-top: 1rem;
    }
</style>
<body>
    <h1> Employee Salary Table.</h1>
    <table border="1 solid black">
        <tbody>
            <tr>
                <th>Name</th>
                <th> UID </th>
                <th>City</th>
                <th>Job role</th>
                <th>Salary</th>
            </tr>
            <tr>
                <td> Navneet </td>
                <td> 20149 </td>
                <td>Bettiah</td>
                <td> Developer </td>
                <td>
                    <input type="text" id="emp1" class="emp" />
                </td>
            </tr>

            <tr>
                <td>Aryan </td>
                <td> 20145 </td>
                <td> Lucknow </td>
                <td> Programmer </td>
                <td>
                    <input type="text" id="emp2" class="emp" />
                </td>
            </tr>

            <tr>
                <td>Pushpam</td>
                <td>20132</td>
                <td>Madhubani</td>
                <td>Analyst</td>
                <td>
                    <input type="text" id="emp3" class="emp" />
                </td>
            </tr>
            <tr>
                <td> Sachin </td>
                <td>20564</td>
                <td> Gaya </td>
                <td> Coder </td>
                <td>
                    <input type="text" id="emp4" class="emp" />
                </td>
            </tr>
            <tr>
                <td> Anand </td>
                <td>20558</td>
                <td> Chhapra </td>
                <td> Developer </td>
                <td>
                    <input type="text" id="emp5" class="emp" />
                </td>
            </tr>
            <tr>
                <td> Pushpdip </td>
                <td>20149</td>
                <td> Bihar </td>
                <td> Coder </td>
                <td>
                    <input type="text" id="emp6" class="emp" />
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn1" onclick="show()">show</button>
    <button class="btn1" onclick="tsalar()">Total Sallary</button>
  </div>

  <script>
   let data1 = 104500;   //dev
    let data2 = 95000;   //pro
    let data3 = 85000;   //ana
    let data4 = 80000;   //coder
    let data5 = 90000;
    function show() {
      let emp1 = (document.getElementById("emp1").value = data1);
      let emp2 = (document.getElementById("emp2").value = data2);
      let emp3 = (document.getElementById("emp3").value = data3);
      let emp4 = (document.getElementById("emp4").value = data4);
      let emp5 = (document.getElementById("emp5").value = data1);
      let emp6 = (document.getElementById("emp6").value = data4);
    }
    function tsalar(){
        let total=data1+data2+data3+data4+data5;
        alert(total);
        document.getElementById("totalsalary").value = total   }
  </script>
</body>
</html>



                  **DESCRIPTION**
 This HTML document creates a web page for displaying an employee salary table. Here's a short description of the code:
It defines an HTML5 document structure with metadata and a title.
There's a CSS <style> section that styles a table, headings, and buttons.
The page contains an employee salary table with columns for Name, UID, City, Jobrole, and Salary.
JavaScript functions are included:
show(): Sets predefined salary values for employees when the "show" button is clicked.
tsalary(): Calculates and displays the total salary of all employees when the "Total Salary" button is clicked. However, there's a missing data5 variable and an issue setting the total salary value.
The code has some structural and logical issues, such as the missing data5 variable and an attempt to set a non-existent element's value for total salary.

                 **INDEX.JS**
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
                                      **DESCRIPTION**
                                      This Node.js code is designed to create a simple HTTP server that serves an HTML file and appends a "Total Salary" message to it. Here's a description of the code:

Importing Modules:

fs and fs1 (File System): These modules are used to read and write files. fs.promises is used for asynchronous file operations, and fs1 is used for synchronous file operations.
http: This module is used to create an HTTP server.
readFile Function:

This asynchronous function is defined to read a file given a filePath.
It uses fs.promises.readFile to read the file asynchronously.
If the file is successfully read, it logs the file's content to the console and then writes the same content to a new file named "newFile.html" using fs.promises.writeFile.
Reading and Serving HTML File with HTTP Server:

An HTTP server is created using http.createServer. It takes a callback function that handles incoming requests (req) and sends responses (res).
Inside the callback function:
It reads the "newFile.html" file using fs1.readFile. If an error occurs during reading, it sends a 404 status code and logs an error message.
If the file is successfully read, it sets the HTTP response's Content-type header to "text/html."
It writes the file's content to the response using res.write.
It appends an <h1> element to the response, displaying "Total Salary = 729000."
The server listens on port 8080.
In summary, this code reads an "index.html" file asynchronously, writes its content to a new file named "newFile.html," and then creates an HTTP server that serves "newFile.html" along with an appended message about the total salary. When you access this server at http://localhost:8080, you will see the contents of "newFile.html" along with the "Total Salary" message.

