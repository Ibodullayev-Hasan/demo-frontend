document
  .getElementById("userForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Formani avtomatik yuborishni to'xtatish

    // Formadagi ma'lumotlarni olish
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = { email, password };

    try {
      const response = await axios.post("http://localhost:3000/login", data);

      if (response.status === 200) {
        window.location.href = "/main/index.html"; 
      } else {
        console.error("Xato:", response.status);
        alert("APIda muammo yuz berdi.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Xato:", error.response.status, error.response.data);
        alert(`API xatosi: ${error.response.data.message || "Noma'lum xato"}`);
      } else {
        console.error("Tarmoq xatosi:", error.message);
        alert("Tarmoq bilan bog'liq muammo yuz berdi.");
      }
    }
  });
