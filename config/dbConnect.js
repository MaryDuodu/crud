const mongoose = require("mongoose"); 

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/blog")
        console.log("db connect Successfully")
    }catch (error) {
        console.log(error)
        process.exit(1)
    }
};

module.exports = {
    dbConnect,
}