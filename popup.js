document.getElementById('clickButton').addEventListener('click', () => {
  chrome.commands.executeCommand('clickLastButton');
});
