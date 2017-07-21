import { StatusBar } from 'react-native'


const FacebookBlue = `#4569b2`
const FacebookBlueLite = `#3B5998`

export default {
    container: {
        // paddingTop: 20
    },
    title: {
      fontSize: 22,
      marginBottom: 20
    },
    button: {
      backgroundColor: FacebookBlue,
      color: '#FFFFFF'
    },
    FacebookBlue : FacebookBlue,
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20
    },
    header: {
      backgroundColor: FacebookBlue,
      marginTop: StatusBar.currentHeight
    },
    headerTitle: {
      color: '#FFF'
    }
}