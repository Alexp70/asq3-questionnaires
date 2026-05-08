const SCORE_VALUES = {
  yes: 10,
  sometimes: 5,
  no: 0
};

const CHOICES = [
  { value: "yes", label: "Ναι" },
  { value: "sometimes", label: "Μερικές φορές" },
  { value: "no", label: "Όχι ακόμα" }
];

const ANSWER_LABELS = {
  yes: "Ναι",
  sometimes: "Μερικές φορές",
  no: "Όχι"
};

const DEVELOPMENT_ANSWER_LABELS = {
  ...ANSWER_LABELS,
  no: "Όχι ακόμα"
};

const FORM_SETTINGS = {
  // For production, paste a secure form endpoint here, e.g. Formspree, Netlify Forms, Basin, or your own backend.
  submissionEndpoint: "https://formspree.io/f/meenlzlv",
  // Optional fallback. Add your email address if you want the button to open a prepared email draft.
  recipientEmail: "apanagopoulos@gmail.com"
};

const DOMAINS = [
  {
    id: "communication",
    title: "Επικοινωνία",
    cutoff: 29.65,
    questions: [
      "Βγάζει ψιλές φωνές, σε υψηλές συχνότητες;",
      "Όταν παίζει με ήχους, βγάζει βαθιούς ήχους όπως γρυλίσματα ή άλλους χαμηλούς ήχους;",
      "Αν φωνάξετε το παιδί ενώ είστε έξω από το οπτικό του πεδίο, κοιτάζει προς την κατεύθυνση της φωνής σας;",
      "Όταν ακουστεί ένας δυνατός θόρυβος, γυρίζει για να δει από πού ήρθε ο ήχος;",
      "Βγάζει ήχους όπως «ντα», «γκα», «κα» και «μπα»;",
      "Αν μιμηθείτε τους ήχους που κάνει, επαναλαμβάνει τους ίδιους ήχους προς εσάς;"
    ]
  },
  {
    id: "grossMotor",
    title: "Αδρή κινητικότητα",
    cutoff: 22.25,
    questions: [
      "Όταν είναι ξαπλωμένο ανάσκελα, σηκώνει τα πόδια του αρκετά ψηλά ώστε να βλέπει τα πόδια του;",
      "Όταν είναι μπρούμυτα, τεντώνει και τα δύο χέρια και σηκώνει ολόκληρο το στήθος του από το κρεβάτι ή το πάτωμα;",
      "Γυρίζει από ανάσκελα σε μπρούμυτα, βγάζοντας και τα δύο χέρια από κάτω του;",
      "Όταν το βάλετε στο πάτωμα, στηρίζεται στα χέρια του ενώ κάθεται; Αν ήδη κάθεται όρθιο χωρίς να στηρίζεται στα χέρια, σημειώστε «Ναι».",
      "Αν κρατάτε και τα δύο του χέρια μόνο για ισορροπία, στηρίζει το βάρος του όταν στέκεται;",
      "Παίρνει θέση μπουσουλήματος, σηκώνοντας το σώμα του στα χέρια και στα γόνατα;"
    ]
  },
  {
    id: "fineMotor",
    title: "Λεπτή κινητικότητα",
    cutoff: 25.14,
    note: "",
    questions: [
      "Πιάνει ένα παιχνίδι που του προσφέρετε και το κοιτάζει, το κουνάει ή το μασά για περίπου 1 λεπτό;",
      "Απλώνει τα χέρια ή πιάνει ένα παιχνίδι χρησιμοποιώντας και τα δύο χέρια ταυτόχρονα;",
      "Απλώνει το χέρι για ένα ψίχουλο ή δημητριακό και το ακουμπά με το δάχτυλο ή το χέρι του; Αν ήδη πιάνει μικρό αντικείμενο μεγέθους μπιζελιού, σημειώστε «Ναι».",
      "Πιάνει ένα μικρό παιχνίδι κρατώντας το στο κέντρο της παλάμης, με τα δάχτυλα γύρω του;",
      "Προσπαθεί να πιάσει ένα ψίχουλο ή δημητριακό χρησιμοποιώντας τον αντίχειρα και όλα τα δάχτυλα σε κίνηση σαν «τσουγκράνα», ακόμα κι αν δεν καταφέρει να το πιάσει; Αν ήδη το πιάνει, σημειώστε «Ναι».",
      "Πιάνει ένα μικρό παιχνίδι μόνο με το ένα χέρι;"
    ]
  },
  {
    id: "problemSolving",
    title: "Λύση προβλημάτων",
    cutoff: 27.72,
    questions: [
      "Όταν ένα παιχνίδι βρίσκεται μπροστά του, απλώνει και τα δύο χέρια προς αυτό;",
      "Όταν είναι ανάσκελα, γυρίζει το κεφάλι για να ψάξει ένα παιχνίδι που του έπεσε; Αν ήδη το πιάνει, σημειώστε «Ναι».",
      "Όταν είναι ανάσκελα, προσπαθεί να πάρει ένα παιχνίδι που του έπεσε, αν μπορεί να το δει;",
      "Πιάνει ένα παιχνίδι και το βάζει στο στόμα;",
      "Περνά ένα παιχνίδι από το ένα χέρι στο άλλο;",
      "Παίζει χτυπώντας ένα παιχνίδι πάνω-κάτω στο πάτωμα ή στο τραπέζι;"
    ]
  },
  {
    id: "personalSocial",
    title: "Κοινωνικότητα",
    cutoff: 25.34,
    questions: [
      "Όταν βρίσκεται μπροστά σε μεγάλο καθρέπτη, χαμογελά ή βγάζει ήχους στον εαυτό του;",
      "Συμπεριφέρεται διαφορετικά προς αγνώστους από ό,τι προς εσάς και άλλα γνώριμα πρόσωπα; Οι αντιδράσεις μπορεί να είναι έντονο κοίταγμα, συνοφρύωμα, απομάκρυνση ή κλάμα.",
      "Ενώ είναι ξαπλωμένο ανάσκελα, παίζει πιάνοντας το πόδι του;",
      "Όταν βρίσκεται μπροστά σε μεγάλο καθρέπτη, απλώνει το χέρι για να χτυπήσει ή να ακουμπήσει τον καθρέπτη;",
      "Ενώ είναι ανάσκελα, βάζει το πόδι του στο στόμα;",
      "Προσπαθεί να πάρει ένα παιχνίδι που βρίσκεται έξω από την εμβέλειά του; Μπορεί να γυρίσει, να περιστραφεί μπρούμυτα ή να μπουσουλήσει για να το πάρει."
    ]
  }
];

const OVERALL = [
  { id: "equalMovement", text: "Χρησιμοποιεί εξίσου καλά τα δύο χέρια και τα δύο πόδια;", followUp: "no" },
  { id: "feetFlat", text: "Κρατώντας το παιδί σε όρθια θέση, τα πόδια πατούν την περισσότερη ώρα στο έδαφος;", followUp: "no" },
  { id: "soundConcerns", text: "Ανησυχείτε επειδή το παιδί σας είναι πολύ ήσυχο ή δεν κάνει ήχους όπως τα άλλα παιδιά της ηλικίας του;", followUp: "yes" },
  { id: "familyHearingHistory", text: "Υπάρχουν προβλήματα ακοής σε κάποιον από τους γονείς;", followUp: "yes" },
  { id: "visionConcerns", text: "Υπάρχει κάτι που να σας ανησυχεί σχετικά με την όραση του παιδιού σας;", followUp: "yes" },
  { id: "medicalProblems", text: "Έχει το παιδί παρουσιάσει προβλήματα υγείας το προηγούμενο διάστημα;", followUp: "yes" },
  { id: "behaviorConcerns", text: "Έχετε ανησυχίες σχετικά με τη συμπεριφορά του παιδιού;", followUp: "yes" },
  { id: "otherConcerns", text: "Υπάρχει οτιδήποτε άλλο που σας ανησυχεί σχετικά με το παιδί σας;", followUp: "yes" }
];

const QUESTION_IMAGES = {
  "grossMotor-3": {
    src: "assets/06mo-sitting-hands.png",
    alt: "Σκίτσο βρέφους που κάθεται στηριζόμενο στα χέρια."
  },
  "grossMotor-4": {
    src: "assets/06mo-standing-support.png",
    alt: "Σκίτσο βρέφους που στέκεται με στήριξη από τα χέρια."
  },
  "grossMotor-5": {
    src: "assets/06mo-crawling-position.png",
    alt: "Σκίτσο βρέφους σε θέση μπουσουλήματος."
  },
  "fineMotor-2": {
    src: "assets/06mo-crumb-touch.png",
    alt: "Σκίτσο χεριού που ακουμπά μικρό αντικείμενο."
  },
  "fineMotor-3": {
    src: "assets/06mo-small-toy-center.png",
    alt: "Σκίτσο χεριού που κρατά μικρό παιχνίδι στο κέντρο της παλάμης."
  },
  "fineMotor-4": {
    src: "assets/06mo-raking-crumb.png",
    alt: "Σκίτσο χεριού που προσπαθεί να πιάσει μικρό αντικείμενο."
  },
  "fineMotor-5": {
    src: "assets/06mo-one-hand-toy.png",
    alt: "Σκίτσο βρέφους που κρατά μικρό παιχνίδι με το ένα χέρι."
  },
  "problemSolving-5": {
    src: "assets/06mo-bang-toy.png",
    alt: "Σκίτσο παιδιού που χτυπά παιχνίδι πάνω στο τραπέζι."
  },
  "personalSocial-0": {
    src: "assets/06mo-mirror-smile.png",
    alt: "Σκίτσο βρέφους μπροστά σε καθρέπτη."
  },
  "personalSocial-2": {
    src: "assets/06mo-grab-foot.png",
    alt: "Σκίτσο βρέφους που πιάνει το πόδι του."
  },
  "personalSocial-3": {
    src: "assets/06mo-mirror-pat.png",
    alt: "Σκίτσο βρέφους που ακουμπά τον καθρέπτη."
  },
  "personalSocial-4": {
    src: "assets/06mo-foot-mouth.png",
    alt: "Σκίτσο βρέφους που βάζει το πόδι στο στόμα."
  }
};

const sectionsEl = document.querySelector("#sections");
const overallEl = document.querySelector("#overallQuestions");
const scoreRowsEl = document.querySelector("#scoreRows");
const completionTextEl = document.querySelector("#completionText");
const form = document.querySelector("#asqForm");
const consentInput = document.querySelector("#consentInput");
const sendBtn = document.querySelector("#sendBtn");
const submitStatusEl = document.querySelector("#submitStatus");

function getQuestionImage(domainId, index) {
  return QUESTION_IMAGES[`${domainId}-${index}`] || null;
}

function renderDomains() {
  sectionsEl.innerHTML = DOMAINS.map((domain) => `
    <section class="panel domain" data-domain="${domain.id}">
      <div class="domain-head">
        <h2>${domain.title}</h2>
        <div class="domain-total" id="total-${domain.id}">0 / 60</div>
      </div>
      ${domain.note ? `<p class="hint">${domain.note}</p>` : ""}
      ${domain.questions.map((question, index) => {
        const image = getQuestionImage(domain.id, index);
        return `
        <fieldset class="question ${image ? "has-image" : ""}">
          <legend class="q-text">${index + 1}. ${question}</legend>
          ${image ? `
            <figure class="question-image">
              <img src="${image.src}" alt="${image.alt}">
            </figure>
          ` : ""}
          <div class="choices">
            ${CHOICES.map((choice) => `
              <label class="choice">
                <input type="radio" name="${domain.id}-${index}" value="${choice.value}">
                <span>${choice.label}</span>
              </label>
            `).join("")}
          </div>
        </fieldset>
      `;
      }).join("")}
    </section>
  `).join("");
}

function renderOverall() {
  overallEl.innerHTML = OVERALL.map((item, index) => `
    <div class="overall-item">
      <fieldset>
        <legend class="q-text">${index + 1}. ${item.text} Αν ${item.followUp === "yes" ? "ναι" : "όχι"}, εξηγήστε:</legend>
        <div class="yes-no">
          <label class="choice">
            <input type="radio" name="${item.id}" value="yes">
            <span>Ναι</span>
          </label>
          <label class="choice">
            <input type="radio" name="${item.id}" value="no">
            <span>Όχι</span>
          </label>
        </div>
      </fieldset>
      <textarea name="${item.id}Notes" aria-label="Εξήγηση για ${item.text}"></textarea>
    </div>
  `).join("");
}

function getAnswer(name) {
  const checked = form.querySelector(`input[name="${name}"]:checked`);
  return checked ? checked.value : null;
}

function getFieldValue(name) {
  const field = form.elements[name];
  return field ? field.value.trim() : "";
}

function getDomainScore(domain) {
  let score = 0;
  let answered = 0;

  domain.questions.forEach((_, index) => {
    let answer = getAnswer(`${domain.id}-${index}`);
    if (answer) {
      score += SCORE_VALUES[answer];
      answered += 1;
    }
  });

  return { score, answered, missing: domain.questions.length - answered };
}

function getAllScores() {
  return DOMAINS.map((domain) => {
    const result = getDomainScore(domain);
    return {
      id: domain.id,
      title: domain.title,
      cutoff: domain.cutoff,
      score: result.score,
      answered: result.answered,
      missing: result.missing,
      interpretation: result.missing
        ? "Ελλιπείς απαντήσεις"
        : result.score < domain.cutoff
          ? "Κάτω από το όριο"
          : "Πάνω από το όριο"
    };
  });
}

function getCompletion() {
  const scores = getAllScores();
  const answered = scores.reduce((total, item) => total + item.answered, 0);
  const total = DOMAINS.reduce((sum, domain) => sum + domain.questions.length, 0);
  const missing = total - answered;
  return { answered, total, missing };
}

function renderScores() {
  const scores = getAllScores();
  const rows = scores.map((domain) => {
    const { score, missing } = domain;
    const percent = Math.round((score / 60) * 100);
    const cutoffPercent = (domain.cutoff / 60) * 100;
    const complete = missing === 0;
    const belowCutoff = complete && score < domain.cutoff;
    const status = !complete
      ? `Λείπουν ${missing} απαντήσεις`
      : belowCutoff
        ? `Κάτω από το όριο (${domain.cutoff})`
        : `Πάνω από το όριο (${domain.cutoff})`;

    const statusClass = !complete ? "" : belowCutoff ? "alert" : "ok";
    const barClass = belowCutoff ? "bar cutoff-alert" : "bar";
    document.querySelector(`#total-${domain.id}`).textContent = complete ? `${score} / 60` : `${score} / 60*`;

    return `
      <div class="score-row">
        <div class="score-top">
          <span>${domain.title}</span>
          <span>${score} / 60</span>
        </div>
        <div class="${barClass}">
          <div class="bar-fill" style="width: ${percent}%"></div>
          <div class="bar-cutoff" style="left: ${cutoffPercent}%"></div>
        </div>
        <div class="status ${statusClass}">${status}</div>
      </div>
    `;
  }).join("");

  const overallFlags = OVERALL.filter((item) => getAnswer(item.id) === item.followUp);
  const overallText = overallFlags.length
    ? `<div class="status alert">Απαντήσεις στην ενότητα «Συνολικά» που χρειάζονται προσοχή: ${overallFlags.length}</div>`
    : `<div class="status ok">Δεν έχουν σημειωθεί απαντήσεις «Συνολικά» που απαιτούν προσοχή.</div>`;

  const completion = getCompletion();
  completionTextEl.textContent = `${completion.answered} από ${completion.total} αναπτυξιακές ερωτήσεις έχουν απαντηθεί.`;
  scoreRowsEl.innerHTML = rows + overallText;
}

function collectResults() {
  const answers = DOMAINS.map((domain) => ({
    id: domain.id,
    title: domain.title,
    items: domain.questions.map((text, index) => {
      const answer = getAnswer(`${domain.id}-${index}`);
      return {
        number: index + 1,
        question: text,
        answer,
        label: answer ? DEVELOPMENT_ANSWER_LABELS[answer] : "Δεν απαντήθηκε",
        score: answer ? SCORE_VALUES[answer] : null
      };
    })
  }));

  const overall = OVERALL.map((item) => {
    const answer = getAnswer(item.id);
    return {
      id: item.id,
      question: item.text,
      answer,
      label: answer ? ANSWER_LABELS[answer] : "Δεν απαντήθηκε",
      needsFollowUp: answer === item.followUp,
      notes: getFieldValue(`${item.id}Notes`)
    };
  });

  return {
    questionnaire: "ASQ-3 Ερωτηματολόγιο 6 μηνών",
    submittedAt: new Date().toISOString(),
    child: {
      name: getFieldValue("childName"),
      birthDate: getFieldValue("birthDate"),
      completedDate: getFieldValue("completedDate"),
      completedBy: getFieldValue("completedBy"),
      parentContact: getFieldValue("parentContact")
    },
    completion: getCompletion(),
    scores: getAllScores(),
    overallFollowUpCount: overall.filter((item) => item.needsFollowUp).length,
    answers,
    overall
  };
}

function formatResultsForEmail(results) {
  const lines = [
    results.questionnaire,
    "",
    `Ημερομηνία αποστολής: ${new Date(results.submittedAt).toLocaleString("el-GR")}`,
    `Παιδί: ${results.child.name || "-"}`,
    `Ημερομηνία γέννησης: ${results.child.birthDate || "-"}`,
    `Ημερομηνία συμπλήρωσης: ${results.child.completedDate || "-"}`,
    `Συμπληρώθηκε από: ${results.child.completedBy || "-"}`,
    `Επικοινωνία γονέα: ${results.child.parentContact || "-"}`,
    "",
    "Βαθμολογία:",
    ...results.scores.map((item) => `${item.title}: ${item.score}/60 - ${item.interpretation} (όριο ${item.cutoff})`),
    "",
    `Συνολικά - απαντήσεις που χρειάζονται προσοχή: ${results.overallFollowUpCount}`,
    "",
    "Αναλυτικές απαντήσεις:"
  ];

  results.answers.forEach((domain) => {
    lines.push("", domain.title);
    domain.items.forEach((item) => {
      lines.push(`${item.number}. ${item.label} - ${item.question}`);
    });
  });

  lines.push("", "Συνολικά");
  results.overall.forEach((item, index) => {
    const note = item.notes ? ` | Σχόλιο: ${item.notes}` : "";
    lines.push(`${index + 1}. ${item.label} - ${item.question}${note}`);
  });

  return lines.join("\n");
}

function setSubmitStatus(message, type = "") {
  submitStatusEl.textContent = message;
  submitStatusEl.className = `submit-status ${type}`.trim();
}

async function sendResults() {
  if (!consentInput.checked) {
    setSubmitStatus("Παρακαλώ επιβεβαιώστε τη συγκατάθεση πριν την αποστολή.", "error");
    return;
  }

  const results = collectResults();
  if (results.completion.missing > 0) {
    setSubmitStatus(`Λείπουν ${results.completion.missing} αναπτυξιακές απαντήσεις. Μπορείτε να τις συμπληρώσετε και να ξαναδοκιμάσετε.`, "error");
    return;
  }

  sendBtn.disabled = true;
  setSubmitStatus("Γίνεται προετοιμασία αποστολής...");

  try {
    if (FORM_SETTINGS.submissionEndpoint) {
      const response = await fetch(FORM_SETTINGS.submissionEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(results)
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitStatus("Τα αποτελέσματα στάλθηκαν με επιτυχία.", "success");
      return;
    }

    const subject = encodeURIComponent(`ASQ-3 2 μηνών - ${results.child.name || "νέα απάντηση"}`);
    const body = encodeURIComponent(formatResultsForEmail(results));
    const recipient = encodeURIComponent(FORM_SETTINGS.recipientEmail);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSubmitStatus("Άνοιξε προσχέδιο email με τα αποτελέσματα. Πατήστε αποστολή από την εφαρμογή email.", "success");
  } catch (error) {
    setSubmitStatus("Δεν ήταν δυνατή η αποστολή. Δοκιμάστε ξανά ή εκτυπώστε τα αποτελέσματα.", "error");
  } finally {
    sendBtn.disabled = false;
  }
}

renderDomains();
renderOverall();
renderScores();

form.addEventListener("input", renderScores);
document.querySelector("#printBtn").addEventListener("click", () => window.print());
sendBtn.addEventListener("click", sendResults);
document.querySelector("#resetBtn").addEventListener("click", () => {
  form.reset();
  setSubmitStatus("");
  renderScores();
});
