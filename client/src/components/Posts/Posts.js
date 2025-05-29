import React from 'react'
import Post from './Post/Post.js'
import useStyles from "./styles"
import { Grid2, CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'


const Posts = ({currentId,setCurrentId}) => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles()
  // console.log(posts)
  return (
    
    !posts.length ? <CircularProgress /> : (
      
      <Grid2 container className={classes.container} alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid2 item="true" key={post._id} xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId}/>
          </Grid2>
        ))}
      </Grid2>
    )

  )
}

export default Posts