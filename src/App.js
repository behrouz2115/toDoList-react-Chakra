import React from 'react';

//component
import ToDO from './Component/ToDO';
import AddToDO from './Component/AddToDO';

//Chakra 
import {Heading, VStack, IconButton, Box} from '@chakra-ui/react';

//icons
import {FaSun,FaMoon} from 'react-icons/fa';

const App = () => {
  return (
    <Box bg='#fbb034'>
    <VStack p={5} >
         <IconButton icon={<FaSun/>} isRound='true'
                                     alignSelf='flex-end'
                                     size='lg'/>
         <Heading mb='5' 
                      size='2xl'
                      color='#fff'
                      textShadow='3p 1p 2p rgb(93,122,93)' >
            Todo List
         </Heading>
         <ToDO/>
         <AddToDO/>
          
    </VStack>
      </Box>
  );
};

export default App;