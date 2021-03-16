const greet = (firstName, lastName, message) => {
    console.log(`Hi ${firstName} ${lastName}`); 
    message(); 
};

const message = () => {
    console.log('This code gets executed after the greet function call');
}


module.exports = greet;