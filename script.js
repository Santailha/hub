
document.addEventListener('DOMContentLoaded', () => {
  
    const todasAsListas = document.querySelectorAll('.lista-suspensa');

    todasAsListas.forEach(lista => {
       
        lista.addEventListener('toggle', (event) => {
          
            if (lista.open) {
                
                todasAsListas.forEach(outraLista => {
                    
                    if (outraLista !== lista && outraLista.open) {
                   
                        outraLista.removeAttribute('open');
                    }
                });
            }
        });
    });
});
