/**
 * Making cross site requets using fetch API
 */


//Get Root Element
const root = document.getElementById("root");
root.setAttribute("class", "container");


//Create Heading
const heading = document.createElement("h1");
heading.innerHTML = "Profiles";

//Render heading to root
root.appendChild(heading)

//Display profiles in table
const tableContainer = document.createElement("div");

//Create table
const table = document.createElement("table");
table.setAttribute("class", "table table-borderless table-striped")

//Create table head
const tableHead = document.createElement("thead");

//Create table body
const tableBody = document.createElement("tbody");

//Create table row
const tableRow = document.createElement("tr");



fetch("./profiles.json").then((res) => {
    res.json().then((data) => {
        console.log(data);

        for (let x in data) {
            for (let i in data[x]) {
                if (x == 1) {
                    let theads = Object.keys(data[x])
                    theads.forEach(th => {
                        let thead = document.createElement("th");
                        thead.innerHTML = th.toUpperCase();
                        tableRow.appendChild(thead)
                        tableHead.appendChild(tableRow);
                    })
                    break;
                }
            }
        }
        for (let x in data) {
            let tdata = Object.keys(data[x]);
            let trow = document.createElement("tr");
            tdata.forEach(tr => {
                let tcell = document.createElement("td");
                tcell.innerHTML = data[x][tr];
                trow.append(tcell);
                tableBody.append(trow);
            })
        }
        table.appendChild(tableHead);
        table.append(tableBody)
        root.appendChild(table);
    })
})