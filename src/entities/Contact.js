const Contact = require('../gateway/database/mongo.contact');

// Hàm tạo mới một contact
async function createContact(contactData) {
    try {
        const contact = new Contact(contactData);
        const createdContact = await contact.save();
        return createdContact;
    } catch (error) {
        throw new Error('Failed to create contact.');
    }
}

// Hàm lấy danh sách contacts
async function getAllContacts() {
    try {
        const contacts = await Contact.find();
        return contacts;
    } catch (error) {
        throw new Error('Failed to get contacts.');
    }
}

// Hàm lấy thông tin chi tiết của một contact dựa trên số điện thoại
async function getContactByPhoneNumber(phoneNumber) {
    try {
        const contact = await Contact.findOne({ phoneNumber });
        return contact;
    } catch (error) {
        throw new Error('Failed to get contact by phone number.');
    }
}

// Hàm cập nhật thông tin của một contact
async function updateContact(phoneNumber, contactData) {
    try {
        const updatedContact = await Contact.findOneAndUpdate({ phoneNumber }, contactData, { new: true });
        return updatedContact;
    } catch (error) {
        throw new Error('Failed to update contact.');
    }
}

// Hàm xóa contact dựa trên số điện thoại
async function deleteContact(phoneNumber) {
    try {
        await Contact.deleteOne({ phoneNumber });
    } catch (error) {
        throw new Error('Failed to delete contact.');
    }
}

module.exports = {
    createContact,
    getAllContacts,
    getContactByPhoneNumber,
    updateContact,
    deleteContact
};
