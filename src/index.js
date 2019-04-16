// const userUlTag = document.querySelector('.user-list')
//
// const userTag = (user) => {
// return `<li>
//   <h3>${user.name}
//     <button>Edit</button>
//   </h3>
// </li>`;
// }
// document.addEventListener('DOMContentLoaded', () => {
//   const endPoint = 'http://localhost:3000/api/v1/users';
//   fetch(endPoint)
//     .then((response) => {
//       return response.json()
//      }).then((parsedJson) => {
//       parsedJson.forEach((user) => {
//         userUlTag.innerHTML += userTag(user)
//       })
//     })
// });
