import * as api from "../api"
import {FETCH_ALL, CREATE,DELETE,UPDATE,LIKE} from "../constants/actionTypes"



//action creators
export const getPosts = () => async (dispatch) =>{
  try {
    const {data} = await api.fetchPosts()
    console.log(data)
    dispatch ({type: FETCH_ALL, payload:data})
  } catch (error) {
    console.log(error.message)
  }



  // const action = {type: "FETCH_ALL", payload:[]}

  // dispatch( action)
}
export const createPost = (post)=> async(dispatch) =>{
  try {
    const {data}= await api.createPost(post);
    dispatch({type:CREATE,payload: data})
  } catch (error) {
    console.log(error)
  }

}
export const deletePost =(id)=> async(dispatch)=>{
  try {
    await api.deletePost(id) //burda geri bişey istemiyoz
    dispatch({type:DELETE,payload:id})
  } catch (error) {
    console.log(error)
  }
}
export const updatePost =(id,post)=> async(dispatch)=>{
try {
  const {data} =await api.updatePost(id,post)//data burda updated post oluyo
  console.log(data)
  dispatch({type:UPDATE,payload:data})
} catch (error) {
  console.log(error.message)
}
}

export const likePost = (id) => async(dispatch)=>{
  try {
    const {data} = await api.likePost(id)
    console.log(data)
    dispatch({type:LIKE,payload:data})
  } catch (error) {
    console.log(error)
  }
}