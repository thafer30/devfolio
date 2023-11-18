import Header from '../components/header';
import Helmet from '../components/helmet';
import Layout from '../components/layout';
import React from 'react';
import { graphql } from 'gatsby';
// import moment from 'moment';

const classes = {
  wrapper: 'mt-16 blog-content',
  title: 'mt-16 text-4xl text-gray-900 font-bold',
  date: 'text-gray-600 font-light',
};

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Header metadata={data.site.siteMetadata} />
      <Helmet title={post.frontmatter.title} />
      <h1 className={classes.title}>{post.frontmatter.title}</h1>
      <p className={classes.date}>
        {/* Posted on {moment(post.frontmatter.date).format('MMMM D, YYYY')} */}
      </p>
      <div
        className={classes.wrapper}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        resume
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
