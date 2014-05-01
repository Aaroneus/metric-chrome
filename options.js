
function save_options() {
  var select = document.getElementById("length");
  var length = getElementValue(select);

  select = document.getElementById("area");
  var area = getElementValue(select);
  select = document.getElementById("volume");
  var volume = getElementValue(select);
  select = document.getElementById("weight");
  var weight = getElementValue(select);
  select = document.getElementById("time");
  var time = getElementValue(select);
  select = document.getElementById("temperature");
  var temperature = getElementValue(select);
  select = document.getElementById("speed");
  var speed = getElementValue(select);

  var preferences = [
    {'measures': 'length', 'preference': length},
    {'measures': 'area', 'preference': area},
    {'measures': 'volume', 'preference': volume},
    {'measures': 'weight', 'preference': weight},
    {'measures': 'time', 'preference': time},
    {'measures': 'temperature', 'preference': temperature},
    {'measures': 'speed', 'preference': speed}
  ];

  var accName = 'metric_preferences';
  var obj = {};
  obj[accName] = preferences;


  chrome.storage.sync.set(obj, function(){
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function() {
      status.innerHTML = "";
    }, 750);
  });
}

function getElementValue(element){
  return element.children[element.selectedIndex].value;
}

// Restores select box state to saved value from localStorage.
function restore_options() {

  var accName = 'metric_preferences';
  var selected_value;

  chrome.storage.sync.get(accName, function(data){
    var val = data[accName];
    for(var i=0; i<val.length; i++ ){
      var preference = val[i];
      var select = document.getElementById(preference.measures);
      for (var j = 0; j < select.children.length; j++) {
        var child = select.children[j];
        if (child.value == preference.preference) {
          child.selected = "true";
          break;
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
