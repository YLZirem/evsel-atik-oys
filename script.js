// Giriş formunu gösterme
function showLoginForm(userType) {
  if (userType === 'teacher') {
    document.getElementById('teacher-login').style.display = 'block';
    document.getElementById('student-login').style.display = 'none';
  } else if (userType === 'student') {
    document.getElementById('teacher-login').style.display = 'none';
    document.getElementById('student-login').style.display = 'block';
  }
}

// Giriş işlemi
function login(userType) {
  if (userType === 'teacher') {
    var username = document.getElementById('teacher-username').value;
    var password = document.getElementById('teacher-password').value;
    if (username && password) {
      alert("Öğretmen girişi başarılı!");
      // Öğretmen girişini yönlendirebiliriz (başka sayfaya)
      window.location.href = "teacher_dashboard.html"; // Örnek
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  } else if (userType === 'student') {
    var username = document.getElementById('student-username').value;
    var password = document.getElementById('student-password').value;
    if (username && password) {
      alert("Öğrenci girişi başarılı!");
      // Öğrenci girişini yönlendirebiliriz (başka sayfaya)
      window.location.href = "student_dashboard.html"; // Örnek
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  }
}


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

// Sayfa yüklendiğinde, başlangıçta Ana Ekranı göster
window.onload = function () {
  showTopic('ana-ekran');  // İlk başta "Ana Ekran" gösterilecek
};
