import React from 'react';

interface ButtonProps {
  text: string;
  isActive?: boolean;
  onClick: () => void;
  buttonType?: 'delete' | 'edit' | 'add' | 'update';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, isActive, onClick, buttonType, disabled }) => {
  const getButtonStyles = () => {
    if (disabled) {
      return 'bg-gray-400 cursor-not-allowed border-gray-500';
    }

    switch (buttonType) {
      case 'delete':
        return 'bg-red-600 hover:bg-red-700 border-red-700';
      case 'edit':
        return 'bg-yellow-600 hover:bg-yellow-700 border-yellow-700';
      case 'add':
        return 'bg-blue-600 hover:bg-blue-700 border-blue-700';
      case 'update':
        return 'bg-green-600 hover:bg-green-700 border-green-700';
      default:
        return 'hover:text-slate-400 ';
    }
  };

  return (
    <button
      className={`text-white rounded-lg px-3 py-2 ml-2  ${getButtonStyles()} ${isActive ? 'border-b-2 rounded-none' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
