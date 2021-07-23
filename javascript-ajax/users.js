var $list = document.querySelector('#user-list');

function getUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log('Status:', xhr.status);
    console.log('Response:', xhr.response);
    for (var i = 0; i < xhr.response.length; i++) {
      var $li = document.createElement('li');
      $li.textContent = xhr.response[i].name;
      $list.appendChild($li);
    }
  });
  xhr.send();
}
getUsers();
