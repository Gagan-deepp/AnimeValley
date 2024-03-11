import mongoose, { model, models } from "mongoose"

const communitySchema = new mongoose.Schema({
    id: { type: String, required: true },
    userName: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    image: { type: String },
    bio: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    talks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Talks' }],
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

const communityModel = mongoose.models.Community || mongoose.model('Community', communitySchema)
export default communityModel