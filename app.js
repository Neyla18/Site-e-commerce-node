
import express from 'express';

const app = express();
const PORT = 5000;


app.set("views", "./views");

app.set("view engine", "ejs");


app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

const check = (req, res, next) => {    
    if(req.url === "/") next();
}
const datas = [
  {
      "id": "3913686f-3698-4c64-9ca2-dd0d760d66be",
      "title": "zzzzzzzzzzzzzzzzzz",
      "description": "zzzzzzz",
      "seller": "zzzzz",
      "price": 1819684,
      "category": "vêtement",
      "url_img": "no_img.png"
  },
  {
      "id": "a9352343-53fe-472a-adb1-cb6009d5f490",
      "title": "ggggggg",
      "description": "ggg",
      "seller": "ggg",
      "price": 51,
      "category": "multimédia",
      "url_img": "no_img.png"
  },
  {
      "id": "a942343-53fe-472a-adb1-cb6009gfd490",
      "title": "ggggggg",
      "description": "ggg",
      "seller": "ggg",
      "price": 99,
      "category": "animaux",
      "url_img": "no_img.png"
  }
]




app.get("/contact", (req, res) => {
    res.status(200).render("layout", {template: "./contact"});
});


app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`);
});