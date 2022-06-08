console.log("RUN!!");
const contactList = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
    try {
        switch (action) {
            case "list":
                const result = await contactList.listContacts();
                console.log(result);
                break;
            
            default:
                console.log("Wrong action");
        }
    } catch (error) {
        console.log(error.message);
    }
}

invokeAction({ action: "list" });