export const isJson = (jsonOrNot) => {
  try {
    JSON.parse(jsonOrNot);
  } catch (error) {
    return false;
  }
  return true;
};

export const getPrettyJson = (json) => JSON.stringify(json, null, 4);
