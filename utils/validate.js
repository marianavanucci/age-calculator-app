const validate = (data) => {
    const errors = {};

    if(!data.day) {
        errors['day'] = "Must be a valid day"
    }
    if(!data.month) {
        errors['month'] = "Must be a valid month"
    }
    if(!data.year) {
        errors['year'] = "Must be in the past"
    }

    return errors;
};

const user = {
    day: 12,
    month: 12,
    year: 2000,

};

const validationErrors = validate(user);
console.log(validationErrors);
