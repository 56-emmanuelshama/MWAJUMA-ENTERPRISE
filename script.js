
(function(){
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
  })();
  
  const authForm = document.getElementById('authForm');
  const formTitle = document.getElementById('formTitle');
  const submitBtn = document.getElementById('submitBtn');
  const toggleText = document.getElementById('toggleText');
  const toggleLink = document.getElementById('toggleLink');
  
  let isRegister = false;
  
  toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    isRegister = !isRegister;
    formTitle.textContent = isRegister ? 'Register' : 'Sign In';
    submitBtn.textContent = isRegister ? 'Register' : 'Sign In';
    toggleText.innerHTML = isRegister 
      ? 'Already have an account? <a href="#" id="toggleLink">Sign In here</a>'
      : 'Not registered? <a href="#" id="toggleLink">Register here</a>';
  });
  
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (isRegister) {
      // Simulate saving user to localStorage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      alert('Registered successfully!');
      sendEmail('Registration', email);
    } else {
      // Simulate sign in
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');
      if (email === storedEmail && password === storedPassword) {
        alert('Signed in successfully!');
        sendEmail('Sign In', email);
      } else {
        alert('Invalid credentials. Please register first!');
      }
    }
  });
  
  function sendEmail(action, userEmail) {
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      action: action,
      user_email: userEmail,
      to_email: "shamaemmanuel56@gmail.com"
    })
    .then(function(response) {
      console.log('Email sent:', response.status, response.text);
    }, function(error) {
      console.error('Email error:', error);
    });
  }
  