document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
      // Submit the form data
      console.log('Form submission successful');
      
      // Send the data to Google Sheets
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzkYWjsHF92LZnvz6l39AeaTHCmlItGc5uhBUOvGNd7a0IEHtLb8JQKKY6gTxJUt72sgQ/exec'; // Replace with the Google Script URL you copied earlier
      const formData = new FormData(contactForm);

      fetch(scriptURL, {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          console.log('Form data submitted to Google Sheets:', response);
          // You can add code here to show a success message or handle the response as needed
        })
        .catch((error) => {
          console.error('Error submitting form data to Google Sheets:', error);
          // You can add code here to show an error message or handle the error as needed
        });
    } else {
      console.log('Form validation failed');
    }
  });

  function validateForm() {
    // Perform form validation here
    // Return true if the form is valid, otherwise return false
    const name = document.getElementById('name');
    const contactNumber = document.getElementById('contact-number');
    const email = document.getElementById('email');
    const dateTime = document.getElementById('date-time');
    const expectations = document.getElementById('expectations');

    let isValid = true;

    if (name.value.trim() === '') {
      name.classList.add('error');
      isValid = false;
    } else {
      name.classList.remove('error');
    }

    if (contactNumber.value.trim() === '') {
      contactNumber.classList.add('error');
      isValid = false;
    } else {
      contactNumber.classList.remove('error');
    }

    if (email.value.trim() === '') {
      email.classList.add('error');
      isValid = false;
    } else {
      email.classList.remove('error');
    }

    if (dateTime.value.trim() === '') {
      dateTime.classList.add('error');
      isValid = false;
    } else {
      dateTime.classList.remove('error');
    }

    if (expectations.value.trim() === '') {
      expectations.classList.add('error');
      isValid = false;
    } else {
      expectations.classList.remove('error');
    }

    return isValid;
  }
});
const menuBtn = document.querySelector('#menu-btn');
const menuList = document.querySelector('#menu-popup');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuList.style.display = 'block';
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuList.style.display = 'none';
        menuOpen = false;
    }
});
