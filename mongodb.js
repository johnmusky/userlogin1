const {MongoClient, ObjectID} = require('mongodb')
//const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error, client) => {
    //useUnifiedTopology: true
if(error)  {
console.log("Unable to connect to database")
console.log(error)
           }

console.log('Connection is ok')
const db=client.db(databaseName)

//db.collection('users').insertOne({
        //name:"John",
       //age:"56",
        //occupation:"civil engineer"

//db.collection('tasks')

// db.collection('tasks').insertMany( [{
//                 description:"clean windows",
//                 completed:false
//                     },
//                     {
//                 description:"change oil",
//                 completed:false          

//                     },
//                     {
//                 description:"wash the dishes",
//                 completed:true            
//                     }
// ], (error, result) =>  {

// if(error)   {console.log("unable to add collection to database")   }

// console.log(result.ops)

// })
//db.collection('tasks').findOne({_id: new ObjectID("60484ab9ab71d41cb0202f3a")}, (error, result) => {
//if(error) { return console.log("There is something wrong with the ID")}

    //console.log(result)
//})
//db.collection('tasks').find({completed:false}).toArray((error,search)=> {
//console.log(search)

//})

// db.collection('tasks').updateMany({completed:false}, {
//         $set: {completed:true}   }).then((result) => {
//             console.log(result)
//         }).catch((error) => {
//             console.log(error)

//         })

//db.collection('tasks').deleteOne({description:"change oil"}).then((result) => {
    //console.log(result)
//}).catch((error) => {
    //console.log(error)
//})


})


