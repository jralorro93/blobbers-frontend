const userUlTag = document.querySelector('.user-list')

// const userTag = (user) => {
// return `<li>
//   <h3>${user.name}
//     <button>Edit</button>
//   </h3>
// </li>`;
// }

const endPoint = 'http://localhost:3000/api/v1/users';
const postRequest = (user) => {
  return fetch(endPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  }).then((response) => {
    return response.json()
  })
}


document.addEventListener('DOMContentLoaded', () => {

});
