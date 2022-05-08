import React from 'react';

const Blog = () => {
    return (
        <div>
            <h4>Welcome to my blog</h4>
            {/* 13.1 Difference between javascript and nodejs

13.2 When should you use nodejs and when should you use mongodb

13.3 Differences between sql and nosql databases. */}
        <h5>Difference between javascript and nodejs</h5>
        <p>Nodejs:nodejs is a runtime environment built on google v8 engine that runs outside the browser </p>
        <p>JavaScript: it is a high level programming language that is mostly used in web technology and to make our website interactive </p>


        <h5>When should you use nodejs and when should you use mongodb</h5>
        <p>nodejs:it is used to build the backend side or server side and helps to connect to the database </p>
        <p>mongodb:It is one kind of database . and it helps to store our data .By the help of node we can connect mongodb </p>
        <h5> Differences between sql and nosql databases. </h5>
        <p>sql:sql database is primarily called relational database .And it is table based and vertically scalable  </p>
        <p>nosql: nosql database is primarily called non-relational database.And it is document,key-value,graph based and horizontally scalable</p>
        </div>
        
    );
};

export default Blog;