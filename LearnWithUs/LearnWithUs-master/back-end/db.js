const mongoose  =require('mongoose');
const mongoURI = "mongodb+srv://uniyalshivani:shivani123@cluster0.zckqf6y.mongodb.net/learnwithus";

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      family: 4,
  }).then(()=> {
        console.log("connected to mongoose successfully");
    }).catch(e=>console.log(`not connected ${e}`))
}

module.exports = connectToMongo;