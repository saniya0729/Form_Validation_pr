function myform() {
  name = document.forms["form1"]["fname"].value;
  pass = document.forms["form1"]["pwd"].value;

  if (name == "") {
    alert("⚠Please enter username.. ❗");
  }
  
  if (pass == "") {
    alert("⚠Please enter password.. ❗");
  }
}

// let myform = document.getElementById("submit");
// myform.addEventListener("click", function () {
  //   name = document.forms["form1"]["fname"].value;
//   if (name == "") {
//     alert("Please enter username..");
//   }
// });
