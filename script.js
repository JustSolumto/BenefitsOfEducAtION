  

function enlargeImage(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modalImg.src = img.src;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.getElementById("albertBtn");
  const heading = document.getElementById("AlbertHeading");
  if (showMoreBtn && heading) {
    showMoreBtn.addEventListener("click", function () {
      heading.textContent = "Albert Einstein failed his entrance exam to the Swiss Federal Polytechnic in Zurich and was considered a slow learner as a child. But look at him now!";
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {

  // Emma Watson
  const emmaBtn = document.getElementById("emmaBtn");
  const emmaHeading = document.getElementById("emmaHeading");
  if (emmaBtn && emmaHeading) {
    emmaBtn.addEventListener("click", function () {
      emmaHeading.textContent = "She was only 9 when she started advocating for education!";
    });
  }

  // Natalie Portman
  const natalieBtn = document.getElementById("natalieBtn");
  const natalieHeading = document.getElementById("natalieHeading");
  if (natalieBtn && natalieHeading) {
    natalieBtn.addEventListener("click", function () {
      natalieHeading.textContent = "She graduated from Harvard while acting in Star Wars!";
    });
  }

  // James Franco
  const francoBtn = document.getElementById("francoBtn");
  const francoHeading = document.getElementById("francoHeading");
  if (francoBtn && francoHeading) {
    francoBtn.addEventListener("click", function () {
      francoHeading.textContent = "According to Yahoo, James franco admitted he was arrested for shoplifting cologne in junior high and reselling it with friends at school.";
    });
  }

});

// Mini game: Guess the celebrity's degree as part of the website and project brief
document.addEventListener("DOMContentLoaded", function () {
  const quizData = [
    {
      question: "What did Natalie Portman study?",
      options: ["Drama", "Law", "Psychology", "Physics"],
      answer: "Psychology"
    },
    {
      question: "What field did Albert Einstein revolutionize?",
      options: ["Biology", "Physics", "Mathematics", "Engineering"],
      answer: "Physics"
    },
    {
      question: "What did Emma Watson study at university?",
      options: ["Philosophy", "English Literature", "Acting", "History"],
      answer: "English Literature"
    },
    {
      question: "Which subject did James Franco pursue?",
      options: ["Filmmaking", "Biology", "Computer Science", "Mathematics"],
      answer: "Filmmaking"
    },
    {
      question: "Bonus question!: Which celebrity out of the four is my favourite?",
      options: ["Natalie Portman", "Emma Watson", "James Franco", "Albert Einstein"],
      answer: "James Franco, (obviously because of spiderman duhhh.)"
    }
  ];

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  let currentQuestion = 0;
  let quizOver = false;

  window.loadQuestion = function () {
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    const resultEl = document.getElementById("result");
    const nextBtn = document.querySelector("#quiz-container button[onclick*='loadQuestion']");

    if (currentQuestion >= quizData.length) {
      quizOver = true;
      questionEl.textContent = "Quiz Complete! 🎉";
      answersEl.innerHTML = "";
      resultEl.textContent = "Thanks for playing!";
      if (nextBtn) {
        nextBtn.style.display = "none";
      }
      return;
    }

    const q = quizData[currentQuestion];
    const shuffledOptions = shuffle([...q.options]);

    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    resultEl.textContent = "";

    shuffledOptions.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = function () {
        // Accept both 'James Franco' and 'James Franco, (obviously because of spiderman duhhh.)' as correct
        if (
          option === q.answer ||
          (q.question.includes('favourite') && option === 'James Franco' && q.answer.startsWith('James Franco'))
        ) {
          resultEl.textContent = "✅ Correct!";
        } else {
          resultEl.textContent = "❌ Wrong! The correct answer is: " + q.answer;
        }
        // Enable next button after answering
        if (nextBtn) nextBtn.disabled = false;
      };
      answersEl.appendChild(btn);
    });
    // Disable next button until an answer is chosen
    if (nextBtn) nextBtn.disabled = true;
  };

  // Next button handler
  const nextBtn = document.querySelector("#quiz-container button[onclick*='loadQuestion']");
  if (nextBtn) {
    nextBtn.onclick = function () {
      if (!quizOver) {
        currentQuestion++;
        window.loadQuestion();
      }
    };
  }

  window.loadQuestion();
});

