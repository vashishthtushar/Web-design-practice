const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
.then(()=>{console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
        {
            from: "tanu",
            to: "manish",
            msg: "abey Tushar to gareeb tujhe kya lagta h uski gf banugi me!",
            created_at: new Date()
        },
        {
            from: "tanu",
            to: "tushar",
            msg: "Tushar yaar tu accha h but me manish ko like krti hu!",
            created_at: new Date()
        },
        {
            from: "toshi",
            to: "tushar",
            msg: "Tushar me tumko bht like krti hu but woh sb mere dost h bo mujhe jyada imp h!",
            created_at: new Date()
        },
        {
            from: "toshi",
            to: "aryan",
            msg: "arey tushar to bss timepass h , woh naa to smart h na hi paisa h uske ps , uske sth to me bss time pass krungi or maraungi tumse hi bss!",
            created_at: new Date()
        },
        {
            from: "Radhika",
            to: "tushar",
            msg: "Tushar tum acche ho lekin me to bss vivek ka hi muh me lungi!",
            created_at: new Date()
        },
        {
            from: "aastha",
            to: "tushar",
            msg: "Tushar is cheap , he is kind of gareeb and chutiya all!",
            created_at: new Date()
        },
        {
            from: "tushar",
            to: "toshi, tanu, aastha, radhika",
            msg: "maa chudao tum sab ek din tum jesi tange fela k bethegi mere samne bhn ki londiyon ko fekhunga tk nahi.....",
            created_at: new Date()
        },    
];


Chat.insertMany(allChats);