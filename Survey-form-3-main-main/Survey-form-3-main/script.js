$(document).ready(function() {
    // Start button
    $('#start-btn').on('click', function() {
      $('#intro-section').hide();
      $('#header-section').show();
      console.log("1");
      
    });
  
    // Navigation for header section
    $('#next-header').on('click', function() {
      $('#header-section').hide();
      $('#main-section').show();
      console.log("2");

      
    });
  
    $('#prev-header').on('click', function() {
      $('#header-section').hide();
      $('#intro-section').show();
      console.log("3");

    });
  
    // Navigation for main section
    $('#next-main').on('click', function() {
      $('#main-section').hide();
      $('#footer-section').show();
    });
  
    $('#prev-main').on('click', function() {
      $('#main-section').hide();
      $('#header-section').show();
    });
  
    // Navigation for footer section
    $('#prev-footer').on('click', function() {
      $('#footer-section').hide();
      $('#main-section').show();
    });
  
    // Submit button
    $('#submit-btn').on('click', function() {
      // Here you would typically handle form submission via AJAX or similar
      toastr.success('Thank you for your feedback!');
  
      // Optionally reset the form or redirect
      submitFormData();
      resetForm();
    });
  });
  
  // Function to reset the form (if needed)
  function resetForm() {
    // Hide all sections
    $('#header-section, #main-section, #footer-section').hide();
    
    // Show the intro section again
    $('#intro-section').show();
  }

  
  async function submitFormData() {
    // Gather form data
    const formData = {
      achievinggoal: $("#achieving-meaning").text(),
        // learned: $("textarea[name='learned']:checked").val(),
        learned: $("#learned").val(),
        metervalue: $("#selected-meaning").text(),
        familiarity: $("#familiarity-meaning").text(),
        scalefamiliarity: $("#meaning").text(),
        improvedTraining: $("#improvedtraining").val(),
        attend:$("input[name='attend']").val(),
        email: $("#email").val(),
        phone: $("#phone").val()
    };

    // Sending data to the backend
    fetch('http://localhost:5001/form3/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.headers.get('content-type')?.includes('application/json')) {
          return response.json();
      } else {
          return response.text(); // For plain text responses
      }
  })
  .then(data => {
      console.log("Form submitted successfully:", data);
  })
  .catch(error => {
      console.error("Error submitting form:", error);
  });
}



function showTheMeaning(element, value) {
  const meanings = {
      1: "Not satisfied",
      2: "Somewhat satisfied",
      3: "Satisfied",
      4: "Very satisfied",
      5: "Extremely satisfied"
  };

  // Clear previous meanings
  document.querySelectorAll('.meaning-item').forEach(span => span.textContent = '');

  // Set the meaning below the clicked emoji
  const meaningElement = element.nextElementSibling; // Get the next sibling element (meaning span)
  meaningElement.textContent = meanings[value]; // Set the meaning text

  // Set the metervalue in the hidden input field
  document.getElementById("metervalue").value = value;
  document.getElementById("selected-meaning").textContent = meanings[value];
}


// question 2 //

function updateFamiliarityValue(value) {
    // Show the output div when the user interacts with the slider
    document.getElementById('familiarity-output').style.display = 'block';

    // Update the displayed rating number
    document.getElementById('familiarity-value').textContent = value;

    // Update the meaning based on the value
    let meaning;
    switch(value) {
        case '1':
            meaning = 'Not Familiar';
            break;
        case '2':
            meaning = 'Slightly Familiar';
            break;
        case '3':
            meaning = 'Moderately Familiar';
            break;
        case '4':
            meaning = 'Very Familiar';
            break;
        case '5':
            meaning = 'Extremely Familiar';
            break;
        default:
            meaning = 'Unknown';
    }

    // Update the meaning text
    document.getElementById('familiarity-meaning').textContent = meaning;
}



// question 3 //

function updateScaleValue(value) {
    // Show the output div when the user interacts with the slider
    document.getElementById('familiar-output').style.display = 'block';

    // Update the displayed rating number
    document.getElementById('familiar-value').textContent = value;

    // Update the meaning based on the value
    let meaning;
    switch(value) {
        case '1':
            meaning = 'Not Likely';
            break;
        case '2':
            meaning = 'Unlikely';
            break;
        case '3':
            meaning = 'Neutral';
            break;
        case '4':
            meaning = 'Likelyr';
            break;
        case '5':
            meaning = 'Highly Likely';
            break;
        default:
            meaning = 'Unknown';
    }

    // Update the meaning text
    document.getElementById('meaning').textContent = meaning;
}



// footer //
function toggleContactOptions() {
    const emailBox = document.getElementById('email-box');
    const phoneBox = document.getElementById('phone-box');
    const updatesYes = document.querySelector('input[name="updates"][value="yes"]:checked');
    
    if (updatesYes) {
      emailBox.style.display = 'block';  // Show email input
      phoneBox.style.display = 'block';   // Show phone input
    } else {
      emailBox.style.display = 'none';   // Hide email input
      phoneBox.style.display = 'none';    // Hide phone input
    }
  }


  function updateAchievingGoalValue(value) {
    // Show the output div when the user interacts with the slider
    document.getElementById('achieving-output').style.display = 'block';

    // Update the displayed rating number
    document.getElementById('achieving-value').textContent = value;

    // Update the meaning based on the value
    let meaning;
    switch(value) {
        case '1':
            meaning = 'Not confident';
            break;
        case '2':
            meaning = 'Slightly confident';
            break;
        case '3':
            meaning = 'Moderately confident';
            break;
        case '4':
            meaning = 'Very confident';
            break;
        case '5':
            meaning = 'High confident';
            break;
        default:
            meaning = 'Unknown';
    }

    // Update the meaning text
    document.getElementById('achieving-meaning').textContent = meaning;
}