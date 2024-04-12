class ApiError extends Error{
    constructor(
        statusCode, 
        message = "Something went Wrong", 
        errors = [], 
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack  = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError};



// Imagine you have a special box, a bit like a magical mailbox, where you can put messages. But unlike regular mail, this box is for sending messages when something goes wrong or doesn't work as expected. apiError is that box