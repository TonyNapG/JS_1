// Crear una aplicación para gestionar notas en archivos. La aplicación debe permitir al usuario:
// Crear una nueva nota y guardarla en un archivo.
// Leer todas las notas existentes.
// Eliminar una nota específica según su título.

const fs = require('fs');
const path = require('path');

// Ruta del archivo de notas
const filePath = path.join(__dirname, 'notas.json');

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  let notas = [];
  if (fs.existsSync(filePath)) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      notas = JSON.parse(data);
    } catch (err) {
      console.error('Error al leer el archivo de notas:', err);
    }
  }
  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);
  try {
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2), 'utf8');
    console.log('Nota agregada con éxito.');
  } catch (err) {
    console.error('Error al guardar el archivo de notas:', err);
  }
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const notas = JSON.parse(data);
      if (notas.length > 0) {
        console.log('--- Notas ---');
        notas.forEach((nota, index) => {
          console.log(`${index + 1}. Título: ${nota.titulo}`);
          console.log(`   Contenido: ${nota.contenido}`);
        });
        console.log('--------------');
      } else {
        console.log('No hay notas guardadas.');
      }
    } catch (err) {
      console.error('Error al leer o parsear el archivo de notas:', err);
    }
  } else {
    console.log('No hay notas guardadas.');
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      let notas = JSON.parse(data);
      const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);
      if (notasRestantes.length < notas.length) {
        fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2), 'utf8');
        console.log(`Nota con título "${titulo}" eliminada.`);
      } else {
        console.log(`No se encontró ninguna nota con el título "${titulo}".`);
      }
    } catch (err) {
      console.error('Error al leer o guardar el archivo de notas:', err);
    }
  } else {
    console.log('No hay notas para eliminar.');
  }
}

// Ejecución de ejemplo
agregarNota('Compras', 'Comprar leche y pan.');
listarNotas();
agregarNota('Trabajo', 'Terminar reporte semanal.');
listarNotas();
eliminarNota('Compras');
listarNotas();
eliminarNota('Reunion');