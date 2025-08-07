import React from "react";

function Signup() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#e6ecf0'
    }}>
      <form style={{
        background: '#fff',
        padding: '32px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        minWidth: '320px'
      }}>
        <h2 style={{textAlign: 'center', marginBottom: '24px'}}>Signup</h2>
        <div style={{marginBottom: '16px'}}>
          <label htmlFor="username" style={{display: 'block', marginBottom: '6px'}}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div style={{marginBottom: '16px'}}>
          <label htmlFor="email" style={{display: 'block', marginBottom: '6px'}}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div style={{marginBottom: '24px'}}>
          <label htmlFor="password" style={{display: 'block', marginBottom: '6px'}}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            background: '#2d9c6a',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
