import figlet from 'figlet';
import gradient from 'gradient-string';

const title = gradient.pastel.multiline(figlet.textSync("Dont Read Me Bro"));

function cli() {
    console.log(title);
}

export { cli };
