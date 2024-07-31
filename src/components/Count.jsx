export const initialState = { count: 0 };

export const COUNT_TYPES = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

export default function reduser(state, action) {
  const payload = action.payload ? action.payload : 1;

  switch (action.type) {
    case COUNT_TYPES.INCREMENT:
      return { ...state, count: state.count + payload };
    case COUNT_TYPES.DECREMENT:
      return { ...state, count: state.count - payload };
    case COUNT_TYPES.RESET:
      return { count: 0 };

    default:
      return state;
  }
}
