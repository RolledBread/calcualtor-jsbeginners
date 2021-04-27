//set screen and buttons
const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('.btn')
const equalBtn = document.querySelector('.btn-equal')
const clearBtn = document.querySelector('.btn-clear') 

//set arrays with digits and operators for comparing them to user input
const digits = ['0','1','2','3','4','5','6','7','8','9']
const operators = ['+','-','*','/']

//set listener for clicking digits and operators
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let value = e.target.dataset.num //taking value of button pressed
        let len = screen.value.length
        //input values on screen, includes rules like: u can't put two operators or dots next to each other
        // `screen.value[len-1]` means: current last character on screen
        if(digits.includes(value)){
            if(len == 0){screen.value = value}
            else{
                if(operators.includes(screen.value[len-1])){screen.value += ' '+value} //space is used to split string with equation later
                if(digits.includes(screen.value[len-1]) || screen.value[len-1] == '.' ){screen.value += value}
            }
        }
        if(operators.includes(value)){
            if(len == 0){}
            else{
                if(operators.includes(screen.value[len-1])){}
                if(digits.includes(screen.value[len-1])){screen.value += ' ' + value}
            }
        }
        if(value =='.'){
            if(len == 0){}
            else{
                if(operators.includes(screen.value[len-1])){}
                if(digits.includes(screen.value[len-1])){
                    let splitStr = screen.value.split(' ')
                    if(!splitStr[splitStr.length-1].includes('.')){screen.value += value}//checks if last number has dot
                }
            }
        }
    })
})
//clears screen
clearBtn.addEventListener('click', function(){
    screen.value = '';
})
//runs calculation from string on screen
equalBtn.addEventListener('click',function(){
    if(digits.includes(screen.value[screen.value.length-1])){
        let parts = screen.value.split(' ') //outputs array with numbers and operators separatly
        
        while(parts.includes('/')){         //repeats the calculation until there is no more division symbols
            divI = parts.indexOf('/')       //takes first division symbol in array
            parts[divI] = parts[divI-1] / parts[divI+1] 
            parts[divI-1] = ''             
            parts[divI+1] = ''              //takes two numbers next two division symbol, runs the calculation and sets them to null
            let partsHolder = []
            let i = 0
            while(i<parts.length){
                if(parts[i] != ''){partsHolder.push(parts[i])}
                i++
            }                               
            parts = partsHolder             //removes empty spaces in array with equation
            console.log(parts)
        }

        while(parts.includes('*')){         //next whiles do the same for other operation
            divI = parts.indexOf('*')
            parts[divI] = parts[divI-1] * parts[divI+1]
            parts[divI-1] = ''
            parts[divI+1] = ''
            let partsHolder = []
            let i = 0
            while(i<parts.length){
                if(parts[i] != ''){partsHolder.push(parts[i])}
                i++
            }
            parts = partsHolder
            console.log(parts)
        }

        while(parts.includes('-')){
            divI = parts.indexOf('-')
            parts[divI] = parts[divI-1] - parts[divI+1]
            parts[divI-1] = ''
            parts[divI+1] = ''
            let partsHolder = []
            let i = 0
            while(i<parts.length){
                if(parts[i] != ''){partsHolder.push(parts[i])}
                i++
            }
            parts = partsHolder
            console.log(parts)
        }

        while(parts.includes('+')){
            divI = parts.indexOf('+')
            parts[divI] = +(parts[divI-1]) + +(parts[divI+1])
            parts[divI-1] = ''
            parts[divI+1] = ''
            let partsHolder = []
            let i = 0
            while(i<parts.length){
                if(parts[i] != ''){partsHolder.push(parts[i])}
                i++
            }
            parts = partsHolder
            console.log(parts)
        }
        if(parts.length == 1){screen.value = parts[0]} //in the end array has just one element with answer in it
    }
    
           
    
})




