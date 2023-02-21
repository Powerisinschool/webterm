import "./style.scss";

const promptStr = ">> ";

const input = document.getElementById('input') as HTMLTextAreaElement;
const output = document.getElementById('output') as HTMLDivElement;

input.focus();

output.addEventListener("click", (e) => {
    input.focus();
    e.preventDefault();
})

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = input.value.trim();

        if (command === 'clear') {
            output.innerHTML = '';
        } else {
            const result = processCommand(command);
            output.innerHTML += `${promptStr}${command}<br />${result.replace("\n", "<br />")}<br />`;
        }

        input.value = '';
        e.preventDefault();
    }
});

const processCommand = (command: string): string => {
    // Process the command here and return the output
    switch (command) {
        case "help":
            return `Powerisinschool - webterm
            Type \`help name\` to find out more about the function \`name\`.`;
        case "ls":
            return "/";
        default:
            return "Command does not exist.";
    }
}
