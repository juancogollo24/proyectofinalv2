


function hacerPregunta() {
  const pregunta = prompt('Ingrese su pregunta');
  llamarGemini(pregunta)
      .then(respuesta => {
          if (respuesta) {
              alert(respuesta);
          }
      });
}

function llamarGemini(prompt) {
    const API_KEY = 'AIzaSyCCV3V9zXc_TIB_5gjlzvpvfd-0FYUnRFo';
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
  
    return fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: prompt }
          ]
        }]
      })
    })
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }
      return respuesta.json();
    })
    .then(datos => {
      const textoGenerado = datos.candidates[0].content.parts[0].text;
      
      console.log(textoGenerado);
      return textoGenerado;
    })
    .catch(error => {
      console.error('Error al llamar a la API de Gemini:', error);
    });
  }

  