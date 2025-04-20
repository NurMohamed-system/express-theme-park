import express from 'express';

const router = express.Router();

router.get("/noise", (req, res) => {
  res.status(200).send("oink");
})

router.get("/math/add", (req, res) => {
  let {a, b} = req.query;

  if (!a || !b) {
    return res.status(404).send("Missing paramters a and/or b");
  }

  // const one = req.query.a;
  // const two = req.query.b;

  // there probably a problem here..?
  a = Number(a);
  b = Number(b);

  const result = a + b;

  res.status(200).send(`$a} ${b} ${result}`);
})

export default router;