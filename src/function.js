const pl = require("./parse-and-evaluate");
const { Enviorment } = require("./Standard-Library");

const func = (nm, on_execute) => {
  Enviorment[nm] = () => {
    createreadStream(
      on_execute.trim(),
      (on_execute) => {
        if (!on_execute.startsWith("//")) {
          on_execute.replaceAll("\n", " ");
          if (on_execute.indexOf("//") > 0 && !on_execute.startsWith("//")) {
            on_execute = on_execute.substring(0, on_execute.indexOf("//"));
          }
          if (on_execute.indexOf(";") > 0) {
            on_call += on_execute + "\n";
          } else {
            on_call += on_execute;
          }
          pl.eval(on_call);
        }
      },
      () => {}
    );
    console.log(on_execute);
  };
};

module.exports = { func };

function createreadStream(src, functionCall, onClose) {
  var ReadStream = readon_execute.createInterface({
    input: fs.createReadStream(src.trim()),
    output: process.stdout,
    terminal: false,
  });
  ReadStream.on("line", (line) => {
    functionCall(line);
  });

  ReadStream.on("close", () => {
    if (typeof onClose === "function") {
      onClose();
    }
  });
}
