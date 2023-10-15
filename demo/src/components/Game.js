import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const Game = ({ navigation, route }) => {
  const { selectedUser } = route.params;
  const { player1, player2 } = route.params;

  const possibilities = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const [player1Turn, setPlayer1Turn] = useState(true);
  const [playerOneMoves, setPlayerOneMoves] = useState([]);
  const [playerTwoMoves, setPlayerTwoMoves] = useState([]);
  const [turns, setTurns] = useState(0);
  const [winner, setWinner] = useState("");
  const [playerOneWinCount, setPlayerOneWinCount] = useState(0);
  const [playerTwoWinCount, setPlayerTwoWinCount] = useState(0);
  const [drawCount, setDrawCount] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const [cellData, setCellData] = useState(
    Array.from({ length: 9 }, (_, index) => ({
      id: String(index + 1),
      value: String(index + 1),
      isDisabled: false,
      checkedBy: "",
    }))
  );

  useEffect(() => {
    checkWinner();
  }, [playerOneMoves, playerTwoMoves]);

  const checkWinner = () => {
    for (const possibility of possibilities) {
      console.warn(playerOneMoves.sort());
      if (isSubset(playerOneMoves.sort(), possibility)) {

        setWinner(player1);
        setPlayerOneWinCount((prevCount) => prevCount + 1);
        setModalVisible(true);
        onClear();
        return;
      } else if (isSubset(playerTwoMoves.sort(), possibility)) {
        console.warn(player2 + ' wins');
        setWinner(player2);
        setPlayerTwoWinCount((prevCount) => prevCount + 1);
        setModalVisible(true);
        onClear();
        return;
      }
    }

    if (turns === 9) {
      setWinner("Draw");
      setDrawCount((prevCount) => prevCount + 1);
      setModalVisible(true);
      onClear();
    }
  };

  const onClear = () => {
    setPlayerOneMoves([]);
    setPlayerTwoMoves([]);
    setPlayer1Turn(true);
    setTurns(0);
    setWinner("");
    setCellData(
      Array.from({ length: 9 }, (_, index) => ({
        id: String(index + 1),
        value: String(index + 1),
        isDisabled: false,
        checkedBy: "",
      }))
    );
  };

  const isSubset = (arr1, arr2) => {
    for (const val of arr2) {
      if (!arr1.includes(val)) {
        return false;
      }
    }
    return true;
  };

  const handlePress = (row, col) => {
    let item = "";
    if (row == 0) {
      item = col + 1;
    } else if (row == 1) {
      item = col + 4;
    } else {
      item = col + 7;
    }
    setPlayer1Turn(!player1Turn);
    if (player1Turn) {
      setPlayerOneMoves([...playerOneMoves, item]);
    } else {
      setPlayerTwoMoves([...playerTwoMoves, item]);
    }

    const updatedCellData = cellData.map((cell) =>
      cell.id === String(item)
        ? { ...cell, isDisabled: true, checkedBy: player1Turn ? 'X' : 'O' }
        : cell
    );
    setCellData(updatedCellData);
  };

  return (
    <LinearGradient colors={['#5D5FEF', '#843CE0']} style={styles.container}>
      <View style={styles.nameSection}>
        <Text style={styles.playerName}>{player1Turn ? player1 : player2}'s turn</Text>
      </View>

      <View style={styles.board}>
        {[0, 1, 2].map((row) => (
          <View key={row} style={styles.row}>
            {[0, 1, 2].map((col) => (
              <TouchableOpacity
                key={col}
                style={[
                  styles.cell,
                  cellData[row * 3 + col].isDisabled ?
                    { backgroundColor: (cellData[row * 3 + col].checkedBy) == 'X' ? '#f45162' : '#289cff' } :
                    { backgroundColor: (row + col) % 2 == 0 ? '#212832' : '#2b313d' }
                ]}
                onPress={() => !cellData[row * 3 + col].isDisabled && handlePress(row, col)}
              >
                {console.log(cellData[row * 3 + col].checkedBy)}
                {/* Optionally, you can display the checkedBy information */}
                <Text style={styles.checkedText}>{cellData[row * 3 + col].checkedBy}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.scoreSection}>
        <View style={styles.scoreSubSection}>
          <Text style={styles.playerName}>{player1}</Text>
          <Text style={styles.playerScore}>{playerOneWinCount}</Text>
        </View>
        <View style={styles.scoreSubSection}>
          <Text style={styles.playerName}>Draw</Text>
          <Text style={styles.playerScore}>{drawCount}</Text>
        </View>
        <View style={styles.scoreSubSection}>
          <Text style={styles.playerName}>{player2}</Text>
          <Text style={styles.playerScore}>{playerTwoWinCount}</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  board: {
    backgroundColor: '#212832',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedText: {
    fontSize: 50,
    color: '#212832'
  }
});

export default Game;