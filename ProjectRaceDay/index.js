let raceNumber = Math.floor(Math.random() * 1000);
let runnersEarly = true;
let runnersAge = 18;

if(runnersEarly && runnersAge > 18) {
raceNumber += 1000;
}

if( runnersEarly && runnersAge > 18) {
  console.log(`The race will begin at 9:30 am and your race number is ${raceNumber}.`);
} else if (!runnersEarly && runnersAge > 18) {
  console.log(`The race will begin at 11:00 am and your race number is ${raceNumber}.`);
} else if (runnersAge < 18) {
  console.log(`The race will begin at 12:30 pm and your race number is 
${raceNumber}.`)
} else {
  console.log(`This is your race number ${raceNumber}, please contact helpdesk regarding your time to begin the race.`)
}
