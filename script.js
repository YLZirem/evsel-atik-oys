document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();  // Formun sayfayı yeniden yüklemesini engelle

  // Kullanıcı adı ve şifre kontrolü (örnek: sabit bir değerle)
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Basit bir kontrol - gerçekte veritabanı kullanmalısınız
  if (username === "admin" && password === "1234") {
    window.location.href = "index.html";  // Başarılı giriş sonrası yönlendirme
  } else {
    alert("Hatalı kullanıcı adı veya şifre!");
  }
});


// Menü açma ve kapama
function toggleMenu() {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.left = (sidebar.style.left === "0px") ? "-250px" : "0px";
}

// Konuları gösterme
function showTopic(topicId) {
  var sections = document.querySelectorAll('.topic');
  sections.forEach(function (section) {
    section.style.display = 'none';  // Tüm bölümleri gizle
  });
  document.getElementById(topicId).style.display = 'block';  // Seçilen konuyu göster
}

// Sayfa yüklendiğinde, başlangıçta Oryantasyon'u göster
window.onload = function () {
  showTopic('oryantasyon');
};
