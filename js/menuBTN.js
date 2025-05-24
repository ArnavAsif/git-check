document.getElementById('menu-btn').addEventListener('click', function () {
    const showMenu = document.getElementById('sidebar');
    showMenu.classList.remove('hidden')
})

document.getElementById('close-btn').addEventListener('click', function () {
    const hideMenu = document.getElementById('sidebar');
    hideMenu.classList.add('hidden')
})


document.getElementById('btn-1').addEventListener('click', function(){
    showSection('donation-section')
})
document.getElementById('btn-2').addEventListener('click', function(){
    showSection('history-section')
})