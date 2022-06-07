Keys.init()
const hpStatus = document.querySelector(".hpBar");
setInterval(()=>{
  if(Keys.KeysPress.arrowDown){
      Actions.Movement.Down()  
    }
    if(Keys.KeysPress.arrowUp){
      Actions.Movement.Up()
    }
    if(Keys.KeysPress.arrowRight){
      Actions.Movement.Right()
    }
    if(Keys.KeysPress.arrowLeft){
      Actions.Movement.Left()
    }
    //
    console.log(Enemy.BottomPositionValue + 100,Square.BottomPositionValue )
    if((Square.LeftPositionValue >= Enemy.LeftPositionValue - 54)
    &&(Square.BottomPositionValue <= Enemy.BottomPositionValue + 102)){
      if(Square.status.hp > 0){
        Square.status.hp -= 10;
      }
      hpStatus.style.width = `${Square.status.hp}%`;
    }
    if(Square.status.hp === 0){
      alert("Game over");
      Square.status.hp = 100;
      Square.LeftPositionValue = Square.StartLeftPositionValue;
      Square.BottomPositionValue = Square.StartBottomPositionValue;
    }

},20)