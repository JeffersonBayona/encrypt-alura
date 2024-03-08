const campo_texto = document.querySelector("#texto-encryptado");
const campo_mensaje = document.querySelector("#campo-mensaje");
const btn_copiar = document.querySelector("#btn-copiar");


const matriz_code = [
    ["e", "enter"], // indice 0
    ["i", "imes"], // indice 1
    ["a", "ai"], // indice 2
    ["o", "ober"], // indice 3
    ["u", "ufat"], // indice 4
];

function btnEncryptar(){
    const texto = encryptar(campo_texto.value).trim();
    campo_mensaje.value = texto;
    campo_texto.value="";
    campo_mensaje.style.backgroundImage = "none";
    if (texto === "") {
        alert("Debes ingresar un texto para encryptar");
        return; // Salir de la función si el campo está vacío
    }
    console.log(texto);
}

function btnDecryptar(){
    const texto = decryptar(campo_texto.value).trim();
    campo_mensaje.value = texto;
    campo_texto.value="";
    if (texto === "") {
        alert("Debes ingresar un texto para desencryptar");
        return; // Salir de la función si el campo está vacío
    }
    console.log(texto);
}

btn_copiar.addEventListener("click", function() {
    campo_mensaje.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Texto copiado al portapapeles");
});

function encryptar(textoEncryptado){
    for(let i = 0; i < matriz_code.length; i++){
        if(textoEncryptado.includes(matriz_code[i][0])){
            textoEncryptado = textoEncryptado.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return textoEncryptado;
}

function decryptar(textoCifrado){
    for(let i = 0; i < matriz_code.length; i++){
        if(textoCifrado.includes(matriz_code[i][1])){
            textoCifrado = textoCifrado.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return textoCifrado;
}

