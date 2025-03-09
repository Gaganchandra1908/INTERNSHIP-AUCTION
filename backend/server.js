
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import app from "./app.js"; // Importing Express app

// Load environment variables
dotenv.config();

// ✅ Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Use CORS Middleware **before** routes


// ✅ Define routes **before** starting server
app.get("/", (req, res) => {
  res.send("Auction Platform API is Running...");
});

// ✅ Start the server after everything is set up
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
