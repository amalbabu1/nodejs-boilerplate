router.get('/',(req,res)=>{
    res.send('hello user apis')
})

router.post('/',(req,res)=>{
    res.send('POST req to user apis ')
})

const cb1 = (req, res, next) =>{
    console.log('will move to next fn')
    next()
}

const cb2 = (req, res) => res.send("done")

router.get('/auth',
(req,res,next)=>{
    console.log('will move to next fn')
    next()
},
(req, res)=>{
    res.send('hello from B')
}
)

router.get('/auth/v2',cb1,cb2)

router.get('/validate',validate({name:'amal'}),cb2)


router.get('/:userId',(req,res)=>{
    // console.log(req.params)
    res.send(`${req.params.userId} is the user id`)
})
