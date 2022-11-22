import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import { ProjectsProvider } from '../context/project.context'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProjectsProvider>
        <Header/>
        <Component {...pageProps} />
      </ProjectsProvider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
