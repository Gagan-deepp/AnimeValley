import mongoose, { model, models } from "mongoose"

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    userName: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    image: { type: String },
    bio: { type: String },
    onBoard: { type: Boolean, default: false },
    talks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Talks' }],
    communities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Community'}],
})

const userModel = mongoose.models.User || mongoose.model('User', userSchema)
export default userModel