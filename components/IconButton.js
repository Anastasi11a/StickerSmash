import { StyleSheet, Text, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const IconButton = ({ icon, label, onPress }) => {
    return (
        <Pressable style={styles.iconBtn} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color='#fff' />
            <Text style={styles.iconBtnLabel}>{label}</Text>
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({
    iconBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBtnLabel: {
        color: '#f4a460',
        marginTop: 12,
    }
})