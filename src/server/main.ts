import express, { Request, Response } from "express";
import ViteExpress from "vite-express";
import request from "request";

const app = express();
ViteExpress.config({
  mode:
    process.env.VITE_VERCEL_ENV === "production"
      ? process.env.VITE_VERCEL_ENV
      : "development",
});

app.get("/exchange/rates", (_req: Request, res: Response) => {
  request(
    {
      url: "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt",
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error.message });
      }
      res.json(body);
    },
  );
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
