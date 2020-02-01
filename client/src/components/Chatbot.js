import React, { Component } from 'react';
import { FaCommentAlt , FaTimes , FaPaperPlane} from 'react-icons/fa';
import Speech from 'react-speech';

class Chatbot extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                {/* <Speech text="Welcome to react speech" /> */}
                <div id="chat-circle" class="btn btn-raised circle_index3">
                    <i><FaCommentAlt/></i>
                </div>
                <div class="chat-box chat_box_3">
                    <div class="chat-box-header">
                        ChatBot
      <span class="chat-box-toggle"><i><FaTimes/></i></span>
                    </div>
                    <div class="chat-box-body chat_msg_box22">
                        <div class="chat-box-overlay">
                        </div>
                        <div class="chat-logs">

                        </div>
                    </div>
                    <div class="chat-input">
                        <form>
                            <input type="text" id="chat-input" placeholder="Send a message..." />
                            <button type="submit" class="chat-submit" id="chat-submit"><i><FaPaperPlane/></i></button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Chatbot;