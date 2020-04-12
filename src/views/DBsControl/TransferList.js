import React, {useState} from 'react';
import {Transfer} from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
export default function TransferList({data, leftTitle, rightTitle}) {
    const [targetKeys, setTargetKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);

    // Called when move button (> or <) clicked
    const handleChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
    };

    // Called whan select button clicked
    const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    return (
        <div>
        <StyledTransfer
            dataSource={data}
            titles={[leftTitle, rightTitle]}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={handleChange}
            onSelectChange={handleSelectChange}
            render={item => item.title}
        />
        </div>
    );
}

const StyledTransfer = styled(Transfer)`
    .ant-transfer-list-content {
        background: white;
    }
    .ant-transfer-list-body {
        background: white;
    }
`;

TransferList.propTypes = {
    data:PropTypes.array.isRequired,
    leftTitle:PropTypes.string.isRequired,
    rightTitle:PropTypes.string.isRequired
};