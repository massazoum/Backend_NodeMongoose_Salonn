const express = require('express');
const app = express();
const port = 3000

const mongoose = require('mongoose');
const cors = require('cors');


app.use(cors());
app.options('*', cors());

app.use(express.json());

const programmetemps =require('./models/programe')

app.get('/',(req,res) => {
 res.send("Salut à tous ici c'est zoumtech ")
})

// Base de données connecté au node.js et express.js backend

mongoose.connect('mongodb+srv://zoumaniguimassa12:Massazoumtech2000@zoumdatabase.knklhdw.mongodb.net/zoum?retryWrites=true&w=majority')
.then(()=> 
app.listen(port,()=>{
 console.log(`Node API app is running on port ${port}`)
},
console.log('connexion reussie')),
).catch((error)=>{
 console.log(error)
})


// Creation d'une nouvelle reservation

app.post('/reservations', (req, res) => {
 const newReservation = new programmetemps(req.body);
 newReservation
   .save()
   .then((data) => {
     res.status(201).json(data);
   })
   .catch((error) => {
     res.status(400).json({ error: error.message });
   });
});

// recupere toutes les reservations

app.get('/reservations', (req, res) => {
 programmetemps
   .find()
   .then((data) => {
     res.status(200).json(data);
   })
   .catch((error) => {
     res.status(500).json({ error: error.message });
   });
});

// mettre à jour la reservation par ID
app.put('/reservations/:id', (req, res) => {
 programmetemps
   .findByIdAndUpdate(req.params.id, req.body, { new: true })
   .then((data) => {
     res.status(200).json(data);
   })
   .catch((error) => {
     res.status(400).json({ error: error.message });
   });
});

// supprimer une reservation par ID
app.delete('/reservations/:id', (req, res) => {
 programmetemps
   .findByIdAndRemove(req.params.id)
   .then(() => {
     res.status(204).send();
   })
   .catch((error) => {
     res.status(400).json({ error: error.message });
   });
});
