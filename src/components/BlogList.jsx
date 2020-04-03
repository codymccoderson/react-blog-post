import React from 'react';
import { Link } from 'react-router-dom';

class BlogList extends Component {
    state = {
        allOfThePosts: []
    }

    async componentDidMount () {
        const allOfThePosts = await this.loadData();
        this.setState({
            allOfThePosts
        });
    }

    loadData = async () => {
        const url = 'http://localhost:3000/v1/all';
        const response = await fetch(url);
        const data = response.json();
        return data;
    }

    render () {
        const { allOfThePosts } = this.state;

        return (
            <div>
                <h2>Apocalpyse Now Blog</h2>
                <ul>
                    {allOfThePosts.map(post => {
                        return(
                        <li key={`posts/${post.id}`}>
                            <Link to={`posts/${post.id}`}>{post.title}
                            </Link>
                        </li>
                    );
                    })}
                </ul>
            </div>
        )
    }
}

export default BlogList;