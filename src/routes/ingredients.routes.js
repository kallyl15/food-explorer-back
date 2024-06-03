const {Router} = require("express");

const IngredientsController = require("../Controllers/IngredientsController");
const ensureAuthenticated = require("../middlewares/verifyAuthentication");

const ingredientsRoutes = Router();

const ingredientsController = new IngredientsController();

ingredientsRoutes.use(ensureAuthenticated);

ingredientsRoutes.get("/:id", ingredientsController.show);
ingredientsRoutes.put("/:id", ingredientsController.update);

module.exports = ingredientsRoutes;