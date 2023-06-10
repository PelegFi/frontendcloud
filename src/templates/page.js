import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiurl from '../config';
import Dish from './dish';
import { List, ListItem, ListItemText } from '@mui/material';

function Page() {
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getDishes(null);
  }, []);

  function getCategories() {
    axios.get(`${apiurl}/categories`).then((response) => setCategories(response.data));
  }

  function getDishes(category_id) {
    if (category_id===null){
      axios.get(`${apiurl}/dishes`).then((response) => setDishes(response.data));
    }
    else {
      axios.get(`${apiurl}/dishes?category_id=${category_id}`).then((response) => setDishes(response.data));
    }
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <div style={{ width: '200px', backgroundColor: '#f5f5f5', paddingTop:'100px', height: '100vh', borderRight: '1px solid #ddd'}}>
        <List component="nav">
          {categories.map((category, index) => (
            <ListItem
              key={category.id}
              button
              selected={value === index}
              onClick={() => {
                setValue(index);
                getDishes(category.id);
              }}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: value === index ? '#ddd' : 'transparent' }}
            >
              <img style={{ maxWidth: '50px', maxHeight: '50px', marginRight: '10px' }} src={category.image} alt={category.name} />
              <ListItemText primary={category.name} />
            </ListItem>
          ))}
        </List>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px'  }}>
        {dishes.length > 0 ? (
          dishes.map((dish) => (
            <Dish
              key={dish.id}
              id={dish.id}
              name={dish.name}
              image={dish.image}
              is_vegeterian={dish.is_vegeterian}
              is_gluten_free={dish.is_gluten_free}
              description={dish.description}
            />
          ))
        ) : (
          <h1>Choose a category</h1>
        )}
      </div>
    </div>
  );
}

export default Page;
