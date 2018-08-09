function getData(spreadsheetId) {
    return new Promise(function (resolve, reject) {
     const req = new XMLHttpRequest()
      req.open('GET', `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=${key}`)

      req.onload = function () {
        
        if (req.status === 200) {
          resolve(req.response)
        } else {

          reject(req.status + ' ' + req.statusText)
        }
      }
      req.onerror = function () {
        reject('Erro de conexão')
      }
      req.send()
    })
  }




  
// 419 818719 914481 
// 419 488 71 
// 741