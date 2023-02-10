export default function () {
    const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const background = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

    const florest = new Audio('../assets/sounds/forest-ambience.mp3')
    const rain = new Audio('../assets/sounds/rain.mp3')
    const market = new Audio('../assets/sounds/shopping-center.mp3')
    const fire = new Audio('../assets/sounds/fire.mp3')

    background.loop = true
    buttonPress.volume = 0.3

    florest.loop = true
    rain.loop = true
    market.loop = true
    fire.loop = true

    function pressButton() {
        buttonPress.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function backgroundStart() {
        background.play()
    }

    function backgroundStop() {
        background.pause()
    }

    function volumeOff(sliderOne, sliderTwo, sliderThree) {
        sliderOne.value = 0
        sliderTwo.value = 0
        sliderThree.value = 0
    }

    function volumeOnClick(slider) {
        var newVolume = (Number(slider.value) / 1000) * 10

        console.log(slider.value)
        console.log(newVolume)
        return newVolume
    }

    function florestOn(volumeX) {
        if (!volumeX === undefined) {
            volumeX = 0.5
        }
        console.log(volumeX)

        florest.play()
        florest.volume = volumeX
        rain.pause()
        market.pause()
        fire.pause()
    }

    function rainOn() {
        florest.pause()
        rain.play()
        rain.volume = newVolume
        market.pause()
        fire.pause()
    }

    function marketOn() {
        florest.pause()
        rain.pause()
        market.play()
        market.volume = newVolume
        fire.pause()
    }

    function fireOn() {
        florest.pause()
        rain.pause()
        market.pause()
        fire.play()
        fire.volume = newVolume
    }

    return {
        pressButton,
        timeEnd,
        backgroundStart,
        backgroundStop,
        volumeOff,
        volumeOnClick,
        florestOn,
        rainOn,
        fireOn,
        marketOn,
    }
}