window.onload = function () {
  let registerButton = document.getElementById("register-btn");

  function validateNames() {
    return new Promise((resolve, reject) => {
      let firstName = document.getElementById("first-name");
      firstName.value = firstName.value.trim();
      if (firstName.value === "") {
        reject("First Name cannot be empty");
      }

      let lastName = document.getElementById("last-name");
      lastName.value = lastName.value.trim();
      if (lastName.value === "") {
        reject("Last Name cannot be empty");
      }
      resolve("success");
    });
  }

  function isCharacterALetter(char) {
    return char.toLowerCase() != char.toUpperCase();
  }

  function validateEmail() {
    return new Promise((resolve, reject) => {
      let email = document.getElementById("email");
      email.value = email.value.trim();
      if (email.value === "") {
        reject("Email cannot be empty");
      } else {
        let str = email.value;
        if (
          isCharacterALetter(str.charAt(0)) &&
          str.includes("@") &&
          isCharacterALetter(str.charAt(str.indexOf("@") + 1)) &&
          str.includes(".") &&
          isCharacterALetter(str.charAt(str.indexOf(".") + 1))
        ) {
          resolve("success");
        }
      }
      reject("Please enter a valid email.");
    });
  }

 

  registerButton.onclick = function () {
    registerButton.disabled = true;
    registerButton.style.opacity = 0.5;

    validateNames()
      .then(() => {
        document.getElementById("msg-1").textContent = "";
      })
      .catch(() => {
        console.log("Names cannot be empty");
        document.getElementById("msg-1").textContent =
          "* Names cannot be empty";
      });

    validateEmail()
      .then(() => {
        document.getElementById("msg-2").textContent = "";
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("msg-2").textContent = "* " + err;
      });

    validateNumber()
      .then(() => {
        document.getElementById("msg-3").textContent = "";
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("msg-3").textContent = "* " + err;
      });

    validateUsername()
      .then(() => {
        document.getElementById("msg-4").textContent = "";
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("msg-4").textContent = "* " + err;
      });

    validatePasswords()
      .then(() => {
        document.getElementById("msg-5").textContent = "";
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("msg-5").textContent = "* " + err;
      });

    checkTC()
      .then(() => {
        document.getElementById("msg-6").textContent = "";
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("msg-6").textContent = "* " + err;
      });

    setTimeout(() => {
      registerButton.disabled = false;
      registerButton.style.opacity = 1;
    }, 5000);
  };
};
