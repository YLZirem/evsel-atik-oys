document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  // Geçici örnek veri
  if ((username === 'admin' && password === '1234' && role === 'teacher') ||
      (username === 'user' && password === '1234' && role === 'student')) {
    if (role === 'teacher') {
      window.location.href = '../pages/teacher-dashboard.html';
    } else {
      window.location.href = '../index.html'; // öğrenci ana sayfası
    }
  } else {
    document.getElementById('loginError').textContent = "Hatalı giriş bilgileri!";
  }
});


// Sidebar menüsünün açılmasını sağlamak
function toggleMenu() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
}

// Konuları gösterme işlevi
function showTopic(topicId) {
  var sections = document.querySelectorAll('.topic');
  sections.forEach(function (section) {
    section.style.display = 'none';  // Tüm bölümleri gizle
  });
  document.getElementById(topicId).style.display = 'block';  // Seçilen konuyu göster
}

// Sayfa yüklendiğinde, başlangıçta Konu 1'i göster
window.onload = function () {
  showTopic('konu1');
};
