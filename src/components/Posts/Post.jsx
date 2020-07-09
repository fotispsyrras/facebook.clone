import React from 'react';
import Pos from './Pos.jsx'
// import a from './a.jpg'

class Post extends React.Component {
  state = {
    likes: 0,
    alpha: 0,
    date:'',
    id:0,
    content:[],
    shares:0,
    tags:0,
    img:'',
    show: false
  }
  
  // changeLikes = ()=>{
  //   this.setState({likes: this.state.likes +1})
  // }
  componentDidMount(){
    
      
      this.setState((prevState)=>{
          return {
            likes: this.props.likes,
            date:this.props.date,
            id:this.props.id,
            content:this.props.content,
            shares:this.props.shares,
            tags:this.props.tags,
            img:this.props.img
        }
      })
    }
 
//thelei mesa se didmount?
  like = ()=> {
    this.setState({ 
      likes: this.state.likes + 1,
    });
    this.props.changeParentLikes()
  }

  share = ()=> {
    this.setState({ 
      shares: this.state.shares + 1
      
    });
  }

    render() {
      const {content} = this.state;
      console.log(content,content.map)
        return (
            <>
             <div>
                  <div className="panel panel-default">
                    <div className="panel-body">
                     <p>{this.props.date}</p>
                    </div>
                    <div className="panel-body">
                      
                      
                      {this.props.content.map(
                        (content,i) =>{
                        return <Pos content={content} key={i}/>
                      })}

                      <img src={this.props.img} alt="postpic" className="media-object" style={{ width: '100%' }} />

                      <div> 
                      <p className="pull-left">Likes: { this.state.likes } </p> 
                    <p className="pull-right">Shares:{this.state.shares}</p>
                      </div>
                    </div>
                    <div className="panel-footer">
                      <button className="btn btn-default" onClick={this.like}>Like</button> 
                      <button className="pull-right btn btn-secondary" onClick={this.share} >Share</button> 
                    </div>
                  </div>
                 </div>
 
            </>
        )
    }
}

export default Post