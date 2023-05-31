const { Calllog } = require('../gateway/database/adapter_mongo');

const createCalllog = (calllogData) => {
    const newCalllog = new Calllog(calllogData);
    return newCalllog.save();
};

const deleteCalllog = (calllogId) => {
    return Calllog.findByIdAndDelete(calllogId);
};

async function getAllCalllogs() {
    try {
        const calllogs = await Calllog.find({});
        return calllogs;
    } catch (error) {
        throw new Error('Failed to fetch calllogs');
    }
}

module.exports = {
    createCalllog,
    deleteCalllog,
    getAllCalllogs
};
