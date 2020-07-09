import React, { Component } from 'react';
import Post from './Post.jsx'

class Posts extends Component {

    // constructor(props) {
    //     super(props);
    // }

    state = {
        posts: [],
        totalLikes:0
    };

    
    componentDidMount(){
      this.state.posts.map((element) => {
        this.setState ({totalLikes:this.state.totalLikes + element.likes})
      });
    }
  //  console.log(this.state.totalLikes)
   changeParentLikes =(event)=>{
     this.setState({likes: this.state.likes+1})
   }

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
              <p>totalLikes: {posts.totalLikes}</p>
              {posts.map( (post)=>{ 
                  
                    
                    return <Post
                      key={posts.id}
                      changeParentLike={this.changeParentLikes}
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