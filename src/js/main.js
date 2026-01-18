let btn = document.getElementById('btn');
btn.addEventListener('click', table);

function table() {
    let inp = document.getElementById('inp');
    
    
    // // let inp = document.getElementById('inp');
    // // let num = Number(inp.value);
    // // inp.value = "";

    // // let ul = document.getElementById("ou-ul");
    // // ul.innerHTML = ""; // clear old table

    // // let tableColor = (num % 2 === 0) ? "green" : "red";

    // // let i = 1;
    // // while (i <= 10) {
    // //     let tab = num * i;

    // //     let list = document.createElement('li');
    // //     list.textContent = num + " * " + i + " = " + tab;

    // //     list.style.color = tableColor;

    // //     ul.appendChild(list);
    // //     i++;
    // }
}

let btn2 = document.getElementById('btn-2');
btn2.addEventListener('click', clearTable);

function clearTable() {
    document.getElementById("ou-ul").innerHTML = "";
}
