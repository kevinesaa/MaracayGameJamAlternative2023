console.log(`número de escena: ${ALL_SCENE_ARRAY.length}`);

const STORY_TREE = ALL_SCENE_ARRAY.map( (scene, index) => {
    
    const node = scene;
    node.index = index;
    if(node.timmerStartAt > node.sceneDuration) {
        node.timmerStartAt = 0;
    }
    node.timmerDuration = node.sceneDuration - node.timmerStartAt;
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

}).reduce( (acc, current) =>{
    acc[current.id] = current;
    return acc;
},{});

ALL_SCENE_ARRAY.forEach(scene => {
    
    if(scene.defalutOption != null) {
        const defaultSceneFromMap = STORY_TREE[scene.defalutOption.id];
        if(defaultSceneFromMap == null) {
            console.log("missing default")
            console.log(scene)
        }
        else 
        {
            scene.defalutOption.index = defaultSceneFromMap.index;
        }
    }
    
    if(scene.children != null) {
        
        scene.children.forEach(child => {
            const childSceneFromMap = STORY_TREE[child.id];
            if(childSceneFromMap == null)
            {
                console.log("missing child")
                console.log(scene)
                console.log(child)
            }
            else {
                child.index = childSceneFromMap.index;
            }
        });
    }
});