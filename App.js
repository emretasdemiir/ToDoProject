import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, SafeAreaView, TouchableOpacity, FlatList, Modal, Pressable } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { appStyles as styles } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  // ALL GLOBAL STATES
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([])
  const [tasksToStore, setTasksToStore] = useState([])
  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'High', value: 'high' },
    { label: 'Medium', value: 'medium' },
    { label: 'Low', value: 'low' }
  ]);
  const [showButton, setShowButton] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editText, setEditText] = useState("");
  const [editOpen, setEditOpen] = useState("");
  const [editUrgency, setEditUrgency] = useState("");
  const [editItemIndex, setEditItemIndex] = useState();


  const storeData = async () => {
    try {
      tasksToStore.push({ text: text, urgency: selectValue })
      const jsonValue = JSON.stringify(tasksToStore)
      await AsyncStorage.setItem('tasks', jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('tasks')
      const output = jsonValue != null ? JSON.parse(jsonValue) : null;
      setTasks(output)
    } catch (e) {
      console.log(e)
    }
  }

  const handleAddTaskOnPress = () => {
    if (text !== "" && selectValue) {
      setTasks([...tasks, { text: text, urgency: selectValue }])

      storeData()

      setText("")
      setSelectValue(null)
    }
  }

  const handleDeleteTaskOnPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks)
  }

  const handleEditTaskOnPress = (item, index) => {
    setModalVisible(true)
    setEditText(item.text)
    setEditUrgency(item.urgency)
    setEditItemIndex(index)
  }

  const handleSaveEdit = () => {
    tasks[editItemIndex] = { text: editText, urgency: editUrgency }

    setEditText("")
    setEditUrgency("")
    setModalVisible(false)
  }

  useEffect(() => {
    async function myFunction() {
      await getData()
    }

    myFunction()
  }, [])

  useEffect(() => {
    if (text !== "" && selectValue) {
      setShowButton(true)
    }
    else {
      setShowButton(false)
    }
  }, [text, selectValue])


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>My Tasks</Text>
        <Text style={styles.subtitle}>Enter your tasks.</Text>

        <TextInput
          style={styles.input}
          placeholder={"Enter your task here"}
          value={text}
          onChangeText={setText}
        />

        <View style={{ elevation: 1000 }}>
          <DropDownPicker
            style={{ elevation: 1000 }}
            open={open}
            value={selectValue}
            items={items}
            setOpen={setOpen}
            setValue={setSelectValue}
            setItems={setItems}
            placeholder="Select the urgency level"
          />
        </View>

        {
          showButton &&

          <Pressable
            style={styles.buttonContainer}
            onPress={handleAddTaskOnPress}
          >
            <Text style={styles.buttonText}>Add Task</Text>
          </Pressable>
        }

        <View style={styles.divider} />

        <FlatList
          keyExtractor={(item) => item + Date.now() + Math.random()}
          data={tasks}
          style={{ marginTop: 1 }}
          renderItem={({ item, index }) =>
            <>
              <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{item?.text}</Text>
                <Text style={styles.taskText}>{(item.urgency)}</Text>

                <View style={styles.actionsContainer}>
                  <TouchableOpacity style={styles.taskEdit}
                    onPress={() => handleEditTaskOnPress(item, index)}>
                    <Text style={styles.taskEditText}>E</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.taskDelete}
                    onPress={() => handleDeleteTaskOnPress(index)}>
                    <Text style={styles.taskDeleteText}>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          }
        />
      </View>

      <>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text>{editText}</Text>

                <TextInput
                  style={styles.input}
                  placeholder={"Enter your text here"}
                  value={editText}
                  onChangeText={setEditText}
                />

                <View style={{ elevation: 1000 }}>
                  <DropDownPicker
                    open={editOpen}
                    value={editUrgency}
                    items={items}
                    setOpen={setEditOpen}
                    setValue={setEditUrgency}
                    setItems={setItems}
                    placeholder="Select the urgency level"
                  />
                </View>

                <Pressable
                  style={[styles.button, styles.buttonEdit]}
                  onPress={handleSaveEdit}>
                  <Text style={styles.textStyle}>Kaydet</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Kapat</Text>
                </Pressable>

              </View>
            </View>
          </Modal>
        </View>
      </>
    </SafeAreaView>
  );
}


