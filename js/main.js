const hearts = document.querySelector(".hearts");

if (hearts) {
  for (let i = 0; i < 30; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = "💗";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = (14 + Math.random() * 20) + "px";
    h.style.animationDuration = (10 + Math.random() * 10) + "s";
    h.style.animationDelay = Math.random() * 6 + "s";
    hearts.appendChild(h);
  }
}
function checkPassword() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (pass === "OnlyUs") {
    window.location.href = "page1.html";
  } else {
    error.style.display = "block";
  }
}
