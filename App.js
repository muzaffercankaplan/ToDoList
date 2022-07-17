import React, {useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import { styles } from "./styles";

const App = () => {
  const [text, setText] = useState("");

  const [task, setTask] = useState([]);

  const handleAddTask = () => {
    setTask([...task, text]);
    setText("");
  };

  const handleDeleteText = (index) => {
    const tasks = [...task];
    tasks.splice(index, 1);
    setTask(tasks);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.taskcontainer}>
      <Text style={styles.text}>{item}</Text>
      <TouchableOpacity
        onPress={() => handleDeleteText(index)}
        style={styles.deletecontainer}
      >
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );

  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>Task</Text>
        <TextInput
          style={styles.input}
          placeholder="Add Task"
          value={text}
          onChangeText={setText}
          autoFocus={false}
        />
        <TouchableOpacity
          onPress={() => handleAddTask()}
          disabled={text === "" ? true : false}
          style={text === "" ? styles.disableButton : styles.addContainer}
        >
          <Text styles={styles.addTask}>Add Task</Text>
        </TouchableOpacity>

        {/* <View style={styles.addContainer}>
        <Button 
        title="Add Task"
        onPress={() => handleAddTask()}
        disabled={text === '' ? true : false }
        />
        </View> */}

        <View style={styles.divider} />

        <FlatList
          data={task}
          renderItem={renderItem}
          keyExtractor={(_, index) => `item_${index}`}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
