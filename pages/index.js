import { useState } from "react"
import styled from "styled-components";

const Wrapper = styled.div`
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    html{
        font-size: 10px;
    }
    input{
        width: 20rem;
        padding: .8rem;
    }
    button{
        margin-left: 1rem;
        padding: .8rem;
        width: 6rem;
        background-color: transparent;
        border-radius: 5px;
        font-size: 1rem;
    }
    .todo{
        font-size: 1.5rem;
        padding: 1rem 0rem;
        color: violet;
        text-align: left;
        margin: 2rem 0rem;
    }
    .right{
        margin-left: 2rem;
        margin-bottom: 1rem;
    }
    .red{
        color: red;
        cursor: pointer;
        border: 2px solid red;
    }
`

const index=()=>{
    const [userInput,setUserInput]=useState('')
    const [todoLIst,settodoList]=useState([])

    const handleSubmit=(e)=>{
        e.preventDefault()

        settodoList([
            userInput,
            ...todoLIst
        ])

        setUserInput("")
    }

    const handleChange=(e)=>{
        e.preventDefault()
        setUserInput(e.target.value)
        console.log(userInput)
    }
    const handleDelete=(todo)=>{
        const updateArr=todoLIst.filter(todoItem =>todoLIst.indexOf(todoItem) !=todoLIst.indexOf(todo))
        settodoList(updateArr)
    }
    return(
        <Wrapper>
            <div>
                <h1>Praise Nextjs todo list</h1>
                <form action="">
                    <input type="text" value={userInput} placeholder="Enter Todo Item" onChange={handleChange} />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
                <ul className="todo">
                    {
                        todoLIst.length>=1?todoLIst.map((todo,idx)=>{
                            return <li key={idx}>{todo} <button className="right red" onClick={(e)=>{
                                e.preventDefault()
                                handleDelete(todo)
                            }}>DELETE</button></li>
                        })
                        :"Enter a todo item"
                    }
                </ul>
            </div>
        </Wrapper>
    )
}
export default index