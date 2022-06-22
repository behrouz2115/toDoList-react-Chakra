import React from 'react';

//Chakra
import { Button, HStack, IconButton, Input } from '@chakra-ui/react';

//Icons
import {FaPlusSquare} from 'react-icons/fa';


const AddToDO = () => {
    const submitHandler=()=>{
        
    }
    return (
     <form onSubmit={submitHandler}>
            <HStack  margin="20px">
              <Input variant="filled" placeholder='Enter ...'/>
              <IconButton  type="submit" colorScheme="pink" icon={<FaPlusSquare/>} isRound='true'/>
            </HStack>
     </form>
    );
};

export default AddToDO;