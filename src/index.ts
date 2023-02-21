import "./style.scss";

const promptStr = ">> ";

const input = document.getElementById('input') as HTMLTextAreaElement;
const output = document.getElementById('output') as HTMLDivElement;

input.focus();

output.addEventListener("click", (e) => {
    input.focus();
})

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = input.value.trim();

        if (command === 'clear') {
            output.innerHTML = '';
        } else {
            const result = processCommand(command);
            output.innerHTML += `${promptStr}${command}<br />${result}<br />`;
        }

        input.value = '';
        e.preventDefault();
    }
});

const processCommand = (command: string): string => {
    // Process the command here and return the output
    switch (command) {
        case "help":
            return "help functions";
        case "ls":
            return "/";
        default:
            return "Command does not exist.";
    }
}
