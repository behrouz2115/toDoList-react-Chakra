import React,{useState} from 'react';

//id
import { nanoid } from 'nanoid';

//Chakra
import { HStack, IconButton, Input, useToast } from '@chakra-ui/react';

//Icons
import {FaPlusSquare} from 'react-icons/fa';


const AddToDO = ({addToDo}) => {

    const toast =useToast();   

    const submitHandler=(event)=>{
        event.preventDefault();
        if(!content){
            toast({
                title: 'Add to list please.',
                status: 'info',
                duration: 3000,
                isClosable: true,
              });
              return
        }
        const todo={
            id:nanoid(),
            body: content
        }
        addToDo(todo);
        setContent('');
    }
    const[content,setContent]=useState("")
    return (
     <form onSubmit={submitHandler}>
            <HStack  margin="20px">
              <Input _focus={{bg:"gray.300"}} variant="filled" placeholder='Enter ...' value={content} onChange={(event)=>setContent(event.target.value)} />
              <IconButton  type="submit" colorScheme="pink" icon={<FaPlusSquare/>} isRound='true'/>
            </HStack>
     </form>
    );
};

export default AddToDO;