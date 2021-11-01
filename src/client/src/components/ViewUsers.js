import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewUsers(){


    return (
      <div className="ViewUsers">
       <div className="list">
      

       

       </div>

            <div className="col-md-11">
            
            <Link to={'/add-new-user'}>
            <button > Add New User </button>
            </Link>
             
            </div>
      </div>
    );
  }


export default ViewUsers;
