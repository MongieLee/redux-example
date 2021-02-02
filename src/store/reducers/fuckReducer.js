const initailState = "fuck";
const fuck = (state = initailState, action) => {
  switch (action.type) {
    case "change":
      return state + "you too";
    case "reset":
      return initailState;
    default:
      return state;
  }
};

export default fuck;
