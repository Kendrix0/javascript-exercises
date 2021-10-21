const findTheOldest = function(people) {
    const d = new Date();
    let year = d.getFullYear();

    let findAge = (person) => {    
        if (!person["yearOfDeath"]) {
            return year - person["yearOfBirth"]
        } else {
            return person["yearOfDeath"] - person["yearOfBirth"]
        };
    }; 

    let oldest = people.reduce((previous, current) => {          
        if (findAge(previous) > findAge(current)) {
            return previous
        } else {
            return current
        }
    });
    
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
