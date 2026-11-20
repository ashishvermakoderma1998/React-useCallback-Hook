import React, { useCallback, useState, memo} from 'react'
import './App.css'


// -------child component-----
const Button = React.memo(({onClick, text}) => {
  console.log(`${text} button clicked`);
return <button onClick={onClick}>{text}</button>;
})

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // -------useCallback remember whole function-------

  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  },[count1])

   const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
   },[count2])


  return (
    <>
    <p>Count1: {count1}</p>
    <p>Count2: {count2}</p>
    {/* ----button component called----- */}
    <Button onClick={handleClick1} text="Button 1"/>
     <Button onClick={handleClick2} text="Button 2"/>

    </>
  )
}

export default App
