import { NavLink } from 'react-router-dom';
import s from './dialogs.module.scss';
import Dialog from './dialog/dialog';
import Message from './message/message';
import Avatar from './avatar/avatar';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <Dialog name={d.name} id={d.id}></Dialog>);
    let messagesElements = props.state.messageData.map(m => <Message message={m.message}></Message>);
    let avatarElements = props.state.avatarData.map(a => <Avatar src={a.src}></Avatar>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__wrapperAvata}>
                {avatarElements}
            </div>
            <div className={s.dialogs__user}>
                {dialogsElements}
            </div>
            <div className={s.dialogs__messages}>
                {messagesElements}
            </div>
        </div>
    );
}


export default Dialogs;