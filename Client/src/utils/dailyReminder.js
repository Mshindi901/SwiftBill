import { supabase } from "../assets/supabase.js";
import processReminders from "./EmailReminder.js";

async function runReminderCheck() {
  const { data: apps, error } = await supabase.from('Apps').select('*, users(email)');
  
  if (error) {
    console.error('❌ Failed to fetch apps:', error.message);
    return;
  }

  // Add user_email to each app (assuming relation exists)
  const appsWithEmail = apps.map(app => ({
    ...app,
    user_email: app.users?.email || null
  }));

  await processReminders(appsWithEmail);
}

runReminderCheck();