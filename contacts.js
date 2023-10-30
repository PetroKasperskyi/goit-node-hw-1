const fs = require("node:fs/promises");

const path = require("node:path");

const crypto = require("node:crypto");

const contactsPath = path.join(__dirname, "db", "contacts.json");


async function readContactsList() {
    try {
        const data = await fs.readFile(contactsPath, { encoding: "utf-8" })
      return JSON.parse(data);
    }
    catch (error) {
        throw new Error(error.massege)
  }
 
};
 
readContactsList();
async function writeContactsList(contacts) {
  try {
    return await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  } catch (error) {
    throw new Error(error.message);
  }
}

 async function listContacts() {
  try {
    return await readContactsList();
  } catch (error) {
    throw error;
  }
};

async function getContactById(contactId) {
  try {
    const allContacts = await readContactsList();
    const contact = allContacts.find((contact) => contact.id === contactId);
    return contact || null;
  } catch (error) {
    throw error;
  }
}


async function removeContact(contactId) {
  try{
  const allContacts = await readContactsList();
  const index = allContacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
   const [result] = allContacts.splice(index, 1);
    await writeContactsList(allContacts);
    return result;
  } catch (error) {
    throw error;
  }

}
async function addContact(name, email, phone) {
  try {
    const allContacts = await readContactsList();
    const newContact = { id: crypto.randomUUID(), name, email, phone };
    allContacts.push(newContact);
     await writeContactsList(allContacts);
    return newContact || null;
  } catch (error) {
    throw error;
    }
}
 
module.exports = {
  listContacts,
  getContactById,
  removeContact,
   addContact
}
