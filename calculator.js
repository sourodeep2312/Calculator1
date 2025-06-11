const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

// Handle all button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        switch (value) {
            case '=':
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = 'Error';
                }
                break;

            case 'AC':
                currentInput = '';
                break;

            case 'C':
                currentInput = currentInput.slice(0, -1); // backspace
                break;

            case '+/-':
                if (currentInput) {
                    if (currentInput.startsWith('-')) {
                        currentInput = currentInput.slice(1);
                    } else {
                        currentInput = '-' + currentInput;
                    }
                }
                break;
            case '%':
                try {
                    currentInput = (eval(currentInput) / 100).toString();
                } catch {
                    currentInput = 'Error';
                }
                break;

            default:
                currentInput += value;
        }

        display.value = currentInput.slice(0, 9);
    });
});