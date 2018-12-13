let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'

let startButton = document.getElementById('start');

let numCloseDoors = 3; //1
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

const isBot = door => { //6
	if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

const isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const randomChoreDoor = () => {  //3
  const choreDoor = Math.floor(Math.random()*numCloseDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 2) {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
};

door1.onclick = () => { //4
  if(currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(door1);
  }
}

door2.onclick = () => { //4
	if(currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(door2);
  }

}

door3.onclick = () => { //4
  if(currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(door3);
  }

}

const playDoor = (door) => { //5
  numCloseDoors--;
  	if (isBot(door)) {
      gameOver('lose');
    } else if (numCloseDoors === 0) {
    gameOver('win');
  }
}

startButton.onclick = () => { //8
  if (!currentlyPlaying) {
  startRound();
 }
}

const startRound = () => { //9
  numCloseDoors = 3;
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
	randomChoreDoor();
}

const gameOver = (status) => { //7
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else if (status === 'lose'){
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

randomChoreDoor(); //2
