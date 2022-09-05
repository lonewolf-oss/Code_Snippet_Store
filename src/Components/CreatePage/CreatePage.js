import { useState } from "react";
import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";

const CreatePage = () => {

    const username = useSelector(state=>state.user_name);
    const [codeTitle, setTitle] = useState("");
    const [codeContent, setContent] = useState("");

    const navigate=useNavigate();

    async function createData(event) {

        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/createData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    username,
                    codeTitle,
                    codeContent,
                }
            ),
        }).then(() => { navigate('/userpage') }).catch((err) => { console.log("error occured") });
    }

    return (
        <div className="block min-h-screen py-2 border-l-8 border-r-8 border-amber-400" style={{ borderLeft: "32px solid #0a0024", borderRight: "32px solid #0a0024" }}>
            <form onSubmit={createData} className="block w-3/4 mx-auto">
                <div className="block py-4 w-3/4 mx-auto">
                    <label className="block text-xl font-bold my-3" >Code Title</label>
                    <input onChange={(e) => { setTitle(e.target.value) }} type="text" name="code_title" className="font-semibold rounded-md p-3 w-full bg-transparent border-2 border-black focus:outline-0" value={codeTitle} />
                </div>
                <div className="block py-4 w-3/4 mx-auto">
                    <label className="block text-xl font-bold my-3" >Code Content</label>
                    <textarea onChange={(e) => { setContent(e.target.value) }} type="text-area" name="code_content" className=" font-semibold rounded-md p-4 w-full h-72 bg-transparent border-2 border-black focus:outline-0 bg-black text-white" value={codeContent}></textarea>
                </div>
                <div className="block text-center">

                    <button className="border-2 border-black font-bold rounded-lg px-10 py-2 my-2 hover:bg-violet-500 transition-bg duration-300" type='submit'>Create</button>

                </div>
            </form>
        </div>
    )
}

export default CreatePage;