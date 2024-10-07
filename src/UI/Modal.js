import { Fragment } from 'react';
import ReactDom from 'react-dom'
import classes from './Modal.module.css'
const Backdrop = (props) => {
    return <div className={classes.backdrop}/>
};


const ModalOverlay = (props) => {
    return ( <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
        </div>
    )
};
const element =document.getElementById('overlays')

const Modal = (props) => {
 return <Fragment>
{ReactDom.createPortal(<Backdrop/>, element)}
{ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,element)}
</Fragment>
}
export default Modal;