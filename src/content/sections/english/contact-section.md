---
enable: true
badge: "contact"
title: "Ready to improve your digital workplace? <br /> Let's talk."
description: "Book a free 30-minute Digital Workplace Assessment or send us a message. We'll get back to you within one business day."
image: "/images/contact-home.jpg"
imageAlt: "Contact Aspect Infotech"
characterImage: "/images/character-3d.png"
characterImageAlt: "3D character"

form:
  emailSubject: "New enquiry from aspectinfotech.com.au"
  submitButton:
    enable: true
    label: "Send Message"
  inputs:
    - label: "Full Name"
      placeholder: "Full Name *"
      name: "Full Name"
      required: true
      halfWidth: true
      defaultValue: ""
    - label: "Email Address"
      placeholder: "Email Address *"
      name: "Email Address"
      required: true
      type: "email"
      halfWidth: true
      defaultValue: ""
    - label: "Phone Number"
      placeholder: "Phone Number"
      name: "Phone Number"
      required: false
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "Company"
      placeholder: "Company"
      name: "Company"
      required: false
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "How can we help?"
      placeholder: "What are you looking for? *"
      name: "Subject"
      required: true
      halfWidth: false
      dropdown:
        type: "select"
        items:
          - label: "Digital Workplace Foundation"
            value: "Digital Workplace Foundation"
            selected: false
          - label: "Secure Workplace"
            value: "Secure Workplace"
            selected: false
          - label: "AI Workplace Readiness"
            value: "AI Workplace Readiness"
            selected: false
          - label: "Free Assessment"
            value: "Free Assessment"
            selected: false
          - label: "General Enquiry"
            value: "General Enquiry"
            selected: false
    - label: "Message"
      tag: "textarea"
      placeholder: "Tell us a bit about your business and what you need *"
      name: "Message"
      required: true
      halfWidth: false
      rows: "4"
      defaultValue: ""
    - note: success
      parentClass: "hidden text-sm message success"
      content: "Thanks! We've received your message and will get back to you within one business day."
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "Something went wrong! Please try again or email contact@aspectinfotech.com"
---
