let raceNumber = Math.floor(Math.random() * 1000);

const early = true;
let age = 13;

if(early && age > 18) {
  raceNumber += 1000;
}

if(early && age >= 18) {
  console.log(`Your race will begin at 9:30am, your number is: ${raceNumber}`)
} else if (!early && age >= 18) {
  console.log(`Your race will begin at 11:00am, your number is: ${raceNumber}`)
} else if (age < 18) {
  console.log(`Your race will begin at 12:30am, your number is: ${raceNumber}`)
}
