import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  chipActive: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
  chipText: {
    color: '#007AFF',
  },
  chipTextActive: {
    color: '#ffffff',
  },
  button: {
    padding: 10,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    marginBottom: 15,
  },
  smallButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#007AFF',
  },
  deleteButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: 'red',
  },
  buttons: {
    flexDirection: 'row',
    gap: 5,
  },
  textWhite: {
    color: '#ffffff',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 15,
    borderBottomWidth: 1,
  },
  taskInfo: {
    flex: 1,
  },
  taskText: {
    fontSize: 18,
  },
  taskDone: {
    fontSize: 18,
    color: 'gray',
  },
  subText: {
    fontSize: 14,
    color: 'gray',
  },
});