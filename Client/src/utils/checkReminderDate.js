// Function to check whether the reminder date has arrived as set by the user
//it will be used together by the sendReminderEmail function in sendEmail.js to notify users via Email when the time comes to unsubscribe from the Free trial
//This is the Platforms core
export function isReminderDay(app) {
  const { start, duration, reminder } = app;

  if (!start || !duration || !reminder) return false;

  const startDate = new Date(start);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + duration);

  const reminderDate = new Date(endDate);
  reminderDate.setDate(endDate.getDate() - reminder);

  const today = new Date().toISOString().split("T")[0];
  const reminderDay = reminderDate.toISOString().split("T")[0];

  return today === reminderDay;
}
