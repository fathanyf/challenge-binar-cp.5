const login = function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "" || password === ""){
      alert("maaf, login dulu ya....\nTerserah mau masukin apa saja")
    }else{
      window.location = "index.html";
    }
  };

  class Welcome{

    setName(name){
        this.name = name;
        heading.innerHTML = 'Game ' +this.name ;  
        katalogin.innerHTML = 'Login Dulu Ya';
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
