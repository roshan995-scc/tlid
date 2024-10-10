function readStory(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

// Adding event listeners to read buttons
document.querySelectorAll('.read-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const textToRead = btn.previousElementSibling.textContent;
        readStory(textToRead);
    });
});
