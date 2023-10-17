const  {readFile, writeFile} = require('fs');
console.log('start')
//provide a callback
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    // console.log(result)
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        // console.log(result)
        const second = result;
        writeFile('./temporary/fileB.txt',
        `Here is the result: ${first}, ${second}`,
        {flag: 'a'}
        ,(err, result)=> {
            if(err){
                console.log(err)
                return;
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')