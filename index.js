const contactList = require("./contacts");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const invokeAction = async ({ action, id, name, email, phone }) => {
    try {
        switch (action) {
            case "list":
                const result = await contactList.listContacts();
                console.log(result);
                break;
            
            case "get":
                const oneContact = await contactList.getContactById(id);
                console.log(oneContact);
            break;

            case "add":
                const newContact = await contactList.addContact(name, email, phone);
                console.log(newContact);
            break;

            case "remove":
                const deleteContact = await contactList.removeContact(id);
                console.log(deleteContact);
            break;
            
            default:
                console.warn("\x1B[31m Unknown action type!");
        }
    } catch (error) {
        console.log(error.message);
    }
}

// invokeAction({ action: "list" });
// invokeAction({action: "get", id: "1"});
// invokeAction({action: "add", name: "Girl genius", email: "Foglio", phone: "888-88888"});
// invokeAction({action: "remove", id: "g94NWkFuunG_P1I6-siex"});

// const acrionIndex = process.argv.findIndex(item => item === "--action");
// if (acrionIndex !== -1) {
//     const action = process.argv[acrionIndex + 1];
//     console.log(typeof action)
//     invokeAction({action});
// }

const arr = hideBin(process.argv);
const {argv} = yargs(arr);
console.log(argv);
invokeAction(argv);