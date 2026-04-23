import React from 'react';

export default function DisclaimerPanel() {
  return (
    <div
      style={{
        background: '#f8fbff',
        border: '1px solid #d9e7f6',
        borderRadius: 10,
        padding: 14,
        marginBottom: 18,
      }}
    >
      <p style={{ margin: 0, color: '#2c4960', fontSize: 14 }}>
        Educational estimate only. This Chapter 7 means test calculator is not legal advice, does not
        create an attorney-client relationship, and cannot account for every legal nuance. Attorney
        review may still be necessary.
      </p>
    </div>
  );
}