import Paper from "@/components/Paper";
import { Header, Text } from "@/components/typography/Typography";
export default function AboutMePage() {
    return (
        <Paper elevation={100}>
            <Header size="large" color="secondary">
                About Me
            </Header>
            <Text color="secondary">
                I am a software developer with a passion for web development. I have experience with React, Node.js, and MongoDB. I am currently working on a project that uses the MERN stack.
            </Text>
        </Paper>
    );
}
