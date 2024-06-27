process.stdout.write("digite sua idade  \n");
process.stdout.once("data", function (data) {
    const YEAR = 2024;
    let idade = parseInt (data.toString() .trim());
    let ano = YEAR - idade;
    process.stdout.write("Olá, você nasceu em: " +  ano);

    process.stdout.write("\n você possui CNH?");
    let CNH = parseInt (data.toString() .trim());
    if (idade >=18) {

        console.log("\n Sim")
    } else if (idade <18) {
        console.log("\n você não possui CNH")
    }
    process.exit();
});