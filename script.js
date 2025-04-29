function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "öğrenci" && password === "1234") {
    window.location.href = "anasayfa.html"; // Başarılı giriş sonrası yönlendirme
  } else {
    document.getElementById("error-message").textContent = "Hatalı kullanıcı adı veya şifre.";
  }
}


// Menü açma/kapama işlevi
function toggleMenu() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
}

// İçeriğin dinamik gösterilmesi işlevi
function showTopic(topicId) {
  var sections = document.querySelectorAll('.topic');
  sections.forEach(function(section) {
    section.style.display = 'none';  // Tüm bölümleri gizle
  });

  // Seçilen bölümü göster
  document.getElementById(topicId).style.display = 'block';
}

// Sayfa yüklendiğinde, giriş yaptıktan sonra "Evsel Atıklar Nedir?" kısmını göster
window.onload = function() {
  showTopic('konu1');
};
