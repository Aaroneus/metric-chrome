
var lookups = ["KM", "M", "Metre", "Kilometre"];
var body = $("body").html();

for (var i=0; i < lookups.length; i++) {
  var unit = lookups[i];
  var searchTerm = new RegExp("\\b[0-9]+[0-9,-\\s]*\\s?"+unit+"[s]?\\b", "gi");

  var replaced = body.replace(searchTerm,
    function(match, group1, group2, index, original) {
      var valueToBeConverted = "Equivalent to: "+ match.replace(/\D/g,'') + " "+ unit;

      return "<span title='"+valueToBeConverted+"' style='text-transform:uppercase;'>"+match+"</span>";
    });
  body = replaced;
}
$("body").html(body);
