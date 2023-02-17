import {useState} from 'react'

export const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState('')

const onInputChange = (e) => {
    console.log("🚀 ~ file: AddCategory.jsx:8 ~ onInputChange ~ e", e)
    setInputValue(e.target.value)
}
const onSubmit =(e)=>{
e.preventDefault()
if(inputValue.trim().length <= 1)return;
///////////////
onNewCategory(inputValue.trim())
setInputValue('')
}

  return (
    <form onSubmit={(e)=>onSubmit(e)}>
   <input type="text" value={inputValue} placeholder='buscar Gifs' onChange={(e)=>onInputChange(e)} />
    </form>
  )
}
