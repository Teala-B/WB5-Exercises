let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
];


function findCourse(classes) {
    return classes.CourseId == "PROG200";
}

let startTime = courses.find(findCourse).StartDate;
console.table("The start date of PROG200 is " + startTime);


function findName(classes) {
    return classes.CourseId == "PROJ500";
}

let courseName = courses.find(findName).Title;
console.table("The name of PROJ500 is " + courseName);

function filterByPrice(classes) {
    return classes.Fee == "50.00";
    // lessCost = parseInt(courses.Fee)
    // if(lessCost <= 50)
    // return lessCost;
}

let coursePrice = courses.filter(filterByPrice)
console.log("The courses that are $50 are ");
console.table(coursePrice);

function findClassroom(classes) {
    return classes.Location == "Classroom 1"
}

let classLocation = courses.filter(findClassroom)
console.log("The courses in Classroom 1 are ");
console.table(classLocation);