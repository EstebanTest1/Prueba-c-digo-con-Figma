document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn-action');
    if (btn) {
        btn.addEventListener('click', function () {
            alert('¡Funciona correctamente!');
        });
    }
});