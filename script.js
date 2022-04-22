window.onload = function() {
    const corPreta = document.getElementById('color-black');
    const corVermelha = document.getElementById('color-red');
    const corAzul = document.getElementById('color-blue');
    const corVerde = document.getElementById('color-green');

    corPreta.className = 'color selected';
    let corPixel = 'black';

    let pixelBoard = document.getElementById('pixel-board');

    for (let i = 0; i < 5; i += 1) {
        let listPixel = document.createElement('li');
        pixelBoard.appendChild(listPixel);
        listPixel[i];
        listPixel.id = 'linha'+[i];
        listPixel.className = 'listaDePixels';
        listPixel.style.listStyle = 'none';
        for (let i2 = 0; i2 < 5; i2 += 1){
            let colPixel = document.createElement('div');
            listPixel.appendChild(colPixel);
            colPixel[i2];
            colPixel.className = 'pixel';
            colPixel.id = 'linha'+[i]+'pixel'+[i2];
        }
    }

    corPreta.addEventListener('click', function(){
        corPixel = 'black';
        corPreta.className = 'color selected';
        corVermelha.className = 'color';
        corAzul.className = 'color';
        corVerde.className = 'color';
    });

    corVermelha.addEventListener('click', function(){
        corPixel = 'red';
        corVermelha.className = 'color selected';
        corPreta.className = 'color';
        corAzul.className = 'color';
        corVerde.className = 'color';
    });

    corAzul.addEventListener('click', function(){
        corPixel = 'blue';
        corVermelha.className = 'color';
        corPreta.className = 'color';
        corAzul.className = 'color selected';
        corVerde.className = 'color';
    });

    corVerde.addEventListener('click', function(){
        corPixel = 'green';
        corVermelha.className = 'color';
        corPreta.className = 'color';
        corAzul.className = 'color';
        corVerde.className = 'color selected';
    });

    document.addEventListener('click', function(e){
        clickPixel = e.target.id;
        let alteraCorPixel = document.getElementById(clickPixel);
        alteraCorPixel.style.backgroundColor = corPixel;
        console.log(alteraCorPixel);
    });     
    
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
}
