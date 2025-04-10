import express from 'express';
const app = express();
const port = 3000;

const router = express.Router();

router.get("/status", (req, res) => res.status(200).send("<h1>Server is running fine!</h1>"));
router.get("/greet/:name", (req, res) => res.status(200).send(`Hello there, ${req.params.name}`));
router.get("/message/:text", (req, res) => res.status(200).send(`You said: ${req.params.text}`));

router.get("/message/:to/:from/:msg", (req, res) => {
  const { to, from, msg } = req.params;
  
  res.status(200).send(`
      <p>From: ${from}</p>
      <p>To: ${to}</p>
      <p>Message: ${msg}</p> 
  `);
})

router.get("/user/:id/profile", (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
      res.status(404).send("User not found. Id is not a number");
  } else {
      res.status(200).json({
          userId: req.params.id,
          status: "active"
      })
  }
})

router.get("/hobby", (req, res) => res.status(200).send("Welcome to hobbies!"));
router.get("/hobby/:favorite", (req, res) => {
  const { favorite } = req.params;
  res.status(200).json({
      favorite
  })
})
router.get("/hobby/:type/:name", (req, res) => {
  const { type, name } = req.params;

  res.status(200).json({
      hobby: name,
      type
  })
})

export default router;



