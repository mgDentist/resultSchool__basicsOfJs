const question1 = 'JavaScript появился в 1995 году?';
const question2 = 'Спецификация JavaScript называется ECMAScript?';
const question3 = 'JavaScript был создан за 1 месяц?';

const answer1 = 'JavaScript появился в 1995 году';
const answer2 = 'Спецификация JavaScript называется ECMAScript';
const answer3 = 'JavaScript был создан за 10 дней';

const userAnswer1 = confirm(question1);
(userAnswer1) ? alert(`Верно`) : alert(answer1);

const userAnswer2 = confirm(question2);
(userAnswer2) ? alert(`Верно`) : alert(answer2);

const userAnswer3 = confirm(question3);
(userAnswer3) ? alert(`Верно`) : alert(answer3);

alert(`Квиз окончен :)`)