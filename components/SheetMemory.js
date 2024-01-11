import { View } from "react-native"
import { Card, Button } from "react-native-paper"
import { Text } from "react-native-paper"

export default function SheetMemory({ handleCloseSheet, camera, memory, setCoordinates}){

  const handleZoom = () => {
    camera.zoomTo(12)
  }

  const handleAll = () => {
    handleGoTo().then(()=>{
      setTimeout(handleZoom(), 100)
    })
  }

  const handleGoTo = () => {
    const coordinates = memory.locationData
    handleCloseSheet()
    return new Promise(()=>{setCoordinates([coordinates.longitude, coordinates.latitude])})
  };

    return (
        <Card style={{width: "98%", alignItems: "center", margin: 3}}>
        <Card.Content  >
          <Text style={{alignSelf: "center"}} variant="headlineMedium">{memory.title}</Text>
          <Text style={{alignSelf: "center", padding: "auto"}} variant="bodyLarge">{memory.note}</Text>
        </Card.Content>
        <Card.Actions style={{paddingRight: 20}}>
          <View style={{flex: 1, flexDirection: "row", justifyContent: "center"}}>
            <Button mode="text" onPressIn={()=>handleAll()} >Go to</Button>
          </View>
        </Card.Actions>
      </Card>
    )
}