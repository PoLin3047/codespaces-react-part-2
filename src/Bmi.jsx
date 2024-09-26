import { useRef, useState } from "react";

export default function Bmi() {
    const weightInput = useRef(null);
    const heightInput = useRef(null);
    const [bmiResult, setBmiResult] = useState("");

    function calculateBmi() {
        const weight = parseFloat(weightInput.current.value);
        const height = parseFloat(heightInput.current.value) / 100;

        if (weight > 0 && height > 0) {
            const bmi = weight / (height * height);
            let category = "";

            if (bmi < 18.5) {
                category = "Underweight";
            } else if (bmi < 24.9) {
                category = "Normal weight";
            } else if (bmi < 29.9) {
                category = "Overweight";
            } else {
                category = "Obese";
            }

            setBmiResult(`Your BMI is ${bmi.toFixed(2)}. Category: ${category}`);
        } else {
            setBmiResult("Please enter valid weight and height.");
        }
    }
    return (
        <div>
            <h2>BMI Calculator</h2>
            <div>
                <label>
                    Weight (kg):
                    <input ref={weightInput} type="number" />
                </label>
            </div>
            <div>
                <label>
                    Height (cm):
                    <input ref={heightInput} type="number" />
                </label>
            </div>
            <button onClick={calculateBmi}>Calculate</button>
            {bmiResult && <p>{bmiResult}</p>}
        </div>
    );
}
