import PostMessage from "../models/postMessage.js"
import mongoose from "mongoose"


export const getPosts = async (req, res) => {

  try {
    const postMessages = await PostMessage.find()
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);//bu asenkronus değil sanırım

  try {
    await newPost.save()//işte bu asenkronus

    res.status(201).json(newPost)
  } catch (error) {
    res

  }

}


export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no post with that id")

  await PostMessage.findByIdAndDelete(_id)
  res.json({ message: "post deleted successfully" })
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no post with that id")
  console.log({ ...post, _id })
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true }) //so we can get the updated version of that(I didnt understand this)
  res.json(updatedPost)
}


// export const likedsdfPost = async(req,res)=>{
//   const {id} = req.params
//   if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("no post with that id")
//     const post = await PostMessage.findById(id)

//     try {
//     console.log("heree")
//   const likedPost = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true})
//   res.json(post)

//   } catch (error) {
//     res.status(500).send({message:error})

//   }
// }

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  // Validate the ObjectId
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no post with that id")


    // Fetch the post
    const post = await PostMessage.findById(_id);

    // Check if the post exists
    if (!post) {
      return res.status(404).send("Post not found");
    }

    // Increment the like count
    const likedPost = await PostMessage.findByIdAndUpdate(
      _id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );

    // Respond with the updated post
    res.json(likedPost);

};
