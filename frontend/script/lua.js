const btnDescricao = document.getElementById('btnAbrirDescricao');
const btnCuriosidades = document.getElementById('btnAbrirCuriosidades');
const modalDescricao = document.getElementById('modalDescricao');
const modalCuriosidades = document.getElementById('modalCuriosidades');
const botoesFechar = document.querySelectorAll('.btn-fechar');

function abrir(modal) {
    modal.classList.add('ativo');
}

function fechar() {
    document.querySelectorAll('.modal-fullscreen').forEach(m => m.classList.remove('ativo'));
}

btnDescricao.addEventListener('click', () => abrir(modalDescricao));
btnCuriosidades.addEventListener('click', () => abrir(modalCuriosidades));

botoesFechar.forEach(btn => btn.addEventListener('click', fechar));

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fechar();
});