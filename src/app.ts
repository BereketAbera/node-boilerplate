// src/app.ts
import express from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "../build/routes";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from "../build/swagger.json"

export const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

RegisterRoutes(app);