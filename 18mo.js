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
    cutoff: 13.06,
    questions: [
      "Όταν θέλει κάτι, σας το δείχνει δείχνοντάς το με το δάχτυλο;",
      "Όταν του το ζητήσετε, πηγαίνει σε άλλο δωμάτιο για να βρει ένα γνώριμο παιχνίδι ή αντικείμενο; Για παράδειγμα: «Πού είναι η μπάλα;», «Φέρε μου το παλτό σου» ή «Πήγαινε να πάρεις την κουβέρτα σου».",
      "Λέει οκτώ ή περισσότερες λέξεις εκτός από «μαμά» και «μπαμπά»;",
      "Μιμείται μια πρόταση δύο λέξεων; Για παράδειγμα, όταν λέτε «Μαμά φάε», «Μπαμπά παίξε», «Πήγαινε σπίτι» ή «Τι είναι αυτό;», επαναλαμβάνει και τις δύο λέξεις; Σημειώστε «Ναι» ακόμα κι αν οι λέξεις του είναι δύσκολο να κατανοηθούν.",
      "Χωρίς να του δείξετε, δείχνει τη σωστή εικόνα όταν λέτε «Δείξε μου τη γατούλα» ή ρωτάτε «Πού είναι ο σκύλος;» Αρκεί να αναγνωρίσει σωστά μία εικόνα.",
      "Λέει δύο ή τρεις λέξεις μαζί που εκφράζουν διαφορετικές ιδέες, όπως «Να σκύλος», «Μαμά έλα σπίτι» ή «Γατούλα έφυγε»; Μη μετράτε συνδυασμούς που εκφράζουν μία ιδέα, όπως «γεια σου», «τελείωσε», «εντάξει» ή «τι είναι αυτό;»"
    ]
  },
  {
    id: "grossMotor",
    title: "Αδρή κινητικότητα",
    cutoff: 37.38,
    questions: [
      "Σκύβει ή κάθεται οκλαδόν για να πάρει ένα αντικείμενο από το πάτωμα και μετά σηκώνεται ξανά χωρίς στήριξη;",
      "Μετακινείται περπατώντας, αντί να μπουσουλά στα χέρια και στα γόνατα;",
      "Περπατά καλά και σπάνια πέφτει;",
      "Σκαρφαλώνει πάνω σε αντικείμενο, όπως καρέκλα, για να φτάσει κάτι που θέλει, π.χ. ένα παιχνίδι στον πάγκο ή για να σας «βοηθήσει» στην κουζίνα;",
      "Κατεβαίνει σκάλες αν κρατάτε το ένα του χέρι; Μπορεί επίσης να κρατά το κάγκελο ή τον τοίχο. Μπορείτε να το παρατηρήσετε σε κατάστημα, παιδική χαρά ή στο σπίτι.",
      "Όταν του δείξετε πώς να κλωτσήσει μια μεγάλη μπάλα, προσπαθεί να την κλωτσήσει κινώντας το πόδι του προς τα εμπρός ή περπατώντας προς την μπάλα; Αν ήδη κλωτσά μπάλα, σημειώστε «Ναι»."
    ]
  },
  {
    id: "fineMotor",
    title: "Λεπτή κινητικότητα",
    cutoff: 34.32,
    questions: [
      "Πετάει μια μικρή μπάλα με κίνηση του χεριού προς τα εμπρός; Αν απλώς αφήνει την μπάλα να πέσει, σημειώστε «Όχι ακόμα».",
      "Τοποθετεί ένα μικρό τουβλάκι ή παιχνίδι πάνω σε ένα άλλο; Μπορείτε επίσης να χρησιμοποιήσετε μικρά κουτιά, κουβαρίστρες ή παιχνίδια περίπου 2,5 εκ.",
      "Κάνει σημάδι στο χαρτί με την άκρη μιας κηρομπογιάς, μολυβιού ή στυλό όταν προσπαθεί να ζωγραφίσει;",
      "Στοιβάζει μόνο του τρία μικρά τουβλάκια ή παιχνίδια το ένα πάνω στο άλλο;",
      "Γυρίζει μόνο του τις σελίδες ενός βιβλίου; Μπορεί να γυρίζει περισσότερες από μία σελίδες κάθε φορά.",
      "Βάζει ένα κουτάλι στο στόμα του με τη σωστή πλευρά προς τα πάνω, έτσι ώστε συνήθως να μη χύνεται το φαγητό;"
    ]
  },
  {
    id: "problemSolving",
    title: "Λύση προβλημάτων",
    cutoff: 25.74,
    note: "Αν η ερώτηση 6 σημειωθεί «Ναι» ή «Μερικές φορές», η ερώτηση 3 βαθμολογείται ως «Ναι».",
    questions: [
      "Ρίχνει αρκετά μικρά παιχνίδια, το ένα μετά το άλλο, μέσα σε ένα δοχείο όπως μπολ ή κουτί; Μπορείτε να του δείξετε πώς να το κάνει.",
      "Αφού του δείξετε πώς, προσπαθεί να φτάσει ένα μικρό παιχνίδι που είναι λίγο μακριά χρησιμοποιώντας κουτάλι, ραβδί ή παρόμοιο εργαλείο;",
      "Αφού ρίξετε ένα ψίχουλο ή μικρό δημητριακό σε ένα μικρό, διαφανές μπουκάλι, γυρίζει το μπουκάλι για να το αδειάσει; Μπορείτε να του δείξετε πώς. Μπορείτε να χρησιμοποιήσετε πλαστικό μπουκάλι ή μπιμπερό.",
      "Χωρίς να του δείξετε πώς, μουτζουρώνει μπρος-πίσω όταν του δίνετε κηρομπογιά, μολύβι ή στυλό;",
      "Αφού σας δει να τραβάτε μια γραμμή από την κορυφή προς το κάτω μέρος του χαρτιού με κηρομπογιά, μολύβι ή στυλό, σας αντιγράφει τραβώντας μία γραμμή στο χαρτί προς οποιαδήποτε κατεύθυνση; Σημειώστε «Όχι ακόμα» αν απλώς μουτζουρώνει μπρος-πίσω.",
      "Αφού ρίξετε ένα ψίχουλο ή μικρό δημητριακό σε ένα μικρό, διαφανές μπουκάλι, γυρίζει μόνο του το μπουκάλι ανάποδα για να βγάλει το ψίχουλο ή δημητριακό; Μην του δείξετε πώς."
    ]
  },
  {
    id: "personalSocial",
    title: "Κοινωνικότητα",
    cutoff: 27.19,
    questions: [
      "Κοιτάζοντας τον εαυτό του στον καθρέφτη, προσφέρει παιχνίδι στην εικόνα του;",
      "Παίζει με κούκλα ή λούτρινο ζωάκι αγκαλιάζοντάς το;",
      "Τραβά την προσοχή σας ή προσπαθεί να σας δείξει κάτι τραβώντας το χέρι ή τα ρούχα σας;",
      "Έρχεται σε εσάς όταν χρειάζεται βοήθεια, όπως για να κουρδίσει ένα παιχνίδι ή να ξεβιδώσει καπάκι από βάζο;",
      "Πίνει από φλιτζάνι ή ποτήρι και το ξαναβάζει κάτω με μικρή μόνο διαρροή;",
      "Αντιγράφει δραστηριότητες που κάνετε, όπως να σκουπίζει κάτι που χύθηκε, να σκουπίζει με σκούπα, να ξυρίζεται ή να χτενίζει τα μαλλιά;"
    ]
  }
];

const OVERALL = [
  { id: "hearsWell", text: "Πιστεύετε ότι το παιδί σας ακούει καλά;", followUp: "no" },
  { id: "talksLikePeers", text: "Πιστεύετε ότι μιλά όπως τα άλλα παιδιά της ηλικίας του;", followUp: "no" },
  { id: "understandSpeech", text: "Μπορείτε να καταλάβετε τα περισσότερα από αυτά που λέει;", followUp: "no" },
  { id: "movesLikePeers", text: "Πιστεύετε ότι περπατά, τρέχει και σκαρφαλώνει όπως τα άλλα παιδιά της ηλικίας του;", followUp: "no" },
  { id: "familyHearingHistory", text: "Υπάρχουν προβλήματα ακοής σε κάποιον από τους γονείς;", followUp: "yes" },
  { id: "visionConcerns", text: "Υπάρχει κάτι που να σας ανησυχεί σχετικά με την όραση του παιδιού σας;", followUp: "yes" },
  { id: "medicalProblems", text: "Έχει το παιδί παρουσιάσει προβλήματα υγείας το προηγούμενο διάστημα;", followUp: "yes" },
  { id: "behaviorConcerns", text: "Έχετε ανησυχίες σχετικά με τη συμπεριφορά του παιδιού;", followUp: "yes" },
  { id: "otherConcerns", text: "Υπάρχει οτιδήποτε άλλο που σας ανησυχεί σχετικά με το παιδί σας;", followUp: "yes" }
];

const QUESTION_IMAGES = {
  "grossMotor-5": {
    src: "assets/18mo-kick-ball.png",
    alt: "Σκίτσο παιδιού που προσπαθεί να κλωτσήσει μπάλα."
  },
  "fineMotor-0": {
    src: "assets/18mo-throw-ball.png",
    alt: "Σκίτσο παιδιού που πετά μικρή μπάλα."
  },
  "fineMotor-2": {
    src: "assets/18mo-crayon-mark.png",
    alt: "Σκίτσο χεριού που κάνει σημάδι με κηρομπογιά."
  },
  "problemSolving-1": {
    src: "assets/18mo-tool-reach.png",
    alt: "Σκίτσο χεριού που χρησιμοποιεί εργαλείο για να φτάσει παιχνίδι."
  },
  "problemSolving-4": {
    src: "assets/18mo-copy-line-examples.png",
    alt: "Παραδείγματα γραμμής που μετρά ως Ναι και μουτζούρας που μετρά ως Όχι ακόμα."
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
    if (domain.id === "problemSolving" && index === 2) {
      const item6 = getAnswer("problemSolving-5");
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
    questionnaire: "ASQ-3 Ερωτηματολόγιο 18 μηνών",
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
