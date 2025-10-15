import React, { useEffect, useState } from "react";
import { api } from "../api";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await api.get(`Students/${id}`);
                setName(res.data.name);
                setEmail(res.data.email);
                setAge(res.data.age);
            } catch (err) {
                console.error(err);
            }
        };
        fetchStudent();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`Students/${id}`, { name, email, age: Number(age) });
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Failed to update student");
        }
    };

    return (
        <div>
            <h2>Edit Student</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input placeholder="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
                <button type="submit">Update Student</button>
            </form>
        </div>
    );
}

export default EditStudent;
