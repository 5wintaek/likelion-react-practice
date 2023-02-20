import './App.css';

// 이미지 에셋 불러오기
import Counter from './components/Counter';



function App() {
  console.log('rendering App Component')
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
