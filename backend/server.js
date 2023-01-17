const app = require('./app');
const path = require('path');

// Initial configuration
const dotenv = require('dotenv');
dotenv.config({path: path.join(__dirname, 'Configuration', 'configuration.env')});

// Declaring const variables
const PORT = process.env.PORT || 8000;

// Declaring the endpoints
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});