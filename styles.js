import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    defaultTextFieldStyle : {
        width : 45, 
        height : 45, 
        borderColor : 'rgba(226, 226, 226, 1)', 
        borderWidth : 1,
        borderRadius : 2, 
        textAlign : 'center',
        color: 'rgba(226, 226, 226, 1)', 
    },
    notEditableOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
    }
})