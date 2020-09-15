import React, { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RoutingDefinition } from 'modules/Core/types';

import HomeRouting from 'modules/Home/Routing';

const App: FC = () => {
  const appTitle: string = process.env.REACT_APP_NAME || 'Djordje Stojiljkovic';

  const routingDefs: RoutingDefinition[] = [
    HomeRouting,
  ];

  return (
    <BrowserRouter>
      <Helmet titleTemplate={`${appTitle} | %s`} defaultTitle={appTitle}>
        <meta charSet="utf-8" />
        <meta name="description" content="Djordje Stojiljkovic" />
      </Helmet>

      <Switch>
        <Route
          render={(): React.ReactNode => (
            <>
              <div className="landing">
                {
                  routingDefs.map(
                    (routingDef: RoutingDefinition): ReactNode => routingDef.map((route: ReactNode): ReactNode => route)
                  )
                }
              </div>
            </>
          )}
        />
      </Switch>

    </BrowserRouter>
  );
};

export default App;
