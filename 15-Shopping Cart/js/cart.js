// Shopping Cart
let btnSubmit = document.getElementById("btnSubmit");
let grocerryName = document.getElementById("grocerryName");
let selQty = document.getElementById("selQty");
let inputPrice = document.getElementById("inputPrice");
let netTotal = document.getElementById("netTotal");

// Button Submit Function
btnSubmit.addEventListener("click", function () {
  // Condition For Alert
  if (grocerryName.value == "" || selQty.value == "" || inputPrice.value == "") {
    alert("Plz. Fill The Value");
  } else {
    getdiv();
    grocerryName.value = "";
    grocerryName.placeholder = " Grocerry Name ";
    selQty.value = "";
    inputPrice.value = "";
    inputPrice.placeholder = " Price ";
  };
});
// Funcction Fpr Dyanamic
function getdiv() {
  let mainDiv = document.getElementById("mainDiv");
  // Main Box-1
  let dyanaBox = document.createElement("div");
  dyanaBox.className = "dyanaBox row container my-2 ";
  // Main Box-1-1   
  let innerBox1 = document.createElement("div");
  innerBox1.className = "innerBox1 col-6";
  let displayName = document.createElement("p");
  displayName.className = "displayName";
  displayName.innerHTML = grocerryName.value;
  //Main Box 1-2 
  let innerBox2 = document.createElement("div");
  innerBox2.className = "innerBox2 col-6";
  let aDelete = document.createElement("a");
  aDelete.setAttribute("class", "fa fa-trash-o");
  aDelete.innerHTML = "<br>Delete</br>"
  aDelete.style.color = "red";
  // Delete Click Button
  aDelete.addEventListener("click", function () {
    let parentDiv = aDelete.parentNode.parentNode;
    parentDiv.parentNode.removeChild(parentDiv);
    netTotal.textContent = Number(netTotal.textContent) - Number(totalDisplay.innerHTML);
  });
  // Main Box 1-3 
  let innerBox3 = document.createElement("div");
  innerBox3.className = "innerBox3 col-6";
  let qtyTag = document.createElement("p");
  // Add Button Create
  let addBtn = document.createElement("span");
  addBtn.innerHTML = "  +  ";
  //Add Button Function 
  addBtn.addEventListener("click", function () {
    let price = Number(totalDisplay.innerHTML) / Number(qtyDisplay.innerHTML);
    qtyDisplay.innerHTML = Number(qtyDisplay.innerHTML) + 1;

    totalDisplay.innerHTML = qtyDisplay.innerHTML * price;
    netTotal.textContent = Number(netTotal.textContent) + price

  });
  // Qty Button Create
  let qtyDisplay = document.createElement("span");
  qtyDisplay.innerHTML = selQty.value;
  // Subract Button Create
  let subrBtn = document.createElement("span");
  subrBtn.innerHTML = "  -  ";
  // Subract Button Function For Click Event
  subrBtn.addEventListener("click", function () {
    if (qtyDisplay.innerHTML > 1) {
      let price = Number(totalDisplay.innerHTML) / Number(qtyDisplay.innerHTML);
      qtyDisplay.innerHTML = Number(qtyDisplay.innerHTML) - 1;
      totalDisplay.innerHTML = qtyDisplay.innerHTML * price;
      netTotal.textContent = Number(netTotal.textContent) - price;
    } else {
      subrBtn.disabled = true;
    }
  });
  // Box Create - 1-4 
  let innerBox4 = document.createElement("div");
  innerBox4.className = "innerBox4 col-6";
  let totalTag = document.createElement("p");
  totalTag.innerHTML = "Total :     $";
  // Total Dispaly Function
  let totalDisplay = document.createElement("span");
  totalDisplay.innerHTML = qtyDisplay.innerHTML * inputPrice.value;
  netTotal.textContent = Number(netTotal.textContent) + Number(totalDisplay.innerHTML);


  totalTag.appendChild(totalDisplay);
  innerBox4.appendChild(totalTag);
  qtyTag.appendChild(addBtn);
  qtyTag.appendChild(qtyDisplay);
  qtyTag.appendChild(subrBtn);
  innerBox3.appendChild(qtyTag);
  innerBox2.appendChild(aDelete);
  innerBox1.appendChild(displayName);
  dyanaBox.appendChild(innerBox1);
  dyanaBox.appendChild(innerBox2);
  dyanaBox.appendChild(innerBox3);
  dyanaBox.appendChild(innerBox4);
  mainDiv.appendChild(dyanaBox);
}