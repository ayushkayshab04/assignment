const { payloadUtils } = require('../utils');

module.exports = (data, req, res) => {
    res.status(200).send(payloadUtils.getsuccessPayload(data));
};