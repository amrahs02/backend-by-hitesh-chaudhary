class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400 
    }
}




//Imagine you have a magical box that you can use to send messages to your friends. This box not only delivers your messages but also tells your friends whether your message was delivered successfully or if there was a problem.
//the ApiResponse class is like that magical box. It's a way for the program to send messages back to whoever asked for them. Here's what each part of the class does: