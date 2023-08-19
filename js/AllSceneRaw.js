const ALL_SCENE_ARRAY = [
    {
        id:"00000", // metada de guia
        name:"intro", // metada de guia
        parentId:null, // metada de guia
        description: /* metada de guia */ "se muestra cómo inicia la aventura. Presenta personajes y mundo.",
        
        mediaType: TYPES.VIDEO,
        mediaPath:"./res/scenes/scene0000/choke_on_em_day_of_dead.mp4",
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
                text:  "ocultase dentro de una cueva" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00001", // metada de guia
                name:"meteoro", // metada de guia
                parentId:"00000", // metada de guia
                description: /* metada de guia */ "se ve como cae un meteorito del cielo",
                
            },
            {
                /* este es el texto que ve el usuario para escoger esa acción*/ 
                text:  "Huir en la balsa" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00002", // metada de guia
                name:"geiser", // metada de guia
                parentId:"00000", // metada de guia
                description: /* metada de guia */ "se ve como cae un geiser erupciona",
            },
            {
                /* este es el texto que ve el usuario para escoger esa acción */ 
                text:  "tirarse al piso y hacese bolita" ,
    
                /** esta es la escena que se va a desarrollar si se escoge está opción*/
                id:"00003", // metada de guia
                name:"tsunami", // metada de guia
                parentId:"00000", // metada de guia
                description: /* metada de guia */ "se ve como una ola gigante sobre sale más allá del cielo",
            }
        ]
    },

    /**separador*/
    {
        id:"00001", // metada de guia
        name:"intro", // metada de guia
        parentId:"00000", // metada de guia
        description: /* metada de guia */ "se muestra cómo inicia la aventura. Presenta personajes y mundo.",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0001/luciernaga.jpg",
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
    {
        id:"00002", // metada de guia
        name:"intro", // metada de guia
        parentId:"00000", // metada de guia
        description: /* metada de guia */ "se muestra cómo inicia la aventura. Presenta personajes y mundo.",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0002/luciernaga.jpg",
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
    {
        id:"00003", // metada de guia
        name:"intro", // metada de guia
        parentId:"00000", // metada de guia
        description: /* metada de guia */ "se muestra cómo inicia la aventura. Presenta personajes y mundo.",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0003/luciernaga.jpg",
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
    {
        id:"00004", // metada de guia
        name:"intro", // metada de guia
        parentId:"00000", // metada de guia
        description: /* metada de guia */ "se muestra cómo inicia la aventura. Presenta personajes y mundo.",
        
        mediaType: TYPES.IMAGEN,
        mediaPath:"./res/scenes/scene0004/luciernaga.jpg",
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
    }
];