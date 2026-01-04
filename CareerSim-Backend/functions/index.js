const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();

// 🔑 THIS FIXES YOUR ERROR
app.use(cors({ origin: true }));

app.use(express.json());
