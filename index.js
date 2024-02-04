// function scuberGreetingForFeet(){
//   // Write your code here!
// }

// function ternaryCheckCity(){
//   // Write your code here!
// }

// function switchOnCharmFromTip(){
//   // Write your code here!
// }

function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (feet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (2000 < feet && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return "No can do.";
    return 'No can do.';
  }
}
//space between//
function ternaryCheckCity (city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}
//space between//
function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}