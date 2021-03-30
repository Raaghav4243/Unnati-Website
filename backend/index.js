const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
require('./models/user');

const User = mongoose.model('User');
const authenticate = require('./middleware/authenticate');
const restrictTo = require('./middleware/restrictTo');
app.use(cors());
app.use(express.json());
app.use(require('./routes/auth/auth'));
app.use(require('./routes/admin/index'));
app.use(require('./routes/student/index'));
app.use(require('./routes/teacher/index'));

// app.get("/",authenticate,(req,res)=>{
//     res.send("its Protected")
// })

// app.get("/admin",authenticate,restrictTo("ADMIN"),async (req,res)=>{
//     try {
//         const waitingEntrpnr = await User.find({role:"ENTREPRENEUR",isAdminApproved:false}).select("-password");
//         res.json({waitngList:waitingEntrpnr,done:true})
//     } catch (error) {
//         console.log(error);
//     }
// })

mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('connected to mongo');
});
mongoose.connection.on('err', () => {
  console.log('error while connecting', err);
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  // All the javascript and css files will be read and served from this folder
  app.use(express.static('client/build'));

  // index.html for all page routes  html or routing and naviagtion
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
