import React, { useRef } from 'react'
import './style/AccordionLayout.css';
import ClassComponent from './Task1_4';
import FunctionalComponent from './Task1_2';
import FunctionalComponentSelf from './Task1_2_Self';

const AccordionLayout = () => {
  const ClassComponentRef = useRef(null);
  const FunctionalComponentRef = useRef(null);
  const FunctionalComponentSelfRef = useRef(null);

  const accordianToggle = (ref) => {
    ref.current.classList.toggle('open');
  }

  return (
    <div className='accordionLayoutWrapper'>
      <h1 className="accordionLayoutTitle">가위바위보게임을 만들어보자!</h1>
      <div className='accordionLayoutContentsWrap' ref={ClassComponentRef}>
        <h2 className="accordionLayoutContentsTitle" onClick={() => accordianToggle(ClassComponentRef)}>클래스 컴포넌트로 만들기<i>&nbsp;</i></h2>
        <div className='accordionLayoutContents'>
        <ClassComponent />
        </div>
      </div>
      <div className='accordionLayoutContentsWrap' ref={FunctionalComponentRef}>
        <h2 className="accordionLayoutContentsTitle" onClick={() => accordianToggle(FunctionalComponentRef)}>함수형 컴포넌트로 만들기(강의 내용대로 만든 것)<i>&nbsp;</i></h2>
        <div className='accordionLayoutContents'>
          <FunctionalComponent />
        </div>
      </div>
      <div className='accordionLayoutContentsWrap' ref={FunctionalComponentSelfRef}>
        <h2 className="accordionLayoutContentsTitle" onClick={() => accordianToggle(FunctionalComponentSelfRef)}>함수형 컴포넌트로 만들기(강의 전 직접 만든 것)<i>&nbsp;</i></h2>
        <div className="accordionLayoutContents">
          <FunctionalComponentSelf />
        </div>
      </div>
    </div>
  )
}

export default AccordionLayout