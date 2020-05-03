/*
//using Jquery
$("#getGroceryItems").click(function() {
    $.getJSON("grocery_items.json", function(obj) {
        $.each(obj, function(key, value) {
            $("#display-data").append('<tr>' +
                '<td>' + value.siNo + '</td>' +
                '<td>' + value.name + '</td>' +
                '<td>' + value.quantity + '</td>' +
                '<td>' + value.unit + '</td>' +
                '<td>' + value.department + '</td>' +
                '<td>' + value.notes + '</td>' +
                '</tr');
        });
    });
});
*/

//datatable Jquery
$("#getGroceryItems").click(function() {
    $('#groceryTable').DataTable({
        "ajax": "grocery_items.json",
        "columns": [
            { "data": "siNo" },
            { "data": "name" },
            { "data": "quantity" },
            { "data": "unit" },
            { "data": "department" },
            { "data": "notes" }
        ]
    });
});

// normal XHR ajax
function displayList() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var result = "";
            for (var i = 0; i < response.length; i++) {
                result += "<tr>\n";
                result += "<td>" + response[i].siNo + "</td>\n";
                result += "<td>" + response[i].name + "</td>\n";
                result += "<td>" + response[i].quantity + "</td>\n";
                result += "<td>" + response[i].unit + "</td>\n";
                result += "<td>" + response[i].department + "</td>\n";
                result += "<td>" + response[i].notes + "</td>\n";
                result += "</tr>\n";
            }
            document.querySelector("#xhrAjaxTable").innerHTML = result;
        }
    };
    xhttp.open("GET", "./grocery.json", true);
    xhttp.send();
}