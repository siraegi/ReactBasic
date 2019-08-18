export const userReducer = (state = '', action) => {
  switch(action.type) {
    case 'updateUser':
      return action.payload;
    default:
      return state;
  }
  return state;
}