var input = document.querySelector(".form__name");
var input__name = document.querySelector(".form__name__input");
var input__last = document.querySelector(".form__last__input");
var input__email = document.querySelector(".form__email__input");
var name__invalido = document.querySelector(".form__name__p");
var last__invalido = document.querySelector(".form__last__p");
var email__invalido__1 = document.querySelector(".form__email__p1");
var email__invalido__2 = document.querySelector(".form__email__p2");
var radio__invalido = document.querySelector(".form__radio__p");
var textarea = document.querySelector(".form__area");
var mensaje__invalido = document.querySelector(".form__mensaje__p");
var checkbox = document.querySelector("#form__checkbox__input");
var checkbox__invalido = document.querySelector(".form__checkbox__p");
var submit = document.querySelector(".form__submit");
var radio__1 = document.querySelector("#form__radio__input__1");
var radio__2 = document.querySelector("#form__radio__input__2");
var success = document.querySelector(".success");
var div__radio__1 = document.querySelector("#radio__1")
var div__radio__2 = document.querySelector("#radio__2")

name__invalido.style.display = "none";
last__invalido.style.display = "none";
email__invalido__1.style.display = "none";
email__invalido__2.style.display = "none";
radio__invalido.style.display = "none";
mensaje__invalido.style.display = "none";
checkbox__invalido.style.display = "none";

var flag__name = false;
var flag__last = false;
var flag__email = false;
var flag__radio = false;
var flag__mensaje = false;
var flag__checkbox = false;

radio__1.addEventListener("click", () =>
{
    if(radio__1.checked)
    {
        div__radio__1.classList.add("form__radio__act");
        div__radio__2.classList.remove("form__radio__act");
    }
});

radio__2.addEventListener("click", () =>
{
    if(radio__2.checked)
    {
        div__radio__2.classList.add("form__radio__act")
        div__radio__1.classList.remove("form__radio__act");        }
});
    
submit.addEventListener("click", (e) =>
{
    e.preventDefault();
    div__radio__1.classList.remove("form__radio__act");
    div__radio__2.classList.remove("form__radio__act");
    if(input__name.value == "")
    {
        name__invalido.style.display = "block";
    }
    else
    {
        name__invalido.style.display = "none";
        flag__name = true;
    }
    if(input__last.value == "")
    {
        last__invalido.style.display = "block";
    }
    else
    {
        last__invalido.style.display = "none";
        flag__last = true;
    }
    const parametro = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(input__email.value == "" || !parametro.test(input__email.value))
    {
        email__invalido__1.style.display = "block";
        input__email.placeholder = "email@example.com"
    }
    else
    {
        email__invalido__1.style.display = "none";
        flag__email = true;
    }
    if(radio__1.checked || radio__2.checked)
    {
        radio__invalido.style.display = "none";
        flag__radio = true;
    }
    else
    {
        radio__invalido.style.display = "block";
    }
    if(textarea.value == "")
    {
        mensaje__invalido.style.display = "block";
    }
    else
    {
        mensaje__invalido.style.display = "none";
        flag__mensaje = true;
    }
    if(checkbox.checked)
    {
        checkbox__invalido.style.display = "none";
        flag__checkbox = true;
    }
    else
    {
        checkbox__invalido.style.display = "block";
    }
    if(flag__name && flag__last && flag__email && flag__radio && flag__mensaje && flag__checkbox)
    {
        var flag__name = false;
        var flag__last = false;
        var flag__email = false;
        var flag__radio = false;
        var flag__mensaje = false;
        var flag__checkbox = false;
        success.style.display = "flex";
        input__name.value = "";
        input__last.value = "";
        input__email.value = "";
        textarea.value = "";
        radio__1.checked = false;
        radio__2.checked = false;
        checkbox.checked = false
        // Oculta el div después de 3 segundos (5000 ms)
        setTimeout( () =>
        {
            success.style.display = "none";
        }, 3000);
    }
});
