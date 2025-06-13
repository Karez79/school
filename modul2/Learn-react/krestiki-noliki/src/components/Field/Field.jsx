import React from 'react';
import FieldLayout from './FieldLayout';

export default function Field({ field, onCellClick }) {
  return <FieldLayout field={field} onCellClick={onCellClick} />;
}
