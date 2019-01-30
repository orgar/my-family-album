const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmail(data.school)) {
    errors.school = "School feild is required";
  }

  if (Validator.isEmail(data.degree)) {
    errors.degree = "Degree field is required";
  }

  if (Validator.isEmail(data.fieldOfStudy)) {
    errors.fieldOfStudy = "FieldOfStudy field is required";
  }

  if (Validator.isEmail(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
