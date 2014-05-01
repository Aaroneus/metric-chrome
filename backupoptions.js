
function save_options() {
  var select = document.getElementById("length");
  var length = select.children[select.selectedIndex].value;


  var preferences = {};
  preferences['length'] = length;

  var accName = 'length';
  var obj = {};
  obj[accName] = length;


  chrome.storage.sync.set(obj, function(){
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function() {
      status.innerHTML = "";
    }, 750);
  });
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  debugger
  var accName = 'length';
  var selected_value;

  chrome.storage.sync.get(accName, function(data){
    var val = data[accName];
    alert("Retrieved: "+val);
    selected_value = val;

    if (!selected_value) {
      alert("selected_value is false");
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
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
