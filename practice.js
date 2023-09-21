const fs = require('fs');
const http = require('http');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const port = 3000;
const htmlFilePath = 'index.html';
const newEmployees = [
  {
    SLNo: 9,
    name: 'Harry',
    uid: 20559,
    city: 'Purnia',
    jobRole: 'Developer',
    salary: 104500
  },
  {
    SLNo: 10,
    name: 'Sumit Nayan',
    uid: 20706,
    city: 'Lakhisarai',
    jobRole: 'Programmer',
    salary: 95000
  }
  
];
fs.readFile(htmlFilePath, 'utf8', (err, htmlContent) => {
  if (err) {
    console.error('Error reading HTML file:', err);
    return;
  }
  const $ = cheerio.load(htmlContent);

  
  newEmployees.forEach((employee, index) => {
    const newRow = `
      <tr>
        <td>${employee.SLNo}</td>
        <td>${employee.name}</td>
        <td>${employee.uid}</td>
        <td>${employee.city}</td>
        <td>${employee.jobRole}</td>
        <td><input type="text" id="emp${index + 9}" class="emp" value="${employee.salary}" /></td>
      </tr>
    `;

    $('tbody').append(newRow);
  });

  const updatedHtml = $.html();

  fs.writeFile('updatedEmployeeTable.html', updatedHtml, writeErr => {
    if (writeErr) {
      console.error('Error writing updated HTML file:', writeErr);
    } else {
      console.log('Updated HTML file saved as updatedEmployeeTable.html');
    }
  });

  app.get('/', (req, res) => {
    res.send($.html());
  });

  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
});

