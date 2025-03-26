import app from './app';
require('dotenv').config();

const PORT = process.env.PORT || 3000;

try {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
} catch (error: any) {
    console.log(`Error occurred: ${error.message}`);
}
