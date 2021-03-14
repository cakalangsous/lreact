import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const BASE_URL = 'http://localhost:8000/api';

    const [blogs, setBlog] = useState(null);

    useEffect(() => {
        axios.get(BASE_URL+'/blog').then(res => {
            const result = res.data.data;
            setBlog(result);
        })
    }, []);

    const renderBlog = () => {
        if(!blogs) {
            return (
                <tr>
                    <td colSpan="5">Loading Data...</td>
                </tr>
            );
        }

        if (blogs.length===0) {
            return (
                <tr>
                    <td colSpan="5">No Data</td>
                </tr>
            );
        }

        return blogs.map((blog, i) => (
            <tr key={i}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.content}</td>
                <td>{blog.created_at}</td>
                <td width="15%">
                    <Link className="btn btn-warning mr-2" to={`/edit/${blog.id}`}>Edit</Link>
                    <Link className="btn btn-danger" to="/delete">Delete</Link>
                </td>
            </tr>
        ))
    }

    return (
        <div className="container">
            <h3 className="mb-3">List Blog</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Created</th>
                        <th width="15%">Action</th>
                    </tr>
                </thead>
                <tbody>
                   {renderBlog()}
                </tbody>
            </table>
        </div>
    )
}

export default Home;
