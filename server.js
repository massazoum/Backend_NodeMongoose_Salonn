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
 res.send('Salut tous le monde')
})

// Base de données connecté à mon backend

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

// Get all reservations

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

// Update a reservation by ID
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

// Delete a reservation by ID
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
