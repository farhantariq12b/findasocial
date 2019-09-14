import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>Find a Social</title>
      <link rel="stylesheet" href="/static/assets/css/main.css"/>
    </Head>
    <div>
      {props.children}
    </div>
  </div>
);

export default Layout;