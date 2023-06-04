/*  Constantes e variáveis  */



/*  Escurecer o Nav  */
const nav = document.getElementById('nav');



/*  slider horizontal arrastar */
const slider = document.querySelector('.row_posters');
const slider2 = document.querySelector('.row_posters2');
const slider3 = document.querySelector('.row_posters3');
let isDown = false;
let startX;
let ScrollLeft;


/*  Funções  */



/*  Escurecer o Nav  */
window.addEventListener('scroll', () =>{
    if(window.scrollY >=100){
        nav.classList.add('nav_black');
    }else{
        nav.classList.remove('nav_black');
    }
})


/*  Slider horizontal arrastar (Primeira div) */
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(startX);
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x -startX) * 3; //caso esteja a rolagem esteja muito rápida, tirar o multiplicador 3
    slider.scrollLeft = scrollLeft - walk;
});


/*  Slider horizontal arrastar (Segunda div)  const slider2 e class row_posters2*/
slider2.addEventListener('mousedown', (e) => {
    isDown = true;
    slider2.classList.add('active');
    startX = e.pageX - slider2.offsetLeft;
    scrollLeft = slider2.scrollLeft;
    console.log(startX);
});

slider2.addEventListener('mouseleave', () => {
    isDown = false;
    slider2.classList.remove('active');
    
});

slider2.addEventListener('mouseup', () => {
    isDown = false;
    slider2.classList.remove('active');
});

slider2.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider2.offsetLeft;
    const walk = (x -startX) * 3; //caso esteja a rolagem esteja muito rápida, tirar o multiplicador 3
    slider2.scrollLeft = scrollLeft - walk;
});

/*  Slider horizontal arrastar (Terceira div) const slider3 e class row_posters3  */
slider3.addEventListener('mousedown', (e) => {
    isDown = true;
    slider3.classList.add('active');
    startX = e.pageX - slider3.offsetLeft;
    scrollLeft = slider3.scrollLeft;
    console.log(startX);
});

slider3.addEventListener('mouseleave', () => {
    isDown = false;
    slider3.classList.remove('active');
    
});

slider3.addEventListener('mouseup', () => {
    isDown = false;
    slider3.classList.remove('active');
});

slider3.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider3.offsetLeft;
    const walk = (x -startX) * 3; //caso esteja a rolagem esteja muito rápida, tirar o multiplicador 3
    slider3.scrollLeft = scrollLeft - walk;
});





/*  Funções para troca de banner de destaque  */
function trocaBannerBlackJack(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/black_jack2.png)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> O blackjack é um jogo de cartas conhecido em cassinos, em que o objetivo do jogo é obter a soma de 21 pontos. Nesse jogo cada carta possui um valor específico, e de acordo com a soma das cartas na mão do jogador é verificado a necessidade de pedir outra carta. Isso ocorre até que sua soma chegue a 21 pontos.";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "black_jack/index.html";
    
}

function trocaBannerDelta(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/delta4.jpeg)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Um jogo super divertido inspirado nos jogos de naves que fizeram sucesso nos arcades.";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "delta_master/index.html";
    
}

function trocaBannerRaceMaster(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/outrun3.jpg)";
    document.getElementById('banner').style.backgroundPosition="center 0";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Out Run, lançado em 1986 para os arcades teve um grande sucesso e foi um dos primeiros jogos não lineares, dando ao jogador a possibilidade de escolher entre suas 5 rotas distintas para concluir o jogo na ordem que desejasse.";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "race_master/v4.final.html";
    
}

function trocaBannerRoadFighter(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/slipstream2.jpg)";
    document.getElementById('banner').style.backgroundPosition="center 80%";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Criado pelo Razormist do Sourcecodester 'Slipstream' que na verdade tem o nome de Road Fighter é um simples jogo inspirados nos clássicos jogos de corrida dos anos 80. <br> Slipstream, o jogo da arte é um incrível jogo criado por um único brasileiro que hoje está disponível para todas plataformas, vale a pena conferir!";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "road_fighter/game.html";
    
}

function trocaBannerDoodleJump(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/doodle_jump2.jpg)";
    document.getElementById('banner').style.backgroundPosition="center 40%";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Nesse jogo super carismático que estava instalado em todo galaxy pocket em 2014, você assume o controle do Doodler e tenta subir o mais alto que puder se esquivando dos enimigos e superando os obstáculos";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "doodle_jump/play/doodle_jump_play.html";
    
}

function trocaBannerFlappyBird(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/flappy_bird4.jpg)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="50vw";
    document.querySelector('.banner_discription').style.maxWidth="600px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Extremamente difícil e viciante. <br> O jogo lançado em 2013 teve seu auge em janeiro de 2014 até que a incansável busca por uma entrevista do seu criador pela mídia e pressões diversas de fãs e haters fez com que ele removesse o jogo das lojas digitais. A remoção do jogo nas lojas virtuais fez com que surgisse um mercado de compra e venda de celulares que tinham o jogo instalado depois de seu desaparecimento.";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "flappy_bird/play/flappy_bird_play.html";
    
}

function trocaBannerPong(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/pong4.png)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Todo mundo conhece o Pong, mas poucos sabem que foi um dos primeiros jogos eletrônicos, criado lá em 1972. <br> Nessa versão é possível até dois jogadores jogarem juntos.";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "pong/play/pong_play.html";
    
}

function trocaBannerSnake(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/snake4.png)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Se você já teve um celular da Nokia então esse jogo será familiar para você. <br> Snake quando foi lançado em 1976 para os arcades se chamava Blockade e desde então virou um clássico instantâneo e ganhou diversas versões diferentes.";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "snake/play/snake.html";
    
}

function trocaBannerSpaceInvaders(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/space_invaders3.png)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Space Invaders foi um dos primeiros jogos de tiro com gráfico bidimensional. O objetivo é destruir ondas de naves com uma espaçonave humana para ganhar o maior número de pontos possível. Para construir o jogo, seu criador se inspirou na mídia popular, como A Guerra dos Mundos e Star Wars.";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "space_invaders/play/index.html";
    
}

function trocaBannerTetris(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/tetris5.jpg)";
    document.getElementById('banner').style.backgroundPosition="center, 20%";


    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Aposto que você não sabia, mas o Tetris foi criado durante a Guerra Fria nos anos 80 pela União Soviética e o jogo acabou dominando o mundo inteiro por ser super divertido e viciante.<br><br>Nessa versão do site, Tetris tem um sistema de HighScore que são atualizados";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "tetris/play/index.html";
    
}

function trocaBannerFruitNinja(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/fruit_ninja2.png)";
    document.getElementById('banner').style.backgroundPosition="20% center";


    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Lançado em 2010 Fruit Ninja é um jogo mobile que consiste basicamente em cortar frutas na tela de um smartphone ou tablet que viralizou no mundo inteiro";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "fruit_ninja/play/index.html";
    
}

function trocaBannerPacMan(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/pac_man3.jpg)";
    document.getElementById('banner').style.backgroundPosition="center 40%";


    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Uma pizza com um pedaço faltando e a vontade de fazer um jogo diferente dos shooters dos anos 80, assim surgiu a ideia do Pac-Man. <br>Ele foi lançado para os arcades e todo mundo sempre se lembra com carinho do jogo do 'come-come'.";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "pac-man/pacman/index.html";
    
}




/*  função clique e jogue  */

//possibilidade de criar uma única função com if ou switch

function jogarBlackJack(){
    window.open("black_jack/index.html");
}

function jogarDelta(){
    window.open("delta_master/index.html");
}

function jogarDoodleJump(){
    window.open("doodle_jump/play/doodle_jump_play.html");
}

function jogarFlappyBird(){
    window.open("flappy_bird/play/flappy_bird_play.html");
}

function jogarFruitNinja(){
    window.open("fruit_ninja/play/index.html");
}

function jogarPacMan(){
    window.open("pac-man/pacman/index.html");
}

function jogarPong(){
    window.open("pong/play/pong_play.html");
}

function jogarRaceMaster(){
    window.open("race_master/v4.final.html");
}

function jogarRoadFighter(){
    window.open("road_fighter/game.html");
}

function jogarSnake(){
    window.open("snake/play/snake.html");
}

function jogarSpaceInvaders(){
    window.open("space_invaders/play/index.html");
}

function jogarTetris(){
    window.open("tetris/play/index.html");
}
