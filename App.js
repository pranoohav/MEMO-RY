import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function App({ navigation }) {
    return (
        
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Intro">
                <Stack.Screen name="Intro" component={Intro} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Memories" component={Memories} />
                <Stack.Screen name="ToDo" component={ToDo} />
                <Stack.Screen name="People" component={People} />
            </Stack.Navigator>
            </NavigationContainer>
        
    );
}
function Intro({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image
                    style={{ flex: 1, height: 100, width: 100, left: -10 }}
                    source={require('./logo.png')}
                    resizeMode="contain"
                />
                <Text
                    style={{ fontSize: 30, left: -65, bottom: -30, letterSpacing: 2 }}>
                    MEMO-RY
                </Text>
            </TouchableOpacity>
        </View>                           
            );
}
function Home({ navigation }) {
     return (
         <View style={styles.container}>
             <View style={styles.RectangleLogo}>
                 <Text
                     style={{ fontSize: 30, lineHeight: 50, letterSpacing: 15, paddingTop: 10, color: '#ffffff', textAlign: "center", textAlignVertical:'top' }}>
                     MEMO-RY
                 </Text>
             </View>

             <View style={styles.blackLine}></View>

             <View >
                 <View>
                     <TouchableOpacity onPress={() => navigation.navigate('ToDo')}
                         style={styles.button}>
                         <Text
                             style={styles.instructions} activeOpacity={0.5}>To-Do List
                         </Text>
                     </TouchableOpacity>
                 </View>
             </View>

             <View >
                 <View >
                     <TouchableOpacity onPress={() => navigation.navigate('Memories')}
                         style={styles.button}>
                         <Text
                             style={styles.instructions} activeOpacity={0.5}>Memories
                         </Text>
                     </TouchableOpacity>
                 </View>
             </View>

             <View >
                 <View >
                     <TouchableOpacity style={styles.button}>
                         <Text
                             style={styles.instructions} activeOpacity={0.5}>Emergency Call
                         </Text>
                     </TouchableOpacity>
                 </View>
             </View>
         </View>
     );    
}
function Memories({ navigation }) {
    return (
        <View onPress={() => navigation.navigate('Home')} style = { styles.container } >

            <TouchableOpacity onPress={() => navigation.navigate('Home')}style={styles.RectangleLogo}>
                <Text
                    style={{ fontSize: 30, lineHeight: 50, letterSpacing: 15, paddingTop: 10, color: '#ffffff', textAlign: "center" }}>
                    MEMO-RY
                 </Text>
            </TouchableOpacity>

            <View style={{
                backgroundColor: '#E3EAEB', marginTop: 0,
            }}></View>
            <View >

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('People')}
                        style={styles.button1}>
                        <Text style={styles.instructions} activeOpacity={0.5}>People</Text>
                        <Image source={require('./groupPic.jpg')} style={styles.groupPic} />                        
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <View >
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.instructions} activeOpacity={0.5}>Places</Text>
                        <Image source={require('./placesPic.jpg')} style={styles.placesPic} />
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <View >
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.instructions} activeOpacity={0.5}>Events</Text>
                        <Image source={require('./partyPic.jpg')} style={styles.partyPic} />
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <View >
                    <TouchableOpacity onPress={() => navigation.navigate('People')}
                        style={styles.button1}>
                        <Text style={styles.instructions} activeOpacity={0.5}>All</Text>
                        <Image source={require('./globePic.jpg')} style={styles.globePic} />                        
                    </TouchableOpacity>
                </View>
            </View>

        </View>
            
            
            
     );

}
function ToDo({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.RectangleLogo}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text
                        style={{ fontSize: 30, lineHeight: 50, letterSpacing: 15, textAlign: 'center', color: '#ffffff', textAlign: "center", marginTop: 15 }}>
                        MEMO-RY
                    </Text>                    
                </TouchableOpacity>                
            </View>

            <View >
                <View>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.titleText} activeOpacity={0.5}>To Do List</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <View>
                    <TouchableOpacity  style={styles.button2}>
                        <Text style={styles.instructions2} activeOpacity={0.5}>7:00: Take Medication</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <View >
                    <TouchableOpacity  style={styles.button2}>
                        <Text style={styles.instructions2} activeOpacity={0.5}>7:30: Brush Teeth</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <View >
                    <TouchableOpacity  style={styles.button2}>
                        <Text style={styles.instructions2} activeOpacity={0.5}>11:00: Dr. Appointment</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <View >
                    <TouchableOpacity  style={styles.button2}>
                        <Text style={styles.instructions2} activeOpacity={0.5}>1:30: Lunch with Robyn</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <View >
                    <TouchableOpacity  style={styles.button2}>
                        <Text style={styles.instructions2} activeOpacity={0.5}>3:00: Visit Family</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <View >
                    <TouchableOpacity  style={styles.button2}>
                        <Text style={styles.instructions2} activeOpacity={0.5}>5:00: Gardening Club</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <View >
                    <TouchableOpacity  style={styles.button2}>
                        <Text style={styles.instructions2} activeOpacity={0.5}>9:00: Medication</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>                                    
     );
}
function People({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.RectangleLogo1}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text
                    style={{ fontSize: 30, lineHeight: 50, letterSpacing: 15, paddingTop: 10, color: '#ffffff', textAlign: "center" }}>
                    MEMO-RY
                 </Text>                    
                </TouchableOpacity>
            </View>             
            <Image
                style={{ flex: 1, height: 100, width: 350, marginTop: 30 }}
                source={require('./testPic.jpg')}
                resizeMode="contain"
            />
            <View style={styles.RectangleButton}>
                <TouchableOpacity onPress={() => alert('We are freshman CS students, and this is our first mobile app!')}>
                <Text
                    style={{ fontSize: 20, lineHeight: 25, letterSpacing: 10, paddingTop: 22, color: '#ffffff', textAlign: "center" }}>
                    Read More
                 </Text>                    
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.NavigationBar} />
                <Text
                    style={{ fontSize: 15, lineHeight: 50, letterSpacing: 10, color: '#ffffff', textAlign: "center" }}>
                    Previous          Next
                 </Text>
            </View>
        </View>                                    
     );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3EAEB',
    alignItems: 'center',
    justifyContent: 'center',
    },
    container1: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E3EAEB',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
    },
    // Style for text (color, size, margins -- left justifies)
    instructions: {
        color: '#ffffff',
        fontSize: 30,
        marginHorizontal: 15,
        marginLeft: 20,
        justifyContent: 'flex-start',
        letterSpacing: 10,
    },
    instructions2: {
        color: '#ffffff',
        fontSize: 20,
        marginHorizontal: 15,
        marginLeft: 20,
        justifyContent: 'flex-start',
        letterSpacing: 10,
    },

    // Style for button (organizes items in center of row, background color, dimensions)
    button: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4B9AB9',
        height: 80,
        width: 400,
        borderRadius: 5,
    },
    button1: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4B9AB9',
        height: 80,
        width: 400,
        borderRadius: 5,
    },
    button2: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4B9AB9',
        height: 50,
        width: 400,
        borderRadius: 5,
    },

    RectangleLogo: {
        marginTop: -20,
        width: 400,
        height: 70,
        backgroundColor: '#4B9AB9',
    }, 
    RectangleLogo1: {
        marginTop: 20,
        width: 400,
        height: 70,
        backgroundColor: '#4B9AB9',
    },     

    blackLine: {
        marginTop: 40,
        width: 400,
        height: 5,
        backgroundColor: 'white',
    },
    placesPic: {
        width: 152,
        height: 80,
        marginLeft: 45,
        justifyContent: 'flex-start',
    },

    groupPic: {
        width: 152,
        height: 80,
        marginLeft: 40,
        justifyContent: 'flex-start',
    },

    partyPic: {
        width: 152,
        height: 80,
        marginLeft: 44,
        justifyContent: 'flex-start',
    },

    globePic: {
        width: 152,
        height: 80,
        marginLeft: 131,
        justifyContent: 'flex-start',
    },
    RectangleButton: {
        marginTop: 20,
        marginBottom: 90,
        width: 200,
        height: 70,
        backgroundColor: '#4B9AB9',
    },
    NavigationBar: {
        width: 400,
        height: 60,
        backgroundColor: '#4B9AB9',
        opacity: .4,
        position: 'absolute'
    },
     titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        //textAlign: 'center',
        color: 'black',
        marginLeft: 30,
        //marginTop: 10,
    }
}); export default App;
