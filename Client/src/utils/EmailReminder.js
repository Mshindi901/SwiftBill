import { isReminderDay } from './checkReminderDate.js';
import { sendReminderEmail } from './sendReminderEmail.js';

export default async function processReminders(apps) {
  for (const app of apps) {
    if (isReminderDay(app)) {
      await sendReminderEmail({
        to: app.user_email,
        appName: app.name,
        reminderDays: app.reminder,
        endDate: new Date(app.start).setDate(new Date(app.start).getDate() + app.duration)
      });
    }
  }
}