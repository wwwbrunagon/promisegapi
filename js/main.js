const form = document.querySelector("form")
const input = document.querySelector("input")
const results = document.getElementById("results") 


form.addEventListener("submit", function(event){
    event.preventDefault()

    let spreadsheetId = input.value
    console.log(spreadsheetId)

    let matches = /\/([\w-_]{15,})\/(.*?gid=(\d+))?/.exec(spreadsheetId)
    console.log("Full matches = " + matches)

    if (matches !== null) {
      console.log("spreadsheetId = " + matches[1])            
      //results.innerHTML = ("spreadsheetId: " + matches[1])

      getData(matches[1])
      .then(result => {
          console.log('result = ' + result)
          const resultJSON = JSON.parse(result)
          console.log('typeof resultJSON = ' + typeof resultJSON)

          for(let ele of resultJSON["values"]) {
            // console.log(ele[1])
            // console.log(ele[3])
            results.innerHTML = ("spreadsheetId: " + ele[3])
            
          }
      })

      input.value = ' '
    }
 })

 

// 419 818719 914481 
// 419 488 71 
// 741