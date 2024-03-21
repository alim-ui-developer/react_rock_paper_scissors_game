import React, { Component } from 'react'
import './style/Task1_2.css';
import Box from './component/Task1_4_Box';



export default class ClassComponent extends Component {
  choice = {
    rock:{
      name: 'rock',
      image: 'https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg',
    },
    scissors:{
      name: 'scissors',
      image: 'https://i.namu.wiki/i/PGp3JnsDa9eaMKBC1OwnSU4M0vLE0d_40ehrl0aUYum98U6tg0Nnl8W6_c0bQk2Bp9mQCMTe7eQt32pszxoQGw.webp',
    },
    paper:{
      name: 'paper',
      image: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg',
    }
  }
  
  youImage = ['https://blog.kakaocdn.net/dn/efKI7t/btq4oytEOLR/SlkACBfcSFeIKOqb9qqUj1/img.jpg'];
  computerImage = 'https://i.namu.wiki/i/ShTzcoMeHE4voCN_b3hTBqixr8Z2NO_O8XEIFIhN3_7rbIfSdq0hUfUw5GJJoF55QatW6GRiwpI9qbX3tI0Mlg.webp';
  
  constructor(){
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: null,
      yourResult: null,
      computersResult: null
    }
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: this.choice[userChoice], 
      computerSelect: computerChoice,
      result: this.judgement(this.choice[userChoice], computerChoice),
    });

    // const [ yourResult, setYourResult ] = useState('');
    // const [ computersResult, setComputersResult ] = useState('');
    
  }

  randomChoice = () => {
    let itemArray = Object.keys(this.choice); // 객체에 key값만 뽑아서 array로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return this.choice[final];
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      this.setState({
        yourResult:"tie",
        computersResult:"tie",
      })
    } else if (
      (user.name === "rock" && computer.name === "scissors") || 
      (user.name === "scissors" && computer.name === "paper") ||
      (user.name === "paper" && computer.name === "rock")
    ) {
      this.setState({
        yourResult:"win",
        computersResult:"lose",
      })
    } else if (
      (user.name === "rock" && computer.name === "paper") || 
      (user.name === "scissors" && computer.name === "paper") ||
      (user.name === "paper" && computer.name === "paper")
    ) {
      this.setState({
        yourResult:"lose",
        computersResult:"win",
      })
    }
  }

  render() {
    return (
      <div class="wrapper_task">
        <h1>인간 vs 기계</h1>
          <div className="buttons">
            <button onClick={() => this.play('scissors')}>✌</button>
            <button onClick={() => this.play('rock')}>👊</button>
            <button onClick={() => this.play('paper')}>🖐</button>
          </div>
          {/* you와 computer의 선택을 보여주는 박스 */}
          <div className="main">
            <Box 
              title="you" 
              image={this.youImage} 
              item={this.state.userSelect} 
              result={this.state.yourResult} 
            />
            <Box 
              title="computer" 
              image={this.computerImage} 
              item={this.state.computerSelect} 
              result={this.state.computersResult} 
            />
          </div>
        </div>
    )
  }
}




// import { useState } from 'react';
// import './style/Task1_2.css';
// import Box from './component/Task1_2_Box';

// const choice = {
// 	rock:{
// 		name: 'rock',
// 		image: 'https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg',
// 	},
// 	scissors:{
//     name: 'scissors',
// 		image: 'https://i.namu.wiki/i/PGp3JnsDa9eaMKBC1OwnSU4M0vLE0d_40ehrl0aUYum98U6tg0Nnl8W6_c0bQk2Bp9mQCMTe7eQt32pszxoQGw.webp',
//   },
// 	paper:{
//     name: 'paper',
// 		image: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg',
//   }
// }

// // 결과에 따라 이미지 src를ㄹ 갈아끼고 싶은데 props={yourImage.result}로 합성하는법을 모르겟따ㅠ.ㅠㅠ
// const youImage = ['https://blog.kakaocdn.net/dn/efKI7t/btq4oytEOLR/SlkACBfcSFeIKOqb9qqUj1/img.jpg'];
// const computerImage = 'https://i.namu.wiki/i/ShTzcoMeHE4voCN_b3hTBqixr8Z2NO_O8XEIFIhN3_7rbIfSdq0hUfUw5GJJoF55QatW6GRiwpI9qbX3tI0Mlg.webp';


// function ClassComponent() {
//   const [userSelect, setUserSelect] = useState(null);
//   const [computerSelect, setComputerSelect] = useState(null);
//   const [result, setResult] = useState(null);

//   const randomChoice = () => {
//     let itemArray = Object.keys(choice); // 객체에 key값만 뽑아서 array로 만들어주는 함수
//     let randomItem = Math.floor(Math.random() * itemArray.length);
//     let final = itemArray[randomItem];

//     return choice[final];
//   };

//   const play = (userChoice) => {
//     setUserSelect(choice[userChoice]);
//     let computerChoice = randomChoice();
//     setComputerSelect(computerChoice);
//     // 판단하는 함수
//     setResult(judgement(choice[userChoice], computerChoice));
//   };
  
//   const judgement = (user, computer) => {
//     if (user.name === computer.name) {
//       return "tie";
//     } else if (user.name === "rock") {
//       return computer.name === "scissors" ? "win" : "lose";
//     } else if (user.name === "scissors") {
//       return computer.name === "paper" ? "win" : "lose";
//     } else if (user.name === "paper") {
//       return computer.name === "rock" ? "win" : "lose";
//     }
//   };


//   return (
//     <div class="wrapper_task">
//       <h1>인간 vs 기계</h1>
//       <p className="memo">💡 이 부분이 숙제입니다 💡</p>
//       <div className="buttons">
//         <button onClick={() => play('scissors')}>✌</button>
//         <button onClick={() => play('rock')}>👊</button>
//         <button onClick={() => play('paper')}>🖐</button>
//       </div>
//       {/* you와 computer의 선택을 보여주는 박스 */}
//       <div className="main">
//         <Box title="you" image={youImage} item={userSelect} result={result} />
//         <Box title="computer" image={computerImage} item={computerSelect} result={result} />
//       </div>
//     </div>
//   );
// }

// export default ClassComponent;
