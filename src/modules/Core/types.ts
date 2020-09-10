import { ReactNodeArray } from "react";

export interface LinkDefinition {
  to: string;
  label: string;
}

export interface NavigationSidebarLinkDefinition extends LinkDefinition {
  distanced?: boolean;
  large?: boolean;
}

export interface SocialLink {
  title: string;
  href: string;
}

export interface RouteNames {
  [key: string]: string;
}

export type RoutingDefinition = ReactNodeArray;
