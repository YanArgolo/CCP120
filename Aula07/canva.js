let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//sol
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'transparent';
ctx.arc(300,100,50,1.5*Math.PI,3.5*Math.PI,);
ctx.fill();
ctx.stroke();
ctx.closePath();

//casa
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#81491F';
ctx.fillRect(150,180,110,120);
ctx.closePath();

//janelas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#61BBFB';
ctx.fillRect(160,205,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#61BBFB';
ctx.fillRect(220,205,30,30);
ctx.closePath();
//porta
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#5F4525';
ctx.fillRect(190,235,30,50);
ctx.closePath();
//chao
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#808080';
ctx.fillRect(0,280,400,400);
ctx.closePath();

//arvore 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#81491F';
ctx.fillRect(332,284,27,60);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#3B892A';
ctx.arc(345,260,30,1.5*Math.PI,3.5*Math.PI,);
ctx.fill();
ctx.stroke();
ctx.closePath();

//arvore2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#81491F';
ctx.fillRect(60,220,27,60);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#3B892A';
ctx.arc(73,205,30,1.5*Math.PI,3.5*Math.PI,);
ctx.fill();
ctx.stroke();
ctx.closePath();

//cachoeira
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#598CFA';
ctx.strokeStyle = 'transparent';
ctx.arc(0,280,60,1.0*Math.PI,2.0*Math.PI,);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#98CFA';
ctx.fillRect(0,280,60,150);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#98CFA';
ctx.fillRect(60,340,150,150);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#598CFA';
ctx.arc(195,400,61,1.0*Math.PI,2.0*Math.PI,);
ctx.fill();
ctx.stroke();
ctx.closePath();

//telhado
ctx.beginPath();
ctx.moveTo(150, 180);
ctx.lineTo(206,120);
ctx.lineTo(260, 180);
ctx.fillStyle = '#EC6E52';
ctx.fill();
ctx.closePath();