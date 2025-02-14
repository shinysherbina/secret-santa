# secret-santa
Program to create unique Secret Santa 

Secret Santa is a game played in teams. Here a person will choose another person as their secret child, to whom they will anonymously assign secret tasks and give gifts during the event. This program generates secret santa for the employees of a company.

Assumption:
Input : CSV file of the employees with the follwing fields
*  Employee_Name: The name of the employee.
*  Employee_EmailID: The email ID of the employee.

Output: CSV file with the following fields
* Employee_Name: The name of the employee.
* Employee_EmailID: The email ID of the employee.
* Secret_Child_Name: The name of the employee.
* Secret_Child_EmailID: The email ID of the employee.

This program uses plain HTML, CSS and Javascript.

To run the program, 
* Go to .....or download the code files.
* Open index.html in the browser
* Upload the employee file in the format specified above by clicking the button "Choose File" with the label "Employee File"
* Upload the previous year secret santa file if available, in the format of output specified, above by clicking the button "Choose File" with the label "Previous year Secret
  Santa file"
* Click "Generate Secret Santa" button
* Two new buttons would be available under the heading "Download files"
  - SS File - This is the actual output in the format specified above
  - Test File - This contains the additional column  "Prev_Secret_Child_EmailID" to make it easy to validate the results
* The data is also displayed in the table format in the side.
  
 The code is explained in **Design_document.txt.**
The test document is present in **Test_document.txt**


Happy playing.
