import React, { Component } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import { NumberSelectView } from "@components";

import styles from './Styles/modalDialogViewStyles'

class ModalDialogView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: true
    }
  }

  componentDidMount() {
    this.setState({
      modalVisible: this.props.showModalDialog
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.showModalDialog && this.props.showModalDialog != prevProps.showModalDialog) {
      this.setState({
        modalVisible: this.props.showModalDialog
      })
    }
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  }

  render() {
    const { modalVisible } = this.state;
    const { style } = this.props
    return (
      <View style={[styles.modalView]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          supportedOrientations={['landscape', 'landscape-left', 'landscape-right']}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <Pressable
            style={[styles.modalContentView, style]}
            onPress={() => this.setModalVisible(!modalVisible)}
          >
            <Pressable
              style={[styles.closeView]}
              onPress={() => this.setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeText}>X</Text>
            </Pressable>
            <View style={[styles.numberPadContainer, style.numberPad]}>
              <NumberSelectView />
            </View>

            <Pressable
              style={[styles.closeView]}
              onPress={() => this.setModalVisible(!modalVisible)}
            >
            </Pressable>

          </Pressable>

        </Modal>
      </View>
    );
  }
}
export default ModalDialogView
