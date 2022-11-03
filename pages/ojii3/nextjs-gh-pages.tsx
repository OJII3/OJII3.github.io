import Head from 'next/head'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import NavbarComponent from '../../components/navbar'
import Footer from '../../components/footer'
import { FadeUpRef } from '../../components/scroll-fade-ref'
import BackToTopButton from '../../components/back-to-top-button'

export default () => {
  return (
    <>
      <Head>
        <title>Next.js × GitHub Pages - OJII3</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent />

      <main>
        <Container fluid className='justify-content-center'>
          <Row className='p-5' ref={new FadeUpRef().ref}>
            <h1 className='text-center'>
              Next.js × Github Pages
            </h1>
          </Row>
          <Row ref={new FadeUpRef().ref}>
            <h2 className='text-center'>in TypeScript</h2>
          </Row>

          <Row className='p-5' ref={new FadeUpRef().ref}>
            <Col className='text-center'>
              <p>
                See code in{' '}
                <a href='https://github.com/ojii3/ojii3.github.io'>GitHub</a>
              </p>
            </Col>
          </Row>

          <Row className='p-5' ref={new FadeUpRef().ref}>
            <Col className='text-center'>
              <h2 className='text-danger'>The Sample is Exactly This Homepage!!</h2>
            </Col>
          </Row>

          <Row className='justify-content-md-center p-5' ref={new FadeUpRef().ref}>
            <Col sm={3}>
              <h2 className='text-center'>Feature</h2>
              <ListGroup variant='flush'>
                <ListGroup.Item><li>Client Side Routing</li></ListGroup.Item>
                <ListGroup.Item><li>Responsive Layout</li></ListGroup.Item>
                <ListGroup.Item><li>Fast Rendering</li></ListGroup.Item>
                <ListGroup.Item><li>Simple Animation</li></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row className='justify-content-md-center p-5' ref={new FadeUpRef().ref}>
            <Col sm={3}>
              <h2 className='text-center'>What I used</h2>
              <ListGroup variant='flush'>
                <ListGroup.Item><li>Node.js v16</li></ListGroup.Item>
                <ListGroup.Item><li>TypeScript v4.8.4</li></ListGroup.Item>
                <ListGroup.Item><li>Next.js v13</li></ListGroup.Item>
                <ListGroup.Item><li>react-bootstrap v2.5.0 (Bootstrap 5)</li></ListGroup.Item>
                <ListGroup.Item><li>GitHub Pages</li></ListGroup.Item>
                <ListGroup.Item><li>GitHub Actions</li></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <Row className='justify-content-md-center p-5' ref={new FadeUpRef().ref}>
            <Col sm={6}>
              <h2 className='text-center'>Brief</h2>
              <p className='brief'>
                Next.jsで作成したものを静的サイトとしてエクスポートすることで、GitHub Pagesに公開しています。
                また、GitHub Actionsを用いて、エクスポートから公開までの流れを自動化しています。
                BootstrapのGrid Systemsにより、様々な画面サイズに対応できるほか、
                React Hook を用いることで、ユーザーの操作に応じてアニメーションを表示しています。
              </p>
            </Col>
          </Row>

        </Container>
      </main>

      <Footer />
      <BackToTopButton />
    </>
  )
}