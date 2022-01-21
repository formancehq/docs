/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  cloud: [
    {
      id: "introduction",
      type: "doc",
    },
    {
      label: "Guides",
      type: "category",
      collapsible: false,
      collapsed: false,
      items: [
        "guides/how-to-send-data-to-my-ledger",
      ]
    }
  ]
};

module.exports = sidebars;
