import React from 'react';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header1 } from '../components/styled';

const about = (props) =>{
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const social = data.site.siteMetadata.social;

  return (
    <Layout location={props.location} title={siteTitle} social={social}>
      <SEO title="about" />
        <Header1>최 준원 (Juunone)</Header1>

        <span role="img" aria-label="email">&#x1F4E7;</span> juunone@gmail.com <br />
        <span role="img" aria-label="github">&#x1F4BB;</span> https://github.com/juunone <br />
        <span role="img" aria-label="linkedin">&#x1F606;</span> https://www.linkedin.com/in/juunone/ <br />
        <span role="img" aria-label="blog">&#x1F310;</span> https://juunone.github.io/ <br />

        <Header1><span role="img" aria-label="introduction">&#x1F680;</span> 소개</Header1>

        안녕하세요.<br />
        클라이언트 웹 어플리케이션 개발자 최준원 입니다.<br />
        경험과 상호작용을 통해 고민하고 개발합니다.
        <ul>
          <li>다양한 웹 기술을 이용한 클라이언트 웹 어플리케이션을 만듭니다.</li>
          <li>새로운 기술을 공부하는 것을 좋아합니다.</li>
          <li>타인과의 커뮤니케이션 및 대화는 환영합니다.</li>
        </ul>
    </Layout>
  )
};

export default about;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          github
          linkedin
        }
      }
    }
  }
`