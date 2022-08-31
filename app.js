function Employeedata(id, ename, fname, email, designation, exp, salary ) {
    this.id = id;
    this.ename = ename;
    this.fname = fname;
    this.email =email;
    this.designation = designation;
    this.exp = exp;
    this.salary = salary;
}

var employee1 = new Employeedata("123445", "Huzaifa", "Habib", "fake@gmail.com", "Assistant Manager", "7 Years", "Rs.80000" );
var employee2 = new Employeedata("163475", "Ali", "Ahmed", "fake2@gmail.com", "Executive", "5 Years", "Rs.60000" );
var employee3 = new Employeedata("104545", "Mohsin", "Abbas", "fake3@gmail.com", "Director", "5 Years", "Rs.50000" );
var employee4 = new Employeedata("196766", "Shaheer", "Akhther", "fake4@gmail.com", "Coordinator", "3 Years", "Rs.30000" );


var mainDiv = document.getElementById("mainContainer");
var heading = document.createElement("h1");
var headingTxt =document.createTextNode("Employee Table")

var table = document.createElement("table");
var firstTr = document.createElement("tr");
var firstTrTh1 = document.createElement("th");
var firstTrTh1Txt = document.createTextNode("ID");

var firstTrTh2 = document.createElement("th");
var firstTrTh2Txt = document.createTextNode("Employee Name");

var firstTrTh3 = document.createElement("th");
var firstTrTh3Txt = document.createTextNode("Father Name");

var firstTrTh4 = document.createElement("th");
var firstTrTh4Txt = document.createTextNode("Email");

var firstTrTh5 = document.createElement("th");
var firstTrTh5Txt = document.createTextNode("Designation");

var firstTrTh6 = document.createElement("th");
var firstTrTh6Txt = document.createTextNode("Experience");

var firstTrTh7 = document.createElement("th");
var firstTrTh7Txt = document.createTextNode("Salary");


var secondTr = document.createElement('tr');
var secondTrTd1 = document.createElement("td");
var secondTrTd1Txt = document.createTextNode(employee1.id);

var secondTrTd2 = document.createElement("td");
var secondTrTd2Txt = document.createTextNode(employee1.ename);

var secondTrTd3 = document.createElement("td");
var secondTrTd3Txt = document.createTextNode(employee1.fname);

var secondTrTd4 = document.createElement("td");
var secondTrTd4Txt = document.createTextNode(employee1.email);

var secondTrTd5 = document.createElement("td");
var secondTrTd5Txt = document.createTextNode(employee1.designation);

var secondTrTd6 = document.createElement("td");
var secondTrTd6Txt = document.createTextNode(employee1.exp);

var secondTrTd7 = document.createElement("td");
var secondTrTd7Txt = document.createTextNode(employee1.salary);


var thirdTr = document.createElement("tr");
var thirdTrTd1 = document.createElement("td");
var thirdTrTd1Txt = document.createTextNode(employee2.id)

var thirdTrTd2 = document.createElement("td");
var thirdTrTd2Txt = document.createTextNode(employee2.ename)

var thirdTrTd3 = document.createElement("td");
var thirdTrTd3Txt = document.createTextNode(employee2.fname)

var thirdTrTd4 = document.createElement("td");
var thirdTrTd4Txt = document.createTextNode(employee2.email)

var thirdTrTd5 = document.createElement("td");
var thirdTrTd5Txt = document.createTextNode(employee2.designation)

var thirdTrTd6 = document.createElement("td");
var thirdTrTd6Txt = document.createTextNode(employee2.exp)

var thirdTrTd7 = document.createElement("td");
var thirdTrTd7Txt = document.createTextNode(employee2.salary)



var fourthTr = document.createElement("tr");
var fourthTrTd1 = document.createElement("td");
var fourthTrTd1Txt = document.createTextNode(employee3.id);

var fourthTrTd2 = document.createElement("td");
var fourthTrTd2Txt = document.createTextNode(employee3.ename);

var fourthTrTd3 = document.createElement("td");
var fourthTrTd3Txt = document.createTextNode(employee3.fname);

var fourthTrTd4 = document.createElement("td");
var fourthTrTd4Txt = document.createTextNode(employee3.email);

var fourthTrTd5 = document.createElement("td");
var fourthTrTd5Txt = document.createTextNode(employee3.designation);

var fourthTrTd6 = document.createElement("td");
var fourthTrTd6Txt = document.createTextNode(employee3.exp);

var fourthTrTd7 = document.createElement("td");
var fourthTrTd7Txt = document.createTextNode(employee3.salary);




var fifthTr = document.createElement("tr");
var fifthTrTd1 = document.createElement("td");
var fifthTrTd1Txt = document.createTextNode(employee4.id);

var fifthTrTd2 = document.createElement("td");
var fifthTrTd2Txt = document.createTextNode(employee4.ename);

var fifthTrTd3 = document.createElement("td");
var fifthTrTd3Txt = document.createTextNode(employee4.fname);

var fifthTrTd4 = document.createElement("td");
var fifthTrTd4Txt = document.createTextNode(employee4.email);

var fifthTrTd5 = document.createElement("td");
var fifthTrTd5Txt = document.createTextNode(employee4.designation);

var fifthTrTd6 = document.createElement("td");
var fifthTrTd6Txt = document.createTextNode(employee4.exp);

var fifthTrTd7 = document.createElement("td");
var fifthTrTd7Txt = document.createTextNode(employee4.salary)












mainDiv.appendChild(heading);
heading.appendChild(headingTxt);




mainDiv.appendChild(table);
table.appendChild(firstTr);
firstTr.appendChild(firstTrTh1);
firstTrTh1.appendChild(firstTrTh1Txt);
firstTr.appendChild(firstTrTh2);
firstTr.appendChild(firstTrTh3);
firstTr.appendChild(firstTrTh4);
firstTr.appendChild(firstTrTh5);
firstTr.appendChild(firstTrTh6);
firstTr.appendChild( firstTrTh7);
firstTrTh2.appendChild(firstTrTh2Txt);
firstTrTh3.appendChild(firstTrTh3Txt),
firstTrTh4.appendChild(firstTrTh4Txt);
firstTrTh5.appendChild(firstTrTh5Txt);
firstTrTh6.appendChild(firstTrTh6Txt);
firstTrTh7.appendChild(firstTrTh7Txt);


table.appendChild(secondTr);
secondTr.appendChild(secondTrTd1);
secondTrTd1.appendChild(secondTrTd1Txt);
secondTr.appendChild(secondTrTd2);
secondTrTd2.appendChild(secondTrTd2Txt);
secondTr.appendChild(secondTrTd3);
secondTrTd3.appendChild(secondTrTd3Txt);
secondTr.appendChild(secondTrTd4);
secondTrTd4.appendChild(secondTrTd4Txt);
secondTr.appendChild(secondTrTd5);
secondTrTd5.appendChild(secondTrTd5Txt);
secondTr.appendChild(secondTrTd6);
secondTrTd6.appendChild(secondTrTd6Txt);
secondTr.appendChild(secondTrTd7);
secondTrTd7.appendChild(secondTrTd7Txt);


table.appendChild(thirdTr);
thirdTr.appendChild(thirdTrTd1);
thirdTrTd1.appendChild(thirdTrTd1Txt);
thirdTr.appendChild(thirdTrTd2);
thirdTrTd2.appendChild(thirdTrTd2Txt)
thirdTr.appendChild(thirdTrTd3);
thirdTrTd3.appendChild(thirdTrTd3Txt);
thirdTr.appendChild(thirdTrTd4);
thirdTrTd4.appendChild(thirdTrTd4Txt);
thirdTr.appendChild(thirdTrTd5);
thirdTrTd5.appendChild(thirdTrTd5Txt);
thirdTr.appendChild(thirdTrTd6);
thirdTrTd6.appendChild(thirdTrTd6Txt);
thirdTr.appendChild(thirdTrTd7);
thirdTrTd7.appendChild(thirdTrTd7Txt);




table.appendChild(fourthTr);
fourthTr.appendChild(fourthTrTd1);
fourthTrTd1.appendChild(fourthTrTd1Txt);
fourthTr.appendChild(fourthTrTd2);
fourthTrTd2.appendChild(fourthTrTd2Txt)
fourthTr.appendChild(fourthTrTd3);
fourthTrTd3.appendChild(fourthTrTd3Txt);
fourthTr.appendChild(fourthTrTd4);
fourthTrTd4.appendChild(fourthTrTd4Txt);
fourthTr.appendChild(fourthTrTd5);
fourthTrTd5.appendChild(fourthTrTd5Txt);
fourthTr.appendChild(fourthTrTd6);
fourthTrTd6.appendChild(fourthTrTd6Txt);
fourthTr.appendChild(fourthTrTd7);
fourthTrTd7.appendChild(fourthTrTd7Txt);



table.appendChild(fifthTr);
fifthTr.appendChild(fifthTrTd1);
fifthTrTd1.appendChild(fifthTrTd1Txt);
fifthTr.appendChild(fifthTrTd2);
fifthTrTd2.appendChild(fifthTrTd2Txt)
fifthTr.appendChild(fifthTrTd3);
fifthTrTd3.appendChild(fifthTrTd3Txt);
fifthTr.appendChild(fifthTrTd4);
fifthTrTd4.appendChild(fifthTrTd4Txt);
fifthTr.appendChild(fifthTrTd5);
fifthTrTd5.appendChild(fifthTrTd5Txt);
fifthTr.appendChild(fifthTrTd6);
fifthTrTd6.appendChild(fifthTrTd6Txt);
fifthTr.appendChild(fifthTrTd7);
fifthTrTd7.appendChild(fifthTrTd7Txt);





