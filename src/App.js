import { Box, Flex } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import { Join, Create, Main, Participate } from "./pages";

function App() {
  const [name, setName] = useState();
  return (
    <Flex direction="column" w="full" m="0 auto" minH="full" maxW="full" bg="primary">
      <Box flexGrow={1} w="full" alignSelf="center">
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route
                  path="/room/:id"
                  render={(props) => {
                    if (name) {
                      return <Main name={name} {...props} />;
                    } else {
                      return <Join />;
                    }
                  }}
                />
                <Route
                  path="/ready/:id"
                  render={(props) => {
                    return <Participate setName={setName} {...props} />;
                  }}
                />
                <Route exact path="/">
                  <Join />
                </Route>
                <Route exact path="/create">
                  <Create />
                </Route>
              </Switch>
            </AnimatePresence>
          )}
        />
      </Box>
    </Flex>
  );
}

export default App;
