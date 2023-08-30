import React from 'react'


import ItemsList from './ItemsList';
/*
1.useState - cannot to be used in class and as its extends
2.react hook usestate is cannot be called conditionally
 */


   
  /*
  hook ->usestate   
  const handleClick = (e) => {
      console.log(e.target.innerText)
    }
    const handleClick2 = (name) => {
      console.log(`Do follow dicipline & Timeline ${name}`)
    } */

  /* function name(){
    return console.log("This is counting number")
  }
  const [count, setCount] = useState(99);
  const [name, setName] = useState(()=>name());
  function incrementFunction(){
    setCount((count)=> {return count+1});
    setCount((count)=> {return count+1});
    setCount((count)=> {return count+1});
  }
  function decrementFunction(){
    setCount(count -1);
  }
  return (
    <main>
    <p> lets {handlenameChange()}</p>
    
    <button > Do task</button><br></br>
    <button onClick={decrementFunction}>-</button>
    <span>{count}</span>
    <button onClick={incrementFunction}>+</button>
    </main>
  ) */

  /*const[name,setName] = useState("Earn");
  function handlenameChange(){
    const names = ["work","Eat","Sleep"]
    const int = Math.floor(Math.random()*3)
    setName( names[int])
  } */
 
  /* <main>
   {/*  <p> lets {name} Everyday</p>
    
    <button onClick={handlenameChange} > Do task</button><br></br> }
    </main> */
    
const Content = ({items,handleCheck,handleDelete}) => {
  
  
  return (
    <main>
      {(items.length) ? (
        <ItemsList 
            items = {items}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
        />
      ) : (<p style={{marginTop:'2rem'}}>Your List is Empty</p>  )}
    </main>
  )
}

export default Content