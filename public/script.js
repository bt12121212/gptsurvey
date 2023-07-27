async function submitSurvey() {
    let forms = [document.getElementById("form1"), 
                 document.getElementById("form2"), 
                 document.getElementById("form3"), 
                 document.getElementById("form4"), 
                 document.getElementById("form5")];
    let surveyResult = {};
  
    for(let form of forms) {
      let inputs = form.elements;
      for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].checked) {
          if(Array.isArray(surveyResult[inputs[i].name])) {
            surveyResult[inputs[i].name].push(inputs[i].value);
          } else {
            surveyResult[inputs[i].name] = [inputs[i].value];
          }
        }
      }
    }
  
    let response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(surveyResult)
    });
  
    if(response.ok) {
      alert("Survey submitted successfully!");
    } else {
      alert("Failed to submit survey!");
    }
  }
  
  async function checkSurvey() {
    let password = prompt("请输入密码:");
    let response = await fetch("/api/download?password=" + password);

    let tempcheck = prompt(response);
    if(response.ok) {
      let results = await response.json();
      console.log(results);
      // Now you can display the results on the page, for example in a new div.
    } else {
      alert("Incorrect password!");
    }
  }
  