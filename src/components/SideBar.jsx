import React from 'react';
import BlockCard from './BlockCard';
import useBlockStore from '../store/blockstore';

function Sidebar() {
  const blocks = useBlockStore((state) => state.getAllBlocks());

  const triggers = blocks.filter((b) => b.type === 'trigger');
  const actions = blocks.filter((b) => b.type === 'action');

  const sidebarStyle = {
    width: '280px',
    height: '100vh',
    padding: '16px',
    overflowY: 'auto',
    backgroundColor: '#ffffff',
    borderRight: '1px solid #ccc',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const sectionStyle = {
    marginBottom: '24px',
  };

  const headingStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '12px',
    paddingBottom: '4px',
    borderBottom: '1px solid #ddd',
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  return (
    <div style={sidebarStyle}>
      <div style={sectionStyle}>
        <h2 style={{ ...headingStyle, color: '#4B0082' }}>🔶 Triggers</h2>
        {triggers.map((block) => (
          <BlockCard key={block.id} {...block}/>
        ))}
      </div>

      <div style={sectionStyle}>
        <h2 style={{ ...headingStyle, color: '#006400' }}>🔷 Actions</h2>
        {actions.map((block) => (
          <BlockCard key={block.id} {...block} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
