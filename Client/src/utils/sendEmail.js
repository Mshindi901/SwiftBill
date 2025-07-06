// utils/sendReminderEmail.js
import { Resend } from 'resend';

const resend = new Resend('re_21prozAp_Hm7oWpzXZFMxspL4wbp77YEu'); // Use env variable in production

export async function sendReminderEmail({ to, appName, reminderDays, endDate }) {
  try {
    const data = await resend.emails.send({
      from: 'emmanuelmshindi68@gmail.com',
      to: to,
      subject: `⏰ Your ${appName} trial ends in ${reminderDays} day(s)!`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>⏳ Trial Ending Soon: ${appName}</h2>
          <p>Hey there! Just a friendly reminder that your free trial for <strong>${appName}</strong> will end in <strong>${reminderDays} day(s)</strong>.</p>
          <p><strong>End Date:</strong> ${new Date(endDate).toDateString()}</p>
          <p>Make sure to cancel or upgrade before the trial ends if needed.</p>
          <br />
          <p>– SwiftBill Team</p>
        </div>
      `
    });

    return data;
  } catch (error) {
    console.error("❌ Error sending reminder email:", error.message);
  }
}
