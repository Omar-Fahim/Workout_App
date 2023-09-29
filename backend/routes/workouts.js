
const express =require('express');



const router = express.Router();


//Get all workouts

router.get('/',(req,res)=>{
    res.json({mssg:'Get all workouts'})
})


//Get a single workout
router.get('/:id',(req,res)=>{
    
    res.json({mssg:'Get a single workout'})
})


//POST a new workout

router.post('/',(req,res)=>{
    res.json({mssg:'Posting a new workout'})
})

//Delete a workout 
router.delete('/:id',(req,res)=>{
    res.json({mssg:'DELETE a new workout'})
})

//UPDATE a workout 
router.patch('/:id',(req,res)=>{
    res.json({mssg:'UPDATE a new workout'})
})

module.exports = router