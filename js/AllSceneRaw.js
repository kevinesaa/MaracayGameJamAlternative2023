const ALL_SCENE_ARRAY = [
    {
        id:"00000", // metada de guia
        name:"intro", // metada de guia
        parentId:null, // metada de guia
        description: /* metada de guia */ "se muestra cómo inicia la aventura. Presenta personajes y mundo.",
        
        mediaType: TYPES.VIDEO,
        mediaPath:"./res/scenes/scene0000/scene0000.mp4",
        /** los substítulos son opcionales */
        substitles: [ 
            {character:"Narrador", text:"Hoy el día esta nublado y tengo sueño…"}, 
            {character:"Narrador", text:" Ha de ser el efecto de las pastillas."},
            {character:"Narrador", text:"Estoy cansada de estar encerrada"},
            {character:"Narrador", text:"¿qué me puedes recomendar hacer?"},
        ],
        sceneDuration: 10000, // 10 segundos, el tiempo que dura la escena
        timmerStartAt: 6000, // 6 segundos después de iniciada la escena
        timmerDuration: 4000, // 4 segundos el tiempo que dura el timmer
        audioTracks: {
            channel00:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel01:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel02:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
        
            ],
            channel03:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ]
        },
        // está es la opción que se escoge cuando se acaba el tiempo
        defalutOption: {
            id:"00004", // metada de guia
            name:"terremoto", // metada de guia
            parentId:"00000", // metada de guia
            description: /* metada de guia */ "la tierra se rompe en dos, con la fácilidad de un huevo",
        },
        children: [
            {
                /* este es el texto que ve el usuario para escoger esa acción*/ 
                text: "Vamos a salir" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00001", // metada de guia
                name:"salir", // metada de guia
                parentId:"00000", // metada de guia
                description: /* metada de guia */ "Sale de la casa",
                
            },
            {
                /* este es el texto que ve el usuario para escoger esa acción*/ 
                text: "Habla con la mantis" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00002", // metada de guia
                name:"mantis", // metada de guia
                parentId:"00000", // metada de guia
                description: /* metada de guia */ "Habla con mantis",
            },
            {
                /* este es el texto que ve el usuario para escoger esa acción */ 
                text: "Recuéstate en tu cama" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00003", // metada de guia
                name:"dormir", // metada de guia
                parentId:"00000", // metada de guia
                description: /* metada de guia */ "A mimir",
            }
        ]
    },

    /**separador*/
    /** Vamos a salir */
    {
        id:"00001", // metada de guia
        name:"scene", // metada de guia
        parentId:"00000", // metada de guia
        description: /* metada de guia */ "sale de su casa",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0001/marco.png",
        /** los substítulos son opcionales */
        substitles: [ 
            {character:"Narrador", text:"El clima se siente frío..."}, 
            {character:"Narrador", text:"¡Mira, una mariposa!"},
            {character:"Narrador", text:"¿Alguna vez has pensado en cómo es la vida de las mariposa?"}
        ],
        sceneDuration: 10000, // 10 segundos, el tiempo que dura la escena
        timmerStartAt: 6000, // 6 segundos después de iniciada la escena
        timmerDuration: 4000, // 4 segundos el tiempo que dura el timmer
        audioTracks: {
            channel00:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel01:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel02:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
        
            ],
            channel03:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ]
        },
        defalutOption: {
            id:"00008", // metada de guia
            name:"terremoto", // metada de guia
            parentId:"00001", // metada de guia
            description: /* metada de guia */ "la tierra se rompe en dos, con la fácilidad de un huevo",
        },
        children: [
            {
                /* este es el texto que ve el usuario para escoger esa acción*/ 
                text: "Sí, y me deja pensando" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00005", // metada de guia
                name:"pensando", // metada de guia
                parentId:"00001", // metada de guia
                description: /* metada de guia */ "la deja pensando",
                
            },
            {
                /* este es el texto que ve el usuario para escoger esa acción*/ 
                text: "No realmente" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00006", // metada de guia
                name:"no", // metada de guia
                parentId:"00001", // metada de guia
                description: /* metada de guia */ "novale",
            },
            {
                /* este es el texto que ve el usuario para escoger esa acción */ 
                text: "Option 3" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00007", // metada de guia
                name:"tsunami", // metada de guia
                parentId:"00001", // metada de guia
                description: /* metada de guia */ "se ve como una ola gigante sobre sale más allá del cielo",
            }
        ]
    },

    /**separador*/
    /** Habla con la mantis */
    {
        id:"00002", // metada de guia
        name:"intro", // metada de guia
        parentId:"00000", // metada de guia
        description: /* metada de guia */ "se muestra cómo inicia la aventura. Presenta personajes y mundo.",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0002/marco.png",
        /** los substítulos son opcionales */
        substitles: [ 
            {character:"Pedro", text:"Había una vez"}, 
            {character:"Pedro", text:"En un lugar muy, muy lejano..."},
            {character:"Narrador", text:"soy tu consciencia"}, 
            {character:"Narrador", text:"esa voz en tu mente"}
        ],
        sceneDuration: 10000, // 10 segundos, el tiempo que dura la escena
        timmerStartAt: 6000, // 6 segundos después de iniciada la escena
        timmerDuration: 4000, // 4 segundos el tiempo que dura el timmer
        audioTracks: {
            channel00:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel01:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel02:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
        
            ],
            channel03:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ]
        }
    },

    /**separador*/
    /** Recuestate en tu cama */
    {
        id:"00003", // metada de guia
        name:"intro", // metada de guia
        parentId:"00000", // metada de guia
        description: /* metada de guia */ "se muestra cómo inicia la aventura. Presenta personajes y mundo.",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0003/marco.png",
        /** los substítulos son opcionales */
        substitles: [ 
            {character:"Pedro", text:"Había una vez"}, 
            {character:"Pedro", text:"En un lugar muy, muy lejano..."},
            {character:"Narrador", text:"soy tu consciencia"}, 
            {character:"Narrador", text:"esa voz en tu mente"}
        ],
        sceneDuration: 10000, // 10 segundos, el tiempo que dura la escena
        timmerStartAt: 6000, // 6 segundos después de iniciada la escena
        timmerDuration: 4000, // 4 segundos el tiempo que dura el timmer
        audioTracks: {
            channel00:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel01:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel02:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
        
            ],
            channel03:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ]
        }
    },
    
    /**separador*/
    /** Default 00004 */
    {
        id:"00004", // metada de guia
        name:"intro", // metada de guia
        parentId:"00000", // metada de guia
        description: /* metada de guia */ "se muestra cómo inicia la aventura. Presenta personajes y mundo.",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0004/marco.png",
        /** los substítulos son opcionales */
        substitles: [ 
            {character:"Pedro", text:"Había una vez"}, 
            {character:"Pedro", text:"En un lugar muy, muy lejano..."},
            {character:"Narrador", text:"soy tu consciencia"}, 
            {character:"Narrador", text:"esa voz en tu mente"}
        ],
        sceneDuration: 10000, // 10 segundos, el tiempo que dura la escena
        timmerStartAt: 6000, // 6 segundos después de iniciada la escena
        timmerDuration: 4000, // 4 segundos el tiempo que dura el timmer
        audioTracks: {
            channel00:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel01:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel02:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
        
            ],
            channel03:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ]
        } 
    },

    /**separador*/
    /** Si, y me deja pensando */
    {
        id:"00005", // metada de guia
        name:"scene", // metada de guia
        parentId:"00001", // metada de guia
        description: /* metada de guia */ "scene",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0001/marco.png",
        /** los substítulos son opcionales */
        substitles: [ 
            {character:"Narrador", text:"A mi también. A lo largo de su vida sufren una serie de transformaciones complejas conocida como metamorfosis, en la que suceden cuatro fases conocidas como embrión, larva, pupa e imago."}, 
            {character:"Narrador", text:"Nosotros los humanos también podemos pasar por metamorfosis a lo largo de nuestra vida a medida que vamos creciendo y nos exponemos a diferentes situaciones en la vida. Y dentro de nosotros mismos podemos llegar a evolucionar de maneras en que solo la naturaleza con su ecosistema nos puede reflejar a nostros mismos en otras especies. "}
        ],
        sceneDuration: 10000, // 10 segundos, el tiempo que dura la escena
        timmerStartAt: 6000, // 6 segundos después de iniciada la escena
        timmerDuration: 4000, // 4 segundos el tiempo que dura el timmer
        audioTracks: {
            channel00:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel01:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel02:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
        
            ],
            channel03:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ]
        },
        defalutOption: {
            id:"00012", // metada de guia
            name:"terremoto", // metada de guia
            parentId:"00005", // metada de guia
            description: /* metada de guia */ "scene",
        },
        children: [
            {
                /* este es el texto que ve el usuario para escoger esa acción*/ 
                text: "Option 1" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00009", // metada de guia
                name:"scene", // metada de guia
                parentId:"00005", // metada de guia
                description: /* metada de guia */ "scene",
                
            },
            {
                /* este es el texto que ve el usuario para escoger esa acción*/ 
                text: "Option 2" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00010", // metada de guia
                name:"scene", // metada de guia
                parentId:"00005", // metada de guia
                description: /* metada de guia */ "scene",
            },
            {
                /* este es el texto que ve el usuario para escoger esa acción */ 
                text: "Option 3" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00011", // metada de guia
                name:"scene", // metada de guia
                parentId:"00005", // metada de guia
                description: /* metada de guia */ "scene",
            }
        ]
    },
    
    /**separador*/
    /** No realmente */
    {
        id:"00006", // metada de guia
        name:"scena", // metada de guia
        parentId:"00001", // metada de guia
        description: /* metada de guia */ "scene",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0001/marco.png",
        /** los substítulos son opcionales */
        substitles: [ 
            {character:"Narrador", text:"Entiendo, quizá no te agradan las mariposas. ¿Qué te parece si miramos al suelo a ver qué bicho podemos conseguir? "}, 
        ],
        sceneDuration: 10000, // 10 segundos, el tiempo que dura la escena
        timmerStartAt: 6000, // 6 segundos después de iniciada la escena
        timmerDuration: 4000, // 4 segundos el tiempo que dura el timmer
        audioTracks: {
            channel00:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel01:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel02:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
        
            ],
            channel03:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ]
        },
        defalutOption: {
            id:"00016", // metada de guia
            name:"scene", // metada de guia
            parentId:"00006", // metada de guia
            description: /* metada de guia */ "scene",
        },
        children: [
            {
                /* este es el texto que ve el usuario para escoger esa acción*/ 
                text: "Vale. Me acercaré al suelo." ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00013", // metada de guia
                name:"scene", // metada de guia
                parentId:"00006", // metada de guia
                description: /* metada de guia */ "scene",
                
            },
            {
                /* este es el texto que ve el usuario para escoger esa acción*/ 
                text: "Option 2" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00014", // metada de guia
                name:"scene", // metada de guia
                parentId:"00006", // metada de guia
                description: /* metada de guia */ "scene",
            },
            {
                /* este es el texto que ve el usuario para escoger esa acción */ 
                text: "Option 3" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00015", // metada de guia
                name:"scene", // metada de guia
                parentId:"00006", // metada de guia
                description: /* metada de guia */ "scene",
            }
        ]
    },

    /**separador*/
    /** Option 3 */
    {
        id:"00007", // metada de guia
        name:"intro", // metada de guia
        parentId:"00001", // metada de guia
        description: /* metada de guia */ "se muestra cómo inicia la aventura. Presenta personajes y mundo.",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0004/marco.png",
        /** los substítulos son opcionales */
        substitles: [ 
            {character:"Pedro", text:"Había una vez"}, 
            {character:"Pedro", text:"En un lugar muy, muy lejano..."},
            {character:"Narrador", text:"soy tu consciencia"}, 
            {character:"Narrador", text:"esa voz en tu mente"}
        ],
        sceneDuration: 10000, // 10 segundos, el tiempo que dura la escena
        timmerStartAt: 6000, // 6 segundos después de iniciada la escena
        timmerDuration: 4000, // 4 segundos el tiempo que dura el timmer
        audioTracks: {
            channel00:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel01:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel02:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
        
            ],
            channel03:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ]
        } 
    },

    /**separador*/
    /** Default 00008 */
    {
        id:"00008", // metada de guia
        name:"intro", // metada de guia
        parentId:"00001", // metada de guia
        description: /* metada de guia */ "se muestra cómo inicia la aventura. Presenta personajes y mundo.",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0004/marco.png",
        /** los substítulos son opcionales */
        substitles: [ 
            {character:"Pedro", text:"Había una vez"}, 
            {character:"Pedro", text:"En un lugar muy, muy lejano..."},
            {character:"Narrador", text:"soy tu consciencia"}, 
            {character:"Narrador", text:"esa voz en tu mente"}
        ],
        sceneDuration: 10000, // 10 segundos, el tiempo que dura la escena
        timmerStartAt: 6000, // 6 segundos después de iniciada la escena
        timmerDuration: 4000, // 4 segundos el tiempo que dura el timmer
        audioTracks: {
            channel00:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel01:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel02:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
        
            ],
            channel03:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ]
        } 
    },

    /**separador*/
    /** Default 00012 */
    {
        id:"00012", // metada de guia
        name:"intro", // metada de guia
        parentId:"00005", // metada de guia
        description: /* metada de guia */ "se muestra cómo inicia la aventura. Presenta personajes y mundo.",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0004/marco.png",
        /** los substítulos son opcionales */
        substitles: [ 
            {character:"Pedro", text:"Había una vez"}, 
            {character:"Pedro", text:"En un lugar muy, muy lejano..."},
            {character:"Narrador", text:"soy tu consciencia"}, 
            {character:"Narrador", text:"esa voz en tu mente"}
        ],
        sceneDuration: 10000, // 10 segundos, el tiempo que dura la escena
        timmerStartAt: 6000, // 6 segundos después de iniciada la escena
        timmerDuration: 4000, // 4 segundos el tiempo que dura el timmer
        audioTracks: {
            channel00:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel01:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel02:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
        
            ],
            channel03:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ]
        } 
    },

    /**separador*/
    /** Default 00016 */
    {
        id:"00016", // metada de guia
        name:"intro", // metada de guia
        parentId:"00006", // metada de guia
        description: /* metada de guia */ "se muestra cómo inicia la aventura. Presenta personajes y mundo.",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0004/marco.png",
        /** los substítulos son opcionales */
        substitles: [ 
            {character:"Pedro", text:"Había una vez"}, 
            {character:"Pedro", text:"En un lugar muy, muy lejano..."},
            {character:"Narrador", text:"soy tu consciencia"}, 
            {character:"Narrador", text:"esa voz en tu mente"}
        ],
        sceneDuration: 10000, // 10 segundos, el tiempo que dura la escena
        timmerStartAt: 6000, // 6 segundos después de iniciada la escena
        timmerDuration: 4000, // 4 segundos el tiempo que dura el timmer
        audioTracks: {
            channel00:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel01:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ],
            channel02:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
        
            ],
            channel03:[{
                    startAt:2000, // 2 segundos después de iniciada la escena para reproduccir el audio
                    trackPath: "./res/scena_00000/audio_white.ogg",
                },
                {
                    startAt:500, // 0.5 segundos después de finalizado el audio anterior
                    trackPath: "./res/scena_00000/audio_white.ogg",
                }
            ]
        } 
    },
];