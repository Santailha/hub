// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as listas suspensas da página
    const todasAsListas = document.querySelectorAll('.lista-suspensa');

    todasAsListas.forEach(lista => {
        // Adiciona um "ouvinte" para o evento de abrir/fechar em cada lista
        lista.addEventListener('toggle', (event) => {
            // Se a lista atual foi aberta...
            if (lista.open) {
                // ...percorre todas as outras listas.
                todasAsListas.forEach(outraLista => {
                    // Se a "outraLista" não for a que acabamos de abrir e ela estiver aberta...
                    if (outraLista !== lista && outraLista.open) {
                        // ...fecha ela.
                        outraLista.removeAttribute('open');
                    }
                });
            }
        });
    });
});
