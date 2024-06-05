// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values wrt ids
    const firstName = document.getElementById("firstname").value.trim(); //trim() to remove spaces
    const lastName = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("cpassword").value.trim();

    if (!firstName) {
      alert("First Name is required");
      return;
    }

    if (!lastName) {
      alert("Last Name is required");
      return;
    }

    if (!email) {
      alert("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!phone) {
      alert("Phone Number is required");
      return;
    }

    if (phone.length != 10) {
      alert("Phone number should be of 10 digits!");
      return;
    }

    if (!gender) {
      alert("Gender is required");
      return;
    }

    if (!password) {
      alert("Password is required");
      return;
    }
    if (password.length < 6) {
      alert("Password should be at least 6 characters long!");
      return;
    }
    if (!confirmPassword) {
      alert("Confirm Password is required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm password should match!");
      return;
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
