import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 6,
  },
  addContainer: {
    marginVertical: 12,
    alignSelf: "flex-end",
    backgroundColor: `#3AB4F2`,
    height: 40,
    width: 100, 
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    color: 'white'
  },

  disableButton: {
    marginVertical: 12,
    alignSelf: "flex-end",
    backgroundColor: `gray`,
    height: 40,
    width: 100, 
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    color: 'white'
  },

  addTask: {
    fontSize: 32,
    color: 'white'
  },
  divider: {
      borderWidth: 0.5,
  },
  taskcontainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      alignItems: "center"
  },
text: {
    fontSize: 18,
},
deletecontainer: {
    backgroundColor: '#3AB4F2',
    borderRadius: 20,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
},
delete: {
    fontSize: 16,
},
});
