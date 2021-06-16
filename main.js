// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(firstName, lastName) {
    const user = {
        firstName: firstName,
        lastName: lastName,
    };
    return user;
}

function setAge(user, age) {
    user.age = age;
    return user;
}
    
function incrementAge(user) {
    user.age = user.age + 1;
    return user;
}

function fixCar(car) {
    car.needsMaitenance = false;
    return car;
}

function addGrades(student, newGrades) {
    for (i = 0; i < newGrades.length; i++) {
        student.grades.push(newGrades[i]);
    }
    return student;
}

function getDataType(car, key) {
        car[key] = typeof car[key];
        return car[key];
    }


function addTodo(todos, newTodo) {
    todos.push(newTodo);
    return todos;
}

function addSong(playlist, newSong) {
    playlist.songs.push(newSong);
    playlist.duration = playlist.duration + newSong.duration;
    return playlist;
}

function updateReportCard(reportCard, newGrade) {
    console.log(reportCard);
    reportCard.grades.push(newGrade);
    console.log(reportCard);
    average = 0;
    for (i = 0; i < reportCard.grades.length; i++) {
        const min = Math.min(...reportCard.grades);
        const max = Math.max(...reportCard.grades);
        average += reportCard.grades[i]
        reportCard.lowestGrade = min;
        reportCard.highestGrade = max;
        reportCard.averageGrade = average / reportCard.grades.length;
    }
    return reportCard;
}







// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
