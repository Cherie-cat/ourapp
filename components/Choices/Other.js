//每个选项都组合起来
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Pressable,
    ImageBackground,
  } from "react-native";
  import { DEFAULT_DP, GlobalStyles } from "../../../constants/Styles";
  import PressEffect from "../../UI/PressEffect";
  import { useNavigation } from "@react-navigation/native";
  import Othersmall from "./Othersmall"
  import {OTHERS} from "../../data/choice/Other"
const Other = () => {

    function Render(){
        const data = [1,2,3,4,5,6]
            //对data数组进行遍历！注意，这里的return值是返回给arr的，不是返回给render函数的，因此在最后面还要再写一个return返回arr给render，让它渲染
            const arr = data.map((data,index) => {
            console.log(index)
            return (
            <View style ={styles.component}> 
            <Othersmall other = {OTHERS[index]} ></Othersmall>
            </View>
            );
        })
       return (arr);
    }

    return (
    <View
    style={ styles.container} 
    >
     {/* 调用一定要用大写！ */}
       <Render/>
{/* 
        <View style ={styles.component}> 
            <Othersmall other = {OTHERS[0]} ></Othersmall>
        </View>
        <View style ={styles.component}> 
            <Othersmall other = {OTHERS[1]} ></Othersmall>
        </View>
        <View style ={styles.component}> 
            <Othersmall other = {OTHERS[2]} ></Othersmall>
        </View>
        <View style ={styles.component}> 
            <Othersmall other = {OTHERS[2]} ></Othersmall>
        </View>
        <View style ={styles.component}> 
            <Othersmall other = {OTHERS[2]} ></Othersmall>
        </View>
        <View style ={styles.component}> 
            <Othersmall other = {OTHERS[2]} ></Othersmall>
        </View>  */}
 
    </View>
);
};

//这种需要用到flex布局的一定一定要给子组件设置高度和宽度
const styles = StyleSheet.create({
    container: {
        //flex布局
        flex: 1,
        flexDirection:"row",
        justifyContent: 'space-between', // 设置子组件在垂直方向居中
        // alignItems: 'center', // 子组件在水平方向居中
        backgroundColor: GlobalStyles.colors.primary,
        flexWrap:"wrap" //允许换行
    },
    component: {
        //每一个组件跟顶部组件的高度差50
        marginTop:50,
        width: '25%', // 设置组件宽度
        height: 100, // 设置组件高度
        // backgroundColor:"pink",
        marginHorizontal: 10, // 组件之间的水平间距
        justifyContent: 'center', // 组件内部在垂直方向上居中
        alignItems: 'center', // 组件内部在水平方向上居中

    },
});


export default Other;


