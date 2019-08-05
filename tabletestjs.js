// let mountains = [
//     { name: window.idnum, height: 1658, place: "Parco Foreste Casentinesi" },
//     { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
//     { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
//     { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
//     { name: "Monte Amiata", height: 1738, place: "Siena" }
// ];
//
// function generateTableHead(table, data) {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of data) {
//         let th = document.createElement("th");
//         let text = document.createTextNode(key);
//         th.appendChild(text);
//         row.appendChild(th);
//     }
// }
//
// function generateTable(table, data) {
//     for (let element of data) {
//         let row = table.insertRow();
//         for (key in element) {
//             let cell = row.insertCell();
//             let text = document.createTextNode(element[key]);
//             cell.appendChild(text);
//         }
//     }
// }
//
// let table = document.querySelector("table");
// let data = Object.keys(mountains[0]);
// generateTable(table, mountains);
// generateTableHead(table, data);



var objectToCSVRow = function(dataObject) {
    var dataArray = new Array;
    for (var o in dataObject) {
        var innerValue = dataObject[o]===null?'':dataObject[o].toString();
        var result = innerValue.replace(/"/g, '""');
        result = '"' + result + '"';
        dataArray.push(result);
    }
    return dataArray.join(' ') + '\r\n';
};

var exportToCSV = function(arrayOfObjects) {

    if (!arrayOfObjects.length) {
        return;
    }

    var csvContent = "data:text/csv;charset=utf-8,";

    // headers
    csvContent += objectToCSVRow(Object.keys(arrayOfObjects[0]));

    arrayOfObjects.forEach(function(item){
        csvContent += objectToCSVRow(item);
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "customers.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
    document.body.removeChild(link);
}

exportToCSV();