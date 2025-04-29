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
