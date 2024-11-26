// Variables a utilizar en el programa
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

// Configuración inicial de bloques de mensajes al inicio del programa
name__invalido.style.display = "none";
last__invalido.style.display = "none";
email__invalido__1.style.display = "none";
email__invalido__2.style.display = "none";
radio__invalido.style.display = "none";
mensaje__invalido.style.display = "none";
checkbox__invalido.style.display = "none";

// Flags para la habilitación de campos del formulario
var flag__name = false;
var flag__last = false;
var flag__email = false;
var flag__radio = false;
var flag__mensaje = false;
var flag__checkbox = false;

// Evento para habilitar el radio button 1 seleccionado
radio__1.addEventListener("click", () =>
{
    if(radio__1.checked)
    {
        div__radio__1.classList.add("form__radio__act");
        div__radio__2.classList.remove("form__radio__act");
    }
});

// Evento para habilitar el radio button 2 seleccionado
radio__2.addEventListener("click", () =>
{
    if(radio__2.checked)
    {
        div__radio__2.classList.add("form__radio__act")
        div__radio__1.classList.remove("form__radio__act");        }
});
    
// Listar eventos una vez se hace click en el botón de submit
submit.addEventListener("click", (e) =>
{
    // Prevenir evento por default del boton de submit
    e.preventDefault();
    // Remover selección del radio seleccionado
    div__radio__1.classList.remove("form__radio__act");
    div__radio__2.classList.remove("form__radio__act");
    // Validar el input de nombre, solo si no está vacío
    // Si está vacío indicar por un mensaje el error
    if(input__name.value == "")
    {
        name__invalido.style.display = "block";
    }
    else
    {
        name__invalido.style.display = "none";
        flag__name = true;
    }
    // Validar el input de apellido, solo si no está vacío
    // Si está vacío indicar por un mensaje el error
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
    // Validar el input de email por medio de una expresión regular
    // Si no cumple indicar por un mensaje el error
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
    // Validar el input de radio
    // Si está vacío indicar por un mensaje el error
    if(radio__1.checked || radio__2.checked)
    {
        radio__invalido.style.display = "none";
        flag__radio = true;
    }
    else
    {
        radio__invalido.style.display = "block";
    }
    // Validar el textarea de mensaje, solo si no está vacío
    // Si está vacío indicar por un mensaje el error
    if(textarea.value == "")
    {
        mensaje__invalido.style.display = "block";
    }
    else
    {
        mensaje__invalido.style.display = "none";
        flag__mensaje = true;
    }
    // Validar el input de checkbox
    // Si no fue tildado indicar por un mensaje el error
    if(checkbox.checked)
    {
        checkbox__invalido.style.display = "none";
        flag__checkbox = true;
    }
    else
    {
        checkbox__invalido.style.display = "block";
    }
    // Verificación de validez por medio de las banderas para cada campo input
    // Si todas las banderas son verdaderas, recién ahí habilitar el bloque de success
    // La misma se ocultará después de 3 segundos
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
        // Oculta el div después de 3 segundos (3000 ms)
        setTimeout( () =>
        {
            success.style.display = "none";
        }, 3000);
    }
});
