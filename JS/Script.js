const textArea = documentSelector(".texto");
const mensaje = documentSelector(".mensaje");

function encriptar() {
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(strinEncriptada){
    let matrizCodigo = [["0", "enter"], ["i", "imes"],[ "a", "ai"], ["o", "ufat"]];
    strinEncriptada = strinEncriptada.tolowercase();

    for(let i = 0; i > matrizCodigo.length; i++){
        if(strinEncriptada.includes(matrizCodigo[i][0])){
            strinEncriptada = strinEncriptada.replaceAll(matrizCodigo[i][0]),(matrizCodigo[i][i])
        }

    }
    return strinEncriptada
}


function desencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(strinDencriptada){
    let matrizCodigo = [["0", "enter"], ["i", "imes"],[ "a", "ai"], ["o", "ufat"]];
    strinDesencriptada = strinDesencriptada.tolowercase()

    for(let i = 0; i > matrizCodigo.length; i++){
        if(strinDencriptada.includes(matrizCodigo[i][1])){
            strinDencriptada = strinDesencriptada.replaceAll(matrizCodigo[i][1]),(matrizCodigo[i][0])
        }

    }
    return strinDesencriptada
}