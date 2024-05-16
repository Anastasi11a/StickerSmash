import { StyleSheet, Text, View, Pressable } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const Button = ({ label, theme, onPress }) => {
    if (theme === 'primary') {
        return (
            <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#f4a460', borderRadius: 18 }]}>
                <Pressable
                    style={[styles.button, { backgroundColor: '#fff' }]}
                    onPress={onPress}>
                        
                    <FontAwesome
                        name='picture-o'
                        size={18}
                        color='#2f4f4f'
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, { color: '#2f4f4f' }]}>
                        {label}
                    </Text>
                </Pressable>
            </View>
        )
    }
    
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={styles.button}
                onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#f4a460',
        fontSize: 16,
    },
})