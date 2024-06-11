    function highlight() {
    // Select all <strong> elements and change their color to green
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'green';
    });
}

function return_normal() {
    // Select all <strong> elements and revert their color to black
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'black';
    });
}

// Attach event listeners to the link
const link = document.getElementById('bold-high');
link.addEventListener('mouseover', highlight);
link.addEventListener('mouseout', return_normal);


}



