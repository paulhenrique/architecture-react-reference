import React from "react";
import { ConfigProvider } from "antd";
import "@fontsource/mulish"; // Defaults to weight 400
import "@fontsource/mulish/400.css"; // Specify weight
import "@fontsource/mulish/400-italic.css"; // Specify weight and style
interface AntdThemeProviderProps {
  children: React.ReactNode;
}

const AntdThemeProvider: React.FC<AntdThemeProviderProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#4F6C8D",
          borderRadius: 1,
          colorBgLayout: "white",
          colorBgBase: "#F6F4F4",
          fontFamily: "Mulish",
        },
        components: {
          Button: {
            paddingInline: "2rem",
            // paddingBlock: "1rem",
            controlHeight: 40,
          },
          Layout: {
            siderBg: "#F6F4F4",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdThemeProvider;
