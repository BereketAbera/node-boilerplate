// src/app.ts
import express from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "../build/routes";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from "../build/swagger.json";

// eslint-disable-next-line
import sequelize from './models';

// console.log(sequelize);

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