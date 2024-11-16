import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#131016",
		padding: 24,
	},
	eventName: {
		color: "#fdfcfe",
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 48,
	},
	eventDate: {
		color: "#6b6b6b",
		fontSize: 16,
	},
	input: {
		height: 56,
		backgroundColor: "#1f1e25",
		borderRadius: 5,
		color: "#fff",
		padding: 16,
		flex: 1,
		marginRight: 10,
		fontSize: 16,
	},
	buttonText: {
		color: "#fff",
		fontSize: 24,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#31cf67",
		justifyContent: "center",
		alignItems: "center",
	},
	form: {
		marginTop: 30,
		marginBottom: 40,
		width: "100%",
		flexDirection: "row",
	},
	emptyList: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	emptyListText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#FFF",
		textAlign: "center",
	},
});
