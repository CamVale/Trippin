import React, { useCallback, useState, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const ActionSheet = () => {
  const bottomSheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = useMemo(() => ["10%", "25%", "50%", "75%", "100%"], []);

  const handleSheetChanges = () => {};

  return (
    <>
      <BottomSheet enablePanDownToClose ref={bottomSheetRef} index={1} snapPoints={snapPoints} onChange={handleSheetChanges} onClose={()=>{setIsOpen(false)}}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Click on a pin to see more info!</Text>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default ActionSheet;
