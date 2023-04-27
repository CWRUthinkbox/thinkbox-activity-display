const https = require('https');

const baseId = 'appwKPlsDzMt9k08I'; // base id of TBX tool-loan base
const tableName = 'tblbXSfPY3SXNojxM'; // table id of table that we're viewing in tool-loans
const recordId = 'recCGR2qgkISoLUsV'; // Let's say we're editing record 643 (a test record Zack K. made)
const fieldName = 'FIRST NAME';
// const newValue = 'Nivita Test';

const footerSpace = document.querySelector('.footer-space') //access the footer from the html script
//footerSpace.textContent = "test";

const url = `https://api.airtable.com/v0/${baseId}/${tableName}/${recordId}`;
const headers = {
  'Authorization': 'Bearer patxcEsm9mgqsmesB.b96a8335ec0b3d838bdfc3a564259d38926bcf49da068bc56856299fc0ff3c48',
  'Content-Type': 'application/json'
};

const options = {
    method: 'GET',
    headers: headers
  };

const req = https.request(url, options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      const record = JSON.parse(data);
      const fieldValue = record.fields[fieldName];
      footerSpace.textContent = fieldValue;
      //console.log('fieldValue')
    });
  });
  
  req.write(JSON.stringify(data));
  req.end();



