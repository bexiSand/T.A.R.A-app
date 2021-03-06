import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentLink from './CommentLink';
import Gryta from './Ikoner/Gryta';


import PostLike from './PostLike';
import { loadRecipeData } from '.././redux/categorySlice';


const categories = {
    vego: "60828412282ecd001e7dd309",
    fisk: "608284a6282ecd001e7dd30c",
    kött: "60828441282ecd001e7dd30b"
};

const RecipeDiv = ({kategori}) => {

    const categoryId = categories[kategori];
    let categoryUrl;
    const recipeData = useSelector(state => state.category.data); 

    const dispatch = useDispatch();
    categoryUrl = `https://forum-api-jkrop.ondigitalocean.app/category/${categoryId}/thread`;
   


    useEffect(() => {
        
        if (categoryUrl) {
            dispatch(loadRecipeData(categoryUrl));
        }        
    }, [ categoryUrl ]);

   
   

    if (!categoryId){
        return <Gryta />
    } else {
    return (
    <>
        { 
        recipeData.map(recipe => 
        <div key={recipe._id} className="card" style={{ marginBottom: '2em' }}>
            <div className="card-body">

                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.content}</p>
            
        <div>
            <div style={{ float:'left', marginRight: '10px'}}>
                {recipe.likes.length}</div>
                <PostLike recipeId={recipe._id} numberLikes={recipe.likes.length}/>
            <div style={{ float:'left', marginRight: '10px'}}>
                {recipe.comments.length}</div>
                <CommentLink recipeId={recipe._id} recipeTitle={recipe.title} />
        </div>


            </div>
        </div>
        ).reverse()}

    </>

    );
    }};

 
export default RecipeDiv;