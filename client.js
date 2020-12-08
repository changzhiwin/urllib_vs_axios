const urllib = require('urllib'); // "version": "2.36.1"
const axios = require('axios');   // "version": "0.21.0"

let pdata = {
  "req_query": [
      {
          "name": "source",
          "required": "1",
          "example": "wx",
          "desc": "来源改了ba"
      }
  ],
  "req_headers": [
      {
          "name": "Content-Type",
          "value": "application/json"
      },
      {
          "name": "X-say",
          "value": "are you ok",
          "example": "hi",
          "desc": "问候"
      }
  ],
  "id": "11"
}

async function sendPost(type) {

  let rdata = Object.assign( {
    "token": "20aa89bc9c1369a56",
    "catid": "24"
  }, pdata);

  console.log(rdata)

  let res;

  if (type === 0) {
    res = await urllib.request(`http://127.0.0.1:3000/`, {
      method: 'POST',
      contentType: 'application/json',
      data: rdata,
      dataType: 'json'
    });
  } else {
    res = await axios({
      method: 'post',
      url: 'http://127.0.0.1:3000/',
      headers: {
        contentType: 'application/json',
      },
      data: rdata
    })
  }

  console.log('res ====')
  console.log(res.data)
}

//sendPost(0)
sendPost(1)