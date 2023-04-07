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

  function validateNumber() {
    return new Promise((resolve, reject) => {
      let number = document.getElementById("number").value;

      if (number.length == 10) {
        if (typeof number === "string" && !isNaN(number)) {
          resolve("success");
        }
      }
      reject("Enter number only with length 10.");
    });
  }

  function isDigit(char) {
    if (
      char == "0" ||
      char == "1" ||
      char == "2" ||
      char == "3" ||
      char == "4" ||
      char == "5" ||
      char == "6" ||
      char == "7" ||
      char == "8" ||
      char == "9"
    )
      return true;
    return false;
  }

  function validateUsername() {
    return new Promise((resolve, reject) => {
      let username = document.getElementById("username");
      username.value = username.value.trim();
      username = username.value;

      if (username === "") {
        reject("Username cannot be Empty.");
      }
      let firstChar = username.charAt(0);
      if (
        firstChar.toLowerCase() == firstChar.toUpperCase() &&
        firstChar != "_"
      ) {
        reject("Username's first character must be character or _");
      }

      for (let i = 1; i < username.length; i++) {
        let char = username.charAt(i);
        if (char.toLowerCase() == char.toUpperCase()) {
          if (char != "_" && !isDigit(char)) {
            reject("Username must not contain any special character");
          }
        }
      }

      resolve("success");
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
