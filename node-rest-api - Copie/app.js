const express =  require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 7887;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/status", (request, response) => {
    let notes = [
        {
            id: 1,
            content: 'This is a note'
        },
    ];
     
     response.send(notes);
})
/*
let notes = [
    {
        id: 1,
        content: 'This is a note'
    },
];

function findNote(id){
    return notes.find((note)=> note.id === id);
}

//create new note
app.post('/notes', (req, res) =>{
   let newNote = req.body;
   notes.push(newNote);
   res.send(newNote);       
})

//retrieve all notes or a specific one
app.get('/notes/:id?', (req,res) => {
     if (req.params.id){
         let result = findNote(parseInt(req.params.id));
         if (!result){
             return res.status(404).send("The requested note does not exist")
         }else{
            return res.send(result);
         }
         
     } else{
         return res.send(notes);
     }
     
});

//update a note
app.put("/notes/:id", (req,res)=>{
    let updatedNote = findNote(req.params.id);
    if(!updatedNote){
       return res.status(400).send('The note to be updated does not exist');
    }
    for(let key in req.body){
        updatedNote[key] = req.body[key];
    }
    res.send(updatedNote);
});

//delete a note
app.delete('/notes/:id', (req,res)=>{
    let index = notes.indexOf(findNote(req.params.id))
    if(!index){
        return res.status(400).send('The is no such note')
    }
    notes.splice(index,1);
    res.send(`the note with the id ${req.params.id} has been deleted`) 
})

function findNote(id){
   for(const note of notes) {
       if(note.id === id) return note;
   }
} 
app.listen(3000 , ()=> console.log('server started'));
*/