import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = "./upload";
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      if (err) reject();
      if (!files.file) return;
      console.log('Uploaded: ' + files.file.name);
      res.statusCode = 200;
      res.json({ text: 'ok' });
      resolve();
    });
  })

};