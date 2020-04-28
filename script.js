const name = "Jack Chase";
const age = 22;
const birthday = "September 30";
const detroitGC = true;
const lifeEvents = ["I was born in Rochester, Michigan.", "I went to Wayne State University.", "I went to Cooperstown, New York when I was 12 for a baseball tournament.", "I graduated from Adams High School in 2016."];

if (detroitGC) {
    message = `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`;
    console.log(message);
} else {
    message = `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`;
    console.log(message);
}

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i])
};

let counter = 0;
while (true) {
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    if (randomNumber !== 5) {
        counter++;
        console.log(`${randomNumber} !== 5`);
    }
    else {
        counter++;
        count = `5 === 5. It took ${counter} iterations to randomly generate the number 5.`;
        console.log(count);
    } {
        break;
    }
}








