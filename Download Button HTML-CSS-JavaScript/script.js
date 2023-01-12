const downloadBtn = document.querySelector(".download-btn");
// google drive's file link
const fileLink = "https://drive.google.com/uc?export=download&id=1tm8gjGXfFzcyQWf0XInU5j1m0AmsSlEb";

const initTimer = () => {
    //if downloadbtn contains disable-timer class then only if conditional code will run
    if (downloadBtn.classList.containe("disable-timer")){
        return location.href = fileLink;
    }

    //getting data-timer attribute from HTML
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    //replacing downloadBtn's html by following text
    downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`

    //creating initCounter variable with setInterval function
    const initCounter = setInterval(() => {
        if(timer > 0){
            timer--;
            return downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.textContent = "Your file is downloading...";

        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
            <span class="text">Download Again</span>`
        },3000)
    },1000) //1000 milliseconds = 1s
};


downloadBtn.addEventListener("click", initTimer)