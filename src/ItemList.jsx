import { useState } from "react";

function Item({ name, isPacked }) {
    return (
        <li>
            {name} {isPacked && "✓"}
        </li>
    );
}

export default function ItemsList() {
    const [keyword, setKeyword] = useState("");
    
    const items = [
        { name: "Sunglasses", isPacked: false },
        { name: "Swimming Suit", isPacked: true },
        { name: "Power Bank", isPacked: false },
        { name: "Towel", isPacked: true }
    ];
    
    const filteredList = items.filter(item =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder="Search items..."
            />
            <ul>
                {filteredList.map(item => (
                    <Item key={item.name} name={item.name} isPacked={item.isPacked} />
                ))}
            </ul>
        </div>
    );
}
