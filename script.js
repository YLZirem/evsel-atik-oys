document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const role = document.getElementById("role").value;
      const errorMessage = document.getElementById("error-message");

      if (username === "admin" && password === "1234" && role === "ogretmen") {
        window.location.href = "index.html";
      } else if (username === "user" && password === "1234" && role === "ogrenci") {
        window.location.href = "index.html";
      } else {
        errorMessage.textContent = "Hatalı giriş bilgileri!";
      }
    });
  }
});
