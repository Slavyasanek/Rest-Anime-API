import { refs } from "../refs";

refs.themeSwitchTrack.addEventListener("click", () => {
    refs.themeSwitchBtn.classList.toggle('dark-theme');
    refs.themeSwitchTrack.classList.toggle('dark-theme');
})