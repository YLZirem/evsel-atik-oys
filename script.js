// Menü açıp kapama fonksiyonu
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');
  sidebar.classList.toggle('hidden');
  content.classList.toggle('expanded');
}

// Konuları göstermek için fonksiyon
function showTopic(topicId) {
  // Tüm konuları gizle
  const topics = document.querySelectorAll('.topic');
  topics.forEach(topic => {
    topic.classList.remove('active');
  });

  // Seçilen konuyu göster
  const selectedTopic = document.getElementById(topicId);
  selectedTopic.classList.add('active');
}

// Sayfa yüklendiğinde Konu 1'i göster
document.addEventListener("DOMContentLoaded", function() {
  showTopic('konu1');
});
