/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutSmsEmailTicketImport } from './routes/_layout/smsEmailTicket'
import { Route as LayoutResheduleImport } from './routes/_layout/reshedule'
import { Route as LayoutDisplayTicketImport } from './routes/_layout/displayTicket'
import { Route as LayoutCancellationImport } from './routes/_layout/cancellation'
import { Route as LayoutAboutImport } from './routes/_layout/about'

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSmsEmailTicketRoute = LayoutSmsEmailTicketImport.update({
  path: '/smsEmailTicket',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutResheduleRoute = LayoutResheduleImport.update({
  path: '/reshedule',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutDisplayTicketRoute = LayoutDisplayTicketImport.update({
  path: '/displayTicket',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutCancellationRoute = LayoutCancellationImport.update({
  path: '/cancellation',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAboutRoute = LayoutAboutImport.update({
  path: '/about',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/about': {
      id: '/_layout/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof LayoutAboutImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/cancellation': {
      id: '/_layout/cancellation'
      path: '/cancellation'
      fullPath: '/cancellation'
      preLoaderRoute: typeof LayoutCancellationImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/displayTicket': {
      id: '/_layout/displayTicket'
      path: '/displayTicket'
      fullPath: '/displayTicket'
      preLoaderRoute: typeof LayoutDisplayTicketImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/reshedule': {
      id: '/_layout/reshedule'
      path: '/reshedule'
      fullPath: '/reshedule'
      preLoaderRoute: typeof LayoutResheduleImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/smsEmailTicket': {
      id: '/_layout/smsEmailTicket'
      path: '/smsEmailTicket'
      fullPath: '/smsEmailTicket'
      preLoaderRoute: typeof LayoutSmsEmailTicketImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  LayoutRoute: LayoutRoute.addChildren({
    LayoutAboutRoute,
    LayoutCancellationRoute,
    LayoutDisplayTicketRoute,
    LayoutResheduleRoute,
    LayoutSmsEmailTicketRoute,
    LayoutIndexRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/about",
        "/_layout/cancellation",
        "/_layout/displayTicket",
        "/_layout/reshedule",
        "/_layout/smsEmailTicket",
        "/_layout/"
      ]
    },
    "/_layout/about": {
      "filePath": "_layout/about.tsx",
      "parent": "/_layout"
    },
    "/_layout/cancellation": {
      "filePath": "_layout/cancellation.tsx",
      "parent": "/_layout"
    },
    "/_layout/displayTicket": {
      "filePath": "_layout/displayTicket.tsx",
      "parent": "/_layout"
    },
    "/_layout/reshedule": {
      "filePath": "_layout/reshedule.tsx",
      "parent": "/_layout"
    },
    "/_layout/smsEmailTicket": {
      "filePath": "_layout/smsEmailTicket.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
