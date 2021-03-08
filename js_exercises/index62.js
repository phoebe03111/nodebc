let monthNumber =  17;
let monthName = null;
let monthDays = null;

switch (monthNumber) {
    case 1:
        monthName = 'January';
        monthDays = 31;
        break;
    case 2:
        monthName = 'February';
        monthDays = 28;
        break;
    case 3:
        monthName = 'March';
        monthDays = 31;
        break;
    case 4: 
        monthName = 'April';
        monthDays = 30;
    break;
    case 5:
        monthName = 'May';
        monthDays = 31;
        break;
    case 6:
        monthName = 'June';
        monthDays = 30;
        break;
    case 7:
        monthName = 'July';
        monthDays = 31;
        break;
    case 8:
        monthName = 'August';
        monthDays = 31;
        break;
    case 9:
        monthName = 'September';
        monthDays = 30;
        break;
    case 10:
        monthName = 'October';
        monthDays = 31;
        break;
    case 11:
        monthName = 'November';
        monthDays = 30;
        break;
    case 12:
        monthName = 'December';
        monthDays = 31;
        break;
      };

if (monthName === null && monthDays === null) {
    console.log('Invalid number. Please try again');
} else {
    console.log(`${monthName} is the selected month and has ${monthDays} days`);
}