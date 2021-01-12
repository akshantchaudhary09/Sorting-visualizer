const array = [];

document.querySelector(".btn-generateRandomArray").addEventListener("click", function (){
  generateNewArray();
});
document.querySelector(".btn-selection").addEventListener("click", function (){
  selectionSort();
});
document.querySelector(".btn-merge").addEventListener("click", function (){
  mergeSort(0, array.length-1);
});
document.querySelector(".btn-bubble").addEventListener("click", function (){
  bubbleSort();
});
document.querySelector(".btn-insertion").addEventListener("click", function (){
  insertionSort();
});


function include(file) {

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function generateNewArray(){
  let arraySize = document.querySelector(".arraySize").value;
  document.getElementById('container2').innerHTML = '';
  array.splice(0, array.length)
  for(let i=0;i<arraySize;i++){
    let num = Math.floor(Math.random()*102)+3;
    let tag = document.createElement("p");
    tag.id = "p" + i;
    tag.style.width = 900/(2*arraySize) + "px";
    tag.style.height = num*6 + "px";
    tag.classList.add("sortRectangle");
    let element = document.getElementById("container2");
    element.appendChild(tag);
    array.push(num);
  }
}



include('C:/Users/91875/Desktop/web devlopment/sorting-visualizer/javascript/selectionSort.js');
include('C:/Users/91875/Desktop/web devlopment/sorting-visualizer/javascript/mergeSort.js');
include('C:/Users/91875/Desktop/web devlopment/sorting-visualizer/javascript/bubbleSort.js');
include('C:/Users/91875/Desktop/web devlopment/sorting-visualizer/javascript/insertionSort.js');
