import React from 'react';

//icons 
import {FaTrash, FaCheck} from 'react-icons/fa';


//Chakra
import {HStack, IconButton, VStack, Text, StackDivider, Spacer} from '@chakra-ui/react';

const ToDO = () => {
    const todo =[
        {
            id:1,
            body:'ali'
        },
        {
            id:2,
            body:'vali' 
        },
        {
            id:3,
            body:'ali'
        },
        {
            id:4,
            body:'vali' 
        }
    ]
    return (
       <VStack divider={<StackDivider/>} 
                // borderWidth="thin"
                alignItems="stretch" 
                width="50%"
                // p="5px"
                borderColor="black.100" 
                borderRadius="lg">
            {todo.map(show=>(
                <HStack bg="white"   key={show.id}>
                    <Text >{show.body}</Text>
                    <Spacer/>
                    <IconButton colorScheme="green" icon={<FaCheck/>} />
                    <IconButton colorScheme="red" icon={<FaTrash/>} />
                </HStack>
            ))}
       </VStack>
    );
};

export default ToDO;