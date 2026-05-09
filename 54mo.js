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
    cutoff: 31.85,
    questions: [
      "Σας λέει τουλάχιστον δύο πράγματα για συνηθισμένα αντικείμενα; Για παράδειγμα, αν πείτε «πες μου για την μπάλα σου», λέει κάτι όπως «είναι στρογγυλή», «την πετάω», «είναι μεγάλη»;",
      "Χρησιμοποιεί όλες τις λέξεις σε μια πρόταση, όπως «ένα», «το», «είμαι», «είναι», για να φτιάξει ολοκληρωμένες προτάσεις, π.χ. «Πηγαίνω στο πάρκο», «Υπάρχει παιχνίδι να παίξω;» ή «Έρχεσαι κι εσύ;»;",
      "Χρησιμοποιεί καταλήξεις λέξεων, όπως πληθυντικό, χρόνους ή μετοχές; Για παράδειγμα, λέει φράσεις όπως «βλέπω δύο γάτες», «παίζω» ή «κλώτσησα την μπάλα»;",
      "Χωρίς να βοηθήσετε δείχνοντας ή επαναλαμβάνοντας τις οδηγίες, ακολουθεί τρεις οδηγίες που δεν σχετίζονται μεταξύ τους; Δώστε και τις τρεις οδηγίες πριν ξεκινήσει. Για παράδειγμα, μπορείτε να πείτε «χτύπα παλαμάκια, πήγαινε στην πόρτα και κάθισε» ή «δώσε μου το στυλό, άνοιξε το βιβλίο και στάσου όρθιος».",
      "Χρησιμοποιεί προτάσεις τεσσάρων και πέντε λέξεων; Για παράδειγμα, λέει «θέλω το αυτοκίνητο»; Γράψτε ένα παράδειγμα αν θέλετε.",
      "Όταν μιλά για κάτι που έχει ήδη συμβεί, χρησιμοποιεί λέξεις ή τύπους παρελθοντικού χρόνου, όπως «πήγα», «πήδηξα» ή «παίξαμε»; Μπορείτε να ρωτήσετε «Πώς πήγατε στο μαγαζί;» ή «Τι κάνατε στο σπίτι του φίλου σου;»"
    ]
  },
  {
    id: "grossMotor",
    title: "Αδρή κινητικότητα",
    cutoff: 35.18,
    questions: [
      "Χοροπηδά πάνω-κάτω στο δεξί ή στο αριστερό πόδι τουλάχιστον μία φορά χωρίς να χάσει την ισορροπία του ή να πέσει;",
      "Ενώ στέκεται, πετά μπάλα πάνω από τον ώμο προς την κατεύθυνση ενός ατόμου που στέκεται τουλάχιστον 1,8 μέτρα μακριά; Για να μετρήσει, πρέπει να σηκώνει το χέρι στο ύψος του ώμου και να πετά την μπάλα προς τα εμπρός. Αν αφήνει την μπάλα να πέσει ή την πετά από κάτω, σημειώστε «Όχι ακόμα».",
      "Πηδά προς τα εμπρός περίπου 50 εκατοστά από όρθια θέση, ξεκινώντας με τα πόδια ενωμένα;",
      "Πιάνει μεγάλη μπάλα με τα δύο χέρια; Σταθείτε περίπου 1,5 μέτρο μακριά και δώστε του δύο ή τρεις προσπάθειες πριν σημειώσετε την απάντηση.",
      "Χωρίς να κρατιέται από κάτι, στέκεται στο ένα πόδι για τουλάχιστον 5 δευτερόλεπτα χωρίς να χάσει την ισορροπία του και χωρίς να κατεβάσει το πόδι; Μπορείτε να του δώσετε δύο ή τρεις προσπάθειες πριν σημειώσετε την απάντηση.",
      "Περπατά στις μύτες των ποδιών για περίπου 4,5 μέτρα, δηλαδή περίπου όσο ένα μεγάλο αυτοκίνητο; Μπορείτε να του δείξετε πώς να το κάνει."
    ]
  },
  {
    id: "fineMotor",
    title: "Λεπτή κινητικότητα",
    cutoff: 17.32,
    questions: [
      "Κοιτάζοντας τα σχήματα, αντιγράφει τουλάχιστον τρία σχήματα σε μεγάλο χαρτί με μολύβι, κηρομπογιά ή στυλό, χωρίς να τα πατήσει από πάνω; Τα σχέδιά του πρέπει να μοιάζουν με τα σχήματα, ακόμη κι αν έχουν διαφορετικό μέγεθος.",
      "Ξεκουμπώνει ένα ή περισσότερα κουμπιά; Μπορεί να χρησιμοποιήσει δικά του ρούχα ή ρούχα κούκλας.",
      "Χρωματίζει κυρίως μέσα στις γραμμές σε βιβλίο ζωγραφικής ή μέσα στις γραμμές ενός κύκλου 5 εκατοστών που σχεδιάζετε; Δεν πρέπει να βγαίνει περισσότερο από περίπου 0,5 εκατοστό έξω από τις γραμμές στο μεγαλύτερο μέρος της εικόνας.",
      "Ζητήστε του να πατήσει με μολύβι πάνω στη γραμμή. Ακολουθεί τη γραμμή χωρίς να βγει έξω από αυτήν περισσότερες από δύο φορές; Σημειώστε «Μερικές φορές» αν βγει έξω από τη γραμμή τρεις φορές.",
      "Ζητήστε του να ζωγραφίσει έναν άνθρωπο σε λευκό χαρτί. Αν ζωγραφίσει άνθρωπο με κεφάλι, σώμα, χέρια και πόδια, σημειώστε «Ναι». Αν ζωγραφίσει μόνο τρία μέρη, σημειώστε «Μερικές φορές». Αν ζωγραφίσει δύο ή λιγότερα μέρη, σημειώστε «Όχι ακόμα».",
      "Ζωγραφίστε μια γραμμή σε ένα χαρτί. Με παιδικό ψαλίδι ασφαλείας, κόβει το χαρτί στη μέση πάνω σε περίπου ευθεία γραμμή, ανοίγοντας και κλείνοντας τις λεπίδες; Επιβλέπετε προσεκτικά τη χρήση του ψαλιδιού."
    ]
  },
  {
    id: "problemSolving",
    title: "Λύση προβλημάτων",
    cutoff: 28.12,
    questions: [
      "Όταν του δείχνετε αντικείμενα και ρωτάτε «Τι χρώμα είναι αυτό;», ονομάζει σωστά πέντε διαφορετικά χρώματα, όπως κόκκινο, μπλε, κίτρινο, πορτοκαλί, μαύρο, άσπρο ή ροζ;",
      "Ντύνεται και κάνει παιχνίδι ρόλων, προσποιούμενο ότι είναι κάποιος ή κάτι άλλο; Για παράδειγμα, μπορεί να φορέσει διαφορετικά ρούχα και να προσποιηθεί ότι είναι μαμά, μπαμπάς, αδελφός/αδελφή ή φανταστικό ζώο ή πρόσωπο.",
      "Αν βάλετε πέντε αντικείμενα μπροστά του, μπορεί να τα μετρήσει λέγοντας «ένα, δύο, τρία, τέσσερα, πέντε» με τη σειρά; Κάντε την ερώτηση χωρίς βοήθεια, χωρίς να δείξετε, να κάνετε χειρονομίες ή να ονομάσετε τα αντικείμενα.",
      "Όταν ρωτάτε «Ποιος κύκλος είναι ο μικρότερος;», δείχνει τον μικρότερο κύκλο; Κάντε την ερώτηση χωρίς βοήθεια, χωρίς να δείξετε, να κάνετε χειρονομίες ή να κοιτάξετε τον μικρότερο κύκλο.",
      "Μετρά μέχρι το 15 χωρίς λάθη; Αν μετρά μέχρι το 15 χωρίς λάθη, σημειώστε «Ναι». Αν μετρά μέχρι το 12 χωρίς λάθη, σημειώστε «Μερικές φορές».",
      "Γνωρίζει τα ονόματα αριθμών; Σημειώστε «Ναι» αν αναγνωρίζει και τους τρεις αριθμούς 3, 1 και 2. Σημειώστε «Μερικές φορές» αν αναγνωρίζει δύο αριθμούς."
    ]
  },
  {
    id: "personalSocial",
    title: "Κοινωνικότητα",
    cutoff: 32.33,
    questions: [
      "Πλένει τα χέρια του με σαπούνι και νερό και τα σκουπίζει με πετσέτα χωρίς βοήθεια;",
      "Σας λέει τα ονόματα δύο ή περισσότερων παιδιών με τα οποία παίζει, χωρίς να περιλαμβάνονται αδέλφια; Κάντε την ερώτηση χωρίς να βοηθήσετε προτείνοντας ονόματα φίλων.",
      "Βουρτσίζει τα δόντια του βάζοντας οδοντόκρεμα στην οδοντόβουρτσα και βουρτσίζοντας όλα τα δόντια χωρίς βοήθεια; Μπορεί ακόμη να χρειάζεται να ελέγξετε και να ξαναβουρτσίσετε τα δόντια του.",
      "Σερβίρει μόνο του, μεταφέροντας φαγητό από ένα δοχείο σε άλλο με σκεύος; Για παράδειγμα, χρησιμοποιεί μεγάλο κουτάλι για να βάλει σάλτσα μήλου από βάζο σε μπολ;",
      "Σας λέει τουλάχιστον τέσσερα από τα παρακάτω: μικρό όνομα, ηλικία, πόλη όπου ζει, επίθετο, αν είναι αγόρι ή κορίτσι, αριθμό τηλεφώνου;",
      "Ντύνεται και γδύνεται μόνο του, συμπεριλαμβανομένου του κουμπώματος μεσαίου μεγέθους κουμπιών και του κλεισίματος μπροστινών φερμουάρ;"
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
    src: "assets/54mo-hop-one-foot.png",
    alt: "Σκίτσο παιδιού που χοροπηδά στο ένα πόδι."
  },
  "grossMotor-1": {
    src: "assets/54mo-throw-overhand.png",
    alt: "Σκίτσο παιδιού που πετά μπάλα πάνω από τον ώμο."
  },
  "grossMotor-3": {
    src: "assets/54mo-catch-ball.png",
    alt: "Σκίτσο παιδιού που πιάνει μεγάλη μπάλα."
  },
  "grossMotor-4": {
    src: "assets/54mo-hop-one-foot.png",
    alt: "Σκίτσο παιδιού που στέκεται στο ένα πόδι."
  },
  "fineMotor-5": {
    src: "assets/54mo-scissors.png",
    alt: "Σκίτσο παιδιού που χρησιμοποιεί παιδικό ψαλίδι ασφαλείας."
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
    questionnaire: "ASQ-3 Ερωτηματολόγιο 54 μηνών",
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
