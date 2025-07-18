import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addByAmount } from './counterSlice.jsx'
import { useState } from 'react'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [input, setInput] = useState(0)

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #eee', borderRadius: 8, textAlign: 'center', background: '#fafafa' }}>
      <h2>Redux Toolkit Counter</h2>
      <h1 style={{ fontSize: 48, margin: '24px 0' }}>{count}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
        <button onClick={() => dispatch(decrement())} style={{ fontSize: 24, width: 48 }}>-</button>
        <button onClick={() => dispatch(increment())} style={{ fontSize: 24, width: 48 }}>+</button>
      </div>
      <div style={{ marginBottom: 16 }}>
        <input
          type="number"
          value={input}
          onChange={e => setInput(Number(e.target.value))}
          style={{ width: 80, fontSize: 18, marginRight: 8 }}
        />
        <button onClick={() => dispatch(addByAmount(input))} style={{ fontSize: 16 }}>
          Add Value
        </button>
      </div>
    </div>
  )
}

export default App
