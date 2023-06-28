const initialState = {
  name: 'Phil Choi',
  age: 28,
  password: 'qwer1234',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
