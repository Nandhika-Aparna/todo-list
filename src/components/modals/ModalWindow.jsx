import './ModalWindow.scss';
import ModelClosebtn from './ModelClosebtn';
 
function ModalWindow({children}) {
    return (
    <>
        <div className="modal-wrapper" aria-modal="true"
            role="dialog" tabIndex="-1">
            <div className="inner">
           <ModelClosebtn/>
                {children}
            </div>
        </div>
    </>
    )
  }
  
  export default ModalWindow