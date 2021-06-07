// Daniel Jaramillo

$(".animate-skill").hover(function (e) {
    $(this).toggleClass('animate__animated animate__pulse', e.type === 'mouseenter');
})



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})