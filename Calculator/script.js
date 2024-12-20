document.addEventListener('DOMContentLoaded', function() 
{
    const display = document.getElementById('input');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => 
        {
            if(button.value === '=') 
            {
                try 
                {
                    display.value = eval(display.value);
                } 
                catch(error) 
                {
                    display.value = 'Error';
                }
            } 
            else if(button.value === 'AC') 
            {
                display.value = '';
            } 
            else if(button.value === 'DEL') 
            {
                display.value = display.value.slice(0, -1);
            } 
            else 
            {
                display.value += button.value;
            }
        });
    });
});
