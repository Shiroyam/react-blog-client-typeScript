export const openAuthorization = () => {
  return {
    type: "OPEN_AUTH",
  };
};

export const closeAuthorization = () => {
  return {
    type: "CLOSE_AUTH",
  };
};
