import { Card, Text, Button, Heading } from "@radix-ui/themes";
import { Image } from "react-bootstrap";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function PostCard({ title, excerpt, image, url }) {

    return (
        <Card style={{ padding: 10, marginBottom: 20 }}>
            { image && <Image src={image} alt={title} style={{ width: '100%', height: 200, objectFit: 'cover' }} /> }
            <Heading size="3" as="div" style={{ marginTop: 10, cursor: 'pointer' }} onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}>{title}</Heading>
            <Text size="2" color="gray" as="div" style={{ marginTop: 10 }}>{excerpt ? excerpt.substring(0, 100) + '...' : 'No excerpt available'}</Text>
            <Text size="2" as="div" style={{ marginTop: 10, cursor: 'pointer' }} onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}>Read more <ArrowUpRight size={16} weight="bold" /></Text>
        </Card>
    )
}