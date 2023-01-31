// import Toast from 'react-native-root-toast'
import { Alert } from 'react-native'

const deepClone = (val) => {
  return JSON.parse(JSON.stringify(val))
}

const showToast = (message) => {
  Alert.alert(message)
  // Toast.show(message, {
  //   duration: Toast.durations.SHORT,
  //   position: Toast.positions.BOTTOM,
  //   shadow: true,
  //   animation: true,
  //   hideOnPress: true,
  //   textStyle: { fontSize: Responsive.moderateScale(15) },
  //   backgroundColor: global.Color?.blackDM1 || 'transparent',
  //   textColor: global.Color?.whiteDM1 || Color.whiteDM1
  // })
}

const isValid = (value, regEx = false) => {
  if (regEx) return !value.trim() || !regEx.test(value.trim())
  return value === null || value === undefined || !value.trim()
}
const Utility = {
  deepClone,
  isValid,
  showToast
}

export default Utility
