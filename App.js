import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	TextInput,
	Pressable,
	Button,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const ListItem = (props) => {
	return (
		<View style={styles.listItem}>
			<Text style={styles.listText}>{props.title}</Text>
		</View>
	);
};

export default function App() {
	const [enteredTaskText, setEnteredTaskText] = useState();
	const [taskList, setTaskList] = useState([]);

	const taskTextHandler = (enteredTaskText) => {
		setEnteredTaskText(enteredTaskText);
	};

	const taskHandler = () => {
		setTaskList((curTasks) => [
			...curTasks,
			{ id: Math.random().toString(), title: enteredTaskText },
		]);
		setEnteredTaskText("");
	};

	const deleteTaskHandler = (id) => {
		setTaskList(taskList.filter((task) => task.id !== id));
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headline}>ToDoList</Text>
				<Image
					source={require("./assets/favicon.png")}
					style={styles.logo}
				></Image>
			</View>
			<View style={styles.main}>
				<View style={styles.formContainer}>
					<TextInput
						placeholder="Indtast"
						style={styles.input}
						onChangeText={taskTextHandler}
						value={enteredTaskText}
					></TextInput>
					<Pressable style={styles.pressable} onPress={taskHandler}>
						<Text style={styles.pressableText}>+</Text>
					</Pressable>
				</View>
				<FlatList
					data={taskList}
					renderItem={(itemData) => {
						return (
							<Pressable onPress={(e) => deleteTaskHandler(itemData.item.id)}>
								<ListItem title={itemData.item.title}></ListItem>
							</Pressable>
						);
					}}
				></FlatList>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 0,
		paddingVertical: 0,
		borderWidth: 5,
		borderColor: "black",
	},
	header: {
		backgroundColor: "darkcyan",
		paddingTop: 40,
		paddingHorizontal: 20,
		paddingBottom: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headline: {
		fontSize: 25,
		color: "black",
		fontWeight: "bold",
	},
	logo: {
		width: 50,
		height: 50,
	},
	main: {
		height: 500,
		padding: 20,
	},
	listItem: {
		borderWidth: 1,
		borderColor: "black",
		paddingHorizontal: 8,
		paddingVertical: 15,
		marginBottom: 5,
		backgroundColor: "teal",
		borderRadius: 5,
	},
	listText: {
		color: "white",
		fontWeight: "500",
	},
	input: {
		height: 40,
		width: "75%",
		margin: 10,
		borderWidth: 1,
		padding: 5,
		borderRadius: 10,
		marginLeft: 20,
	},
	pressable: {
		backgroundColor: "orange",
		height: 40,
		width: 40,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	pressableText: {
		fontSize: 30,
		fontWeight: 300,
	},
	formContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderBottomWidth: 0.6,
		paddingBottom: 20,
		paddingTop: 20,
		marginBottom: 10,
	},
});
