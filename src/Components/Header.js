import React, { Fragment,useState } from 'react';
import Axios from 'axios';
import Recipes  from './Recipes';
import {BsSearch} from 'react-icons/bs';
import './Header.css';
import {FaBowlFood} from 'react-icons/fa6';
import { Container } from 'react-bootstrap';

const APP_ID = "cb02bef3";
const APP_KEY = "41253258756c5b731b79531f8bec7213";


const Header  = () => {
    const [timeoutId,setTimeoutID] = useState();
    const [recipeList, updateRecipeList] = useState([]);
    const [searchQuery, updateSearchQuery] = useState("");
    const fetchRecipe = async (searchString) => {
        const response = await Axios.get(
          `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
        );
        updateRecipeList(response.data.hits);
      };
    const searchText = (e) => {
        e.preventDefault();
        clearTimeout(timeoutId);
        updateSearchQuery(e.target.value);
        const timeout = setTimeout(()=>fetchRecipe(e.target.value),1000);
        setTimeoutID(timeout);
    };
    return (<Fragment>
        <header className='header'>
        <div className='htext'> Recipe Search Website <FaBowlFood /></div>
            <form className='form'>
           <BsSearch className='search' />
            <input type='text' value={searchQuery} placeholder='Enter your receipe name' className='input' onChange={searchText} />
            
            </form>
        <div className='fab'>Favourits</div>
        </header>
        <div className='body'>
            <Container fluid className='listcontainer'>
                {recipeList && recipeList.map((Obj,index)=>(
                   <Recipes Obj = {Obj} key={index}/>
))}
                
            </Container>
        </div>
    </Fragment>)
};

export default Header;