const getSleepHours = day => {
    switch(day) {
      case 'monday':
        return 7
        break;
      case 'tuesday':
        return 7
        break;
      case 'wednesday':
        return 9
        break;
      case 'thursday':
        return 9
        break;
      case 'friday':
        return 8
        break;
      case 'saturday':
        return 8
        break;
      case 'sunday':
        return 8
        break;
      default:
        return 'error!'
    }
  };
  
  const getActualSleepHours = () => 
   getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  
  console.log(getSleepHours('monday'));
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  // console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
  if(actualSleepHours === idealSleepHours) {
    console.log('You have got a perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You have got more sleep than needed');
  } else if (actualSleepHours < idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hours less sleep than you needed this week. Get Some rest.');
  } else {
    console.log('Error!')
  }
    
  };
  
  calculateSleepDebt();