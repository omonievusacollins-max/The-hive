// 🔥 Change this anytime
const websiteURL = "https://the-hive-4cukkszo3-collins-omonievusas-projects.vercel.app/Menu/menu.html";

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