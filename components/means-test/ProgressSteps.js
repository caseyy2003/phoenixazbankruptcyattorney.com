import React from 'react';

export default function ProgressSteps({ steps, currentStep, onStepSelect }) {
  return (
    <ol style={{ display: 'flex', gap: 8, listStyle: 'none', padding: 0, margin: '0 0 18px 0', flexWrap: 'wrap' }}>
      {steps.map((label, idx) => {
        const isActive = currentStep === idx;
        const isComplete = currentStep > idx;
        const canGoToStep = idx <= currentStep;

        return (
          <li key={label}>
            <button
              type="button"
              onClick={() => canGoToStep && onStepSelect && onStepSelect(idx)}
              disabled={!canGoToStep}
              style={{
                padding: '8px 10px',
                borderRadius: 999,
                border: `1px solid ${isActive || isComplete ? '#1f5c8f' : '#cfd8e3'}`,
                background: isActive ? '#1f5c8f' : isComplete ? '#e7f2fb' : '#fff',
                color: isActive ? '#fff' : '#29465b',
                fontSize: 13,
                fontWeight: 600,
                cursor: canGoToStep ? 'pointer' : 'not-allowed',
                opacity: canGoToStep ? 1 : 0.65,
              }}
            >
              {idx + 1}. {label}
            </button>
          </li>
        );
      })}
    </ol>
  );
}