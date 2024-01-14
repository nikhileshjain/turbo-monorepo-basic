import mongoose, { MongooseError } from "mongoose";

let alreadyDone = false;

export async function ensureDBConnected() {
    if (alreadyDone) return;

    try {
        await mongoose.connect(`${process.env.DB_URL}`);
        console.log("Successfully connected to the DB");
        alreadyDone = true;
    } catch (error :any) {
        console.error("Error connecting to the database:", error.message);
    }
}
