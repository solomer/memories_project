import React from 'react'
import { Container, Grow, AppBar, Typography, Grid2 ,Grid } from "@mui/material"
import memories from "./images/memories.png"
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from "./styles"
import { useEffect ,useState} from 'react'
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts"

const App = () => {
  const [currentId,setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("we got posts")
    dispatch(getPosts())
  }, [dispatch])

  // console.log(classes)
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'> Memories </Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid2 container className={classes.container} flexDirection="row" justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid2 item="true"  xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid2>
            <Grid2 item="true" width={300} xs={12} sm={7}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />

            </Grid2>
          </Grid2>
        </Container>
      </Grow>
    </Container>
  )
}

export default App