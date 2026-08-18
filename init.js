const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

let chat1 = new Chat({ //insert one
    from: "neha",
    to: "ayan",
    msg: "hi my name is neha",
    created_at: new Date,
});

let chats = [
    {
        from: "ayan",
        to: "akash",
        msg: "gie me a chai",
        created_at: new Date()
    },
    {
        from: "souvik",
        to: "akash",
        msg: "le bhi de diye",
        created_at: new Date()
    }
]

Chat.insertMany(chats);
