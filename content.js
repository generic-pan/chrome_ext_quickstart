var port = chrome.runtime.connect({ name: "content-script" });

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.shiftKey && event.key === "S") {
    console.log("Ctrl+Shift+S pressed.");
    port.postMessage({ action: "keyboardShortcut" });
  }
});
