const img = document.getElementById("mainImg");
const question = document.getElementById("question");

yesBtn.addEventListener("click", () => {
  // change image
  img.src = "YES.png";

  // change text
  question.textContent = "YESsSsSsS! 💖 I'll see you on Feb 16 💕";

  // hide No button
  noBtn.style.display = "none";

  // optional: disable Yes button
  yesBtn.disabled = true;
  yesBtn.textContent = "💘";
});



