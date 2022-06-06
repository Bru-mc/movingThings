const squareElement = document.querySelector(".square");
squareElement.style.left = "0";
squareElement.style.bottom = "446px";

const Cenario = {
  MinBottom: 0,
  MaxBottom: 446,
  MinLeft: 0,
  MaxLeft: 346,
}
const startBottomValue = Number(squareElement.style.bottom.replace('px', ''));
const startLeftValue = Number(squareElement.style.left.replace('px', ''));
  
const Square = {
  StartBottomPositionValue: startBottomValue,
  StartLeftPositionValue: startLeftValue,
  BottomPositionValue: startBottomValue,
  LeftPositionValue: startLeftValue
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
        Square.BottomPositionValue += 4;
        squareElement.style.bottom = Square.BottomPositionValue.toString() + 'px'; 
      }   
    },
    Right: ()=>{
      if(Square.LeftPositionValue < Cenario.MaxLeft){
        Square.LeftPositionValue += 4;
        squareElement.style.left = Square.LeftPositionValue.toString() + 'px'; 
      }
    },
    Down: () => {
      if(Square.BottomPositionValue > Cenario.MinBottom){
        Square.BottomPositionValue -= 4;
        squareElement.style.bottom = Square.BottomPositionValue.toString() + 'px'; 
      }
    },
    Left: () => {
      if(Square.LeftPositionValue > Cenario.MinLeft){
        Square.LeftPositionValue -= 4;
        squareElement.style.left = Square.LeftPositionValue.toString() + 'px'; 
      }  
    }
  }
}



