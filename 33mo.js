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
    cutoff: 25.36,
    questions: [
      "Όταν του ζητάτε να δείξει τη μύτη, τα μάτια, τα μαλλιά, τα πόδια, τα αυτιά κ.λπ., δείχνει σωστά τουλάχιστον επτά μέρη του σώματος; Μπορεί να δείχνει στον εαυτό του, σε εσάς ή σε κούκλα. Σημειώστε «Μερικές φορές» αν δείχνει σωστά τουλάχιστον τρία διαφορετικά μέρη του σώματος.",
      "Φτιάχνει προτάσεις τριών ή τεσσάρων λέξεων;",
      "Χωρίς να το βοηθήσετε δείχνοντας ή κάνοντας χειρονομίες, ζητήστε του «βάλε το βιβλίο πάνω στο τραπέζι» και «βάλε το παπούτσι κάτω από την καρέκλα». Εκτελεί σωστά και τις δύο οδηγίες;",
      "Όταν κοιτάτε ένα εικονογραφημένο βιβλίο, σας λέει τι συμβαίνει ή ποια πράξη γίνεται στην εικόνα, π.χ. «γαβγίζει», «τρέχει», «τρώει» ή «κλαίει»; Μπορείτε να ρωτήσετε «Τι κάνει ο σκύλος/το παιδί;»",
      "Δείξτε του πώς ανεβοκατεβαίνει το φερμουάρ σε ένα μπουφάν και πείτε «κοίτα, αυτό ανεβαίνει και κατεβαίνει». Βάλτε το φερμουάρ στη μέση και ζητήστε να το κατεβάσει. Ξαναβάλτε το στη μέση και ζητήστε να το ανεβάσει. Το κάνει σταθερά σωστά;",
      "Όταν ρωτάτε «Πώς σε λένε;», λέει το μικρό του όνομα ή το χαϊδευτικό του;"
    ]
  },
  {
    id: "grossMotor",
    title: "Αδρή κινητικότητα",
    cutoff: 34.80,
    questions: [
      "Τρέχει αρκετά καλά και σταματά χωρίς να πέφτει ή να χτυπά σε πράγματα;",
      "Χωρίς να κρατιέται από κάτι για στήριξη, κλωτσά μπάλα κουνώντας το πόδι του προς τα εμπρός;",
      "Πηδά με τα δύο πόδια να σηκώνονται από το πάτωμα ταυτόχρονα;",
      "Ανεβαίνει σκάλες χρησιμοποιώντας μόνο ένα πόδι σε κάθε σκαλοπάτι; Το αριστερό πόδι είναι σε ένα σκαλοπάτι και το δεξί στο επόμενο. Μπορεί να κρατά το κάγκελο ή τον τοίχο.",
      "Στέκεται στο ένα πόδι για περίπου 1 δευτερόλεπτο χωρίς να κρατιέται από κάτι;",
      "Ενώ στέκεται, πετά μπάλα πάνω από τον ώμο, σηκώνοντας το χέρι στο ύψος του ώμου και πετώντας την μπάλα προς τα εμπρός; Αν αφήνει την μπάλα να πέσει ή την πετά από κάτω, σημειώστε «Όχι ακόμα»."
    ]
  },
  {
    id: "fineMotor",
    title: "Λεπτή κινητικότητα",
    cutoff: 12.28,
    questions: [
      "Αφού δει εσάς να τραβάτε μια γραμμή από την κορυφή προς το κάτω μέρος του χαρτιού με μολύβι, κηρομπογιά ή στυλό, ζητήστε του να κάνει μια γραμμή σαν τη δική σας. Μην το αφήσετε να πατήσει πάνω στη γραμμή σας. Αντιγράφει σχεδιάζοντας μία κάθετη γραμμή;",
      "Μπορεί να περάσει μικρά αντικείμενα, όπως χάντρες, μακαρόνια ή ζυμαρικά «ροδάκια», σε κορδόνι ή κορδόνι παπουτσιού;",
      "Αφού δει εσάς να τραβάτε μια γραμμή από τη μία πλευρά του χαρτιού στην άλλη, ζητήστε του να κάνει μια γραμμή σαν τη δική σας. Μην το αφήσετε να πατήσει πάνω στη γραμμή σας. Αντιγράφει σχεδιάζοντας μία οριζόντια γραμμή;",
      "Αφού δει εσάς να σχεδιάζετε έναν κύκλο, ζητήστε του να κάνει έναν κύκλο σαν τον δικό σας. Μην το αφήσετε να πατήσει πάνω στον κύκλο σας. Αντιγράφει σχεδιάζοντας κύκλο;",
      "Γυρίζει τις σελίδες ενός βιβλίου μία-μία;",
      "Προσπαθεί να κόψει χαρτί με παιδικό ψαλίδι ασφαλείας; Δεν χρειάζεται να κόψει το χαρτί, αλλά πρέπει να ανοίγει και να κλείνει τις λεπίδες κρατώντας το χαρτί με το άλλο χέρι. Μπορείτε να του δείξετε πώς χρησιμοποιείται το ψαλίδι και να το επιβλέπετε προσεκτικά."
    ]
  },
  {
    id: "problemSolving",
    title: "Λύση προβλημάτων",
    cutoff: 26.92,
    questions: [
      "Όταν κοιτάζει στον καθρέφτη, ρωτήστε «Πού είναι ο/η ...;» χρησιμοποιώντας το όνομα του παιδιού. Δείχνει την εικόνα του στον καθρέφτη;",
      "Ενώ σας βλέπει, βάλτε τέσσερα αντικείμενα, όπως τουβλάκια ή αυτοκινητάκια, στη σειρά. Σας αντιγράφει ή σας μιμείται βάζοντας τέσσερα αντικείμενα στη σειρά; Μπορείτε επίσης να χρησιμοποιήσετε κουβαρίστρες, μικρά κουτιά ή άλλα παιχνίδια.",
      "Αν θέλει κάτι που δεν μπορεί να φτάσει, βρίσκει καρέκλα ή κουτί για να σταθεί πάνω του και να το φτάσει, π.χ. ένα παιχνίδι στον πάγκο ή για να σας «βοηθήσει» στην κουζίνα;",
      "Όταν δείχνετε την εικόνα και ρωτάτε «Τι είναι αυτό;», λέει μια λέξη που σημαίνει άνθρωπος ή κάτι παρόμοιο; Σημειώστε «Ναι» για απαντήσεις όπως «χιονάνθρωπος», «αγόρι», «άντρας», «κορίτσι», «μπαμπάς», «αστροναύτης» ή «μαϊμού».",
      "Όταν λέτε «πες επτά τρία», επαναλαμβάνει μόνο τους δύο αριθμούς με την ίδια σειρά; Μην επαναλάβετε τους αριθμούς. Αν χρειάζεται, δοκιμάστε άλλο ζευγάρι λέγοντας «πες οκτώ δύο». Αρκεί να επαναλάβει σωστά μία σειρά δύο αριθμών.",
      "Αφού ζωγραφίσει μια «εικόνα», ακόμη και μια απλή μουτζούρα, σας λέει τι ζωγράφισε; Μπορείτε να πείτε «Πες μου για την εικόνα σου» ή να ρωτήσετε «Τι είναι αυτό;»."
    ]
  },
  {
    id: "personalSocial",
    title: "Κοινωνικότητα",
    cutoff: 28.96,
    questions: [
      "Χρησιμοποιεί κουτάλι για να φάει μόνο του με μικρή μόνο διαρροή;",
      "Σπρώχνει μικρό καροτσάκι, καρότσι κούκλας ή άλλο παιχνίδι με ρόδες, στρίβοντάς το γύρω από αντικείμενα και κάνοντας πίσω αν δεν μπορεί να στρίψει;",
      "Φορά μόνο του παλτό, ζακέτα ή πουκάμισο;",
      "Αφού του φορέσετε φαρδιά παντελόνια γύρω από τα πόδια, τα τραβά τελείως πάνω μέχρι τη μέση;",
      "Όταν κοιτάζει στον καθρέφτη και ρωτάτε «Ποιος είναι στον καθρέφτη;», λέει είτε «εγώ» είτε το όνομά του;",
      "Χρησιμοποιώντας αυτές ακριβώς τις λέξεις, ρωτήστε το παιδί σας «Είσαι κορίτσι ή αγόρι;». Απαντά σωστά;"
    ]
  }
];

const OVERALL = [
  { id: "hearsWell", text: "Πιστεύετε ότι το παιδί σας ακούει καλά;", followUp: "no" },
  { id: "talksLikePeers", text: "Πιστεύετε ότι μιλά όπως τα άλλα παιδιά της ηλικίας του;", followUp: "no" },
  { id: "understandSpeech", text: "Μπορείτε να καταλάβετε τα περισσότερα από αυτά που λέει;", followUp: "no" },
  { id: "othersUnderstandSpeech", text: "Μπορούν οι άλλοι άνθρωποι να καταλάβουν τα περισσότερα από αυτά που λέει;", followUp: "no" },
  { id: "movesLikePeers", text: "Πιστεύετε ότι περπατά, τρέχει και σκαρφαλώνει όπως τα άλλα παιδιά της ηλικίας του;", followUp: "no" },
  { id: "familyHearingHistory", text: "Υπάρχουν προβλήματα ακοής σε κάποιον από τους γονείς;", followUp: "yes" },
  { id: "visionConcerns", text: "Υπάρχει κάτι που να σας ανησυχεί σχετικά με την όραση του παιδιού σας;", followUp: "yes" },
  { id: "medicalProblems", text: "Έχει το παιδί παρουσιάσει προβλήματα υγείας το προηγούμενο διάστημα;", followUp: "yes" },
  { id: "behaviorConcerns", text: "Έχετε ανησυχίες σχετικά με τη συμπεριφορά του παιδιού;", followUp: "yes" },
  { id: "otherConcerns", text: "Υπάρχει οτιδήποτε άλλο που σας ανησυχεί σχετικά με το παιδί σας;", followUp: "yes" }
];

const QUESTION_IMAGES = {
  "grossMotor-0": {
    src: "assets/33mo-run.png",
    alt: "Σκίτσο παιδιού που τρέχει."
  },
  "grossMotor-1": {
    src: "assets/33mo-kick-ball-alone.png",
    alt: "Σκίτσο παιδιού που κλωτσά μπάλα χωρίς στήριξη."
  },
  "grossMotor-2": {
    src: "assets/33mo-jump.png",
    alt: "Σκίτσο παιδιού που πηδά με τα δύο πόδια."
  },
  "grossMotor-3": {
    src: "assets/33mo-stairs-alternating.png",
    alt: "Σκίτσο παιδιού που ανεβαίνει σκάλες με εναλλάξ πόδια."
  },
  "grossMotor-4": {
    src: "assets/33mo-stand-one-foot.png",
    alt: "Σκίτσο παιδιού που στέκεται στο ένα πόδι."
  },
  "grossMotor-5": {
    src: "assets/33mo-throw-overhand.png",
    alt: "Σκίτσο παιδιού που πετά μπάλα πάνω από τον ώμο."
  },
  "fineMotor-0": {
    src: "assets/33mo-vertical-line-examples.png",
    alt: "Παραδείγματα κάθετης γραμμής που μετρά ως Ναι και γραμμής που μετρά ως Όχι ακόμα."
  },
  "fineMotor-1": {
    src: "assets/33mo-string-beads.png",
    alt: "Σκίτσο χεριών που περνούν χάντρα σε κορδόνι."
  },
  "fineMotor-2": {
    src: "assets/33mo-horizontal-line-examples.png",
    alt: "Παραδείγματα οριζόντιας γραμμής που μετρά ως Ναι και γραμμών που μετρούν ως Όχι ακόμα."
  },
  "fineMotor-3": {
    src: "assets/33mo-circle-examples.png",
    alt: "Παραδείγματα κύκλου που μετρά ως Ναι και σχημάτων που μετρούν ως Όχι ακόμα."
  },
  "fineMotor-5": {
    src: "assets/33mo-scissors.png",
    alt: "Σκίτσο παιδιού που χρησιμοποιεί παιδικό ψαλίδι ασφαλείας."
  },
  "problemSolving-0": {
    src: "assets/33mo-mirror-self.png",
    alt: "Σκίτσο παιδιού που δείχνει τον εαυτό του στον καθρέφτη."
  },
  "problemSolving-1": {
    src: "assets/33mo-line-blocks-four.png",
    alt: "Σκίτσο με τέσσερα τουβλάκια τοποθετημένα σε σειρά."
  },
  "problemSolving-3": {
    src: "assets/33mo-person-figure.png",
    alt: "Σκίτσο ανθρώπινης φιγούρας."
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
    const answer = getAnswer(`${domain.id}-${index}`);

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
    questionnaire: "ASQ-3 Ερωτηματολόγιο 33 μηνών",
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
