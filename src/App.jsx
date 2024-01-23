import { useContext } from "react";
import { countAtom } from "./components/stores/atoms/count";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log('count function rendering')
  return <div>
    <CountRenderer />
    <Buttons/>
  </div>
}

function CountRenderer() {
  console.log('count renderer rendering')
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  console.log('buttons rendering')
  return <div>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
  </div>
}

export default App;

