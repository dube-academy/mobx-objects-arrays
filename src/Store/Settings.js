import { makeAutoObservable } from 'mobx'
const timeFormats = ['HH:mm:ss', 'hh:mm a']

class Settings {
  timeFormat = timeFormats[0]

  constructor() {
    makeAutoObservable(this)
  }

  toggleFormat = () => {
    if (this.timeFormat.toString() === timeFormats[0]) this.timeFormat = timeFormats[1]
    else if (this.timeFormat.toString() === timeFormats[1]) this.timeFormat = timeFormats[0]
  }
}

export default new Settings()
