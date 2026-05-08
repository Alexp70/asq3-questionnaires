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
    cutoff: 33.06,
    questions: [
      "Αν φωνάξετε το μωρό σας όταν είστε εκτός οπτικού πεδίου, κοιτάζει προς την κατεύθυνση της φωνής σας;",
      "Όταν ακούγεται ένας δυνατός θόρυβος, γυρίζει το μωρό σας για να δει από πού προήλθε ο ήχος;",
      "Αν μιμηθείτε τους ήχους που κάνει το μωρό σας, επαναλαμβάνει τους ίδιους ήχους προς εσάς;",
      "Κάνει το μωρό σας ήχους όπως «ντα», «γκα», «κα» και «μπα»;",
      "Ανταποκρίνεται το μωρό σας στον τόνο της φωνής σας και σταματά τη δραστηριότητά του, έστω και για λίγο, όταν του λέτε «όχι-όχι»;",
      "Κάνει το μωρό σας δύο παρόμοιους ήχους, όπως «μπα-μπα», «ντα-ντα» ή «γκα-γκα»; Δεν χρειάζεται οι ήχοι να σημαίνουν κάτι."
    ]
  },
  {
    id: "grossMotor",
    title: "Αδρή κινητικότητα",
    cutoff: 30.61,
    note: "Αν η ερώτηση 5 σημειωθεί «Ναι» ή «Μερικές φορές», η ερώτηση 1 βαθμολογείται ως «Ναι».",
    questions: [
      "Όταν το βάλετε στο πάτωμα, στηρίζεται στα χέρια του ενώ κάθεται; Αν ήδη κάθεται όρθιο χωρίς να στηρίζεται στα χέρια, σημειώστε «Ναι».",
      "Κάνει το μωρό σας τούμπα από την πλάτη στην κοιλιά, βγάζοντας και τα δύο χέρια από κάτω του;",
      "Μπαίνει το μωρό σας σε θέση μπουσουλήματος σηκώνοντας τα χέρια και τα γόνατά του;",
      "Αν κρατάτε και τα δύο χέρια του μωρού σας μόνο για να το ισορροπήσετε, στηρίζει το βάρος του ενώ στέκεται όρθιο;",
      "Όταν κάθεται στο πάτωμα, κάθεται ίσια για αρκετά λεπτά χωρίς να χρησιμοποιεί τα χέρια του για στήριξη;",
      "Όταν στέκεται δίπλα σε έπιπλα ή στο κάγκελο της κούνιας, κρατιέται χωρίς να στηρίζεται με το στήθος του στα έπιπλα;"
    ]
  },
  {
    id: "fineMotor",
    title: "Λεπτή κινητικότητα",
    cutoff: 40.15,
    note: "Αν η ερώτηση 6 σημειωθεί «Ναι» ή «Μερικές φορές», η ερώτηση 2 βαθμολογείται ως «Ναι».",
    questions: [
      "Απλώνει το μωρό σας το χέρι του για να πιάσει ένα ψίχουλο ή ένα μικρό δημητριακό και το αγγίζει με το δάχτυλο ή το χέρι του; Αν ήδη πιάνει ένα μικρό αντικείμενο, σημειώστε «Ναι».",
      "Πιάνει το μωρό σας ένα μικρό παιχνίδι, κρατώντας το στο κέντρο του χεριού του με τα δάχτυλα γύρω από αυτό;",
      "Προσπαθεί το μωρό σας να πιάσει ένα ψίχουλο ή ένα μικρό δημητριακό χρησιμοποιώντας τον αντίχειρα και όλα τα δάχτυλά του με κίνηση σαν ξύσιμο, ακόμα κι αν δεν καταφέρνει να το σηκώσει; Αν ήδη το πιάνει, σημειώστε «Ναι».",
      "Πιάνει το μωρό σας ένα μικρό παιχνίδι χρησιμοποιώντας μόνο το ένα χέρι;",
      "Καταφέρνει το μωρό σας να πιάσει ένα ψίχουλο ή ένα μικρό δημητριακό χρησιμοποιώντας τον αντίχειρα και όλα τα δάχτυλά του με κίνηση σαν ξύσιμο; Αν ήδη το πιάνει, σημειώστε «Ναι».",
      "Πιάνει το μωρό σας ένα μικρό παιχνίδι με τις άκρες του αντίχειρα και των δαχτύλων; Θα πρέπει να βλέπετε ένα κενό μεταξύ του παιχνιδιού και της παλάμης."
    ]
  },
  {
    id: "problemSolving",
    title: "Λύση προβλημάτων",
    cutoff: 36.17,
    questions: [
      "Πιάνει ένα παιχνίδι και το βάζει στο στόμα;",
      "Όταν είναι ανάσκελα, προσπαθεί να πιάσει ένα παιχνίδι που έχει ρίξει αν μπορεί να το δει;",
      "Παίζει χτυπώντας ένα παιχνίδι πάνω-κάτω στο πάτωμα ή στο τραπέζι;",
      "Περνά ένα παιχνίδι από το ένα χέρι στο άλλο;",
      "Πιάνει δύο μικρά παιχνίδια, ένα σε κάθε χέρι, και τα κρατάει για περίπου 1 λεπτό;",
      "Όταν κρατάει ένα παιχνίδι στο χέρι του, το χτυπάει πάνω σε άλλο παιχνίδι που βρίσκεται στο τραπέζι;"
    ]
  },
  {
    id: "personalSocial",
    title: "Κοινωνικότητα",
    cutoff: 35.84,
    questions: [
      "Ενώ είναι ξαπλωμένο ανάσκελα, παίζει πιάνοντας το πόδι του;",
      "Όταν βρίσκεται μπροστά σε μεγάλο καθρέπτη, απλώνει το χέρι για να χτυπήσει ή να ακουμπήσει τον καθρέπτη;",
      "Προσπαθεί να πιάσει ένα παιχνίδι που είναι εκτός εμβέλειας; Μπορεί να κυλιέται, να περιστρέφεται στην κοιλιά του ή να μπουσουλάει για να το πάρει.",
      "Ενώ είναι ανάσκελα, βάζει το πόδι του στο στόμα;",
      "Πίνει νερό, χυμό ή γάλα από ποτήρι ενώ το κρατάτε;",
      "Τρώει μόνο του ένα κρακεράκι ή ένα μπισκότο;"
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
  "grossMotor-0": {
    src: "assets/08mo-sitting-hands.png",
    alt: "Σκίτσο βρέφους που κάθεται στηριζόμενο στα χέρια."
  },
  "grossMotor-2": {
    src: "assets/08mo-crawling-position.png",
    alt: "Σκίτσο βρέφους σε θέση μπουσουλήματος."
  },
  "grossMotor-3": {
    src: "assets/08mo-standing-support.png",
    alt: "Σκίτσο βρέφους που στέκεται με στήριξη από τα χέρια."
  },
  "grossMotor-4": {
    src: "assets/08mo-sit-straight.png",
    alt: "Σκίτσο βρέφους που κάθεται ίσια."
  },
  "grossMotor-5": {
    src: "assets/08mo-stand-furniture.png",
    alt: "Σκίτσο βρέφους που στέκεται κρατώντας έπιπλο."
  },
  "fineMotor-0": {
    src: "assets/08mo-crumb-touch.png",
    alt: "Σκίτσο χεριού που ακουμπά μικρό αντικείμενο."
  },
  "fineMotor-1": {
    src: "assets/08mo-small-toy-center.png",
    alt: "Σκίτσο χεριού που κρατά μικρό παιχνίδι στο κέντρο της παλάμης."
  },
  "fineMotor-2": {
    src: "assets/08mo-raking-crumb-try.png",
    alt: "Σκίτσο χεριού που προσπαθεί να πιάσει μικρό αντικείμενο."
  },
  "fineMotor-3": {
    src: "assets/08mo-one-hand-toy.png",
    alt: "Σκίτσο βρέφους που κρατά μικρό παιχνίδι με το ένα χέρι."
  },
  "fineMotor-4": {
    src: "assets/08mo-raking-crumb-success.png",
    alt: "Σκίτσο χεριού που πιάνει μικρό αντικείμενο."
  },
  "fineMotor-5": {
    src: "assets/08mo-fingertip-toy.png",
    alt: "Σκίτσο χεριού που πιάνει παιχνίδι με άκρες δαχτύλων."
  },
  "problemSolving-0": {
    src: "assets/08mo-toy-mouth.png",
    alt: "Σκίτσο βρέφους που βάζει παιχνίδι στο στόμα."
  },
  "problemSolving-3": {
    src: "assets/08mo-transfer-toy.png",
    alt: "Σκίτσο βρέφους που περνά παιχνίδι από το ένα χέρι στο άλλο."
  },
  "problemSolving-4": {
    src: "assets/08mo-two-toys.png",
    alt: "Σκίτσο βρέφους που κρατά δύο μικρά παιχνίδια."
  },
  "problemSolving-5": {
    src: "assets/08mo-bang-toy-against-toy.png",
    alt: "Σκίτσο βρέφους που χτυπά ένα παιχνίδι πάνω σε άλλο."
  },
  "personalSocial-0": {
    src: "assets/08mo-grab-foot.png",
    alt: "Σκίτσο βρέφους που πιάνει το πόδι του."
  },
  "personalSocial-1": {
    src: "assets/08mo-mirror-pat.png",
    alt: "Σκίτσο βρέφους που ακουμπά τον καθρέπτη."
  },
  "personalSocial-3": {
    src: "assets/08mo-foot-mouth.png",
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
    if (domain.id === "grossMotor" && index === 0) {
      const item5 = getAnswer("grossMotor-4");
      if (item5 === "yes" || item5 === "sometimes") {
        answer = "yes";
      }
    }

    if (domain.id === "fineMotor" && index === 1) {
      const item6 = getAnswer("fineMotor-5");
      if (item6 === "yes" || item6 === "sometimes") {
        answer = "yes";
      }
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
    questionnaire: "ASQ-3 Ερωτηματολόγιο 8 μηνών",
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
