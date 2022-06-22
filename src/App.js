import React,{useState,useEffect}  from 'react';

//component
import ToDO from './Component/ToDO';
import AddToDO from './Component/AddToDO';

//Chakra 
import {Heading, VStack, IconButton, Box} from '@chakra-ui/react';

//icons
import {FaSun,FaMoon} from 'react-icons/fa';


const App = () => {
  const initialstate =[
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

  const [todo,setToDo]=useState(initialstate);

///Delete
  const deletToDo=(id)=>{
    const newList =todo.filter(todo=>{
      return todo.id === id;
    }) ;
    setToDo(newList);
    console.log(newList);
  }
  
  return (
    <Box bg='#fbb034' height="100%">
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
         <AddToDO/>
         <ToDO todo={todo} deletToDo={deletToDo}/>
          
    </VStack>
      </Box>
  );
};

export default App;