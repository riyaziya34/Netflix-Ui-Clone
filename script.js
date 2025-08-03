document.addEventListener('DOMContentLoaded', function () {
  const sign_in = document.getElementById('sign_in');
  const sign_up = document.getElementById('sign_up');
  const started = document.getElementById('started');
  const faqs = document.querySelectorAll('.faq-item');

  if (sign_in) {
    sign_in.addEventListener('click', function () {
      window.location.href = 'login.html';
    });
  }

  if (sign_up) {
    sign_up.addEventListener('click', function () {
      window.location.href = 'signup.html';
    });
  }

  if (started) {
    started.addEventListener('click', function () {
      window.location.href = 'signup.html';
    });
  }

  faqs.forEach(faq => {
    const que = faq.querySelector('.faq-question');

    que.addEventListener('click', function () {
      const isActive = faq.classList.contains('open');

      faqs.forEach(item => item.classList.remove('open'));

      if (!isActive) {
        faq.classList.add('open');
      }
    });
  });
});
(function () {
  const BASE_URL = "https://auth-api-backend.onrender.com/api/auth";
  // const BASE_URL="http://localhost:5050/api/auth";
  console.log("✅ script.js loaded");

  // Signup Function
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const response = await fetch(`${BASE_URL}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // 🍪 for cookie-based session
          body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        if (response.ok && data.sucess) {
          window.location.href = "index.html"; // ✅ Redirect after signup
        } else {
          document.getElementById("signupMessage").textContent = data.message || "Signup Failed";
        }
      } catch (err) {
        console.error(err);
        document.getElementById("signupMessage").textContent = "Signup Failed";
      }
    });
  }

  // Login Function
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const response = await fetch(`${BASE_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // 🍪 for cookie-based session
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
         if (response.ok && data.sucess) {
          window.location.href = "index.html"; // ✅ Redirect after login
        } else {
          document.getElementById("loginMessage").textContent = data.message || "Login Failed";
        }
      } catch (err) {
        console.error(err);
        document.getElementById("loginMessage").textContent = "Login Failed";
      }
    });
  }
})();

