import React, { useState } from 'react';

import VegoRecipeForm from '../components/forms/VegoRecipeForm';
import FiskRecipeForm from '../components/forms/FiskRecipeForm';
import KottRecipeForm from '../components/forms/KottRecipeForm';
import { useParams } from 'react-router-dom';
import PostForm from '../components/forms/PostForm';

const PostPage = () => {
   
    return (
    <>  
        <PostForm />
    </>
);
    
};

export default PostPage; 