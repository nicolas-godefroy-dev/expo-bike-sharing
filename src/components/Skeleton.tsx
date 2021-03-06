import React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"

import useTheme from "@hooks/useTheme"
import borderRadius from "@theme/borderRadius"

export type SkeletonProps = {
  style?: StyleProp<ViewStyle>
}

const Skeleton = ({ style }: SkeletonProps) => {
  const { colors, shadows } = useTheme()

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.surface[100] },
        shadows["none"],
        style,
      ]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    height: 12,
    width: 12,
    borderRadius: borderRadius["base"],
  },
})

export default Skeleton
