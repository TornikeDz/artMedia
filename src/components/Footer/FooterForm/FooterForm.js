import './FooterForm.css';
import { useState } from 'react';

const FooterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    
    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleComment = (event) => {
        setComment(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const contact = {
            name,
            email,
            comment
        }
        console.log(contact)
    }

    return(
        <form className="footer-form" onSubmit={handleSubmit}>
                <div className="footer-form-header">
                    <input type="name" 
                        placeholder="Name" 
                        onChange={handleName}
                        value={name}
                    />
                    <input type="email" 
                        placeholder="Email" 
                        onChange={handleEmail}
                        value={email}
                    />
                </div>
                <div className="footer-form-footer">
                    <textarea className="footer-form-footer-textarea" 
                        name="postContent" 
                        placeholder="Text" 
                        onChange={handleComment}
                        value={comment}
                    />
                    <button className="footer-form-footer-submit" type="submit">Send</button>
                </div>
            </form>
    )
}

export default FooterForm;