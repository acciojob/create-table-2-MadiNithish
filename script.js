function createTable() {
    //Write your code here
	const rn = Number(prompt("Input number of rows"));
	const cn = Number(prompt("Input number of columns"));
	const table = document.getElementById("myTable");
  table.innerHTML = "";
	for(let i = 0; i<rn; i++){
		const row = table.insertRow();
		for(let j=0; j<cn; j++){
			const cell = row.insertCell();
			cell.innerHTML = `Row-${i} Column-${j}`;
		}
	}
}
