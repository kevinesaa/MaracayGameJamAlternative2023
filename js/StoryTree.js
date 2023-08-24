const STORY_TREE = ALL_SCENE_ARRAY.map( (scene, index) => {
    
    const node = scene;
    node.index = index;
    if(node.timmerStartAt > node.sceneDuration) {
        node.timmerStartAt = 0;
    }
    node.timmerDuration = node.sceneDuration - node.timmerStartAt;
    node.sceneDuration = node.sceneDuration + 1000;
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
        scene.defalutOption.index = defaultSceneFromMap.index;
    }
    
    if(scene.children != null) {
        
        scene.children.forEach(child => {
            const childSceneFromMap = STORY_TREE[child.id];
            child.index = childSceneFromMap.index;
        });
    }
});