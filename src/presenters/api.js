// src/presenters/api.js
const express = require('express');
const router = express.Router();
const { getAllCalllogs, createCalllog, deleteCalllog } = require('../entities/Calllog')
const {
    createContact,
    getAllContacts,
    getContactByPhoneNumber,
    updateContact,
    deleteContact
} = require('../entities/Contact');

// API POST: Tạo mới một contact
router.post('/contacts', async (req, res) => {
    try {
        const contactData = req.body;
        const createdContact = await createContact(contactData);
        res.json(createdContact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API GET: Lấy danh sách contacts
router.get('/contacts', async (req, res) => {
    try {
        const contacts = await getAllContacts();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API GET: Lấy thông tin chi tiết của một contact dựa trên số điện thoại
router.get('/contacts/:phoneNumber', async (req, res) => {
    try {
        const phoneNumber = req.params.phoneNumber;
        const contact = await getContactByPhoneNumber(phoneNumber);
        if (contact) {
            res.json(contact);
        } else {
            res.status(404).json({ error: 'Contact not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API PUT: Cập nhật thông tin của một contact
router.put('/contacts/:phoneNumber', async (req, res) => {
    try {
        const phoneNumber = req.params.phoneNumber;
        const contactData = req.body;
        const updatedContact = await updateContact(phoneNumber, contactData);
        res.json(updatedContact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API DELETE: Xóa contact dựa trên số điện thoại
router.delete('/contacts/:phoneNumber', async (req, res) => {
    try {
        const phoneNumber = req.params.phoneNumber;
        await deleteContact(phoneNumber);
        res.json({ message: 'Contact deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Định nghĩa các route API
// Routes API cho Calllog
router.post('/calllogs', (req, res) => {
    const calllogData = req.body;
    createCalllog(calllogData)
        .then((newCalllog) => {
            res.status(201).json(newCalllog);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

router.delete('/calllogs/:id', (req, res) => {
    const calllogId = req.params.id;
    deleteCalllog(calllogId)
        .then(() => {
            res.status(200).json({ message: 'Calllog deleted successfully' });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

router.get('/calllogs', async (req, res) => {
    try {
        const calllogs = await getAllCalllogs();
        res.status(200).json(calllogs);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Các route API khác...

module.exports = router;
