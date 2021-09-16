document.addEventListener("DOMContentLoaded", function () {
    BABYLON.NodeEditor.Show({
        hostElement: document.getElementById("nmeDiv"),
        nodeMaterial: new BABYLON.NodeMaterial("node", scene, { emitComments: true })
    });
});