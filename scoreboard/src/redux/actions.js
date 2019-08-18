import {
  ADD_PLAYER,
  CHANGE_SCORE,
  REFRESH_HERO,
  REMOVE_PLAYER,
  SEARCH_NAME,
  SET_ISSORTED,
  UPDATE_TITLE
} from "./actionTypes";

export const updateTitle = (title) => {
  return {
    type: UPDATE_TITLE,
    title
  }
}
export const addPlayer = (name) =>{
  return {
    type: ADD_PLAYER,
    name
  }
}
export const changeScore = (id, delta) => {
  return {
    type: CHANGE_SCORE,
    id,
    delta
  }
}
export const removePlayer = (id) => {
  return {
    type: REMOVE_PLAYER,
    id
  }
}
export const setIsSorted = (isSorted) => {
  return {
    type: SET_ISSORTED,
    isSorted
  }
}
export const searchName = (name) => {
  return {
    type: SEARCH_NAME,
    name
  }
}
export const refreshHero = () => {
  return {
    type: REFRESH_HERO
  }
}