import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { rhythm, scale } from "../utils/typography";
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Paragraph, SocialLink, Wrapper } from './styled'

class Layout extends React.Component {
  render() {
    const { location, title, children, social } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    // Define what props.theme will look like
    const theme = {
      fontFamily: "'Nanum Gothic', sans-serif;"
    };

    const GlobalStyle = createGlobalStyle`
      body {
        font-family: ${props => props.theme.fontFamily};
      }

      ul{
        margin-top:1em;
        list-style-position:initial;
        padding-left:1em;
      }
    `

    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <GlobalStyle />
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            <Paragraph>
              <SocialLink as="a" href={`https://github.com/${social.github}`} title="Github" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </SocialLink>
              <SocialLink as="a" href={`https://www.linkedin.com/in/${social.linkedin}`} title="Linkedin" tSocialLinkrget="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </SocialLink>
              <SocialLink as="a" href={`https://twitter.com/${social.twitter}`} title="Twitter" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </SocialLink>
            </Paragraph>
            <Paragraph>
              <Link style={{ boxShadow: `none` }} to='/about'>
                About
              </Link>
            </Paragraph>
            <Paragraph>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a><br/>
              Was made with &#x1F49A; by 최 준원
            </Paragraph>
          </footer>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default Layout
