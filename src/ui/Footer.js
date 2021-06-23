import { Box, Text } from "theme-ui"

const Footer = (props) => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Created by Arkadiusz Czerwiński
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Follow me on <a href="https://github.com/arkadiusz-czerwinski">Github</a>
    </Text>
  </Box>
)

export default Footer
