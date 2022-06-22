import React,{useState} from 'react';

//id
import { nanoid } from 'nanoid';

//Chakra
import { HStack, IconButton, Input } from '@chakra-ui/react';

//Icons
import {FaPlusSquare} from 'react-icons/fa';


const AddToDO = ({addToDo}) => {
   

    const submitHandler=(event)=>{
        event.preventDefault();
        // console.log(content);
        const todo={
            id:nanoid(),
            body: content
        }
        // console.log(todo);
        addToDo(todo);
        setContent('');
    }
    const[content,setContent]=useState("")
    return (
     <form onSubmit={submitHandler}>
            <HStack  margin="20px">
              <Input variant="filled" placeholder='Enter ...' value={content} onChange={(event)=>setContent(event.target.value)} />
              <IconButton  type="submit" colorScheme="pink" icon={<FaPlusSquare/>} isRound='true'/>
            </HStack>
     </form>
    );
};

export default AddToDO;