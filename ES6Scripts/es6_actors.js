let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?","What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
];


// Who has been in at least 3 films?
// HARDER: Which Academy Members have been in a film that starts with "A"

let academyMemberID = academyMembers.find(a => a.memID == 142)




// function filNumber(academyMembers) {
//     for(let i = 0; i < films.length; i++)
//     return academyMembers.filter(a => a.films[i] >= 3)

// }



let nameFind = academyMembers.filter(a => a.name.indexOf("Bob") >= 0)



console.log(academyMemberID.name);

console.log(nameFind);