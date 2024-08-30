
// Function de verification d'un annee bissextile 

function estBissextile(annee) {
    // Vérifie si l'année est divisible par 400 ou divisible par 4 mais pas par 100
    if ((annee % 400 === 0) || (annee % 4 === 0 && annee % 100 !== 0)) {
        return true;
    } else {
        return false;
    }
}

// Function Fibonacci 

function fibonacci(n) {
    // Cas de base : les deux premiers nombres de la suite
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        // Appel récursif : somme des deux nombres précédents
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


// Function Palindrome


function estPalindrome(chaine) {
    // Supprimer les espaces, la ponctuation et convertir en minuscules
    chaine = chaine.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Fonction récursive pour vérifier le palindrome
    function verifiePalindrome(chaine) {
        // Cas de base : si la chaîne est vide ou d'un seul caractère, c'est un palindrome
        if (chaine.length <= 1) {
            return true;
        }

        // Vérifier si le premier et le dernier caractère sont les mêmes
        if (chaine[0] === chaine[chaine.length - 1]) {
            // Appel récursif en enlevant le premier et le dernier caractère
            return verifiePalindrome(chaine.slice(1, -1));
        }

        // Si les caractères ne sont pas les mêmes, ce n'est pas un palindrome
        return false;
    }

    // Appeler la fonction récursive
    return verifiePalindrome(chaine);
}

// Exemple d'utilisation
let chaine = "A man, a plan, a canal, Panama";
if (estPalindrome(chaine)) {
    console.log("\"" + chaine + "\" est un palindrome.");
} else {
    console.log("\"" + chaine + "\" n'est pas un palindrome.");
}


