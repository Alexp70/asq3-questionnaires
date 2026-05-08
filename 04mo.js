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
    cutoff: 34.60,
    questions: [
      "Γελάει ήπια;",
      "Αφού πρώτα έχετε απομακρυνθεί από το οπτικό του πεδίο, χαμογελάει ή ενθουσιάζεται όταν σας ξαναβλέπει;",
      "Σταματάει να κλαίει όταν ακούει φωνή άλλη από τη δική σας;",
      "Βγάζει ψιλές φωνές, σε υψηλές συχνότητες;",
      "Γελάει με ήχο;",
      "Βγάζει ήχους όταν βλέπει παιχνίδια ή πρόσωπα;"
    ]
  },
  {
    id: "grossMotor",
    title: "Αδρή κινητικότητα",
    cutoff: 38.41,
    questions: [
      "Ξαπλωμένο ανάσκελα κουνάει το κεφάλι δεξιά-αριστερά;",
      "Ξαπλωμένο μπρούμυτα με το κεφάλι όρθιο, το αφήνει να ακουμπήσει ήπια στο κρεβάτι αντί να του πέφτει απότομα προς τα εμπρός;",
      "Ξαπλωμένο μπρούμυτα κρατάει το κεφάλι ψηλά έτσι ώστε το πηγούνι να απέχει περίπου 7 εκ. από το κρεβάτι για τουλάχιστον 15 δευτερόλεπτα;",
      "Ξαπλωμένο μπρούμυτα κρατάει το κεφάλι όρθιο κοιτάζοντας γύρω του; Μπορεί να ακουμπά στους αγκώνες την ώρα που το κάνει.",
      "Κρατώντας το σε καθιστή θέση, στηρίζει το κεφάλι;",
      "Ξαπλωμένο ανάσκελα φέρνει τα χέρια πάνω από το στήθος ακουμπώντας τα δάχτυλα;"
    ]
  },
  {
    id: "fineMotor",
    title: "Λεπτή κινητικότητα",
    cutoff: 29.62,
    note: "",
    questions: [
      "Κρατά τις παλάμες ανοιχτές ή μερικώς ανοιχτές αντί να είναι σφιχτά κλειστές όπως όταν ήταν νεογέννητο;",
      "Αν του βάλετε ένα παιχνίδι στο χέρι, το κουνάει γύρω-γύρω τουλάχιστον για ένα σύντομο χρονικό διάστημα;",
      "Τραβάει ή γρατζουνάει τα ρούχα του;",
      "Αν του βάλετε ένα παιχνίδι στο χέρι, το κρατά τουλάχιστον για 1 λεπτό κοιτάζοντάς το, κουνώντας το ή προσπαθώντας να το μασήσει;",
      "Σε καθιστή θέση ή μπρούμυτα απλώνει τα χέρια για να ακουμπήσει ή να γρατσουνίσει την επιφάνεια που βρίσκεται μπροστά του;",
      "Σε καθιστή θέση, απλώνει το χέρι για να πιάσει ένα παιχνίδι που βρίσκεται κοντά του, ακόμα κι αν δεν το φτάσει;"
    ]
  },
  {
    id: "problemSolving",
    title: "Λύση προβλημάτων",
    cutoff: 34.98,
    questions: [
      "Αν μετακινήσετε πλάγια δεξιά-αριστερά ένα αντικείμενο σε απόσταση 25 εκ. από τα μάτια του, το παρακολουθεί με τα μάτια, καμιά φορά στρίβοντας ταυτόχρονα και το κεφάλι του;",
      "Αν μετακινήσετε πάνω-κάτω ένα αντικείμενο σε απόσταση 25 εκ. από τα μάτια του, το παρακολουθεί με τα μάτια;",
      "Κρατώντας το σε καθιστή θέση μπορεί να εστιάσει σε ένα αντικείμενο, π.χ. κουδουνίστρα, που έχετε τοποθετήσει στο πάτωμα ακριβώς μπροστά του;",
      "Αν του βάλετε ένα παιχνίδι στο χέρι, το κοιτάζει;",
      "Αν του βάλετε ένα παιχνίδι στο χέρι, το βάζει στο στόμα;",
      "Αν κρατήσετε ένα παιχνίδι πάνω από το κεφάλι του την ώρα που είναι ξαπλωμένο ανάσκελα, θα απλώσει τα χέρια προσπαθώντας να το πιάσει;"
    ]
  },
  {
    id: "personalSocial",
    title: "Κοινωνικότητα",
    cutoff: 33.16,
    questions: [
      "Κοιτάει τα χέρια του;",
      "Όταν έχει ενωμένα τα χέρια, παίζει με τα δάχτυλά του;",
      "Όταν βλέπει το στήθος ή το μπιμπερό, καταλαβαίνει ότι ήρθε η ώρα να φάει;",
      "Όταν πίνει με το μπιμπερό, το κρατάει με τα δύο του χέρια; Όταν θηλάζει, κρατάει το στήθος με το ελεύθερο χέρι;",
      "Σας χαμογελά όταν σας βλέπει, ακόμα και πριν εσείς του μιλήσετε ή του χαμογελάσετε;",
      "Χαμογελά ή βγάζει ήχους όταν δει τον εαυτό του μπροστά σε έναν μεγάλο καθρέπτη;"
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
  "grossMotor-2": {
    src: "assets/04mo-tummy-chin.png",
    alt: "Σκίτσο βρέφους μπρούμυτα που σηκώνει το κεφάλι."
  },
  "grossMotor-3": {
    src: "assets/04mo-tummy-looking.png",
    alt: "Σκίτσο βρέφους μπρούμυτα που κοιτάζει γύρω του."
  },
  "grossMotor-5": {
    src: "assets/04mo-hands-together.png",
    alt: "Σκίτσο βρέφους ανάσκελα που φέρνει τα χέρια μαζί."
  },
  "fineMotor-0": {
    src: "assets/04mo-open-hand.png",
    alt: "Σκίτσο ανοιχτής παλάμης βρέφους."
  },
  "problemSolving-5": {
    src: "assets/04mo-dangle-toy.png",
    alt: "Σκίτσο βρέφους που απλώνει τα χέρια προς παιχνίδι."
  },
  "personalSocial-0": {
    src: "assets/04mo-watch-hands.png",
    alt: "Σκίτσο βρέφους που κοιτά τα χέρια του."
  },
  "personalSocial-5": {
    src: "assets/04mo-mirror.png",
    alt: "Σκίτσο βρέφους που κοιτά τον εαυτό του σε καθρέπτη."
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
    questionnaire: "ASQ-3 Ερωτηματολόγιο 4 μηνών",
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
