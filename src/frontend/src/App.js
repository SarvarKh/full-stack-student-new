import { Button, Radio } from "antd";
import './App.css';

function App() {
  return (
    <div className="App">
      <Button type="primary">Hello</Button>
        <Radio.Group value='small'>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
    </div>
  );
}

export default App;
