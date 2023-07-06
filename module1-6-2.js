const question1 = 'Сколько будет 2 + 2?';
const question2 = 'Сколько будет 2 * 2?';
const question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?';
const question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?';
const question5 = 'Сколько будет 2 + 2 * 2?';

let correctAnswers = 0;
let incorrectAnswers = 0;

const try1 = Number(prompt(question1).replaceAll(' ', ''));
if (try1 === 4) {
    alert(`Ответ Верный`);
    correctAnswers++;
} else {
    alert(`Ответ Неверный`);
    incorrectAnswers++;
};

const try2 = Number(prompt(question2).replaceAll(' ', ''));
if (try2 === 4) {
    alert(`Ответ Верный`);
    correctAnswers++;
} else {
    alert(`Ответ Неверный`);
    incorrectAnswers++;
};

const try3 = Number(prompt(question3).replaceAll(' ', ''));
if (try3 === 1) {
    alert(`Ответ Верный`);
    correctAnswers++;
} else {
    alert(`Ответ Неверный`);
    incorrectAnswers++;
};

const try4 = Number(prompt(question4).replaceAll(' ', ''));
if (try4 === 12) {
    alert(`Ответ Верный`);
    correctAnswers++;
} else {
    alert(`Ответ Неверный`);
    incorrectAnswers++;
};

const try5 = Number(prompt(question5).replaceAll(' ', ''));
if (try5 === 6) {
    alert(`Ответ Верный`);
    correctAnswers++;
} else {
    alert(`Ответ Неверный`);
    incorrectAnswers++;
};


alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}`);


