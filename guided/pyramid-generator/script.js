function padRow(rowNumber, rowCount, character) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}



function pyramid_generator() {
    alert("Started Pyramid Generator program...\n")
    const character = prompt("What character would you like to use:")[0];
    const count = +prompt("How many rows would you like:");
    const rows = [];
    let inverted = prompt("Would you like it to be inverted? (y/n)").toLowerCase() === "y" ? true : false;
    
    for (let i = 1; i <= count; i++) {
        if (inverted) {
            rows.unshift(padRow(i, count, character));
        } else {
            rows.push(padRow(i, count, character));
        }
    }
    
    let result = ""
    for (const row of rows) {
        result = result + "\n" + row;
    }

    alert(result);
}