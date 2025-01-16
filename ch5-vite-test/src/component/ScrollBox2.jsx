import React, { Component } from 'react';

class ScrollBox2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0, // 스크롤 위치 상태 추가
    };
  }

  // 스크롤 이벤트 핸들러
  handleScroll = () => {
    const { scrollTop } = this.box;
    this.setState({ scrollPosition: scrollTop }); // scrollTop을 상태에 업데이트
  };

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  scrollToTop = () => {
    this.box.scrollTop = 0;
  };

  scrollToMiddle = () => {
    this.box.scrollTop = 175;
  };

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(skyblue, blue)',
    };

    return (
      <div>
        {/* 스크롤 위치를 박스 바깥에 위치 */}
        <div style={{ marginBottom: '10px' }}>
          현재 스크롤 위치: {this.state.scrollPosition}px
        </div>

        {/* 스크롤 박스 */}
        <div
          style={style}
          ref={(ref) => {
            this.box = ref;
          }}
          onScroll={this.handleScroll} // 스크롤 이벤트 핸들러 추가
        >
          <div style={innerStyle} />
        </div>
      </div>
    );
  }
}

export default ScrollBox2;
