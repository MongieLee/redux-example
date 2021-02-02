const home = (state = 1, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    default:
      return state;
  }
};
export default home;
