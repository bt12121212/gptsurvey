async function submitSurvey() {
    let forms = ['form1', 'form2', 'form3', 'form4', 'form5'];
    let result = {};

    forms.forEach((formId, index) => {
      let form = document.getElementById(formId);
      let questionName = 'q' + (index + 1);
      let input = form.elements[questionName];
      result[formId] = input.value;
    });

    let response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(result)
    });

    if(response.ok) {
      alert('Result saved successfully!');
    } else {
      alert('An error occurred while saving the result.');
    }
  }