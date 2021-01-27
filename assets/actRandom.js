let getAct = document.getElementById('getAct');
let title = document.getElementById('title');
getAct.addEventListener('click', activities);

const cajita = document.getElementById('cajaActividad');
function activities() {
  const url = '//www.boredapi.com/api/activity?type=recreational';
  fetch(url)
    .then(res => {
      return res.json()
    }).then(data => {
      title.innerText = data.type;
      cajita.innerText = data.activity;
    })
}


function myFunction() {
  x = event.keyCode;
  if (x == 32) {  // 32 tecla espaciadora
    location.href = location.href
  }
}
window.onkeydown = myFunction;
