import express from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js';
import Cors from "cors";
//APP CONF


const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://samir:rTcaKZXS5JvGyTKd@cluster0.u2pzs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


//MIDDLEWARES
app.use(express.json());
app.use(Cors());
//DB CONF
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

//API ENDPOINTS
app.get('/', function (req, res) { res.status(200).send('UP AND FULL RUNNING'); })



app.post("/card", (req, res)=>{
    const dbCard = req.body;

    Cards.create(dbCard, (err,data) =>{
        if(err){
            res.status(500).send(err);}
            else{
                res.status(201).send(data);
            }
        })
    });


   app.get("/card", (req, res)=>{
        
        Cards.find ((err,data) => {
            if(err){
                res.status(500).send(err);
            }
                else{
                    res.status(200).send(data);
                }
            });
        }); 
    



//LISTENER
app.listen(port, ()=>console.log(`Listen to the port: ${port}`));
