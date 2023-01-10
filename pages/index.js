import React from 'react';
import Layout from '../components/Layout'
import { getAllDocs } from '~/lib/docs';
import Link from 'next/link'

const Home = ({ articles }) => {
  return (
    <Layout isMarkdown={false}>
      {articles.map(article => <div key={article.slug} className="text-2xl border text-blue-600 text-center mb-3 mt-3"><Link href={`/${article.slug}`}>{article.meta.title}</Link></div>)}
    </Layout>
  );
}

export async function getStaticProps() {
  const articles = getAllDocs();

  return {
    props: {
      articles
    }
  }
}

export default Home;
