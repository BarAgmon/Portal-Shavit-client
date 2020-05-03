import React, {useState} from 'react';
import {Input, Radio} from 'antd';
import styled from 'styled-components';

export default function RestoreDatabase({setDisableButton}) {
    const DONT_CHANGE_NAME=1;
    const CHANGE_NAME=2;
    const [value, setValue] = useState(DONT_CHANGE_NAME);
    const onChange = (selected) => {
        setValue(selected.target.value);
        if(selected.target.value == DONT_CHANGE_NAME){
            setDisableButton(false);
        } else { // value is CHANGE_NAME
            setDisableButton(true);
        }
    };
   
    const handleInput = () => {
        setDisableButton(false);
    };

    return (
        <DesignedRadioGroup defaultValue={value} onChange={onChange}>
            <DesignedRadio value={DONT_CHANGE_NAME}>Restore to the same database</DesignedRadio>
            <DesignedRadio value={CHANGE_NAME}>
                <span>Restore to a new database</span>
                {value == CHANGE_NAME ? <StyledDiv>
                                        <Input placeholder="Enter new db name" onChange={handleInput}/>
                                        </StyledDiv>: null}
                </DesignedRadio> 
        </DesignedRadioGroup>
    )
}

const DesignedRadioGroup = styled(Radio.Group)`
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
    width:100%; 
`;

const DesignedRadio = styled(Radio)`
    margin-top:1em;
    color:#fff;
`;

const StyledDiv = styled.div`
    width: 15em;
    margin-top:1em;
`;