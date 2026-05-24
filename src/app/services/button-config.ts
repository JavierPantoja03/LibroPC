/**
 * CARPETA MAESTRA DE INSTRUCCIONES (CONFIGURACIÓN)
 * Gestiona los enlaces y posiciones de los botones sobre tus imágenes.
 * - top, left: Posición en porcentaje (%) relativo a la imagen.
 * - width: Ancho del botón en porcentaje (%).
 * - description: Texto breve que aparece bajo el botón.
 */

export interface OverlayButton {
  label: string;       // Nombre descriptivo
  description: string; // Texto de ayuda
  url: string;         // Enlace destino
  top: string;         // Posición vertical (%)
  left: string;        // Posición horizontal (%)
  width: string;       // Ancho del botón (%)
}

// Mapa de botones: Cada ID de clase tiene su lista de botones
export const BUTTON_MAP: { [classId: string]: OverlayButton[] } = {

  // --- CLASE 1: Algoritmos y Emociones Primaria ---
  "1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: '¿Deseas ver un video explicativo sobre algoritmos? ¡Los videos son buenos para retener la atención!',
      url: 'https://www.youtube.com/watch?v=cyciyv54IIY', 
      top: '35%', left: '5%', width: '35%' // Bajado de 25% a 30%
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Aquí verás el gráfico de actividades paso a paso de cómo se inició la clase detalladamente.',
      url: 'https://drive.google.com/file/d/1QOSUUqgbV5a4rG7JYWtD4BXR864wBFL1/view', 
      top: '30%', left: '60%', width: '35%' // Bajado de 25% a 30%
    },
    { 
      label: 'Importancia de los algoritmos', 
      description: '¿Deseas leer sobre la importancia de los algoritmos? Encontrarás información, tesis y trabajos de grado.',
      url: 'https://eduteka.icesi.edu.co/pdfdir/FGPUPonenciaAlgoritmos.pdf', 
      top: '53%', left: '60%', width: '35%' 
    },
    { 
      label: 'Materiales (Juego)', 
      description: '¿Deseas ver qué materiales usamos? Ingresa aquí para encontrar un juego en Educaplay.',
      url: 'https://es.educaplay.com/recursos-educativos/24354806-desafio_de_algoritmos_y_pensamiento_computacional.html', 
      top: '75%', left: '5%', width: '35%' // Subido de 80% a 75%
    },
    { 
      label: 'Materiales (Descargables)', 
      description: '¿Deseas materiales físicos? Aquí encontrarás el material que podrás descargar y usar en clase.',
      url: 'https://hacemosescuela.cba.gov.ar/cultura-digital/eje-algoritomos-y-programacion/', 
      top: '79%', left: '55%', width: '35%' // Subido de 80% a 75%
    }
  ],

// --- CLASE 2: Mundo Binario ---
  "2": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video tutorial enfocado en la introducción al sistema binario y cómo las computadoras procesan datos.',
      url: 'https://www.youtube.com/watch?v=VW-HXvlVOII', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Mapa visual que resume el proceso y las etapas de la clase sobre el mundo binario.',
      url: 'https://drive.google.com/file/d/1sevZeWqDP0T0trJ4Z_VvTpsU8-cjk5oY/view', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: 'Importancia de los binarios en primaria', 
      description: 'Lee este artículo académico sobre la importancia pedagógica de enseñar sistemas binarios desde temprana edad.',
      url: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8932333', 
      top: '50%', left: '55%', width: '35%' 
    },
    { 
      label: 'Materiales (Juego interactivo)', 
      description: 'Practica la conversión a binario de manera divertida mediante este simulador interactivo de Cisco.',
      url: 'https://learningcontent.cisco.com/games/binary/index.html', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Guía descargable)', 
      description: 'Obtén el material complementario en PDF con ejercicios prácticos para reforzar el sistema binario.',
      url: 'https://drive.google.com/file/d/1wR3RC4kD4ovYsSBoFWfgPUuisw2iaA8G/view', 
      top: '75%', left: '55%', width: '35%' 
    }
  ],

// --- CLASE 3: Patrones y Cuadrículas ---
  "3": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video explicativo sobre los patrones; ideal para entender cómo identificar y completar secuencias lógicas.',
      url: 'https://www.youtube.com/watch?v=-uMLGL9k8is&t=8s', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual que detalla la ruta de aprendizaje y los pasos clave de nuestra clase sobre patrones.',
      url: 'https://drive.google.com/file/d/1ISS2y4sH8AfiNiqO6EZmX6Qg7DAxhOKI/view', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: 'Importancia de los patrones en primaria', 
      description: 'Artículo pedagógico que explica cómo el reconocimiento de patrones fortalece el razonamiento matemático.',
      url: 'https://revistaunion.org/index.php/UNION/article/view/350/182', 
      top: '50%', left: '55%', width: '35%' 
    },
    { 
      label: 'Materiales (Juego interactivo)', 
      description: 'Actividad dinámica en Wordwall para practicar la identificación y completado de secuencias lógicas.',
      url: 'https://wordwall.net/es/resource/14327765/patrones', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Recursos digitales)', 
      description: 'Accede a la plataforma Hacemos Escuela para encontrar guías y ejercicios sobre cultura digital y secuencias.',
      url: 'https://hacemosescuela.cba.gov.ar/cultura-digital/eje-algoritomos-y-programacion/', 
      top: '75%', left: '55%', width: '35%' 
    }
  ],

// --- CLASE 4: Secuencias Narrativas ---
  "4": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video explicativo sobre cómo crear secuencias narrativas y su importancia en la lógica computacional.',
      url: 'https://www.youtube.com/watch?v=sd-osWO4gLU', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Consulta el esquema visual con los pasos detallados de nuestra clase sobre secuencias narrativas.',
      url: 'https://drive.google.com/file/d/1R8QGd452axGjY5On57JJezEPsWE7Ifvl/view', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué son importantes las secuencias en primaria?', 
      description: 'Artículo académico que analiza el valor de desarrollar el pensamiento lógico y secuencial desde primaria.',
      url: 'https://revistaselectronicas.ujaen.es/index.php/ADE/article/view/4714/4883', 
      top: '52%', left: '55%', width: '35%' 
    },
    { 
      label: 'Materiales (Programación)', 
      description: 'Ejercicio interactivo en Code.org para aplicar secuencias mediante programación por bloques.',
      url: 'https://studio.code.org/courses/mc/units/1/lessons/1/levels/1', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Laberinto)', 
      description: 'Guía imprimible con laberintos para practicar secuencias y orientación espacial en papel.',
      url: 'https://i0.wp.com/www.actividadesdeinfantilyprimaria.com/wp-content/uploads/2021/04/laberintos-secretos-1.jpg?ssl=1', 
      top: '75%', left: '55%', width: '35%' 
    }
  ],

// --- CLASE 5: Tangram Algorítmico ---
  "5": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video explicativo sobre cómo el Tangram ayuda a desarrollar la lógica y la abstracción espacial.',
      url: 'https://www.youtube.com/watch?v=evw9D9uLKbM', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual detallado con el paso a paso para completar el armado de figuras con Tangram.',
      url: 'https://drive.google.com/file/d/1w5DtgPq8DfNQ2MdhWAz5BgXeXPhH1IGV/view', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el tangram en primaria?', 
      description: 'Repositorio institucional de la UNAD que detalla el uso del Tangram como herramienta didáctica en el aula.',
      url: 'https://repository.unad.edu.co/handle/10596/58578', 
      top: '52%', left: '55%', width: '35%' 
    },
    { 
      label: 'Materiales (Programación)', 
      description: 'Ejercicio interactivo en Code.org para aplicar la lógica de bloques que complementa nuestro trabajo con figuras.',
      url: 'https://studio.code.org/courses/mc/units/1/lessons/1/levels/1', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Laberinto)', 
      description: 'Guía imprimible con laberintos secretos para reforzar la orientación espacial y la resolución de problemas.',
      url: 'https://i0.wp.com/www.actividadesdeinfantilyprimaria.com/wp-content/uploads/2021/04/laberintos-secretos-1.jpg?ssl=1', 
      top: '75%', left: '55%', width: '35%' 
    }
  ],

// --- CLASE 6: Guías Bebras ---
  "6": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video introductorio sobre los retos Bebras y cómo abordar problemas de lógica computacional.',
      url: 'https://www.youtube.com/watch?v=3oDOAtJK0_s', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema detallado con la ruta de pasos para resolver exitosamente los retos del desafío Bebras.',
      url: 'https://drive.google.com/file/d/1MNnh6hLCSMq6cLC6GTB-_M-4782gya_l/view?usp=drive_link', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante las guías Bebras en primaria?', 
      description: 'Artículo académico sobre cómo los retos Bebras promueven el pensamiento computacional en la educación escolar.',
      url: 'https://revistas.eia.edu.co/index.php/reveia/article/view/1733', 
      top: '52%', left: '55%', width: '35%' // Ajustado a 52% según tu instrucción
    },
    { 
      label: 'Materiales usados en clase', 
      description: 'Acceso directo al repositorio oficial de materiales y ejercicios descargables del desafío Bebras.',
      url: 'https://www.chicos.net/public/bebras/bebras_argentina_materiales.html', 
      top: '75%', left: '32.5%', width: '35%' 
    }
  ],

// --- CLASE 7: Escape Room ---
  "7": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video explicativo sobre la gamificación y cómo aplicar un Escape Room en el aula.',
      url: 'https://www.youtube.com/watch?v=NLM2GjSihNY', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Mapa visual con las misiones y objetivos necesarios para superar el Escape Room.',
      url: 'https://drive.google.com/file/d/1F06EAIht2RXtuO71AZv-AW4xow8wooYL/view?usp=drive_link', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el Escape Room en primaria?', 
      description: 'Investigación académica sobre cómo la gamificación mejora la motivación y el aprendizaje significativo.',
      url: 'https://www.redalyc.org/journal/3314/331475280005/331475280005.pdf', 
      top: '52%', left: '55%', width: '35%' 
    },
    { 
      label: 'Materiales (Plataforma)', 
      description: 'Enlace directo para acceder a la aplicación web de nuestro Escape Room.',
      url: 'https://escaperoom326.web.app/escape-room', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Recursos)', 
      description: 'Materiales y recursos adicionales de soporte para las actividades de la clase.',
      url: 'https://www.chicos.net/public/bebras/bebras_argentina_materiales.html', 
      top: '75%', left: '55%', width: '35%' 
    }
  ],

  // --- CLASE 8: Explorando Scratch Jr ---
  "8": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video explicativo sobre cómo empezar a crear tus primeras historias interactivas con Scratch Jr.',
      url: 'https://www.youtube.com/watch?v=dzjDRzuV72o&list=PLWA-g4q8kZkUWIzv62QuddnZUTZ6zEOt8', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual que detalla paso a paso cómo navegar por la interfaz de Scratch Jr y programar tus personajes.',
      url: 'https://drive.google.com/file/d/1_UoyFDuwW-Dv3IUcLU1FdQV38N9HmtuT/view?usp=drive_link', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el Scratch Jr en primaria?', 
      description: 'Informe oficial del INTEF que detalla el impacto pedagógico de la programación por bloques en el desarrollo cognitivo.',
      url: 'https://intef.es/wp-content/uploads/2020/11/07_Observatorio_Scratch_Jr_v2.pdf', 
      top: '52%', left: '55%', width: '35%' // Posición solicitada
    },
    { 
      label: 'Materiales usados en clase', 
      description: 'Acceso directo a CodeJr, donde encontrarás tutoriales y proyectos de ejemplo para dominar la programación por bloques.',
      url: 'https://codejr.org/scratchjr/index.html', 
      top: '75%', left: '32.5%', width: '35%' // Centrado para que sea el único elemento
    }
  ],

// --- CLASE 9: Guiar al Robot Humano ---
  "9": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video explicativo sobre cómo guiar al robot humano, introduciendo la lógica de las instrucciones secuenciales.',
      url: 'https://www.youtube.com/watch?v=aZnCFrf7g9Q', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual que detalla la ruta de pasos y comandos necesarios para realizar la actividad con éxito.',
      url: 'https://drive.google.com/file/d/1Kh1rOb0QPk1mhMjudQ7wBYE1ea6DApnZ/view?usp=drive_link', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante Guiar al Robot Humano en primaria?', 
      description: 'Artículo sobre el impacto de la robótica educativa y la programación desconectada en el aprendizaje infantil.',
      url: 'https://convite.cenditel.gob.ve/publicaciones/revistaclic/article/download/1361/375', 
      top: '52%', left: '55%', width: '35%' // Posición al 52% solicitada
    },
    { 
      label: 'Materiales (Google Doodle)', 
      description: 'Juego interactivo de Google para celebrar los 50 años de programación infantil, ideal para practicar secuencias.',
      url: 'https://doodles.google/doodle/celebrating-50-years-of-kids-coding/', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Guía de apoyo)', 
      description: 'Ficha de trabajo imprimible con ejercicios de programación básica para reforzar la lógica espacial.',
      url: 'https://skolmagi.nu/produkt/arbetsblad-programmering/?utm_source=Pinterest&utm_medium=organic', 
      top: '75%', left: '55%', width: '35%' 
    }
  ],
// --- CLASE 10: Escape Room ---
  "10": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video tutorial para comprender la lógica de los Escape Rooms y cómo participar activamente en el reto.',
      url: 'https://www.youtube.com/watch?v=NLM2GjSihNY', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual detallado con la ruta de misiones y los pasos necesarios para completar el desafío.',
      url: 'https://drive.google.com/file/d/1F06EAIht2RXtuO71AZv-AW4xow8wooYL/view?usp=drive_link', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el Escape Room en primaria?', 
      description: 'Artículo académico que analiza los beneficios de la gamificación y el Escape Room en el aprendizaje infantil.',
      url: 'https://www.redalyc.org/journal/3314/331475280005/331475280005.pdf', 
      top: '52%', left: '55%', width: '35%' // Posición al 52% solicitada
    },
    { 
      label: 'Materiales (App Escape Room)', 
      description: 'Acceso directo a nuestra aplicación web interactiva para comenzar el desafío del Escape Room.',
      url: 'https://escaperoom326.web.app/escape-room', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Recursos)', 
      description: 'Material complementario con ejercicios de lógica y retos de apoyo para fortalecer la resolución de problemas.',
      url: 'https://www.chicos.net/public/bebras/bebras_argentina_materiales.html', 
      top: '75%', left: '55%', width: '35%' 
    }
  ],

// --- CLASE 11: Ritmo y Algoritmo ---
  "11": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video explicativo sobre cómo la música y el ritmo se relacionan directamente con la lógica de los algoritmos.',
      url: 'https://www.youtube.com/watch?v=cKkhwOIqDj8', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual con la ruta de pasos para realizar la actividad rítmica y algorítmica en el aula.',
      url: 'https://drive.google.com/file/d/1q7VXEQZ9c1YH15gDLcyI8PnCKPJ87hm3/view?usp=drive_link', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante la música en primaria?', 
      description: 'Documento académico que explora la relación entre la educación musical y el desarrollo del pensamiento lógico-matemático.',
      url: 'https://accedacris.ulpgc.es/bitstream/10553/96179/1/bord%C3%B3ngarc%C3%ADagemmatfg2018.pdf', 
      top: '50%', left: '55%', width: '35%' // Posición exacta al 52%
    },
    { 
      label: 'Materiales (Video 1)', 
      description: 'Recurso audiovisual complementario para practicar secuencias rítmicas aplicadas a la programación.',
      url: 'https://www.youtube.com/watch?v=75ikeepgPFI', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Video 2)', 
      description: 'Video adicional para fortalecer la coordinación y el entendimiento del algoritmo a través del movimiento.',
      url: 'https://www.youtube.com/watch?v=tAKj_gpaCB0', 
      top: '75%', left: '55%', width: '35%' 
    }
  ],

// --- CLASE 12: Stop del PC ---
  "12": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video explicativo sobre cómo adaptar el juego del Stop para enseñar lógica, secuencias y depuración.',
      url: 'https://www.youtube.com/watch?v=o-Un8MPSj6c', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual con el paso a paso detallado para ejecutar la dinámica del juego del Stop en el aula.',
      url: 'https://drive.google.com/file/d/15Mc8k84vrgknoRUuwq7kOjsukU5cR6_k/view?usp=drive_link', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el juego en primaria?', 
      description: 'Video análisis sobre cómo los juegos tradicionales ayudan a desarrollar la agilidad mental y el pensamiento computacional.',
      url: 'https://www.youtube.com/watch?v=3rn6fmxTs4s', 
      top: '52%', left: '55%', width: '35%' // Posición al 52% solicitada
    },
    { 
      label: 'Materiales usados en clase', 
      description: 'Acceso a ideas y plantillas visuales en Pinterest para dinamizar el juego del Stop en clase.',
      url: 'https://co.pinterest.com/pin/1337074889490947/', 
      top: '75%', left: '32.5%', width: '35%' // Centrado para un solo botón
    }
  ],

// --- CLASE 13: Armado Robótico ---
  "13": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video explicativo sobre los fundamentos del armado robótico y cómo dar los primeros pasos en el ensamblaje.',
      url: 'https://www.youtube.com/watch?v=AaXXu292iNg', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual que detalla la ruta de pasos para realizar el armado robótico paso a paso en clase.',
      url: 'https://drive.google.com/file/d/1Rq2MBEXQ9xlR9mAPYXzfry6TPaGGz1oT/view?usp=drive_link', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el Armado Robótico en primaria?', 
      description: 'Artículo académico que explora los beneficios del desarrollo de habilidades motrices y lógicas a través de la robótica educativa.',
      url: 'https://www.redalyc.org/journal/3439/343963314011/343963314011.pdf', 
      top: '50%', left: '55%', width: '35%' // Posición al 52% solicitada
    },
    { 
      label: 'Materiales (Video Tutorial 1)', 
      description: 'Primer tutorial práctico para comprender la mecánica básica del armado de piezas robóticas.',
      url: 'https://www.youtube.com/watch?v=pCM4Xc0Nyns', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Video Tutorial 2)', 
      description: 'Segundo tutorial práctico para avanzar en el ensamblaje y funcionamiento de tu robot entendiendo como usar la protoboard.',
      url: 'https://www.youtube.com/watch?v=99Rqlf5T00w', 
      top: '75%', left: '55%', width: '35%' 
    }
  ],

// --- CLASE 14: Algoritmos con Plastilina ---
  "14": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video explicativo sobre cómo modelar algoritmos y secuencias utilizando plastilina como herramienta táctil.',
      url: 'https://www.youtube.com/watch?v=OXF04R5gAm8', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual que detalla la ruta de pasos para realizar nuestras creaciones algorítmicas con plastilina.',
      url: 'https://drive.google.com/file/d/1uaZ-DjaI-hBq2KroicOZjmQH1G-MC9XJ/view?usp=drive_link', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante los Algoritmos con Plastilina en primaria?', 
      description: 'Documento académico sobre cómo la manipulación de materiales físicos facilita la comprensión de conceptos algorítmicos.',
      url: 'https://repository.unad.edu.co/jspui/bitstream/10596/70614/1/Mamunozmi.pdf', 
      top: '50%', left: '55%', width: '35%' // Posición al 52% solicitada
    },
    { 
      label: 'Materiales (Figuras)', 
      description: 'Acceso a una web con ideas creativas y ejemplos de figuras en plastilina para guiar tu modelado.',
      url: 'https://webdelmaestro.com/figuras-de-plastilina', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Video guía)', 
      description: 'Video tutorial adicional para aprender técnicas básicas de modelado aplicadas a nuestra actividad de algoritmos.',
      url: 'https://www.youtube.com/watch?v=Ab28Dha0s8c', 
      top: '75%', left: '55%', width: '35%' 
    }
  ],

// --- CLASE 15: Debate Ético ---
  "15": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video introductorio sobre la importancia de fomentar el debate ético y el pensamiento crítico desde temprana edad.',
      url: 'https://www.youtube.com/watch?v=6GrCLiBev30', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual con la ruta de aprendizaje detallada para conducir un debate ético y abordar dilemas morales.',
      url: 'https://drive.google.com/file/d/1NbOabinon-LRGsfFfkfR24_oEXMyYxTs/view?usp=drive_link', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el Debate Ético en primaria?', 
      description: 'Artículo académico sobre la relevancia del debate ético en la educación primaria para la formación ciudadana.',
      url: 'https://uvadoc.uva.es/bitstream/handle/10324/57832/TFG-L3445.pdf?sequence=1', 
      top: '50%', left: '55%', width: '35%' // Posición ajustada al 50%
    },
    { 
      label: 'Materiales usados en clase', 
      description: 'Documento guía con casos de estudio y dilemas morales listos para debatir en clase.',
      url: 'https://docs.google.com/document/d/1uE8DCU1UNQIihG6V9HL7iI0g76GsGTEsqAOphZOFo1I/edit?usp=sharing', 
      top: '75%', left: '32.5%', width: '35%' // Centrado al ser un único material
    }
  ],

// --- CLASE 16: Introducción a Micro:bit ---
  "16": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video introductorio sobre qué es una Micro:bit y cómo podemos empezar a programarla de manera sencilla.',
      url: 'https://www.youtube.com/watch?v=5J3aVSQcksM', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual con la ruta de pasos para realizar los primeros proyectos con tu placa Micro:bit.',
      url: 'https://drive.google.com/file/d/1e9PEYc-X6lAcdhdWFKr2oTNLSnPnCKR9/view?usp=drive_link', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante la Introducción a Micro:bit en primaria?', 
      description: 'Artículo académico que analiza cómo el uso de hardware educativo potencia el pensamiento computacional en niños.',
      url: 'https://dialnet.unirioja.es/servlet/articulo?codigo=10402833', 
      top: '50%', left: '55%', width: '35%' // Posición al 50% solicitada
    },
    { 
      label: 'Materiales (MakeCode)', 
      description: 'Acceso directo a la plataforma MakeCode para comenzar a programar tus proyectos en línea.',
      url: 'https://makecode.microbit.org', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Video Tutorial)', 
      description: 'Tutorial práctico para aprender a usar las funciones básicas y sensores de la placa Micro:bit.',
      url: 'https://www.youtube.com/watch?v=w9D18Lofooo&t=816s', 
      top: '75%', left: '55%', width: '35%' 
    }
  ],

// --- CLASE 17: Variables y Sensores ---
  "17": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video explicativo sobre cómo integrar variables y sensores en tus proyectos de Micro:bit para hacerlos interactivos.',
      url: 'https://www.youtube.com/watch?v=HiXqkALl35s', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Mapa visual que detalla el paso a paso para configurar variables y activar sensores durante la actividad de clase.',
      url: 'https://drive.google.com/file/d/11dkd7KHFV8BMVEj-cWx6FRZJw6UnMrdN/view?usp=drive_link', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante las Variables y Sensores en primaria?', 
      description: 'Recursos pedagógicos oficiales sobre cómo el uso de variables fortalece la comprensión de la lógica de programación.',
      url: 'https://microbit.org/teach/topics/variables/', 
      top: '50%', left: '55%', width: '35%' // Posición al 50% solicitada
    },
    { 
      label: 'Materiales usados en clase', 
      description: 'Tutorial práctico para implementar sensores y variables en proyectos reales de robótica educativa.',
      url: 'https://www.youtube.com/watch?v=hAFZ1KQlYaE', 
      top: '75%', left: '32.5%', width: '35%' // Centrado al ser un único material
    }
  ],

// --- CLASE 18: CuteBot ---
  "18": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video tutorial introductorio sobre el montaje y puesta en marcha de tu Smart CuteBot.',
      url: 'https://www.youtube.com/watch?v=U3j-56ddUdI', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual con la ruta de pasos para programar los movimientos y sensores de tu CuteBot.',
      url: 'https://drive.google.com/file/d/1ZEWmtIhI0-Reie9FWcHMuZ-UbOtBzMiV/view?usp=drive_link', 
      top: '30%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el CuteBot en primaria?', 
      description: 'Documento académico que detalla cómo la robótica móvil con CuteBot potencia el aprendizaje significativo en la escuela.',
      url: 'https://uvadoc.uva.es/bitstream/handle/10324/70030/TFG-L3920.pdf?sequence=1&isAllowed=y', 
      top: '50%', left: '55%', width: '35%' // Posición ajustada al 50%
    },
    { 
      label: 'Materiales usados en clase', 
      description: 'Manual técnico oficial de Smart CuteBot; guía esencial para entender todas sus funcionalidades y sensores.',
      url: 'https://habilis.ro-botica.com/wp-content/uploads/2023/10/Smart-CuteBot_02_ES_v2_rebeca.pdf', 
      top: '75%', left: '32.5%', width: '35%' // Centrado al ser un único material
    }
  ],

// --- CLASE 19: ¿Cómo piensan los computadores? ---
  "19": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video introductorio que explica de forma sencilla cómo los computadores procesan información y siguen nuestras instrucciones.',
      url: 'https://www.youtube.com/watch?v=JDhF_7QYrow', 
      top: '45%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual que detalla la ruta lógica de nuestra clase sobre el funcionamiento de los computadores.',
      url: 'https://drive.google.com/file/d/1qrq6s1J-CKWdOSN3osI7cIADy6Q0M1oO/view?usp=drive_link', 
      top: '45%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante conocer como piensan los computadores en primaria?', 
      description: 'Documento académico sobre cómo la alfabetización digital y la lógica computacional preparan a los estudiantes para el futuro.',
      url: 'https://intellectum.unisabana.edu.co/server/api/core/bitstreams/7bdf9f62-e77a-52b7-e053-7e0910accd73/content', 
      top: '65%', left: '55%', width: '35%' // Posición al 50% solicitada
    },
    { 
      label: 'Materiales usados en clase', 
      description: 'Manual técnico de CuteBot: guía esencial para entender las funcionalidades y sensores de nuestro robot.',
      url: 'https://habilis.ro-botica.com/wp-content/uploads/2023/10/Smart-CuteBot_02_ES_v2_rebeca.pdf', 
      top: '75%', left: '5%', width: '35%' // Centrado al ser un único material
    }
  ],

// --- CLASE 20: ¿Por qué es importante aprender a programar? ---
  "20": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video inspirador que nos invita a reflexionar sobre cómo la programación abre nuevas puertas al futuro.',
      url: 'https://www.youtube.com/watch?v=1yTnqbTb5jg', 
      top: '40%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual con la ruta de pasos para realizar nuestras reflexiones y actividades sobre programación.',
      url: 'https://drive.google.com/file/d/1RG-QTNdeTStQaE51GqsKSQ_RAdeoday0/view?usp=drive_link', 
      top: '40%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante aprender a programar en primaria?', 
      description: 'Artículo académico que explora cómo la programación desarrolla el pensamiento crítico y la resolución de problemas.',
      url: 'https://dialnet.unirioja.es/descarga/articulo/10516127.pdf', 
      top: '60%', left: '55%', width: '35%' // Posición al 50% solicitada
    },
    { 
      label: 'Materiales (Video Tutorial)', 
      description: 'Tutorial práctico sobre cómo construir soluciones tecnológicas utilizando programación básica.',
      url: 'https://www.youtube.com/watch?v=6j5bPeMQYsc', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Guía Digital)', 
      description: 'Acceso a la guía interactiva para crear un seguidor de líneas, aplicando todo lo aprendido sobre lógica.',
      url: 'https://libros.catedu.es/books/escuela-40-bbc-microbit-en-el-aula/page/un-sencillo-seguidor-de-lineas', 
      top: '82%', left: '55%', width: '35%' 
    }
  ],

// --- BACHILLERATO - CLASE 1.1: Algoritmos y Emociones ---
"1.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video explicativo que explora la relación entre los algoritmos y la gestión de las emociones en el bachillerato.',
      url: '', 
      top: '37%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual detallado con la ruta de pasos para completar nuestra actividad sobre algoritmos y emociones.',
      url: 'https://drive.google.com/file/d/1ZDQPviKjjM_gU3IPFnSznwHU2batPkm7/view', 
      top: '35%', left: '55%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante los algoritmos en bachillerato?', 
      description: 'Repositorio académico que analiza cómo la programación y la lógica influyen en las competencias socioemocionales.',
      url: 'https://repositorio.unesum.edu.ec/handle/53000/9428', 
      top: '55%', left: '55%', width: '35%' 
    },
    { 
      label: 'Materiales (Desafío)', 
      description: 'Desafío interactivo en Educaplay para aplicar los conceptos de algoritmos y pensamiento computacional.',
      url: 'https://es.educaplay.com/recursos-educativos/24354806-desafio_de_algoritmos_y_pensamiento_computacional.html', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Recursos digitales)', 
      description: 'Guía digital de Hacemos Escuela con recursos de cultura digital y programación orientada a nivel bachillerato.',
      url: 'https://hacemosescuela.cba.gov.ar/cultura-digital/eje-algoritomos-y-programacion/', 
      top: '80%', left: '55%', width: '35%' 
    }
  ],

// --- BACHILLERATO - CLASE 2.1: Mundo Binario ---
  "2.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video tutorial enfocado en el sistema binario y cómo las computadoras procesan datos.',
      url: 'https://www.youtube.com/watch?v=o4D744FMie8&t=224s', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Mapa visual que resume el proceso y las etapas de la clase sobre el mundo binario.',
      url: 'https://drive.google.com/file/d/1rgcWbrHzVU-U_yUFjdF_yRjunWdtZ_bw/view?usp=drive_link', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante los binarios en bachiller?', 
      description: 'Artículo académico que analiza la importancia pedagógica de enseñar sistemas binarios en el nivel medio.',
      url: 'https://www.scielo.org.mx/pdf/ed/v20n2/v20n2a6.pdf', 
      top: '52%', left: '58%', width: '35%' 
    },
    { 
      label: 'Materiales (Juego Cisco)', 
      description: 'Simulador interactivo diseñado para practicar la conversión a sistema binario de forma dinámica.',
      url: 'https://learningcontent.cisco.com/games/binary/index.html', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Guía descargable)', 
      description: 'PDF complementario con ejercicios prácticos para reforzar el aprendizaje del sistema binario.',
      url: 'https://drive.google.com/file/d/1wR3RC4kD4ovYsSBoFWfgPUuisw2iaA8G/view', 
      top: '75%', left: '58%', width: '35%' 
    }
  ],
// --- BACHILLERATO - CLASE 3.1: Patrones y Cuadrículas ---
  "3.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video reflexivo sobre el trabajo colaborativo en entornos de aprendizaje digital.',
      url: 'https://www.youtube.com/watch?v=TlxG2HGcQRA&t=1s', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Diagrama visual que esquematiza la secuencia de actividades para desarrollar el pensamiento lógico.',
      url: 'https://drive.google.com/file/d/1HCMUm3Ncj5Mrz-Hap1d8VW3068uIXZcl/view?usp=drive_link', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué son importantes los patrones en bachiller?', 
      description: 'Documento académico que fundamenta el uso de patrones en el pensamiento computacional.',
      url: 'https://www.seiem.es/wp-content/uploads/2025/04/Comunicacion_04.pdf', 
      top: '52%', left: '58%', width: '35%' 
    },
    { 
      label: 'Actividad interactiva: Patrones', 
      description: 'Juego interactivo para practicar el reconocimiento y creación de patrones de forma dinámica.',
      url: 'https://wordwall.net/es/resource/14327765/patrones', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Recursos: Algoritmos y Programación', 
      description: 'Repositorio oficial con guías pedagógicas sobre algoritmos y cultura digital.',
      url: 'https://hacemosescuela.cba.gov.ar/cultura-digital/eje-algoritomos-y-programacion/', 
      top: '75%', left: '58%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 4.1: Secuencias Narrativas ---
  "4.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video sobre la importancia de la colaboración y la lógica en la resolución de retos algorítmicos.',
      url: 'https://www.youtube.com/watch?v=8m9KuigpRW4', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Mapa visual que esquematiza la secuencia de actividades para desarrollar la lógica narrativa.',
      url: 'https://drive.google.com/file/d/1Elh6kstFLcf57RrvYCnGsdo0V9fhI2Yu/view?usp=drive_link', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué son importantes las secuencias en bachiller?', 
      description: 'Artículo académico que analiza cómo las secuencias forman la base del razonamiento lógico en la programación.',
      url: 'https://revistasimonrodriguez.org/index.php/simonrodriguez/article/view/340', 
      top: '52%', left: '58%', width: '35%' 
    },
    { 
      label: 'Actividad interactiva: Code.org', 
      description: 'Entorno de aprendizaje guiado para practicar secuencias y lógica de programación básica.',
      url: 'https://studio.code.org/courses/mc/units/1/lessons/1/levels/1', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales: Laberintos secretos', 
      description: 'Recurso visual práctico para ejercitar la resolución de problemas y la depuración de caminos.',
      url: 'https://i0.wp.com/www.actividadesdeinfantilyprimaria.com/wp-content/uploads/2021/04/laberintos-secretos-1.jpg?ssl=1', 
      top: '75%', left: '58%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 5.1: Tangram Algorítmico ---
  "5.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video introductorio sobre el Tangram como herramienta para el desarrollo lógico y el pensamiento computacional.',
      url: 'https://www.youtube.com/watch?v=XCjMpEnhYg0', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual que detalla los pasos para realizar la actividad algorítmica con Tangram en clase.',
      url: 'https://drive.google.com/file/d/1Vq4A5lXRyU5rfFfimFExvl6oCxbwK8wk/view?usp=drive_link', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el razonamiento logico en bachiller?', 
      description: 'Repositorio académico que explica los beneficios del Tangram en el razonamiento geométrico y lógico.',
      url: 'https://repositorio.unesum.edu.ec/bitstream/53000/4980/1/Pe%c3%b1afiel%20Nieto%20V%c3%adctor%20Alfonso.pdf', 
      top: '52%', left: '58%', width: '35%' 
    },
    { 
      label: 'Materiales (Guía Calaméo)', 
      description: 'Guía interactiva con recursos y ejemplos sobre el uso pedagógico y creativo del Tangram.',
      url: 'https://www.calameo.com/read/0062643982cd4fbf6e9eb', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales (Plantillas para imprimir)', 
      description: 'Figuras y plantillas listas para recortar, esenciales para la construcción física del Tangram.',
      url: 'https://www.orientacionandujar.es/2018/06/11/figuras-para-imprimir-plantillas-incluidas-tangram/', 
      top: '75%', left: '58%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 6.1: Guías Bebras ---
  "6.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video introductorio sobre los retos Bebras y cómo aplicar el pensamiento computacional en ellos.',
      url: 'https://www.youtube.com/watch?v=3oDOAtJK0_s', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Mapa visual con la ruta de actividades propuesta para el desarrollo lógico de los retos Bebras.',
      url: 'https://drive.google.com/file/d/1lA1aFG8oZuXOPbd3dKGbos67lAPRaLcS/view?usp=drive_link', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué son importantes las Guías Bebras?', 
      description: 'Documento académico que analiza el impacto de los retos Bebras en el desarrollo cognitivo y lógico.',
      url: 'https://revista.eia.edu.co/index.php/reveia/article/download/1833/1641', 
      top: '70%', left: '58%', width: '35%' 
    },
    { 
      label: 'Materiales usados en clase', 
      description: 'Recursos y guías oficiales para practicar desafíos de lógica y pensamiento computacional.',
      url: 'https://www.chicos.net/public/bebras/bebras_argentina_materiales.html', 
      top: '75%', left: '5%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 7.1: Escape Room ---
  "7.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video introductorio sobre el uso de Escape Rooms educativos y trabajo colaborativo.',
      url: 'https://www.youtube.com/watch?v=NLM2GjSihNY', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Diagrama visual con la ruta de desafíos y lógica del Escape Room propuesto.',
      url: 'https://drive.google.com/file/d/1h_oBS_um42wlAMTKkIpj7XH51tbyZKgh/view?usp=drive_link', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el Escape Room en bachiller?', 
      description: 'Artículo científico sobre la gamificación y el impacto de los Escape Rooms en el razonamiento lógico.',
      url: 'https://www.redalyc.org/journal/3314/331475280005/331475280005.pdf', 
      top: '52%', left: '58%', width: '35%' 
    },
    { 
      label: 'Actividad: Escape Room interactivo', 
      description: 'Plataforma web con un Escape Room diseñado para poner a prueba la resolución de problemas.',
      url: 'https://escaperoom326.web.app/escape-room', 
      top: '52%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales: Desafíos Bebras', 
      description: 'Recursos adicionales para integrar desafíos lógicos de Bebras dentro del Escape Room.',
      url: 'https://www.chicos.net/public/bebras/bebras_argentina_materiales.html', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Recursos: Cazadores de Escapes', 
      description: 'Portal con dinámicas y herramientas para diseñar y crear experiencias de Escape Room.',
      url: 'https://www.cazadoresdeescapes.es', 
      top: '75%', left: '58%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 8.1: Explorando Scratch Jr ---
  "8.1": [
    { 
      label: 'Aprendamos en comunidad (Parte 1)', 
      description: 'Video introductorio sobre los fundamentos de Scratch Jr para crear historias digitales.',
      url: 'https://www.youtube.com/watch?v=dzjDRzuV72o&list=PLWA-g4q8kZkUWIzv62QuddnZUTZ6zEOt8', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Aprendamos en comunidad (Parte 2)', 
      description: 'Tutorial sobre bloques de movimiento y eventos complejos para animar personajes.',
      url: 'https://www.youtube.com/watch?v=a5DOIvjxiQ0', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante Scratch Jr?', 
      description: 'Documento del INTEF sobre el potencial de Scratch Jr para desarrollar pensamiento computacional.',
      url: 'https://intef.es/wp-content/uploads/2020/11/07_Observatorio_Scratch_Jr_v2.pdf', 
      top: '52%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Mapa visual que detalla la ruta de aprendizaje y actividades de esta sesión.',
      url: 'https://drive.google.com/file/d/1ZWx-4OCVhkVuzzYwhyRRcTuEK3dVQ9ho/view?usp=drive_link', 
      top: '52%', left: '58%', width: '35%' 
    },
    { 
      label: 'Materiales (Code Jr)', 
      description: 'Recursos y guía para iniciarse en la programación por bloques con Code Jr.',
      url: 'https://codejr.org/scratchjr/index.html', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Plataforma Scratch', 
      description: 'Sitio oficial de Scratch para profundizar en proyectos de programación visual más complejos.',
      url: 'https://scratch.mit.edu', 
      top: '75%', left: '58%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 9.1: Guiar al Robot Humano ---
  "9.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video introductorio sobre la lógica de instrucciones y el pensamiento computacional desconectado.',
      url: 'https://www.youtube.com/watch?v=IoKMGQy6MSI', 
      top: '35%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual de la secuencia de pasos para la actividad "Robot Humano".',
      url: 'https://drive.google.com/file/d/1PIHiqMpwAcrEfCq4miMsTXKeNYbEocJu/view?usp=drive_link', 
      top: '35%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante Guiar al Robot Humano?', 
      description: 'Estudio sobre cómo la programación desconectada mejora la resolución de problemas y la lógica en secundaria.',
      url: 'https://www.redalyc.org/journal/274/27466169001/html/', 
      top: '55%', left: '5%', width: '35%' 
    },
    { 
      label: 'Actividad: 50 años de programación', 
      description: 'Actividad interactiva de Google para aprender las bases de la programación de forma lúdica.',
      url: 'https://doodles.google/doodle/celebrating-50-years-of-kids-coding/', 
      top: '55%', left: '58%', width: '35%' 
    },
    { 
      label: 'Materiales: Fichas de programación', 
      description: 'Fichas de trabajo con retos de programación para practicar secuencias y lógica de caminos.',
      url: 'https://skolmagi.nu/produkt/arbetsblad-programmering/?utm_source=Pinterest&utm_medium=organic', 
      top: '80%', left: '32%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 10.1: Interfaz Digital ---
  "10.1": [
    { 
      label: 'Aprendamos en comunidad (Parte 1)', 
      description: 'Video tutorial introductorio sobre la interfaz de Scratch Jr y sus componentes básicos.',
      url: 'https://www.youtube.com/watch?v=p4Ou7cSd9FA', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Aprendamos en comunidad (Parte 2)', 
      description: 'Video avanzado sobre el diseño de interfaces interactivas y eventos en Scratch.',
      url: 'https://www.youtube.com/watch?v=a5DOIvjxiQ0&t=20s', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Mapa visual de la ruta de diseño para crear interfaces digitales efectivas en el aula.',
      url: 'https://drive.google.com/file/d/1ID1wtoyqTTXoBphHKZbxqMmMB_ch92i7/view?usp=drive_link', 
      top: '52%', left: '5%', width: '35%' 
    },
    { 
      label: 'Comprensión de las interfaces en bachiller', 
      description: 'Observatorio sobre cómo la programación por bloques facilita la comprensión de interfaces.',
      url: 'https://intef.es/wp-content/uploads/2020/11/07_Observatorio_Scratch_Jr_v2.pdf', 
      top: '52%', left: '58%', width: '35%' 
    },
    { 
      label: 'Materiales: Entorno Code Jr', 
      description: 'Plataforma interactiva para profundizar en el aprendizaje de la programación por bloques.',
      url: 'https://codejr.org/scratchjr/index.html', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Editor oficial de Scratch', 
      description: 'Editor en línea de Scratch con tutoriales guiados para empezar a programar proyectos.',
      url: 'https://scratch.mit.edu/projects/editor/?tutorial=getStarted', 
      top: '75%', left: '58%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 11.1: Ritmo y Algoritmo ---
  "11.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video sobre la relación entre el ritmo musical, la secuencia y la lógica algorítmica.',
      url: 'https://www.youtube.com/watch?v=BZNj1_HKHAM', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Mapa visual que detalla la secuencia de pasos y actividades para la clase de Ritmo y Algoritmo.',
      url: 'https://drive.google.com/file/d/1J-X_DVGHURslLboHVDAEl5coZYKPnvJ-/view?usp=drive_link', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el Ritmo y Algoritmo?', 
      description: 'Trabajo académico que explora la música como herramienta para el desarrollo del pensamiento computacional.',
      url: 'https://accedacris.ulpgc.es/bitstream/10553/96179/1/bord%C3%B3ngarc%C3%ADagemmatfg2018.pdf', 
      top: '52%', left: '58%', width: '35%' 
    },
    { 
      label: 'Materiales: Ejercicios de ritmo', 
      description: 'Recurso audiovisual con dinámicas de percusión para practicar la coordinación lógica.',
      url: 'https://www.youtube.com/watch?v=75ikeepgPFI', 
      top: '75%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales: Ritmo corporal', 
      description: 'Video con ejercicios prácticos para conectar la expresión corporal con patrones algorítmicos.',
      url: 'https://www.youtube.com/watch?v=czOInjLNNWU', 
      top: '75%', left: '58%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 12.1: Stop del PC ---
  "12.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video sobre la lógica del juego "Stop" aplicada al desarrollo del pensamiento computacional.',
      url: 'https://www.youtube.com/watch?v=o-Un8MPSj6c', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Diagrama visual que esquematiza la dinámica del juego "Stop" como herramienta de lógica.',
      url: 'https://drive.google.com/file/d/1289W7K2R0pZWYXKvqlsrXR9s3HvNrthL/view?usp=drive_link', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el juego en niños?', 
      description: 'Video explicativo sobre el juego fomenta la rapidez mental y la clasificación de categorías.',
      url: 'https://www.youtube.com/watch?v=4HHUieAVWko&t=10s', 
      top: '52%', left: '58%', width: '35%' 
    },
    { 
      label: 'Materiales usados en clase', 
      description: 'Plantillas gráficas para organizar las categorías del juego "Stop" en el aula.',
      url: 'https://co.pinterest.com/pin/1337074889490947/', 
      top: '52%', left: '5%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 13.1: Armado Robótico ---
  "13.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video introductorio sobre los principios de la robótica y la lógica de ensamblaje.',
      url: 'https://www.youtube.com/watch?v=AaXXu292iNg', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Diagrama visual que detalla los pasos para el montaje técnico del robot.',
      url: 'https://drive.google.com/file/d/1x_19NrjNWyw39yh9yk6a7_gdM5UcYtJF/view?usp=drive_link', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el Armado Robótico?', 
      description: 'Artículo sobre el impacto de la robótica educativa en el desarrollo de competencias tecnológicas.',
      url: 'https://www.redalyc.org/journal/920/92065360002/92065360002.pdf', 
      top: '52%', left: '58%', width: '35%' 
    },
    { 
      label: 'Tutorial de ensamblaje (Parte 1)', 
      description: 'Guía técnica paso a paso para la construcción de la estructura mecánica del robot.',
      url: 'https://www.youtube.com/watch?v=pCM4Xc0Nyns', 
      top: '52%', left: '5%', width: '35%' 
    },
    { 
      label: 'Tutorial de ensamblaje (Parte 2)', 
      description: 'Video técnico sobre la conexión de motores, sensores y alimentación eléctrica.',
      url: 'https://www.youtube.com/watch?v=6WReFkfrUIk', 
      top: '75%', left: '5%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 14.1: Algoritmos en Plastilina ---
  "14.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video introductorio sobre cómo utilizar el modelado en plastilina para estructurar procesos lógicos.',
      url: 'https://www.youtube.com/watch?v=_LdO1GgJcSs', 
      top: '35%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual que detalla la secuencia de pasos para realizar la actividad de modelado algorítmico.',
      url: 'https://drive.google.com/file/d/1PQSruw-8xpa0Pds6fhNlMiiMgqPwxzlH/view?usp=drive_link', 
      top: '35%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante la plastilina en bachiller?', 
      description: 'Artículo académico sobre la efectividad de las actividades manipulativas como la plastilina.',
      url: 'https://repository.unad.edu.co/handle/10596/70614?show=full', 
      top: '60%', left: '58%', width: '35%' 
    },
    { 
      label: 'Materiales: Figuras en plastilina', 
      description: 'Recurso didáctico con ejemplos y guías para crear formas y figuras complejas.',
      url: 'https://webdelmaestro.com/figuras-de-plastilina', 
      top: '55%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales: Técnicas de modelado', 
      description: 'Video práctico con técnicas paso a paso para mejorar la creación de formas en plastilina.',
      url: 'https://www.youtube.com/watch?v=Ab28Dha0s8c', 
      top: '75%', left: '5%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 15.1: Debate Ético ---
  "15.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video sobre la ética en la inteligencia artificial y el impacto de los algoritmos en la sociedad.',
      url: 'https://www.youtube.com/watch?v=6GrCLiBev30', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Esquema visual que organiza los puntos clave y reglas para guiar el debate ético en el aula.',
      url: 'https://drive.google.com/file/d/1Eznx2UlzSs7Eer9d0-kJIDdSebot6Bt-/view?usp=drive_link', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el Debate Ético?', 
      description: 'Artículo sobre la ética digital y la responsabilidad social necesaria en la era de la información.',
      url: 'https://dialnet.unirioja.es/descarga/articulo/6930423.pdf', 
      top: '52%', left: '58%', width: '35%' 
    },
    { 
      label: 'Materiales usados en clase', 
      description: 'Documento guía con preguntas disparadoras y estructura para organizar el debate.',
      url: 'https://docs.google.com/document/d/1uE8DCU1UNQIihG6V9HL7iI0g76GsGTEsqAOphZOFo1I/edit?usp=sharing', 
      top: '52%', left: '5%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 16.1: Intro a Micro:bit ---
  "16.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video introductorio sobre el ecosistema Micro:bit y sus capacidades tecnológicas.',
      url: 'https://www.youtube.com/watch?v=5J3aVSQcksM', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Mapa visual de la ruta pedagógica para desarrollar los retos con Micro:bit.',
      url: 'https://drive.google.com/file/d/1IaoBpyL36g2Sgwq1TK6RhQWqPBK94Zz7/view?usp=drive_link', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué son importantes los algoritmos?', 
      description: 'Artículo académico que fundamenta la importancia del pensamiento algorítmico en el nivel medio.',
      url: 'https://dialnet.unirioja.es/servlet/articulo?codigo=10402833', 
      top: '52%', left: '5%', width: '35%' 
    },
    { 
      label: 'Plataforma MakeCode', 
      description: 'Entorno de programación oficial para Micro:bit mediante bloques y JavaScript.',
      url: 'https://makecode.microbit.org', 
      top: '52%', left: '58%', width: '35%' 
    },
    { 
      label: 'Tutorial avanzado Micro:bit', 
      description: 'Guía práctica con proyectos y sensores para explotar al máximo el hardware.',
      url: 'https://www.youtube.com/watch?v=w9D18Lofooo&t=816s', 
      top: '75%', left: '32%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 17.1: Variables y Sensores ---
  "17.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video introductorio sobre el concepto de variables y cómo los sensores interactúan con Micro:bit.',
      url: 'https://www.youtube.com/watch?v=HiXqkALl35s', 
      top: '30%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Mapa visual que esquematiza la ruta de aprendizaje sobre la implementación de variables y sensores.',
      url: 'https://drive.google.com/file/d/1hGxgs-9SiW2SQu5xpvM5qGOKTtdDodnR/view?usp=drive_link', 
      top: '30%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué son importantes las variables?', 
      description: 'Documento oficial sobre el uso de variables en programación para almacenar datos en Micro:bit.',
      url: 'https://microbit.org/teach/topics/variables/', 
      top: '60%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales: Guía práctica', 
      description: 'Video tutorial práctico sobre cómo configurar y utilizar sensores en proyectos con Micro:bit.',
      url: 'https://www.youtube.com/watch?v=hAFZ1KQlYaE', 
      top: '60%', left: '58%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 18.1: CuteBot: El Reto Final ---
  "18.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video sobre el ensamblaje y funcionamiento avanzado del CuteBot para superar retos.',
      url: 'https://www.youtube.com/watch?v=U3j-56ddUdI', 
      top: '35%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Diagrama visual con la ruta de desafíos técnicos para el reto final de robótica.',
      url: 'https://drive.google.com/file/d/1mtY-ljTVZq6Dq-VDYkGAc2BG1B5AGlSK/view?usp=drive_link', 
      top: '35%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante el CuteBot?', 
      description: 'Estudio sobre el impacto de la robótica móvil en el aprendizaje de competencias STEM.',
      url: 'https://repositorio.unican.es/xmlui/bitstream/handle/10902/35778/2024_LavinCastanedoA.pdf?sequence=1', 
      top: '60%', left: '58%', width: '35%' 
    },
    { 
      label: 'Materiales: Guía técnica CuteBot', 
      description: 'Manual oficial con especificaciones, programación y configuración de los sensores del CuteBot.',
      url: 'https://habilis.ro-botica.com/wp-content/uploads/2023/10/Smart-CuteBot_02_ES_v2_rebeca.pdf', 
      top: '60%', left: '5%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 19.1: CuteBot - Bloques de Movimiento ---
  "19.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video introductorio sobre los comandos básicos de movimiento y bloques para controlar el CuteBot.',
      url: 'https://www.youtube.com/watch?v=JDhF_7QYrow', 
      top: '45%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Mapa visual con el flujo de trabajo y la secuencia de actividades para la clase.',
      url: 'https://drive.google.com/file/d/1z9cN-rBdM3RayP_qMZABPLHOBHjxiGzI/view?usp=drive_link', 
      top: '45%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Cómo piensan los robots?', 
      description: 'Guía didáctica que explora la lógica, la toma de decisiones y el pensamiento detrás de la robótica programable.',
      url: 'https://www.edmilenio.com/media/wysiwyg/Guies_didactiques/En_qu_piensan_los_robots_guia_didactica_.pdf', 
      top: '63%', left: '58%', width: '35%' 
    },
    { 
      label: 'Manual técnico CuteBot', 
      description: 'Documentación técnica con especificaciones, guía de usuario y puesta a punto del hardware.',
      url: 'https://habilis.ro-botica.com/wp-content/uploads/2023/10/Smart-CuteBot_02_ES_v2_rebeca.pdf', 
      top: '65%', left: '5%', width: '35%' 
    },
    { 
      label: 'Referencia: Bloques CuteBot', 
      description: 'Guía en línea con la explicación de las funciones y bloques específicos para programar el robot en MakeCode.',
      url: 'https://microbit.microlog.es/bloques-cutebot/', 
      top: '83%', left: '40%', width: '35%' 
    }
  ],
  // --- BACHILLERATO - CLASE 20.1: CuteBot - Gran Carrera Final ---
  "20.1": [
    { 
      label: 'Aprendamos en comunidad', 
      description: 'Video sobre la lógica de competencia y el ajuste final del CuteBot para la pista.',
      url: 'https://www.youtube.com/watch?v=1yTnqbTb5jg', 
      top: '43%', left: '5%', width: '35%' 
    },
    { 
      label: 'Gráfico de actividades', 
      description: 'Mapa visual que detalla el circuito, las reglas de la carrera y la logística del reto final.',
      url: 'https://drive.google.com/file/d/1OM1JIf4ARMRpVyGO3D2y0E50_9q7MLKU/view?usp=drive_link', 
      top: '43%', left: '58%', width: '35%' 
    },
    { 
      label: '¿Por qué es importante programar?', 
      description: 'Artículo sobre el impacto de la programación en el desarrollo de habilidades analíticas en bachillerato.',
      url: 'https://dialnet.unirioja.es/descarga/articulo/10516127.pdf', 
      top: '60%', left: '5%', width: '35%' 
    },
    { 
      label: 'Materiales: Optimización de motores', 
      description: 'Video tutorial para calibrar los motores y optimizar la velocidad en la pista.',
      url: 'https://www.youtube.com/watch?v=6j5bPeMQYsc', 
      top: '60%', left: '58%', width: '35%' 
    },
    { 
      label: 'Materiales: Seguidor de líneas', 
      description: 'Guía paso a paso para configurar el sensor infrarrojo y lograr que el robot siga la línea correctamente.',
      url: 'https://libros.catedu.es/books/escuela-40-bbc-microbit-en-el-aula/page/un-sencillo-seguidor-de-lineas', 
      top: '80%', left: '32%', width: '35%' 
    }
  ],
};