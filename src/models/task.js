const mongoose = require ('mongoose')
const validator = require('validator')
const taskSchema = mongoose.Schema({
    description: {
        type:String,
        required:true,
        trim:true
    },
    completed: {
            type:Boolean,
            default:false

    }
})


//const Task = mongoose.model('Task',taskSchema)



taskSchema.pre('save', async function (next) {
    const task = this
    console.log('just before saving')

    //if(task.isModified('password')) {
            //task.password = await bcrypt.hash('user.password', 8)

   // }

    next()
})
const Task = mongoose.model('Task', taskSchema)




module.exports = Task