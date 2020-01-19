export const getFormValues = (event, data) => {
  return Object.keys(data).reduce((acc, key) => {
    acc[key] = event.target.elements[key] ? event.target.elements[key].value.toString() : '';
    return acc;
  }, data)
};