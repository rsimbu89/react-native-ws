import React, { Component } from "react";
import { Alert, Modal, Text, Pressable, View, Image } from "react-native";
import { NumberSelectView } from "@components";
import closeIcon from '../../assets/images/close_yellow.png'
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

        <View style={[styles.modalView]}>
          <Pressable
            style={[styles.modalContentView, style]}
            onPress={() => this.setModalVisible(!modalVisible)}
          >
            <View style={[styles.closeView]} >
              <View style={styles.closeIconHolder}>
                <Image source={closeIcon} ></Image>
              </View>
            </View>
            <View style={[styles.numberPadContainer, style.numberPad]}>
              <NumberSelectView />
            </View>

            <Pressable
              style={[styles.closeView]}
              onPress={() => this.setModalVisible(!modalVisible)}
            >
            </Pressable>
          </Pressable>
        </View>
      </Modal>

    );
  }
}
export default ModalDialogView
