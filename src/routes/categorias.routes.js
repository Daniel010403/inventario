 import {Router} from "express";
import { methodHTTP as categoriaController } from "../controller/categoria.controllers.js";
 const router = Router();

 router.get("/",categoriaController.getCategorias ) 
 export default router;