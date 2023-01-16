import { useEffect, useState } from "react";
import Post from "../../components/post";
import { getPosts } from "../../service/apiClient";

const Dashboard = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(setPosts)
    }, [])

    return (
        <>
            {posts.map(post => <Post key={post.id} name={`${post.author.firstName} ${post.author.lastName}`} date={post.createdAt} content={post.content} comments={post.comments} />)}
        </>
    );
}

export default Dashboard