const btnDescricao = document.getElementById('btnAbrirDescricao');
const btnHistoria = document.getElementById('btnAbrirHistoria');

const modalDescricao = document.getElementById('modalDescricao');
const modalHistoria = document.getElementById('modalHistoria');
const overlay = document.getElementById('modalOverlay');
const botoesFechar = document.querySelectorAll('.fechar-btn');

function abrirModal(modal) {
    overlay.classList.add('visivel');
    modal.classList.add('visivel');
}

function fecharModais() {
    overlay.classList.remove('visivel');
    document.querySelectorAll('.bottom-sheet').forEach(m => m.classList.remove('visivel'));
}

btnDescricao.addEventListener('click', () => abrirModal(modalDescricao));
btnHistoria.addEventListener('click', () => abrirModal(modalHistoria));

botoesFechar.forEach(btn => btn.addEventListener('click', fecharModais));
overlay.addEventListener('click', fecharModais);

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModais();
});