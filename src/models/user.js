const mongoose = require ('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
        name:{
                type:String
        },
    
        age:  {
                type:Number
        },
    
        email: {
            type:String,
            unique:true,
            required:true,
            trim:true,
            lowercase:true,
            validate(value) {
                    if (!validator.isEmail(value))   {
                            throw new Error('Email is invalid')
                    }
                     
            }
    
    
        },
    
        password:  {
    
                type:String,
                required:true,
                trim:true,
                minlength:6,
                validate(value) {
                        
                        if (validator.contains(value,'password')) {
    
                                throw new Error('The password cannot contain the name --password-- ')
                        }
    
                } 
                
        }
    })

    userSchema.statics.findByCredentials = async (email,password) =>  {
        const user = await User.findOne({email:email})
        console.log(user)
        if(!user) {
                throw new Error('Unable to Login')
        }

        const isMatch = await bcrypt.compare(password,user.password)
        console.log('the plain text password is ' + password)
        console.log('the hashed password is ' + user.password)
        console.log(isMatch)
        
        if(!isMatch) {
                console.log('Apparently it is saying there is no match')
                throw new Error('Unable to Login')
                
        }
                return user
    } 



    userSchema.pre('save', async function (next) {
        const user = this
        console.log('just before saving')

        if(user.isModified('password')) {
                user.password = await bcrypt.hash('user.password', 8)

        }

        next()
})

const User = mongoose.model('User', userSchema)

module.exports = User