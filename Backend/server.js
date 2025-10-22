import express from 'express';
import notesRoutes from './src/routes/notesRoutes.js';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
dotenv.config();

const app = express();
connectDB();

app.use("/api/notes", notesRoutes)
app.listen (3000, ()=>{
    console.log('port running at 3000')
})
