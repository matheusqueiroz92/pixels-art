window.onload = function paletaCores () {

    const corPreta = document.getElementById('color-black');
    const corVermelha = document.getElementById('color-red');
    const corAzul = document.getElementById('color-blue');
    const corVerde = document.getElementById('color-green');

    corPreta.className = 'color selected';
    let corPixel = 'black';

    let pixelBoard = document.getElementById('pixel-board');
    let container = document.getElementById('container');

    for (let i = 0; i < 5; i += 1) {
        let listPixel = document.createElement('li');
        listPixel[i];
        listPixel.id = 'linha'+[i];
        listPixel.className = 'listaDePixels';
        listPixel.style.listStyle = 'none';
        for (let i2 = 0; i2 < 5; i2 += 1){
            let colPixel = document.createElement('div');
            colPixel[i2];
            colPixel.className = 'pixel';
            colPixel.id = 'linha'+[i]+'pixel'+[i2];
            listPixel.appendChild(colPixel);
        }
        pixelBoard.appendChild(listPixel);
    }

    let calculoTamanho = document.getElementById('calculo-tamanho');

    let calcPixels = document.createElement('button');
    calculoTamanho.appendChild(calcPixels);
    calcPixels.id = 'generate-board';
    calcPixels.className = 'btn-qtd-pixels';
    calcPixels.innerText = 'VQV';

    //calcula o tamanho do do quadro de pixels
    calcPixels.addEventListener('click', function (){
        let listaDePixels = document.getElementsByClassName('listaDePixels');
        for(let index = listaDePixels.length - 1; index >= 0; index-= 1) {
            listaDePixels[index].remove();
        }

        let boardSize = document.getElementById('board-size');
        const qtdPixels = boardSize.value;

        if (qtdPixels === '') {
            alert("Board inválido!");
        }
        else {
            if (qtdPixels >= 5 && qtdPixels <= 50) {
                for (let i4 = 0; i4 < qtdPixels; i4 += 1) {
                    let listPixel = document.createElement('li');
                    listPixel[i4];
                    listPixel.id = 'linha'+[i4];
                    listPixel.className = 'listaDePixels';
                    listPixel.style.listStyle = 'none';
                    for (let i5 = 0; i5 < qtdPixels; i5 += 1){
                        let colPixel = document.createElement('div');
                        colPixel[i5];
                        colPixel.className = 'pixel';
                        colPixel.id = 'linha'+[i4]+'pixel'+[i5];
                        listPixel.appendChild(colPixel);
                    }
                    pixelBoard.appendChild(listPixel);
                }
            }
            else {
                if (qtdPixels < 5) {
                    for (let index2 = 0; index2 < 5; index2 += 1) {
                        let listPixel = document.createElement('li');
                        listPixel[index2];
                        listPixel.id = 'linha'+[index2];
                        listPixel.className = 'listaDePixels';
                        listPixel.style.listStyle = 'none';
                        for (let index3 = 0; index3 < 5; index3 += 1){
                            let colPixel = document.createElement('div');
                            colPixel[index3];
                            colPixel.className = 'pixel';
                            colPixel.id = 'linha'+[index2]+'pixel'+[index3];
                            listPixel.appendChild(colPixel);
                        }
                        pixelBoard.appendChild(listPixel);
                    }
                }
                else if (qtdPixels > 50) {
                    for (let indice = 0; indice < 50; indice += 1) {
                        let listPixel = document.createElement('li');
                        listPixel[indice];
                        listPixel.id = 'linha'+[indice];
                        listPixel.className = 'listaDePixels';
                        listPixel.style.listStyle = 'none';
                        for (let indice2 = 0; indice2 < 50; indice2 += 1){
                            let colPixel = document.createElement('div');
                            colPixel[indice2];
                            colPixel.className = 'pixel';
                            colPixel.id = 'linha'+[indice]+'pixel'+[indice2];
                            listPixel.appendChild(colPixel);
                        }
                        pixelBoard.appendChild(listPixel);
                    }
                }
            }
        }
    });

    function generateColor2() {
        const letters = '0123456789ABCDEF';
        let color2 = '#';
        for (let i01 = 0; i01 < 6; i01++) {
          color2 += letters[Math.floor(Math.random() * 16)];
        }
        return color2;
    }

    corVermelha.style.backgroundColor = generateColor2();
    console.log(corVermelha.style.backgroundColor);

    function generateColor3() {
        const letters = '0123456789ABCDEF';
        let color3 = '#';
        for (let i02 = 0; i02 < 6; i02++) {
          color3 += letters[Math.floor(Math.random() * 16)];
        }
        return color3;
    }

    corAzul.style.backgroundColor = generateColor3();
    console.log(corAzul.style.backgroundColor);

    function generateColor4() {
        const letters = '0123456789ABCDEF';
        let color4 = '#';
        for (let i03 = 0; i03 < 6; i03++) {
          color4 += letters[Math.floor(Math.random() * 16)];
        }
        return color4;
    }

    corVerde.style.backgroundColor = generateColor4();
    console.log(corVerde.style.backgroundColor);


    corPreta.addEventListener('click', function(){
        corPixel = 'black';
        corPreta.className = 'color selected';
        corVermelha.className = 'color';
        corAzul.className = 'color';
        corVerde.className = 'color';
    });

    corVermelha.addEventListener('click', function(){
        corPixel = corVermelha.style.backgroundColor;
        corVermelha.className = 'color selected';
        corPreta.className = 'color';
        corAzul.className = 'color';
        corVerde.className = 'color';
    });

    corAzul.addEventListener('click', function(){
        corPixel = corAzul.style.backgroundColor;
        corVermelha.className = 'color';
        corPreta.className = 'color';
        corAzul.className = 'color selected';
        corVerde.className = 'color';
    });

    corVerde.addEventListener('click', function(){
        corPixel = corVerde.style.backgroundColor;
        corVermelha.className = 'color';
        corPreta.className = 'color';
        corAzul.className = 'color';
        corVerde.className = 'color selected';
    });

    pixelBoard.addEventListener('click', function(e){
        clickPixel = e.target.id;
        let alteraCorPixel = document.getElementById(clickPixel);
        alteraCorPixel.style.backgroundColor = corPixel;
        //console.log(alteraCorPixel);
    });

    let buttonClear = document.createElement('button');
    container.appendChild(buttonClear);
    buttonClear.className = 'btn-clear';
    buttonClear.id = 'clear-board';
    buttonClear.innerText = 'Limpar';

    buttonClear.addEventListener('click', function() {
        let listaDePixels = document.querySelectorAll('.pixel');
        for (let i3 = 0; i3 < listaDePixels.length; i3 += 1) {
            listaDePixels[i3].style.backgroundColor = 'white';   
        }
        //console.log(listaDePixels);
    });

    // let listPixel = document.createElement('li');
    // pixelBoard.appendChild(listPixel);

    // let colPixel = document.createElement('div');
    // listPixel.appendChild(colPixel);
}
