//creates the box that all of the files inside the server folder will operate in.
import { sequelize} from './db/db.js';
import app from './app.js';

const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();