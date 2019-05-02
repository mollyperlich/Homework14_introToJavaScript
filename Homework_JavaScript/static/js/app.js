// Pull from data.js
var tbody = d3.select("tbody");

// YOUR CODE HERE!

// Get reference to the table body 

function build_table() {
    // Clear table
    tbody.html("");
    // Loop through report and load entries 
    data.forEach(function (UFOreport) {
        var row = tbody.append("tr");
        Object.entries(UFOreport).forEach(function ([key, value]) {
            var cell = tbody.append("td").text(value);
        });
    });
};
build_table();

// Select filter button 
var submit = d3.select("#filter-btn");

// Prevent page from refreshing 
submit.on("click", function () {
    d3.event.preventDefault();

    // Get value of input element in datetime 
    var inputValue = d3.select("#datetime").property("value");

    // Clear table
    tbody.html("");

    // Keep track of how many records are added
    var records_added = 0;
    // Loop through each report and load entries into the table
    data.forEach(function (UFOrecord) {
        // If date matches, append the record to the table
        if (inputValue == UFOrecord['datetime']) {
            var row = tbody.append("tr");
            Object.entries(UFOrecord).forEach(function ([key, value]) {
                var cell = tbody.append("td").text(value);
            });
            records_added += 1;
        } else if (inputValue == '') {
            build_table();
        };
    });
    // Send notice if date does not match the records
    if (records_added == 0 && inputValue != '') {
        console.log('This date does not match the data.');
        var row = tbody.append("tr").text('Match does not exist.');
    };
});