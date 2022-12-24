import styles from './postList.module.css'
import Post from '../post/post'

function PostList() {
    const posts = [
        {id: 1, title: "Lorem, ipsum.", descrition: "Lorem ipsum dolor sit amet.", longread: false},
        {id: 2, title: "Lorem, lorem.", descrition: "Lorem ipsum dolor sit.", longread: true}
    ]

    const addPost = (e) => {

    }
    

    return (
        <div className={styles.container}>
            <form className={styles.postForm}>
                <input type="text" name="title" placeholder='Заголовок поста'/>
                <input type="text" name="description" placeholder='Короткое описание'/>
                <label> Длинный пост: <input type="checkbox" name="longpost" /></label>
                <label> Количество слов: <input type="number" name="wordscount"/></label>
                <button>Добавить пост</button>
            </form>

            <div className="posts">
                {posts.map( p => 
                    <Post key={p.id} post={p} />
                )}
            </div>
        </div>
    )
}

export default PostList;



