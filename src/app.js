import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

// use method is used for middlewares and configuration 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: '16kb' }))  //Hey, only send messages that are smaller than 16 kilobytes (which is a way to measure size on a computer). If the message is too big, it won't fit, just like trying to put too many toys in your toy box.
app.use(express.urlencoded({ extended: true, limit: "16kb" })) //, "urlencoded" means the message is written in a certain way that's easy for computers to understand, and "extended: true" means it can handle more complex messages
app.use(express.static("public")) // is like saying, "Hey, I have a folder called 'public' where I'm going to keep all the stuff I want people to see, like pictures, stylesheets, and scripts
app.use(cookieParser()) //app.use(cookieParser()) is like setting up a system to give out and keep track of these stickers, called cookies. When someone visits your website or app, you can give them a cookie with some information on it, like their username or preferences.


export { app }