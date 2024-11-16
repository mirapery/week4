import { useState } from 'react';
import Title from "./Title";

function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        const userInformation = {
            name,
            email,
            password,
            submittedOn: new Date()
        };

        console.log(userInformation);

        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <section className='section' id='registration'>
            <Title title="register" subTitle="now" />

            <div className="section-center featured-center">
                <form onSumbit={onSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input id='name' type='text' onChange={e => setName(e.target.value)} value={name} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input id='email' type='text' onChange={e => setEmail(e.target.value)} value={email} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input id='password' type='text' onChange={e => setPassword(e.target.value)} value={password} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Registration;