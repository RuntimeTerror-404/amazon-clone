const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IxEa0SBx12jfOTmps8dZtyr1xsSNWtbto3fGsl5CWNiRQbogsKzLVBYRmQT1vaqzlRq6MOopJuiMxonl0abKyUk00XH638tk9"
);

// API

// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Pyament request recieved BOOM!!>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-404/us-central1/api

// http://localhost:5001/clone-404/us-central1/api).
