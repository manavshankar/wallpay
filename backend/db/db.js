const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://manavshankar20:manunikat@cluster0.n3kzzoq.mongodb.net/paytm');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required :true,
        unique:true,
        minLength:3,
        maxLength:30
    },
    firstname:{
        type : String,
        required :true,
        maxLength : 50,
        trim:true
    },
    lastname:{
        type : String,
        required : true,
        maxLength : 50,
        trim : true
    },
    password:{
        type : String,
        required : true,
        minLength : 6
    }
})

const accountSchema = new mongoose.Schema({
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type :Number,
        required :true
    }
})

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports={
    User,
    Account
}