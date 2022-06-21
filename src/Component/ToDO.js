import React from 'react';

//icons 
import {FaTrash} from 'react-icons/fa';


//Chakra
import {HStack, IconButton, VStack, Text} from '@chakra-ui/react';

const ToDO = () => {
    const todo =[
        {
            id:1,
            body:'ali'
        },
        {
            id:2,
            body:'vali' 
        }
    ]
    return (
       <VStack>
            {todo.map(show=>(
                <HStack key={show.id}>
                    <Text>{show.body}</Text>
                    <IconButton icon={<FaTrash/>} isRound='true'/>
                </HStack>
            ))}
       </VStack>
    );
};

export default ToDO;