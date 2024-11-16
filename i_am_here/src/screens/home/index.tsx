import {
	Alert,
	FlatList,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

import { Participant } from "../../components/Participant";

import styles from "./styles";
import { useState } from "react";

interface TypeParticipant {
	name: string;
	id: number;
}

export function Home() {
	const [participants, setParticipants] = useState<TypeParticipant[]>([]);
	const [newParticipant, setNewParticipant] = useState<string>("");

	function handleParticipantAdd(name: string) {
		setParticipants([
			...participants,
			{
				name,
				id:
					participants.length > 0
						? participants[participants.length - 1].id + 1
						: 0,
			},
		]);
		setNewParticipant(" ");
	}

	function handleParticipantRemove(part: TypeParticipant) {
		Alert.alert("Remover", `Deseja remover o participante ${part.name} ?`, [
			{
				text: "Sim",
				onPress: () => {
					setParticipants(
						participants.filter((participant) => participant.id !== part.id),
					);
					Alert.alert("Deletado!");
				},
			},
			{
				text: "Não",
				style: "cancel",
			},
		]);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do Evento</Text>
			<Text style={styles.eventDate}>Sexta, 4 de novembro de 2024</Text>

			<View style={styles.form}>
				<TextInput
					value={newParticipant}
					onChangeText={setNewParticipant}
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor={"#6b6b6b"}
				/>

				<TouchableOpacity
					style={styles.button}
					onPress={() => handleParticipantAdd(newParticipant)}
				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			{/* <ScrollView showsVerticalScrollIndicator={false}>
				{participants.map((participant) => (
					<Participant
						key={participant.id}
						name={participant.name}
						onRemove={() => handleParticipantRemove(participant.name)}
					/>
				))}
			</ScrollView> */}

			<FlatList
				data={participants}
				keyExtractor={(participant) => participant.id.toString()}
				renderItem={({ item }) => {
					return (
						<Participant
							key={item.id}
							name={item.name}
							onRemove={() => handleParticipantRemove(item)}
						/>
					);
				}}
				ListEmptyComponent={() => (
					<View style={styles.emptyList}>
						<Text style={styles.emptyListText}>
							Nenhum Participante cadastrado ainda
						</Text>
					</View>
				)}
			/>
		</View>
	);
}
