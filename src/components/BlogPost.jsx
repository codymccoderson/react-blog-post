import React, { Component } from 'react';

class BlogPost extends Component {
    state = {
        thisOnePost: []
    }

    async componentDidMount () {
        const thisOnePost = await this.loadData();
        this.setState({
            thisOnePost
        });
    }

    loadData = async () => {
        const PostId = this.props.match.params.p_id;
        const url = `http://localhost:3000/v1/posts/${PostId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    }

    render () {
        console.log(this.props);
        const { thisOnePost } = this.state;
        return (
            <div>
                <h2>{thisOnePost.title}</h2>
                <p>{thisOnePost.content}</p>
            </div>
        )
    }
}

export default BlogPost;