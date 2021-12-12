

class Welcome{

    setName(name){
        this.name = name;
        heading.innerHTML = 'Game ' +this.name;
        heading.style.fontStyle = "oblique"
        heading.style.backgroundColor = "Grey"
    }

    pegenalanGame(){
        console.log('Selamat Datang di Game ' +this.name);
    }

    penciptaGame(){
        console.log('Game '+this.name+' dibuat oleh Fathan Yuda F.');
    }
  }

  class Game extends Welcome{
      inspirasi(pengamalan){
        console.log('Game '+this.name+' terispirasi dari '+pengamalan);
      }
      
  }

  let myGame = new Game();
  myGame.setName('Pukul Kecoak');
  myGame.pegenalanGame();
  myGame.penciptaGame();
  myGame.inspirasi('pengalaman buruk penulis dengan kecoa');

const score = document.querySelector(".score span");
const holes = document.querySelectorAll(".hole");
const playBtn = document.querySelector(".buttons .play");
const stopBtn = document.querySelector(".buttons .stop");
const cursor = document.querySelector(".cursor img");

window.addEventListener("mousemove", (e)=> {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});

window.addEventListener("click", () => {
    cursor.style.animation = "hit 0.1s ease";
    setTimeout(()=>{
        cursor.style.removeProperty("animation");
    }, 100);
});

playBtn.addEventListener("click", ()=> {
    playBtn.style.display = "none";
    stopBtn.style.display = "inline-block";

    let hole;
    let points = 0;

    const startGame = setInterval(()=> {
         let arrayNo = Math.floor(Math.random() * 6);
         hole = holes[arrayNo];
         
         let image = document.createElement("img");
         image.setAttribute("src", "kecoagamejs.png");
         image.setAttribute("class", "mole");
         hole.appendChild(image);  

         setTimeout(()=> {
            hole.removeChild(image);
         }, 500)
    }, 700 );

    window.addEventListener("click", (e) => {
        if(e.target === hole) score.innerText = ++points;
    })

    stopBtn.addEventListener("click", ()=> {
        clearInterval(startGame);
        stopBtn.style.display = "none";
        playBtn.style.display = "inline-block";
        score.innerText = 0;
    })
});