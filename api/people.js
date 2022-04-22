const express = require("express")
const router = express.Router()



router.get('/',(req,res)=>{

	res.write("<h1 style='text-align:center; font-family: comic sans ms; color: cornflowerblue'; margin-top:30px>\
		Welcome to My Varcel Api ..</h1>")
	res.send()
})

module.exports=router