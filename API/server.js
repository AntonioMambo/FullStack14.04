const express= require ('express');
const mongoose = requise ('mongoose');
const cors = require ('cors');


const app= express();
app.use (express.json);
app.use (cors);