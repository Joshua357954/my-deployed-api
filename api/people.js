// const express = require("express")
// const router = express.Router()



// router.get('/',(req,res)=>{

// 	res.write("<h1 style='text-align:center; font-family: comic sans ms; color: cornflowerblue'; margin-top:30px>\
// 		Welcome to My Varcel Api ..</h1>")
// 	res.send()
// })

// module.exports=router


nst express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has successfully (Joshua)",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;










