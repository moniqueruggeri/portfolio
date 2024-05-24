export function valida() {
    
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let msg = document.querySelector("#message");
    let emailRegex = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);


    function msgError(input, msgInstruction) {
        input.setAttribute("style", "border:2px solid red")
        input.nextElementSibling.innerHTML = msgInstruction
    }

    function msgSuccess(input) {
        input.setAttribute("style", "border:2px solid rgb(0, 197, 59)")
        input.nextElementSibling.innerHTML = ""
    }

    name.addEventListener("keyup", () => {
        if (name.value.length <=2) {
            msgError(name, "Must have 3 or more characteres.")
        } else {
            msgSuccess(name)
        }
    } )

    email.addEventListener("keyup", () => {
        if (email.value ==="" || !emailRegex.test(email.value)) {
            msgError(email, "Insert a valid email." )
        } else {
            msgSuccess(email)
        }
    })

    msg.addEventListener("keyup", () => {
        if (msg.value === "") {
            msgError(msg, "Write a message.")
        } else {
            msgSuccess(msg)
        }
    })

}