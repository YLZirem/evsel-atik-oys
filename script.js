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
