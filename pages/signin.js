import Head from 'next/head';
import Link from 'next/link';
import React from 'react'

const SignIn = () => {
  return (
    <div>
      <Head>
        <title>Sign in Page</title>
      </Head>
      <div className='mx-auto my-4' style={{ maxWidth: '500px' }}>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-dark w-100">Login</button>
          <p className="my-2"> You do not have an account?
            <Link href="/register" legacyBehavior><a style={{ color: 'crimson' }}>Register</a></Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignIn;