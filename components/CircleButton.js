import { StyleSheet, Pressable, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const CircleButton = ({ onPress }) => {
    return (
        <View style={styles.circleBtnContainer}>
            <Pressable style={styles.circleBtn} onPress={onPress}>
                <MaterialIcons 
                    name='add' 
                    size={38}
                    color='#2f4f4f'
                />
            </Pressable>
        </View>
    )
}

export default CircleButton

const styles = StyleSheet.create({
    circleBtnContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderRadius: 42,
        borderColor: '#f4a460',
        padding: 3,
    },
    circleBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff',
    }
})