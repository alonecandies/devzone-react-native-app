import React from "react";
import Btn from "../components/btn";
import {Image,Text,View,StyleSheet,ScrollView} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class information extends React.Component{
    constructor(props){
        super(props);
    }
    logout=()=>{
        this.props.navigation.navigate("Login");
        const clearAsyncStorage = async() => {
            try {
                await AsyncStorage.clear();
            } catch(e) {
                console.log(e);
            }
        }
        clearAsyncStorage();
        this.props.navigation.reset({
            index:0,
            routes:[{name:'Login'}]
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <LinearGradient
                // Background Linear Gradient
                colors={['#2974FA','#38ABFD','#43D4FF','transparent']}
                style={styles.linearGradientBg}
                />
                <ScrollView>
                <View style={styles.logoutBtn}>
                    <Btn name="Logout" onPress={this.logout}/>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>ĐỘI NGŨ GIẢNG VIÊN</Text>
                </View>
                <View style={styles.leaderContainer}>
                    <Image style={styles.leaderAvatar} source={require("../assets/Nguyen-Viet-Dung.jpg")}></Image>
                    <Text style={styles.leaderName}>Nguyễn Viết Dũng</Text>
                    <Text>    Hiện đang làm Master tại Đại học bách khoa Hà Nội. Quản lý Phòng nghiên cứu Thông tin vô tuyến Wicomlab C9-421 Viện điện tử Viễn Thông. Có nhiều kinh nghiệm trong thiết kế mạch Analog, lập trình nhúng</Text>
                </View>
                <View style={styles.leaderContainer}>
                    <Image style={styles.leaderAvatar} source={require("../assets/Nguyen-Dinh-Thao.jpg")}></Image>
                    <Text style={styles.leaderName}>Nguyễn Đình Thảo</Text>
                    <Text>    Hiện đang làm Master tại Đại học bách khoa Hà Nội tốt nghiệp chuyên ngành Điện Tử Viễn Thông. Có hơn 3 năm kinh nghiệm trong lập trình nhúng và thiết kế mạch (Hardware and Software Embedded). Hiện đang làm việc tại Tổng Công Ty CN CNC Viettel.</Text>
                </View>
                <View style={styles.leaderContainer}>
                    <Image style={styles.leaderAvatar} source={require("../assets/Le-Anh-Tuan-Duong.jpg")}></Image>
                    <Text style={styles.leaderName}>Lê Anh Tuấn Dương</Text>
                    <Text>    Chuyên ngành Điện tử Hàng không Vũ trụ, Đại học Bách Khoa Hà Nội. Hơn 4 năm kinh nghiệm trong lĩnh vực tích hợp hệ thống, tự động hoá.</Text>
                </View>
                <View style={[styles.leaderContainer,{borderBottomWidth:0}]}>
                    <Image style={styles.leaderAvatar} source={require("../assets/Nguyen-Thanh-Nhan.jpg")}></Image>
                    <Text style={styles.leaderName}>Nguyễn Thành Nhân</Text>
                    <Text>    Chuyên ngành CNTT, Đại học Công nghệ - ĐHQGHN. Hơn 5 năm kinh nghiệm phát triển các hệ thống CNTT lớn trong nước phục vụ hơn trăm triệu người dùng. Hiện là trưởng nhóm phát triển tại Vingroup.</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>GIỚI THIỆU</Text>
                </View>
                <View style={styles.introductionContainer}>
                    <Image style={styles.leaderAvatar} source={require("../assets/logokien-signup.8641c4b2.png")}></Image>
                    <Text>    DevZone là 1 cộng đồng KỸ THUẬT dành cho Sinh Viên. Mục tiêu của chúng tôi là xây dựng một cộng đồng kỹ thuật thân thiện phổ biến và rộng rãi, là cầu nối giữa sinh viên và người đi làm.</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>THÔNG TIN LIÊN HỆ</Text>            
                </View>
                <View style={styles.contactContainer}>
                    <Text>Devzone{'\n'}
                        https://devzone.vn{'\n'}
                        contact@devzone.vn{'\n'}
                        0987393226{'\n'}
                        số 42 ngõ 15 - Tạ Quang Bửu - HBT - HN
                    </Text>
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    linearGradientBg:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 500
    },
    logoutBtn:{
        alignSelf:"center",
        marginTop:10,
        marginBottom:10
    },
    container: {
      flex: 1
    },
    titleContainer:{
        alignItems:"center",
        borderBottomWidth:2,
        borderBottomColor:"#000",
        paddingBottom:5,
        marginLeft:10,
        marginRight:10,
        marginBottom:5
    },
    title:{
        fontFamily:"monospace",
        fontWeight:"bold",
        fontSize:20
    },
    leaderContainer:{
        alignItems:"center",
        borderBottomWidth:2,
        paddingBottom:10,
        marginLeft:10,
        marginRight:10
    },
    leaderAvatar:{
        width:100,
        height:100,
        borderRadius:50,
        margin:5
    },
    leaderName:{
        fontWeight:"bold",
        fontSize:15
    },
    introductionContainer:{
        alignItems:"center",
        paddingBottom:10,
        marginLeft:10,
        marginRight:10
    },
    contactContainer:{
        alignItems:"center",
        paddingBottom:10,
        marginLeft:10,
        marginRight:10
    }
});