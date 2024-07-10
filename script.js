const matrizCodigo = [
	["e", "enter"],
	["i", "imes"],
	["a", "ai"],
	["o", "ober"],
	["u", "ufat"],
];

function botonEncriptar() {
	// Función para encriptar el texto ingresado por el usuario
	const textArea = document.querySelector(".text-area");

	// Verifica si el área de texto está vacía
	if (textArea.value == "") {
		alert("Ingrese texto para encriptar");
		return;
	}

	// Verifica si el texto contiene caracteres especiales o números
	if (contieneCaracterEspecial(textArea.value)) {
		alert("No se aceptan mayúsculas, caracteres especiales ni acentos");
		return;
	}

	// Oculta la imagen y texto de mensaje no encontrado
	const imagen = document.querySelector(".mensaje-imagen-no-encontrado");
	imagen.style.display = "none";

	// Alinea el contenido de la sección 2
	const containerS2 = document.querySelector(".s2-container");
	containerS2.style.justifyContent = "space-between";

	// Muestra el contenedor de copiar
	const botonCopiar = document.querySelector(".copiar-contenedor");
	botonCopiar.style.visibility = "visible"; // Visible en pantallas grandes
	botonCopiar.style.display = "flex"; // Muestra en pantallas pequeñas

	// Transforma y muestra el texto encriptado
	const textoTransformado = document.querySelector(".texto-transformado");
	textoTransformado.textContent = encriptar(textArea.value);

	// Limpia el área de texto
	textArea.value = "";
}

function botonDesencriptar() {
	// Función para desencriptar el texto ingresado por el usuario
	const textArea = document.querySelector(".text-area");

	// Verifica si el área de texto está vacía
	if (textArea.value == "") {
		alert("Ingrese texto para desencriptar");
		return;
	}

	// Verifica si el texto contiene caracteres especiales o números
	if (contieneCaracterEspecial(textArea.value)) {
		alert("No se aceptan mayúsculas, caracteres especiales ni acentos");
		return;
	}

	// Oculta la imagen y texto de mensaje no encontrado
	const imagen = document.querySelector(".mensaje-imagen-no-encontrado");
	imagen.style.display = "none";

	// Alinea el contenido de la sección 2
	const containerS2 = document.querySelector(".s2-container");
	containerS2.style.justifyContent = "space-between";

	// Muestra el contenedor de copiar
	const botonCopiar = document.querySelector(".copiar-contenedor");
	botonCopiar.style.visibility = "visible"; // Visible en pantallas grandes
	botonCopiar.style.display = "flex"; // Muestra en pantallas pequeñas

	// Transforma y muestra el texto desencriptado
	const textoTransformado = document.querySelector(".texto-transformado");
	textoTransformado.textContent = desencriptar(textArea.value);

	// Limpia el área de texto
	textArea.value = "";
}

function encriptar(inputTexto) {
	// Función para encriptar el texto según la matriz de códigos
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (inputTexto.includes(matrizCodigo[i][0])) {
			inputTexto = inputTexto.replaceAll(
				matrizCodigo[i][0],
				matrizCodigo[i][1]
			)
		}
	}
	return inputTexto;
}

function desencriptar(inputTexto) {
	// Función para desencriptar el texto según la matriz de códigos
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (inputTexto.includes(matrizCodigo[i][1])) {
			inputTexto = inputTexto.replaceAll(
				matrizCodigo[i][1],
				matrizCodigo[i][0]
			);
		}
	}
	return inputTexto;
}

function copiar() {
	// Función para copiar el texto transformado al portapapeles
	const textoTransformado = document.querySelector(".texto-transformado");
	const contenidoACopiar = textoTransformado.textContent;

	// Utiliza la API del portapapeles del navegador
	navigator.clipboard.writeText(contenidoACopiar).then(() => {
		alert("Mensaje copiado"); // Muestra mensaje de confirmación
	});
}

function contieneCaracterEspecial(texto) {
	// Función para verificar si el texto contiene caracteres especiales o números
	const caracteresAdmitidos = /[^a-zñ\s]/;
	return caracteresAdmitidos.test(texto);
}