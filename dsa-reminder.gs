function sendDSAReminder() {
  var emailAddress = "pushtijindal18@gmail.com"; 
  var subject = "📌 Daily DSA Reminder";
  var message = `
Hey Pushti 👋,

This is your friendly reminder to solve at least ONE DSA problem today!

✅ Stay consistent
✅ Update your GitHub
✅ Keep the streak alive 🚀

CSES Tracker: https://cses.fi/problemset/
GitHub: https://github.com/PUSHTI-JINDAL

You got this! 💪

– Your DSA Bot 🤖
  `;

  MailApp.sendEmail(emailAddress, subject, message);
}
