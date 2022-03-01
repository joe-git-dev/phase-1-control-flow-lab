function scuberGreetingForFeet(someValue){
  let result
  if (someValue <=199) {
    result = 'This one is on me!';
  }
  else if (someValue <=2500) {
    result = 'I will gladly take your thirty bucks.'
  }
  else if (someValue > 2500) {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(city){
  let result
  if (city === 'NYC') {
    result = 'Ok, sounds good.'
  } else if (city === 'Pittsburgh') {
    result = 'No go.'
  }
  return result 
}

function switchOnCharmFromTip(tip){
  let result 
  if (tip === 'generous') {
    result = 'Thank you so much.'
  }
  else if (tip === 'not as generous'){
    result = 'Thank you.'
  }
  else if (tip === 'thanks for everything'){
    result = "Bye."
  }
  return result
}