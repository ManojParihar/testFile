import fs from "fs"
var SAGAfields = ["id", "name", "time"];
function Add() {
        let jsonData = document.getElementById("favourite").value;
       jsonData = JSON.parse(jsonData);
       const a= f(jsonData);
       console.log(a);
       var ddl = document.createElement("SELECT");
       for (const i in a) {
       var option = document.createElement("OPTION");
        option.innerHTML = a[i];
        console.log(i);
         option.value = a[i];
        ddl.options.add(option);
       }
    var br = document.createElement("br");
    var form = document.createElement("form");
    form.setAttribute("onsubmit", "submitFormData(this)");
    for(const i in SAGAfields) {
        var addText = document.createTextNode(SAGAfields[i]);
        var addSelect = document.createElement("SELECT");
        addSelect = ddl.cloneNode(true);
        addSelect.setAttribute("name", SAGAfields[i]);
        form.appendChild(addText);
        form.appendChild(addSelect);
        form.appendChild(br.cloneNode(true));
    }
    var sub = document.createElement("input");
    sub.setAttribute("type", "submit");
    sub.setAttribute("value", "Submit");
    form.appendChild(sub);
    document.getElementById("formID").appendChild(form);
    document.getElementById("click me").style.display = "none";
     }
const f=o=>Object.keys(o+''===o||o||0).flatMap(k=>[k,...f(o[k]).map(i=>k+'.'+i)])

function submitFormData(that) {
    fs.writeFile("output.json", that.id.value, (err) => {
        if (err) throw err;
    })
}

function addNewRaw() {
    var op = document.createElement("SELECT");
    var getlist = document.getElementById('myList');
    op = getlist;
    document.getElementById("sagafield").appendChild(op);
}
console.log('App started');
// var button = document.getElementById("click me");
// console.log(button.innerHTML);
// button.onclick = Add;
