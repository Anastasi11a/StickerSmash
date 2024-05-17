import { View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const EmojiSticker = ({ imageSize, stickerSource }) => {
    const scaleImg = useSharedValue(imageSize)
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImg.value !== imageSize * 2) {
                scaleImg.value = scaleImg.value * 2
            }
        }
    )

    const drag = Gesture.Pan()
        .onChange((e) => {
            translateX.value += e.changeX
            translateY.value += e.changeY
        }
    )

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value }
            ]
        }
    })

    const imgStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImg.value),
            height: withSpring(scaleImg.value)
        }
    })

    return (
        <GestureDetector gesture={drag}>
            <Animated.View style={[containerStyle, { top: -350 }]}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image
                        source={stickerSource}
                        resizeMode='contain'
                        style={[imgStyle, { width: imageSize, height: imageSize }]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    )
}

export default EmojiSticker
