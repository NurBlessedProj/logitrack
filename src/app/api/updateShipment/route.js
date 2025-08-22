import Shipmentthree from "@/models/Shipmentthree";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const POST = async (req, res) => {
  try {
    await dbConnect();

    // Parse the request body
    const body = await req.json();
    console.log("update body data", body);

    const { trackingNumber, updatedData } = body;

    // Log the received data
    console.log("=== UPDATE SHIPMENT REQUEST ===");
    console.log("Tracking Number:", trackingNumber);

    // Check if updatedData is defined and has a status property
    if (!updatedData || typeof updatedData.status === "undefined") {
      console.error("Updated data or status is missing");
      return new NextResponse(
        JSON.stringify({ message: "Updated data or status is missing" }),
        { status: 400 }
      );
    }

    // Find the shipment
    const shipment = await Shipmentthree.findOne({ trackingNumber });

    if (!shipment) {
      console.log("Shipment not found:", trackingNumber);
      return new NextResponse(
        JSON.stringify({ message: "Shipment not found" }),
        { status: 404 }
      );
    }

    // Check if the status has changed
    const statusChanged = shipment.status !== updatedData.status;

    // Update the shipment data
    for (const key in updatedData) {
      shipment[key] = updatedData[key];
    }

    // Save the updated shipment
    const savedShipment = await shipment.save();
    console.log("Shipment updated successfully");

    // Send email notification if the status has changed
    if (statusChanged) {
      // Enhanced Nodemailer configuration
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
        pool: true,
        maxConnections: 1,
        rateDelta: 20000,
        rateLimit: 5,
      });

      // Generate message ID and campaign ID
      const messageId = `${trackingNumber}-status-${Date.now()}@logitrackexpress.com`;
      const campaignId = `status-update-${Date.now()}`;

      let mailOptions = {
        from: {
          name: "LogiTrackExpress",
          address: "contact@logitrackexpress.com",
        },
        to: shipment.receiverEmail,
        cc: shipment.senderEmail, // CC the sender for transparency
        subject: `Shipment Status Update for Tracking Number ${trackingNumber}`,
        messageId: messageId,
        priority: "high",
        headers: {
          "X-Entity-Ref-ID": messageId,
          "X-Priority": "1",
          "X-MSMail-Priority": "High",
          Importance: "high",
          "List-Unsubscribe": `<mailto:contact@logitrackexpress.com?subject=unsubscribe_${trackingNumber}>`,
          "X-Campaign-ID": campaignId,
          "X-Report-Abuse":
            "Please report abuse here: contact@logitrackexpress.com",
          "X-CSA-Complaints": "contact@logitrackexpress.com",
          "X-Auto-Response-Suppress": "OOF, AutoReply",
        },
        html: `<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px;">
          <h1 style="font-size: 16px; font-weight: 600; color: #333;">Shipment Status Update</h1>
          <h2 style="font-size: 14px; font-weight: 600; margin-top: 10px;">The status of your shipment with tracking number <span style="color: #007bff; text-decoration: underline; cursor: pointer;">${trackingNumber}</span> has been updated to: ${updatedData.status}.</h2>
          <p style="font-size: 14px; margin-top: 5px;">Comment: ${updatedData.comments}</p>
          <p style="font-size: 14px; font-weight: 400; margin-top: 20px; color: #555;">Thanks for shipping with us!</p>
        </div>`,
        text: `
          Shipment Status Update

          The status of your shipment with tracking number ${trackingNumber} has been updated to: ${updatedData.status}.
          
          Comment: ${updatedData.comments}
          
          Thanks for shipping with us!
        `,
      };

      try {
        await transporter.verify();
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }

    return new NextResponse(JSON.stringify({ shipmentData: shipment }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating shipment:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
