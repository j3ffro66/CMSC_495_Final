// Import the required modules
import express from 'express';

const router = express.Router();

//DELETE method to force end the session early
router.get('/', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                console.log(err)
                res.status(400).send('Unable to log out')
            } else {
                res.redirect('/login')
            }
        });
    } else {
        res.end()
    }
})


export default router;