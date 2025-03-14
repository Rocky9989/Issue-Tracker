import Project from '../models/projects.js';

const home = async (req, res) => {
  try {
    const projects = await Project.find().sort('-createdAt'); // Removed the space before the hyphen
    return res.render('home', {
      title: 'Issue-Tracker',
      projects,
    });
  } catch (err) {
    console.log('Error', err);
    return res.redirect('/');
  }
};

export default home;
