import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = "";
  }

  // 이전에 함수형 컴포넌트로는 useState를 써서 useEffect로 props의 값이 바뀔 때 텍스트 내용을 바꿔주는 방식을 사용했는데
  // 클래스 컴포넌트로 바꾸면서 useEffect를 사용하는 법이 어려워 방법을 바꿈 ㅠㅠ
  render() {
    return (
      <div className={`boxWrap ${this.props.result}`}>
        <div className="box">
          <div className="itemImageBox">
            <p className="itemimage">
              <img
                src={this.props.item ? this.props.item.image : "https://img.freepik.com/premium-photo/question-mark-sign-3d-question-mark_118019-6308.jpg"}
                alt={this.props.item && this.props.item.name}
              />
            </p>
          </div>
          <p className="gamerImage">
            <img src={this.props.image} alt={this.props.title} />
            <h2>{this.props.result}</h2>
          </p>
        </div>
        <h1 className="gamerText">- {this.props.title} -</h1>
      </div>

    );
  }
}