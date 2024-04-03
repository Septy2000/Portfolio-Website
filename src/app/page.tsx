import Paper from "@/components/Paper";
import { Header, Text } from "@/components/typography/Typography";
export default function AboutMePage() {
    return (
        <Paper elevation={3}>
            <Header size="large" color="secondary">
                About Me
            </Header>
            <Text color="secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>
        </Paper>
    );
}
