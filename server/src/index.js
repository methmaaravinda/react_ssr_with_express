import express from "express";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom/server"
import App from "../../client/src/App"
import path from "path"
import fs from "fs"
const server = express();


server.use("/static", express.static(path.join(__dirname, "..", "client", "build", "static")))
server.get('*', (req, res) => {
    const context = {}
    const app = renderToString(
        <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    // const indexFile = path.resolve('../../client/build/index.html');
    const indexFile = path.join(__dirname, "..", "client", "build", "index.html");
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  });


server.listen(3030, ()=> {console.log("server is running on the port 3030.")})
