// Collecting Data 
const form = document.querySelectorAll('#contactForm');
const submit = document.getElementById('submit');


submit.addEventListener('click',updateValue);
function updateValue(e){
    e.preventDefault();
    let name = form[0][0].value;
    let department = form[0][1].value;
    let shift = form[0][2].value;
    let gpa = form[0][3].value;
   
    if(name !== '' & department !== '' & shift !== ''& gpa !=='')
    {
        let result =name+' '+department+' '+shift+' '+gpa
        console.log(result);
        SaveStudentData(result)
    }
    
    // let value = e.target.value;
}


// Storing Data 
function SaveStudentData(data){
    const fs = require('fs');

fs.readFile('Text.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data)
});
const content = data

fs.appendFile('Text.txt',content,err=>{
    if(err){
        console.err;
        return;
    }
})
}

