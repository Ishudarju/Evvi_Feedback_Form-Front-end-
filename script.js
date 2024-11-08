$(document).ready(function () {
    // Hide sections on page load
    $(".right").hide();
    $(".footer").hide();

    // Start button functionality
    $("#start-btn").on("click", function () {
        $(".intro").hide();
        $(".right").show();
    });

    // Next button functionality
    $("#next-btn").on("click", function () {
        $(".right").hide();
        $(".footer").show();
    });

    // Previous button functionality
    $("#prev-btn").on("click", function () {
        $(".footer").hide();
        $(".right").show();
    });

    // Submit button functionality
    $("#submit-btn").on("click", function () {
        toastr.success("Thank you for your submission!");

        submitFormData();
         resetForm();

       
    });
});

async function submitFormData() {
    // Gather form data
    const formData = {
        fullname: $("#fullname").val(),
        age: $("input[name='age']:checked").val(),
        currentStatus: $("#options").val(),
        city: $("#city").val(),
        country: $("#country").val(),
        // Include additional data for Student, Professional, or Other
        studentDetails: {
            college: $("input[name='college']").val(),
            yearstudy: $("input[name='yearstudy']").val(),
            major: $("input[name='major']").val()
        },
        professionalDetails: {
            jobtitle: $("input[name='jobtitle']").val(),
            company: $("input[name='company']").val(),
            industry: $("input[name='industry']").val()
        },
        otherDetails: $("input[name='otherdetails']").val(),
        goalFamiliarity: $("#familiarity-meaning").text(),
        effectiveness:$("#goal-effectiveness").val(),
        goalSetting: $("input[name='goal-setting']:checked").val(),
        goalReview: $("input[name='review']:checked").map(function () {
            return this.value;
        }).get(),
        goalChallenges: $("#goal-challenges").val(),
        goalTraining: $("#goal-training").val(),
    };

    // Sending data to the backend
    fetch('http://localhost:5001/form2/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form submitted:', data);
        // toastr.success('Form submitted successfully!');
        // resetForm(); // Optionally reset the form after submission
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        toastr.error('Failed to submit the form. Please try again.');
    });
}

// Function to reset the form (if needed)
function resetForm() {
// Hide all sections
$('#main-section, #footer-section').hide();

// Show the intro section again
$('#intro-section').show();
}

// Show/hide fields based on current status selection
function showFields() {
    const status = document.getElementById("options").value;
    document.getElementById("Student").style.display = status === "Student" ? "block" : "none";
    document.getElementById("Professional").style.display = status === "Professional" ? "block" : "none";
    document.getElementById("Other").style.display = status === "Other" ? "block" : "none";
}




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
    // console.log(meaning);
    document.getElementById('familiarity-meaning').textContent = meaning;
}



function updateValue(val) {
    document.getElementById('slider-value').innerText = 'Selected Value: ' + val + '%';
}

function showMeaning(val) {
    let meaning = '';
    switch (parseInt(val)) {
        case 0:
            meaning = 'Very Ineffective';
            break;
        case 20:
            meaning = 'Somewhat Ineffective';
            break;
        case 40:
            meaning = 'Neutral';
            break;
        case 60:
            meaning = 'Somewhat Effective';
            break;
        case 80:
            meaning = 'Effective';
            break;
        case 100:
            meaning = 'Highly Effective';
            break;
    }
    document.getElementById('slider-meaning').innerText = meaning;
}


