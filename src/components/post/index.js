import Card from "../card"
import Comment from "../comment"
import "./style.css"

const Post = ({ name, date, content, comments = [], likes = 0 }) => {
    const userInitials = name.match(/\b(\w)/g)

    return (
        <Card>
            <article className="post">
                <section id='post-details'>
                    <div className="profile-icon"><p>{userInitials}</p></div>

                    <div>
                        <p>{name}</p>
                        <small>{date}</small>
                    </div>
                    
                    <div className="edit-icon">
                        <p>...</p>
                    </div>
                </section>

                <section>
                    <p>{content}</p>
                </section>

                <section className="post-interactions-container">
                    <div className="post-interactions">
                        <div>Like</div>
                        <div>Comment</div>
                    </div>

                    <p>{!likes && 'Be the first to like this'}</p>
                    
                </section>

                <section>
                    {comments.map(comment => <Comment key={comment.id} name={comment.name} content={comment.content} />)}
                </section>
            </article>
        </Card>
    )
}

export default Post