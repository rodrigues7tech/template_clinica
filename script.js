window.addEventListener("scroll", function(){
    let nav = document.querySelector("fixBar");
    fixBar.classList.toggle("nav-top", window.scrollY > 0);
})

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertSend = document.getElementById('alertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertSend) {
  alertSend.addEventListener('click', function () {
    alert('Mensagem Enviada com sucesso!', 'success')
  })
}