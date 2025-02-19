
**Program to Create a Unique Secret Santa**  

Secret Santa is a game played in teams. Each participant is assigned another person as their **Secret Child**, to whom they will anonymously assign secret tasks and give gifts during the event. This program generates Secret Santa assignments for employees of a company.  

The game can be accessed at  https://shinysherbina.github.io/secret-santa/

### **Assumptions:**  
**Input:** A CSV file containing the following fields:  
- **Employee_Name**: The name of the employee.  
- **Employee_EmailID**: The email ID of the employee.  

**Output:** A CSV file containing the following fields:  
- **Employee_Name**: The name of the employee.  
- **Employee_EmailID**: The email ID of the employee.  
- **Secret_Child_Name**: The assigned Secret Child's name.  
- **Secret_Child_EmailID**: The assigned Secret Child's email ID.  

This program is built using plain **HTML, CSS, and JavaScript**.  

---

### **How to Run the Program**  
1. Visit [[URL]](https://shinysherbina.github.io/secret-santa/) or download the code files.  
2. Open `index.html` in your browser.  
3. Upload the employee file (CSV) in the specified format by clicking the **"Choose File"** button labeled **"Employee File"**.  
4. If available, upload the previous year's Secret Santa file (CSV) in the specified output format by clicking the **"Choose File"** button labeled **"Previous Year Secret Santa File"**.  
5. Click the **"Generate Secret Santa"** button.  
6. Two new buttons will appear under the **"Download Files"** section:  
   - **SS File** – The final output file in the specified format.  
   - **Test File** – A version of the output file with an additional column, **"Prev_Secret_Child_EmailID"**, to help validate the results.  
7. The generated data is also displayed in a table format on the side.  

For more details:  
Refer Docs folder for
- **Design_document.txt** explains the program's implementation.  
- **Test_document.txt** provides test case information.
Refer **source folder** for sample source files.

**Happy Playing!** 🎉
