document
  .getElementById("userForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const full_name = document.getElementById("full_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    const userData = { full_name, email, password, phone };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/sign-up",
        userData
      );

      if (response.status == 409) {
        alert(`Error status(${response.status}): ${response.data.message} `);
      }

      if (response.status == 201) {
        localStorage.setItem("successMessage", "Tabriklaymiz siz ro'yxatdan o'tdingiz");
        window.location.href = "/main/index.html";
      }
      else {
        console.error("Xato:", response.status);
        alert("APIda muammo yuz berdi.");
      }
    } catch (error) {
      if (error.response) {
        alert(`${error.response.data.message}`);
      } else {
        console.error("Tarmoq xatosi:", error.message);
        alert("Tarmoq bilan bog'liq muammo yuz berdi.");
      }
    }
  });
