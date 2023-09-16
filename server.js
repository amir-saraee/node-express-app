const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const authRoutes = require('./routes/authRoutes');
const articleRoutes = require('./routes/articleRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const courseRoutes = require('./routes/courseRoutes');
const courseVideoRoutes = require('./routes/courseVideoRoutes');
const lectureRoutes = require('./routes/lectureRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Initialize Sequelize and sync models
sequelize
  .sync()
  .then(() => {
    console.log('Database synced.');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Configure routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/blog', articleRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/lectures', lectureRoutes);
app.use('/api/course-videos', courseVideoRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => console.log(`App is running in port ${PORT}`));
