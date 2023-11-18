import { graphql, useStaticQuery } from 'gatsby';

import PropTypes from 'prop-types';
import React from 'react';

const Head = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <title>{finalTitle}</title>
      <meta name={`description`} content={metaDescription} />
      <meta property={`og:title`} content={finalTitle} />
      <meta property={`og:description`} content={metaDescription} />
      <meta property={`og:type`} content={`website`} />
      <meta property={`twitter:card`} content={`summary`} />
      <meta property={`twitter:creator`} content={site.siteMetadata?.author || ``} />
      <meta property={`twitter:title`} content={finalTitle} />
      <meta property={`twitter:description`} content={metaDescription} />
    </>
  );
};

Head.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default Head;
