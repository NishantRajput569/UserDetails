import React, { useState } from "react";
import { motion } from "framer-motion";
import "./UserForm.css";

function UserForm() {

    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        dob: "",
        gender: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        qualification: "",
        skills: "",
        image: null,
        terms: false,
    });

    function handleChange(e) {
        const { name, value, type, checked, files } = e.target;

        setUser({
            ...user,
            [name]:
                type === "checkbox"
                    ? checked
                    : type === "file"
                    ? files[0]
                    : value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(user);
        alert("Registration Successful");
    }

    return (
        <div className="background">

            <motion.div
                className="form-card"
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >

                <motion.h2
                    className="text-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    User Registration
                </motion.h2>

                <form onSubmit={handleSubmit}>

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="fullname"
                                value={user.fullname}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                value={user.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                value={user.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Date of Birth</label>
                            <input
                                type="date"
                                className="form-control"
                                name="dob"
                                value={user.dob}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Gender</label>

                            <select
                                className="form-select"
                                name="gender"
                                value={user.gender}
                                onChange={handleChange}
                            >
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Qualification</label>

                            <select
                                className="form-select"
                                name="qualification"
                                value={user.qualification}
                                onChange={handleChange}
                            >
                                <option>Select Qualification</option>
                                <option>10th</option>
                                <option>12th</option>
                                <option>Diploma</option>
                                <option>B.Tech</option>
                                <option>M.Tech</option>
                                <option>MBA</option>
                            </select>
                        </div>

                        <div className="col-12 mb-3">
                            <label>Address</label>

                            <textarea
                                className="form-control"
                                rows="3"
                                name="address"
                                value={user.address}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>City</label>
                            <input
                                type="text"
                                className="form-control"
                                name="city"
                                value={user.city}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>State</label>
                            <input
                                type="text"
                                className="form-control"
                                name="state"
                                value={user.state}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Country</label>
                            <input
                                type="text"
                                className="form-control"
                                name="country"
                                value={user.country}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Pincode</label>
                            <input
                                type="number"
                                className="form-control"
                                name="pincode"
                                value={user.pincode}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label>Skills</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="HTML, CSS, React..."
                                name="skills"
                                value={user.skills}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-12 mb-3">
                            <label>Profile Picture</label>
                            <input
                                type="file"
                                className="form-control"
                                name="image"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-12 mb-4">

                            <input
                                type="checkbox"
                                className="form-check-input me-2"
                                name="terms"
                                checked={user.terms}
                                onChange={handleChange}
                            />

                            Accept Terms & Conditions

                        </div>

                    </div>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn btn-primary w-100"
                    >
                        Register
                    </motion.button>

                </form>

            </motion.div>

        </div>
    );
}

export default UserForm;