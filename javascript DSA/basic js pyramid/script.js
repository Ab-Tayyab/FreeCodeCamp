const character = "#";
const count = 8;
const rows = [];
let inverted = true;
let result = ""

function padRow(rowNumber, rowCount) {
    return "&nbsp&nbsp".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1);
}

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.push(padRow(i, count));
    } else {
        rows.unshift(padRow(i, count));
    }
}


for (const row of rows) {
    result = result + row + "<br>";
}

document.write(result );