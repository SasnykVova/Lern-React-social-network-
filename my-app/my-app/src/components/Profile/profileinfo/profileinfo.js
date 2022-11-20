import s from './profileinfo.module.scss';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.aboutuser}>
                <div className={s.avatardiv}>
                    <img className={s.avatar} src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" alt="Avatar"></img>
                </div>
                <div className={s.blockuser}>
                    <div className={s.blockuser__name}>Sasnyk Volodymyr</div>
                    <div>Adress: Dolyna</div>
                    <div>Street: Shevchenka</div>
                    <div>Number: 0990963186</div>
                </div>
            </div>
        </div>
    );
};


export default ProfileInfo;