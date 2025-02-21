function startGame() {
    const difficultyLevels = {
        facile: { attempts: 10, range: 10 },
        intermédiaire: { attempts: 7, range: 50 },
        difficile: { attempts: 5, range: 100 }
    };

    let difficulty = prompt("Choisissez un niveau de difficulté: facile, intermédiaire, difficile").toLowerCase();
    while (!difficultyLevels[difficulty]) {
        difficulty = prompt("Niveau invalide. Choisissez un niveau de difficulté: facile, intermédiaire, difficile").toLowerCase();
    }

    const { attempts, range } = difficultyLevels[difficulty];
    const randomNumber = Math.floor(Math.random() * range) + 1;
    let userGuess;
    let attemptsLeft = attempts;

    while (attemptsLeft > 0) {
        userGuess = parseInt(prompt(`Devinez le chiffre (entre 1 et ${range}). Il vous reste ${attemptsLeft} tentatives:`), 10);
        if (userGuess === randomNumber) {
            alert("Félicitations! Vous avez trouvé le chiffre caché.");
            break;
        } else if (userGuess < randomNumber) {
            alert("Le chiffre est plus grand.");
        } else {
            alert("Le chiffre est plus petit.");
        }
        attemptsLeft--;
    }

    if (attemptsLeft === 0) {
        alert(`Désolé, vous avez épuisé toutes vos tentatives. Le chiffre était ${randomNumber}.`);
    }

    if (confirm("Voulez-vous rejouer?")) {
        startGame();
    }
}

startGame();