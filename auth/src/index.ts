import express from 'express';
import {json} from 'body-parser'

const app = express()
app.use(json())

app.get('/api/users/currentuser', (req,res)=>{
 res.send('hi');
})

app.listen(5000, () => {
    console.log('listening on port 5000!!!AAAA')
})
