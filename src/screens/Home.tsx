import { Button, View } from "react-native";
import Title from "../components/Title";
import styles from "../styles/style";
// import { useNavigation } from "@react-navigation/native";

function Home({navigation}:{navigation:any}):JSX.Element {
// const navigation : any = useNavigation();
return(
<View style = {styles.header}>
<Button title="Complet task" onPress={()=>navigation.navigate("Complet Task")}/> 
<Button title="In progres task" onPress={()=>navigation.navigate("In progres Task")}/>   
{/* <Title/> */}
</View>
)
}
export default Home