/*
  Quando aprender JS deixar as horas e datas dimâmicas, além de validar os campos no HTML;
*/


// const fullDate = new Date();
// const year = fullDate.getFullYear();
// const month = fullDate.getMonth();
// const day = fullDate.getDate();
// const hours = fullDate.getHours();
// const minute = fullDate.getMinutes();

// const inputDate = document.querySelectorAll('input[type="date"]');
// const inputTime = document.querySelectorAll('input[type="time"]');

// function zeroOrNull(day, month) {
//   let zero;
//   if (day <= 9 || month <= 9) {
//     return zero = 0;
//   } else {
//     return zero = '';
//   }
// }

// console.log(zeroOrNull());

// function dateCurrent(year, month, day) {
//   zeroOrNull();

//   inputDate.forEach((element) => {
//     element.setAttribute( "value", `${year}-${zeroOrNull(day, month)}${month}-${zeroOrNull(day, month)}${day}`
//     );
//   });

//   inputDate.forEach((element) => {
//     element.setAttribute("value", `${year}-${zeroOrNull(day, month)}${month}-${zeroOrNull(day, month)}${day}`);
//   });
// }

// dateCurrent(year, month, day);

// inputTime.forEach( element => {
//   element.setAttribute('value', `${hours}:0${minute}`);
// })