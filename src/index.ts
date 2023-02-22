import "./style.scss";
import commands from "./commands";

const promptStr = ">> ";
let commandHistory: string[] = []

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
            commandHistory.push(command);
        } else if (command == '') {
            output.innerHTML += "---<br />";
        } else if (command === 'exit') {
            output.innerHTML = '';
        } else {
            const result = processCommand(command);
            output.innerHTML += `${promptStr}${command}<br />`
            result.split('\n').forEach(r => {
                output.innerHTML += `${r}<br />`;
            });
            commandHistory.push(command);
        }

        input.value = '';
        e.preventDefault();
    } else if (e.key === "ArrowUp") {
        input.value = commandHistory.slice(-1).join("");
    }
});

const processCommand = (command: string): string => {
    // Process the command here and return the output
    if (commands[command]) {
        return commands[command]();
    }
    return "Command does not exist.";
}
