const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
console.log(__dirname)
const contactsPath = path.join(__dirname, "contacts.json");

const updateList = async (contactsList) => {
    await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
}

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}

async function getContactById(contactId) {
    const contactsList = await listContacts();
    const contact = contactsList.find(item => item.id === contactId);
    if (!contact) {
        return null;
    }
    return contact;
}

async function removeContact(contactId) {
    const contactsList = await listContacts();
    const indexToRemove = contactsList.findIndex(item => item.id === contactId);
    if (idexToRemove === -1) {
        return null;
    }
    const [result] = contactsList.splice(indexToRemove, 1);
    await updateList(contactsList);
    return result;
}

async function addContact(name, email, phone) {
    const contactsList = await listContacts();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone
    }
    contactsList.push(newContact);
    await updateList(contactsList);
    return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}