

/*const funA = () => {

    setTimeout(function () { //time limit control garna milxa
        console.log(`Wellcome funA`);
        funB();
    }, 3000);
}

const funB = () => {
    console.log(`Wellcome funB`);
}

funA();
//funB();*/


const perOne = (friend, callfrnd) => {
    console.log(`I am busy right now. I am talking to ${friend}.I will call you back.`);
    callfrnd();
}

const perTwo = () => {
    console.log(`Hey , Why were you calling me?`);
}

perOne("Dikshya", perTwo);