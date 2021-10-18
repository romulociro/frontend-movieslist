import React, { useState } from 'react';
import { Modal, Button } from 'antd';

interface IDetailsProps {
  sinopse: string;
  title: string;
}

const DetailsMovie: React.FC<IDetailsProps> = ({ sinopse, title }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Mais
      </Button>
      <Modal title={title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>{sinopse}</p>
      </Modal>
    </>
  );
};

export default DetailsMovie;
