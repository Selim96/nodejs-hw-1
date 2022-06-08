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

const arr = hideBin(process.argv);
const {argv} = yargs(arr);
invokeAction(argv);