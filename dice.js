let count = [0,0,0,0,0,0,0,0,0,0,0,0,0,]
function rollingDice(){

for (i = 0; i < 1000; i++) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let theRoll = dice1 + dice2;
    
    count[theRoll] = count[theRoll] + 1;
}
}

rollingDice()


function display(){
    for (let i = 0; i<= count.length; i++) {
        let eachNum = document.createElement("div")
        let answers = document.createTextNode(count[i])
eachNum.appendChild(answers)
output.appendChild(eachNum)

        
    }





}
display()
