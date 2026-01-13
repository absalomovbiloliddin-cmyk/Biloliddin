const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const result = document.getElementById("result");


const correctUsername = "Biloliddin";
const correctPassword = "123456789";

loginBtn.addEventListener("click", function () {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || password === "") {
    result.classList.remove("hidden");
    result.style.background = "#ffeaea";
    result.style.color = "#b00020";
    result.innerHTML = "Iltimos, barcha maydonlarni to'ldiring";
    return;
  }

  if (username === correctUsername && password === correctPassword) {
    result.classList.remove("hidden");
    result.style.background = "#eafff5";
    result.style.color = "#0a7a4a";
    result.innerHTML = `
      <strong>Muvaffaqiyatli!</strong><br>
      Ism: ${username}<br>
      Parol: ${password}
    `;
  } else {
    result.classList.remove("hidden");
    result.style.background = "#ffeaea";
    result.style.color = "#b00020";
    result.innerHTML = "Login yoki parol noto'g'ri";
  }
});
console.log("Hello world");

console.log("salom");
