const btnDescricao = document.getElementById('btnAbrirDescricao');
const btnHistoria = document.getElementById('btnAbrirHistoria');
const modalDescricao = document.getElementById('modalDescricao');
const modalHistoria = document.getElementById('modalHistoria');
const botoesFechar = document.querySelectorAll('.fechar');

function abrirModal(modal) {
    modal.classList.add('ativo');
}

function fecharModal(modal) {
    modal.classList.remove('ativo');
}

btnDescricao.addEventListener('click', () => abrirModal(modalDescricao));
btnHistoria.addEventListener('click', () => abrirModal(modalHistoria));

botoesFechar.forEach((btn) => {
    btn.addEventListener('click', (e) => fecharModal(e.target.closest('.modal')));
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) fecharModal(e.target);
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modalAtivo = document.querySelector('.modal.ativo');
        if (modalAtivo) fecharModal(modalAtivo);
    }
});