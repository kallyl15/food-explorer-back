const {Router} = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/fileUploaderConfig.js");

const platesRoutes = Router();

const PlatesImagemController = require("../controllers/PlatesImagemController.js");
const PlatesController = require("../controllers/PlatesController.js");
const ensureAuthenticated = require("../middlewares/verifyAuthentication.js");

const platesController = new PlatesController();
const platesImagemController = new PlatesImagemController();

const upload = multer(uploadConfig.MULTER_PLATE);

platesRoutes.use(ensureAuthenticated);

platesRoutes.get("/", platesController.index);
platesRoutes.post("/", upload.single("imgPlate"), platesController.create);
platesRoutes.get("/:id", platesController.show);
platesRoutes.delete("/:id", upload.single("imgPlate"), platesController.delete);
platesRoutes.put("/:id", platesController.update);

platesRoutes.patch("/:id", upload.single("imgPlate"), platesImagemController.update);

module.exports = platesRoutes;