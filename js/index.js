import Events from "./events.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"

const controls = Controls()

const timer = Timer({
    resetControls: controls.reset
})

const sound = Sounds()

const events = Events({
    controls,
    timer,
    sound,
})