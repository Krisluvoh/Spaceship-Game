class Ship {
    constructor (name, hull,firepower,accuracy) {
        this.hull = hull;
        this.name = name;
        this.firepower = firepower;
        this.accuracy = accuracy
    }
    attack(enemy){
        if (Math.random() < this.accuracy) {
        console.log('hit');
        enemy.hull-=this.firepower
    }else{
        console.log('you missed!');
    }
 }
}
//class Example {
//	constructor(name){
//		this.name = name
//		this.method = this.method.bind(this)
	//}

	//methodFromExample(){
	// return this.name
	//}
//}
	

const myShips = new Ship ('Alpha', 20, 5, 0.7);
console.log(myShip);

const alienShips=['A1','A2','A3','A4','A5','A6']
console.log(alienShip);

//const btnEl = document.querySelector('button')
//console.log(btnEl);
//btnEl.addEventListener('click', methodFromExample)

//const enemyShip=new Ship(alienShip[0],getRandomIntInclusive(3,6),getRandomIntInclusive(2,4),decimalRandom(0.6,0.8))
//console.log(enemyShip);
const enemyShips=[];
for (let i=0;i<6;i++){
     enemyShips[i]=new Ship(alienShip[i],getRandomIntInclusive(3,6),getRandomIntInclusive(2,4),decimalRandom(0.6,0.8))
}
console.log (enemyShips)
// Battle Starts

while(myShip.hull>0&&enemyShips[0].hull>0){
    myShip.attack(enemyShips[0])
    if (enemyShips[0].hull>0){
        enemyShips[0].attack(myShip)
    }
}
//myShip.attack(enemyShip)
//console.log('Post battle Mothership status', myShip)
//console.log('Post battle Alienship status', enemyShip)

if (enemyShips[0].hull <=0){
    console.log('The Alien ship', enemyShips[0].name,'is destroyed')

}
else if(myShip.hull <= 0){
    console.log('The Mother ship is destroyed. The game is over');
}
console.log('Continue the game')

let response = prompt('Do you want to continue?', 'Ok');
console.log(response)
if (response == null || response == ''){
console.log('retreat!')
}else{
    console.log('continue')
}
//document.confirm()




//myShip.attack(enemyShip)



function getRandomIntInclusive(min, max) {

    return Math.floor(Math.random() * (max- min + 1) + min); // Maximum and minimum are inclusive
}
//console.log(getRandomIntInclusive(3,6));

//Mathrandom for the decimals

function decimalRandom(min, max){
    return Math.random()*(max-min) + min
    }
   // console.log(decimalRandom(.6,.8));

console.log('Game Begins');

//Define Alpha Ship

let myShip=new Ship('Alpha', '20', '5', '0.7');
console.log(myShip);

//Alien Ships

const alienShip=['A1','A2','A3','A4','A5','A6']
console.log(alienShip);


document.write('Game begins...')
document.write('Earthship is loaded...')
let i = 0;


const attacking = document.getElementById('attack')
attacking.addEventListener('click', mainProcess)

const continuing = document.getElementById('continue')
continuing.addEventListener('click', conTinue)

const retreating = document.getElementById('retreat')
retreating.addEventListener('click', reTreat)
console.log("Earth ship retreated. Game is over")

function mainProcess()
{
    const textout = document.getElementById('textoutput')




    let enemyShip=new Ship(alienShip[i],getRandomIntInclusive(3,6),getRandomIntInclusive(2,4),decimalRandom(0.6,0.8))
       
    textout.innerHTML += 'AlienShip ' + enemyShip.name + ' is loaded...' + '<br>'
    console.log("Before Attack")
    console.log(myShip)
    console.log(enemyShip)

    myShip.attack(enemyShip)
    console.log("After Attack")
    console.log(myShip)
    console.log(enemyShip) 



    if (enemyShip.hull > 0){
        console.log("Alien ship ", enemyShip.name, " has survived")
        textout.innerHTML += 'Alien ship ' + enemyShip.name + ' survived the attack. Ready to attack Earth Ship now.' + '<br>'
    }
    else if (enemyShip.hull <= 0){
        console.log("Alien ship ", enemyShip.name, " is destroyed")
        textout.innerHTML += 'Alien ship ' + enemyShip.name + ' destroyed.' + '<br>'
        i += 1
        if (i > 5)
        {
            textout.innerHTML += 'Aliens destroyed. Game is over' + '<br>'
            document.getElementById('attack').disabled = true;
            document.getElementById('continue').disabled = true;
            document.getElementById('retreat').disabled = true;
        }
    }
    else if(myShip.hull <= 0){
        myship_is_alive = false
        console.log("Earth ship destroyed. Game is over")
        textout.innerHTML += 'Earth ship destroyed. Game is over.' + '<br>'
        document.getElementById('attack').disabled = true;
        document.getElementById('continue').disabled = true;
        document.getElementById('retreat').disabled = true;
    }

}
function reTreat(){
    myShip.hull = 0
    console.log("Earth ship retreated. Game is over")
    myship_retreat = true
    const textout = document.getElementById('textoutput') 
    textout.innerHTML += 'Earth Ship Retreated. Game is over' + '<br>'
    document.getElementById('attack').disabled = true;
    document.getElementById('continue').disabled = true;
    document.getElementById('retreat').disabled = true;

}

function conTinue(){
    console.log("Earth ship Continue attacking")
    mainProcess()
}
