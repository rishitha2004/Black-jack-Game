let cards=[];
let cardEl=document.getElementById("cards");
let sumEl=document.getElementById("sum");
let message="";
let msg=document.getElementById("msg");
let sum=0;

function start(){
    document.getElementById("newCard").disabled=false;
    let firstCard=getRandom();
    let secondCard=getRandom();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderCards();
}

function renderCards(){
    cardEl.innerText="Cards:";
    for(let i=0;i<cards.length;i++){
        let add=" "+cards[i];
        cardEl.innerText+=add;
    }
    sumEl.innerText="Sum: "+sum;
    if(sum<=20){
        message="Do you want to pick a new card?";
    }
    else if(sum===21){
        message="Wohoo!You got a Black jack";
    }
    else{
        message="You are out of the game";
        document.getElementById("newCard").disabled=true;
    }
    msg.innerText=message;
}

function getRandom(){
    let randomNum=Math.floor(Math.random()*13+1);
    if(randomNum==1){
        return 11;
    }
    else if(randomNum>10){
        return 10;
    }
    else{
        return randomNum;
    }
}

function newCard(){
    let newCard=getRandom();
    cards.push(newCard);
    sum+=newCard;
    renderCards();
}