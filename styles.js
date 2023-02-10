import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'lightblue',
        // alignItems: 'baseline',
        // flexDirection: "row",
        // justifyContent: 'space-between',
        // marginTop: 40,
        marginHorizontal: 16,
        marginVertical: 30,
    },
    title: {
        color: "red",
        fontSize: 30,
        // textAlign: "center",
    },
    subtitle: {
        color: "red",
        fontSize: 20,
        // textAlign: "center",
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#ddd",
        fontSize: 18,
        marginVertical: 15,
    },
    buttonContainer: {
        backgroundColor: 'lightblue',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 6,
        alignSelf: "flex-end",
        alignItems: "center",
        marginTop: 15,
        zIndex: -5,
    },
    buttonText: {
        fontSize: 18,
    },

    divider: {
        height: 0,
        backgroundColor: "#ddd",
        marginVertical: 65,
    },
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#ddd",
        paddingVertical: 12,
    },
    taskText: {
        fontSize: 18,
        textTransform: 'capitalize',
        flex: 1,
        flexWrap: "wrap",
        textAlign: "center",
    },
    taskDelete: {
        width: 23,
        height: 23,
        borderRadius: 13,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
    },
    taskDeleteText: {
        fontSize: 12,
    },
    actionsContainer: {
        flexDirection: "row",
    },
    taskEdit: {
        width: 23,
        height: 23,
        borderRadius: 13,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
    },
    taskEditText: {
        fontSize: 12,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        marginTop: 10,
        borderRadius: 10,
        padding: 15,
        zIndex: -5,
    },
    buttonEdit: {
        backgroundColor: '#2196F3',
    },
    buttonClose: {
        backgroundColor: '#ff0000',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});