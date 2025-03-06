import { useState } from 'react';
import styled from 'styled-components';




const CalculatorContainer = styled.div`
    width: 80%;
    background-color: #E4C2F2;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    text-align: center;
    margin: 40px auto;
    border: 3px solid #9450F2;
`;

const Title = styled.h3`
    font-size: calc(3px + 2vw);
    color: #483C59;
    margin-bottom: 10px;
`;

const Label = styled.span`
    font-size: calc(2px + 2vw);
    font-weight: bold;
    color: #483C59;
`;

const Input = styled.input`
    width: 90%;
    padding: 10px;
    margin: 10px 0;
    font-size: 1.2em;
    border: 2px solid #9450F2;
    border-radius: 10px;
    text-align: center;
`;

const Button = styled.button`
    background-color: #9450F2;
    color: white;
    padding: 10px 15px;
    border-radius: 10px;
    transition: 0.3s;
    margin: 5px;

    &:hover {
        background-color: #7a3fcf;
    }
`;

const Output = styled.h1<{ isNegative: boolean }>`
    margin-top: 15px;
    background-color: white;
    border-radius: 10px;
    display: inline-block;
    width: 80%;
    border: 2px solid #9450F2;
    color: ${(props) => (props.isNegative ? '#FF0000' : '#483C59')};
    padding: 10px;
`;

const Calculator = () => {
    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');
    const [output, setOutput] = useState<string>('');

    const handleAdd = () => {
        const result = Number(num1) + Number(num2);
        setOutput(result.toString());
    };

    const handleSubtract = () => {
        const result = Number(num1) - Number(num2);
        setOutput(result.toString());
    };

    const handleDivide = () => {
        const result = Number(num1) / Number(num2);
        setOutput(result.toString());
    };

    const handleMultiply = () => {
        const result = Number(num1) * Number(num2);
        setOutput(result.toString());
    };

    const handlePower = () => {
        let result = 1;
        const base = Number(num1);
        const exponent = Number(num2);

        if (exponent >= 0) {
            for (let i = 0; i < exponent; i++) {
                result *= base;
            }
        } else {
            for (let i = 0; i < -exponent; i++) {
                result *= base;
            }
            result = 1 / result;
        }

        setOutput(result.toString());
    };

    const handleClear = () => {
        setNum1('');
        setNum2('');
        setOutput('');
    };

    return (
        <CalculatorContainer>
            <Title>Special Calculator</Title>
            <Label>First Number:</Label>
            <Input
                id="first-number"
                type="text"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <br />
            <Label>Second Number:</Label>
            <Input
                id="second-number"
                type="text"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <br />
            <Button onClick={handleAdd}>+</Button>
            <Button onClick={handleSubtract}>-</Button>
            <Button onClick={handleDivide}>/</Button>
            <Button onClick={handleMultiply}>*</Button>
            <Button onClick={handlePower}>**</Button>
            <Button onClick={handleClear}>Clear All</Button>
            <Output isNegative={Number(output) < 0}>{output}</Output>
        </CalculatorContainer>
    );
};

export default Calculator;