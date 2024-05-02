//creates the box that all of the files inside the server folder will operate in.
const { db } = require('./db.js');
const app = require('./app.jsx');

const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await db.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();