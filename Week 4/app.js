const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// This route serves the calculator HTML page when a GET request is made to '/calculator'
app.get('/calculator', (req, res) => {
    // This sends the calculator.html file in the 'public' directory
    res.sendFile(path.join(__dirname, 'public', 'calculator.html'));
});

// Creates a route to handle the addition operation when a POST request is made to '/add'
app.post('/add', (req, res) => {
    try {
        // This extract num1 and num2 from the request
        const { num1, num2 } = req.body;
        // This checks if a number has been entered into num1 and num 2, it also checks if it's a number and not any other character
        if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
            throw new Error('Please provide valid numbers for number 1 and number 2.'); // This throws an error if invalid numbers are entered
        }
        const result = parseFloat(num1) + parseFloat(num2); // Calculates the result
        res.json({ result }); // This sends the result as a JSON response
    } catch (error) {
        res.status(400).json({ error: error.message }); // This handles any errors that may occur during the calculation
    }
});

// Creates a route to handle the addition operation when a POST request is made to '/subtract'
app.post('/subtract', (req, res) => {
    try {
        // This extract num1 and num2 from the request
        const { num1, num2 } = req.body;
        // This checks if a number has been entered into num1 and num 2, it also checks if it's a number and not any other character
        if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
            throw new Error('Please provide valid numbers for number 1 and number 2.'); // This throws an error if invalid numbers are entered
        }
        const result = parseFloat(num1) - parseFloat(num2); // Calculates the result
        res.json({ result }); // This sends the result as a JSON response
    } catch (error) {
        res.status(400).json({ error: error.message }); // This handles any errors that may occur during the calculation
    }
});

// Creates a route to handle the addition operation when a POST request is made to '/multiply'
app.post('/multiply', (req, res) => {
    try {
        // This extract num1 and num2 from the request
        const { num1, num2 } = req.body;
        // This checks if a number has been entered into num1 and num 2, it also checks if it's a number and not any other character
        if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
            throw new Error('Please provide valid numbers for number 1 and number 2.'); // This throws an error if invalid numbers are entered
        }
        const result = parseFloat(num1) * parseFloat(num2); // Calculates the result
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message }); // This handles any errors that may occur during the calculation
    }
});

// Creates a route to handle the addition operation when a POST request is made to '/divide'
app.post('/divide', (req, res) => {
    try {
        // This extract num1 and num2 from the request
        const { num1, num2 } = req.body;
        // This checks if a number has been entered into num1 and num 2, it also checks if it's a number and not any other character
        if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
            throw new Error('Please provide valid numbers for number 1 and number 2.'); // This throws an error if invalid numbers are entered
        }
        if (parseFloat(num2) === 0) {
            throw new Error('Cannot divide by zero.');
        }
        const result = parseFloat(num1) / parseFloat(num2); // Calculates the result
        res.json({ result }); // This sends the result as a JSON response
    } catch (error) {
        res.status(400).json({ error: error.message }); // This handles any errors that may occur during the calculation
    }
});

// This handles other errors that may occur
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' }); // This sends an error message
});

// Starts the server and listens for incoming requests on the port being used
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
