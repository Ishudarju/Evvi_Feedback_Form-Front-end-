document.addEventListener("DOMContentLoaded", function () {
  function showSlidesAfterLoading() {
    document.querySelector(".loading-container").style.display = "none";
    document.querySelector(".container").style.display = "block";
    document.getElementById("slide1").classList.add("active");
  }

  setTimeout(showSlidesAfterLoading, 3000);
});

// btns//


document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Function to show a specific slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";

      // Toggle 'required' attribute based on visibility
      slide.querySelectorAll("input, textarea, select").forEach((input) => {
        if (i === index) {
          input.setAttribute("required", "true");
        } else {
          input.removeAttribute("required");
        }
      });
    });
  }

  // Initialize the first slide
  showSlide(currentSlide);

  // Function to go to the next slide
  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  }

  // Function to go to the previous slide
  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  }

  // Event listeners for the buttons
  document.querySelectorAll(".btns").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission and page refresh

      if (this.textContent.trim() === "NEXT") {
        nextSlide();
      } else if (this.textContent.trim() === "PREV") {
        prevSlide();
      } else if (this.textContent.trim() === "START") {
        nextSlide();
      } else if (this.textContent.trim() === "Submit") {
        alert("Form submitted!");
      }
    });
  });
});


// slide 2//

function updateValue(value) {
  const ageGroupLabels = ["Under 18", "18-24", "25-34", "35-44", "45 above"];
  
  // Remove 'active' class from all labels
  const labels = document.querySelectorAll(".range-label");
  labels.forEach((label) => label.classList.remove("active"));

  // Add 'active' class to the selected label
  const activeLabel = document.getElementById(`label-${value}`);
  if (activeLabel) {
    activeLabel.classList.add("active");
  }
console.log(value);
  // Set the selected age group label in hidden input field
  document.getElementById("fun-meter-values").value = ageGroupLabels[value];
}





// // slide 3 //

// function toggleOtherField(show) {
//   var otherTextField = document.getElementById("otherTextField");
//   if (show) {
//     otherTextField.style.display = "block";
//   } else {
//     otherTextField.style.display = "none";
//   }
// }
function toggleOtherField(show) {
  var otherTextField = document.getElementById("otherTextField");
  if (show) {
      otherTextField.style.display = "block";
  } else {
      otherTextField.style.display = "none";
      document.getElementById("other_status").value = ''; // Clear the "Other" field when hidden
  }
}

// slide5//

var stateObject = {
  India: {
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tirunelveli",
      "Tiruppur",
      "Ranipet",
      "Nagercoil",
      "Thanjavur",
      "Vellore",
      "Kancheepuram",
      "Erode",
      "Tiruvannamalai",
      "Pollachi",
      "Rajapalayam",
      "Sivakasi",
      "Pudukkottai",
      "Neyveli (TS)",
      "Nagapattinam",
      "Viluppuram",
      "Tiruchengode",
      "Vaniyambadi",
      "Theni Allinagaram",
      "Udhagamandalam",
      "Aruppukkottai",
      "Paramakudi",
      "Arakkonam",
      "Virudhachalam",
      "Srivilliputhur",
      "Tindivanam",
      "Virudhunagar",
      "Karur",
      "Valparai",
      "Sankarankovil",
      "Tenkasi",
      "Palani",
      "Pattukkottai",
      "Tirupathur",
      "Ramanathapuram",
      "Udumalaipettai",
      "Gobichettipalayam",
      "Thiruvarur",
      "Thiruvallur",
      "Panruti",
      "Namakkal",
      "Thirumangalam",
      "Vikramasingapuram",
      "Nellikuppam",
      "Rasipuram",
      "Tiruttani",
      "Nandivaram-Guduvancheri",
      "Periyakulam",
      "Pernampattu",
      "Vellakoil",
      "Sivaganga",
      "Vadalur",
      "Rameshwaram",
      "Tiruvethipuram",
      "Perambalur",
      "Usilampatti",
      "Vedaranyam",
      "Sathyamangalam",
      "Puliyankudi",
      "Nanjikottai",
      "Thuraiyur",
      "Sirkali",
      "Tiruchendur",
      "Periyasemur",
      "Sattur",
      "Vandavasi",
      "Tharamangalam",
      "Tirukkoyilur",
      "Oddanchatram",
      "Palladam",
      "Vadakkuvalliyur",
      "Tirukalukundram",
      "Uthamapalayam",
      "Surandai",
      "Sankari",
      "Shenkottai",
      "Vadipatti",
      "Sholingur",
      "Tirupathur",
      "Manachanallur",
      "Viswanatham",
      "Polur",
      "Panagudi",
      "Uthiramerur",
      "Thiruthuraipoondi",
      "Pallapatti",
      "Ponneri",
      "Lalgudi",
      "Natham",
      "Unnamalaikadai",
      "P.N.Patti",
      "Tharangambadi",
      "Tittakudi",
      "Pacode",
      "O' Valley",
      "Suriyampalayam",
      "Sholavandan",
      "Thammampatti",
      "Namagiripettai",
      "Peravurani",
      "Parangipettai",
      "Pudupattinam",
      "Pallikonda",
      "Sivagiri",
      "Punjaipugalur",
      "Padmanabhapuram",
      "Thirupuvanam",
    ],

    Kerala: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Kollam",
      "Thrissur",
      "Palakkad",
      "Alappuzha",
      "Malappuram",
      "Ponnani",
      "Vatakara",
      "Kanhangad",
      "Taliparamba",
      "Koyilandy",
      "Neyyattinkara",
      "Kayamkulam",
      "Nedumangad",
      "Kannur",
      "Tirur",
      "Kottayam",
      "Kasaragod",
      "Kunnamkulam",
      "Ottappalam",
      "Thiruvalla",
      "Thodupuzha",
      "Chalakudy",
      "Changanassery",
      "Punalur",
      "Nilambur",
      "Cherthala",
      "Perinthalmanna",
      "Mattannur",
      "Shoranur",
      "Varkala",
      "Paravoor",
      "Pathanamthitta",
      "Peringathur",
      "Attingal",
      "Kodungallur",
      "Pappinisseri",
      "Chittur-Thathamangalam",
      "Muvattupuzha",
      "Adoor",
      "Mavelikkara",
      "Mavoor",
      "Perumbavoor",
      "Vaikom",
      "Palai",
      "Panniyannur",
      "Guruvayoor",
      "Puthuppally",
      "Panamattom",
    ],
    Karnataka: [
      "Bengaluru",
      "Hubli-Dharwad",
      "Belagavi",
      "Mangaluru",
      "Davanagere",
      "Ballari",
      "Mysore",
      "Tumkur",
      "Shivamogga",
      "Raayachuru",
      "Robertson Pet",
      "Kolar",
      "Mandya",
      "Udupi",
      "Chikkamagaluru",
      "Karwar",
      "Ranebennuru",
      "Ranibennur",
      "Ramanagaram",
      "Gokak",
      "Yadgir",
      "Rabkavi Banhatti",
      "Shahabad",
      "Sirsi",
      "Sindhnur",
      "Tiptur",
      "Arsikere",
      "Nanjangud",
      "Sagara",
      "Sira",
      "Puttur",
      "Athni",
      "Mulbagal",
      "Surapura",
      "Siruguppa",
      "Mudhol",
      "Sidlaghatta",
      "Shahpur",
      "Saundatti-Yellamma",
      "Wadi",
      "Manvi",
      "Nelamangala",
      "Lakshmeshwar",
      "Ramdurg",
      "Nargund",
      "Tarikere",
      "Malavalli",
      "Savanur",
      "Lingsugur",
      "Vijayapura",
      "Sankeshwara",
      "Madikeri",
      "Talikota",
      "Sedam",
      "Shikaripur",
      "Mahalingapura",
      "Mudalagi",
      "Muddebihal",
      "Pavagada",
      "Malur",
      "Sindhagi",
      "Sanduru",
      "Afzalpur",
      "Maddur",
      "Madhugiri",
      "Tekkalakote",
      "Terdal",
      "Mudabidri",
      "Magadi",
      "Navalgund",
      "Shiggaon",
      "Shrirangapattana",
      "Sindagi",
      "Sakaleshapura",
      "Srinivaspur",
      "Ron",
      "Mundargi",
      "Sadalagi",
      "Piriyapatna",
      "Adyar",
    ],
  },
  Australia: {
    "South Australia": ["Dunstan", "Mitchell"],
    Victoria: ["Altona", "Euroa"],
  },
  Canada: {
    Alberta: ["Acadia", "Bighorn"],
    Columbia: ["Washington", ""],
  },
};
window.onload = function () {
  var countySel = document.getElementById("countySel"),
    stateSel = document.getElementById("stateSel"),
    districtSel = document.getElementById("districtSel");
  for (var country in stateObject) {
    countySel.options[countySel.options.length] = new Option(country, country);
  }
  countySel.onchange = function () {
    stateSel.length = 1; // remove all options bar first
    districtSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done
    for (var state in stateObject[this.value]) {
      stateSel.options[stateSel.options.length] = new Option(state, state);
    }
  };
  countySel.onchange(); // reset in case page is reloaded
  stateSel.onchange = function () {
    districtSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done
    var district = stateObject[countySel.value][this.value];
    for (var i = 0; i < district.length; i++) {
      districtSel.options[districtSel.options.length] = new Option(
        district[i],
        district[i]
      );
    }
  };
};


// slide7

function updateSlider(value) {
  // Clear previous selections
  const allWrappers = document.querySelectorAll(".emoji-wrapper");
  allWrappers.forEach((wrapper) => {
    wrapper.classList.remove("active");
  });

  // Find the emoji wrapper with the matching data-value
  const selectedWrapper = Array.from(allWrappers).find(wrapper => 
    wrapper.querySelector(".emoji-value").innerText === value
  );

  // Make sure the selected wrapper exists before adding the active class
  if (selectedWrapper) {
    selectedWrapper.classList.add("active");
  }

  // Update the hidden input with the selected value
  document.getElementById("fun-meter-value").value = value;

  // Display the selected value for user feedback if the element exists
  const displayElement = document.getElementById("slider-value-display");
  if (displayElement) {
    displayElement.innerText = ` ${value}`;
  }
}


// slide8

function updateRelatabilitySlider(value) {
  // Set the value of the hidden input field to the selected emoji text value
  document.getElementById("meter-value").value = value;

  // Hide all text-emojis
  const textEmojis = document.querySelectorAll(".text-emojis");
  textEmojis.forEach((text) => {
    text.style.display = "none";
  });

  // Show the selected text-emoji
  const selectedText = document.getElementById(`value-${value.replace(/\s+/g, '-')}`);
  if (selectedText) {
    selectedText.style.display = "block";
  }

  // Display the selected value (emoji text) in the slider-value-display div
  const displayElement = document.getElementById("RelatabilitySlider-value-display");
  if (displayElement) {
    displayElement.innerText = ` ${value}`;
  }
}

// Optional: Hide all text-emojis except the first one on page load
document.addEventListener("DOMContentLoaded", function () {
  const textEmojis = document.querySelectorAll(".text-emojis");
  textEmojis.forEach((text, index) => {
    // Hide all except the first
    if (index !== 0) {
      text.style.display = "none";
    }
  });
});

// slide9//

function updateLearningSlider(value, meaning) {
  // Set the slider to the numeric value (if necessary)
  document.getElementById("learning-impact").value = value;

  // Set the hidden input to the label text, not the numeric value
  document.getElementById("learning-value").value = meaning;

  // Display the label meaning on the screen
  const meaningDisplay = document.getElementById("selected-meaning");
  meaningDisplay.textContent = meaning;
  meaningDisplay.style.display = "block";
}

function updateSliderDisplay(value) {
  // Map numeric values to label meanings
  const meanings = {
    0: "No Useful Knowledge 🧠",
    25: "Not Much Knowledge 💤",
    50: "Some Useful Knowledge 📘",
    75: "Quite Useful 📚",
    100: "Very Useful Knowledge 💥",
  };

  // Set the hidden input to the label text
  const selectedMeaning = meanings[value];
  document.getElementById("learning-value").value = selectedMeaning;

  // Display the label meaning on the screen
  const meaningDisplay = document.getElementById("selected-meaning");
  meaningDisplay.textContent = selectedMeaning;
  meaningDisplay.style.display = "block";
}



// slide10//
// JavaScript to handle star rating
document.querySelectorAll(".stars .fa-star").forEach((star) => {
  star.addEventListener("click", () => {
    // Get the rating value from the clicked star
    let value = star.getAttribute("data-value");

    // Highlight the stars based on the selected rating
    highlightStars(value);

    // Store the rating value if needed (e.g., in a hidden input)
    console.log("Rating:", value);

    // Optional: Update a hidden input field to store the selected value
    document.getElementById("trainer-delivery-value").value = value;
  });
});



function highlightStars(rating) {
  document.querySelectorAll(".stars .fa-star").forEach((star) => {
    // Check if the star's data-value is less than or equal to the selected rating
    if (star.getAttribute("data-value") <= rating) {
      star.classList.add("checked"); // Add the 'checked' class for highlighted stars
    } else {
      star.classList.remove("checked"); // Remove the 'checked' class for non-highlighted stars
    }
  });
}


const emojiMeanings = {
  1: "Very Boring",
  2: "Not Engaging",
  3: "Somewhat Engaging",
  4: "Very Engaging",
  5: "Extremely Fun",
};

function updateFunMeter(value) {
  showEmojiMeaning(value);
}

function showEmojiMeaning(value) {
  const meaningDiv = document.getElementById("emoji-meaning");
  const allEmojis = document.querySelectorAll(".emoji-label");

  // Remove active class from all emojis
  allEmojis.forEach((emoji) => emoji.classList.remove("active"));

  // Add active class to the clicked emoji
  const activeEmoji = document.querySelector(
    `.emoji-label[data-value="${value}"]`
  );
  activeEmoji.classList.add("active");

  // Update and animate the meaning
  meaningDiv.textContent = emojiMeanings[value]; // Display emoji meaning
  meaningDiv.setAttribute("data-value", value); // Apply styling for each value

  // Store the emoji meaning in a hidden input for form submission
  document.getElementById("emoji-meaning-hidden").value = emojiMeanings[value];
  
  // Show the meaning with animation
  meaningDiv.classList.add("show");
}




// slide11//



// slide13//
// Function to show and hide the contact details
document
  .getElementById("contact-consent")
  .addEventListener("change", function () {
    const contactDetails = document.getElementById("contact-details");
    if (this.checked) {
      contactDetails.style.display = "block";
    } else {
      contactDetails.style.display = "none";
    }
  });

// Function to show the toast message on form submission
// document
//   .querySelector('.btns[type="submit"]')
//   .addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent form from submitting for demo purpose
//     const toast = document.getElementById("toast");
//     toast.className = "toast show";

//     // Hide the toast after 3 seconds
//     setTimeout(function () {
//       toast.className = toast.className.replace("show", "");
//     }, 3000);
//   });

// // Navigation button functionality (prev button for example)
// document
//   .querySelector('.btns[type="prev"]')
//   .addEventListener("click", function () {
//     // logic for navigating to the previous slide
//   });





function showTheMeaning(element, value) {
  const meanings = {
      1: "Not Engaging at all",
      2: "Somewhat Engaging",
      3: "Neutral",
      4: "Engaging",
      5: "Highly Engaging"
  };

  // Clear previous meanings
  document.querySelectorAll('.meaning-item').forEach(span => span.textContent = '');

  // Set the meaning below the clicked emoji
  const meaningElement = element.nextElementSibling; // Get the next sibling element (meaning span)
  meaningElement.textContent = meanings[value];

  // Store the meaning text in the hidden input instead of the numeric value
  document.getElementById("quality-value").value = meanings[value]; // Set the descriptive label
}



async function submitFormData() {

  const optionLabels = {
    "1": "Student",
    "2": "Professional",
    "3": "Other"
};

// Get the selected option value
const selectedOptionValue = $("input[name='option']:checked").val();
const selectedOption = optionLabels[selectedOptionValue] || '';

  console.log($("#quality-value").val());

  const formData = {
      full_name: $("#fullName").val(),
      fun_metor: $("#fun-meter-values").val(),
      // options: $("input[name='option']:checked").val(),
      options: selectedOption,
      other_status: $("#other_status").val(),
      state: $("#stateSel").val(),
      country: $("#countySel").val(),
      district: $("#districtSel").val(),
      fun_metter_value: $("#fun-meter-value").val(),
      meter_value: $("#meter-value").val(),
      learning_impact: $("#learning-value").val(),
      star_rating: $("#trainer-delivery-value").val(),  // Use selectedStarRating here
      emoji_rating: $("#emoji-meaning-hidden").val(),
      quality: $("#quality-value").val(), // Fixed: directly get value of quality
      concerns: $("#testimonial_con").val(),
      testimonial: $("#testimonial").val(),
      // contact_consent: $("#contact-consent").val(),

      phone: $("#phone").val(),
      email_address: $("#email-address").val()
  };

  console.log("Form Data: ", formData);

  // Validation for required fields
  if (!formData.full_name || !formData.email_address || !formData.phone) {
      toastr.error("Please fill in all required fields.");
      return;
  }

  // Send data to backend
  try {
      const response = await fetch('http://localhost:5001/form1/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
          const data = await response.json();
          console.log(response);
          toastr.success('Form submitted successfully!');
          console.log('Form submitted:', data);
      } else {
          const errorData = await response.json();
          toastr.error('Failed to submit the form. Please try again.');
          console.error('Error from backend:', errorData);
      }
  } catch (error) {
      toastr.error('Failed to submit the form. Please try again.');
      console.error('Error submitting form:', error);
  }
}
