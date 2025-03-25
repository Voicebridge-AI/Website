import { useState } from "react";
import { TextField, Button } from "@radix-ui/themes";
import { Row, Col } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { validateEmail } from "../shared-functions";
const NewsletterSignup = () => {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {

        if (!email) {
            toast.error("Please enter your email.");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Please enter a valid email.");
            return;
        }

        try {
            setLoading(true);
            const response = await fetch("https://voicebridgeai.ghost.io/members/api/v2/subscribe/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Ghost ${process.env.REACT_APP_GHOST_API_KEY}`
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                toast.success("Check your inbox to confirm your subscription!");
                setEmail(""); // Clear the input after successful subscription
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Something went wrong. Try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Row style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 0 }}>
            <Col xs={12} style={{ textAlign: 'center' }}>
                <TextField.Root
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ width: '100%' }}
                    disabled={loading}
                />
                <Button 
                    type="submit" 
                    style={{ marginTop: 10 }} 
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "Subscribing..." : "Subscribe"}
                </Button>
            </Col>
        </Row>
    );
};

export default NewsletterSignup;