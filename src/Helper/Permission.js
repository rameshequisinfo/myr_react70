import { Platform } from 'react-native'
// import { PERMISSIONS, request } from 'react-native-permissions'

// const getCameraPermission = () => {
//   return new Promise((resolve) => {
//     request(
//       Platform.select({
//         android: PERMISSIONS.ANDROID.CAMERA,
//         ios: PERMISSIONS.IOS.CAMERA
//       })
//     )
//       .then((response) => {
//         if (response === 'granted') {
//           resolve(true)
//         } else {
//           resolve(false)
//         }
//       })
//       .catch(() => resolve(false))
//   })
// }


const Permission = {
  // getCameraPermission,
}

export default Permission
