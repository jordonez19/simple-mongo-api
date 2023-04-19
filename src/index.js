import app from './app'
import './database/mongo'
require('dotenv').config()

const port = process.env.PORT;
app.listen(port, console.log(`You are listening on port ${port}`));
