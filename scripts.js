const messages = [
  { text: "I'm so sorry Diku, please forgive me ❤️", img: "images/photo1.jpg" },
  {
    text: "Every moment without you feels incomplete 😔",
    img: "images/photo2.jpg",
  },
  { text: "I promise to make it up to you 💖", img: "images/photo3.jpg" },
  { text: "Our love is too strong to be broken 💕", img: "images/photo4.jpg" },
  {
    text: "Let's start again with more love and care 💫",
    img: "images/photo5.jpg",
  },
];

document.querySelectorAll(".msg-btn").forEach((button, index) => {
  button.addEventListener("click", () => {
    const messagePopup = document.getElementById("message-popup");
    const messageText = document.getElementById("message-text");
    const popupImg = document.getElementById("popup-img");

    messageText.innerText = messages[index].text;
    popupImg.src = messages[index].img;

    messagePopup.classList.remove("hidden");
  });
});

function closePopup() {
  document.getElementById("message-popup").classList.add("hidden");
}
