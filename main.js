var employee = [];
var prevSS = [];
var emailExt = "acme.com";
var indexCol = 1;
var emailCol = [];
var ssArr = [];
var testArr = [];

function handleFileUpload(inputId) {
  const file = new HandleFile(inputId);
  file.readFile((data) => {
    if (data[0][0] === "Employee_Name") data.splice(0, 1); // remove header
    emailCol = inputId === "employeeFile" ? [1] : [1, 3]; // All the columns to be validated for email
    const isValid = file.validityCheck(data, inputId, emailExt, emailCol); //validity check
    if (isValid) {
      // store only if data is valid
      if (inputId === "employeeFile") {
        employee = [];
        employee = data;
      } else if (inputId === "prevSSFile") {
        prevSS = [];
        prevSS = data;
      }
    }
  });
}

function shuffleArray(array) {
  // shuffle the array for better assignments
  var arr = [...array];
  for (var i = 0; i < arr.length; i++) {
    var j = Math.floor(Math.random() * array.length);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateSS() {
  var empArr = shuffleArray(employee);
  ssArr = [];
  testArr = [];

  // output header
  ssArr.push([
    "Employee_Name",
    "Employee_EmailID",
    "Secret_Child_Name",
    "Secret_Child_EmailID",
  ]);

  // test header
  testArr.push([
    "Employee_Name",
    "Employee_EmailID",
    "Secret_Child_Name",
    "Secret_Child_EmailID",
    "Prev_Secret_Child_EmailID",
  ]);

  for (var i = 0; i < employee.length; i++) {
    var ss = empArr.pop();
    var ssPrev = null;
    var emp = employee[i][indexCol]; // email id is taken for comparison as it would be unique

    if (prevSS.length > 0) {
      var index = prevSS.findIndex((row) => row[indexCol] === emp);

      if (index >= 0) ssPrev = prevSS[index][3]; // email id of prev Secret santa if found
    }

    while (emp === ss[indexCol] || ssPrev === ss[indexCol]) {
      // current ss != the same person OR prev ss
      empArr.unshift(ss);
      ss = empArr.pop();
    }
    // console.log(`${emp} ,${ssPrev}, ${ss}`);
    let row = employee[i].concat(ss);
    // console.log(row);

    let test = row.concat(ssPrev);
    // console.log(ssPrev);
    ssArr.push(row);
    testArr.push(test);
  }
  displayTable(ssArr);
}

function downloadFile(fileType) {
  if (fileType === "ss") {
    downloadCSV(ssArr, "ss.csv");
  }
  if (fileType === "test") {
    downloadCSV(testArr, "test.csv");
  }
}

function displayTable(data) {
  //display right panel
  const rp = document.getElementsByClassName("right-panel");
  if (rp.length > 0) {
    rp[0].style.display = "flex";
  }

  //display download buttons
  const df = document.getElementsByClassName("download-panel");
  if (df.length > 0) {
    df[0].style.display = "flex";
  }

  const table = document.getElementById("outputTable");

  // Clear previous table data
  table.innerHTML = "";

  // Generate table rows
  data.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");

    row.forEach((cell) => {
      const cellElement =
        rowIndex === 0
          ? document.createElement("th")
          : document.createElement("td");
      cellElement.textContent = cell;
      tr.appendChild(cellElement);
    });

    table.appendChild(tr);
  });
}

function downloadCSV(data, filename = "output.csv") {
  const csvContent = data.map((row) => row.join(",")).join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });

  // Create a temporary anchor element
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename; // Set the filename for download

  // Trigger download
  document.body.appendChild(link);
  link.click();

  // Cleanup
  document.body.removeChild(link);
}
