import { useEffect, useState } from "react";
import Post from "../post";
import { getPosts } from "../../service/apiClient";

const Posts = ({ postCreated }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then((r) => {
            setPosts(r.sort((a, b) => b.id - a.id))
        })
    }, [postCreated])

    return (
        <>
            {posts ? posts.map(post => {
                    return <Post
                        key={post.id}
                        name={`${post.user.profile.firstName} ${post.user.profile.lastName}`}
                        date={post.createdAt}
                        content={post.content}
                        comments={post.comments}
                    />
            }) : <p>No posts to show.</p>}
        </>
    )
}

export default Posts