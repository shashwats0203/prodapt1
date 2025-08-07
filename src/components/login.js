import React from "react";

function Login() {
  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#f0f2f5'
    }}>
      <form style={{
        background: '#fff',
        padding: '32px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        minWidth: '320px'
      }}>
        <h2 style={{textAlign: 'center', marginBottom: '24px'}}>Login</h2>
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
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
