document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded.');
    const changeTextButton = document.getElementById('changeTextButton');
    const displayText = document.getElementById('displayText');

    if (changeTextButton && displayText) {
        changeTextButton.addEventListener('click', function () {
            displayText.textContent = 'Text Changed!';
        });
    }
});
