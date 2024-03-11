import mongoose, { model, models } from "mongoose"

const talkSchema = new mongoose.Schema({
    content: { type: String, required: true },
    heading: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    communities: { type: mongoose.Schema.Types.ObjectId, ref: 'Community' },
    parentId: { type: String },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Talks" }]
})

const talkModel = mongoose.models.Talks || mongoose.model('Talks', talkSchema)
export default talkModel