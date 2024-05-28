import React from "react";

import { KeycloakProvider, useKeycloak } from "keycloak-react-web";
import Keycloak from "keycloak-js";
import { useEffect } from "react";
import { Spin, Typography } from "antd";
import { css } from "@emotion/css";

const disableKeycloak = true;

const authInstance = new Keycloak("/keycloak.json");

const Private = ({ children }: { children: React.ReactNode }) => {
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    if (initialized) {
      if (!keycloak.authenticated) {
        keycloak.login();
      }
    }
  }, [initialized]);

  if (!initialized || !keycloak.authenticated) {
    return (
      <div
        className={css({
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        })}
      >
        <Spin spinning size="large" />
        <Typography.Text>Carregando aplicação</Typography.Text>
      </div>
    );
  }

  return children;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  if (disableKeycloak) {
    return children;
  }
  return (
    <KeycloakProvider
      client={authInstance as any}
      initOptions={{
        onLoad: "login-required",
        silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
        pkceMethod: "S256",
      }}
    >
      <Private>{children}</Private>
    </KeycloakProvider>
  );
};

export default AuthProvider;
