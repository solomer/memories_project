import *as a from "../constants/actionTypes"

export default (posts = [], action) => {
  switch (action.type) {
    case a.FETCH_ALL:
      return action.payload
    case a.CREATE:
      return [...posts, action.payload]
    case a.UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
    case a.LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
    case a.DELETE:
      return posts.filter((post) => post._id !== action.payload)//bunu deneyelim burayı bozup bakalım bişeye etkli ediyo mu

    default:
      return posts
  }

} 