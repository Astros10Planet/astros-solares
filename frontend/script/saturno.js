const btnDescricao = document.getElementById('btnAbrirDescricao');
const btnHistoria = document.getElementById('btnAbrirHistoria');

const modalDescricao = document.getElementById('modalDescricao');
const modalHistoria = document.getElementById('modalHistoria');
const overlay = document.getElementById('modalOverlay');
const botoesFechar = document.querySelectorAll('.btn-fechar');

function abrirDrawer(drawer) {
    overlay.classList.add('ativo');
    drawer.classList.add('ativo');
}

function fecharTodos() {
    overlay.classList.remove('ativo');
    document.querySelectorAll('.drawer-modal').forEach(d => d.classList.remove('ativo'));
}

btnDescricao.addEventListener('click', () => abrirDrawer(modalDescricao));
btnHistoria.addEventListener('click', () => abrirDrawer(modalHistoria));

botoesFechar.forEach(btn => btn.addEventListener('click', fecharTodos));
overlay.addEventListener('click', fecharTodos);

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharTodos();
});