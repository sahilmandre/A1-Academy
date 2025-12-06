# Email Setup Guide for A1 Academy Contact Form

## 🚀 Quick Setup

Your contact form now supports **both WhatsApp and Email**! Users can choose their preferred method.

---

## 📧 Email Configuration

### Option 1: Gmail (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "A1 Academy Website"
   - Copy the 16-character password

3. **Add to Vercel Environment Variables**:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   RECIPIENT_EMAIL=cometoa1academy@gmail.com
   ```

### Option 2: Outlook/Hotmail

```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
RECIPIENT_EMAIL=cometoa1academy@gmail.com
```

### Option 3: Other Email Providers

Check your email provider's SMTP settings and use those credentials.

---

## 🔧 Local Development Setup

1. **Copy `.env.example` to `.env.local`**:
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local`** with your actual credentials:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-actual-email@gmail.com
   SMTP_PASS=your-actual-app-password
   RECIPIENT_EMAIL=cometoa1academy@gmail.com
   ```

3. **Test locally**:
   ```bash
   npm run dev
   ```

---

## ☁️ Vercel Deployment Setup

### Step 1: Push to GitHub
```bash
git add .
git commit -m "feat: Add email and WhatsApp contact form"
git push origin feature/contact-form-enhancement
```

### Step 2: Deploy to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Import your repository
3. Deploy

### Step 3: Add Environment Variables in Vercel
1. Go to your project in Vercel
2. Click **Settings** → **Environment Variables**
3. Add these variables:

| Name | Value | Example |
|------|-------|---------|
| `SMTP_HOST` | Your SMTP server | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_USER` | Your email | `your-email@gmail.com` |
| `SMTP_PASS` | App password | `abcd efgh ijkl mnop` |
| `RECIPIENT_EMAIL` | Where to receive emails | `cometoa1academy@gmail.com` |

4. Click **Save**
5. **Redeploy** your project for changes to take effect

---

## 🧪 Testing

### Test WhatsApp (No setup needed)
- Fill the form
- Click "Send via WhatsApp"
- Should open WhatsApp with pre-filled message

### Test Email (After setup)
- Fill the form
- Click "Send via Email"
- Check your recipient email inbox

---

## 🔒 Security Notes

- ✅ `.env.local` is in `.gitignore` (credentials safe)
- ✅ API runs on Vercel serverless (secure)
- ✅ No credentials exposed in frontend
- ✅ SMTP credentials only on server

---

## 📱 WhatsApp Configuration

Current WhatsApp number: **+91-7987391196**

To change it, edit `src/components/ContactForm.jsx`:
```javascript
const whatsappNumber = '917987391196'; // Change this
```

---

## 🎨 Features

- ✅ Dual submission options (Email + WhatsApp)
- ✅ Form validation with React Hook Form
- ✅ Beautiful, responsive design
- ✅ Loading states and success messages
- ✅ Professional HTML email template
- ✅ Mobile-friendly
- ✅ No backend needed (serverless)

---

## 🆘 Troubleshooting

### Email not sending?
1. Check Vercel environment variables are set correctly
2. Verify SMTP credentials are correct
3. Check Vercel function logs for errors
4. Make sure you're using an App Password (not regular password) for Gmail

### WhatsApp not opening?
1. Check if WhatsApp is installed on the device
2. Verify the phone number format is correct
3. Test on mobile device (works best there)

---

## 📞 Support

For issues, contact the development team or check:
- Vercel Logs: Project → Deployments → Click deployment → Functions
- Browser Console: F12 → Console tab

---

**Happy Coding! 🚀**
