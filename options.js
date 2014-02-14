
function save_options() {
  var select = document.getElementById("length");
  var length = select.children[select.selectedIndex].value;

  var preferences = {};
  preferences['length'] = length;
  // try{
  //   localStorage.setItem("length", length);
  // } catch(e){
  //   if(e == QUOTA_EXCEEDED_ERR){
  //     alert(‘Quota exceeded!’); //data wasn’t successfully saved due to quota exceed so throw an error
  //   }
  // }

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  // debugger
  var selected_value = localStorage.getItem("length");
  if (!selected_value) {
    return;
  }
  var select = document.getElementById("length");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == selected_value) {
      child.selected = "true";
      break;
    }
  }
  alert("Length value was "+ selected_value);
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
