import dotenv from "dotenv";
dotenv.config();

export const config = {
    mongoDbUri: process.env.MONGO_DB_URI,
    dbName: process.env.DB_NAME,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    nodeEnv: process.env.NODE_ENV,
};
