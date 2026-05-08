import { Injectable } from '@angular/core';

export interface Tripartite {
  conceptos: string;
  practicas: string;
  perspectivas: string;
}

export interface ClassPlan {
  id: string;
  mes: string;
  titulo: string;
  nivel: 'primaria' | 'bachillerato';
  grados: string;
  tema: string;
  objective: string;
  descripcion: string;
  fundamentacion: string;
  enfoqueTripartita: Tripartite;
  articulacionGoretti: string;
  orientacionesCurriculares: string; 
  preguntasReflexivas: string[];
  porquePC: string;
  pdfUrl?: string; // 👈 AGREGADO: Propiedad para el pdf al inicio
  videoUrl?: string; // 👈 AGREGADO: Propiedad opcional para el video
}

@Injectable({ providedIn: 'root' })
export class ContentService {
  private plans: ClassPlan[] = [];

  constructor() {
    this.generateAllPlans();
  }

  private generateAllPlans() {
    const dataBase = [
{ 
        id: 1, 
        fecha: '12-Jun', 
        titulo: 'Algoritmos y Emociones',        
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase1.pdf',// 👈 PDF clase 1 primaria
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.1.pdf', // 👈 PDF clase 1 bachillerato
        video_url: 'https://www.youtube.com/watch?v=RtTOii_heFA', // 👈 ID del video Clase 1
        
        // --- SECCIÓN PRIMARIA ---
        c_pri: 'Introducción al algoritmo y secuencias básicas.', 
        p_pri: 'Depuración, colaboración y aplicación de pasos en actividades lúdicas.',
        v_pri: 'Reflexión ética y emocional sobre la IA y el aprendizaje.',
        art_pri: '• Aplica conceptos básicos del proceso de construcción de algoritmos: las estudiantes formularon secuencias simples.\n• Crea algoritmos para brindar solución a problemas sencillos: al corregir secuencias, aplicaron lógica básica.\n• Valora la utilidad de las estrategias del pensamiento computacional para la solución de problemas: reflexionaron sobre cómo los algoritmos y la IA influyen en la vida cotidiana.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> comprender aspectos básicos en la creación de algoritmos y reconocer su importancia para resolver problemas. <br><strong>• pregunta:</strong>¿Qué creen que es un algoritmo? <br><br>
        • <strong>Saber hacer:</strong> crear algoritmos sencillos, aplicar secuencias, decisiones y repeticiones, y utilizar la tecnología para proponer soluciones. Se usó el juego “Sigue mis pasos” y la corrección en parejas. <br><br>
        • <strong>Saber ser:</strong> valorar la utilidad del pensamiento computacional, trabajar colaborativamente y demostrar empatía frente a problemas del entorno. <br><strong>• debate:</strong> ¿La IA puede entender nuestras emociones?`,
        porquePC_pri: 'La actividad desarrolla el pensamiento computacional porque enseña a las estudiantes a reconocer, aplicar y valorar algoritmos en problemas sencillos, fomenta la depuración y la colaboración, y conecta la lógica con la reflexión crítica y emocional.',
        pRef_Pri: ['¿Qué creen que es un algoritmo?', 'Escribe 5 pasos para una tarea cotidiana.', '¿Qué color del monstruo representa mejor cómo te sentiste hoy? ¿Por qué?', '¿Qué aprendiste sobre tus emociones hoy? ¿Cómo te puede ayudar en clase?'],

        // --- SECCIÓN BACHILLERATO ---
        c_bac: 'Comprensión de algoritmos, secuencias, condición y repetición.',
        p_bac: 'Depuración, colaboración, reflexión crítica sobre errores.',
        v_bac: 'Ética digital, impacto de la IA, emociones en la toma de decisiones.',
        art_bac: '• Comprende los procedimientos adecuados para el diseño de algoritmos y la creación de programas informáticos\n• Aportar en la solución de problemas a través de la construcción de programas informáticos\n• Reconoce y aplica aspectos relevantes en la creación de algoritmos, con el fin de brindar una solución adecuada a un problema o necesidad',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Reconocimiento de qué es un algoritmo, cómo se construye y qué papel cumplen las secuencias, condiciones y repeticiones. <br><strong>• Pregunta:</strong> ¿Qué creen que es un algoritmo? <br><br>
        • <strong>Saber hacer:</strong> Se aplicaron actividades prácticas como “5 pasos para una tarea cotidiana” y el juego “Sigue mis pasos”, donde las estudiantes formularon secuencias, depuraron errores y colaboraron en parejas. <br><br>
        • <strong>Saber ser:</strong> Reflexión ética y emocional mediante el debate sobre la inteligencia artificial y las emociones, además de la actividad con el video El monstruo de las emociones. <br><strong>• Debate:</strong> ¿La IA puede entender nuestras emociones?`,
        porquePC_bac: 'Esta actividad contribuye a que las estudiantes piensen de manera lógica, creativa y crítica, aprendan a resolver problemas de forma estructurada y desarrollen una actitud autónoma y ética frente a la tecnología, que es la esencia del pensamiento computacional.',
        pRef_Bach: [
          '¿Alguna vez sentiste algo que no supiste cómo expresar? ¿Qué hiciste?',
          '¿Crees que tus emociones influyen en cómo te tomas decisiones tecnológicas?',
          '¿Qué color del monstruo representa mejor cómo te sentiste hoy? ¿Por qué?',
          '¿Qué riesgos existen si dejamos que la tecnología piense por nosotros?',
          '¿Qué aprendiste hoy sobre tus emociones y cómo te pueden ayudar en clase?'
        ]
      },
{ 
        id: 2, 
        fecha: '19-Jun', 
        titulo: 'Mundo Binario',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase2.pdf',// 👈 PDF clase 2
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.2.pdf', // 👈 PDF clase 2 bachillerato
        video_url: 'https://www.youtube.com/watch?v=rY3xlpU_J3Y', // 👈 ID del video Clase 2
        
        // --- SECCIÓN PRIMARIA ---
        c_pri: 'Comprensión del binario, secuencias y abstracción.', 
        p_pri: 'Depuración, explicación oral, trabajo colaborativo y reflexión crítica.',
        v_pri: 'Ética digital, creatividad, empatía y expresión emocional.',
        art_pri: '• Comprende aspectos básicos en la creación de algoritmos.\n• Construye programas sencillos aplicando las bases del PC, utilizando algoritmos de manera proactiva para proponer soluciones.\n• Valora la utilidad de las estrategias del pensamiento computacional. El debate y la historia conectan el PC con la vida cotidiana y la ética digital.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> comprender aspectos básicos en la creación de algoritmos y reconocer su importancia para resolver problemas. <br><strong>• pregunta:</strong>¿Qué número crees que se puede formar con estas fichas? <br><br>
        • <strong>Saber hacer:</strong> crear algoritmos sencillos, aplicar secuencias y utilizar la tecnología para proponer soluciones. Se usó el ejercicio de fecha de nacimiento. <br><br>
        • <strong>Saber ser:</strong> valorar la utilidad del pensamiento computacional y trabajar colaborativamente.`,
        porquePC_pri: 'Esta actividad desarrolla el PC porque integra conceptos, prácticas y perspectivas en un solo ambiente de aprendizaje, permitiendo que las estudiantes piensen de manera lógica, creativa y crítica.',
        pRef_Pri: [
          '¿Sabías que las computadoras solo usan ceros y unos para guardar información?', 
          '¿Existe más de una manera de formar un número? ¿Cuál fue tu estrategia?', 
          '¿Cuál es el mayor y menor número posible que se puede formar?', 
          '¿Qué significa que una luz encendida sea un ‘1’ y apagada un ‘0’?', 
          '¿Qué aprendiste hoy sobre cómo piensan las computadoras?'
        ],

        // --- SECCIÓN BACHILLERATO ---
        c_bac: 'Lógica binaria, secuenciación, abstracción.',
        p_bac: 'Reflexión, depuración, comunicación, colaboración.',
        v_bac: 'Ética digital, empatía, expresión emocional, creatividad.',
        art_bac: '• Favorece la comprensión de procedimientos de secuenciación y codificación.\n• Trabajo en equipo y comunicación oral (salida al tablero, explicación de soluciones)\n• Fomenta conciencia crítica, ética digital y compromiso social, preparando a las estudiantes para aplicar la lógica computacional en contextos reales.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Comprensión del sistema binario como base de la codificación digital. <br><strong>• Pregunta:</strong> ¿Por qué crees que las computadoras necesitan usar solo ceros y unos para representar la información? <br><br>
        • <strong>Saber hacer:</strong> Práctica del pensamiento computacional en la resolución de problemas. <br><strong>• Pregunta:</strong> ¿Qué pasos seguiste para transformar un número en binario y cómo comprobaste que tu estrategia funcionaba? <br><br>
        • <strong>Saber ser:</strong> Dimensión socioemocional y ética del aprendizaje, reflexiones escritas sobre emociones y estrategias. <br><strong>• Pregunta:</strong> ¿Cómo te ayudó trabajar en equipo y reflexionar sobre tus emociones a superar las dificultades de la actividad?`,
        porquePC_bac: 'La actividad convierte un concepto abstracto como el sistema binario en una experiencia lúdica, reflexiva y colaborativa, que contribuye directamente a que las estudiantes piensen como programadoras: descomponen problemas, diseñan soluciones y desarrollan resiliencia frente a los desafíos.',
        pRef_Bach: [
          '¿Sabías que las computadoras solo usan ceros y unos para guardar información?',
          '¿Existe más de una manera de formar un número? ¿Cuál fue tu estrategia?',
          '¿Cómo explicaste tu solución a las demás? ¿Qué parte fue más difícil?',
          '¿Cuál es el mayor y menor número posible que se puede formar?',
          '¿Qué significa que una luz encendida sea un “1” y apagada un “0”?',
          '¿Qué aprendiste hoy sobre cómo piensan las computadoras?',
          '¿Qué parte te gustó más de la clase? ¿Por qué?'
        ]
      },
{ 
        id: 3, 
        fecha: '26-Jun', 
        titulo: 'Patrones y Cuadrículas',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase3.pdf',// 👈 PDF clase 3
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.3.pdf', // 👈 PDF clase 3 bachillerato
        video_url: 'https://www.youtube.com/watch?v=3WqjWnRyPEA', // 👈 ID del video Clase 3
        
        // --- SECCIÓN PRIMARIA ---
        c_pri: 'Patrones, secuencias, codificación visual, abstracción.', 
        p_pri: 'Depuración, reflexión, trabajo colaborativo, comunicación.',
        v_pri: 'Resiliencia, motivación, precisión, colaboración.',
        art_pri: '• Comprende aspectos básicos en la creación de algoritmos: al codificar letras y caminos, se ejercitó la lógica secuencial.\n• Utiliza algoritmos de manera proactiva para proponer soluciones: al corregir errores y ajustar códigos, las estudiantes aplicaron pensamiento lógico en acción.\n• Compromiso socioemocional: fomenta autonomía, resiliencia y valoración del error como parte del proceso.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Las estudiantes comprendieron aspectos básicos de la creación de algoritmos, al reconocer patrones, secuencias y estructuras de decisión y repetición. <br><strong>• Pregunta:</strong> ¿Cómo crees que una computadora ve una imagen? <br><br>
        • <strong>Saber hacer:</strong> Crear algoritmos sencillos para resolver problemas elementales, aplicando secuencias y corrigiendo errores. <br><strong>• Pregunta:</strong> ¿Cómo te ayudó tu compañera a corregir el código? <br><br>
        • <strong>Saber ser:</strong> Resiliencia frente al error, la motivación intrínseca y la colaboración entre pares. <br><strong>• Pregunta:</strong> ¿Por qué es valioso equivocarse y volver a intentarlo en el proceso de aprendizaje?`,
        porquePC_pri: 'La actividad desarrolla el pensamiento computacional porque permite a las estudiantes reconocer patrones y secuencias, aplicar algoritmos sencillos en la resolución de problemas, y valorar la utilidad de la codificación como estrategia.',
        pRef_Pri: [
          '¿Por qué crees que los algoritmos son útiles para resolver problemas cotidianos?', 
          '¿Qué estrategia utilizaste para codificar la letra o el camino seguro?', 
          '¿Qué aprendiste sobre la importancia de colaborar con tus compañeras en esta actividad?', 
          '¿Qué hiciste cuando encontraste un error en tu código y cómo lo corregiste?', 
          '¿Cómo te sentiste al descubrir el mensaje oculto después de codificarlo?'
        ],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA) ---
        c_bac: 'Patrones, secuencias, abstracción, estructuras algorítmicas.',
        p_bac: 'Diseño, depuración, comunicación, metacognición.',
        v_bac: 'Ética digital, resiliencia, motivación, colaboración.',
        art_bac: '• Aplica procedimientos de secuenciación, condición y repetición en la elaboración de programas informáticos.\n• Diseño y depuración de algoritmos visuales.\n• Comprende los procedimientos adecuados para el diseño de algoritmos y la creación de programas informáticos, promoviendo conciencia sobre impacto social y tecnológico.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Reconocimiento de patrones, la secuenciación y la codificación visual como conceptos centrales del pensamiento computacional. <br><strong>• Pregunta:</strong> ¿Cómo puedes representar un patrón visual usando solo números y reglas sin necesidad de dibujar? <br><br>
        • <strong>Saber hacer:</strong> Prácticas computacionales como el diseño y depuración de algoritmos, la corrección de errores y la explicación oral de estrategias. <br><strong>• Pregunta:</strong> ¿Qué pasos seguiste para depurar tu algoritmo y asegurarte de que funcionara correctamente? <br><br>
        • <strong>Saber ser:</strong> Se integraron perspectivas computacionales como la resiliencia frente al error, la motivación intrínseca al descubrir mensajes ocultos y la ética digital en los debates sobre eficiencia y riesgos de los algoritmos. <br><strong>• Pregunta:</strong> ¿Qué aprendiste sobre la importancia de equivocarte y corregir tus errores junto con tus compañeras?`,
        porquePC_bac: 'La actividad convierte el aprendizaje en un proceso lúdico, reflexivo y colaborativo, que no solo enseña lógica y codificación, sino que también impulsa autonomía, pensamiento crítico y compromiso social, consolidando el enfoque tripartita del pensamiento computacional.',
        pRef_Bach: [
          '¿Cómo crees que una computadora ve una imagen?',
          '¿Qué parte se repite en esta secuencia? ¿Cómo lo representarías con números?',
          '¿Qué estrategia usaste para codificar la letra H o M?',
          '¿Qué hiciste cuando te equivocaste al colorear?',
          '¿Cómo te aseguraste de que tu código fuera correcto?',
          '¿Qué aprendiste sobre cómo piensan las computadoras?',
          '¿Cómo te sentiste al descubrir el mensaje oculto?'
        ]
      },
{ 
        id: 4, 
        fecha: '03-Jul', 
        titulo: 'Secuencias Narrativas',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase4.pdf',// 👈 PDF clase 4
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.4.pdf', // 👈 PDF clase 4 bachillerato
        video_url: 'https://www.youtube.com/watch?v=b5AOGN-6CF4', // 👈 ID del video Clase 4
        
        // --- SECCIÓN PRIMARIA ---
        c_pri: 'Secuencias, patrones, codificación visual, estructuras de decisión y repetición.',
        p_pri: 'Depuración, reflexión, trabajo colaborativo, comunicación oral.',
        v_pri: 'Resiliencia, motivación, empatía, valoración del error.',
        art_pri: '• Comprende aspectos básicos en la creación de algoritmos: al representar rutinas y retos visuales, ejercitan la lógica secuencial.\n• Construye programas sencillos aplicando bases del PC: aunque unplugged, las secuencias y cómics simulan estructuras algorítmicas.\n• Valora la utilidad de las estrategias del PC para la solución de problemas: reconocieron que las secuencias y algoritmos ayudan a resolver rutinas y retos.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> La comprensión de qué es una secuencia y cómo se aplica en la programación. <br><strong>• Pregunta:</strong> ¿Por qué es importante que los pasos de una secuencia estén en orden? <br><br>
        • <strong>Saber hacer:</strong> La creación de algoritmos simples mediante pasos ordenados, decisiones y repeticiones. <br><strong>• Pregunta:</strong> ¿Cómo podrías mejorar tu algoritmo para que sea más claro o eficiente? <br><br>
        • <strong>Saber ser:</strong> La empatía, la colaboración y la motivación intrínseca en el trabajo en equipo. <br><strong>• Pregunta:</strong> ¿Qué aprendiste de trabajar con tus compañeras y cómo te sentiste al colaborar?`,
        porquePC_pri: 'La actividad desarrolla el pensamiento computacional porque une lo técnico, lo práctico y lo emocional, logrando que las estudiantes piensen de manera lógica, autónoma y crítica mientras resuelven problemas de forma creativa y colaborativa.',
        pRef_Pri: [
          '¿Qué son las secuencias? ¿Qué crees que significa?', 
          '¿Qué es lo primero que haces al despertar? ¿Y lo segundo? ¿Funcionaría si cambiamos el orden?', 
          '¿Qué aprendiste del cómic de otro grupo?', 
          '¿Qué fue lo más fácil y lo más difícil de esta actividad?', 
          '¿Qué parte te gustó más de la clase?'
        ],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA) ---
        c_bac: 'Secuencias, decisiones, repeticiones, abstracción.',
        p_bac: 'Diseño, depuración, reflexión metacognitiva, comunicación.',
        v_bac: 'Colaboración, empatía, ética digital, motivación.',
        art_bac: '• Aplica procedimientos de secuenciación, condición y repetición.\n• Desarrolla programas basados en sus propios algoritmos.\n• Promueve la conciencia crítica sobre el impacto de los algoritmos.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Comprensión de secuencias, condiciones y repeticiones como conceptos básicos del pensamiento computacional. <br><strong>• Pregunta:</strong> ¿Cómo influye el orden de los pasos en que una secuencia funcione correctamente dentro de un programa? <br><br>
        • <strong>Saber hacer:</strong> Diseño de algoritmos mediante cómics individuales y grupales, trasladando rutinas cotidianas a procesos algorítmicos. <br><strong>• Pregunta:</strong> ¿De qué manera tu cómic representa un algoritmo y cómo podrías mejorar su claridad para que otros lo entiendan? <br><br>
        • <strong>Saber ser:</strong> Colaboración y empatía en el trabajo grupal de los cómics y en los debates sobre el impacto de los algoritmos. <br><strong>• Pregunta:</strong> ¿Qué aprendiste al trabajar con tu grupo y cómo influyó la colaboración en la calidad del algoritmo que construyeron?`,
        porquePC_bac: 'La actividad integra lo técnico, lo práctico y lo socioemocional, permitiendo que las estudiantes piensen de forma lógica, creativa y crítica para resolver problemas, que es la esencia del pensamiento computacional.',
        pRef_Bach: [
          '¿Qué son las secuencias? ¿Qué crees que significa?',
          '¿Qué está haciendo la niña? ¿Cómo harías tú esa secuencia? ¿Qué pasa si cambiamos el orden?',
          '¿Cuál sería la respuesta correcta para que el robot llegue al triángulo?',
          '¿Qué similitudes hay entre tu cómic y un programa de computadora?',
          '¿Qué pasaría si uno de los pasos tuviera un error? ¿Cómo lo corregirías?',
          '¿Qué es lo primero que haces al despertar? ¿Y lo segundo? ¿Funcionaría si cambiamos el orden?',
          '¿Qué fue lo más fácil y lo más difícil de esta actividad? ¿Cómo se sintieron al trabajar en equipo?',
          '¿Cómo podrías usar lo aprendido para resolver un problema real?'
        ]
      },
{ 
        id: 5, 
        fecha: '10-Jul', 
        titulo: 'Tangram Algorítmico',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase5.pdf',// 👈 PDF clase 5
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.5.pdf', // 👈 PDF clase 5 bachillerato
        video_url: 'https://www.youtube.com/watch?v=fSEAiDpvjPw', // 👈 ID del video Clase 5
        
        // --- SECCIÓN PRIMARIA ---
        c_pri: 'Abstracción, secuenciación, reconocimiento de patrones.',
        p_pri: 'Depuración, trabajo colaborativo, comunicación, persistencia.',
        v_pri: 'Motivación intrínseca, resiliencia, empatía.',
        art_pri: '• Aplica conceptos básicos de construcción de algoritmos: mediante la ubicación lógica de piezas geométricas.\n• Crea algoritmos para solución de problemas sencillos: al descomponer figuras complejas en piezas básicas.\n• Valora la utilidad de las estrategias del PC: reconoce el error como parte fundamental del proceso de armado.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Comprender cómo la descomposición de un problema facilita su solución. <br><strong>• Pregunta:</strong> ¿Qué figuras geométricas reconoces en el Tangram? <br><br>
        • <strong>Saber hacer:</strong> Construir soluciones mediante la manipulación de piezas siguiendo una secuencia lógica. <br><strong>• Pregunta:</strong> ¿Cuál fue tu estrategia para armar la figura difícil? <br><br>
        • <strong>Saber ser:</strong> Desarrollar la paciencia y la colaboración al trabajar en equipo. <br><strong>• Pregunta:</strong> ¿Cómo se sintieron al lograr completar el desafío?`,
        porquePC_pri: 'La actividad desarrolla el pensamiento computacional al fomentar la abstracción y la descomposición de problemas, permitiendo a las estudiantes entender que grandes retos se resuelven mediante pequeños pasos lógicos.',
        pRef_Pri: [
          '¿Qué figuras geométricas reconoces en el Tangram?', 
          '¿Cuál fue tu estrategia para armar la figura difícil?', 
          '¿Qué parte te gustó más de la clase?', 
          '¿Cómo te sentiste al lograr completar el desafío?', 
          '¿Qué aprendiste sobre el trabajo en equipo hoy?'
        ],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA) ---
        c_bac: 'Secuenciación, condición, repetición.',
        p_bac: 'Diseño, depuración, comunicación.',
        v_bac: 'Reflexión crítica, resiliencia, ética.',
        art_bac: '• Aplica procedimientos de secuenciación, condición y repetición en la elaboración de programas informáticos.\n• Elabora programas informáticos sencillos a partir de la construcción de algoritmos y desarrolla programas informáticos basados en sus propios algoritmos.\n• Fortalece su habilidad para aportar en la solución de problemas a través de la construcción de programas informáticos.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Reconocimiento y aplicación de aspectos relevantes en la creación de algoritmos. <br><strong>• Pregunta:</strong> ¿Cómo aplicaste la secuenciación, la condición y la repetición al organizar las piezas del Tangram para resolver el problema? <br><br>
        • <strong>Saber hacer:</strong> Realización de estructuras de secuenciación, condición y repetición en la construcción de algoritmos visuales con Tangram. <br><strong>• Pregunta:</strong> ¿Cómo aplicaste la secuenciación, la condición y la repetición al organizar las piezas del Tangram para resolver el problema? <br><br>
        • <strong>Saber ser:</strong> Colaboración, empatía, resiliencia y la motivación intrínseca al enfrentar errores en el armado de figuras. <br><strong>• Pregunta:</strong> ¿Qué hiciste cuando tu figura no coincidía con el modelo y cómo te apoyaste en tu compañera para superar el error?`,
        porquePC_bac: 'La actividad traduce la lógica de la programación a un entorno tangible y lúdico, permitiendo que las estudiantes comprendan cómo los algoritmos se construyen, se corrigen y se aplican, desarrollando así las tres dimensiones del pensamiento computacional de manera integral.',
        pRef_Bach: [
          '¿Cómo crees que una figura puede representarse con números?',
          '¿Qué parte de esta figura se repite? ¿Cómo podrías representarla?',
          '¿Cómo verificaste que tu secuencia de piezas era correcta?',
          '¿Qué estrategia usaste para construir la figura con Tangram?',
          '¿Qué hiciste cuando tu figura no coincidía con el modelo?',
          '¿Qué aprendiste sobre cómo piensan tus compañeras al resolver el Tangram?',
          '¿Cómo te sentiste al descubrir la figura final?',
          '¿Qué aprendiste y cómo te sentiste durante la actividad?'
        ]
      },
{ 
        id: 6, 
        fecha: '14-Ago', 
        titulo: 'Guías Bebras',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase6.pdf',// 👈 PDF clase 6
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.6.pdf', // 👈 PDF clase 6 bachillerato
        video_url: 'https://www.youtube.com/watch?v=-RiQVB_ZIAQ', // 👈 ID del video Clase 6
        
        // --- SECCIÓN PRIMARIA ---
        c_pri: 'secuencias, decisiones, patrones.',
        p_pri: 'planificación, depuración, comunicación.',
        v_pri: 'resiliencia, empatía, motivación.',
        art_pri: '• Comprende aspectos básicos en la creación de algoritmos: al traducir caminos y patrones en secuencias, comprende cómo un algoritmo representa una solución.\n• Crea algoritmos para brindar solución a problemas sencillos: las estudiantes construyeron secuencias paso a paso y corrigieron errores.\n• Valora la utilidad de las estrategias del pensamiento computacional: las estudiantes reconocen que los algoritmos y secuencias ayudan a resolver problemas de forma colaborativa.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> La comprensión de algoritmos básicos a través de retos visuales de las Guías Bebras (frasco de miel, canguro saltarín, abejas voladoras). <br><strong>• Pregunta:</strong> ¿Por qué es importante seguir un orden lógico en los pasos de un algoritmo? <br><br>
        • <strong>Saber hacer:</strong> Creación de algoritmos sencillos mediante la construcción de recorridos, codificación espacial en cuadrículas y registro de secuencias con flechas. <br><strong>• Pregunta:</strong> ¿Qué cambios realizaste para mejorar tu solución? <br><br>
        • <strong>Saber ser:</strong> La colaboración y ayuda entre pares, la resiliencia frente al error y la motivación intrínseca mediante autoevaluación con emojis y cierre reflexivo. <br><strong>• Pregunta:</strong> ¿Qué aprendiste de equivocarte y volver a intentarlo?`,
        porquePC_pri: 'Esta actividad desarrolla el PC porque combina comprensión conceptual, aplicación práctica y formación socioemocional, logrando que las estudiantes piensen de manera lógica, creativa y autónoma al enfrentar problemas.',
        pRef_Pri: [
          '¿Qué camino elegirías para que la miel llegue más rápido al frasco?', 
          '¿Qué pasos seguiste para resolver el reto del canguro saltarín?', 
          '¿Cómo te ayudó tu compañera a corregir el recorrido de la abeja o del canguro?', 
          '¿Cómo te sentiste al resolver un reto que parecía más difícil para tu edad?', 
          '¿Qué parte del proceso te hizo reflexionar más sobre tu forma de pensar?'
        ],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA) ---
        c_bac: 'Secuencias, bucles, condicionales, codificación visual.',
        p_bac: 'Diseño, depuración, planificación, comunicación colaborativa.',
        v_bac: 'Resiliencia, motivación, ética, reflexión crítica.',
        art_bac: '• Refuerza la comprensión de los procedimientos adecuados para el diseño de algoritmos.\n• Elabora programas informáticos sencillos a partir de la construcción de algoritmos.\n• La dimensión socioemocional (resiliencia, motivación, ética) asegura que el aprendizaje no sea solo técnico, sino integral.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Reconocimiento de los conceptos centrales del pensamiento computacional: secuenciación, condición, repetición y codificación visual. <br><strong>• Pregunta:</strong> ¿Cómo puedes representar un recorrido o figura mediante reglas y números para que sea más claro? <br><br>
        • <strong>Saber hacer:</strong> Diseñar algoritmos, depurar errores, planificar secuencias y verificar eficiencia. <br><strong>• Pregunta:</strong> ¿Qué decisiones tomaste para depurar tu algoritmo y cómo verificaste que la solución era eficiente? <br><br>
        • <strong>Saber ser:</strong> Dimensión socioemocional del aprendizaje: resiliencia, motivación intrínseca, ética y reflexión crítica. <br><strong>• Pregunta:</strong> ¿Qué aprendiste de tus errores y cómo te ayudó la colaboración con tus compañeras a seguir adelante?`,
        porquePC_bac: 'La actividad convierte el PC en una experiencia práctica, reflexiva y emocional, donde las estudiantes aprenden a resolver problemas de forma lógica, creativa y colaborativa.',
        pRef_Bach: [
          '¿Qué camino elegirías para que la miel llegue más rápido al frasco?',
          '¿Qué flores están dentro del alcance de la abeja? ¿Cómo lo comprobaste?',
          '¿Cómo verificaste que tu solución en el tablero era correcta?',
          '¿Qué hiciste cuando tu respuesta no coincidía con la solución esperada?',
          '¿Cómo te ayudó tu compañera a corregir el recorrido de la abeja o del canguro?',
          '¿Qué actividad de las Guías Bebras te gustó más y por qué?',
          '¿Qué parte del proceso te hizo reflexionar más sobre tu forma de pensar?',
          '¿Qué mejorarías de tu algoritmo si pudieras rehacerlo?'
        ]
      },
{ 
        id: 7, 
        fecha: '21-Ago', 
        titulo: 'Escape Room',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase7.pdf',// 👈 PDF clase 7
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.7.pdf', // 👈 PDF clase 7 bachillerato
        video_url: 'https://www.youtube.com/watch?v=o-87oZSvrIo', // 👈 ID del video Clase 7
        
        // --- SECCIÓN PRIMARIA ---
        c_pri: 'secuencias, patrones, decisiones simples.',
        p_pri: 'depuración, organización, defensa oral, colaboración.',
        v_pri: 'resiliencia, motivación, empatía, entusiasmo.',
        art_pri: '• Comprensión de estructuras de decisión (qué pasa si cambio el orden). Se ejercita la secuenciación como base para algoritmos.\n• Aplica conceptos básicos del proceso de construcción de algoritmos informáticos, porque las estudiantes no solo ejecutan secuencias, sino que corrigen y validan.\n• La motivación y resiliencia fortalecen la autonomía, preparando a las estudiantes para utilizar algoritmos de manera proactiva y valorar su utilidad en problemas reales.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> La comprensión de los conceptos básicos del pensamiento computacional: secuencias, patrones y decisiones simples. <br><strong>• Pregunta:</strong> ¿Qué pasaría si cambiamos el orden de los pasos en una actividad del Escape Room? <br><br>
        • <strong>Saber hacer:</strong> Crea programas informáticos sencillos para problemas elementales. <br><strong>• Pregunta:</strong> ¿Cómo comprobaste que tu secuencia o estrategia era correcta al resolver la misión y qué pasos seguiste para corregirla cuando te equivocaste? <br><br>
        • <strong>Saber ser:</strong> La dimensión socioemocional del aprendizaje, que en los lineamientos se expresa como valorar la utilidad del pensamiento computacional y trabajar colaborativamente. <br><strong>• Pregunta:</strong> ¿De qué manera tu compañera te ayudó a encontrar la palabra oculta BARCO y cómo te sentiste al lograrlo en equipo?`,
        porquePC_pri: 'La actividad convierte el pensamiento computacional en una experiencia lúdica, reflexiva y colaborativa, que prepara a las estudiantes para pasar de comprender secuencias y decisiones en primaria a construir programas sencillos en grados superiores.',
        pRef_Pri: [
          '¿Qué entiendes por pensamiento computacional y por qué crees que es importante?', 
          '¿Qué hiciste cuando te equivocaste en una misión del Escape Room?', 
          '¿Qué aprendiste sobre los componentes del pensamiento computacional?', 
          '¿Qué parte del Escape Room te gustó más y por qué?', 
          '¿Cómo te sentiste al descubrir la palabra oculta BARCO?'
        ],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA) ---
        c_bac: 'Secuencias, patrones, algoritmos.',
        p_bac: 'Estrategias, depuración, reflexión.',
        v_bac: 'Resiliencia, motivación, colaboración.',
        art_bac: '• Comprender los procedimientos adecuados en el diseño de algoritmos.\n• Desarrolla programas informáticos basados en sus propios algoritmos, las estudiantes verbalizan y ajustan sus pasos como si fueran instrucciones de un programa.\n• Valora el pensamiento computacional como herramienta útil para resolver problemas.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Conceptos básicos del pensamiento computacional: secuencias, patrones, algoritmos y lógica condicional. <br><strong>• Pregunta:</strong> ¿Qué entiendes por pensamiento computacional y por qué crees que es importante? <br><br>
        • <strong>Saber hacer:</strong> Aplicación práctica de secuencias, decisiones y validación de caminos en retos visuales. <br><strong>• Pregunta:</strong> ¿Qué estrategia usaste para resolver la misión del corazón o el juego de saltar? <br><br>
        • <strong>Saber ser:</strong> Dimensión socioemocional del aprendizaje: resiliencia, motivación intrínseca y colaboración. <br><strong>• Pregunta:</strong> ¿Qué hiciste cuando te equivocaste en una misión del Escape Room?`,
        porquePC_bac: 'La actividad convierte los retos del Escape Room en experiencias concretas que integran saber conocer, saber hacer y saber ser, logrando que el pensamiento computacional se desarrolle de forma integral, práctica y significativa.',
        pRef_Bach: [
          '¿Qué entiendes por pensamiento computacional y por qué crees que es importante?',
          '¿Qué pasaría si cambiamos el orden de los pasos en una actividad del Escape Room?',
          '¿Cómo identificarías la letra oculta en cada misión sin perder la secuencia?',
          '¿Qué hiciste cuando te equivocaste en una misión del Escape Room?',
          '¿De qué manera tu compañera te ayudó a encontrar la palabra oculta BARCO?',
          '¿Qué aprendiste sobre los componentes del pensamiento computacional (Wing, 2006)?',
          '¿Qué parte del Escape Room te gustó más y por qué?',
          '¿Cómo te sentiste al descubrir la palabra oculta BARCO?'
        ]
      },
{ 
        id: 8, 
        fecha: '28-Ago', 
        titulo: 'Explorando Scratch Jr',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase8.pdf',// 👈 PDF clase 8
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.8.pdf', // 👈 PDF clase 8 bachillerato
        video_url: 'https://www.youtube.com/watch?v=8lBNndM9Odc', // 👈 ID del video Clase 8
        
        // --- SECCIÓN PRIMARIA ) ---
        c_pri: 'secuencias y decisiones simples, base para algoritmos.', 
        p_pri: 'Depuración, planificación y comunicación.',
        v_pri: 'motivación, empatía y reflexión crítica.',
        art_pri: '• Comprender aspectos básicos en la creación de algoritmos (secuencias simples).\n• Crea algoritmos para brindar solución a problemas sencillos.\n• La reflexión y la motivación intrínseca ayudan a valorar la utilidad del pensamiento computacional en la vida cotidiana.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Comprender aspectos básicos en la creación de algoritmos para dar solución a un problema o necesidad. <br><strong>pregunta:</strong> ¿Qué pasos necesita seguir el personaje para llegar a su objetivo? <br><br>
        • <strong>Saber hacer:</strong> Crear algoritmos sencillos para brindar solución a problemas elementales. <br><strong>Pregunta:</strong> ¿Qué bloques usarías para que el gato avance, salte y gire correctamente? <br><br>
        • <strong>Saber ser:</strong> Valorar la utilidad del pensamiento computacional y trabajar colaborativamente en la solución de problemas. <br><strong>pregunta:</strong> ¿Qué aprendiste al trabajar en pareja y cómo te ayudó tu compañera?`,
        porquePC: 'Esta actividad desarrolla el pensamiento computacional porque combina conceptos (secuencias, decisiones simples), prácticas (planificación, depuración, narrativa) y perspectivas (colaboración, reflexión, motivación), logrando que las estudiantes piensen de manera lógica, creativa y autónoma al enfrentar problemas.',
        pRef_Pri: [
          '¿Conoces Scratch Jr? ¿Para qué crees que sirve?', 
          '¿Qué bloques necesitas para que el gato avance, salte y gire?', 
          '¿Qué pasaría si quitamos un bloque? ¿El personaje haría lo mismo?', 
          '¿Qué parte de tu código fue más difícil? ¿Cómo lo solucionaste?', 
          '¿Qué aprendiste hoy sobre programación?', 
          '¿Qué emociones sentiste al programar y corregir tu código?'
        ],

        // --- SECCIÓN BACHILLERATO (MODIFICADA) ---
        c_bac: 'Secuenciación, condición, repetición, lógica algorítmica.',
        p_bac: 'Depuración, planificación, narrativa computacional, defensa oral.',
        v_bac: 'Colaboración, resiliencia, motivación, reflexión crítica.',
        art_bac: '• Reconoce y aplica aspectos relevantes en la creación de algoritmos: al identificar bloques y sus funciones, comprendieron cómo estructurar soluciones adecuadas.\n• Desarrolla programas informáticos basados en sus propios algoritmos: al depurar y mejorar sus códigos, las estudiantes aplican sus propias estrategias.\n• Valora el pensamiento computacional como herramienta crítica: la reflexión sobre emociones y aprendizajes conecta el PC con la vida cotidiana y el trabajo en equipo.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Reconocimiento y aplicación de aspectos relevantes en la creación de algoritmos. <br><strong>Pregunta:</strong> ¿Qué pasos identificaste en tu programa y cómo sabes que forman un algoritmo correcto? <br><br>
        • <strong>Saber hacer:</strong> Diseñar programas informáticos sencillos basados en sus propios algoritmos. <br><strong>Pregunta:</strong> ¿Cómo construiste tu secuencia para que el personaje cumpliera la acción completa sin errores? <br><br>
        • <strong>Saber ser:</strong> Motivación intrínseca, resiliencia y colaboración en el trabajo en equipo. <br><strong>Pregunta:</strong> ¿Qué aprendiste de tus compañeras al programar juntas y cómo te ayudó a superar las dificultades?`,
        porquePC_bac: 'La actividad convierte el PC en una experiencia integral: une lo técnico con lo socioemocional, fortalece la resolución de problemas y prepara a las estudiantes para enfrentar retos reales con lógica, creatividad y colaboración.',
        pRef_Bach: [
          '¿Conoces Scratch? ¿Para qué crees que sirve?',
          '¿Qué pasa cuando arrastramos un bloque? ¿Qué crees que hará el personaje?',
          '¿Qué diferencias hay entre Scratch Jr y Scratch?',
          '¿Qué pasaría si quitamos un bloque? ¿El personaje haría lo mismo?',
          '¿Qué parte de tu código fue más difícil? ¿Cómo lo solucionaste?',
          '¿Qué aprendiste hoy sobre programación?',
          '¿Qué parte del proceso te hizo reflexionar más sobre tu forma de pensar?',
          '¿Qué emociones sentiste al programar y corregir tu código?'
        ]
      },
{ 
        id: 9, 
        fecha: '04-Sep', 
        titulo: 'Guiar al Robot Humano',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase9.pdf',// 👈 PDF clase 9
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.9.pdf', // 👈 PDF clase 9 bachillerato
        video_url: 'https://www.youtube.com/watch?v=v9ePWzYkNjQ', // 👈 ID del video Clase 9
        
        // --- SECCIÓN PRIMARIA (NO TOCAR) ---
        c_pri: 'secuencias y decisiones',
        p_pri: 'planificación, depuración, colaboración',
        v_pri: 'empatía, resiliencia, reflexión',
        art_pri: '• Comprende aspectos básicos en la creación de algoritmos: al diseñar recorridos y corregir instrucciones\n• Crea algoritmos para problemas sencillos: al planear y depurar secuencias, las estudiantes construyen soluciones básicas.\n• Valora la utilidad del pensamiento computacional: al reflexionar sobre cómo las instrucciones claras ayudan a resolver problemas, las estudiantes reconocen la importancia del PC.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> comprender aspectos básicos en la creación de algoritmos y reconocer su utilidad para resolver problemas. <br><strong>pregunta:</strong> ¿Qué instrucciones necesitas para que tu compañera llegue a la meta? <br><br>
        • <strong>Saber hacer:</strong> crear algoritmos sencillos y aplicar estructuras de decisión y repetición para dar solución a problemas. <br><strong>Pregunta:</strong> ¿Qué ocurre si omites una instrucción? <br><br>
        • <strong>Saber ser:</strong> valorar la utilidad del pensamiento computacional, trabajar colaborativamente y demostrar empatía en la resolución de problemas. <br><strong>pregunta:</strong> ¿Cómo fue trabajar en grupo? ¿Qué aprendiste de tus compañeras?`,
        porquePC: 'Esta actividad ayuda a desarrollar el PC porque convierte la lógica de los algoritmos en una experiencia concreta, colaborativa y reflexiva, permitiendo que las estudiantes comprendan, practiquen y valoren el pensamiento computacional como herramienta para resolver problemas.',
        pRef_Pri: ['¿Alguna vez has jugado a guiar a alguien con los ojos cerrados?', '¿Qué crees que pasará si das una instrucción equivocada al robot?', '¿Qué instrucciones necesitas para que tu compañera llegue a la meta?', '¿Qué ocurre si omites una instrucción?', '¿Qué aprendiste hoy sobre dar instrucciones claras?', '¿Qué emociones sentiste al programar verbalmente y corregir tu código?'],

        // --- SECCIÓN BACHILLERATO (MODIFICADA) ---
        c_bac: 'Secuenciación, condición, repetición.',
        p_bac: 'Planificación, depuración, colaboración.',
        v_bac: 'Resiliencia, reflexión crítica, motivación.',
        art_bac: '• Aplica procedimientos de secuenciación, condición y repetición: directamente ejercitado en la dinámica corporal.\n• Desarrolla programas informáticos basados en sus propios algoritmos: al construir y ajustar secuencias, las estudiantes simulan el proceso de programación.\n• Valora el pensamiento computacional como herramienta crítica: la reflexión sobre emociones y aprendizajes conecta el PC con la vida cotidiana y el trabajo en equipo.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Reconocimiento y aplicación de aspectos relevantes en la creación de algoritmos. <br><strong>Pregunta:</strong> ¿Qué instrucciones necesitas para que tu compañera llegue a la meta y cómo se relacionan con un algoritmo? <br><br>
        • <strong>Saber hacer:</strong> Construcción de secuencias verbales, corrección de trayectorias y depuración de errores. <br><strong>Pregunta:</strong> ¿Qué decisiones tomaste para corregir el recorrido y qué cambios hiciste en tus instrucciones? <br><br>
        • <strong>Saber ser:</strong> La resiliencia frente al error, la motivación intrínseca y la empatía en el trabajo en grupo. <br><strong>Pregunta:</strong> ¿Cómo te sentiste al equivocarte y corregir tus instrucciones, y qué aprendiste trabajando con tu grupo?`,
        porquePC_bac: 'La dinámica convierte la lógica de los algoritmos en una experiencia corporal y colaborativa, lo que favorece la comprensión, la autonomía y la capacidad de resolver problemas, contribuyendo directamente al desarrollo integral del pensamiento computacional.',
        pRef_Bach: [
          '¿Alguna vez has jugado a guiar a alguien con los ojos cerrados?',
          '¿Qué crees que pasará si das una instrucción equivocada al robot?',
          '¿Qué tipo de decisiones se deben tomar para corregir el recorrido?',
          '¿Qué instrucciones necesitas para que tu compañera llegue a la meta?',
          '¿Qué ocurre si omites una instrucción?',
          '¿Qué decisiones tomaste para corregir el recorrido?',
          '¿Qué aprendiste hoy sobre dar instrucciones claras?',
          '¿Cómo fue trabajar en grupo? ¿Qué aprendiste de tus compañeras?',
          '¿Qué emociones sentiste al programar verbalmente y corregir tu código?'
        ]
      },
{ 
        id: 10, 
        fecha: '11-Sep', 
        titulo: 'Interfaz Digital',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase10.pdf',// 👈 PDF clase 10
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.10.pdf', // 👈 PDF clase 10 bachillerato
        video_url: 'https://www.youtube.com/watch?v=V30LKwSjZWA', // 👈 ID del video Clase 10
        
        // --- SECCIÓN PRIMARIA (NO TOCAR) ---
        c_pri: 'secuenciación y lógica básica',
        p_pri: 'depuración, reflexión y colaboración',
        v_pri: 'empatía, motivación y conexión con experiencias propias',
        art_pri: '• Comprende aspectos básicos en la creación de algoritmos. La comprensión inicial de cómo un algoritmo se traduce en una secuencia de bloques.\n• Crea algoritmos para brindar una solución adecuada a los problemas sencillos. La práctica de depuración y ajuste de secuencias permite que las estudiantes creen soluciones narrativas básicas.\n• Valora la utilidad de las estrategias del pensamiento computacional. La reflexión final y la autoevaluación emocional permiten que las estudiantes reconozcan el valor del PC más allá de lo técnico, conectándolo con su vida cotidiana y emociones.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> comprender aspectos básicos en la creación de algoritmos y reconocer su utilidad para resolver problemas. <br><strong>pregunta:</strong> ¿Qué instrucciones necesitas para que tu compañera llegue a la meta? <br><br>
        • <strong>Saber hacer:</strong> crear algoritmos sencillos y aplicar estructuras de decisión y repetición para dar solución a problemas. <br><strong>Pregunta:</strong> ¿Qué ocurre si omites una instrucción? <br><br>
        • <strong>Saber ser:</strong> valorar la utilidad del pensamiento computacional, trabajar colaborativamente y demostrar empatía en la resolución de problemas. <br><strong>pregunta:</strong> ¿Cómo fue trabajar en grupo? ¿Qué aprendiste de tus compañeras?`,
        porquePC: 'La actividad desarrolla el PC porque convierte conceptos abstractos (algoritmos, secuencias, decisiones) en experiencias prácticas, creativas y colaborativas, donde las estudiantes aprenden a pensar de forma lógica, resolver problemas y valorar la tecnología como herramienta para crear soluciones.',
        pRef_Pri: [
          '¿Alguna vez has creado un escenario en un videojuego o imaginado uno propio?', 
          '¿Qué pasaría si eliges un fondo que no coincide con el personaje?', 
          '¿Qué pasos necesitas para que tu personaje aparezca en el escenario y se mueva?', 
          '¿Qué ocurre si olvidas agregar un bloque de movimiento? ¿El personaje avanzaría igual?', 
          '¿Qué parte de tu creación fue más difícil? ¿Cómo lo solucionaste?', 
          '¿Qué te gustó más de tu proyecto?'
        ],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA Y CONTINUA) ---
        c_bac: 'Secuenciación, condición, repetición, lógica algorítmica.',
        p_bac: 'Depuración, planificación, trabajo colaborativo, explicación oral.',
        v_bac: 'Motivación, empatía, resiliencia, reflexión crítica.',
        art_bac: '• Reconoce y aplica aspectos relevantes en algoritmos: al relacionar fondo, personaje y narrativa.\n• Desarrolla programas informáticos basados en sus propios algoritmos: al corregir errores y ajustar secuencias.\n• Valora el pensamiento computacional como herramienta para resolver problemas: al conectar la programación con experiencias propias.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Reconocimiento de la interfaz de Scratch, la identificación de fondos, personajes y bloques, y la comprensión de conceptos como secuenciación, condición y repetición. <br><strong>Pregunta:</strong> ¿Qué pasos necesitas para que tu personaje aparezca en el escenario y se mueva? <br><br>
        • <strong>Saber hacer:</strong> Ejecución de secuencias de bloques, la depuración de errores y la personalización de historias digitales. <br><strong>Pregunta:</strong> ¿Qué parte de tu creación fue más difícil? ¿Cómo lo solucionaste? <br><br>
        • <strong>Saber ser:</strong> La motivación intrínseca, la empatía y la colaboración en equipos de trabajo. <br><strong>Pregunta:</strong> ¿Cómo fue trabajar en grupo para diseñar la interfaz? ¿Qué aprendiste de tus compañeras?`,
        porquePC_bac: 'La actividad convierte el aprendizaje en una experiencia visual, narrativa y colaborativa, que contribuye a que las estudiantes desarrollen pensamiento crítico, creatividad y capacidad para resolver problemas mediante algoritmos, cumpliendo con los lineamientos curriculares y el propósito institucional.',
        pRef_Bach: [
          '¿Alguna vez has creado un escenario en un videojuego o imaginado uno propio?',
          '¿Qué pasaría si eliges un fondo que no coincide con el personaje?',
          '¿Qué pasos necesitas para que tu personaje aparezca en el escenario y se mueva?',
          '¿Qué ocurre si olvidas agregar un bloque de movimiento? ¿El personaje avanzaría igual?',
          '¿Qué actividades haces cada día que se parecen a ordenar pasos en Scratch?',
          '¿Qué instrucción usarías para que tu personaje se detenga o retroceda en la historia?',
          '¿Qué aprendiste hoy sobre crear una interfaz clara en Scratch? ¿Qué te gustó más?'
        ]
      },
{ 
        id: 11, 
        fecha: '18-Sep', 
        titulo: 'Ritmo y Algoritmo',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase11.pdf',// 👈 PDF clase 11
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.11.pdf', // 👈 PDF clase 11 bachillerato
        video_url: 'https://www.youtube.com/watch?v=Q_mzuqeDWYE', // 👈 ID del video Clase 11
        
        // --- SECCIÓN PRIMARIA (NO TOCAR) ---
        c_pri: 'secuencia, algoritmo, de composición y abstracción.',
        p_pri: 'depuración, reflexión y trabajo colaborativo.',
        v_pri: 'motivación, empatía y expresión emocional.',
        art_pri: '• Comprende estructuras básicas de algoritmos (secuencia y decisión implícita en el orden correcto de pasos).\n• Utiliza algoritmos de manera proactiva para proponer soluciones a diferentes problemas.\n• Refuerza la dimensión socioemocional del PC, promoviendo autonomía, resiliencia y trabajo colaborativo.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Comprensión de conceptos básicos del pensamiento computacional como algoritmo, secuencia, de composición y abstracción. <br><strong>pregunta:</strong> ¿Qué pasos de la canción representan un algoritmo y cómo se ordenan para que tengan sentido? <br><br>
        • <strong>Saber hacer:</strong> Representación corporal y musical, la sincronización de gestos con la letra y la depuración de errores en la secuencia. <br><strong>Pregunta:</strong> ¿Cómo harías para que tus gestos acompañen la letra y representen un algoritmo? <br><br>
        • <strong>Saber ser:</strong> La dimensión socioemocional del aprendizaje autónomo y del pensamiento computacional. <br><strong>pregunta:</strong> ¿Cómo te sentiste al trabajar en grupo para cantar y coordinar gestos?`,
        porquePC: 'La actividad convierte el pensamiento computacional en una experiencia lúdica y significativa, donde las niñas comprenden, aplican y valoren los algoritmos como herramientas para organizar ideas, resolver problemas y trabajar de manera autónoma y colaborativa.',
        pRef_Pri: ['¿Alguna vez has cantado una canción que explique un proceso o una idea', '¿Qué pasaría si cantamos los pasos en desorden?', '¿Qué pasos necesitas para que la canción muestre claramente el pensamiento computacional?', '¿Qué ocurre si olvidas un verso que representa un paso? ¿La secuencia se entiende igual?', '¿Qué gesto o instrucción usarías para mostrar que el personaje se detiene o retroceda?', '¿Cómo fue trabajar en grupo para cantar y coordinar gestos? ¿Qué aprendiste de tus compañeras?'],

        // --- SECCIÓN BACHILLERATO (MODIFICADA) ---
        c_bac: 'Algoritmo, secuencia y abstracción.',
        p_bac: 'Depuración, reflexión y la coordinación grupal.',
        v_bac: 'Empatía, motivación y expresión emocional en la construcción colaborativa.',
        art_bac: '• Comprensión de procedimientos adecuados para el diseño de algoritmos, al trabajar secuencias básicas y abstracción.\n• Aplica procedimientos de secuenciación, condición y repetición, ya que la actividad musical simula la lógica de un programa (orden, corrección, repetición de pasos).\n• Refuerza la dimensión socioemocional del plan institucional: las estudiantes comprenden que el PC no es solo técnico, sino también colaborativo y reflexivo.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Reconocimiento de conceptos clave del pensamiento computacional: algoritmo, secuencia, descomposición y abstracción. <br><strong>Pregunta:</strong> ¿Qué conceptos del pensamiento computacional reconociste en la canción y cómo los relacionaste con los pasos de un algoritmo? <br><br>
        • <strong>Saber hacer:</strong> Realización de la Canción, hojas impresas con versos e íconos, gestos corporales y dinámicas colaborativas en tríos. <br><strong>Pregunta:</strong> ¿De qué manera los gestos, las hojas impresas y la dinámica grupal te ayudaron a representar la secuencia de un proceso? <br><br>
        • <strong>Saber ser:</strong> La empatía, la motivación y la colaboración mediante el trabajo en tríos y la defensa oral de las representaciones musicales. <br><strong>Pregunta:</strong> ¿Cómo influyó el trabajo en equipo y la defensa oral en tu motivación y en la forma de colaborar con tus compañeras?`,
        porquePC_bac: 'Esta actividad convierte el PC en una experiencia vivencial y accesible, ayudando a que las estudiantes lo comprendan, lo practiquen y lo valoren como herramienta para pensar, crear y resolver problemas.',
        pRef_Bach: [
          '¿Alguna vez has cantado una canción que explique un proceso o una idea?',
          '¿Qué pasaría si cantamos los pasos en desorden?',
          '¿Qué ocurre si olvidas un verso que representa un paso? ¿La secuencia se entiende igual?',
          '¿Cómo harías para que los gestos acompañen la letra y representen un algoritmo?',
          '¿Qué parte de la canción fue más difícil de representar? ¿Cómo lo solucionaste?',
          '¿Cómo fue trabajar en grupo para cantar y coordinar gestos? ¿Qué aprendiste de tus compañeras?',
          '¿Qué aprendiste hoy sobre representar procesos con música y gestos?'
        ]
      },
{ 
        id: 12, 
        fecha: '25-Sep', 
        titulo: 'Stop del PC',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase12.pdf',// 👈 PDF clase 12
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.12.pdf', // 👈 PDF clase 12 bachillerato
        video_url: 'https://www.youtube.com/watch?v=4viWOgtpwn4', // 👈 ID del video Clase 12
        
        // --- SECCIÓN PRIMARIA (NO TOCAR) ---
        c_pri: 'secuenciación, bugs, solución.',
        p_pri: 'depuración, reflexión, trabajo colaborativo.',
        v_pri: 'empatía, motivación, expresión emocional.',
        art_pri: '• Comprende aspectos básicos en la creación de algoritmos: al organizar pasos y relacionarlos con soluciones, las estudiantes empiezan a construir la lógica algorítmica.\n• Construye programas informáticos sencillos aplicando bases del PC: aunque aún no se usan lenguajes de programación, la práctica de depuración y secuenciación.\n• Valora la utilidad de las estrategias del pensamiento computacional para la solución de problemas: al reflexionar sobre el juego y reconocer la importancia de ordenar pasos, las estudiantes desarrollan conciencia crítica sobre el PC.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Comprenden aspectos básicos en la creación de algoritmos al organizar pasos lógicos y relacionarlos con soluciones mediante el juego "Stop", permitiendo reconocer la importancia del orden secuencial y el impacto de los errores en la resolución de problemas sencillos. <br><strong>pregunta:</strong> ¿Qué ocurre si olvidas escribir un paso en la columna de solución? ¿La secuencia se entiende igual? <br><br>
        • <strong>Saber hacer:</strong> Construcción de secuencias lógicas y depuración de errores mediante el juego "Stop", donde las estudiantes organizaron pasos, corrigieron inconsistencias en binas y propusieron soluciones creativas. <br><strong>Pregunta:</strong> ¿Qué pasos necesitas para que la fila del Stop muestre claramente la solución al problema? <br><br>
        • <strong>Saber ser:</strong> Fomento de la motivación, la empatía y la autorregulación emocional mediante el trabajo en equipo, donde las estudiantes valoraron la utilidad del pensamiento computacional al superar dificultades de manera proactiva. <br><strong>pregunta:</strong> ¿Cómo fue trabajar en binas para completar el Stop? ¿Qué aprendiste de tu compañera?`,
        porquePC: 'Esta actividad desarrolla el pensamiento computacional porque convierte la lógica algorítmica en una experiencia lúdica, colaborativa y significativa, que conecta lo técnico con lo socioemocional y prepara a las estudiantes para construir programas y soluciones más complejas en el futuro.',
        pRef_Pri: ['¿Alguna vez has cantado una canción que explique un proceso o una idea', '¿Qué pasaría si cantamos los pasos en desorden?', '¿Qué pasos necesitas para que la canción muestre claramente el pensamiento computacional?', '¿Qué ocurre si olvidas un verso que representa un paso? ¿La secuencia se entiende igual?', '¿Qué gesto o instrucción usarías para mostrar que el personaje se detiene o retrocede?', '¿Cómo fue trabajar en grupo para cantar y coordinar gestos? ¿Qué aprendiste de tus compañeras?'],

        // --- SECCIÓN BACHILLERATO (MODIFICADA) ---
        c_bac: 'Secuenciación, condición, repetición, bugs, relación problema–solución.',
        p_bac: 'Depuración, trabajo colaborativo, creatividad, defensa oral.',
        v_bac: 'Empatía, resiliencia, motivación, reflexión crítica.',
        art_bac: '• Reconoce y aplica aspectos relevantes en algoritmos: las categorías del Stop representan los elementos básicos de un algoritmo.\n• Desarrolla programas informáticos basados en sus propios algoritmos: al depurar y reorganizar pasos, las estudiantes simulan el proceso de programación.\n• Valorar el pensamiento computacional como herramienta crítica: se fomenta conciencia de que los algoritmos no son solo técnicos, sino sociales y emocionales.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Identificación de categorías del juego Stop (problema, pasos, error, solución) y la comprensión de cómo un error altera la secuencia. <br><strong>Pregunta:</strong> ¿Qué ocurre si olvidas escribir un paso en la columna de solución? ¿La secuencia se entiende igual? <br><br>
        • <strong>Saber hacer:</strong> Aplicación de secuenciación, condición y repetición en la dinámica del Stop, además de la depuración de errores. <br><strong>Pregunta:</strong> ¿Cómo harías para que los ejemplos en el Stop representen un algoritmo paso a paso? <br><br>
        • <strong>Saber ser:</strong> Dimensión socioemocional del aprendizaje, con énfasis en motivación, resiliencia y empatía. <br><strong>Pregunta:</strong> ¿Cómo fue trabajar en binas para completar el Stop? ¿Qué aprendiste de tu compañera?`,
        porquePC_bac: 'Esta actividad convierte el pensamiento computacional en una experiencia lúdica, reflexiva y colaborativa, que prepara a las estudiantes para diseñar algoritmos y programas informáticos de manera más consciente y significativa.',
        pRef_Bach: [
          '¿Alguna vez has jugado al Stop con tus amigas o en clase?',
          '¿Qué pasaría si escribimos los pasos en desorden dentro del Stop?',
          '¿Qué pasos necesitas para que la fila del Stop muestre claramente la solución al problema?',
          '¿Qué ocurre si olvidas escribir un paso en la columna de solución? ¿La secuencia se entiende igual?',
          '¿Tu Stop tuvo pasos como un programa? ¿Cuál fue el primero y cuál el último?',
          '¿Qué parte del Stop fue más difícil de completar? ¿Cómo lo solucionaste?',
          '¿Qué aprendiste hoy sobre representar procesos con el juego del Stop? ¿Qué te gustó más?',
          '¿Cómo fue trabajar en binas para completar el Stop? ¿Qué aprendiste de tu compañera?'
        ]
      },
{ 
        id: 13, 
        fecha: '02-Oct', 
        titulo: 'Armado Robótico',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase13.pdf',// 👈 PDF clase 13
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.13.pdf', // 👈 PDF clase 13 bachillerato
        video_url: 'https://www.youtube.com/watch?v=Li6DipJ-1U4', // 👈 ID del video Clase 13
        
        // --- SECCIÓN PRIMARIA (NO TOCAR) ---
        c_pri: 'Introducción al algoritmo y secuencias básicas mediante el recognition de componentes del robot y la comprensión de la relación energía–movimiento.',
        p_pri: 'Depuración, colaboración y aplicación de pasos en actividades lúdicas como el armado en binas, la corrección de errores y la representación gráfica de las conexiones.',
        v_pri: 'Reflexión emocional y social sobre el aprendizaje, resiliencia frente a fallos, motivación intrínseca al ver el robot funcionar y valoración del esfuerzo compartido en el trabajo colaborativo.',
        art_pri: '• Aplica conceptos básicos del proceso de construcción de algoritmos informáticos. Aunque aún no se usan estructuras de decisión/repetición, se trabaja la secuenciación básica como fundamento.\n• Crea algoritmos para brindar solución a problemas sencillos, porque las estudiantes debieron planificar, ejecutar y corregir secuencias.\n• Valora la utilidad de las estrategias del pensamiento computacional para la solución de problemas. Reconociendo que el pensamiento secuencial y la depuración son útiles no solo en robótica, sino en su vida diaria.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Comprensión de aspectos básicos en la creación de algoritmos, traducidos en la secuenciación física del armado del robot. <br><strong>pregunta:</strong> ¿Qué pasos necesitas seguir para que el robot se mueva correctamente y qué ocurre si cambias el orden de las conexiones?” <br><br>
        • <strong>Saber hacer:</strong> Creación de algoritmos para resolver problemas sencillos, representados en el paso a paso del armado y la depuración del robot. <br><strong>Pregunta:</strong> ¿Cómo corregirías un error en el armado del robot para que funcione y qué nuevas soluciones propondrías? <br><br>
        • <strong>Saber ser:</strong> Valoración del pensamiento computacional como herramienta para resolver problemas y la importancia de la colaboración. <br><strong>pregunta:</strong> ¿Qué aprendiste de trabajar con tu compañera en el armado del robot y cómo te ayudó la colaboración a superar los fallos?`,
        porquePC: 'Esta actividad ayuda a desarrollar el pensamiento computacional porque convierte conceptos abstractos en experiencias tangibles, enseña a pensar en secuencias, depurar, reflexionar y colaborar, preparando a las estudiantes para crear y aplicar algoritmos en problemas cada vez más complejos.',
        pRef_Pri: ['“¿Alguna vez has armado un robot sencillo o jugado con motores y pilas?”', '“¿Qué pasaría si conectamos los cables en desorden dentro del protoboard?”', '“¿Qué pasos necesitas para que el robot se mueva con claridad y autonomía?”', '“¿Qué ocurre si olvidas conectar una pila o un motor?”', '¿Qué parte del armado fue más difícil de completar? ¿Cómo lo solucionaste?', '“¿Cómo fue trabajar en binas para armar el robot? ¿Qué aprendiste de tu compañera?”'],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA) ---
        c_bac: 'Secuenciación física, lógica de conexiones, energía - movimiento.',
        p_bac: 'Depuración, trabajo colaborativo, planificación y registro.',
        v_bac: 'Reflexión crítica, motivación, empatía, innovación.',
        art_bac: '• Comprender energía y movimiento prepara para “comprender procedimientos adecuados para el diseño de algoritmos”.\n• Trabajo colaborativo y reflexión crítica fortalecen la habilidad de “aportar en la solución de problemas a través de programas informáticos”.\n• La reflexión crítica e innovación en diseño vinculan la robótica con la creación de programas informáticos propios.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Las estudiantes identificaron y explicaron los componentes físicos del robot (protoboard, motores, pilas, cables). <br><strong>Pregunta:</strong> ¿Qué ocurre si olvidas conectar una pila o un motor? ¿El robot funcionaría igual? <br><br>
        • <strong>Saber hacer:</strong> El armado colaborativo del robot en binas, la depuración de errores técnicos y el registro de secuencias en cuaderno. <br><strong>Pregunta:</strong> ¿Qué pasos necesitas para que el robot se mueva con claridad y autonomía? <br><br>
        • <strong>Saber ser:</strong> La reflexión crítica sobre el diseño del robot, la autoevaluación emocional y el trabajo colaborativo en binas. <br><strong>Pregunta:</strong> ¿Cómo fue trabajar en binas para armar el robot? ¿Qué aprendiste de tu compañera?`,
        porquePC_bac: 'La actividad convierte el aprendizaje en un proceso activo, reflexivo y colaborativo, donde el PC se desarrolla de forma completa: en conceptos, en prácticas y en perspectivas.',
        pRef_Bach: [
          '¿Alguna vez has armado un robot sencillo o jugado con motores y pilas?',
          '¿Qué pasaría si conectamos los cables en desorden dentro del protoboard?',
          '¿Qué pasos necesitas para que el robot se mueva con claridad y autonomía?',
          '¿Qué ocurre si olvidas conectar una pila o un motor? ¿El robot funcionaría igual?',
          '¿Tu robot tuvo pasos como un programa? ¿Cuál fue el primero y cuál el último?',
          '¿Qué parte del armado fue más difícil de completar? ¿Cómo lo solucionaste?',
          '¿Qué actividades cotidianas se parecen a ordenar y depurar conexiones en el robot?',
          '¿Qué aprendiste hoy sobre representar procesos con el robot? ¿Qué te gustó más?',
          '¿Cómo fue trabajar en binas para armar el robot? ¿Qué aprendiste de tu compañera?'
        ]
      },
{ 
        id: 14, 
        fecha: '09-Oct', 
        titulo: 'Algoritmos en Plastilina',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase14.pdf',// 👈 PDF clase 14
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.14.pdf', // 👈 PDF clase 14 bachillerato
        video_url: 'https://www.youtube.com/watch?v=ibYB7Ex6Vq4', // 👈 ID del video Clase 14
        
        // --- SECCIÓN PRIMARIA (NO TOCAR) ---
        c_pri: 'Secuenciación, abstracción, de composición básica.',
        p_pri: 'Escritura de pasos, depuración, trabajo colaborativo.',
        v_pri: 'Reflexión crítica, empatía, motivación, valoración del PC.',
        art_pri: '• Identificación de partes esenciales de la figura y su relación con instrucciones lógicas.\n• Escritura del procedimiento en el cuaderno como si fuera un algoritmo.\n• Expresión emocional sobre lo aprendido y valoración del trabajo en equipo.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Comprender aspectos básicos en la creación de algoritmos, reconocer la importancia de las estructuras de decisión y repetición, y entender cómo los algoritmos sirven para resolver problemas. <br><strong>pregunta:</strong> ¿Cómo se relaciona la secuencia de pasos que hiciste con la idea de un algoritmo? <br><br>
        • <strong>Saber hacer:</strong> Crear algoritmos sencillos para dar solución a problemas elementales, estructurar programas básicos aplicando pensamiento computacional. <br><strong>Pregunta:</strong> ¿Qué pasos organizaste para que tu figura se mantuviera coherente y estable? <br><br>
        • <strong>Saber ser:</strong> Valorar la utilidad de las estrategias del pensamiento computacional, usar algoritmos de manera proactiva, trabajar colaborativamente y con empatía. <br><strong>pregunta:</strong> ¿Qué aprendiste de trabajar con tu compañera en la construcción de la figura?`,
        porquePC: 'La actividad convierte el pensamiento computacional en una experiencia tangible, creativa y reflexiva, que prepara a las estudiantes para pasar de la secuenciación básica a la construcción de algoritmos y programas sencillos, alineándose con los lineamientos curriculares.',
        pRef_Pri: ['¿Alguna vez has creado una figura con plastilina para representar una idea o concepto?', '¿Qué pasaría si mezclamos las piezas sin orden ni secuencia?', '¿Qué pasos necesitas para que tu figura tenga coherencia y se mantenga estable?', '¿Qué ocurre si olvidas incluir una parte esencial?', '¿Tu figura tuvo pasos como un programa? ¿Cuál fue el primero y cuál el último?', '¿Qué aprendiste hoy sobre representar procesos con plastilina?'],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA) ---
        c_bac: 'Secuencia, condición, abstracción.',
        p_bac: 'Escritura, depuración, eficiencia.',
        v_bac: 'Reflexión crítica, conexión con problemas reales, trabajo colaborativo.',
        art_bac: '• La representación tangible de secuencia, condición y repetición prepara a las estudiantes para elaborar programas informáticos sencillos.\n• Escribir y depurar algoritmos fortalece la habilidad de desarrollar programas informáticos basados en sus propios algoritmos.\n• Debate sobre la relación entre diseño físico y lógica algorítmica.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Comprensión de los procedimientos adecuados para el diseño de algoritmos, al guiar a las estudiantes con preguntas reflexivas sobre secuencia, condición y repetición. <br><strong>Pregunta:</strong> ¿Qué pasos necesitas para que tu figura tenga coherencia y se mantenga estable? <br><br>
        • <strong>Saber hacer:</strong> Elaboración de estructuras de secuenciación, condición y repetición en la construcción de figuras y en la escritura de algoritmos en el cuaderno. <br><strong>Pregunta:</strong> ¿Qué parte de tu figura representa una decisión? ¿Cómo lo justificas? <br><br>
        • <strong>Saber ser:</strong> Reflexión crítica y la autoevaluación emocional, al pedirles que analizaran sus decisiones, debatieran sobre la eficiencia de sus diseños y conectaran la actividad con problemas reales. <br><strong>Pregunta:</strong> ¿Qué decisiones de diseño mejorarían la eficiencia de tu figura?`,
        porquePC_bac: 'Esta actividad convierte el PC en una experiencia significativa: une lo técnico con lo creativo y lo socioemocional, preparando a las estudiantes para construir y comprender algoritmos y, más adelante, programas informáticos reales.',
        pRef_Bach: [
          '¿Alguna vez has creado una figura con plastilina para representar una idea o concepto?',
          '¿Qué pasaría si mezclamos las piezas sin orden ni secuencia?',
          '¿Qué pasos necesitas para que tu figura tenga coherencia y se mantenga estable?',
          '¿Qué ocurre si olvidas incluir una parte esencial?',
          '¿Cómo harías para que tu construcción represente un algoritmo paso a paso?',
          '¿Cómo se relaciona tu diseño con un algoritmo informático real?',
          '¿Tu figura tuvo pasos como un programa? ¿Cuál fue el primero y cuál el último?',
          '¿Qué aprendiste hoy sobre representar procesos con plastilina?',
          '¿Qué te gustó más de tu proyecto?',
          '¿Qué decisiones volverías a tomar igual y cuáles cambiarías en un segundo intento?'
        ]
      },
{ 
        id: 15, 
        fecha: '16-Oct', 
        titulo: 'Debate Ético',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase15.pdf',// 👈 PDF clase 15
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.15.pdf', // 👈 PDF clase 15 bachillerato
        video_url: 'https://www.youtube.com/watch?v=bRLrLfTP4ys', // 👈 ID del video Clase 15
        
        // --- SECCIÓN PRIMARIA (NO TOCAR) ---
        c_pri: 'secuenciación, lógica, abstracción.',
        p_pri: 'depuración, reformulación, trabajo colaborativo.',
        v_pri: 'reflexión crítica, empatía, motivación intrínseca.',
        art_pri: '• Comprende aspectos básicos en la creación de algoritmos: al organizar ideas en orden lógico, las estudiantes practican la abstracción y la de composición.\n• Construye programas informáticos sencillos aplicando bases del PC: aunque no se programó aún, la práctica de depuración y ajuste prepara para estructurar programas simples.\n• Promueve autonomía y colaboración: se articula con el plan institucional al fomentar trabajo en equipo y regulación emocional como parte del aprendizaje computacional.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> comprensión de aspectos básicos de los algoritmos, como la secuencia y la lógica. <br><strong>pregunta:</strong> ¿Qué pasos necesitas seguir para que tu argumento sea claro y coherente, como un algoritmo? <br><br>
        • <strong>Saber hacer:</strong> creación de secuencias lógicas y la depuración de errores en la construcción de argumentos. <br><strong>Pregunta:</strong> ¿Qué ocurre si olvidas incluir una idea esencial en tu argumento y cómo lo corregirías? <br><br>
        • <strong>Saber ser:</strong> Valoración del trabajo colaborativo, la empatía y la autorregulación emocional durante el debate. <br><strong>pregunta:</strong> ¿Cómo fue trabajar en binas para construir tu postura y qué aprendiste de tu compañera?`,
        porquePC: 'La actividad convierte el pensamiento computacional en una experiencia tangible, creativa y reflexiva, que permite a las estudiantes comprenderlo y aplicarlo de manera significativa. Al trabajar la secuenciación básica mediante argumentos y depuración de errores, se les prepara para avanzar hacia la construcción de algoritmos y programas sencillos, en coherencia con los lineamientos curriculares establecidos.',
        pRef_Pri: ['¿Alguna vez has participado en un debate para defender una idea?', '¿Qué pasaría si en un debate presentamos argumentos sin orden ni coherencia?', '¿Qué pasos necesitas para que tu argumento sea claro y coherente?', '¿Tu participación en el debate tuvo pasos como un programa? ¿Cuál fue el primero y cuál el último?', '¿Qué aprendiste hoy sobre representar procesos mediante argumentos?', '¿Qué te gustó más de tu participación en el debate?'],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA) ---
        c_bac: 'Secuencia, condición, depuración.',
        p_bac: 'Construcción, depuración, metacognición.',
        v_bac: 'Colaboración, empatía, regulación emocional.',
        art_bac: '• Prepara a las estudiantes para elaborar programas informáticos sencillos al ejercitar la lógica secuencial y condicional en un contexto oral antes de trasladarlo a código.\n• Aporta en la solución de problemas mediante la construcción y ajuste de algoritmos.\n• Valoración del trabajo colaborativo y la empatía.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Comprensión de conceptos computacionales como secuencia, condición y depuración. <br><strong>Pregunta:</strong> ¿Cómo harías para que tu intervención en el debate represente un algoritmo paso a paso? <br><br>
        • <strong>Saber hacer:</strong> Construcción de argumentos, depuración de errores y reformular posturas en binas o grupos. <br><strong>Pregunta:</strong> ¿Qué pasos necesitas para que tu argumento sea claro y coherente durante el debate? <br><br>
        • <strong>Saber ser:</strong> La dimensión socioemocional del aprendizaje, con roles simbólicos y reflexión final sobre el trabajo en equipo. <br><strong>Pregunta:</strong> ¿Cómo fue trabajar en binas o grupos durante el debate y qué aprendiste de tu compañera o compañero?`,
        porquePC_bac: 'La actividad convierte el debate en una simulación de programación: pensar, estructurar, corregir y compartir soluciones. Así, se favorece la lógica, la creatividad y la capacidad de resolver problemas, que son la base del pensamiento computacional.',
        pRef_Bach: [
          '¿Alguna vez has participado en un debate para defender una idea?',
          '¿Qué pasaría si en un debate presentamos argumentos sin orden ni coherencia?',
          '¿Qué pasos necesitas para que tu argumento sea claro y coherente durante el debate?',
          '¿Qué ocurre si olvidas incluir una idea esencial en tu argumento? ¿El resultado tendría el mismo sentido?',
          '¿Tu participación en el debate tuvo pasos como un programa? ¿Cuál fue el primero y cuál el último?',
          '¿Qué parte del debate fue más difícil de completar? ¿Cómo lo solucionaste?',
          '¿Qué actividades cotidianas se parecen a ordenar y depurar ideas en un debate?',
          '¿Qué aprendiste hoy sobre representar procesos mediante argumentos en el debate? ¿Qué te gustó más?',
          '¿Cómo fue trabajar en binas o grupos durante el debate? ¿Qué aprendiste de tu compañera o compañero?'
        ]
      },
{ 
        id: 16, 
        fecha: '23-Oct', 
        titulo: 'Intro a Micro:bit',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase16.pdf',// 👈 PDF clase 16
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.16.pdf', // 👈 PDF clase 16 bachillerato
        video_url: 'https://www.youtube.com/watch?v=PIilTo1e22s', // 👈 ID del video Clase 16
        
        // --- SECCIÓN PRIMARIA (NO TOCAR) ---
        c_pri: 'secuenciación, lógica básica, reconocimiento de bloques.',
        p_pri: 'programación colaborativa, depuración, exploración autónoma.',
        v_pri: 'reflexión crítica, valoración del equipo, motivación intrínseca.',
        art_pri: '• Comprender aspectos básicos en la creación de algoritmos. Se fortalece la capacidad de estructurar programas informáticos sencillos aplicando las bases del PC.\n• Crean programas sencillos para dar solución a problemas elementales, aplicando conceptos básicos del proceso de construcción de algoritmos.\n• Reflexión y la conexión con experiencias previas fortalecen la conciencia crítica y socioemocional.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> comprender aspectos básicos en la creación de algoritmos y reconocer su importancia para resolver problemas. <br><strong>pregunta:</strong> ¿Alguna vez has usado una aplicación que funcione paso a paso? <br><br>
        • <strong>Saber hacer:</strong> crear algoritmos sencillos, aplicar secuencias, decisiones y repeticiones, y utilizar la tecnología para proponer soluciones. <br><strong>Pregunta:</strong> ¿Qué pasos necesitas para que tu programa sea claro? <br><br>
        • <strong>Saber ser:</strong> valorar la utilidad del pensamiento computacional, trabajar colaborativamente y demostrar empatía frente a problemas del entorno. <br><strong>pregunta:</strong> ¿Qué te gustó más de tu proyecto?`,
        porquePC: 'Esta actividad contribuye al desarrollo del PC porque integra comprensión conceptual, aplicación práctica y reflexión socioemocional, logrando que las estudiantes no solo aprendan a programar, sino que también piensen de manera lógica, crítica y autónoma para resolver problemas.',
        pRef_Pri: ['¿Alguna vez has usado una aplicación o juego que funcione con instrucciones paso a paso?', '¿Qué pasaría si en MakeCode organizamos los bloques sin orden ni coherencia?', '¿Qué pasos necesitas para que tu programa sea claro y funcione correctamente?', '¿Qué ocurre si olvidas un bloque esencial?', '¿Tu programa tuvo pasos como una historia? ¿Cuál fue el primero y cuál el último?', '¿Qué te gustó más de tu proyecto en MakeCode?'],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA) ---
        c_bac: 'Secuenciación, condición, repetición, diseño algorítmico.',
        p_bac: 'Construcción, depuración, metacognición.',
        v_bac: 'Reflexión crítica, empatía, conexión con problemas reales.',
        art_bac: '• Comprende los procedimientos adecuados para el diseño de algoritmos y la creación de programas informáticos.\n• Desarrolla programas informáticos basados en sus propios algoritmos, fortaleciendo su habilidad para aportar en la solución de problemas.\n• Conecta el diseño de algoritmos con necesidades reales, cumpliendo la expectativa de aplicar conocimientos en contextos prácticos.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Comprensión de la interfaz de MakeCode y los procedimientos básicos para el diseño de algoritmos. <br><strong>Pregunta:</strong> ¿Qué funciones básicas identificas en la interfaz de MakeCode y cómo ayudan a construir un algoritmo? <br><br>
        • <strong>Saber hacer:</strong> Aplicación práctica de estructuras algorítmicas en proyectos sencillos. <br><strong>Pregunta:</strong> ¿Qué pasos organizaste para que tu proyecto en Micro:bit funcione correctamente y represente un algoritmo sencillo? <br><br>
        • <strong>Saber ser:</strong> Dimensión socioemocional y reflexiva del aprendizaje. <br><strong>Pregunta:</strong> ¿Cómo te sentiste al trabajar en binas y qué aprendiste de tu compañera durante la programación?`,
        porquePC_bac: 'La actividad no solo enseña a programar, sino que construye la capacidad de pensar de forma lógica, crítica y creativa, aplicando el enfoque tripartita del PC para que las estudiantes puedan enfrentar problemas reales con autonomía y colaboración.',
        pRef_Bach: [
          '¿Alguna vez has usado una aplicación o juego que funcione con instrucciones paso a paso?',
          '¿Qué pasaría si en MakeCode organizamos los bloques sin orden ni coherencia?',
          '¿Qué pasos necesitas para que tu programa en Micro:bit sea claro y funcione correctamente?',
          '¿Cómo harías para que tu proyecto en MakeCode represente un algoritmo paso a paso?',
          '¿Tu programa en Micro:bit tuvo pasos como una historia? ¿Cuál fue el primero y cuál el último?',
          '¿Qué actividades cotidianas se parecen a ordenar y depurar bloques en MakeCode?',
          '¿Qué aprendiste hoy sobre representar procesos mediante bloques en MakeCode? ¿Qué te gustó más?',
          '¿Cómo fue trabajar en binas o grupos durante la programación? ¿Qué aprendiste de tu compañera o compañero?'
        ]
      },
{ 
        id: 17, 
        fecha: '30-Oct', 
        titulo: 'Variables y Sensores',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase17.pdf',// 👈 PDF clase 17
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.17.pdf', // 👈 PDF clase 17 bachillerato
        video_url: 'https://www.youtube.com/watch?v=bQSKc9gZEgc', // 👈 ID del video Clase 17
        
        // --- SECCIÓN PRIMARIA (NO TOCAR) ---
        c_pri: 'Identificación de bloques, secuenciación lógica, comprensión de instrucciones.',
        p_pri: 'Programación colaborativa, depuración de errores, exploración autónoma.',
        v_pri: 'Reflexión crítica, motivación, empatía y valoración del trabajo en equipo.',
        art_pri: '• Comprender aspectos básicos en la creación de algoritmos.\n• Crear programas sencillos para dar solución a problemas elementales.\n• Reflexión y la conexión con experiencias previas fortalecen el Saber Ser.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> comprender aspectos básicos en la creación de algoritmos y reconocer su importancia para resolver problemas. <br><strong>pregunta:</strong> ¿Qué pasaría si en MakeCode organizamos los bloques sin orden? <br><br>
        • <strong>Saber hacer:</strong> crear algoritmos sencillos, aplicar secuencias, decisiones y repeticiones, y utilizar la tecnología para proponer soluciones. <br><strong>Pregunta:</strong> ¿Como representarías una tarea cotidiana en MakeCode? <br><br>
        • <strong>Saber ser:</strong> valorar la utilidad del pensamiento computacional, trabajar colaborativamente y demostrar empatía frente a problemas del entorno. <br><strong>pregunta:</strong> ¿Cómo te sentiste al programar por bloques en MakeCode?`,
        porquePC: 'Esta actividad contribuye al desarrollo del pensamiento computacional porque integra la comprensión conceptual (reconocimiento de bloques esenciales en MakeCode y organización de secuencias lógicas), la aplicación práctica (programación en binas, depuración de errores en el simulador de Micro:bit y defensa oral de proyectos) y la reflexión socioemocional.',
        pRef_Pri: ['¿Alguna vez has seguido instrucciones paso a paso para armar un juguete o receta?', '¿Cómo harías para que tu proyecto represente un algoritmo paso a paso en MakeCode?', '¿Qué actividades cotidianas se parecen a ordenar y depurar bloques en MakeCode?', '¿Tu programa en Micro:bit se parece a una historia? ¿Cuál fue el primer paso y cuál el último?', '¿Qué parte del proyecto fue más difícil de completar? ¿Cómo lo solucionaste?', '¿Qué aprendiste hoy sobre representar procesos con bloques en MakeCode?'],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA) ---
        c_bac: 'Bloques y secuencias',
        p_bac: 'Programación, depuración, trabajo en binas',
        v_bac: 'Reflexión crítica, colaboración, motivación',
        art_bac: '• Reconoce y aplica aspectos relevantes en la creación de algoritmos: identificaron bloques esenciales y comprendieron su función dentro de la secuencia.\n• Desarrolla programas informáticos basados en sus propios algoritmos: las estudiantes ajustaron y depuraron sus proyectos, mostrando comprensión práctica.\n• Fortalece su habilidad para aportar en la solución de problemas: al reflexionar sobre cómo sus proyectos se relacionan con situaciones reales.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> reconocimiento de bloques básicos en MakeCode (“mostrar icono”, “pausa”, “botón A/B”) y la comprensión de cómo cada bloque representa una instrucción dentro de un algoritmo. <br><strong>Pregunta:</strong> ¿Qué función cumple cada bloque en tu proyecto y cómo afecta el orden en la secuencia? <br><br>
        • <strong>Saber hacer:</strong> programaron en binas, construyeron secuencias lógicas y aplicaron condiciones simples, además de depurar errores en sus proyectos. <br><strong>Pregunta:</strong> ¿Qué pasos seguiste para organizar tu programa y cómo corregiste los errores que encontraste? <br><br>
        • <strong>Saber ser:</strong> reflexión crítica y emocional sobre el proceso de programación, mediante debates y preguntas guiadas (“¿qué parte fue más difícil?”, “¿cómo lo solucionaste?”). <br><strong>Pregunta:</strong> ¿Qué aprendiste de la experiencia de programar y cómo te sentiste al enfrentar y superar las dificultades?`,
        porquePC_bac: 'Esta actividad desarrolla el pensamiento computacional porque combina conceptos (secuencias, condiciones, algoritmos), prácticas (programación, depuración, trabajo en equipo) y perspectivas (reflexión, motivación, colaboración), logrando que las estudiantes piensen de forma lógica, creativa y crítica para resolver problemas.',
        pRef_Bach: [
          '¿Alguna vez has seguido instrucciones paso a paso para armar un juguete o receta?',
          '¿Qué crees que pasaría si en MakeCode organizamos los bloques sin orden?',
          '¿Qué pasos necesitas para que tu programa en Micro:bit sea claro y funcione bien?',
          '¿Qué ocurre si olvidas incluir un bloque esencial en tu proyecto?',
          '¿Tu programa en Micro:bit se parece a una historia? ¿Cuál fue el primer paso y cuál el último?',
          '¿Qué actividades cotidianas se parecen a ordenar y depurar bloques en MakeCode?',
          '¿Qué aprendiste hoy sobre representar procesos con bloques en MakeCode? ¿Qué te gustó más?',
          '¿Cómo fue trabajar en binas o grupos durante la programación? ¿Qué aprendiste de tu compañera?'
        ]
      },
{ 
        id: 18, 
        fecha: '06-Nov', 
        titulo: 'CuteBot: El Reto Final',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase18.pdf',// 👈 PDF clase 18
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.18.pdf', // 👈 PDF clase 18 bachillerato
        video_url: 'https://www.youtube.com/watch?v=cvYNuSlr-14', // 👈 ID del video Clase 18
        
        // --- SECCIÓN PRIMARIA (NO TOCAR) ---
        c_pri: 'identificación y aplicación de condicionales, ciclos y variables en proyectos.',
        p_pri: 'programación colaborativa, depuración de errores, justificación de decisiones y defensa oral.',
        v_pri: 'reflexión crítica, motivación, empatía y valoración del equipo.',
        art_pri: '• Prepara a las estudiantes para aplicar estructuras de decisión y repeticiones en problemas elementales.\n• Crear programas informáticos sencillos utilizando algoritmos de manera proactiva para proponer soluciones.\n• La colaboración y empatía se alinean con el plan institucional que busca un aprendizaje integral, no solo técnico.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> comprender aspectos básicos en la creación de algoritmos y reconocer su importancia para resolver problemas. <br><strong>pregunta:</strong> ¿Qué ocurre si olvidas incluir una condición o un bloque en tu programa? ¿El resultado tendría el mismo sentido? <br><br>
        • <strong>Saber hacer:</strong> Crear algoritmos sencillos para dar solución a problemas elementales y usar la tecnología como apoyo. <br><strong>Pregunta:</strong> ¿Qué pasos necesitas para que tu código sea claro y funcione correctamente en Micro:bit? <br><br>
        • <strong>Saber ser:</strong> valorar la utilidad del pensamiento computacional, trabajar colaborativamente y demostrar empatía frente a problemas del entorno. <br><strong>pregunta:</strong> ¿Cómo fue trabajar en binas durante la programación? ¿Qué aprendiste de tu compañera o compañero?`,
        porquePC: 'Esta actividad desarrolla el pensamiento computacional porque integra comprensión conceptual, aplicación práctica y reflexión socioemocional, logrando que las estudiantes piensen de forma lógica, crítica y autónoma al enfrentar desafíos.',
        pRef_Pri: ['¿Alguna vez has creado un programa que use condicionales o ciclos?', '¿Qué pasaría si un programa no sigue un orden lógico en sus instrucciones?', '¿Qué pasos necesitas para que tu código sea claro y funcione correctamente en Micro:bit?', '¿Cómo harías para que tu programa represente un algoritmo paso a paso en MakeCode?', '¿Cómo fue trabajar en binas durante la programación? ¿Qué aprendiste de tu compañera?', '¿Qué aprendiste hoy sobre representar procesos mediante código?'],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA) ---
        c_bac: 'Condicionales, ciclos, variables, parámetros.',
        p_bac: 'Depuración, trabajo en binas, creatividad, presentación oral/escrita.',
        v_bac: 'Reflexión crítica, motivación, empatía, colaboración.',
        art_bac: '• Reconoce y aplica aspectos relevantes en la creación de algoritmos: condicionales, ciclos y variables fueron aplicados en proyectos concretos.\n• Desarrolla programas informáticos basados en sus propios algoritmos: las estudiantes construyeron y ajustaron sus secuencias.\n• Fortalece su habilidad para aportar en la solución de problemas: no solo desde lo técnico, sino también desde la colaboración y reflexión.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> la comprensión de los procedimientos adecuados para diseñar algoritmos y crear programas informáticos. <br><strong>Pregunta:</strong> ¿Cómo harías para que tu programa represente un algoritmo paso a paso en MakeCode? <br><br>
        • <strong>Saber hacer:</strong> aplicación práctica de estructuras de secuenciación, condición y repetición en la construcción de programas. <br><strong>Pregunta:</strong> ¿Qué pasos necesitas para que tu código sea claro y funcione correctamente en el Cute Bot? <br><br>
        • <strong>Saber ser:</strong> dimensión socioemocional y crítica del aprendizaje, vinculada al trabajo colaborativo y la reflexión. <br><strong>Pregunta:</strong> ¿Cómo fue trabajar en binas o grupos durante la programación y qué aprendiste de tu compañera o compañero?`,
        porquePC_bac: 'Esta actividad desarrolla el PC porque combina comprensión conceptual, aplicación práctica y reflexión socioemocional, logrando que las estudiantes piensen de manera lógica, crítica y creativa para resolver problemas reales con tecnología.',
        pRef_Bach: [
          '¿Alguna vez has creado un programa que use condicionales o ciclos?',
          '¿Qué pasaría si un programa no sigue un orden lógico en sus instrucciones?',
          '¿Qué pasos necesitas para que tu código sea claro y funcione correctamente en Micro:bit?',
          '¿Qué ocurre si olvidas incluir una variable o condición en tu programa? ¿El resultado tendría el mismo sentido?',
          '¿Cómo harías para que tu programa represente un algoritmo paso a paso en MakeCode?',
          '¿Tu programa tuvo pasos como una historia? ¿Cuál fue la primera instrucción y cuál la última?',
          '¿Qué parte de la programación fue más difícil de completar? ¿Cómo lo solucionaste?',
          '¿Qué aprendiste hoy sobre representar procesos mediante código? ¿Qué te gustó más?',
          '¿Cómo fue trabajar en binas o grupos durante la programación? ¿Qué aprendiste de tu compañera o compañero?'
        ]
      },
{ 
        id: 19, 
        fecha: '13-Nov', 
        titulo: 'CuteBot: Bloques de Movimiento',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase19.pdf',// 👈 PDF clase 19
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.19.pdf', // 👈 PDF clase 19 bachillerato
        video_url: 'https://www.youtube.com/watch?v=I9rLbA117hY', // 👈 ID del video Clase 19
        
        // --- SECCIÓN PRIMARIA (NO TOCAR) ---
        c_pri: 'identificación y aplicación de bloques básicos como inicio, giros, luces y velocidad.',
        p_pri: 'programación colaborativa, de puración de errores, justificación de decisiones y defensa oral.',
        v_pri: 'reflexión crítica, motivación, empatía y valoración del trabajo en equipo.',
        art_pri: '• Se avanza hacia la estructuración de programas informáticos sencillos aplicando las bases del PC.\n• Crean algoritmos para brindar solución a problemas sencillos, programación en binas para fomentar colaboración.\n• Valorar la utilidad de las estrategias del pensamiento computacional para la solución de problemas.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> comprender aspectos básicos en la creación de algoritmos y reconocer la importancia de estructuras como decisión y repetición. <br><strong>pregunta:</strong> ¿Qué pasos necesitas para que tu código sea claro y el CuteBot ejecute correctamente sus movimientos? <br><br>
        • <strong>Saber hacer:</strong> crear algoritmos sencillos para dar solución a problemas elementales y usar la tecnología como apoyo. <br><strong>Pregunta:</strong> ¿Cómo harías para que tu programa represente un algoritmo paso a paso en MakeCode y el carrito lo siga? <br><br>
        • <strong>Saber ser:</strong> valorar la utilidad del pensamiento computacional y trabajar colaborativamente con empatía. <br><strong>pregunta:</strong> ¿Cómo fue trabajar en binas durante la programación del carrito? <br><strong>Pregunta:</strong> ¿Qué aprendiste de tu compañera o compañero?`,
        porquePC: 'Esta actividad desarrolla el PC porque integra comprensión conceptual, aplicación práctica y reflexión socioemocional, logrando que las estudiantes piensen de forma lógica, crítica y autónoma al enfrentar desafíos.',
        pRef_Pri: [
          '¿Alguna vez has programado un robot como el CuteBot usando bloques de dirección o luces?',
          '¿Qué pasos necesitas para que tu código sea claro y el CuteBot ejecute correctamente sus movimientos?',
          '¿Cómo harías para que tu programa represente un algoritmo paso a paso en MakeCode y el carrito lo siga?',
          '¿Qué bloque o instrucción usarías para modificar tu programa y que el carrito represente otra función diferente?',
          '¿Tu programa tuvo pasos como una historia? ¿Cuál fue la primera instrucción y cuál la última que ejecutó el carrito?',
          '¿Qué aprendiste hoy sobre representar procesos mediante bloques de programación?'
        ],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA) ---
        c_bac: 'Bloques, algoritmos, estructuras de control.',
        p_bac: 'Depuración, trabajo colaborativo, representación simbólica.',
        v_bac: 'Reflexión, motivación, empatía, resiliencia.',
        art_bac: '• Reconoce y aplica aspectos relevantes en la creación de algoritmos: identificaron bloques y comprendieron su función.\n• Desarrolla programas informáticos basados en sus propios algoritmos: las estudiantes construyeron y ajustaron sus programas.\n• Fortalece su habilidad para aportar en la solución de problemas: se promovió la resiliencia y la colaboración.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> Reconocimiento y comprensión de bloques básicos (movimiento, luces, velocidad, sensores, condicionales y ciclos). <br><strong>Pregunta:</strong> ¿Qué pasos necesitas para que tu código sea claro y el CuteBot ejecute correctamente sus movimientos? <br><br>
        • <strong>Saber hacer:</strong> Estructuras de secuenciación, condición y repetición en la programación del CuteBot. <br><strong>Pregunta:</strong> ¿Cómo harías para que tu programa represente un algoritmo paso a paso en MakeCode y el carrito lo siga? <br><br>
        • <strong>Saber ser:</strong> Autonomía tecnológica, al permitir que las estudiantes programaran sin apoyo constante. <br><strong>Pregunta:</strong> ¿Cómo fue trabajar en binas o grupos durante la programación del carrito? ¿Qué aprendiste de tu compañera o compañero?`,
        porquePC_bac: 'Esta actividad convierte la programación en un espacio práctico, reflexivo y colaborativo, donde el PC no solo se entiende como técnica, sino como una competencia integral que potencia la autonomía, la creatividad y la capacidad de resolver problemas en distintos contextos.',
        pRef_Bach: [
          '¿Alguna vez has programado un robot como el CuteBot usando bloques de dirección o luces?',
          '¿Qué crees que pasaría si tu programa no sigue un orden lógico en las instrucciones del carrito?',
          '¿Qué pasos necesitas para que tu código sea claro y el CuteBot ejecute correctamente sus movimientos?',
          '¿Cómo harías para que tu programa represente un algoritmo paso a paso en MakeCode y el carrito lo siga?',
          '¿Tu programa tuvo pasos como una historia? ¿Cuál fue la primera instrucción y cuál la última que ejecutó el carrito?',
          '¿Qué parte de la programación del CuteBot fue más difícil de completar? ¿Cómo lo solucionaste?',
          '¿Qué bloque o instrucción usarías para modificar tu programa y que el carrito represente otra función diferente?',
          '¿Cómo fue trabajar en binas o grupos durante la programación del carrito? ¿Qué aprendiste de tu compañera o compañero?',
          '¿Qué aprendiste hoy sobre representar procesos mediante bloques de programación? ¿Qué te gustó más del resto con el CuteBot?'
        ]
      },
{ 
        id: 20, 
        fecha: '20-Nov', 
        titulo: 'CuteBot: Gran Carrera Final',
        pdf_pri: 'assets/pdfs/primaria_pdfs/clase20.pdf',// 👈 PDF clase 20
        pdf_bac: 'assets/pdfs/bachiller_pdfs/clase1.20.pdf', // 👈 PDF clase 20 bachillerato
        video_url: 'https://www.youtube.com/watch?v=fd8DImfNrfo', // 👈 ID del video Clase 20
        
        // --- SECCIÓN PRIMARIA (NO TOCAR) ---
        c_pri: 'Bloques y secuencias básicas.',
        p_pri: 'Depuración, optimización, reflexión.',
        v_pri: 'Colaboración, motivación, resiliencia.',
        art_pri: '• Comprende aspectos básicos en la creación de algoritmos: las estudiantes identificaron cómo los bloques representan procesos.\n• Crea algoritmos para brindar solución a problemas sencillos: depuración y ajustes fueron parte de la solución.\n• Valora la utilidad de las estrategias del PC: las estudiantes reconocieron que depurar y optimizar era clave para lograr el reto.',
        orient_pri: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> comprensión de los bloques básicos de programación (inicio, velocidad, dirección, sensores) y cómo estos representan procesos lógicos. <br><strong>pregunta:</strong> ¿Qué bloque necesitas para que el CuteBot arranque, ajuste su velocidad y siga la pista correctamente? <br><br>
        • <strong>Saber hacer:</strong> la creación de programas sencillos que permitieran al Cute Bot seguir la pista y completar el recorrido. <br><strong>Pregunta:</strong> ¿Cómo organizarías tu código para que el CuteBot complete el recorrido sin salirse y en el menor tiempo posible? <br><br>
        • <strong>Saber ser:</strong> la motivación extrínseca (premio con dulces) que se transformó en motivación intrínseca, la resiliencia frente a fallos y la satisfacción por participar en la carrera. <br><strong>pregunta:</strong> ¿Cómo te sentiste al participar en la carrera y al corregir los errores de tu programa?`,
        porquePC: 'La actividad convierte la programación en una experiencia práctica, lúdica y reflexiva que permite a las estudiantes aprender a pensar como programadoras, ganar autonomía y aplicar el PC para resolver problemas reales de forma creativa y colaborativa.',
        pRef_Pri: [
          '¿Alguna vez has participado en una carrera de robots como el CuteBot?',
          '¿Qué crees que pasará si el carrito no sigue la línea negra en el circuito?',
          '¿Qué bloques necesitas para que el CuteBot arranque, ajuste su velocidad y siga la pista correctamente?',
          '¿Qué ocurre si olvidas configurar la velocidad de las llantas? ¿El carrito funcionaría igual?',
          '¿Qué parte de la programación fue más difícil durante la carrera y cómo lo solucionaste?',
          '¿Cómo te sentiste al participar en la carrera y al ver a las ganadoras?',
          '¿Qué te gustó más del reto con el CuteBot y cómo te sentiste al participar en la carrera?'
        ],

        // --- SECCIÓN BACHILLERATO (ACTUALIZADA) ---
        c_bac: 'Bloques, secuencias, parámetros.',
        p_bac: 'Depuración, optimización, reflexión metacognitiva.',
        v_bac: 'Colaboración, resiliencia, motivación intrínseca.',
        art_bac: '• Aplica procedimientos de secuenciación, condición y repetición: se trabajó explícitamente con estas estructuras en el control del CuteBot.\n• Desarrolla programas informáticos basados en sus propios algoritmos: las estudiantes ajustaron y depuraron sus códigos.\n• Fortalece su habilidad para aportar en la solución de problemas: se vinculó con la colaboración y resiliencia.',
        orient_bac: `<strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>
        • <strong>Saber conocer:</strong> reconocimiento y aplicación de conceptos computacionales básicos: secuenciación, condición y repetición. <br><strong>Pregunta:</strong> ¿Qué bloques necesitas para que el CuteBot arranque, ajuste su velocidad y siga la pista correctamente? <br><br>
        • <strong>Saber hacer:</strong> la práctica de depuración de errores y optimización de programas en tiempo real durante la carrera del CuteBot. <br><strong>Pregunta:</strong> ¿Qué parte de la programación fue más difícil durante la carrera y cómo lo solucionaste? <br><br>
        • <strong>Saber ser:</strong> la dimensión socioemocional: trabajo colaborativo en binas, resiliencia frente a errores y motivación intrínseca al participar en la carrera. <br><strong>Pregunta:</strong> ¿Cómo fue trabajar en binas durante la carrera del CuteBot y qué aprendiste de tu compañera?`,
        porquePC_bac: 'Esta actividad convierte la programación en una experiencia lúdica y significativa que integra Saber Conocer, Saber Hacer y Saber Ser, logrando que el pensamiento computacional se desarrolle de manera técnica, reflexiva y socioemocional.',
        pRef_Bach: [
          '¿Alguna vez has participado en una carrera de robots como el CuteBot?',
          '¿Qué crees que pasará si el carrito no sigue la línea negra en el circuito?',
          '¿Qué ocurre si olvidas configurar la velocidad de las llantas? ¿El carrito funcionaría igual?',
          '¿Qué bloques necesitas para que el CuteBot arranque, ajuste su velocidad y siga la pista correctamente?',
          '¿Qué parte de la programación fue más difícil durante la carrera y cómo lo solucionaste?',
          '¿Cómo te sentiste al participar en la carrera y al ver a las ganadoras?',
          '¿Qué aprendiste hoy sobre cómo los bloques representan procesos en programación?',
          '¿Qué decisiones volverías a tomar igual y cuáles cambiarías en un segundo intento?',
          '¿Cómo fue trabajar en binas o grupos durante la carrera del carrito? ¿Qué aprendiste de tu compañera o compañero?'
        ]
      },
    ];

dataBase.forEach(data => {
      this.plans.push(this.mapPlan(data, 'primaria'));
      this.plans.push(this.mapPlan(data, 'bachillerato'));
    });
  }

  private mapPlan(data: any, nivel: 'primaria' | 'bachillerato'): ClassPlan {
    const isPri = nivel === 'primaria';
    // Automatización de Autores para todas las clases
    const autoresHeader = `<strong>Lineamientos curriculares</strong><br>
    <strong>Autores:</strong> Tania Milena Benavides Villota, Karol Ximena Burbano Cabrera y Luis Eduardo Paz Saavedra.<br><br>`;
    return {
      id: `${nivel}-${data.id}`,
      mes: data.fecha,
      titulo: isPri ? `Clase #${data.id}: ${data.titulo}` : `Clase #${data.id}.1: ${data.titulo}`,
      nivel,
      grados: isPri ? '4-5º Primaria' : '7-8º Bachillerato',
      tema: data.titulo,
      objective: isPri ? 'Desarrollar bases lógicas mediante el juego.' : 'Aplicar lógica técnica y optimización de procesos.',
      descripcion: `Actividad enfocada en ${data.titulo}...`,
      fundamentacion: `Se apoya en Wing (2006) y Brennan & Resnick.`,
      enfoqueTripartita: { 
        conceptos: isPri ? (data.c_pri || 'Secuencias') : (data.c_bac || 'Algoritmos, Condicionales y Variables'), 
        practicas: isPri ? (data.p_pri || 'Prueba y error') : (data.p_bac || 'Depuración y Abstracción'), 
        perspectivas: isPri ? (data.v_pri || 'Expresión personal') : (data.v_bac || 'Sentido crítico y social') 
      },
      
      articulacionGoretti: isPri ? (data.art_pri || '• Alineado al Plan de Área...') : (data.art_bac || '• Vinculado al Plan de Área Colegio María Goretti...'),
      orientacionesCurriculares: isPri ? (data.orient_pri || 'Contenido en construcción.') : (data.orient_bac || 'Contenido en construcción.'),
      preguntasReflexivas: isPri ? (data.pRef_Pri || []) : (data.pRef_Bach || []),
      porquePC: isPri ? (data.porquePC_pri || data.porquePC) : (data.porquePC_bac || 'La actividad desarrolla el pensamiento computacional a través de la lógica.'),
      // ⬇️ CORRECCIÓN AQUÍ PDFS INDEPENDIENTES antes-:  pdfUrl: data.pdfUrl, // Aquí se asigna el PDF:  ⬇️
      pdfUrl: isPri ? data.pdf_pri : data.pdf_bac,
      videoUrl: data.video_url // 👈 AGREGADO: Mapea la URL del video de la base de datos
      
    };
  }

  getPlansByLevel(nivel: 'primaria' | 'bachillerato'): ClassPlan[] { 
    return this.plans.filter(p => p.nivel === nivel); 
  }
  
  getPlanById(id: string): ClassPlan | undefined { 
    return this.plans.find(p => p.id === id); 
  }
}