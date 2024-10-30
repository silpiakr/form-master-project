import { useState } from "react";

const ControlFrom = () => {
    const [name, setName] = useState('Silpi Akter');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 charecter');
        }
        else {
            setError('');
        }

        console.log(name, email, password)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name={name} onChange={handleNameChange} className="border border-gray-700 rounded-full px-6 py-2 bg-transparent mb-2" type="text" placeholder="Enter your Name" />
                <br />
                <input onChange={handleEmailChange} className="border border-gray-700 rounded-full px-6 py-2 bg-transparent mb-2" type="email" name="email" placeholder="Enter your email" />
                <br />
                <input onChange={handlePasswordChange} className="border border-gray-700 rounded-full px-6 py-2 bg-transparent mb-2" type="password" name="password" placeholder="password" />
                {
                    error && <p className="text-red-600 font-semibold">{error}</p>
                }
                <br />
                <input className="btn hover:bg-green-400 border hover:text-white font-bold border-gray-700 px-6 py-2 bg-transparent mb-2" name="" type="submit" value="submit" />
            </form>
            <hr className="my-6" />
        </div>
    );
};

export default ControlFrom;