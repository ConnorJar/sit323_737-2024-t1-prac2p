const express = require('express'); // Imports required modules
const bodyParser = require('body-parser');
const path = require('path');

const app = express(); // Creates an Express app

app.use(bodyParser.json()); // Parses JSON data to the body
app.use(express.static(path.join(__dirname, 'public'))); // Makes files in the 'public' directory accessible to users

app.get('/', (req, res) => { // Defines a route for the homepage
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/add', (req, res) => { // Defines a route for the addition
    const { num1, num2 } = req.body;

    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Please enter a number' }); // An error will be produced if a user doesn't input a number into the required areas
    }

    const result = Number(num1) + Number(num2);
    res.json({ result });
});

// Starts the server
const PORT = process.env.PORT || 3000; // Uses a provided port or it defaults to port 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
