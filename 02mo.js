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
    cutoff: 22.77,
    questions: [
      "Βγάζει τραχείς ήχους ή γαργαρίσματα από το λάρυγγα;",
      "Βγάζει ήχους όπως «ααα», «οοο», «αγκού»;",
      "Όταν του μιλάτε, σας απαντά με ήχους;",
      "Σας χαμογελά όταν του μιλάτε;",
      "Γελάει ήπια;",
      "Αφού έχετε απομακρυνθεί από κοντά του, μόλις σας ξαναδεί σας γελά ή ενθουσιάζεται από την παρουσία σας;"
    ]
  },
  {
    id: "grossMotor",
    title: "Αδρή κινητικότητα",
    cutoff: 41.84,
    questions: [
      "Όταν είναι ξαπλωμένο ανάσκελα κουνά χέρια και πόδια έντονα;",
      "Όταν είναι ξαπλωμένο μπρούμυτα, γυρνά το κεφάλι δεξιά και αριστερά;",
      "Όταν είναι ξαπλωμένο μπρούμυτα, κρατά το κεφάλι ψηλά για περισσότερα από μερικά δευτερόλεπτα;",
      "Όταν είναι ξαπλωμένο ανάσκελα κλωτσά με τα πόδια;",
      "Όταν είναι ξαπλωμένο ανάσκελα γυρνά το κεφάλι δεξιά και αριστερά;",
      "Αφού είναι ξαπλωμένο μπρούμυτα με το κεφάλι ψηλά, ακουμπά ήσυχα το κεφάλι κάτω αντί να το αφήνει να πέφτει απότομα;"
    ]
  },
  {
    id: "fineMotor",
    title: "Λεπτή κινητικότητα",
    cutoff: 30.16,
    note: "Αν η ερώτηση 5 σημειωθεί «Ναι», η ερώτηση 1 βαθμολογείται επίσης ως «Ναι».",
    questions: [
      "Όταν είναι ξύπνιο έχει συνήθως τις παλάμες σφιχτά κλειστές; Αν δεν το κάνει τώρα αλλά το έκανε το προηγούμενο διάστημα, σημειώστε «Ναι».",
      "Σας αρπάζει το δάχτυλο μόλις ακουμπήσετε την παλάμη του με το χέρι σας;",
      "Αν του βάλετε ένα παιχνίδι στο χέρι θα το κρατήσει για ένα σύντομο χρονικό διάστημα;",
      "Ακουμπά το πρόσωπό του με τα χέρια του;",
      "Όταν είναι ξύπνιο κρατά τις παλάμες ανοιχτές ή μερικώς ανοιχτές αντί να εξακολουθεί να τις έχει σφιχτά κλειστές όπως όταν ήταν νεογέννητο;",
      "Αρπάζει ή γρατσουνά τα ρούχα του;"
    ]
  },
  {
    id: "problemSolving",
    title: "Λύση προβλημάτων",
    cutoff: 24.62,
    questions: [
      "Εστιάζει σε αντικείμενα που βρίσκονται σε απόσταση 20-25 εκ. από τα μάτια του;",
      "Όταν κινείστε μέσα στο δωμάτιο σας παρακολουθεί με το βλέμμα του;",
      "Αν μετακινήσετε πλάγια δεξιά-αριστερά ένα αντικείμενο σε απόσταση 25 εκ. από τα μάτια του, το παρακολουθεί με τα μάτια, καμιά φορά στρίβοντας ταυτόχρονα και το κεφάλι του;",
      "Αν μετακινήσετε πάνω-κάτω ένα αντικείμενο σε απόσταση 25 εκ. από τα μάτια του, το παρακολουθεί με τα μάτια;",
      "Κρατώντας το σε καθιστή θέση μπορεί να εστιάσει σε ένα αντικείμενο, π.χ. κουδουνίστρα, που έχετε τοποθετήσει στο πάτωμα ακριβώς μπροστά του;",
      "Αν κρατήσετε ένα αντικείμενο πάνω από το κεφάλι του ενώ είναι ξαπλωμένο ανάσκελα, απλώνει τα χέρια προς το μέρος του;"
    ]
  },
  {
    id: "personalSocial",
    title: "Κοινωνικότητα",
    cutoff: 33.71,
    questions: [
      "Πιπιλάει μερικές φορές ακόμα και σε φάσεις που δεν το ταΐζετε;",
      "Κλαίει όταν πεινάει, έχει λερωθεί, είναι κουρασμένο ή θέλει αγκαλιά;",
      "Σας χαμογελά;",
      "Σας χαμογελά όταν του χαμογελάτε;",
      "Κοιτάει τα χέρια του;",
      "Όταν βλέπει το στήθος ή το μπιμπερό καταλαβαίνει ότι ήρθε η ώρα να φάει;"
    ]
  }
];

const OVERALL = [
  { id: "hearingScreen", text: "Πέρασε τον έλεγχο ακοής του νεογνού;", followUp: "no" },
  { id: "equalMovement", text: "Κουνά συμμετρικά και με την ίδια ένταση χέρια και πόδια;", followUp: "no" },
  { id: "familyHistory", text: "Μήπως ένας από τους δύο γονείς έχει κάποιο πρόβλημα ακοής ή όρασης;", followUp: "yes" },
  { id: "medicalProblems", text: "Παρουσίασε κάποια ιατρικά προβλήματα;", followUp: "yes" },
  { id: "behaviorConcerns", text: "Υπάρχουν ανησυχίες σχετικά με τη συμπεριφορά του παιδιού, π.χ. ύπνος ή γεύματα;", followUp: "yes" },
  { id: "otherConcerns", text: "Υπάρχει οτιδήποτε άλλο που σας ανησυχεί σχετικά με το παιδί σας;", followUp: "yes" }
];

const QUESTION_IMAGES = {
  "fineMotor-1": {
    src: "assets/grasp-reflex.png",
    alt: "Σκίτσο βρέφους που αρπάζει το δάχτυλο ενήλικα."
  },
  "fineMotor-2": {
    src: "assets/hold-rattle.png",
    alt: "Σκίτσο βρέφους που κρατά κουδουνίστρα στο χέρι."
  },
  "fineMotor-4": {
    src: "assets/open-hand.png",
    alt: "Σκίτσο ανοιχτής παλάμης βρέφους."
  },
  "problemSolving-5": {
    src: "assets/dangle-toy.png",
    alt: "Σκίτσο βρέφους που απλώνει τα χέρια προς παιχνίδι."
  },
  "personalSocial-4": {
    src: "assets/watch-hands.png",
    alt: "Σκίτσο βρέφους που κοιτά τα χέρια του."
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
    if (domain.id === "fineMotor" && index === 0 && getAnswer("fineMotor-4") === "yes") {
      answer = "yes";
    }

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
    questionnaire: "ASQ-3 Ερωτηματολόγιο 2 μηνών",
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
