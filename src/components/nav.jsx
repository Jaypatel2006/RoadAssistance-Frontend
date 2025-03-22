import React from 'react'

const nav = () => {
  return (
    <>
    <div classanme="flex ">
      <div>
      <img src="logo.jpg" alt="Logo's Image" />
      <a>Home</a>
      <a>About</a>
      <a>Product</a>
      <a>Cart</a>
      <a>Support</a>
      </div>
      <div>
        <button><a> Sign up </a></button>
        <button><a> Log In </a></button>
      </div>
    </div>

    </>
  )
}

export default nav