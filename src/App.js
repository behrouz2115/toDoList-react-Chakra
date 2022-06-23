import React,{useState,useEffect}  from 'react';

//component
import ToDO from './Component/ToDO';
import AddToDO from './Component/AddToDO';

//Chakra 
import {Heading, VStack, IconButton, Box} from '@chakra-ui/react';

//icons
import {FaSun,FaMoon} from 'react-icons/fa';


const App = () => {

  const [todos,setToDo]=useState([]);
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

///Delete
  const deletToDo=(id)=>{
    const newList =todos.filter(todo=>
      todo.id!==id
      ) ;
      setToDo(newList);
      console.log(newList);
    return newList;
  }

  //Add to list 
  const addToDo=(todo)=>{
    setToDo([...todos,todo]);
  }  
  
  return (
    <Box bg='#fbb034' height="100%" size="full">
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
         <AddToDO addToDo={addToDo}/>
         {
    
       <ToDO todos={todos} deletToDo={deletToDo}/>
    }
          
    </VStack>
      </Box>
  );
};

export default App;