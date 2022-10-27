import React,{useState} from "react";
import {View,TouchableOpacity,Image,StyleSheet,Text} from 'react-native'
import Modal from 'react-native-modal';


export const DataSyncField=()=>{
    const [isModalVisible, setModalVisible] = useState(false);

  const handleToggle = () => {
    setModalVisible(!isModalVisible);
  };
  return(
    <View>
         <TouchableOpacity onPress={handleToggle}>
          <Image
            source={require('/Volumes/Development/PassManager/src/assets/images/sync_icn.png')}
            style={styles.contentIcon}
          />
          </TouchableOpacity>
          <View>

          </View>
          <Modal
        isVisible={isModalVisible}
        coverScreen={true}
        >
        <TouchableOpacity style={styles.dataSyncContainer} onPress={handleToggle}>
          <View style={styles.imageContainer}>
            <Text style={styles.modalText}>Data Sync in Progress</Text>
            <Text style={styles.modalText}>please wait</Text>
            </View>
          <Image
            source={require('/Volumes/Development/PassManager/src/assets/images/data_sync.png')}
            style={styles.dataSyncimage}
          />
        </TouchableOpacity>
      </Modal>

    </View>
  )
}

const styles=StyleSheet.create({
    contentIcon: {
        marginLeft: 35,
      },
      imageContainer:{
        marginVertical: 33,

      },
      dataSyncContainer:{
        flex: 1,
        justifyContent: 'center',

      },
      modalText:{
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
      },
      dataSyncimage:{
        height:40,
        width:42,
        alignSelf: 'center'
      }
})