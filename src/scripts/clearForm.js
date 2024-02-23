import { setNewInputsValues } from './setNewInputsValues';

export function clearForm(form, fieldsSelectors) {
  const fields = form.querySelectorAll(fieldsSelectors);

  return (e) => {
    e.preventDefault();
    setNewInputsValues(fields);
  };
}
