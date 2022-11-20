import s from './news.module.scss';


const News = (props) => {
    return (
        <div className={s.News}>
            <p>First news.</p>
            <p>Second news.</p>
            <p>Third news.</p>
        </div>
    );
}


export default News;