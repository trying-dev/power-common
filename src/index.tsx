import {
  FullScreen as FullScreenDefault,
  FullScreenHandle
} from "react-full-screen"
import { SnackbarProvider } from "notistack"

export * from "react-full-screen"
export * from "notistack"

type Children = React.ReactNode | React.ReactNode[]

interface CommonProps {
  children: Children
}

interface FullScreenProps extends CommonProps {
  handle: FullScreenHandle
}

export const Provider = ({ children }: CommonProps) => {
  return (
    <SnackbarProvider
      preventDuplicate
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
    >
      {children}
    </SnackbarProvider>
  )
}

export const FullScreen = ({ children, handle }: FullScreenProps) => {
  return (
    <FullScreenDefault
      className="fullscreen"
      style={{
        display: "flex"
      }}
      handle={handle}
    >
      <SnackbarProvider
        preventDuplicate
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        {children}
      </SnackbarProvider>
    </FullScreenDefault>
  )
}
