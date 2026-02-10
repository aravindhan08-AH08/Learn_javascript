let student = {
  name: "John",
  age: 18,
  marks: [80, 75, 90, 85, 67],

  displayDetails: function () {
    console.log("Students Detils");
    console.log("Name: ", student.name);
    console.log("Age: ", student.age);
    console.log("Marks: ", student.marks);
  },

  setAverageMarks: function () {
    let total = 0;

    for (let i = 0; i < student.marks.length; i++) {
      total += student.marks[i];
    }

    let average = total / student.marks.length;
    console.log("Average Marks: ", average);
  },
};

student.displayDetails();
student.setAverageMarks();