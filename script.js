/* .js files add interaction to your website */
var factList = [
"Less than half of the 139 countries that have mental health policies and plans report having these aligned with human rights conventions.",
"Around 1 in 5 of the world's children and adolescents have a mental disorder.",
"Around 1 in 9 people in settings affected by conflict have a moderate or severe mental disorder.",
"Mental, neurological and substance use disorders make up 10% of the global burden of disease and 30% of non-fatal disease burden.",
"Depression is one of the leading causes of disability, affecting 264 million people."
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  console.log("Good");
  fact.innerHTML = factList[count];
  console.log("hi");
  count+= 1;
  console.log("goodbye");
  if (count == factList.length){
    count = 0;
  }
  console.log("hello");
}
