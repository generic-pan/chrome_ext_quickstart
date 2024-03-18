chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "clickLastButton") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: clickLastButton
    });
  }
});

function clickLastButton() {
  // Find the last button within the div with class and click it
  const divWithButtons = document.querySelector(CHOOSE_CLASS);
  if (divWithButtons) {
    const buttons = divWithButtons.querySelectorAll('button');
    const lastButton = buttons[buttons.length - 1];
    if (lastButton) {
      lastButton.click();
    }
  }
}
