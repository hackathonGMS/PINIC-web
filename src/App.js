import { Box, Flex } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { socket, SocektEventEnum, disconnect } from "./api/connect";
import db from "./components/Chatting/firbase";

import { Join, Create, Main, Participate, Explan } from "./pages";

function App() {
  const [name, setName] = useState();
  const [socketState, setSocketState] = useState(false);
  useEffect(() => {
    console.log("초기화 얍");
    disconnect();
    if (!socketState) {
      socket.on(SocektEventEnum.CONNECT_O, () => {
        setSocketState(true);
        console.log(socket);
      });
    }
  }, [socketState]);
  return (
    <Flex direction="column" w="full" m="0 auto" minH="full" maxW="full" bg="message">
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
                    return <Participate name={name} setName={setName} {...props} />;
                  }}
                />
                <Route exact path="/">
                  <Join />
                </Route>
                <Route exact path="/create">
                  <Create />
                </Route>
                <Route exact path="/explan">
                  <Explan />
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
