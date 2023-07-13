import multer from 'multer';

const upload = multer({ dest: 'uploads' }) //means that when a file is uploaded, multer(middleware) will save it to the 'uploads' directory on the server.


export default upload;