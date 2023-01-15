import React from 'react';

type Props = {
  Icon: any;
  text: string;
};

const ContactInfo = ({ Icon, text }: Props) => {
  return (
    <div className="flex items-center space-x-2 text-white">
      <span className="flex items-center">
        <Icon size={20} />
      </span>
      <p className="flex items-center text-sm">{text}</p>
    </div>
  );
};

export default ContactInfo;
