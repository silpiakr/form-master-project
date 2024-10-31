import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} className="border border-gray-700 rounded-lg px-6 py-2 bg-transparent mb-2" type="text" name="name" placeholder="Enter your Name" required />
                <br />
                <input ref={emailRef} className="border border-gray-700 rounded-lg px-6 py-2 bg-transparent mb-2" type="text" name="email" defaultValue={'silpi@gmail.com'} placeholder="Enter your email" required />
                <br />
                <input ref={passwordRef} className="border border-gray-700 rounded-lg px-6 py-2 bg-transparent mb-2" type="text" name="phone" placeholder="Enter your phone number" required />
                <br />
                <input className="btn hover:bg-green-400 border hover:text-white font-bold border-gray-700 px-6 py-2 bg-transparent mb-2" name="" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;