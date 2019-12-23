const express = require('express')


module.exports = (app) => {
    const usersController = require('../controllers/CandidateControllers.js');
    const router = express.Router()
    
   /*  router.get("/", usersController.get);
    router.get("/:id", usersController.getById);

    app.post("/v1/auth/create", usersController.create);
    
    router.patch("/:id", usersController.update)

    router.delete("/:id", usersController.delete);
        
    app.post("/v1/auth", usersController.login);
    app.use("/api/v1/users", router) */
    
}