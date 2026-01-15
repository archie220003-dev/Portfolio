"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Fix for React 19 / Next-themes compatibility issues if any, usually straight forward
export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props} themes={['light', 'dark']}>{children}</NextThemesProvider>;
}
