
  document.getElementById("signup-btn").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email && password) {
      // Save to localStorage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password); // 🔐 Not secure in real apps

      // Optional: Show success message
      alert("Account created successfully!");

      // Redirect to index.html
      window.location.href = "index.html";
    } else {
      alert("Please fill in both fields.");
    }
  });

