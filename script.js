document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    
    if (name && email && category && date) {
      document.getElementById('form-message').textContent = `Thank you, ${name}! Your session has been booked for ${category} photography on ${date}. We will contact you soon via email.`;
      document.getElementById('form-message').style.color = 'green';
    } else {
      document.getElementById('form-message').textContent = 'Please fill out all fields.';
      document.getElementById('form-message').style.color = 'red';
    }
  
    // Clear the form after submission
    document.getElementById('booking-form').reset();
  });
  