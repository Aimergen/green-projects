import express from "express";
<<<<<<< HEAD
import { getCategories, createCategory, updateCategory, deleteCategory } from "../services/category-service.js";
=======
import {
  getCategories,
  createCategory,
  getCategory,
} from "../services/category-service.js";
>>>>>>> f24706f9986585712638ae0bc222a50bacf25d38

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getCategories()); //categories -g avah huselt 
});

router.get('/:id', async(req, res) =>{
  const { id} =req.params;
  res.json(await getCategories(id)); //neg shirheg category avah huselt
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getCategory(id));
});

router.post("/", async (req, res) => {
  const { name, slug, imgUrl } = req.body; //category -g create hiih huselt
  try {
    res.json(await createCategory(name, slug, imgUrl)); //irsen json file -uudiig name, slug, imgUrl -uu horvuulne
  } catch (err) {
    res.status(400).json("Something went wrong"); // irsen json file aldaa zaasan nohtsold
  }
});

router.put('/:id', async (req, res)=>{
  const {name, slug, imgUrl} =req.body;
  const {id} =req.params;
  try {
    res.json(await updateCategory(id,name, slug, imgUrl));
  }catch(err) {
    console.error(err);
    res.status(400).json("Something went wrong");
  }
});

router.delete('/:id', async(req, res)=>{
  const {id}= req.params;
  try{
    res.json(await deleteCategory(id));
  }catch(err){
    res.status(400).json("Something went wrong");
  }
});


export default router;
