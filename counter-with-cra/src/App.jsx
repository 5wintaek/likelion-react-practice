import './App.css';

// 이미지 에셋 불러오기
import {CounterFunction, CounterClass} from './components';



function App() {
  console.log('rendering App Component')
  return (
    <div className="App">
      <h2>함수 컴포넌트</h2>
      <CounterFunction count={2}/>
      <h2>클래스 컴포넌트</h2>
      <CounterClass step={3}/>
    </div>
  );
}

export default App;
