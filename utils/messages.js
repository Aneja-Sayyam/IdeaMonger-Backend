const moment = require('moment');

function formatMessage(fromUser, text,roomId,id) {
  return {
    id,
    roomId,
    fromUser,
    text,
    time: moment().format('h:mm a')
  };
}

function date(){
    return moment().format('DD/MM/YYYY');
}
module.exports = {
    formatMessage,
    date
};