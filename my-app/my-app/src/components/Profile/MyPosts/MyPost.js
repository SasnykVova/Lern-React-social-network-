import React from 'react';
import s from './MyPost.module.scss';
import Post from './Post/Post';

let newPostElement = React.createRef();
let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
};

const MyPost = (props) => {
let postElement = props.state.postData.map ( p => <Post message={p.message} likeCounts={p.likeCounts}></Post>);


    return (
        <div className={s.MyPost}>
            <h3 className={s.MyPost__title}>My posts</h3>
            <div>
                <div className={s.MyPost__wrapperTextarea}>
                    <textarea ref={newPostElement} className={s.MyPost__textarea}></textarea>
                </div>
                <div className={s.MyPost__wrapperButton}>
                    <button onClick={addPost} className={s.MyPost__button}>Add post</button>
                </div>
            </div>
            <div className={s.MyPost__posts}>
                {postElement}
            </div>
        </div>
    );
}


export default MyPost;