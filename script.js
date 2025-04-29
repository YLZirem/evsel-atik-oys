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
