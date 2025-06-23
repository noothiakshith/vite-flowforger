import React from 'react';

function BlockCard({ id, label, description, type }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '12px',
    marginBottom: '12px',
    background: 'linear-gradient(to bottom right, #ffffff, #f9f9f9)',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s ease',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  };

  const labelStyle = {
    fontSize: '15px',
    fontWeight: '600',
    marginBottom: '4px',
    color: '#222',
  };

  const descriptionStyle = {
    fontSize: '13px',
    color: '#555',
    marginBottom: '8px',

    
  };

  const tagStyle = {
    fontSize: '11px',
    padding: '2px 6px',
    borderRadius: '8px',
    display: 'inline-block',
    border: '1px solid',
    backgroundColor: type === 'trigger' ? '#e0eaff' : '#e0ffe0',
    color: type === 'trigger' ? '#0033aa' : '#007700',
    borderColor: type === 'trigger' ? '#99bbff' : '#99dd99',
  };

  return (
    <div
      style={cardStyle}
      onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)')}
      onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)')}
      draggable='true'
      onDragStart={(e) => {
  e.dataTransfer.setData("blockId", id);  // lowercase key is best practice
}}

    >
      <h3 style={labelStyle}>{label}</h3>
      <p style={descriptionStyle}>{description}</p>
      <span style={tagStyle}>{type.toUpperCase()}</span>
    </div>
  );
}

export default BlockCard;
