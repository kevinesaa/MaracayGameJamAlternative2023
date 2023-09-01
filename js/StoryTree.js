console.log(`número de escenas en el array: ${ALL_SCENE_ARRAY.length}`);

const STORY_TREE = ALL_SCENE_ARRAY.map( (scene, index) => {
    
    const node = scene;
    node.index = index;
    
    if(node.timmerStartAt > node.sceneDuration) {
        node.timmerStartAt = 0;
    }
    
    if( node.timmerDuration > node.sceneDuration ) {
        node.timmerDuration = node.sceneDuration - node.timmerStartAt;
    }

    if(node.timmerDuration < 0) {
        node.timmerDuration = node.sceneDuration;
    }
    
    
    node.sceneDuration = node.sceneDuration + 1500;
    if(node.defalutOption != null)
    {
        node.defalutOption.parentId = node.id;
        node.defalutOption.parent = {
            id:node.id,
            index: node.index,
            name:node.name,
            description:node.description,
        };
    }

    if(node.children != null) {
        node.children.forEach(child => {
            child.parentId = node.id;
            child.parent = {
                id:node.id,
                index: node.index,
                name:node.name,
                description:node.description,
            };
        });
    }
    
    return node;

}).reduce( (acc, current) => {
    acc[current.id] = current;
    return acc;
},{});

ALL_SCENE_ARRAY.forEach(scene => {
    
    if(scene.defalutOption != null) {

        const defaultSceneFromMap = STORY_TREE[scene.defalutOption.id];
        if(defaultSceneFromMap != null) 
        {
            scene.defalutOption.index = defaultSceneFromMap.index;
        }
        else 
        {
            console.error("missing default")
            console.error(scene)
        }
    }
    
    if(scene.children != null) {
        
        scene.children.forEach(child => {

            const childSceneFromMap = STORY_TREE[child.id];
            if(childSceneFromMap != null)
            {
                child.index = childSceneFromMap.index;
            }
            else 
            {    
                console.error("missing child")
                console.error(scene)
                console.error(child)
            }
        });
    }
});

console.log(`número de escenas en el arbol: ${Object.values(ALL_SCENE_ARRAY).length}`);