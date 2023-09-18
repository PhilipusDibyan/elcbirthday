// Get the caret element
const type = document.getElementById('type');

// Start the blinking animation
type.style.animationPlayState = 'running';

// Stop the blinking animation and hide the caret after a certain duration
setTimeout(() => {
    type.style.animationPlayState = 'paused'; // Pause the animation
},  7400); // Adjust the duration (in milliseconds) as needed


  // Fungsi untuk memicu animasi "hideType" pada elemen dengan id "type"
  function triggerHideType() {
    var element = document.getElementById("type");
    element.style.animation = "hideType 3s ease forwards";
  }

  // Panggil fungsi triggerHideType setelah beberapa detik
  setTimeout(triggerHideType, 10000); // Menunggu 10 detik sebelum memicu animasi
