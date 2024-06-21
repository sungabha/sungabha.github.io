let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

/*
const onConfirmRefresh = function (event) {
  event.preventDefault();
  // TODO: Refresh via fetch API call.
  return event.returnValue = "Are you sure? You want to exit this page?";
}

window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });
*/
