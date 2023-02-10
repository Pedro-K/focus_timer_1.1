import {
    buttonPlay,
    buttonPause,
    buttonDarkMode,
    buttonLightMode,
    buttonSoundOne,
    buttonSoundTwo,
    buttonSoundThree,
    buttonSoundFour,
    bodyMode,
    minutesDisplay,
} from "./elements.js"

export default function Controls() {

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    }

    function pause() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function getMinutes() {
        let newMinutes = minutesDisplay.textContent

        return newMinutes
    }

    function darkMode() {
        buttonDarkMode.classList.add('hide')
        buttonLightMode.classList.remove('hide')
        bodyMode.classList.add('light')
    }

    function lightMode() {
        buttonDarkMode.classList.remove('hide')
        buttonLightMode.classList.add('hide')
        bodyMode.classList.remove('light')
    }

    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function activeSoundOne() {
        buttonSoundOne.classList.add('active')
        buttonSoundTwo.classList.remove('active')
        buttonSoundThree.classList.remove('active')
        buttonSoundFour.classList.remove('active')
    }

    function activeSoundTwo() {
        buttonSoundOne.classList.remove('active')
        buttonSoundTwo.classList.add('active')
        buttonSoundThree.classList.remove('active')
        buttonSoundFour.classList.remove('active')
    }

    function activeSoundThree() {
        buttonSoundOne.classList.remove('active')
        buttonSoundTwo.classList.remove('active')
        buttonSoundThree.classList.add('active')
        buttonSoundFour.classList.remove('active')
    }

    function activeSoundFour() {
        buttonSoundOne.classList.remove('active')
        buttonSoundTwo.classList.remove('active')
        buttonSoundThree.classList.remove('active')
        buttonSoundFour.classList.add('active')
    }

    return {
        play,
        pause,
        getMinutes,
        darkMode,
        lightMode,
        reset,
        activeSoundOne,
        activeSoundTwo,
        activeSoundThree,
        activeSoundFour,
    }
}