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
    cutoff: 17.40,
    questions: [
      "Λέει το μωρό σας τρεις λέξεις, όπως «μαμά», «μπαμπά» και «μπάμπα»; Λέξη είναι ένας ήχος ή ήχοι που χρησιμοποιεί σταθερά για να σημαίνει κάποιον ή κάτι.",
      "Όταν θέλει κάτι, σας το δείχνει δείχνοντάς το με το δάχτυλο;",
      "Κουνάει το κεφάλι του όταν εννοεί «όχι» ή «ναι»;",
      "Δείχνει, χτυπά απαλά ή προσπαθεί να πιάσει εικόνες σε ένα βιβλίο;",
      "Λέει τέσσερις ή περισσότερες λέξεις εκτός από «μαμά» και «μπαμπά»;",
      "Όταν του το ζητήσετε, πηγαίνει σε άλλο δωμάτιο για να βρει ένα γνώριμο παιχνίδι ή αντικείμενο; Για παράδειγμα: «Πού είναι η μπάλα;», «Φέρε μου το παλτό σου» ή «Πήγαινε να πάρεις την κουβέρτα σου»."
    ]
  },
  {
    id: "grossMotor",
    title: "Αδρή κινητικότητα",
    cutoff: 25.80,
    questions: [
      "Αν κρατάτε και τα δύο του χέρια μόνο για ισορροπία, κάνει αρκετά βήματα χωρίς να σκοντάφτει ή να πέφτει; Αν ήδη περπατά μόνο του, σημειώστε «Ναι».",
      "Αν κρατάτε μόνο το ένα του χέρι για ισορροπία, κάνει αρκετά βήματα προς τα εμπρός; Αν ήδη περπατά μόνο του, σημειώστε «Ναι».",
      "Σηκώνεται μόνο του στη μέση του δαπέδου και κάνει αρκετά βήματα προς τα εμπρός;",
      "Σκαρφαλώνει σε έπιπλα ή άλλα μεγάλα αντικείμενα, όπως μεγάλα τουβλάκια αναρρίχησης;",
      "Σκύβει ή κάθεται οκλαδόν για να πάρει ένα αντικείμενο από το πάτωμα και μετά σηκώνεται ξανά χωρίς στήριξη;",
      "Μετακινείται περπατώντας, αντί να μπουσουλά στα χέρια και στα γόνατα;"
    ]
  },
  {
    id: "fineMotor",
    title: "Λεπτή κινητικότητα",
    cutoff: 23.06,
    questions: [
      "Χωρίς να ακουμπά το χέρι του στο τραπέζι, πιάνει ένα ψίχουλο ή μικρό δημητριακό με τις άκρες του αντίχειρα και ενός δαχτύλου;",
      "Πετάει μια μικρή μπάλα με κίνηση του χεριού προς τα εμπρός; Αν απλώς αφήνει την μπάλα να πέσει, σημειώστε «Όχι ακόμα».",
      "Βοηθά να γυρίσετε τις σελίδες ενός βιβλίου; Μπορείτε να σηκώσετε μια σελίδα για να την πιάσει.",
      "Τοποθετεί ένα μικρό τουβλάκι ή παιχνίδι πάνω σε ένα άλλο; Μπορείτε επίσης να χρησιμοποιήσετε μικρά κουτιά, κουβαρίστρες ή παιχνίδια περίπου 2,5 εκ.",
      "Κάνει σημάδι στο χαρτί με την άκρη μιας κηρομπογιάς, μολυβιού ή στυλό όταν προσπαθεί να ζωγραφίσει;",
      "Στοιβάζει μόνο του τρία μικρά τουβλάκια ή παιχνίδια το ένα πάνω στο άλλο;"
    ]
  },
  {
    id: "problemSolving",
    title: "Λύση προβλημάτων",
    cutoff: 22.56,
    note: "Αν η ερώτηση 2 σημειωθεί «Ναι» ή «Μερικές φορές», η ερώτηση 1 βαθμολογείται ως «Ναι».",
    questions: [
      "Αν βάλετε ένα μικρό παιχνίδι μέσα σε μπολ ή κουτί, σας μιμείται βάζοντας μέσα ένα παιχνίδι, ακόμα κι αν δεν το αφήνει; Αν ήδη αφήνει το παιχνίδι μέσα στο μπολ ή κουτί, σημειώστε «Ναι».",
      "Ρίχνει δύο μικρά παιχνίδια, το ένα μετά το άλλο, μέσα σε ένα δοχείο όπως μπολ ή κουτί; Μπορείτε να του δείξετε πώς να το κάνει.",
      "Αφού κάνετε γραμμές μπρος-πίσω σε χαρτί με κηρομπογιά, μολύβι ή στυλό, σας μιμείται μουτζουρώνοντας; Αν ήδη μουτζουρώνει μόνο του, σημειώστε «Ναι».",
      "Μπορεί να ρίξει ένα ψίχουλο ή μικρό δημητριακό μέσα σε ένα μικρό, διαφανές μπουκάλι, όπως πλαστικό μπουκάλι ή μπιμπερό;",
      "Ρίχνει αρκετά μικρά παιχνίδια, το ένα μετά το άλλο, μέσα σε ένα δοχείο όπως μπολ ή κουτί; Μπορείτε να του δείξετε πώς να το κάνει.",
      "Αφού του δείξετε πώς, προσπαθεί να φτάσει ένα μικρό παιχνίδι που είναι λίγο μακριά χρησιμοποιώντας κουτάλι, ραβδί ή παρόμοιο εργαλείο;"
    ]
  },
  {
    id: "personalSocial",
    title: "Κοινωνικότητα",
    cutoff: 23.18,
    questions: [
      "Όταν το ντύνετε, σηκώνει το πόδι του για το παπούτσι, την κάλτσα ή το μπατζάκι του παντελονιού;",
      "Κυλά ή πετάει μια μπάλα πίσω σε εσάς ώστε να του την επιστρέψετε;",
      "Παίζει με κούκλα ή λούτρινο ζωάκι αγκαλιάζοντάς το;",
      "Τρώει μόνο του με κουτάλι, ακόμα κι αν χύνει λίγο φαγητό;",
      "Βοηθά να γδυθεί βγάζοντας ρούχα όπως κάλτσες, καπέλο, παπούτσια ή γάντια;",
      "Τραβά την προσοχή σας ή προσπαθεί να σας δείξει κάτι τραβώντας το χέρι ή τα ρούχα σας;"
    ]
  }
];

const OVERALL = [
  { id: "equalMovement", text: "Χρησιμοποιεί εξίσου καλά τα δύο χέρια και τα δύο πόδια;", followUp: "no" },
  { id: "playsWithSounds", text: "Παίζει με ήχους ή φαίνεται να σχηματίζει λέξεις;", followUp: "no" },
  { id: "feetFlat", text: "Όταν στέκεται, τα πόδια του πατούν επίπεδα στην επιφάνεια την περισσότερη ώρα;", followUp: "no" },
  { id: "soundConcerns", text: "Ανησυχείτε επειδή το παιδί σας είναι πολύ ήσυχο ή δεν κάνει ήχους όπως τα άλλα παιδιά της ηλικίας του;", followUp: "yes" },
  { id: "familyHearingHistory", text: "Υπάρχουν προβλήματα ακοής σε κάποιον από τους γονείς;", followUp: "yes" },
  { id: "visionConcerns", text: "Υπάρχει κάτι που να σας ανησυχεί σχετικά με την όραση του παιδιού σας;", followUp: "yes" },
  { id: "medicalProblems", text: "Έχει το παιδί παρουσιάσει προβλήματα υγείας το προηγούμενο διάστημα;", followUp: "yes" },
  { id: "behaviorConcerns", text: "Έχετε ανησυχίες σχετικά με τη συμπεριφορά του παιδιού;", followUp: "yes" },
  { id: "otherConcerns", text: "Υπάρχει οτιδήποτε άλλο που σας ανησυχεί σχετικά με το παιδί σας;", followUp: "yes" }
];

const QUESTION_IMAGES = {
  "grossMotor-0": {
    src: "assets/14mo-two-hand-steps.png",
    alt: "Σκίτσο βρέφους που περπατά με στήριξη από τα δύο χέρια."
  },
  "grossMotor-1": {
    src: "assets/14mo-one-hand-steps.png",
    alt: "Σκίτσο βρέφους που περπατά με στήριξη από το ένα χέρι."
  },
  "fineMotor-0": {
    src: "assets/14mo-pincer-no-rest.png",
    alt: "Σκίτσο χεριού που πιάνει μικρό αντικείμενο χωρίς να ακουμπά στο τραπέζι."
  },
  "fineMotor-1": {
    src: "assets/14mo-throw-ball.png",
    alt: "Σκίτσο παιδιού που πετά μικρή μπάλα."
  },
  "fineMotor-4": {
    src: "assets/14mo-crayon-mark.png",
    alt: "Σκίτσο χεριού που κάνει σημάδι με κηρομπογιά."
  },
  "problemSolving-1": {
    src: "assets/14mo-drop-container.png",
    alt: "Σκίτσο χεριού που ρίχνει παιχνίδι σε κουτί."
  },
  "problemSolving-5": {
    src: "assets/14mo-tool-reach.png",
    alt: "Σκίτσο χεριού που χρησιμοποιεί εργαλείο για να φτάσει παιχνίδι."
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
    if (domain.id === "problemSolving" && index === 0) {
      const item2 = getAnswer("problemSolving-1");
      if (item2 === "yes" || item2 === "sometimes") {
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
    questionnaire: "ASQ-3 Ερωτηματολόγιο 14 μηνών",
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
