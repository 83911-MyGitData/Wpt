const db = require('./db');
const upload = require('./upload');
const app = express();

app.use(express.json());

app.post('/category', upload.single('file'), (req, res) => {
   const file = req.file;
   if(!file)
    {
      const multerText = Buffer.from(file.buffer).toString("utf-8");
    }
    const result = {
      fileText: multerText,
      title: req.body.title,
      details:req.body.details // adding the name from req.body in the result
    };
  
    res.send(result);
});

