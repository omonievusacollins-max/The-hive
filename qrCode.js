// 🔥 Change this anytime
const websiteURL = "https://5sfwq576-5500.uks1.devtunnels.ms/";

// Display link text
document.getElementById("linkText").textContent = websiteURL;

// Generate QR
new QRCode(document.getElementById("qrcode"), {
  text: websiteURL,
  width: 250,
  height: 250,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});