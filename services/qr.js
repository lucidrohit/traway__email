const qrcode = require("qrcode");
// const qrOption = {
//   margin: 7,
//   width: 175,
// };

module.exports.qrCodeGen = async (qrString) => {
  const bufferImage = await qrcode.toDataURL(qrString);
  return bufferImage;
};
