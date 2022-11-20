import MyPost from './MyPosts/MyPost';
import ProfileInfo from './profileinfo/profileinfo';
import s from './Profile.module.scss';


const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <div className={s.Profile__image}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/
jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Vulcan"></img>
            </div>
            <ProfileInfo/>
            <MyPost state={props.state}/>
        </div>
    );
}
export default Profile;

