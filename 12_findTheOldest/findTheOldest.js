const findTheOldest = function(personArray) {

    let oldest = undefined;

    for(let i = 0; i < personArray.length; i++) {

        let person = personArray[i];

        if (person.yearOfDeath == undefined) {
            person.age = new Date().getFullYear() - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }

        if(oldest == undefined) {
            oldest = person;
        } else if(person.age > oldest.age) {
                oldest = person;
        }

    }
    
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
