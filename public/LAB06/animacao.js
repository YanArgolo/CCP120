let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

class Retangulo {
    constructor(srcImagem, x, y, largura, altura) {
        this.img = new Image();
        this.img.src = srcImagem;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }

    desenhe(contexto) {
        
            contexto.drawImage(this.img, this.x, this.y, this.largura, this.altura);
        
    }
}


let pou = new Retangulo('../img/pou.png', 130, 130, 50, 50);

function animacao() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    pou.desenhe(ctx1);
    requestAnimationFrame(animacao);
}

animacao();

canvas1.addEventListener('mousemove', function(evento) {
    let rect = canvas1.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    let novoX = x_mouse - pou.largura / 2;
    let novoY = y_mouse - pou.altura / 2;

    novoX = Math.max(0, Math.min(novoX, canvas1.width - pou.largura));
    novoY = Math.max(0, Math.min(novoY, canvas1.height - pou.altura));
    // Centraliza a imagem no cursor (opcional)
    pou.x = novoX
    pou.y = novoY
});