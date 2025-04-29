// Fonksiyon: Konu gösterme
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

// Başlangıçta ilk konuyu göster
document.addEventListener("DOMContentLoaded", function() {
  showTopic('konu1');
});
