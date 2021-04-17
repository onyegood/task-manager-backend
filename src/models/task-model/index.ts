import mongoose from 'mongoose';

// An inerface that describes the properties 
// that are required to create new task
interface TaskAttr {
  name: string;
  date: string;
  status?: boolean;
}

// An interface that describes the properties
// the Task model has
interface TaskModel extends mongoose.Model<TaskDocument> {
  build(attrs: TaskAttr): TaskDocument;
}

// An interface that describes the properties
// that a Task document has
interface TaskDocument extends mongoose.Document {
  name: string;
  date: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  }
}, { 
  timestamps: true,
  toJSON: {
    transform(doc, ret){
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    }
  } 
});

taskSchema.statics.build = (attrs: TaskAttr) => {
  return new Task(attrs);
};

const Task = mongoose.model<TaskDocument, TaskModel>('Task', taskSchema);

export { Task };