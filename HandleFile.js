// Reads file and does validity check
// Assumption : 2nd and 4th(if available) columns are email-ids

class HandleFile {
  constructor(inputId) {
    this.inputId = inputId;
  }

  // Function to read the file
  //--------------------------
  readFile(callback = null) {
    const inputFile = document.getElementById(this.inputId);
    try {
      // Check 1 : File selected
      if (!inputFile.files.length) {
        alert("Please select a file");
        return;
      }

      const file = inputFile.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const text = e.target.result;
          const rows = text
            .split("\n")
            .filter((row) => row.trim() !== "") // Filter out empty lines
            .map((row) =>
              row.split(",").map((value) => value.replace(/\r/g, "").trim())
            );

          if (callback) callback(rows);
        } catch (error) {
          console.error("Error processing file", error);
          alert("Error processing file.");
        }
      };
      reader.readAsText(file);
    } catch (error) {
      console.error("Error while reading the file", error);
      alert("Error while reading.");
    }
  }

  // data validity check
  //--------------------

  validityCheck(data, inputId, emailExt = null, emailCol) {
    try {
      const emailRegex =
        emailExt === null
          ? /^[^\s@.][^\s@]+@[^\s@]+\.[^\s@.]{2,}$/ // general email format
          : new RegExp(`^[^\\s@]+@${emailExt}$`); // specific company extension
      var check = true;
      var flag = false;

      for (var i = 0; i < data.length; i++) {
        var row = data[i];

        for (var j = 0; j < emailCol.length; j++) {
          check = emailRegex.test(row[emailCol[j]]);
        }

        if (!check) {
          flag = true;
          console.log(`Corrupt data in ${inputId} row ${i}`);
          console.log(row);
          // alert(`Corrupt data. Check log for details`);
        }
      }
      if (flag) {
        alert("Corrupt data. Check log for details");
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error during validity check:", error);
      alert(
        "An error occurred during validation. Check the console for details."
      );
    }
  }
}
