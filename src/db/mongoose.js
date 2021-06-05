const mongoose = require ('mongoose')
//const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false 
})



// const me = new User({
//     name:'Dave',
//     age:45,
//     password:'ohuidhfuishdfuihb'
    
// })

// me.save().then( () =>  {
//     console.log(me)

// }).catch( (error) => {
//     console.log('Error: ', error)

// })



// const task = new Task({
//     description:'Rotate the Tires',
//     completed:false
// })

//  task.save().then( () =>  {
//      console.log(task)

//  }).catch( (error) => {
//      console.log('Error: ', error)

//  })