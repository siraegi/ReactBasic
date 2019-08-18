export const updateUser = (name) => ({
  type: 'updateUser',
  payload: {
    user: name
  }
})