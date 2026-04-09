console.log("Frontend connected!");

const videoInput = document.getElementById("videoInput");
const generateBtn = document.querySelector("button");

generateBtn.addEventListener("click", () => {
    if (!videoInput.files.length) {
        alert("Please upload a video first!");
        return;
    }

    alert("Processing started... (backend coming soon)");
});
