// for
for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`)
    }
}
// variable для цикла while и do...while
let i = 0;

// while
while (i < 3) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`);
        i++;
    }
};

// do...while
do {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`);
        i++;
    }
} while (i < 3);
