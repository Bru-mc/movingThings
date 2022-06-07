const squareElement = document.querySelector(".square");
const enemyElement = document.querySelector(".enemy");
squareElement.style.left = "0";
squareElement.style.bottom = "446px";
enemyElement.style.left = "300px";
enemyElement.style.bottom = "0";

const Cenario = {
  MinBottom: 0,
  MaxBottom: 446,
  MinLeft: 0,
  MaxLeft: 346,
}
const squareStartBottomValue = Number(squareElement.style.bottom.replace('px', ''));
const squareStartLeftValue = Number(squareElement.style.left.replace('px', ''));
const enemyStartBottomValue = Number(enemyElement.style.bottom.replace('px', ''));
const enemyStartLeftValue = Number(enemyElement.style.left.replace('px', ''));
  
const Square = {
  StartBottomPositionValue: squareStartBottomValue,
  StartLeftPositionValue: squareStartLeftValue,
  BottomPositionValue: squareStartBottomValue,
  LeftPositionValue: squareStartLeftValue,
  status:{
    hp: 100,
    mp: 100,
    dano: 10
  }
}
const Enemy = {
  StartBottomPositionValue: enemyStartBottomValue,
  StartLeftPositionValue: enemyStartLeftValue,
  BottomPositionValue: enemyStartBottomValue,
  LeftPositionValue: enemyStartLeftValue, 
  status:{
    hp: 100
  }
}
const Keys = {
  init: ()=>{
    document.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'ArrowDown':
          Keys.KeysPress.arrowDown = true;
          break;
        case 'ArrowUp':
          Keys.KeysPress.arrowUp = true;
          break;
        case 'ArrowRight':
          Keys.KeysPress.arrowRight = true;
          break;
        case 'ArrowLeft':
          Keys.KeysPress.arrowLeft = true;
          break;
      }
    });
    document.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'ArrowDown':
          Keys.KeysPress.arrowDown = false;
          break;
        case 'ArrowUp':
          Keys.KeysPress.arrowUp = false;
          break;
        case 'ArrowRight':
          Keys.KeysPress.arrowRight = false;
          break;
        case 'ArrowLeft':
          Keys.KeysPress.arrowLeft = false;
          break;
      }
    })
  },
  KeysPress:{},
};

const Actions = {
  Movement:{
    Up: () =>{
      if(Square.BottomPositionValue < Cenario.MaxBottom){
        Square.BottomPositionValue += 2;
        squareElement.style.bottom = Square.BottomPositionValue.toString() + 'px'; 
      }   
    },
    Right: ()=>{
      if(Square.LeftPositionValue < Cenario.MaxLeft){
        Square.LeftPositionValue += 2;
        squareElement.style.left = Square.LeftPositionValue.toString() + 'px'; 
      }
    },
    Down: () => {
      if(Square.BottomPositionValue > Cenario.MinBottom){
        Square.BottomPositionValue -= 2;
        squareElement.style.bottom = Square.BottomPositionValue.toString() + 'px'; 
      }
    },
    Left: () => {
      if(Square.LeftPositionValue > Cenario.MinLeft){
        Square.LeftPositionValue -= 2;
        squareElement.style.left = Square.LeftPositionValue.toString() + 'px'; 
      }  
    },
  }
}

// setInterval(()=>{
//     if(Keys.KeysPress.arrowDown){
//         Actions.Movement.Down()  
//       }
//       if(Keys.KeysPress.arrowUp){
//         Actions.Movement.Up()
//       }
//       if(Keys.KeysPress.arrowRight){
//         Actions.Movement.Right()
//       }
//       if(Keys.KeysPress.arrowLeft){
//         Actions.Movement.Left()
//       }
// },20)


