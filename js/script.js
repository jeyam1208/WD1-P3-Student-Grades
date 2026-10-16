// Function to display grade equivalents
function showGradeEquivalent() { 

      let student1 = "Anna Reyes";
      let student2 = "Ben Santos";
      let student3 = "Carla Cruz";
      let student4 = "David Lim";
      let student5 = "Ella Ramos";
      

      let grade1 = 92;
      let grade2 = 85;
      let grade3 = 78;
      let grade4 = 97;
      let grade5 = 74;

      let output = "<h2>Grade Equivalents</h2>";
      output = output + "<table>";
      output = output + "<tr>";
      output = output + "<th>Student Name</th>"; 
      output += "<th>Grade</th>"; //Next header is GRADE
      output += "<th>Equivalent</th>"; //Next header is EQUIVALENT
      output += "<th>Remark</th>"; //Next header is REMARK
      output += "<th>Academic Leader</th>"; //Next header is ACADEMIC LEADER
      output = output + "</tr>";

      // Student 1
      let equivalent1 = getEquivalent(grade1); //pass the grade of student 1 to getEquivalent()
      let remark1 = getRemark(grade1); //pass the grade of student 1 to getRemark()
      let leader1 = getAcademicLeader(equivalent1); //pass the equivalent value of student 1 to getAcademicLeader()

      output = output + "<tr>";
      output = output + "<td>" + student1 + "</td>";
      output += "<td>" + grade1 + "</td>"; // this as new data grade
      output += "<td>" + equivalent1 + "</td>"; //equivalent value
      output += "<td>" + remark1 + "</td>"; //remark value
      output += "<td>" + leader1 + "</td>"; //academic class
      output = output + "</tr>";

      // Student 2
      let equivalent2 = getEquivalent(grade2); //do imitate the process to student 1
      let remark2 = getRemark(grade2);
      let leader2 = getAcademicLeader(equivalent2);

      output = output + "<tr>";
      output = output + "<td>" + student2 + "</td>";
      output += "<td>" + grade2 + "</td>"; // this as new data grade
      output += "<td>" + equivalent2 + "</td>"; //equivalent value
      output += "<td>" + remark2 + "</td>"; //remark value
      output += "<td>" + leader2 + "</td>"; //academic class
      output = output + "</tr>";

      // Student 3
      let equivalent3 = getEquivalent(grade3); //do imitate the process to student 1
      let remark3 = getRemark(grade3); //do imitate the process to student 1
      let leader3 = getAcademicLeader(equivalent3); //do imitate the process to student 1

      output = output + "<tr>";
      output = output + "<td>" + student3 + "</td>";
      output += "<td>" + grade3 + "</td>"; // this as new data grade
      output += "<td>" + equivalent3 + "</td>"; //equivalent value
      output += "<td>" + remark3 + "</td>"; //remark value
      output += "<td>" + leader3 + "</td>"; //academic class
      output = output + "</tr>";

      // Student 4
      let equivalent4 = getEquivalent(grade4); //do imitate the process to student 1
      let remark4 = getRemark(grade4); //do imitate the process to student 1
      let leader4 = getAcademicLeader(equivalent4); //do imitate the process to student 1

      output = output + "<tr>";
      output = output + "<td>" + student4 + "</td>";
      output += "<td>" + grade4 + "</td>"; // this as new data grade
      output += "<td>" + equivalent4 + "</td>"; //equivalent value
      output += "<td>" + remark4 + "</td>"; //remark value
      output += "<td>" + leader4 + "</td>"; //academic class
      output = output + "</tr>";

      // Student 5
      let equivalent5 = getEquivalent(grade5); //do imitate the process to student 1
      let remark5 = getRemark(grade5); //do imitate the process to student 1
      let leader5 = getAcademicLeader(equivalent5); //do imitate the process to student 1

      output = output + "<tr>";
      output = output + "<td>" + student5 + "</td>";
      output += "<td>" + grade5 + "</td>"; // this as new data grade
      output += "<td>" + equivalent5 + "</td>"; //equivalent value
      output += "<td>" + remark5 + "</td>"; //remark value
      output += "<td>" + leader5 + "</td>"; //academic class
      output = output + "</tr>";

      output += "</table>";

      //show the output result inside the html
            document.getElementById("result").innerHTML = output; 
    }

    function getRemark(grade) {

      // Ternary operator
      let remark = (grade >= 75) ? "Passed" : "Failed";

      return remark;
    }

    function getEquivalent(grade) {

      let equivalent = "";

      if (grade >= 97) {
      	equivalent = "1.0";
      } else if (grade >= 94) {
	equivalent = "1.25";
      } else if (grade >= 91) {
	equivalent = "1.5";
      } else if (grade >= 88) {
	equivalent = "1.75";
      } else if (grade >= 85) {
	equivalent = "2.0";
      } else if (grade >= 82) {
	equivalent = "2.25";
      } else if (grade >= 79) {
	equivalent = "2.5";
      } else if (grade >= 76) {
     	equivalent = "2.75";
     } else if (grade >= 75) {
	equivalent = "3.0";
     } else {
	equivalent = "Failed";
     }

    
      return equivalent;
    }

    function getAcademicLeader(equivalent) {

      let leader = "";

      switch (equivalent) {

	case "1.0":
	case "1.25":
		leader = "1st Class Academic Leader";
		break;

	case "1.5":
		leader = "2nd Class Academic Leader";
		break;

	case "1.75":
		leader = "3rd Class Academic Leader";
		break;

	default:
		leader = "-";
		break;
       }
       return leader;


    }
