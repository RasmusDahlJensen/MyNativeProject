import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	TextInput,
	Pressable,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const arrData = [
	{
		id: 1,
		title: "item 1",
	},
	{
		id: 2,
		title: "item 2",
	},
	{
		id: 3,
		title: "item 3",
	},
];

const ListItem = (props) => {
	return (
		<View style={styles.listItem}>
			<Text style={styles.listText}>{props.title}</Text>
		</View>
	);
};

export default function App() {
	const [taskList, setTaskList] = useState([]);

	const addTaskHandler = (data) => {
		// console.log(data);
		setTaskList((curTasks) => [
			...curTasks,
			{ text: data, id: Math.random().toString() },
		]);
	};

	return (
		<View style={styles.container}>
			{/* <StatusBar
				barStyle="default"
				hidden={false}
				backgroundColor="darkcyan"
				translucent={true}
			/> */}
			<View style={styles.header}>
				<Text style={styles.headline}>TodoList</Text>
				<Image
					style={styles.logo}
					source={require("./assets/favicon.png")}
				></Image>
			</View>
			<View style={styles.formContainer}>
				<TextInput
					style={styles.input}
					placeholder="Placeholder"
					keyboardType="text"
				/>
				<Pressable onPress={addTaskHandler} style={styles.pressable}>
					<Text style={styles.pressableText}>+</Text>
				</Pressable>
			</View>
			<View style={styles.main}>
				<FlatList
					data={arrData}
					renderItem={(itemData) => {
						return <ListItem title={itemData.item.title}></ListItem>;
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
	},
});
