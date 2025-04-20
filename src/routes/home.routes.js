import express from 'express';

const router = express.Router();

router.get("/name", (req,res) => {
  res.status(200).json({
    fname: "Nur",
    lname: "Mohamed",
    middle: "C",
    title: "Mr.",
    nickname: "browse"
  })
})// controller function

router.get("/name/:you", (req, res) => {
  const yourName = req.params.you;

  res.status(2000).json {{
    msg: `Hello, ${yourName}`
  }}
})

router.get("/mulitply/:a/:b", (req,res) => {
  //const oper1 = req.params.a;
  //const oper2 = req.params.b;
  const {a, b} = req.params;
 
  // convert String to number
  a = Number(a);
  b = Number(b);

  const result = oper1 * oper2;

  res.status(200).json ({
    result: result
  })
})

router.get("/names/first/:middle/:middle/last/:last"), (req, res) => {
  const {first, middle, last} = req.params;

  res.status(200).json ({
    first,
    middle,
    last
  })
}

export default router;