import React, { useState } from 'react';

//icons 
import {FaTrash, FaCheck} from 'react-icons/fa';


//Chakra
import {HStack, IconButton, VStack, Text, StackDivider, Spacer, Badge} from '@chakra-ui/react';
import { computeHeadingLevel } from '@testing-library/react';

const ToDO = ({todos,deletToDo}) => {
    const [state,setState]=useState(false);
    const completedHandler=()=>{
        setState(
            {
        
                state:true
            } 
            
        )
    }
    if (!todos.length){
        return(
            <Badge colorScheme="green" borderRadius="lg" shadow="outline" p="4" m="5"> Nothing to do today!</Badge>
        )
    }

    
    return (
       <VStack divider={<StackDivider/>} 
                // borderWidth="thin"
                alignItems="stretch" 
                width="50%"
                borderColor="black.100" 
                borderRadius="lg">
            {todos.map(show=>(
                <HStack bg="white"   key={show.id}>

                    <Text paddingLeft="10px" style={{ color: state ? 'grey' : 'black' }}   >{show.body}</Text>
                    <Spacer/>
                    <IconButton colorScheme="green" icon={<FaCheck/>} onClick={completedHandler}/>
                    <IconButton colorScheme="red" icon={<FaTrash/>} onClick={()=>deletToDo(show.id)} />
                </HStack>
            ))}
       </VStack>
    );
};

export default ToDO;