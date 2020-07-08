import React, { Component } from 'react';
import Post from './Post.jsx'

class Posts extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        posts: []
    };


    componentDidMount() {

        console.log("componentDidMount()");

        fetch("http://localhost:3003/posts")
            .then((res) => {
                return res.json();
            })
            .then((data)=>{
                
                this.setState((prevState)=>{
                  console.log("setState");
                  return {
                    posts: data
                  }
                })
              });

    }

    componentDidUpdate(){
        console.log("componentDidUpdate()");
      }

    render() {
        // state = {
        //     posts : { posts:5}
        // }
        const { posts } = this.state;
        // το ιδιο με απο πανω : const posts = this.state.posts;
        console.log(posts)
        return (
            <> 
              {posts.map( (post)=>{ 
                  
                    
                    return <Post
                      key={posts.id}
                      // θα μπορουσα ολα μαζι τα υπολοιπα data={posts}
                      id={post.id} 
                      date={post.date}
                      content={post.content} 
                      likes={post.likes} 
                      shares={post.shares} 
                      tags={post.tags} 
                      img={post.img}/>;
                  } 
              )}
            </>
        );
    }
        
}

    export default Posts