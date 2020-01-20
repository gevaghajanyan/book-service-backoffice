export const serializeQueryParams = (obj = {}) => {
  const queryParams = [];
  const props = Object.keys(obj);
  props.forEach((prop) => {
    const val = obj[prop];
    if (val || val === false || val === 0) {
      queryParams.push(`${encodeURIComponent(prop)}=${encodeURIComponent(val)}`);
    }
  });
  return queryParams.join('&');
};