import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/news/Main";
import { server } from "../components/config/index";

export default function Home({ news, calendar, calendar_mobile }) {
  const description = "TDA Rotaļa ir deju kolektīvs ar vēsturi";
  const newsArray = [...news.news];
  const calendarArray = [...calendar];
  const calendarMobileArray = [...calendar_mobile];

  return (
    <Fragment>
      <Head>
        <title>TDA Rotaļa</title>
        <meta property="og:title" content="TDA Rotaļa" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="referrer" content="no-referrer-when-downgrade" />
      </Head>

      <main>
        <Header />
        <Main
          news={newsArray}
          calendar={calendarArray}
          calendarMobile={calendarMobileArray}
        />
        {/* <Footer /> */}
      </main>
    </Fragment>
  );
}

export async function getServerSideProps() {
  const resNews = await fetch(`${server}/api/news`);
  const dataNews = await resNews.json();

  const resCalendar = await fetch(`${server}/api/kalendars`);
  const dataCalendar = await resCalendar.json();

  const resCalendarMobile = await fetch(`${server}/api/kalendars_mobile`);
  const dataCalendarMobile = await resCalendarMobile.json();

  return {
    props: {
      news: dataNews,
      calendar: dataCalendar,
      calendar_mobile: dataCalendarMobile,
    },
  };
}
