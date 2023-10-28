const fs = require("node:fs/promises");

const path = require("node:path");


const contactsPath = path.join(__dirname, "db", "contacts.json");

async function readContactsList() {
    try {
        const data = await fs.readFile(contactsPath, { encoding: "utf-8" })
        return JSON.parse(data)
    } catch (error) {
        throw new Error(error.massege)
    }
};

async function writeContactsList(contacts) {
  try {
    return await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  } catch (error) {
    throw new Error(error.message);
  }
}

function listContacts() {
 
};

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту. 
}

