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
    cutoff: 27.06,
    questions: [
      "Χωρίς να το βοηθήσετε δείχνοντας ή κάνοντας χειρονομίες, ζητήστε του «βάλε το βιβλίο πάνω στο τραπέζι» και «βάλε το παπούτσι κάτω από την καρέκλα». Εκτελεί σωστά και τις δύο οδηγίες;",
      "Όταν κοιτάτε ένα εικονογραφημένο βιβλίο, σας λέει τι συμβαίνει ή ποια πράξη γίνεται στην εικόνα, π.χ. «γαβγίζει», «τρέχει», «τρώει» ή «κλαίει»; Μπορείτε να ρωτήσετε «Τι κάνει ο σκύλος/το παιδί;»",
      "Δείξτε του πώς ανεβοκατεβαίνει το φερμουάρ σε ένα μπουφάν και πείτε «κοίτα, αυτό ανεβαίνει και κατεβαίνει». Βάλτε το φερμουάρ στη μέση και ζητήστε να το κατεβάσει. Ξαναβάλτε το στη μέση και ζητήστε να το ανεβάσει. Το κάνει σταθερά σωστά;",
      "Όταν ρωτάτε «Πώς σε λένε;», λέει και το μικρό και το επίθετό του;",
      "Χωρίς να βοηθήσετε δείχνοντας ή επαναλαμβάνοντας τις οδηγίες, ακολουθεί τρεις οδηγίες που δεν σχετίζονται μεταξύ τους; Δώστε και τις τρεις οδηγίες πριν ξεκινήσει. Για παράδειγμα, μπορείτε να πείτε «χτύπα παλαμάκια, πήγαινε στην πόρτα και κάθισε» ή «δώσε μου το στυλό, άνοιξε το βιβλίο και στάσου όρθιος».",
      "Χρησιμοποιεί όλες τις λέξεις σε μια πρόταση, όπως «ένα», «το», «είμαι», «είναι», για να φτιάξει ολοκληρωμένες προτάσεις, π.χ. «Πηγαίνω στο πάρκο», «Υπάρχει παιχνίδι να παίξω;» ή «Έρχεσαι κι εσύ;»;"
    ]
  },
  {
    id: "grossMotor",
    title: "Αδρή κινητικότητα",
    cutoff: 36.27,
    questions: [
      "Ανεβαίνει σκάλες χρησιμοποιώντας μόνο ένα πόδι σε κάθε σκαλοπάτι; Το αριστερό πόδι είναι σε ένα σκαλοπάτι και το δεξί στο επόμενο. Μπορεί να κρατά το κάγκελο ή τον τοίχο.",
      "Στέκεται στο ένα πόδι για περίπου 1 δευτερόλεπτο χωρίς να κρατιέται από κάτι;",
      "Ενώ στέκεται, πετά μπάλα πάνω από τον ώμο, σηκώνοντας το χέρι στο ύψος του ώμου και πετώντας την μπάλα προς τα εμπρός; Αν αφήνει την μπάλα να πέσει ή την πετά από κάτω, σημειώστε «Όχι ακόμα».",
      "Πηδά προς τα εμπρός τουλάχιστον 15 εκατοστά, με τα δύο πόδια να σηκώνονται από το έδαφος ταυτόχρονα;",
      "Πιάνει μεγάλη μπάλα με τα δύο χέρια; Σταθείτε περίπου 1,5 μέτρο μακριά και δώστε του δύο ή τρεις προσπάθειες πριν σημειώσετε την απάντηση.",
      "Σκαρφαλώνει τα σκαλοπάτια/πατήματα μιας τσουλήθρας στην παιδική χαρά και κατεβαίνει την τσουλήθρα χωρίς βοήθεια;"
    ]
  },
  {
    id: "fineMotor",
    title: "Λεπτή κινητικότητα",
    cutoff: 19.82,
    questions: [
      "Αφού δει εσάς να σχεδιάζετε έναν κύκλο, ζητήστε του να κάνει έναν κύκλο σαν τον δικό σας. Μην το αφήσετε να πατήσει πάνω στον κύκλο σας. Αντιγράφει σχεδιάζοντας κύκλο;",
      "Αφού δει εσάς να τραβάτε μια γραμμή από τη μία πλευρά του χαρτιού στην άλλη, ζητήστε του να κάνει μια γραμμή σαν τη δική σας. Μην το αφήσετε να πατήσει πάνω στη γραμμή σας. Αντιγράφει σχεδιάζοντας μία οριζόντια γραμμή;",
      "Προσπαθεί να κόψει χαρτί με παιδικό ψαλίδι ασφαλείας; Δεν χρειάζεται να κόψει το χαρτί, αλλά πρέπει να ανοίγει και να κλείνει τις λεπίδες κρατώντας το χαρτί με το άλλο χέρι. Μπορείτε να του δείξετε πώς χρησιμοποιείται το ψαλίδι και να το επιβλέπετε προσεκτικά.",
      "Όταν ζωγραφίζει, κρατά μολύβι, κηρομπογιά ή στυλό ανάμεσα στα δάχτυλα και τον αντίχειρά του, όπως ένας ενήλικας;",
      "Συναρμολογεί παζλ 5 έως 7 κομματιών που κουμπώνουν μεταξύ τους; Αν δεν έχετε παζλ, κόψτε μια ολοσέλιδη εικόνα από περιοδικό ή κατάλογο σε έξι κομμάτια. Την ξαναφτιάχνει σωστά;",
      "Κοιτάζοντας το σχήμα δεξιά, το αντιγράφει σε μεγάλο χαρτί με μολύβι, κηρομπογιά ή στυλό, χωρίς να το πατήσει από πάνω; Το σχέδιό του πρέπει να μοιάζει με το σχήμα, ακόμη κι αν έχει διαφορετικό μέγεθος."
    ]
  },
  {
    id: "problemSolving",
    title: "Λύση προβλημάτων",
    cutoff: 28.11,
    questions: [
      "Όταν δείχνετε την εικόνα και ρωτάτε «Τι είναι αυτό;», λέει μια λέξη που σημαίνει άνθρωπος ή κάτι παρόμοιο; Σημειώστε «Ναι» για απαντήσεις όπως «χιονάνθρωπος», «αγόρι», «άντρας», «κορίτσι», «μπαμπάς», «αστροναύτης» ή «μαϊμού».",
      "Όταν λέτε «πες επτά τρία», επαναλαμβάνει μόνο τους δύο αριθμούς με την ίδια σειρά; Μην επαναλάβετε τους αριθμούς. Αν χρειάζεται, δοκιμάστε άλλο ζευγάρι λέγοντας «πες οκτώ δύο». Αρκεί να επαναλάβει σωστά μία σειρά δύο αριθμών.",
      "Δείξτε του πώς να φτιάξει μια γέφυρα με τουβλάκια, κουτιά ή κονσέρβες, όπως στο παράδειγμα. Σας αντιγράφει φτιάχνοντας μία ίδια;",
      "Όταν λέτε «πες πέντε οκτώ τρία», επαναλαμβάνει μόνο τους τρεις αριθμούς με την ίδια σειρά; Μην επαναλάβετε τους αριθμούς. Αν χρειάζεται, δοκιμάστε άλλη σειρά λέγοντας «πες έξι εννέα δύο». Αρκεί να επαναλάβει σωστά μία σειρά τριών αριθμών.",
      "Όταν ρωτάτε «Ποιος κύκλος είναι ο μικρότερος;», δείχνει τον μικρότερο κύκλο; Κάντε την ερώτηση χωρίς βοήθεια, χωρίς να δείξετε, να κάνετε χειρονομίες ή να κοιτάξετε τον μικρότερο κύκλο.",
      "Ντύνεται και κάνει παιχνίδι ρόλων, προσποιούμενο ότι είναι κάποιος ή κάτι άλλο; Για παράδειγμα, μπορεί να φορέσει διαφορετικά ρούχα και να προσποιηθεί ότι είναι μαμά, μπαμπάς, αδελφός/αδελφή ή φανταστικό ζώο ή πρόσωπο."
    ]
  },
  {
    id: "personalSocial",
    title: "Κοινωνικότητα",
    cutoff: 31.12,
    questions: [
      "Όταν κοιτάζει στον καθρέφτη και ρωτάτε «Ποιος είναι στον καθρέφτη;», λέει είτε «εγώ» είτε το όνομά του;",
      "Φορά μόνο του παλτό, ζακέτα ή πουκάμισο;",
      "Χρησιμοποιώντας αυτές ακριβώς τις λέξεις, ρωτήστε το παιδί σας «Είσαι κορίτσι ή αγόρι;». Απαντά σωστά;",
      "Περιμένει τη σειρά του όταν ένα άλλο παιδί ή ένας ενήλικας παίρνει σειρά;",
      "Σερβίρει μόνο του, μεταφέροντας φαγητό από ένα δοχείο σε άλλο με σκεύος; Για παράδειγμα, χρησιμοποιεί μεγάλο κουτάλι για να βάλει σάλτσα μήλου από βάζο σε μπολ;",
      "Πλένει τα χέρια του με σαπούνι και νερό και τα σκουπίζει με πετσέτα χωρίς βοήθεια;"
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
    src: "assets/42mo-stairs-alternating.png",
    alt: "Σκίτσο παιδιού που ανεβαίνει σκάλες με εναλλάξ πόδια."
  },
  "grossMotor-1": {
    src: "assets/42mo-stand-one-foot.png",
    alt: "Σκίτσο παιδιού που στέκεται στο ένα πόδι."
  },
  "grossMotor-2": {
    src: "assets/42mo-throw-overhand.png",
    alt: "Σκίτσο παιδιού που πετά μπάλα πάνω από τον ώμο."
  },
  "grossMotor-3": {
    src: "assets/42mo-jump-forward.png",
    alt: "Σκίτσο παιδιού που πηδά προς τα εμπρός."
  },
  "grossMotor-4": {
    src: "assets/42mo-catch-ball.png",
    alt: "Σκίτσο παιδιού που πιάνει μεγάλη μπάλα."
  },
  "fineMotor-0": {
    src: "assets/42mo-circle-examples.png",
    alt: "Παραδείγματα κύκλου που μετρά ως Ναι και σχημάτων που μετρούν ως Όχι ακόμα."
  },
  "fineMotor-1": {
    src: "assets/42mo-horizontal-line-examples.png",
    alt: "Παραδείγματα οριζόντιας γραμμής που μετρά ως Ναι και γραμμών που μετρούν ως Όχι ακόμα."
  },
  "fineMotor-2": {
    src: "assets/42mo-scissors.png",
    alt: "Σκίτσο παιδιού που χρησιμοποιεί παιδικό ψαλίδι ασφαλείας."
  },
  "fineMotor-3": {
    src: "assets/42mo-pencil-grip.png",
    alt: "Σκίτσο χεριού που κρατά μολύβι με δάχτυλα και αντίχειρα."
  },
  "problemSolving-0": {
    src: "assets/42mo-person-figure.png",
    alt: "Σκίτσο ανθρώπινης φιγούρας."
  },
  "problemSolving-2": {
    src: "assets/42mo-bridge-blocks.png",
    alt: "Σκίτσο γέφυρας από τρία τουβλάκια."
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
    questionnaire: "ASQ-3 Ερωτηματολόγιο 42 μηνών",
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
