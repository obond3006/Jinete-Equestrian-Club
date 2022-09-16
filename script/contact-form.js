// Form submission

(function () {
    const form = document.querySelector(".contacts_contact-form");
  
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.querySelector(".contact-form-status");
      fetch(event.target.action, {
        method: form.method,
        body: new FormData(event.target),
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            status.hidden = false;
            status.innerHTML = "Thank you for your submission!";
            form.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                status.innerHTML = data["errors"]
                  .map((error) => error["message"])
                  .join(", ");
              } else {
                status.innerHTML =
                  "Oops! There was a problem submitting your form";
              }
            });
          }
          // setTimeout(status.hidden = true, 10 * 1000);
          setTimeout(() => {
            status.hidden = true;
          }, 5000);
        })
        .catch((error) => {
          status.innerHTML = "Oops! There was a problem submitting your form";
        });
    }
    form.addEventListener("submit", handleSubmit);
  })();

// Input mask

(function () {
  const mask = (selector) => {
    let setCursorPosition = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();

        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    };

    function createMask(event) {
      let matrix = "+380 (__) ___ __ __",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : a;
      });

      if (event.type === "blur") {
        if (this.value.length == 2) {
          this.value = "";
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach((input) => {
      input.addEventListener("input", createMask);
      input.addEventListener("focus", createMask);
      input.addEventListener("blur", createMask);
    });
  };

  mask('[name="phone"]');
})();