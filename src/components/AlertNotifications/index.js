import {AiFillCheckCircle} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="bg-container">
    <h1 className="nf">Alert Notifications</h1>
    <Notification>
      <div className="notification-box">
        <AiFillCheckCircle className="circle" />
        <div className="info-box">
          <h1 className="head">Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
        <GrFormClose className="close" />
      </div>
    </Notification>
    <Notification>
      <div className="notification-box">
        <RiErrorWarningFill className="circle error" />
        <div className="info-box">
          <h1 className="error">Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
        <GrFormClose className="close" />
      </div>
    </Notification>
    <Notification>
      <div className="notification-box">
        <MdWarning className="circle warning" />
        <div className="info-box">
          <h1 className="warning">Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
        <GrFormClose className="close" />
      </div>
    </Notification>
    <Notification>
      <div className="notification-box">
        <MdInfo className="circle info" />
        <div className="info-box">
          <h1 className="info">Info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
        <GrFormClose className="close" />
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
