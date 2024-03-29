import "./style.scss";
import commands from "./commands";

const promptStr = ">> ";
let commandHistory: string[] = [];
let i: number = 0;
let currentCommand: string = "";

const input = document.getElementById('input') as HTMLTextAreaElement;
const output = document.getElementById('output') as HTMLDivElement;

input.focus();

var selectedText = "";

output.addEventListener("mouseup", (e) => {
    if (e.button == 2 && selectedText) {
        e.preventDefault();
        e.stopImmediatePropagation();
        navigator.clipboard.writeText(selectedText);
        alert("Copied to clipboard");
    }
    
    if (window.getSelection && window.getSelection().type === 'Range') {
        selectedText = window.getSelection().toString();
    } else {
        selectedText = ""
        input.focus();
        e.stopImmediatePropagation();
    }
});

output.addEventListener('contextmenu', e => e.preventDefault());

const clear = () => {
    output.innerHTML = "";
}

input.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key == 'l') {
        e.preventDefault();
        e.stopImmediatePropagation();
        clear();
    }
    if (e.key === 'Enter') {
        i = 0;
        const command = input.value.trim();

        if (command === 'clear') {
            clear();
            commandHistory.push(command);
        } else if (command == '') {
            output.innerHTML += "---<br />";
        } else if (command === 'exit') {
            output.innerHTML = '';
            console.info("Due to limitations set by JavaScript, a window can only be closed if it has been opened by the script.");
            console.info("Therefore, you just have to click the 'x' button!");
            console.info("And I know that this message is in the console not primarily visible.")
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
        // prevent the default action of the up arrow key
        e.preventDefault();
        // save whatever the user was typing
        if (i == 0) currentCommand = input.value;
        // return if there's no previous command
        if (i == commandHistory.length) return;
        // get the previous command from the history array
        const previousCommand = commandHistory[commandHistory.length - ++i];
        // display the previous command in the input field
        !!previousCommand && (input.value = previousCommand);
    } else if (e.key === "ArrowDown") {
        // prevent the default action of the down arrow key
        e.preventDefault();
        // return if there's no next command
        if (i == 0) return;
        // get the next command from the history array
        const nextCommand = commandHistory[commandHistory.length - --i];
        // display the next command in the input field
        !!nextCommand ? input.value = nextCommand : input.value = currentCommand;
    }
});

const processCommand = (command: string): string => {
    // Process the command here and return the output
    if (commands[command]) {
        return commands[command]();
    }
    return "Command does not exist.";
}
