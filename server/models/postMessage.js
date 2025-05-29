import mongoose from "mongoose";



const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,//bunu demin de yaptık burda da aynısı sadece ekstra bişey yazmak için daha profesyonel yaptık
    default: 0
  }
}, {
  timestamps: true
})

const postMessage = mongoose.model("PostMessage",postSchema)

export default postMessage