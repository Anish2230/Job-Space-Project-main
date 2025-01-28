import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const isAuthenticated = async (req,res,next) => {
    
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message:"User not Authenticated",
                success:false
            })
        }

        //const jwt_key = qwtsgdjeydtsd

        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        }
        req.id=decode.userId;
        next();
    }
    catch (err) {
        console.error("Error:", err); // Log the actual error
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
    
}

export default isAuthenticated;
