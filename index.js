//

let gpa = document.querySelector("#inputGPA");
let height = document.querySelector("#inputHeight");
let weight = document.querySelector("#inputWeight");
let submitBtn = document.querySelector("#submitBtn");
let resultGpa = document.querySelector("#resultGPA");
let resultHeight = document.querySelector("#resultHeight");
let resultWeight = document.querySelector("#resultWeight");
let result = document.querySelector("#result");

submitBtn.onclick = function(){
   let gpaValue = parseFloat(gpa.value);
   let heightValue = parseFloat(height.value);
   let weightValue = parseFloat(weight.value);
    
   result.innerHTML = `Result: `
   resultGpa.innerHTML = `GPA: ${gpaValue.toFixed(2)}`;
   resultHeight.innerHTML = `Height: ${heightValue.toFixed(2)}`;
   resultWeight.innerHTML = `Weight: ${weightValue.toFixed(2)}`;
}