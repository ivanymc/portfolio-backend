import mongoose from "mongoose";
const Scheme = mongoose.Schema;

const ProjectSchema = new Scheme({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    requried: true
  },
  video: {
    type: String,
    requried: true
  },
  liveURL: {
    type: String,
    requried: true
  },
  githubURL: {
    type: String,
    requried: true
  },
  skills: {
    type: Array,
    requried: true
  }
}, { timestamps: true });

const Project = mongoose.model('Project', ProjectSchema);

export default Project;

