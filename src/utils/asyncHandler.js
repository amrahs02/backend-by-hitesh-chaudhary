const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
            catch((err) => next(err))
    }
}

export { asyncHandler }

// const asyncHandler = () => {

// }

// const asyncHandler = () =>{}
// const asyncHandler = (func) => () =>{}
// const asyncHandler = (func) => async () => {}

// wrapper fun that we use everywhere
// same as aboev fun , this is second method
// const asyncHandler = (fn) => async (req, res, next ,err) =>{

//     try{
//         await fn(req, res, next);
//     }
//     catch(err){
//         res.status(err.code || 500).js  on({
//             success: false, 
//             message: err.message
//         })

//     }
// }
