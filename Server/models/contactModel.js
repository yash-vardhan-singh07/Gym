const mongoose=require('mongoose');
const emailValidator=require('email-validator')
mongoose.connect('mongodb+srv://singhyashvardhan34:Vardhan16Singh@ss.amltamb.mongodb.net/?retryWrites=true&w=majority&appName=SS')
.then(function(db){
    console.log("contact db connected");
})
.catch(function(err){
    console.log(err);
});

const ReachSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],

    },
    email:{
        type:String,
        required:true,
        validate:function(){
            return emailValidator.validate(this.email);
        }
    },
    message:{
        type:String,
        required:[true]
    }
});



const ReachModel=mongoose.model('ReachModel',ReachSchema);
module.exports=ReachModel;
 