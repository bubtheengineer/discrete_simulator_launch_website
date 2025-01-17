import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_lcncLDwk2",
  client_id: "u6ui0mp0go2ue7dsam1j9bpon",
  redirect_uri: "https://us-east-1lcncldwk2.auth.us-east-1.amazoncognito.com/oauth2/idpresponse",
  response_type: "code",
  scope: "openid",
};

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
