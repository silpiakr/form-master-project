
const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('form submit')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border border-gray-700 rounded-full px-6 py-2 bg-transparent mb-2" type="text" name="name" placeholder="Enter your Name" />
                <br />
                <input className="border border-gray-700 rounded-full px-6 py-2 bg-transparent mb-2" type="text" name="email" placeholder="Enter your email" />
                <br />
                <input className="border border-gray-700 rounded-full px-6 py-2 bg-transparent mb-2" type="text" name="phone" placeholder="Enter your phone number" />
                <br />
                <input className="btn hover:bg-green-400 border hover:text-white font-bold border-gray-700 px-6 py-2 bg-transparent mb-2" name="" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;