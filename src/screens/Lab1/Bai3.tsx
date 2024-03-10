import React from 'react';
import WrapInput from '../../components/WrapInput';

const Lab1Bai3 = () => {
  return (
    <WrapInput
      title="Tên người dùng"
    //   placeholder="Nhập tên người dùng"
      error="Tên người dùng không hợp lệ"
      description="Tên người dùng phải dài ít nhất 6 ký tự"
    />
  );
};

export default Lab1Bai3;
