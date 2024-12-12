document
  .getElementById("userForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Formani avtomatik yuborishni to'xtatish

    // Formadagi ma'lumotlarni olish
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const adress = document.getElementById("address").value;
    const role = document.getElementById("role").value || null; // Agar tanlanmagan bo'lsa, null

    // Yuboriladigan obyektni yaratish
    const data = { login, password, adress, role };

    try {
      // APIga so'rov yuborish
      const response = await fetch("http://localhost:3332/users/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Javobni qayta ishlash
      if (response.ok) {
        const result = await response.json();
        console.log("API javobi:", result);
        alert("Foydalanuvchi muvaffaqiyatli yaratildi!");
      } else {
        console.error("Xato:", response.status);
        alert("APIda muammo yuz berdi.");
      }
    } catch (error) {
      console.error("Tarmoq xatosi:", error);
      alert("Tarmoq bilan bog'liq muammo yuz berdi.");
    }
  });

// css uchun
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 10) {
    // 10px dan ko‘p scroll bo‘lsa
    header.classList.add("scrolled"); // `scrolled` klassini qo‘shish
  } else {
    header.classList.remove("scrolled"); // Klassni olib tashlash
  }
});
