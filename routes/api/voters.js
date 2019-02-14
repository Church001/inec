const express = require('express');
const router = express.Router();

//Voter model
const Voter = require('../../model/Voter')
/**
 * @Route Get /api/voters/voter\
 * 
 * Gets voter's schema
 */
router.get('/voter', (req, res) => {
    res.json({ msg: "it works"})
})


router.post('/signup', (req, res) => {
    Voter.findOne({serial_number: req.body.serial_number})
        .then( voter => {
            if(voter){
                return res.status(400).json({serial_number:' serial_number already exist'})
            }
            else {
                const newVoter = new Voter({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    middle_name: req.body.middle_name,
                    serial_number: req.body.serial_number,
                    polling_unit: req.body.polling_unit,
                    ward: req.body.ward,
                    age: req.body.age,
                    marital_status: req.body.marital_status,
                    occupation: req.body.occupation,
                    address: req.body.address,
                    gender: req.body.gender
                })
                newVoter.save()
                    .then(voter => {
                        res.json(voter)
                    })
            }
        })
})

router.get('/check', (req, res) => {
    Voter.findOne({serial_number: req.body.serial_number})
        .then(voter => {
            if(voter){
                return res.json(voter)
            }
        })
        .catch(err => {
            return console.log(err)
        })
})
module.exports = router;