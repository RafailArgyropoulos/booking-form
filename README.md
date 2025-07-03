# Booking Form - Check Availability

This is a responsive, modern booking inquiry form that allows users to check availability by submitting their details.

## 🌟 Features

- Clean and modern UI (HTML/CSS/JS)
- Responsive design (mobile-friendly)
- Automatically calculates number of nights between check-in & check-out
- Sends form data via [EmailJS](https://www.emailjs.com/) directly to your email
- Built in pure frontend (no backend required)

## 📦 Technologies Used

- HTML5
- CSS3 (with background grid lines and soft UI)
- JavaScript (vanilla)
- [EmailJS](https://emailjs.com) for email integration

## 📋 Form Fields

- Full Name
- Email
- Phone
- Check-in / Check-out Dates
- Nights (auto-calculated)
- Adults / Children
- Message

## ✉️ How it works

1. User fills out the form.
2. JavaScript calculates the number of nights based on the selected dates.
3. When the form is submitted, the data is sent to your email using EmailJS (no server needed).

## ⚙️ Setup Instructions

Open script.js and replace:
 emailjs.init("YOUR_USER_ID");
 emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form);

Open the file emailjs-template.txt. There you will find ready-made HTML that you need to add to the EmailJS template.

Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
