import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonLess,
    buttonDarkMode,
    buttonLightMode,
    buttonSoundOne,
    buttonOneSlider,
    buttonSoundTwo,
    buttonTwoSlider,
    buttonSoundThree,
    buttonThreeSlider,
    buttonSoundFour,
    buttonFourSlider,
} from "./elements.js"

export default function Events({
    controls,
    timer,
    sound,
}) {
    buttonPlay.addEventListener("click", () => {
        controls.play()
        timer.countdown()
        sound.pressButton()
    })

    buttonPause.addEventListener("click", () => {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })

    buttonStop.addEventListener("click", () => {
        let newMinutes = controls.getMinutes()

        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)

        timer.hold()
        controls.reset()
        timer.reset()
        sound.pressButton()
    })

    buttonPlus.addEventListener("click", () => {
        let newMinutes = controls.getMinutes()
        timer.addMoreTime(newMinutes)
    })

    buttonLess.addEventListener("click", () => {
        let newMinutes = controls.getMinutes()
        timer.slowDown(newMinutes)
    })

    buttonDarkMode.addEventListener("click", () => {
        controls.darkMode()
    })

    buttonLightMode.addEventListener("click", () => {
        controls.lightMode()
    })

    buttonSoundOne.addEventListener("click", () => {
        controls.activeSoundOne()
        sound.volumeOff(buttonTwoSlider, buttonThreeSlider, buttonFourSlider)
        sound.florestOn()
    })

    buttonOneSlider.addEventListener("change", () => {
        let volume = sound.volumeOnClick(buttonOneSlider)
        sound.florestOn(volume)
    })

    buttonSoundTwo.addEventListener("click", () => {
        controls.activeSoundTwo()
        sound.volumeOnClick(buttonTwoSlider)
        sound.volumeOff(buttonOneSlider, buttonThreeSlider, buttonFourSlider)
        sound.rainOn()
    })

    buttonSoundThree.addEventListener("click", () => {
        controls.activeSoundThree()
        sound.volumeOnClick(buttonThreeSlider)
        sound.volumeOff(buttonOneSlider, buttonTwoSlider, buttonFourSlider)
        sound.marketOn()
    })
    
    buttonSoundFour.addEventListener("click", () => {
        controls.activeSoundFour()
        sound.volumeOnClick(buttonFourSlider)
        sound.volumeOff(buttonOneSlider, buttonTwoSlider, buttonThreeSlider)
        sound.fireOn()
    })

    return {
        buttonPlay,
        buttonPause,
        buttonStop,
        buttonPlus,
        buttonLess,
        buttonSoundOne,
        buttonSoundTwo,
        buttonSoundThree,
        buttonSoundFour,
    }
}