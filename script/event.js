// 1---------------
const completeBtn =document.getElementsByClassName('complete-btn');
// console.log(completeBtn);



for(const btn of completeBtn){
    btn.addEventListener('click', function (event) {
// event.target.parentNode;
// const title = (event.target.parentNode.parentNode.children[0].children[1]);


        const number =document.getElementById('number').innerText;
        const convertedNumber = parseInt(number);

        const task = document.getElementById('task-number').innerText;
        const convertedTask =parseInt(task);

        const history = document.getElementById('ac-history');

        const btnFirst =document.getElementById('btn-1');
       
        if(convertedNumber === 20 && convertedTask === 6){
            alert('Board updated successfully');
            
            const sum =convertedNumber + 1;
            document.getElementById('number').innerText = sum;

            const sum2 =convertedTask - 1;
            document.getElementById('task-number').innerText = sum2;

            const time = new Date().toLocaleTimeString();
            const p = document.createElement('p');

            event.target.parentNode;
            const title = (event.target.parentNode.parentNode.children[0].children[1]).innerText;

            
            p.innerText= `
            you have complete the task ${title} at ${time}

            `
            history.appendChild(p)

           this.classList.add('disabled');

        } 


       if( convertedNumber === 21 && convertedTask === 5){
        alert('Board updated successfully');
            
        const sum =convertedNumber + 1;
        document.getElementById('number').innerText = sum;

        const sum2 =convertedTask - 1;
        document.getElementById('task-number').innerText = sum2;

        const time = new Date().toLocaleTimeString();
        const p = document.createElement('p');

        event.target.parentNode;
        const title = (event.target.parentNode.parentNode.children[0].children[1]).innerText;
        
        p.innerText= `
        you have complete the task ${title} at ${time}

        `
        history.appendChild(p)

       this.classList.add('disabled');

       }

       if( convertedNumber === 22 && convertedTask === 4 ) {

           alert('Board updated successfully');
            
            const sum =convertedNumber + 1;
            document.getElementById('number').innerText = sum;

            const sum2 =convertedTask - 1;
            document.getElementById('task-number').innerText = sum2;

            const time = new Date().toLocaleTimeString();
            const p = document.createElement('p');

            event.target.parentNode;
            const title = (event.target.parentNode.parentNode.children[0].children[1]).innerText;
            
            
            p.innerText= `
            you have complete the task ${title}  at ${time}

            `
            history.appendChild(p)

           this.classList.add('disabled');
       }
       if(convertedNumber === 23 && convertedTask === 3){
        alert('Board updated successfully');
            
        const sum =convertedNumber + 1;
        document.getElementById('number').innerText = sum;

        const sum2 =convertedTask - 1;
        document.getElementById('task-number').innerText = sum2;

        const time = new Date().toLocaleTimeString();
        const p = document.createElement('p');

        event.target.parentNode;
        const title = (event.target.parentNode.parentNode.children[0].children[1]).innerText;

        
        
        p.innerText= `
        you have complete the task ${title} at ${time}

        `
        history.appendChild(p)

       this.classList.add('disabled');
       }
       if(convertedNumber === 24 && convertedTask === 2){
        alert('Board updated successfully');
            
        const sum =convertedNumber + 1;
        document.getElementById('number').innerText = sum;

        const sum2 =convertedTask - 1;
        document.getElementById('task-number').innerText = sum2;

        const time = new Date().toLocaleTimeString();
        const p = document.createElement('p');

        event.target.parentNode;
        const title = (event.target.parentNode.parentNode.children[0].children[1]).innerText;
        
        p.innerText= `
    
              you have complete the task ${title} at ${time}
        `
        history.appendChild(p)

       this.classList.add('disabled');

       }
       if(convertedNumber === 25 && convertedTask === 1){
        alert('Board updated successfully');
        alert('task complete')
        
            
        const sum =convertedNumber + 1;
        document.getElementById('number').innerText = sum;

        const sum2 =convertedTask - 1;
        document.getElementById('task-number').innerText = sum2;

        const time = new Date().toLocaleTimeString();
        const p = document.createElement('p');

        event.target.parentNode;
        const title = (event.target.parentNode.parentNode.children[0].children[1]).innerText;
        
        p.innerText= `
         you have complete the task ${title} at ${time}

        `
        history.appendChild(p)

       this.classList.add('disabled');
       }

        else{
            // alert('invalid')

        }
    

    })
}




















