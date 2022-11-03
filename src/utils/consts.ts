import figlet from "figlet";
import gradient from "gradient-string";

export const title = gradient.pastel.multiline(
  figlet.textSync("Dont Read Me Bro")
);
