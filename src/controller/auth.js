const db=require('../db')
const {}=require('bcryptjs')
exports.getUsers=async(req,res)=>{
    try{
        const response=await db.query('select email from users')
        console.log(rows)
        return res.status(200).json({
            success:true,
            users:rows,
        })
    }catch (error){
        console.log(error.message)
    }
}
exports.register=async(req,res)=>{
    const{email,password}=req.body
    try{
        const handledpassword=await hash(password,10)
        await db.query('insert into users(email.password) values($1,$2)',[email,handledpassword])
        return res.status(201).json({
            success:true,
            message: 'The registration was succesfull'
        })
        
    }catch (error){
        console.log(error.message)
        return res.status(500).json({
            error:error.message,
        })
    }
}