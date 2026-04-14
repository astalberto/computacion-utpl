const CATS = {
    FB:  { label: 'Fundamentos Teóricos',                              color: '#C99010' },
    PP:  { label: 'Praxis Profesional',                                color: '#DC3545' },
    EMI: { label: 'Epistemología y Metodología de la Investigación',   color: '#E07B20' },
    UIC: { label: 'Unidad de Integración Curricular',                  color: '#28A745' },
    ISC: { label: 'Integración de Saberes, Contextos y Cultura',       color: '#6B4AC9' },
    CL:  { label: 'Comunicación y Lenguajes',                          color: '#52606D' },
    IT:  { label: 'Itinerario',                                        color: '#17A2B8' },
};

const MALLA = [
    {
        ciclo: 1, materias: [
            { nombre: 'Fundamentos Computacionales',      cat: 'FB',  creditos: 3, horas: 144, pre: [] },
            { nombre: 'Fundamentos Matemáticos',          cat: 'FB',  creditos: 3, horas: 144, pre: [] },
            { nombre: 'Introducción a la Programación',   cat: 'FB',  creditos: 3, horas: 144, pre: [] },
            { nombre: 'Computación y Sociedad',           cat: 'FB',  creditos: 2, horas: 96,  pre: [] },
            { nombre: 'Estructuras Discretas',            cat: 'FB',  creditos: 2, horas: 96,  pre: ['Fundamentos Matemáticos'] },
            { nombre: 'Humanismo, Universidad y Cultura', cat: 'ISC', creditos: 2, horas: 96,  pre: [] },
        ]
    },
    {
        ciclo: 2, materias: [
            { nombre: 'Física Básica',                          cat: 'FB', creditos: 3, horas: 144, pre: ['Fundamentos Matemáticos'] },
            { nombre: 'Álgebra Lineal',                         cat: 'FB', creditos: 3, horas: 144, pre: ['Fundamentos Matemáticos'] },
            { nombre: 'Programación Orientada a Objetos',       cat: 'FB', creditos: 3, horas: 144, pre: ['Introducción a la Programación'] },
            { nombre: 'Análisis Matemático Univariado',         cat: 'FB', creditos: 3, horas: 144, pre: ['Álgebra Lineal'] },
            { nombre: 'Estructuras de Datos',                   cat: 'FB', creditos: 3, horas: 144, pre: ['Programación Orientada a Objetos'] },
        ]
    },
    {
        ciclo: 3, materias: [
            { nombre: 'Ecuaciones Diferenciales y Métodos Numéricos', cat: 'FB',  creditos: 3, horas: 144, pre: ['Análisis Matemático Univariado'] },
            { nombre: 'Lógica Digital',                               cat: 'FB',  creditos: 2, horas: 96,  pre: ['Fundamentos Computacionales'] },
            { nombre: 'Fundamentos de Base de Datos',                 cat: 'FB',  creditos: 3, horas: 144, pre: ['Introducción a la Programación'] },
            { nombre: 'Programación Funcional y Reactiva',            cat: 'FB',  creditos: 3, horas: 144, pre: ['Introducción a la Programación'] },
            { nombre: 'Antropología Básica',                          cat: 'ISC', creditos: 2, horas: 96,  pre: ['Humanismo, Universidad y Cultura'] },
            { nombre: 'Prácticum 1.1',                                cat: 'PP',  creditos: 2, horas: 96,  pre: [] },
        ]
    },
    {
        ciclo: 4, materias: [
            { nombre: 'Arquitectura y Organización de Computadores', cat: 'FB', creditos: 2, horas: 96,  pre: ['Lógica Digital'] },
            { nombre: 'Prototipado',                                 cat: 'FB', creditos: 3, horas: 144, pre: [] },
            { nombre: 'Análisis de Algoritmos',                      cat: 'FB', creditos: 2, horas: 96,  pre: ['Estructuras de Datos'] },
            { nombre: 'Base de Datos Avanzada',                      cat: 'FB', creditos: 3, horas: 144, pre: ['Fundamentos de Base de Datos'] },
            { nombre: 'Programación Avanzada',                       cat: 'FB', creditos: 3, horas: 144, pre: ['Introducción a la Programación'] },
            { nombre: 'Prácticum 1.2',                               cat: 'PP', creditos: 2, horas: 96,  pre: ['Prácticum 1.1'] },
        ]
    },
    {
        ciclo: 5, materias: [
            { nombre: 'Fundamentos de Ingeniería de Software',      cat: 'FB',  creditos: 3, horas: 144, pre: [] },
            { nombre: 'Sistemas Operativos',                        cat: 'FB',  creditos: 2, horas: 96,  pre: ['Arquitectura y Organización de Computadores'] },
            { nombre: 'Introducción a la Inteligencia de Negocios', cat: 'FB',  creditos: 2, horas: 96,  pre: [] },
            { nombre: 'Ingeniería Web',                             cat: 'FB',  creditos: 2, horas: 96,  pre: [] },
            { nombre: 'Estadística y Probabilidad',                 cat: 'EMI', creditos: 2, horas: 96,  pre: [] },
            { nombre: 'Etica y Moral',                              cat: 'ISC', creditos: 2, horas: 96,  pre: [] },
            { nombre: 'Prácticum 2.1',                              cat: 'PP',  creditos: 2, horas: 96,  pre: ['Prácticum 1.2'] },
        ]
    },
    {
        ciclo: 6, materias: [
            { nombre: 'Gestión de la Calidad de Software',   cat: 'FB', creditos: 2, horas: 96,  pre: [] },
            { nombre: 'Ingeniería de Requisitos',            cat: 'FB', creditos: 3, horas: 144, pre: [] },
            { nombre: 'Teoría de Autómatas y Compiladores',  cat: 'FB', creditos: 2, horas: 96,  pre: ['Estructuras de Datos'] },
            { nombre: 'Fundamentos de Redes',                cat: 'FB', creditos: 3, horas: 144, pre: [] },
            { nombre: 'Prácticum 2.2',                       cat: 'PP', creditos: 2, horas: 96,  pre: ['Prácticum 2.1'] },
            { nombre: 'Plataformas Web',                     cat: 'IT', creditos: 3, horas: 144, pre: ['Ingeniería Web'] },
            { nombre: 'Fundamentos de análisis de datos',    cat: 'IT', creditos: 3, horas: 144, pre: ['Estadística y Probabilidad'] },
        ]
    },
    {
        ciclo: 7, materias: [
            { nombre: 'Redes y Sistemas Distribuidos',      cat: 'FB',  creditos: 3, horas: 144, pre: ['Fundamentos de Redes'] },
            { nombre: 'Fundamentos de Inteligencia Artificial', cat: 'FB', creditos: 2, horas: 96, pre: [] },
            { nombre: 'Arquitectura de Software',           cat: 'FB',  creditos: 3, horas: 144, pre: [] },
            { nombre: 'Emprendimiento',                     cat: 'ISC', creditos: 2, horas: 96,  pre: [] },
            { nombre: 'Prácticum 3',                        cat: 'PP',  creditos: 2, horas: 96,  pre: ['Prácticum 2.2'] },
            { nombre: 'Plataformas Móviles',                cat: 'IT',  creditos: 3, horas: 144, pre: ['Plataformas Web'] },
            { nombre: 'Ciencias de datos para la gestion inteligente del territorio Interoperabilidad y explotación de datos', cat: 'IT', creditos: 3, horas: 144, pre: ['Fundamentos de análisis de datos'] },
        ]
    },
    {
        ciclo: 8, materias: [
            { nombre: 'Computación Paralela y Distribuida',                          cat: 'FB',  creditos: 2, horas: 96,  pre: [] },
            { nombre: 'Representación avanzada del conocimiento y razonamiento',     cat: 'FB',  creditos: 3, horas: 144, pre: [] },
            { nombre: 'Emprendimiento de base Tecnolófica I',                        cat: 'ISC', creditos: 2, horas: 96,  pre: [] },
            { nombre: 'Composición de Textos Cientificos',                           cat: 'CL',  creditos: 2, horas: 96,  pre: [] },
            { nombre: 'Prácticum 4.1 Trabajo de integración curricular/Examen Complexivo', cat: 'UIC', creditos: 3, horas: 144, pre: ['Prácticum 3'] },
            { nombre: 'Plataformas para Juegos',                                     cat: 'IT',  creditos: 3, horas: 144, pre: ['Plataformas Móviles'] },
            { nombre: 'Big Data y visualización',                                    cat: 'IT',  creditos: 3, horas: 144, pre: ['Ciencias de datos para la gestion inteligente del territorio Interoperabilidad y explotación de datos'] },
        ]
    },
    {
        ciclo: 9, materias: [
            { nombre: 'Sistemas Inteligentes',              cat: 'FB',  creditos: 3, horas: 144, pre: [] },
            { nombre: 'Gestión de proyectos',               cat: 'FB',  creditos: 2, horas: 96,  pre: [] },
            { nombre: 'Seguridad de la Información',        cat: 'FB',  creditos: 2, horas: 96,  pre: [] },
            { nombre: 'Tecnologías Emergentes',             cat: 'FB',  creditos: 2, horas: 96,  pre: [] },
            { nombre: 'Emprendimiento de base Tecnolófica II', cat: 'ISC', creditos: 2, horas: 96, pre: [] },
            { nombre: 'Prácticum 4.1 Trabajo de integración curricular/Examen Complexivo', cat: 'UIC', creditos: 4, horas: 192, pre: ['Prácticum 4.1 Trabajo de integración curricular/Examen Complexivo'] },
        ]
    },
];

const ITINERARIOS = [
    {
        num: 'I',
        name: 'Desarrollo Basado en Plataformas',
        color: '#0F4A6E',
        subjects: [
            'Plataformas Web',
            'Plataformas Móviles',
            'Plataformas para Juegos',
        ],
    },
    {
        num: 'II',
        name: 'Ciencias de Datos para la Gestión Inteligente del Territorio',
        color: '#C99010',
        subjects: [
            'Fundamentos de análisis de datos',
            'Interoperabilidad y explotación de datos',
            'Big Data y visualización',
        ],
    },
];
