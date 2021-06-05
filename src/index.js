const express = require('express')
require('./db/mongoose.js')
//const User = require('./models/user.js')
//const Task = require('./models/task.js')
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task.js')

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



// app.get('/users', async (req,res) => {
// try{
//             const users = await User.find({})
//             res.send(users)
//     }
//         catch (e) {
//             res.status(500).send(e)
//     }
//    }) 



  




    // const task = new Task(req.body)
    // task.save().then(() => {
    //     res.status(201).send(task)

    // }).catch((e)=> {
    //     res.status(400).res.send(e)
       
    // })
    //res.send('index post command is working')
    //console.log(req.body)
//})


    
    // Task.find({}).then((tasks) => {
    //         res.send(tasks)
    // }).catch((e) => {
    //         res.status(500).send()
    
    // })



    // Task.findById(req.params.id).then((tasks) => {
    //         res.send(tasks)
    // }).catch((e) => {
    //         res.status(500).send()
    
    // })
 










