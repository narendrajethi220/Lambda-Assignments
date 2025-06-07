import dotenv from "dotenv";

function loadEnv() {
  dotenv.config();
}
loadEnv();

export const config = {
  API_VERSION: process.env.API_VERSION || "v1",
  PORT: process.env.PORT || 3030,
  NODE_ENV: process.env.NODE_ENV || "development",
};
