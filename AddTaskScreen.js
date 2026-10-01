import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './globalStyles';

export default function AddTaskScreen({ route, navigation }) {
  const { tasks, setTasks, nextId, setNextId, editing } = route.params;

  const [title, setTitle] = useState(editing ? editing.title : '');
  const [deadline, setDeadline] = useState(editing ? editing.deadline : '');

  // CREATE + UPDATE
  const saveTask = () => {
    if (title !== '') {
      if (deadline !== '') {
        // Subject = last word of the title
        const words = title.split(' ');
let subject = '';
for (let i = 0; i < words.length; i++) {
  if (words[i] !== '') {
    subject = words[i];
  }
}
        let others = tasks;
        let id = `${nextId}`;
        let done = false;

        if (editing) {
          others = tasks.filter((t) => t.id !== editing.id);
          id = editing.id;
          done = editing.done;
        } else {
          setNextId(nextId + 1);
        }

        const newTask = {
          id: id,
          title: title,
          subject: subject,
          deadline: deadline,
          done: done,
        };

        // Insert by deadline so the list stays sorted
        const before = others.filter((t) => t.deadline <= deadline);
        const after = others.filter((t) => t.deadline > deadline);

        setTasks([...before, newTask, ...after]);
        navigation.goBack();
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task (e.g. Exam in Cs303)"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Deadline (YYYY-MM-DD)"
        value={deadline}
        onChangeText={(text) => setDeadline(text)}
      />

      <TouchableOpacity style={styles.button} onPress={saveTask}>
        <Text style={styles.textWhite}>{editing ? 'Save Changes' : 'Add Task'}</Text>
      </TouchableOpacity>
    </View>
  );
}