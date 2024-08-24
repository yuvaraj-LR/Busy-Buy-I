

const SignUp = () => {

    return(
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-xl-5 col-xxl-5 col-xxxl-4 bg-white p-4 rounded-4 shadow-lg">
                        <div className="d-flex align-items-center pb-3">
                            <img src="/favicon.svg" width="50" alt="Logo" />
                            <h1 className="h4 fw-bold text-muted ms-3 my-auto">Busy Buy</h1>
                        </div>
                        <p className="text-muted pb-4">Sign up for an account on Your Company.</p>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-light text-muted">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </svg>
                                    </span>
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" autoComplete="off" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-light text-muted">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </svg>
                                    </span>
                                    <input type="email" className="form-control" id="email" placeholder="name@company.com" autoComplete="off" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-light text-muted">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-asterisk">
                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            <path d="M12 8v8"></path>
                                            <path d="m8.5 14 7-4"></path>
                                            <path d="m8.5 10 7 4"></path>
                                        </svg>
                                    </span>
                                    <input type="password" className="form-control" id="password" placeholder="••••••••••" autoComplete="new-password" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-4">Sign Up</button>
                            <p className="text-muted text-center">Already have an account? <a href="#" className="text-primary fw-bold text-decoration-none">Login</a></p>
                        </form>
                        <div className="d-flex align-items-center my-4">
                            <hr className="flex-grow-1" />
                            <span className="mx-2 text-muted fw-medium">OR</span>
                            <hr className="flex-grow-1" />
                        </div>
                        <form>
                            <div className="d-flex justify-content-center gap-2">
                                <button type="button" className="btn btn-dark d-flex align-items-center gap-2 w-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                    <span className="mx-auto">GitHub</span>
                                </button>
                                <button type="button" className="btn btn-info d-flex align-items-center gap-2 w-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                    <span className="mx-auto">Twitter</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;