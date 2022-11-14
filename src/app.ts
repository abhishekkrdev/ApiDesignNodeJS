// const express = require('express');
import express from "express";
import morgan from "morgan";
import cors from "cors";

import router from "./router";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();

app.use(cors());

// Logging Middleware
app.use(morgan("dev"));

// Body Parser Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.shhh_secret = "doggy";
  res.status(401);
  // res.send('Send')
  next();
});

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", protect, router);

// User Routes
app.post("/user", createNewUser);
app.post("/signin", signin);

export default app;
