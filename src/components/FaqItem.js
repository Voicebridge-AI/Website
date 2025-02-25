import { CaretUp, CaretDown } from "@phosphor-icons/react";
import { Card, Text } from "@radix-ui/themes";
import { useState } from "react";

export default function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card style={{ padding: 20, marginBottom: 20 }}>
            <div 
                onClick={() => setIsOpen(!isOpen)} 
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
                <h4 style={{ margin: 0 }}>{question}</h4>
                {isOpen ? <CaretUp /> : <CaretDown />}
            </div>
            {isOpen && (
                <Text size="3" color="gray" as="div" style={{ marginTop: 10 }}>
                    {answer}
                </Text>
            )}
        </Card>
    )
}