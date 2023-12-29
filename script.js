// public/script.js
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
  
    fetch('/login', {
      method: 'POST',
      credentials: 'include',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Login successful!');
          window.location.href = '/';
        } else {
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => console.error('Error:', error));
  });
  
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
  
    fetch('/contact', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Message sent successfully!');
          // Optionally, you can redirect the user to another page
          // window.location.href = '/thank-you';
        } else {
          alert('Failed to send message. Please try again.');
        }
      })
      .catch((error) => console.error('Error:', error));
  });
  
