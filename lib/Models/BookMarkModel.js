import mongoose, { model, models } from "mongoose"

const bookMarkSchema = new mongoose.Schema({
    name: { type: String, required: true },
    animeID: { type: Number, required: true },
    image: { type: String },
    airing: { type: Boolean },
    status: { type: String },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
    bookMarkAt: { type: Date, default: Date.now },
})

const bookModel = mongoose.models.BookMarks || mongoose.model('BookMarks', bookMarkSchema)
export default bookModel