import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './globalStyles';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([
  { id: '1', title: 'Quiz in Cs302', subject: 'Cs302', deadline: '2026-10-05', done: false },
  { id: '2', title: 'Submission of MCO in Cs302', subject: 'Cs302', deadline: '2026-10-09', done: false },
  { id: '3', title: 'Exam in Cs303', subject: 'Cs303', deadline: '2026-10-15', done: false },
  { id: '4', title: 'Defense in Cs303', subject: 'Cs303', deadline: '2026-10-20', done: false },
]);
const [nextId, setNextId] = useState(5);
  const [filter, setFilter] = useState('All');

  // Open the form to add a new task
  const goAdd = () => {
    navigation.navigate('AddTask', {
      tasks: tasks,
      setTasks: setTasks,
      nextId: nextId,
      setNextId: setNextId,
      editing: null,
    });
  };

  // Open the form to edit a task
  const goEdit = (item) => {
    navigation.navigate('AddTask', {
      tasks: tasks,
      setTasks: setTasks,
      nextId: nextId,
      setNextId: setNextId,
      editing: item,
    });
  };

  // DELETE
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
    setFilter('All');
  };

  // Toggle completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, done: t.done ? false : true } : t))
    );
  };

  // Build the subject list from the tasks (no duplicates)
  let subjects = ['All'];
  for (let i = 0; i < tasks.length; i++) {
    let found = false;
    for (let j = 0; j < subjects.length; j++) {
      if (subjects[j] === tasks[i].subject) {
        found = true;
      }
    }
    if (found === false) {
      subjects = [...subjects, tasks[i].subject];
    }
  }

  // Categorize by subject
  const visibleTasks =
    filter === 'All' ? tasks : tasks.filter((t) => t.subject === filter);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goAdd}>
        <Text style={styles.textWhite}>+ Add Task</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Show:</Text>
      <View style={styles.row}>
        {subjects.map((s) => (
          <TouchableOpacity
            key={s}
            style={s === filter ? styles.chipActive : styles.chip}
            onPress={() => setFilter(s)}
          >
            <Text style={s === filter ? styles.chipTextActive : styles.chipText}>
              {s}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={visibleTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <TouchableOpacity style={styles.taskInfo} onPress={() => toggleTask(item.id)}>
              <Text style={item.done ? styles.taskDone : styles.taskText}>
                {item.done ? '✔ ' : '○ '}
                {item.title}
              </Text>
              <Text style={styles.subText}>{`${item.subject} • Due ${item.deadline}`}</Text>
            </TouchableOpacity>

            <View style={styles.buttons}>
              <TouchableOpacity style={styles.smallButton} onPress={() => goEdit(item)}>
                <Text style={styles.textWhite}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(item.id)}>
                <Text style={styles.textWhite}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}