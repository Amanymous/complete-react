import React,{ Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/Full post/FullPost';
import NewPost from '../../components/New Post/NewPost';

class Blog extends Component{
    render(){
        return(<div>
            <section className="Posts">
                <Post/>
                <Post/>
                <Post/>
            </section>
            <section>
                <FullPost/>
            </section>
            <section>
                <NewPost/>
            </section>
            </div>
        )
    }
}
export default Blog;