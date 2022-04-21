window.onload = function() {
    const corPreta = document.getElementById('color-black');
    const corVermelha = document.getElementById('color-red');
    const corAzul = document.getElementById('color-blue');
    const corVerde = document.getElementById('color-green');

    corPreta.className = 'color selected';

    let pixelBoard = document.getElementById('pixel-board');

    for (let i = 0; i < 5; i += 1) {
        let listPixel = document.createElement('li');
        pixelBoard.appendChild(listPixel);
        listPixel[i];
        listPixel.style.listStyle = 'none';
        for (let i2 = 0; i2 < 5; i2 += 1){
            let colPixel = document.createElement('div');
            listPixel.appendChild(colPixel);
            colPixel[i2];
            colPixel.className = 'pixel';
            colPixel.id = 'li'+[i]+'pixel'+[i2];
        }
    }

    corPreta.addEventListener('click', function(){
        //let corPixelPreta = corPreta.style.backgroundColor;
        corPreta.className = 'color selected';
        corVermelha.className = 'color';
        corAzul.className = 'color';
        corVerde.className = 'color';
    })

    corVermelha.addEventListener('click', function(){
        //let corPixelVermelha = corVermelha.style.backgroundColor;
        corVermelha.className = 'color selected';
        corPreta.className = 'color';
        corAzul.className = 'color';
        corVerde.className = 'color';
        
    })
   
    corAzul.addEventListener('click', function(){
        //let corPixelAzul = corPreta.style.backgroundColor;
        corVermelha.className = 'color';
        corPreta.className = 'color';
        corAzul.className = 'color selected';
        corVerde.className = 'color';
    })

    corVerde.addEventListener('click', function(){
        //let corPixelVerde = corVermelha.style.backgroundColor;
        corVermelha.className = 'color';
        corPreta.className = 'color';
        corAzul.className = 'color';
        corVerde.className = 'color selected';
    })
}

    //     let corSelecionada = 
    //     let pixelSelecionado = document.getElementById('li'+)
    //     let alteraCor = corSelecionada;
    // }

    
    // let calculoTamanho = document.getElementById('calculo-tamanho');

    // let calcPixels = document.createElement('button');
    // calculoTamanho.appendChild(calcPixels);
    // calcPixels.id = 'button-calc-pixels';
    // calcPixels.className = 'btn-qtd-pixels';
    // calcPixels.innerText = 'Calcular';

    // calcPixels.addEventListener('click', function (){
    //     const qtdPixels = parseInt(input1.value);
    //     for (let i = 0; i < qtdPixels; i += 1) {
    //         let listPixel = document.createElement('li');
    //         pixelBoard.appendChild(listPixel);
    //         listPixel[i];
    //         listPixel.style.listStyle = 'none';
    //         for (let i2 = 0; i2 < qtdPixels; i2 += 1){
    //             let colPixel = document.createElement('div');
    //             listPixel.appendChild(colPixel);
    //             colPixel[i2];
    //             colPixel.className = 'pixel';
    //         }
    //     }
    // });

    // let listPixel = document.createElement('li');
    // pixelBoard.appendChild(listPixel);

    // let colPixel = document.createElement('div');
    // listPixel.appendChild(colPixel);

