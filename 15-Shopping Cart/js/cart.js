// Shopping Cart
let btnSubmit = document.getElementById("btnSubmit");
let txtGrocerryName = document.getElementById("txtGrocerryName");
let selectQuantity = document.getElementById("selectQuantity");
let txtInputPrice = document.getElementById("txtInputPrice");
let netTotal = document.getElementById("netTotal");

// Button Submit Function
btnSubmit.addEventListener("click", function () {
  // Condition For Alert
  if (txtGrocerryName.value == "") {
    alert("Please fill the Groceery value");
  } if (selectQuantity.value == "") {
    alert("Please select the quantity");
  } if (txtInputPrice.value == "") {
    alert("Please fill the Price of Item");
  } else {
    generateDiv();
    txtGrocerryName.value = "";
    txtGrocerryName.placeholder = " Grocerry Name ";
    selectQuantity.value = "";
    txtInputPrice.value = "";
    txtInputPrice.placeholder = "Price";
  };
});

// Function For Dyanamic
function generateDiv() {
  let divMain = document.getElementById("divMain");
  // Main Box-1
  let divDynamicBox = document.createElement("div");
  divDynamicBox.className = "divDynamicBox row container my-2 ";

  // Main Box-1-1   
  let innerBox1 = document.createElement("div");
  innerBox1.className = "innerBox1 col-6";
  let displayName = document.createElement("p");
  displayName.className = "displayName";
  displayName.innerHTML = txtGrocerryName.value;

  // Edit Text....
  displayName.addEventListener("dblclick", function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas == 0) {
      let html = displayName.innerHTML;
      displayName.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="1"> ${html}</textarea>`;
    }

    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
      displayName.innerHTML = textarea.value;
    });
  });

  //Main Box 1-2 
  let innerBox2 = document.createElement("div");
  innerBox2.className = "innerBox2 col-6";
  let aDelete = document.createElement("a");
  aDelete.setAttribute("class", "fa fa-trash-o");
  aDelete.innerHTML = "<br>Delete</br>"
  aDelete.style.color = "red";

  // Delete Click Button
  aDelete.addEventListener("click", function () {
    if (confirm("Do you want to delete this item?")) {
      let parentDiv = aDelete.parentNode.parentNode;
      parentDiv.parentNode.removeChild(parentDiv);
      netTotal.textContent = Number(netTotal.textContent) - Number(totalDisplay.innerHTML);
    }
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
    subrBtn.style.color = "black";
    totalDisplay.innerHTML = qtyDisplay.innerHTML * price;
    netTotal.textContent = Number(netTotal.textContent) + price

  });
  // Qty Button Create
  let qtyDisplay = document.createElement("span");
  qtyDisplay.innerHTML = selectQuantity.value;

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
      subrBtn.style.color = "black";
    } else {
      subrBtn.disabled = true;
      subrBtn.style.color = "red";
    }
  });

  // Box Create - 1-4 
  let innerBox4 = document.createElement("div");
  innerBox4.className = "innerBox4 col-6";
  let totalTag = document.createElement("p");
  totalTag.innerHTML = "Total :     $";

  // Total Dispaly Function
  let totalDisplay = document.createElement("span");
  totalDisplay.innerHTML = qtyDisplay.innerHTML * txtInputPrice.value;
  netTotal.textContent = Number(netTotal.textContent) + Number(totalDisplay.innerHTML);


  totalTag.appendChild(totalDisplay);
  innerBox4.appendChild(totalTag);
  qtyTag.appendChild(addBtn);
  qtyTag.appendChild(qtyDisplay);
  qtyTag.appendChild(subrBtn);
  innerBox3.appendChild(qtyTag);
  innerBox2.appendChild(aDelete);
  innerBox1.appendChild(displayName);
  divDynamicBox.appendChild(innerBox1);
  divDynamicBox.appendChild(innerBox2);
  divDynamicBox.appendChild(innerBox3);
  divDynamicBox.appendChild(innerBox4);
  divMain.appendChild(divDynamicBox);
};
// Function For Not letting user to use Empty Space in Input.

function validate(input) {
  if (/^\s/.test(input.value))
    input.value = '';
};
