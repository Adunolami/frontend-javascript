// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two Student objects
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York',
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles',
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Function to render the table in HTML
  function renderTable(students: Student[]) {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
  
    const firstNameHeader = headerRow.insertCell();
    firstNameHeader.textContent = 'First Name';
  
    const locationHeader = headerRow.insertCell();
    locationHeader.textContent = 'Location';
  
    // Append a row for each student
    students.forEach(student => {
      const row = table.insertRow();
      
      const firstNameCell = row.insertCell();
      firstNameCell.textContent = student.firstName;
  
      const locationCell = row.insertCell();
      locationCell.textContent = student.location;
    });
    document.body.appendChild(table);
  }
  // Call the render function
  renderTable(studentsList);  