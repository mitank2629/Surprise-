function showLove() {
  document.body.style.background = "linear-gradient(135deg,#ffd6e0,#fff0f5)";
  document.querySelector('button').style.display = 'none';
  document.getElementById('loveMessage').style.display = 'block';
  document.getElementById('loveAudio').play();

  for (let i=0;i<60;i++){
    const el=document.createElement('div');
    el.className = i%2===0 ? 'heart' : 'flower';
    el.style.left = Math.random()*100+'vw';
    el.style.animationDuration = (Math.random()*3+3)+'s';
    el.style.fontSize = (Math.random()*20+20)+'px';
    document.body.appendChild(el);
  }
}