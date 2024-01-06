import React from "react";
import type { Preview } from "@storybook/react";

import GlobalStyles from '../src/styles/global';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
