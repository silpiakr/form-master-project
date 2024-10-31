
const ReuseableForm = ({formTitle, handleSubmit, submitBtnText='Submit', children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
           name: e.target.name.value,
           email: e.target.email.value,
           password: e.target.password.value
        }
        handleSubmit(data);
    }
    return (
        <div className="py-12">
            {/* <h2>{formTitle}</h2> */}
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input className="border border-gray-700 rounded-lg px-6 py-2 bg-transparent mb-2" type="text" name="name" placeholder="Enter your Name" />
                <br />
                <input className="border border-gray-700 rounded-lg px-6 py-2 bg-transparent mb-2" type="text" name="email" placeholder="Enter your email" />
                <br />
                <input className="border border-gray-700 rounded-lg px-6 py-2 bg-transparent mb-2" type="text" name="password" placeholder="password" />
                <br />
                <input className="btn hover:bg-green-400 border hover:text-white font-bold border-gray-700 px-6 py-2 bg-transparent mb-2" name="" type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableForm;