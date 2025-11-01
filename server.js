const express = require('express')
const app = express()

app.use(express.static('views'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})