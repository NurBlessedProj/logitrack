import Shipmentthree from "@/models/Shipmentthree";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function generateNumericId(length) {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const POST = async (req) => {
  try {
    await dbConnect();

    const shipmentData = await req.json();
    let imageData = null;

    // Generate tracking number once and use it consistently
    const trackingNumber = `FSLG-${generateNumericId(14)}`;

    // Extract featuredImage from the request data
    const { featuredImage, ...otherData } = shipmentData;

    // Process image if it exists
    if (
      featuredImage &&
      typeof featuredImage === "string" &&
      featuredImage.startsWith("data:")
    ) {
      try {
        console.log("Uploading image to Cloudinary...");
        const uploadResult = await cloudinary.uploader.upload(featuredImage, {
          public_id: `shipment_${trackingNumber}_${Date.now()}`, // Generate a unique ID
        });

        console.log("Image upload successful:", uploadResult.public_id);
        imageData = {
          url: uploadResult.secure_url,
          publicId: uploadResult.public_id,
        };
      } catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        // Return detailed error for debugging
        return new NextResponse(
          JSON.stringify({
            message: "Failed to upload image",
            error: uploadError.message,
          }),
          { status: 400 }
        );
      }
    } else if (featuredImage) {
      console.log("Invalid image format received:", typeof featuredImage);
      return new NextResponse(
        JSON.stringify({
          message: "Invalid image format. Must be a base64 data URL string.",
        }),
        { status: 400 }
      );
    }

    const foundShipment = await Shipmentthree.findOne({ trackingNumber });
    if (foundShipment) {
      return new NextResponse(
        JSON.stringify({ message: "Shipment for this sender already exists" }),
        { status: 400 }
      );
    }

    const newShipment = new Shipmentthree({
      ...otherData,
      trackingNumber,
      status: "pending",
      currentPosition: [0, 0],
      featuredImage: imageData, // Use the uploaded image data or null
    });

    await newShipment.save();

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: {
        name: "SkyboundExpress Shipping",
        address: "contact@logitrackexpress.com",
      },
      to: shipmentData.receiverEmail,
      cc: shipmentData.senderEmail,
      subject: `Shipment Confirmation - Tracking #${trackingNumber}`,
      messageId: `${trackingNumber}-${Date.now()}@skyboundexpress.com`,
      headers: {
        "Feedback-ID": `${trackingNumber}:shipping:skyboundexpress:1`,
        "List-Unsubscribe": `<https://skyboundexpress.com/unsubscribe/${trackingNumber}>, <mailto:unsubscribe@skyboundexpress.com?subject=unsubscribe_${trackingNumber}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Shipment Confirmation</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e0e0e0;">
              <h1 style="color: #333333; font-size: 24px; margin-bottom: 20px;">Shipment Confirmation</h1>
              
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                <p style="margin: 0; font-size: 16px;">Tracking Number: <strong>${trackingNumber}</strong></p>
              </div>

              <!-- Pending Package Notification -->
              <div style="background-color: #fff7e6; padding: 15px; border-radius: 4px; margin-bottom: 20px; border-left: 4px solid #ff9800;">
                <p style="margin: 0 0 10px 0; font-weight: bold; color: #e65100;">Important Notice</p>
                <p style="margin: 0 0 10px 0;">Dear Client, we have received and registered your package for delivery at our office. Your package is currently <strong>pending</strong> so we urge you to check that the delivery information is correct and accurate so the order can be sent out.</p>
                <p style="margin: 0 0 10px 0;">You can contact us to confirm via:</p>
                <ul style="margin: 0 0 10px 0; padding-left: 20px;">
                  <li>Email: <a href="mailto:contact@logitrackexpress.com" style="color: #0066cc;">contact@logitrackexpress.com</a></li>
                  <li>Direct message on our website</li>
                </ul>
                <p style="margin: 0;">Please check your delivery information and confirm with us ASAP so we can proceed.</p>
              </div>

              <h2 style="color: #555555; font-size: 18px; margin-bottom: 15px;">Shipment Details</h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; color: #666666;">From:</td>
                  <td style="padding: 8px 0;"><strong>${
                    shipmentData.sender
                  }</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666;">To:</td>
                  <td style="padding: 8px 0;"><strong>${
                    shipmentData.receiver
                  }</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666;">Expected Delivery:</td>
                  <td style="padding: 8px 0;"><strong>${formatDate(
                    shipmentData.estimatedDeliveryDate
                  )}</strong></td>
                </tr>
              
                <tr>
                  <td style="padding: 8px 0; color: #666666;">Origin:</td>
                  <td style="padding: 8px 0;"><strong>${
                    shipmentData.origin
                  }</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666;">Destination:</td>
                  <td style="padding: 8px 0;"><strong>${
                    shipmentData.destination
                  }</strong></td>
                </tr>
            
              </table>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://logitrackexpress.com/shipment?num=${trackingNumber}" 
                  style="background-color: #0066cc; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold;">
                  Track Your Shipment
                </a>
              </div>

              <div style="text-align: center; margin: 20px 0;">
                <a href="https://logitrackexpress.com/shipment?num=${trackingNumber}" 
                  style="background-color: #4CAF50; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold;">
                  Confirm Delivery Information
                </a>
              </div>

              <p style="color: #666666; font-size: 14px; margin-top: 30px;">
                Thank you for choosing SkyboundExpress. If you have any questions, please contact our customer service at contact@logitrackexpress.com
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 20px; color: #999999; font-size: 12px;">
              <p>This is an automated message, please do not reply to this email.</p>
              <p>© ${new Date().getFullYear()} SkyboundExpress. All rights reserved.</p>
              <p>
                <a href="https://logitrackexpress.com/privacy" style="color: #666666; text-decoration: underline;">Privacy Policy</a> | 
                <a href="https://logitrackexpress.com/terms" style="color: #666666; text-decoration: underline;">Terms of Service</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Shipment Confirmation

Tracking Number: ${trackingNumber}

IMPORTANT NOTICE:
Dear Client, we have received and registered your package for delivery at our office. Your package is currently pending so we urge you to check that the delivery information is correct and accurate so the order can be sent out.

You can contact us to confirm via:
- Email: contact@logitrackexpress.com
- Phone number: (336) 298-8137 , (309) 359-7057
- Direct message on our website

Please check your delivery information and confirm with us ASAP so we can proceed.

Shipment Details:
- From: ${shipmentData.sender}
- To: ${shipmentData.receiver}
- Origin: ${shipmentData.origin}
- Destination: ${shipmentData.destination}

Track your shipment at: https://logitrackexpress.com/shipment?num=${trackingNumber}

Thank you for choosing SkyboundExpress.

For questions, contact us at contact@logitrackexpress.com

© ${new Date().getFullYear()} SkyboundExpress. All rights reserved.
      `,
    };

    try {
      await transporter.verify();
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
    } catch (error) {
      console.error("Error sending email:", error);
    }

    return new NextResponse(
      JSON.stringify({
        ...newShipment.toObject(),
        message: "Shipment created successfully",
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating shipment:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
