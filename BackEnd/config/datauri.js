import DataUriParser from "datauri/parser.js"
import path from "path";  

/*const getDataUri = (file) =>{
    const  parser = new DataURIParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
}*/

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
    //return dataUri;
};


export default getDataUri; 