# Bright Money Landing Page

## Project Overview
This project is a responsive landing page for Bright Money, a fintech and AI banking service that helps users pay off credit cards with a single monthly payment. The page is designed to be fully responsive and adapts to desktop, tablet, and mobile screen sizes. It includes interactive elements such as an image carousel and is optimized for SEO.

## Table of Contents
- [Live Link](#live-link)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [SEO Optimization](#seo-optimization)
  - [JSON-LD Schema Markup](#json-ld-schema-markup)
  - [Additional SEO Improvements](#additional-seo-improvements)
- [Google Tag Manager (GTM) and Google Analytics (GA) Setup](#google-tag-manager-gtm-and-google-analytics-ga-setup)
  - [GTM Container and Tag Configurations](#gtm-container-and-tag-configurations)
  - [Proof of Google Analytics Event Tracking](#proof-of-google-analytics-event-tracking)
- [How to Run the Project](#how-to-run-the-project)
- [Screenshots](#screenshots)
  - [Desktop View](#desktop-view)
  - [Tablet View](#tablet-view)
  - [Mobile View](#mobile-view)
- [Contact](#contact)

## Live Link
[https://ayushflows.github.io/Bright-Money-LandingPage/](https://ayushflows.github.io/Bright-Money-LandingPage/)

## Technologies Used
- HTML
- CSS
- JavaScript

## File Structure
```
/D:/Bright-Money Assignment/landing-page
│
├── assets
│   ├── bright-companies/
│   ├── screenshots/
│   ├── company_logo.png
│   ├── hero_image.png
|   └── ...
│
├── fonts
│   ├── Gilroy.otf
│   ├── Gilroy-ExtraBold.otf
│
├── scripts
│   ├── main.js
│
├── styles
│   ├── style.css
│
├── index.html
└── README.md
```

## SEO Optimization
The HTML structure has been optimized for SEO by including appropriate headings, meta tags, and alt attributes for images. Additionally, a JSON-LD schema markup for a 'Product' has been added to the page.

### JSON-LD Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Bright Money",
  "description": "Bright Money helps you pay off credit cards with a single monthly payment. Get a credit line of up to $8,000 with no impact on your score to check rates.",
  "brand": {
    "@type": "Brand",
    "name": "Bright Money"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://ayushflows.github.io/Bright-Money-LandingPage/",
    "priceCurrency": "USD",
    "price": "0",
    "eligibleRegion": {
      "@type": "Place",
      "name": "USA"
    }
  }
}
```

### Additional SEO Improvements
For further SEO improvements, please refer to the [SEO Improvements Document](./seo-improvements.md).

## Google Tag Manager (GTM) and Google Analytics (GA) Setup
Basic tracking has been set up using GTM and GA. The GTM container includes tags for tracking page views and button clicks. Google Analytics is configured to capture basic metrics and events, including an event that triggers when a specific button is clicked.

### GTM Container and Tag Configurations
![GTM Container](./assets/landingpage_screenshots/GA_dashboard.png)
![GTM Tag Configuration](./assets/landingpage_screenshots/gtm_tag_configuration.png)

### Proof of Google Analytics Event Tracking
![GA Event Tracking](./assets/screenshots/ga_event_tracking.png)

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/ayushflows/Bright-Money-LandingPage.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Bright-Money-LandingPage
   ```
3. Open `index.html` in your preferred web browser.

## Screenshots
### Desktop View
![Desktop View](./assets/landingpage_screenshots/Desktop_view.png)

### Tablet View
![Tablet View](./assets/landingpage_screenshots/Tablet_view.png)

### Mobile View
![Mobile View](./assets/landingpage_screenshots/Mobile_view.png)

## Contact
For any questions or feedback, please contact at: [ayushflows@gmail.com](mailto:ayushflows@gmail.com).
