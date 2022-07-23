import { Dimensions } from "react-native"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const Layout = {
  window: {
    width,
    height,
  },
}
export default Layout