import Comment from "../comment"

const Post = ({ name, date, content, comments = [] }) => {
    return (
        <>
            <h4>{name}</h4>
            <small>{date}</small>
            <p>{content}</p>

            {comments.map(comment => <Comment key={comment.id} name={comment.name} content={comment.content} />)}
        </>
    )
}

export default Post