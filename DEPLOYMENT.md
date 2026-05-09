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
- `10mo.html` (10-month questionnaire)
- `12mo.html` (12-month questionnaire)
- `14mo.html` (14-month questionnaire)
- `16mo.html` (16-month questionnaire)
- `18mo.html` (18-month questionnaire)
- `20mo.html` (20-month questionnaire)
- `22mo.html` (22-month questionnaire)
- `24mo.html` (24-month questionnaire)
- `27mo.html` (27-month questionnaire)
- `30mo.html` (30-month questionnaire)
- `33mo.html` (33-month questionnaire)
- `36mo.html` (36-month questionnaire)
- `42mo.html` (42-month questionnaire)
- `48mo.html` (48-month questionnaire)
- `54mo.html` (54-month questionnaire)
- `60mo.html` (60-month questionnaire)
- `styles.css`
- `02mo.js`
- `04mo.js`
- `06mo.js`
- `08mo.js`
- `09mo.js`
- `10mo.js`
- `12mo.js`
- `14mo.js`
- `16mo.js`
- `18mo.js`
- `20mo.js`
- `22mo.js`
- `24mo.js`
- `27mo.js`
- `30mo.js`
- `33mo.js`
- `36mo.js`
- `42mo.js`
- `48mo.js`
- `54mo.js`
- `60mo.js`
- `assets/`
