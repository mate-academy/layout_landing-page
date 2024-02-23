export function setNewInputsValues(fields, newValue = '') {
  fields.forEach((field) => {
    field.value = newValue;
  });
};
