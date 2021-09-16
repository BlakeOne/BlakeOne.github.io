document.addEventListener("DOMContentLoaded", function () {
    
    BABYLON.NodeEditor.Show({
        hostElement: document.getElementById("nmeDiv"),
        nodeMaterial: new BABYLON.NodeMaterial("node", null, { emitComments: true })
    });
});