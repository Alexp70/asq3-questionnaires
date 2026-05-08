# Deploying the ASQ-3 form

This questionnaire is a static web form. Craft is best used as the public page that links to or embeds the hosted form.

## Recommended setup

1. Host this folder (`index.html`, `styles.css`, `script.js`, and `assets/`) on a static host such as Netlify, Vercel, GitHub Pages, Cloudflare Pages, or your own server.
2. Use a secure form endpoint for submissions. Good options are your own backend, Netlify Forms/Functions, Formspree, Basin, or another GDPR-aware form service.
3. In `script.js`, set:

```js
const FORM_SETTINGS = {
  submissionEndpoint: "https://your-secure-form-endpoint.example/submit",
  recipientEmail: "your-email@example.com"
};
```

If `submissionEndpoint` is empty, the button opens a prepared email draft instead. That is convenient for testing, but a secure endpoint is preferable for health information.

## Add it to the Craft page

After the form is hosted, add it to the Craft page as either:

```html
<iframe
  src="https://your-form-url.example"
  title="ASQ-3 Ερωτηματολόγιο 2 μηνών"
  style="width:100%; height:1200px; border:0; border-radius:8px;"
></iframe>
```

or, if Craft does not allow this iframe directly, paste the hosted form URL as a visible card/button link on the page.

## Files to upload

- `index.html` (questionnaire menu)
- `04mo.html` (4-month questionnaire)
- `06mo.html` (6-month questionnaire)
- `08mo.html` (8-month questionnaire)
- `09mo.html` (9-month questionnaire)
- `styles.css`
- `02mo.js`
- `04mo.js`
- `06mo.js`
- `08mo.js`
- `09mo.js`
- `assets/`
