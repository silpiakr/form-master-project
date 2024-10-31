import useInputState from "../../hook/useInputState";


const HookForm = () => {

    // const [name, handleNameChange] = useInputState('rojoni')

    // const [name, handleNameChange] = useInputState('rojoni');

    const emailState = useInputState('rojoni@gmail.com')

    const handleSubmit = e => {
        e.preventDefault();
        // console.log('form added', name)
        console.log('form added', emailState.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} className="border border-gray-700 rounded-full px-6 py-2 bg-transparent mb-2" type="text" name="name" placeholder="Enter your Name" /> */}
                <br />
                <input {...emailState} className="border border-gray-700 rounded-full px-6 py-2 bg-transparent mb-2" type="text" name="email" placeholder="Enter your email" />
                <br />
                <input className="border border-gray-700 rounded-full px-6 py-2 bg-transparent mb-2" type="text" name="password" placeholder="password" />
                <br />
                <input className="btn hover:bg-green-400 border hover:text-white font-bold border-gray-700 px-6 py-2 bg-transparent mb-2" name="" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;