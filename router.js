/* ==========================================================================
** Routes Controller
** 29/01/2021
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// imports
// --------------------------------------
    const express =  require('express');
    const router =  express.Router();


// --------------------------------------
// Setup Router
// --------------------------------------
    router.get("/", (req, res) => {
        
        res.send({ response: "Server is up and running." }).status(200);
    });
  



module.exports = router;