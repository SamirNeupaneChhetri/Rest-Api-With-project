const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the My First Api')
})

// Data
let movies = [
    {id: '1588323375416', title: 'Star Wars: Episode IX - The Rise of Skywalker', year: 2019, director: 'J.J. Abrams'},
    {id: '1588323390624', title: 'The Irishman', year: 2019, director: 'Martin Scorsese'},
    {id: '1588323412643', title: 'Harry Potter and the Sorcerers Stone', year: 2001, director: 'Chris Columbus'}
]

// Get all Movies...
app.get('/api/movies', (req, res) => {
    res.json(movies)
});


// Get movie by ID....
app.get('/api/movies/:id', (req, res) => {
    const movieId = req.params.id;
    const movie = movies.filter(movie => movie.id === movieId);
    if (movie.length > 0){
        res.json(movie)
    }       
    else{
        res.status(404).end()
    }
})


app.listen(port, () => {
    console.log(`Server is running in port: ${port}.`);
});