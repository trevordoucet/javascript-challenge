// from data.js, part 1
var tableData = data;
 var tbody = d3.select("#ufo-table").select("tbody");
    tbody.html("");

    tableData.forEach((sight) => {
        var row = tbody.append("tr");
        Object.entries(sight).forEach(([key, value]) => {
            var cell= row.append("td");
            cell.text(value);
         });
    });

var button = d3.select("#filter-btn");
var form = d3.select("#form-group");
button.on("click", runEnter);
form.on("submit", runEnter);


function runEnter() {

    d3.event.preventDefault();
    
    var inputElement1 = d3.select("#datetime");
    var inputElement2 = d3.select("#city");
    var inputElement3 = d3.select("#state");
    var inputElement4 = d3.select("#country");
    var inputElement5 = d3.select("#shape");

    var inputValue1 =  inputElement1.property("value");
    var inputValue2 =  inputElement2.property("value");
    var inputValue3 =  inputElement3.property("value");
    var inputValue4=  inputElement4.property("value");
    var inputValue5 =  inputElement5.property("value");

    var filter = tableData;
    console.log(filter);

    if (inputValue1 != "") {
        filter = filter.filter(sight => sight.datetime == inputValue1);
        console.log(filter)
    }

    if (inputValue2 != "") {
        filter = filter.filter(sight => sight.city == inputValue2);
        console.log(filter)
    }

    if (inputValue3 != "") {
        filter = filter.filter(sight => sight.state == inputValue3);
        console.log(filter)
    }

    if (inputValue4 != "") {
        filter = filter.filter(sight => sight.country == inputValue4);
        console.log(filter)
    }

    if (inputValue5 != "") {
        filter = filter.filter(sight => sight.shape== inputValue5);
        console.log(filter)
    }

    console.log(filter);

    
    var tbody = d3.select("#ufo-table").select("tbody");
    tbody.html("");

    filter.forEach((sight) => {
        var row = tbody.append("tr");
        Object.entries(sight).forEach(([key, value]) => {
            var cell= row.append("td");
            cell.text(value);
    });
}); }



