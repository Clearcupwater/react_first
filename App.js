/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

//wrote my own class with a variable prop
//impelementations expects an assigningnment of that prop name
// class Greetings extends Component {
//   constructor(props){
//     super(props);
//     this.props.name = "Default"
//   }
//
//   render() {
//     return(
//        <View style = {{alignItems: 'center'}}>
//           <Text> Hello {this.props.name}!</Text>
//        </View>
//     );
//
//
//   }
//
// }
//
//
//
//
// export default class LotsOfGreeetings extends Component {
//     render() {
//         return (
//             <View style = {{alignItems: 'center', top : 50}}>
//                 <Greetings name='Rexxar'/>
//                 <Greetings name = 'Timothy'/>
//                 <Greetings/>
//             </View>
//
//
//         )
//     }
// }

// class Blink extends Component {
//
//     componentDidMount(){
//         // Toggle the state every second
//         setInterval(() => (
//             this.setState(previousState => (
//                 { isShowingText: !previousState.isShowingText }
//             ))
//         ), 1000);
//     }
//
//     //state object
//     state = { isShowingText: true };
//
//     render() {
//         if (!this.state.isShowingText) {
//             return null;
//         }
//
//         return (
//             <Text>{this.props.text}</Text>
//         );
//     }
// }
//
// export default class BlinkApp extends Component {
//     render() {
//         return (
//             <View>
//               <Blink text='I love to blink' />
//               <Blink text='Yes blinking is so great' />
//               <Blink text='Why did they ever take this out of HTML' />
//               <Blink text='Look at me look at me look at me' />
//             </View>
//         );
//     }
// }


// setting up of the component to prepare for passing of value
// props have properties that allow injection into the component
// props connect values together
class Header extends Component {
  render() {
    console.log("About to log something");
    console.log(this.props);
    return (
        <View style = {{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>{this.props.title}</Text>
        </View>
    )
  }

}

// implementation and passing a value
// implementaiton can also include state
// state is dynamic and changes values
export default class Layout extends Component{
  constructor() {
   super();
      this.state = {title: "Welcome"}
  }

  render() {
      setTimeout(()=> {
        this.setState({title : "Welcome Timothy"})
      }, 2000);

      return (
          <React.Fragment>
            <Header title = {this.state.title}/>
            <Header title = {"Welcome all that come"}/>

          </React.Fragment>

      )
  }


}
