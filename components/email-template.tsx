import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f9f9f9',
        padding: '20px',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          padding: '24px',
        }}
      >
        <h1
          style={{
            fontSize: '20px',
            marginBottom: '16px',
            color: '#333',
          }}
        >
          New Message from {name}
        </h1>

        <p
          style={{
            marginBottom: '12px',
            fontSize: '14px',
            color: '#555',
          }}
        >
          <strong>Email:</strong> {email}
        </p>

        <div
          style={{
            backgroundColor: '#f3f4f6',
            padding: '16px',
            borderRadius: '6px',
            whiteSpace: 'pre-wrap',
            fontSize: '14px',
            color: '#444',
            lineHeight: '1.5',
          }}
        >
          {message}
        </div>

        <p
          style={{
            marginTop: '24px',
            fontSize: '12px',
            color: '#888',
            textAlign: 'center',
          }}
        >
          This message was sent from your website contact form.
        </p>
      </div>
    </div>
  );
}
