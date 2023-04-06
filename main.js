// window.onload = function() {
//     try {
     

//       TagCanvas.Resume('myCanvas');
//     } catch(e) {
//       document.getElementById('myCanvasContainer').style.display = 'none';
//     }
//   };
TagCanvas.Start('myCanvas','tags',{
    textColour: '#fff',
        outlineColour: '#ddd',
        reverse: false,
        depth: 0.5,
        shape: "sphere",
        wheelZoom: false,
        shuffleTags: true,
        minSpeed: 0.01,
        maxSpeed: 0.02,
        textFont: null,
        initial: [0.1,-0.1],
        activeCursor: "pointer"
        // clickToFront: 0
  });
const tag1 = document.querySelector('#tag1')

tag1.addEventListener('click',function(){
    TagCanvas.TagToFront('myCanvas', {id: "tag1"});
})
 