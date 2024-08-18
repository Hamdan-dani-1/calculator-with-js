const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.button')
let current = '';

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        if (e.target.textContent == '=')

            current = eval(current)
        display.textContent = current;




        if (e.target.textContent === 'c') {
            display.textContent = '0';
            current = '';
        }

        else {
            current += e.target.textContent;
            display.textContent = current
        }


    })
})
