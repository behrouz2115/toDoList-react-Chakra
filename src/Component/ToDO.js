import React from 'react';

//icons 
import {FaTrash, FaCheck} from 'react-icons/fa';


//Chakra
import {HStack, IconButton, VStack, Text, StackDivider, Spacer, Badge} from '@chakra-ui/react';

const ToDO = ({todo,deletToDo}) => {
    if (!todo.length){
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
            {todo.map(show=>(
                <HStack bg="white"   key={show.id}>
                    <Text paddingLeft="10px" >{show.body}</Text>
                    <Spacer/>
                    <IconButton colorScheme="green" icon={<FaCheck/>} />
                    <IconButton colorScheme="red" icon={<FaTrash/>} onClick={()=>deletToDo(todo.id)} />
                </HStack>
            ))}
       </VStack>
    );
};

export default ToDO;