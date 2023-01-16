import { useState } from "react";
import Post from "../../components/post";

const Dashboard = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            name: 'Sam Fletcher',
            date: '19 February at 10:32',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            comments: [
                { id: 1, name: 'Rutrum Augue', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
            ]
        },
        {
            id: 2,
            name: 'Dolor Lobortis',
            date: '19 February at 10:32',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            comments: [
                { id: 2, name: 'Dana Sharwarma', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                { id: 3, name: 'James Doakes', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
            ]
        }
    ])

    return (
        <>
            {posts.map(post => <Post key={post.id} name={post.name} date={post.date} content={post.content} comments={post.comments} />)}
        </>
    );
}

export default Dashboard