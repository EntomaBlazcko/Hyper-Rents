document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.getElementById("signup-btn");

    signupBtn.addEventListener("click", function () {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (email && password) {
        // Save to localStorage
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password); // 🔐 For demo only

        alert("Account created successfully!");

        // Redirect
        window.location.href = "index.html";
      } else {
        alert("Please fill in both fields.");
      }
    });
  });
